# NodeJsTest
Issue Management API is an api provider written with NodeJS and MySQL and Sequelize ORM,

## Feature
- Create a new issue
- Get all issues
- Get an issue by IssueId
- Update an existing issue

## Note
- Im using mysql with below information:
  - HOST: localhost
  - USER: root
  - PASSWORD: password
  - PORT: 3306
  
- Please change it in [dbConfig.js] if you have another configuration

## Installation
1. Clone the repository:
```
gh repo clone TrongKSH/NodeJsTest
```
2. Move to cloned folder

3. Install the dependencies:

```bash
$ npm install
```

4. Run ensure DB script:
```bash
$ npm run custom
```

5. Start Issue management API
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

## Screenshots
![swagger_index](https://user-images.githubusercontent.com/44031110/141667952-15f823fd-f215-453b-966d-c0c75fddabe3.png)
![swagger_get_issue](https://user-images.githubusercontent.com/44031110/141667950-dec199f5-5958-4d6f-afdc-204ad539ceb4.png)
![swagger_create_issue](https://user-images.githubusercontent.com/44031110/141667953-a0dfa8b0-c927-4904-a0ae-1ceb1a24664f.png)
