import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;

const client = new MongoClient('mongodb://localhost:27017', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

client.connect(error =>{
    if(error){
        console.error(error);
        process.exit(-1);
    }
    console.log("Successfully connected to mongodb");
});

export {client};