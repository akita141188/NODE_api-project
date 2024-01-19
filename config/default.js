require("dotenv").config();

module.exports = {
    app: require("./appConfig"),
    db: require("./dbConfig"),
    mail: require("./mailConfig"),
};
