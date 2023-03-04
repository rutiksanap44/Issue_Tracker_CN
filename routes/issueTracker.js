const express = require('express');
const router = express.Router();
// const issueTrackerPage = require('../controller/issueController');
const { issueTrackerPage, createProject, addProjectToMongoDB, projectDetails, filterProjectDetails, 
    createAnIssue, addAnIssue } = require('../controller/issueController');

router.get('/',issueTrackerPage);


module.exports = router;