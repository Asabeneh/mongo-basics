const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/Integrify',(err, client) => {
    if(err){
        console.log('Unabl to connect to MongoDB server')
    }

    console.log('Connnected to mongodb server');

    const db = client.db('Integrify');
    // db.collection('Students').insertOne({
    //     name:'Bojan',
    //     age:28
    // },(err,data) =>{
    //     if(err) {
    //         console.log('Unable to insert data',err)
    //     }

    //     console.log(JSON.stringify(data,undefined,4));
    // })

    db.collection('Students').find({name:"Bojan" }).count().then((count) => {
        //console.log(JSON.stringify(doc, undefined, 4))
        console.log('Number of Bojans:',count)
    
    },(err) => {

    })

    // db.collection("Student").insertOne({
    //     name:'Jaya',
    //     age:21,
    //     country:'Finland'

    // },(err, data)=>{
    //     if(err){
    //         console.log('Data was not added',err)
    //     }
    //     console.log(JSON.stringify(data.ops,undefined, 4))
    // })

    db.collection('Students').find().toArray().then((doc) => {
        console.log(JSON.stringify(doc,undefined,4));

    },(err) => {
        console.log('Not found',err)
    });

    db.collection("Students").find({name:"Jaya"}).toArray().then((doc) =>{
        console.log(JSON.stringify(doc,undefined,4))
    },(err)=>{
        if(err){
            console.log('data was not found')
        }

    })

    db.collection("Students").find({_id: new ObjectID('5b5841ca32f7a2fc5882e3d8')}).count().then((count) =>{
        // console.log(JSON.stringify(doc,undefined,4))
        console.log('Number of students',count)

    },(err)=>{
        if(err){
            console.log('data was not found')
        }

    });
    db.collection('Students').deleteOne({name:'Yasir'},(err) => {
if(err){
    console.log(err)
}
    })

    
db.collection('Students').findOneAndDelete({name:'Yasir'}).then((result) => {
    console.log(result)
},(err) => {

})
    //deleteOne
    //deteleMany
    //findOneAndDelete

db.collection('Students').findOneAndUpdate({name:'Aditya'},{$set:{name:"Jaya"}},{returnOriginal:false}).then((doc) => {
 console.log(JSON.stringify(doc,undefined,2));
},(err) => {

})



    client.close();
})

//deleteMany
    // deleteOne
    //findOneAndDeleteOne

    //findOneAndUpdate