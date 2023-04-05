const mongoose= require('mongoose');


// mongodb+srv://celebiipek:<password>@cluster0.cdyjmf8.mongodb.net/?retryWrites=true&w=majority
const db = ()=> {
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log("mongoDB Connected");
}).catch((err)=> {
    //throw new Error(err.message)
    console.group(err)
})
}

module.exports = db