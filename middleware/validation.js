const Validator = require('fastest-validator');
const v = new Validator();

const validation = data => {
    const schema = {
        name: {
            type: "string"
        },
        password: {
            type: "string",
            min:4,
            max:4
        }
    }
    return v.validate(data, schema)
};

module.exports.validation = validation;