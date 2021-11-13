const validator = require('fastest-validator')
const db = require('../models')
//main model
const Issue = db.issue

const statusEnum = {"pending": 1, "res": 2}

const issueSchema = {
    title: {type: "string", optional: false, max: "100"},
    description: {type: "string", optional: false, max: "100"},
    category: {type: "string", optional: false, max: "100"},
    submitterName: {type: "string", optional: false, max: "100"},
    statusId: {type: "number", optional: false}
}
const issueValidator = new validator()

//Create issues
/**
 * @swagger
 * components:
 *   schemas:
 *     Issue:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - category
 *         - statusId
 *         - submitterName
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The issue title
 *         description:
 *           type: string
 *           description: The description of issue
 *         category:
 *           type: string
 *           description: The category of issue
 *         statusId:
 *           type: integer
 *           description: Status of issue
 *         submitterName:
 *           type: string
 *           description: Issue's submitter name
 *       example:
 *         title: Issue title
 *         description: description
 *         category: category
 *         statusId: 1
 *         submitterName: Rohan
 */

/**
 * @swagger
 * tags:
 *   name: Issue
 *   description: The issue managing API
 */

/**
 * @swagger
 * /issue:
 *   post:
 *     summary: Create a new issue
 *     tags: [Issue]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Issue'
 *     responses:
 *       201:
 *         description: The issue was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Issue'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Some server error
 */

const createIssue = async (req, res) => {
    let issueInfo = {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        submitterName: req.body.submitterName,
        statusId: statusEnum.pending
    }

    const validationResponse = issueValidator.validate(issueInfo, issueSchema)

    if (validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        })
    }

    await Issue.create(issueInfo).then(result => {
        res.status(201).json({
            message: "Issue created successfully",
            issue: result
        })
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    })
}

//Get all issues
/**
 * @swagger
 * /issue:
 *   get:
 *     summary: Returns the list of all the issue
 *     tags: [Issue]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Issue'
 */

const getAllIssues = async (req, res) => {
    await Issue.findAll({}).then(result => {
        res.status(200).json(result)
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    })
}

//Get issue by id
/**
 * @swagger
 * /issue/{id}:
 *   get:
 *     summary: Get the issue by id
 *     tags: [Issue]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The issue id
 *     responses:
 *       200:
 *         description: The issue description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Issue'
 *       404:
 *         description: The issue was not found
 */
const getIssueById = async (req, res) => {
    let id = req.params.id
    await Issue.findOne({where: {id: id}}).then(result => {
        if (result) {
            res.status(200).send(result)
        }
        res.status(404).send({
            message: "Issue not found",
        });
    }).catch(error => {
        res.status(500).send({
            message: "Something went wrong",
            error: error
        })
    })
}

//Update Issue
/**
 * @swagger
 * /issue/{id}:
 *   put:
 *     summary: Update an existing issue
 *     tags: [Issue]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The issue id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Issue'
 *     responses:
 *       200:
 *         description: The issue was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Issue'
 *       404:
 *         description: The issue was not found
 *       400:
 *         description: Bad request
 *       500:
 *         description: Some server error
 */
const updateProduct = async (req, res) => {
    let id = req.params.id

    let existingIssue = await Issue.findOne({where: {id: id}})
    if (existingIssue == null) {
        res.status(404).send({
            message: "Issue not found",
        });
    } else if ((Math.abs((new Date().getTime() - existingIssue.createdAt.getTime()) / 1000)) > 3600) {
        res.status(400).send({
            message: "Can not edit this issue",
        });
    } else {
        const updatedIssue = {
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            submitterName: req.body.submitterName,
            statusId: req.body.statusId,
            updatedAt: new Date()
        }

        const validationResponse = issueValidator.validate(updatedIssue, issueSchema)

        if (validationResponse !== true) {
            return res.status(400).json({
                message: "Validation failed",
                errors: validationResponse
            })
        }

        await Issue.update(updatedIssue, {where: {id: id}}).then(result => {
            res.status(200).send({
                message: "Issue updated successfully",
            })
        }).catch(error => {
            res.status(500).send({
                message: "Something went wrong",
                error: error
            })
        })
    }
}

module.exports = {
    createIssue,
    getAllIssues,
    getIssueById,
    updateProduct
}