const DB = require('../database/models');
const User = require('../database/models/User');
const Op=DB.Sequelize.Op;

module.exports = {
    list:(req,res) => {
        DB.User
        .findAll()
        .then(users => {
            return res.status(200).json({
                total: users.length,
                data:users,
                status:200
            })
        })
    },

    show: (req,res) => {
        DB.User
        .findByPk(req.params.id)
        .then(users => {
            return res.status(200).json({
                data:users,
                status:200
            })
        })
    },

    store: (req,res) => {
        DB.User
        .create(req.body)
        .then(users => {
            return res.status(200).json({
                data:users,
                status:200,
                created:'ok'
            })
        })
    },

    delete:(req,res) => {
        DB.User
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
        DB.User
        .findAll({
            where:{
                name: { [ Op.like ] : '%' + req.query.keyword + '%'}
            }
        })
        .then(users => {
            return res.status(200).json(users);
        })

    }

}