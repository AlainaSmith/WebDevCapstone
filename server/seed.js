require('dotenv').config()

const {DATABASE_URL} = process.env

const Sequelize = require('sequelize')

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
    }
})

module.exports = {


seed: (req, res) => {
    sequelize.query(`
        drop table if exists users;
        drop table if exists emailSub;
        CREATE TABLE users (
            user_id SERIAL PRIMARY KEY, 
            firstName VARCHAR(50),
            lastName varchar(50),
            email_address VARCHAR(100),
            password VARCHAR(100),
            rewards VARCHAR(100),
            classes VARCHAR(100),
            purchases VARCHAR(500)
        );
     
        CREATE TABLE welcomeUser(
            welcomeUser_id SERIAL PRIMARY KEY,
            reward_status VARCHAR(100),
            classes VARCHAR(500),
            purchases VARCHAR(500),
            proceeds VARCHAR(100)
        );
        

        CREATE TABLE subscribe(
            subscribe_id SERIAL PRIMARY KEY,
            firstName VARCHAR(100),
            lastName VARCHAR(100),
            email_address VARCHAR(100) 
        );

        INSERT INTO users 
        (firstName, lastName, email_address)
        VALUES ('${firstName}', '${lastName}', '${email_address}');


        INSERT INTO users 
        (firstName, lastName, email_address, password)
        VALUES ('Alaina', 'Smith', 'as@gmail.com', 'Hello123');

     
        CREATE TABLE cart(
            cart_id SERIAL PRIMARY KEY,
            user_id REFERENCES users(user_id),
            product_id REFERENCES products(product_id)
        );

        CREATE TABLE products(
            product_id SERIAL PRIMARY KEY,
            product_name VARCHAR(100) NOT NULL,
            product_description VARCHAR(1000) NOT NULL,
        );

    `).then(() => {
        console.log('Successfully Registered, please login to continue!')
        res.sendStatus(200)
    }).catch(err => console.log('error seeding DB', err))
}

}