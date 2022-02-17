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