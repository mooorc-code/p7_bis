const emailValidator = require( 'email-validator' );

module.exports = (req, res, next) => {
    console.log(req.body.email)
    if (emailValidator.validate(req.body.email)){

        next();

    }else {
        return res.status(400).json({error: "l'adresse email est incorrect"});
    }
}
