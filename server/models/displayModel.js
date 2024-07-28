const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const displaySchema = new Schema({
  elementType: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  name: {
    type: String,
    required: true
  },
});

const ElementArraySchema = new Schema({
  title: {
    type: String,
    
    default: "new-Form"
  },
  elements: {
    type: [displaySchema],
    required: true
  },
  folderId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Folder',
    default: null
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // Assuming you have a User model
    required: true 
  },
  bubbleCounts:{
    type:Object,
  },
  inputCounts:{
    type:Object,
  },
  theme:{
    type:String,
    default:"white",
  
  },
  

});

const Display = mongoose.model("Display", ElementArraySchema);
module.exports = Display;