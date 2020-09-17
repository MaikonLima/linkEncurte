const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(req, res){
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },
    async create(req, res){
        const { name, email, wpp, city, uf} = req.body;

        const id = crypto.randomInt(4).toString('HEX');

        await connection('ongs').insert({
        id,
        name,
        email,
        wpp,
        city,
        uf,
    })

    return res.json({ id });
    }
};