const connection = require('../database/connection');
const turl =  require('turl');

module.exports = {
    async index(request, response) {
        //const urlSave = await connection('link').select('*');
        const res = await connection('link').select('*').orderBy('id','asc').groupBy('shortUrl');
        return response.json(res);
    },

    async create(request, response) {
        const {url} = request.body;
        const shortUrl = await turl.shorten(url).then((res) => {
            return res;}).catch((err) => {
            console.log(err);});
        //const id = crypto.randomBytes(4).toString('HEX');
        const id = parseInt(Math.random() * 100000);
        const count = await connection('link').where('url',url).count();
        const hits = Object.values(count[0]);
        var result = null;
        if(count){
            //result= await connection('link').where('url',url).update('hits',hits);
            await connection('link').update({
                hits,
            }).where('shortUrl',shortUrl);
            result=  await connection('link').insert({
                id,
                hits,
                url,
                shortUrl
            });
        }
        else{
            result = await connection('link').insert({
                id,
                hits,
                url,
                shortUrl
            });
        }

        // const res = await connection('link').select('*').groupBy('shortUrl');
        // console.log(res);

        return response.json(result);
    }

}