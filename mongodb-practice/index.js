const mongoose = require('mongoose');

// connection
mongoose.connect('mongodb://127.0.0.1:27017/mongobasic').then(() => {
    console.log("Database is connected!")
}).catch((err) => {
    console.log(err);
});


// schema(shape of a document)
// document, collection, database
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    age: Number,
    isMarried: Boolean,
    salary: Number,
    gender: String
});


// create model
const User = mongoose.model('User', userSchema);


// store
async function createUser() {
    const user = new User({
        name: "Shahriar",
        age: 30,
        isMarried: false,
        salary: 50000,
        gender: "Male"
    })
    await user.save()
    console.log('user create', user);
    return user;
}

// createUser()

async function fetchAllUser() {
    // const users = await User.find({})
    const users = await User.find({isMarried: false})
    console.log('select all : ', users);
    return users;
}

// fetchAllUser();

async function fetchUser(id) {
    // const users = await User.find({})
    const user = await User.findById({_id: id})
    // const user = await User.findOne({_id: id})
    console.log('select a : ', user);
    return user;
}

// fetchUser('6841a3bbc9cddaef5d49f895');

/**
https://mongoosejs.com/docs/queries.html
Queries
Model.deleteMany()
Model.deleteOne()
Model.find()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndRemove()
Model.findByIdAndUpdate()
Model.findOne()
Model.findOneAndDelete()
Model.findOneAndReplace()
Model.findOneAndUpdate()
Model.replaceOne()
Model.updateMany()
Model.updateOne()
*/

async function fetchInfo() {
    // const users = await User.find({})
    const users = await User.find({isMarried: false}).select('name salary').sort('-salary').limit(2)
    console.log('select a : ', users);
    return users;
}
// fetchInfo()


async function userCount() {
    // const users = await User.find({})
    const users = await User.find({isMarried: false}).countDocuments()
    console.log('count : ', users);
    return users;
}
userCount()