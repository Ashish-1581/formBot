const FormDataModel = require("../models/analyticsModel");


const setSubmissions = async (req, res) => {

    const { formId  } = req.params;
    const {data,inputFieldCount}  = req.body;
    
    const dataLength = Object.keys(data).length;
    let complete=false;
    if(dataLength===inputFieldCount){
    complete=true;
    }
   
   
  
    try {
      let formData = await FormDataModel.findOne({ formId });
  
      if (formData) {
        formData.submissions.push({ data,complete });
      } else {
        formData = await FormDataModel.create({
          formId,
          submissions: [{ data,complete }],
        });
      }
  
      await formData.save();
      res.status(201).send({ message: 'Data saved successfully', formId: formData.formId });
    } catch (error) {
      res.status(500).send({ message: 'Error saving data', error });
    }
};

const getSubmissions = async (req, res) => {
    const { formId } = req.params;

    try {
      const formData = await FormDataModel.findOne({ formId });
      if (!formData) {
        return res.status(404).send({ message: 'Form data not found' });
      }
      res.send(formData);
    } catch (error) {
      res.status(500).send({ message: 'Error retrieving data', error });
    }
};

module.exports = { setSubmissions, getSubmissions };