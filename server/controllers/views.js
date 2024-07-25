const ViewModel = require("../models/viewsModel");

const getViews = async (req, res) => {
  try {
    const { formId } = req.query;

    const viewCount = await ViewModel.findOne({ formId });
    if (!viewCount) {
      return res.status(200).json({ views: 0 });
    }
    res.status(200).json(viewCount);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const setViews = async (req, res) => {
  try {
    const { formId, views } = req.body;
    let view = await ViewModel.findOne({ formId });

    if (!view) {
      view = new ViewModel({ formId, views });
    } else {
      view.views = views;
    }

    await view.save();
    res.status(200).json(view);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getViews, setViews };
