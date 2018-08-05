import React from 'react';

const CLASS_NAME = 'dolevs-list';

const DOLEV_STATUSES = {
  0: 'פנוי',
  1: 'בשטח',
  2: 'בשטח',
  3: 'במרלוג',
  6: 'בקירור',
  7: 'בעמותה',
  8: 'בעמותה',
};

const sortNumberByField = (field, a, b, order) => {
  const ascResult = (parseInt(a[field]) < parseInt(b[field]) ? -1 : 1);
  return ((order === 'asc') ? 1 : -1) * ascResult;
};

const textCell = (cell, row) => (
  <div className={`${CLASS_NAME}__cell`}>
    <div className={`${CLASS_NAME}__text-cell`}>{cell}</div>
  </div>
);

const statusCell = (cell, row) => (
  <div className={`${CLASS_NAME}__cell`}>
    <div className={`${CLASS_NAME}__status-cell ${CLASS_NAME}__status-cell--${cell}`}>{DOLEV_STATUSES[cell]}</div>
  </div>
);

const dolevColumns = [
  {
    name: "מס' דולב",
    isKey: true,
    dataField: 'id',
    dataFormatter: textCell,
    columnWidth: '40%',
    sortFunction: sortNumberByField.bind(null, 'id')
  },
  {
    name: "תכולה",
    dataField: 'content',
    dataFormatter: textCell, // todo: iconCell
    columnWidth: '20%'
  },
  {
    name: "כמות",
    dataField: 'quantity',
    dataFormatter: textCell,
    columnWidth: '20%',
    sortFunction: sortNumberByField.bind(null, 'quantity')
  },
  {
    name: "זמן מאז\nהשינוי האחרון",
    dataField: 'timeSinceLastChanged',
    dataFormatter: textCell,
    columnWidth: '20%',
    sortFunction: sortNumberByField.bind(null, 'timeSinceLastChangedInHours')
  },
  {
    name: "סטטוס",
    dataField: 'status',
    dataFormatter: statusCell,
    columnWidth: '84px' // todo: sort by hebrew name
  }
];

export default dolevColumns;
