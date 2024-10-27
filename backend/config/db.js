import mongoose from 'mongoose'

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://ashish10:ZGKN1C4ArEuOopdM@cluster0.ga0x7xb.mongodb.net/food-del'
    )
    .then(() => console.log('DB Connected'))
}
