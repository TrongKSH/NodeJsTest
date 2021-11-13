const issueController = require('../controllers/issueController')

const router = require('express').Router()

router.route('/issue')
    .get(issueController.getAllIssues)
    .post(issueController.createIssue)

router.route('/issue/:id')
    .get(issueController.getIssueById)
    .put(issueController.updateProduct)

module.exports = router