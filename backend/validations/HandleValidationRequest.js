
const { validationResult } = require('express-validator');


const handleValidationRequest = (req,res,next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ errors: result.mapped() });
  }else{
    next();
  }

  
};

module.exports = handleValidationRequest;
