const allDolevs = [
  {
    id: 1,
    lastModified: new Date('1/1/1970'),
    lastModifier: '',
    content: ['apples', 'oranges'],
    pickDate: new Date('1/1/1970'),
    lastFarmerName: 'srulik',
    status: 0,
    location: {
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 2,
    lastModified: new Date('1/1/1970'),
    lastModifier: '',
    content: ['cucumbers'],
    pickDate: new Date('1/1/1970'),
    lastFarmerName: 'srulik',
    status: 0,
    location: {
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 2,
    lastModified: new Date('1/1/1970'),
    lastModifier: '',
    content: ['apples', 'oranges'],
    pickDate: new Date('1/1/1970'),
    lastFarmerName: 'srulik',
    status: 1,
    location: {
      lat: 0,
      lng: 0,
    },
  },
];

const statuses = {
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
  static async getDolevById(dolevId) {
    return Promise.resolve({
      dolevId: 'matan7',
    });
  }

  static async getAllDolevs() {
    return Promise.resolve(allDolevs);
  }
}

module.exports = DolevService;
