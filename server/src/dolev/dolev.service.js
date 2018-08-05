const DolevModel = require('./dolev.model.js');

const status = {
  0: 'ready',
  1: 'inField',
  2: 'sentFromField',
  3: 'inMerlog',
  4: 'beforeRouting',
  5: 'afterRouting',
  6: 'inFridge',
  7: 'onTheWayToAssociation',
  8: 'ArrivedToAssociation',
};

class DolevService {
  static getDolevById(id) {
    return DolevModel.find({ id });
  }

  static getAllDolevs() {
    return DolevModel.find();
  }

  static async updateDolevStatus(dolev) {
    const doc = await DolevModel.find({ id: dolev.id });
    // / change and save speak to matan
    return doc;
  }
}

module.exports = DolevService;
