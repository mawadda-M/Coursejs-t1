const express = require('express');
const router = express.Router();

const productController = require('../controller/ProductController')
const PostsController = require('../controller/PostsController')
const UserController = require('../controller/UserController')

router.get('/', (req, res) => {
    res.status(200)
})

router.get('/add-product', productController.addproduct)

router.post('/login', UserController.loginUser)
router.post('/register', UserController.SignUpUser)

router.get('/posts', PostsController.addallpsts)


module.exports = router
