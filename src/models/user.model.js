import mongoose from "mongoose";

const userSchema =new mongoose.Schema(
  {
     username:{ type:String, required:true, unique:true ,lowercase:true, trim:true ,index:true},
     email:{ type:String, required:true, unique:true ,lowercase:true, trim:true },
     fullname:{},
     avatar:{},
     coverimage:{
        type: String
     },
     password:{
        type:String,
        required: [true, 'Password is required'], 
     },
     refreshTokens:{},
     watchHistory:[
             {
             type:Schema.Types.ObjectId,
             ref:"Video"
            }
        ],

 },
    {timestamps:true}
);

const User= mongoose.model("User",userSchema);
export default User;