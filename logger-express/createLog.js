const createLog = (level, message) => {
  return (req, res, next) => {
    res.locals.logger.log(level, message);
    
    next();
  };
};

module.exports = createLog;