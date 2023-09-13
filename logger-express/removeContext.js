const removeContext = (key) => {
  return (req, res, next)=>{
    delete res.locals.logger.context[key];

    return next();
  };
};

module.exports = removeContext;