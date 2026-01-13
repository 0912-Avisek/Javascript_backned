import dotenv from 'dotenv';
import connectDB from './db/dbConnect.js';

dotenv.config(
    {
    path: './env'
    }
);



connectDB()
.then(() => {
      app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
      });
})
.catch( (error) =>{
    console.error("Error connecting to database:", error);
});