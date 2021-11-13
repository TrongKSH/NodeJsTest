module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'password',
    DB: 'viatick_issue_management',
    dialect: 'mysql',
    PORT: 3306,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};