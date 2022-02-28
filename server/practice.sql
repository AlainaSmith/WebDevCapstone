CREATE TABLE users (
    user_id SERIAL PRIMARY KEY, 
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email_address VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE subscribers (
  subscribe_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id)
);

CREATE TABLE wood_bowls(
product_id SERIAL PRIMARY KEY,
cart_id INTEGER REFERENCES user_cart(cart_id),
size VARCHAR(100) NOT NULL,
species VARCHAR(100) NOT NULL,
price VARCHAR(100) NOT NULL,
notes VARCHAR(1000) NULL
);


CREATE TABLE herbal_tinctures(
product_id SERIAL PRIMARY KEY,
cart_id INTEGER REFERENCES user_cart(cart_id),
size VARCHAR(100) NOT NULL,
tincture_choice VARCHAR(100) NOT NULL,
price VARCHAR(100) NOT NULL
);

CREATE TABLE flowers(
product_id SERIAL PRIMARY KEY,
cart_id INTEGER REFERENCES user_cart(cart_id),
size VARCHAR(100) NOT NULL,
species VARCHAR(100) NOT NULL,
price VARCHAR(100) NOT NULL,
notes VARCHAR(1000) NULL,
appointments VARCHAR(1000) NULL
);

CREATE TABLE user_cart (
cart_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(user_id)
);



SECOND SQL TABLE



CREATE TABLE users (
    user_id SERIAL PRIMARY KEY, 
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email_address VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE subscribers (
  subscribe_id SERIAL PRIMARY KEY,
  firstname VARCHAR(20) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  email_address VARCHAR(100) NOT NULL,
);

CREATE TABLE cart(
cart_id SERIAL PRIMARY KEY,
user_id REFERENCES users(user_id)
);

CREATE TABLE cart_items(
cart_items_id SERIAL PRIMARY KEY,
cart_id REFERENCES cart(cart_id),
product_id REFERENCES products(product_id),

);


CREATE TABLE products(
product_id SERIAL PRIMARY KEY,
product_name VARCHAR(50) NOT NULL,
product_size VARCHAR(50) NOT NULL,
price INTEGER NOT NULL
product_type REFERENCES product_type(product_type_id)
)

CREATE TABLE product_type(
product_type_id SERIAL PRIMARY KEY
);



INSERT INTO concerts (concert_id, band_name, location, date)
VALUES (4, 'Marcus King Band', 'The Intersection', '11/17/19');

INSERT INTO concerts (concert_id, band_name, location, date)
VALUES (5, 'Dead & Company', 'DTE', '7/16/16');

SELECT * FROM concerts
WHERE (band_name = 'The Intersection'
OR location = 'The Intersection'
OR date = 'The Intersection');

INSERT INTO concerts(concert_id, band_name, location, date)
VALUES ()





ALTER TABLE users
ADD COLUMN proceeds VARCHAR(100) NOT NULL DEFAULT '0'

ALTER TABLE users
DROP COLUMN rewards

ALTER TABLE users
ADD COLUMN rewards VARCHAR(100) NOT NULL DEFAULT '0'

UPDATE users
SET rewards = '50 points'
WHERE user_id = 8

UPDATE users
SET rewards = '250 points'
WHERE user_id = 19

UPDATE users
SET rewards = '10 points'
WHERE user_id = 16;

ALTER TABLE users
DROP COLUMN classes

ALTER TABLE users
ADD COLUMN classes VARCHAR(100) NOT NULL DEFAULT 'No classes'

UPDATE users
SET classes = 'Wood Bowl Turning on March 21'
WHERE user_id = 16;

UPDATE users
SET classes = 'Wood Bowl Turning on March 21'
WHERE user_id = 19

ALTER TABLE users
ADD COLUMN purchases VARCHAR(100) NOT NULL DEFAULT '0'

UPDATE users
SET purchases = 'Small Walnut Bowl, 2oz Chaga Tincture'
WHERE user_id = 16;

UPDATE users
SET purchases = 'Small Walnut Bowl'
WHERE user_id = 19

ALTER TABLE users
DROP COLUMN purchases

CREATE TABLE subscribe(
            subscribe_id SERIAL PRIMARY KEY,
            firstName VARCHAR(100),
            lastName VARCHAR(100),
            email_address VARCHAR(100) 
        );

INSERT INTO subscribe 
        (firstName, lastName, email_address)
        VALUES ('${firstName}', '${lastName}', '${email_address}');


CREATE TABLE cart (
            cart_id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(user_id),
            product_id INT REFERENCES products(product_id) 
        );

        CREATE TABLE products(
            product_id SERIAL PRIMARY KEY,
            product_name VARCHAR(100),
            product_description VARCHAR(1000)
        );

INSERT INTO products(
product_name, product_description)
VALUES('Small Walnut Bowl', 'Just a lil guy!')

INSERT INTO products(
product_name, product_description)
VALUES('Small Padauk Bowl', 'Lovely colors')