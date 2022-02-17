const sequelize = require('./seed')

module.exports = {
    getUsers: (req, res) => {
        sequelize.query(`SELECT * FROM users;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getUserSub: (req, res) => {
        sequelize.query(`
        SELECT firstName, lastName, email_address FROM users,
        JOIN userSub ON userSub.user_id
        `)
    },

    getForsale_bowls: async(req,res) => {
        sequelize.query(`SELECT * FROM forsale_bowls`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getCustom_Wood_bowls: async(req, res) => {
        sequelize.query(`SELECT * FROM custom_wood_bowls`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getHerbal_tinctures: async(req, res) => {
        sequelize.query(`SELECT * FROM herbal_tinctures`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getFlowers: async(req, res) => {
        sequelize.query(`SELECT * FROM flowers`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }
}












// getTeachers: (req, res) => {
//     sequelize.query(`SELECT * FROM teachers;`)
//     .then(dbRes => res.status(200).send(dbRes[0]))
//     .catch(err => console.log(err))
// },

// createTeacher: (req, res) => {
//     let {name} = req.body
//     sequelize.query(`
//     INSERT INTO teachers (name)
//     VALUES ('${name}')
//     ;`)
//     .then(dbRes => res.status(200).send(dbRes[0]))
//     .catch(err => console.log(err))
// },

// getFavorites: (req, res) => {
//     sequelize.query(`SELECT * FROM favorites;`)
//     .then(dbRes => res.status(200).send(dbRes[0]))
//     .catch(err => console.log(err))
// },

// createFavorites: (req, res) => {
//     let {teachers_id} = req.body
//     sequelize.query(`
//     INSERT INTO teachers (teachers_id)
//     VALUES ('${teachers_id}')
//     ;`)
//     .then(dbRes => res.status(200).send(dbRes[0]))
//     .catch(err => console.log(err))
// }

// createEmailSubscriber: (req, res) => {
//     let {firstName, lastName, email_address} = req.body
//     sequelize.query(`
//     INSERT INTO users (firstName, lastName, email_address)
//     VALUES ('${firstName}', '${lastName}', '${email_address}')
//     ;`)
//     .then(dbRes => res.status(200).send(dbRes[0]))
//     .catch(err => console.log(err))
// }

// createUser: (req, res) => {
    //     let {firstName, lastName, email_address, password} = req.body
    //     sequelize.query(`
    //     INSERT INTO users (firstName, lastName, email_address, password)
    //     VALUES ('${firstName}', '${lastName}', '${email_address}', '${password})
    //     ;`)
    //     .then(dbRes => res.status(200).send(dbRes[0]))
    //     .catch(err => console.log(err))
    // },

// CREATE TABLE appointments(
//     user_id REFERENCES users(user_id),
//     service REFERENCES 
//     upcoming_appointments TIMESTAMP,
//     past_appointments TIMESTAMP
// )