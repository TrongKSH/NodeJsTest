# NodeJsTest
Issue Management API is an api provider written with NodeJS and MySQL and Sequelize ORM,

## Feature
- Create a new issue
- Get all issues
- Get an issue by IssueId
- Update an existing issue

## Installation

Install the dependencies:

```bash
$ npm install
```

Run ensure DB script:
```bash
$ npm run custom
```

Start Issue management API
```bash
$ npm start
```
## Usage
After API is started, you can use postman to call API directly.
- Default server will be
```sh
http://localhost:5000
```    

e.g. For get all issues. We should call
```
GET: http://localhost:5000/api/v0/issue
```

We provided swagger for easier testing
- Default swagger endpoint will be
```sh
http://localhost:5000/api-docs
``` 
note: you can change the default PORT by changing the value of const [PORT] in [server.js] 

