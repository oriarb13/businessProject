const mongoose= reqire(`mongoose`);

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    content:{
        type: String,
        required:true,
    },
    date:{
        type: Date,
        default:date.now,
    },
})


export default mongoose.model(`post`,postSchema);