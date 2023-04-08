const { Users } = require('../models/');
const { validation } = require('../middleware/validation')

const register = async (req,res) => {
    try {
        const {name, password} = req.body

        const validate = validation(req.body);
        if(validate.length){
            return res.status(400).json(validate)
        };

        const users = new Users({
            name: name,
            password: password
        });

        const saveUser = await users.save(req.body);
        return res.status(201).json({
            msg: 'succses',
            data: saveUser
        });
    } catch (error) {
        res.status(500).send('server eror')
    }
};

const login = async (req,res) => {
    try {
        const password = req.body.password;
        const checkPassword = await Users.findOne({
            where: {
                password : password
            }
        });
        if(!checkPassword){
            return res.status(404).send('password not found')
        };
        res.status(200).json({
            msg: 'succses login'
        })

    } catch (error) {
        res.status(500).send('server eror')
    }
}


module.exports = {
    register,
    login,
};