const tasksModel = require('../models/tasksModels');

const getAll = async (req, res) => {

    const tasks = await tasksModel.getAll();

    return response.status(200).json(tasks);
};

module.exports = {
    getAll
};