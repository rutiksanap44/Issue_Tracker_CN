module.exports.issueTrackerPage = async(req,res) => {
    return res.render('issueTracker',{
        title: "Issue Tracker"
    })
};