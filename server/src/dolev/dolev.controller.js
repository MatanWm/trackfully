const dolevService = require('./dolev.service');

class DolevController {
  static getDolevById(req, res, next) {
    return dolevService
      .getDolevById(req.params.dolevId)
      .then(data => res.json(data))
      .catch(e => next(e));
  }

  static getAllDolevs(req, res, next) {
    return dolevService
      .getAllDolevs()
      .then(data => res.json(data))
      .catch(e => next(e));
  }
  static updateDolevStatus(req, res, next) {
    return dolevService
      .updateDolevStatus(req.params.dolevId, req.body.status)
      .then(data => res.json(data))
      .catch(e => next(e));
  }
}

module.exports = DolevController;
