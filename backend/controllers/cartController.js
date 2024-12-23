import userModel from '../models/userModel.js'

//add items to user Cart

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId)
    let cartData = await userData.cartData
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1
    } else {
      cartData[req.body.itemId] += 1
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData })
    res.json({ success: true, message: 'item added to cart' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: 'something went wrong' })
  }
}

//remove items from Cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId)
    let cartData = await userData.cartData
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData })
    res.json({ success: true, message: 'Item removed from cart' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: 'something went wrong' })
  }
}
//fetch User cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId)
    let cartData = await userData.cartData
    res.json({ success: true, cartData })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: 'something went wrong' })
  }
}

export { addToCart, removeFromCart, getCart }
