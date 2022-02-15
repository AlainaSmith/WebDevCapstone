const sequelize = require('./seed')

module.exports = {
    getUsers: (req, res) => {
        sequelize.query(`SELECT * FROM users;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    createUser: (req, res) => {
        let {firstName, lastName, email_address, password} = req.body
        sequelize.query(`
        INSERT INTO users (firstName, lastName, email_address, password)
        VALUES ('${firstName}', '${lastName}', '${email_address}', '${password})
        ;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },









    createEmailSubscriber: (req, res) => {
        let {firstName, lastName, email_address} = req.body
        sequelize.query(`
        INSERT INTO users (firstName, lastName, email_address)
        VALUES ('${firstName}', '${lastName}', '${email_address}')
        ;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
},

getTeachers: (req, res) => {
    sequelize.query(`SELECT * FROM teachers;`)
    .then(dbRes => res.status(200).send(dbRes[0]))
    .catch(err => console.log(err))
},

createTeacher: (req, res) => {
    let {name} = req.body
    sequelize.query(`
    INSERT INTO teachers (name)
    VALUES ('${name}')
    ;`)
    .then(dbRes => res.status(200).send(dbRes[0]))
    .catch(err => console.log(err))
},

getFavorites: (req, res) => {
    sequelize.query(`SELECT * FROM favorites;`)
    .then(dbRes => res.status(200).send(dbRes[0]))
    .catch(err => console.log(err))
},

createFavorites: (req, res) => {
    let {teachers_id} = req.body
    sequelize.query(`
    INSERT INTO teachers (teachers_id)
    VALUES ('${teachers_id}')
    ;`)
    .then(dbRes => res.status(200).send(dbRes[0]))
    .catch(err => console.log(err))
}


}