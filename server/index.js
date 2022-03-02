const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
require("dotenv").config()
const PORT = process.env.PORT || 3500 ;
const Sequelize = require('sequelize')
// const {connect} = require('testConnection')
const bcrypt = require('bcrypt')
const {seed} = require("./seed") 
const {DATABASE_URL} = process.env

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
          ssl: {
              rejectUnauthorized: false
          }
  }
})


//Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../build")))

//Put endpoints here
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});


app.post('/seed', seed) 
console.log(seed)


app.post('/register', async (req, res) => {
  console.log('hit register endpoint')
  const {firstName, lastName, email_address, password} = req.body
  const checkUser = await sequelize.query(`
  SELECT * FROM users WHERE email_address = '${email_address}'
  `)
  // console.log(checkUser[1].rowCount)
  if(checkUser[1].rowCount !== 0) {
    res.status(500).send('Email Address already Exists')
  } else {
    const salt = bcrypt.genSaltSync(10)
    const passwordHash = bcrypt.hashSync(password, salt)
    await sequelize.query(`
    INSERT INTO users(firstName, lastName, email_address, password)
    VALUES (
      '${firstName}',
      '${lastName}',
      '${email_address}',
      '${passwordHash}'
    )
    `)
    const userInfo = await sequelize.query(`
      SELECT user_id, firstName, lastName, email_address FROM users WHERE email_address = '${email_address}'
    `)
    res.status(200).send(userInfo)
  }
})

app.post('/login', async (req, res) => {
  const {emailAddress, password} = req.body
  const validUser = await sequelize.query(`
    SELECT * FROM users WHERE 
    email_address = '${emailAddress}' 
  `).catch((err) => console.log(err))

  if(!validUser[0][0]){
    res.status(401).send('email address is incorrect')
  }
  // if(validUser[0][0].passwordrowCount === 1) 
  console.log(validUser)
    if (bcrypt.compareSync(password, validUser[0][0].password)) {
      let object = {
        firstName: validUser[0][0].firstname,
        id: validUser[0][0].user_id,
        email_address: validUser[0][0].email_address,
        rewards: validUser[0][0].rewards,
        classes: validUser[0][0].classes,
        purchases: validUser[0][0].purchases,
      }
      res.status(200).send(object)
   
    } else {
      res.status(401).send({message:'Info is Incorrect'})
    }
   
})

app.post('/CustomWoodBowls', async(req,res) => {
  const {size, species} = req.body
  const bowlCart = await sequelize.query(`
  SELECT * FROM custom_wood_bowls WHERE
  size = '${size}'
  species = '${species}`)
  .catch((err)=>console.log(err))
})



app.post('/SmallWalnutBowl', async(req,res) => {
  
})


app.get('/welcome', async(req,res) => {
  const {firstName} = req.body
  const loginUser = await sequelize.query(`
    SELECT * FROM users WHERE 
    firstName = '${firstName}' 
  `).catch((err) => console.log(err))
})

app.get('/welcome', async(req,res) => {
  const {rewards} = req.body
  const loginUser = await sequelize.query(`
    SELECT * FROM users WHERE 
    rewards = '${rewards}' 
  `).catch((err) => console.log(err))
})

app.get('/welcome', async(req,res) => {
  const {classes} = req.body
  const loginUser = await sequelize.query(`
    SELECT * FROM users WHERE 
    classes = '${classes}' 
  `).catch((err) => console.log(err))
})

app.get('/welcome', async(req,res) => {
  const {purchases} = req.body
  const loginUser = await sequelize.query(`
    SELECT * FROM users WHERE 
    purchases = '${purchases}' 
  `).catch((err) => console.log(err))
})

app.get('/api/allProducts', async (req, res) => {
  let products = await sequelize.query(`
  SELECT * FROM products
  `)
  res.status(200).send(products[0])
})

app.get('/api/userCart/:id', async (req, res) => {
  const {id} = req.params
  const myCart = await sequelize.query(`
    SELECT c.cart_id, p.product_name, p.product_description, p.product_price, p.product_total FROM cart c
    JOIN products p
    ON c.product_id = p.product_id
    WHERE c.user_id = ${id}
  `)
  res.status(200).send(myCart[0])
})


app.get('/api/SmallWalnutBowl', async (req, res) => {
  let products = await sequelize.query(`
  SELECT * FROM products
  WHERE product_name='Small Walnut Bowl'
  `)
  res.status(200).send(products[0])
})

app.get('/api/WoodBowlTurningClass', async (req, res) => {
  let products = await sequelize.query(`
  SELECT * FROM products
  WHERE product_name='Wood Bowl Turning Class'
  `)
  res.status(200).send(products[0])
})




app.post('/api/addToCart', async (req, res) => {
  const {user_ID, product_ID} = req.body
  await sequelize.query(`
    INSERT INTO cart (user_id, product_id)
    VALUES (
      ${user_ID},
      ${product_ID}
    )
  `)
  res.status(200).send("Item added to cart")
})





app.delete('/api/userCart/:id', async (req, res) => {
  const {id} = req.params
  await sequelize.query(`
    DELETE FROM cart WHERE cart_id = ${id}
  `)
  res.status(200).send("Removed from Cart")
})


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







//can store locally in browswer storage, or

// app.post('/subscribe', async(req,res) => {
//   const {firstName, lastName, email_address} = req.body
//   const subscribeUser = await sequelize.query(`
//     SELECT * FROM usersSub WHERE 
//     firstName = '${firstName}' 
//     lastName = '${lastName}'
//     email_address = '${email_address}'
//   `).catch((err) => console.log(err))
//   // if(subscribeUser === )
  
// })



// app.post('/api/getFromCart', async (req, res) => {
//   const {user_ID, product_ID} = req.body
//   await sequelize.query(`
//     INSERT INTO cart (user_id, product_id)
//     VALUES (
//       ${user_ID},
//       ${product_ID}
//     )
//   `)
//   res.status(200).send("Item added to cart")
// })