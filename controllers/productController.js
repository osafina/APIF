const DB = require('../database/models');
const Op=DB.Sequelize.Op;

module.exports = {
    list:(req,res) => {
        DB.Product
        .findAll()
        .then(products => {
            return res.status(200).json({
                total: products.length,
                data:products,
                status:200
            })
        })
    },

    show: (req,res) => {
        DB.Product
        .findByPk(req.params.id)
        .then(products => {
            return res.status(200).json({
                data:products,
                status:200
            })
        })
    },

    store: (req,res) => {
        DB.Product
        .create(req.body)
        .then(products => {
            return res.status(200).json({
                data:products,
                status:200,
                created:'ok'
            })
        })
    },

    delete:(req,res) => {
        DB.Product
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(response => {
            return res.json(response)
        })
    },

    search: (req,res) => {
        DB.Product
        .findAll({
            where:{
                name: { [ Op.like ] : '%' + req.query.keyword + '%'}
            }
        })
        .then(products => {
            return res.status(200).json(products);
        })

    }

}