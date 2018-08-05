const dolevService = require('./dolev.service');

class DolevController {
  static getDolevById(req, res, next) {
    return dolevService
      .getDolevById(req.params.dolevId)
      .then(data => res.json(data))
      .catch(e => next(e));
  }
}

module.exports = DolevController;
