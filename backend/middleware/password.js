const passwordValidator = require( "password-validator" );
const passwordSchema = new passwordValidator();

passwordSchema
    .is().min(4)                                    // Minimum length 6
    .is().max(100)                                  // Maximum length 100
    .has().uppercase(0)                      // Must have uppercase letters
    .has().lowercase(0)                      // Must have lowercase letters
    .has().digits(0)                                // Must have at least digits
    .has().not().spaces(0)                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values


module.exports = (req, res, next) => {
    if(passwordSchema.validate(req.body.password)){
        next();
    }else{
        return res.status(400).json({error: "le mot de passe n'est pas assez fort :" + passwordSchema.validate('req.body.password', {list: true})})
    }
}
