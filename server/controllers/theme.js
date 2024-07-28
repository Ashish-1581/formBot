const Display=require('../models/displayModel');

const setTheme = async (req, res) => {
    try {
        const { theme } = req.body;
      
        const {formId}=req.query;
      
        const display = await Display.findOne({ _id: formId });
        if (!display) return res.status(404).send({ message: "Form not found or access denied" });

        display.theme = theme;
        await display.save();

        res.status(200).json(display);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error setting theme" });
    }
}

const getTheme = async (req, res) => {
    try {
        const {formId}=req.query;
       
        const display = await Display.findOne({ _id: formId });
        if (!display) return res.status(404).send({ message: "Form not found or access denied" });

        res.status(200).json(display.theme);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching theme" });
    }
}

module.exports = { setTheme, getTheme };