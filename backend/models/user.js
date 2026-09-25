import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    roll_no: {
      type: Number,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Branch: {
      type: String,
      required: true,
    },
    sems: [{
      cpi: {
        type: Number,
        required: true,
      },
      spi: {
        type: Number,
        required: true,
      }
    }]
  });
  
  
  const User = mongoose.model('User', userSchema);

  
export default User;