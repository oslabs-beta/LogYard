const log = require('./log');

const addLogger = (key, value) => {
  return (req, res, next)=>{
    if (!key || !value){
      res.locals.logger = {context: {}, log};
      
      return next();
    }

    res.locals.logger = {
      context: { [key]: value },
      log
    };

    return next();
  };
};

module.exports = addLogger;