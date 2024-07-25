const mongoose = require("mongoose");
const moment = require("moment");

const SubmissionSchema = new mongoose.Schema({
  data: mongoose.Schema.Types.Mixed,
  submittedAt: {
    type: String,
    required: true,
    default: () => moment().format("MMMM D, h:mma"), // Format example: July 15, 3:30pm
  },
  complete:{
    type:Boolean,
    default:false,
    required:true
  }
});

const FormDataSchema = new mongoose.Schema({
  formId: {
    type: String,
    required: true,
    unique: true,
  },
  submissions: [SubmissionSchema],
 
 

});

const FormDataModel = mongoose.model("FormData", FormDataSchema);

module.exports = FormDataModel;
