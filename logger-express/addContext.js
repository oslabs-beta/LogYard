const addContext = (key, value) => {
  return (req, res, next)=>{
    res.locals.logger.context[key] = value;

    return next();
  };
};

module.exports = addContext;