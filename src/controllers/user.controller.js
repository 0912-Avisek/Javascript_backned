import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadToCloudinary } from "../../utils/cloudinary.js";



const registerUser = asyncHandler ( async ( req, res ) => {
  // first we will get data from req body
  const { username, email, password, fullName } = req.body;

  console.log( username, email, password, fullName );

  //check the data is valid or not
  if (!username || !email || !password || !fullName) {
    throw new ApiError( 400, "All fields are required");
  }

  // check user is already registered or not
  const existingUser = await User.findOne({ email });
  if (existingUser) {
        throw new ApiError( 409, "User is already registered with this email");
  }
 
  const avatarLocalPath= req.files?.avatar[0]?.path;
  const coverImageLocalPath= req.files?.coverImage[0]?.path;

  if(!avatarLocalPath ) {
    throw new ApiError(400,"Avatar image is required");
  }




  res.status( 201 ).json( {
    success: true,
    message : "Avi lable data",
  })

});


export { registerUser };