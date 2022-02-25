require('dotenv').config()

const CONNECTION_STRING = process.env.CONNECTION_STRING

const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
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

     
        CREATE TABLE forsale_bowls(
            forsale_id SERIAL PRIMARY KEY,
            cart_id INTEGER REFERENCES user_cart(cart_id)
        ), 

        CREATE TABLE cart(
            cart_id SERIAL PRIMARY KEY,
            user_id REFERENCES users(user_id),

        )

        CREATE TABLE custom_wood_bowls(
            custom_id SERIAL PRIMARY KEY,
            cart_id INTEGER REFERENCES user_cart(cart_id),
            size VARCHAR(100) NOT NULL,
            species VARCHAR(100) NOT NULL,
            notes VARCHAR(1000) NULL
            );

        INSERT INTO custom_wood_bowls(size, species),
        VALUES 
        (small, cherry), 
        (small, Walnut),
        (small, Cherry),
        (small, Osage Orange),
        (small, Red Cedar, 20),
        (small, Maple, 20),
        (medium, Walnut, 35),
        (medium, Cherry, 35),
        (medium, Osage Orange, 35),
        (medium, Red Cedar, 35),
        (medium, Maple, 35)
        (large, Walnut, 50),
        (large, Cherry, 50),
        (large, Osage Orange, 50),
        (large, Red Cedar, 50),
        (large, Maple, 50);

        CREATE TABLE herbal_tinctures(
            herbal_id SERIAL PRIMARY KEY,
            cart_id INTEGER REFERENCES user_cart(cart_id),
            size VARCHAR(100) NOT NULL,
            tincture_choice VARCHAR(100) NOT NULL,
            price VARCHAR(100) NOT NULL
            );

            INSERT INTO herbal_tinctures(size, tincture_choice, price),
            VALUES 
            (2oz, Dandelion, 12), 
            (2oz, Licorice, 12),
            (2oz, Chammomile, 12),
            (2oz, Chaga, 15),
            (4oz, Dandelion, 20),
            (4oz, Licorice, 20),
            (4oz, Chammomile, 20),
            (4oz, Chaga, 25),
            (6oz, Dandelion, 33),
            (60,z Licorice, 33),
            (6oz, Chammomile, 33),
            (6oz, Chaga, 45);


            CREATE TABLE flowers(
            flower_id SERIAL PRIMARY KEY,
            cart_id INTEGER REFERENCES user_cart(cart_id),
            size VARCHAR(100) NOT NULL,
            species VARCHAR(100) NOT NULL,
            price VARCHAR(100) NOT NULL,
            notes VARCHAR(1000) NULL,
            appointments VARCHAR(1000) NULL
            );

            INSERT INTO flowers(size, flower, price)
            VALUES
            (small, zinnia, 10),
            (small, baby's breath, 10);
            
          

        

       

     


    `).then(() => {
        console.log('Successfully Registered, please login to continue!')
        res.sendStatus(200)
    }).catch(err => console.log('error seeding DB', err))
}

}