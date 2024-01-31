const dotenv = require("dotenv");
dotenv.config();


const mongoose = require('mongoose');
mongoose.set('strictQuery', true); // Set strictQuery to true


const connectionString = process.env.MONGO_URL;
mongoose.connect(
    connectionString, 
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    }, 
    (err, goose) => {
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MongoDB connection succeed");
        //console.log(goose);
        const server = require("./app");
        let PORT = process.env.PORT ||3007;
        server.listen(PORT, function () {
        console.log(
            `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
            );
        });
    }
}
);


