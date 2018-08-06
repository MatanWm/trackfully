const DolevModel = require('./dolev.model.js');

// const status = {
//   0: 'ready',
//   1: 'inField',
//   2: 'sentFromField',
//   3: 'inMerlog',
//   4: 'beforeRouting',
//   5: 'afterRouting',
//   6: 'inFridge',
//   7: 'onTheWayToAssociation',
//   8: 'ArrivedToAssociation',
// };

class DolevService {
  static getDolevById(id) {
    return DolevModel.find({ id });
  }

  static getAllDolevs() {
    return DolevModel.find();
  }

  static updateDolevStatus(id, status) {
    let newDolev = { status, lastModified: new Date() };
    // mock for demo
    if (status === '6') {
      newDolev = Object.assign({}, newDolev, { content: 'banana' })
    }
    return DolevModel.update({ id }, newDolev);
  }
}

module.exports = DolevService;
