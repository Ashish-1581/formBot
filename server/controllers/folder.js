const Folder=require('../models/folderModel')

const createFolder = async (req, res) => {
    const { name } = req.body;
    try {
        const folder = await Folder.create({ name, userId: req.userId });
        res.status(201).json(folder);
    } catch (error) {
        res.status(500).send({ message: "Error creating folder" });
    }
};

const getFolder = async (req, res) => {
    try {
        const folders = await Folder.find({ userId: req.userId });
        res.send(folders);
    } catch (error) {
        res.status(500).send({ message: "Error fetching folders" });
    }
}

const getFolderById = async (req, res) => {
    const { folderId } = req.params;
    try {
        const folder = await Folder.findOne({ _id: folderId, userId: req.userId });
        res.send(folder);
    } catch (error) {
        res.status(500).send({ message: "Error fetching folder" });
    }
}


const deleteFolder = async (req, res) => {  
    const { folderId } = req.params;
    try {
        const folder = await Folder.findOneAndDelete({ _id: folderId, userId: req.userId });
       
        res.status(200).send({ message: "Folder deleted" });
    } catch (error) {
        res.status(500).send({ message: "Error fetching folder" });
    }
}

module.exports = { createFolder, getFolder,getFolderById, deleteFolder };
