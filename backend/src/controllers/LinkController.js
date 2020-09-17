const connection = require('../database/connection');
const turl =  require('turl');

module.exports = {
    async index(request, response) {
        const urlSave = await connection('link').select('*');

        return response.json(urlSave);
    },

    async create(request, response) {
        const { hits, url} = request.body;
        const shortUrl = await turl.shorten(url).then((res) => {
            return res;
          }).catch((err) => {
            console.log(err);
          });
        //const id = crypto.randomBytes(4).toString('HEX');
        const id = parseInt(Math.random() * 100000);

        const res = await connection('link').insert({
            id,
            hits,
            url,
            shortUrl
        })

        return response.json();
    }

}