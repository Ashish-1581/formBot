const Display = require("../models/displayModel");
const Folder = require("../models/folderModel");

const createForm = async (req, res) => {
    const { title, elements, folderId,bubbleCounts, inputCounts } = req.body;
  

    try {
        // Validate if folder exists if folderId is provided
        if (folderId) {
            const folder = await Folder.findOne({ _id: folderId, userId: req.userId });
            if (!folder) return res.status(404).send({ message: "Folder not found or access denied" });
        }

        // Create the new display/form
        const display = await Display.create({ title, elements, folderId, userId: req.userId,bubbleCounts, inputCounts });
        res.status(201).send(display);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error creating display" });
    }
};

const getFormByFolder = async (req, res) => {
    const { folderId } = req.params;

    try {
        // Validate if folder exists and belongs to the user
        const folder = await Folder.findOne({ _id: folderId, userId: req.userId });
        if (!folder) return res.status(404).send({ message: "Folder not found or access denied" });

        // Fetch forms for the folder
        const displays = await Display.find({ folderId, userId: req.userId });
        res.send(displays);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error fetching displays" });
    }
};

const getFormNotInFolder = async (req, res) => {
    try {
        const displays = await Display.find({ folderId:null, userId: req.userId });
        res.send(displays);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error fetching displays" });
    }
};

const getSingleForm = async (req, res) => {
    try {
        const display = await Display.findOne({ _id: req.params.id});
        if (!display) return res.status(404).send({ message: "Form not found or access denied" });

        res.status(200).json(display);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching display" });
    }
};

const updateForm = async (req, res) => {
    try {
        const { title, elements,bubbleCounts, inputCounts } = req.body;
        const display = await Display.findOneAndUpdate(
            { _id: req.params.id, userId: req.userId },
            { title, elements,bubbleCounts, inputCounts },
            { new: true }
        );

        if (!display) return res.status(404).send({ message: "Form not found or access denied" });

        res.status(200).json({ message: "Data updated successfully", display });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating display" });
    }
};

const deleteForm = async (req, res) => {
    try {
        const display = await Display.findOneAndDelete({ _id: req.params.id, userId: req.userId });

        if (!display) return res.status(404).send({ message: "Form not found or access denied" });

        res.status(200).json({ message: "Data deleted successfully", display });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting display" });
    }
};

module.exports = { createForm, getFormByFolder, getFormNotInFolder, getSingleForm, updateForm, deleteForm };