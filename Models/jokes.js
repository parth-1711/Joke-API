const mongoose=require('mongoose');

const schema=mongoose.Schema;

const JokesSchema= new schema(
    {
        id:{type:String , required:true},
        title:{type:String , required:true},
        body:{type:String , required:true},
        score:{type:Number , required:true}
    }
)

module.exports= mongoose.model("Jokes",JokesSchema);