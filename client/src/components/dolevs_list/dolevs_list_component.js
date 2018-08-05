import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './dolevs_list.css';

import dolevColumns from './columns/dolevs_columns';

const CLASS_NAME = 'dolevs-list';
const COLUMN_HEADER_CLASS_NAME = `${CLASS_NAME}__column-header`;

const TIME_DURATION_TYPES = {
  A_FEW_MINUTES_AGO: 'בדקות האחרונות',
  IN_THE_PAST_HOUR: 'בשעה האחרונה',
  HOUR: 'שעה',
  HOURS: 'שעות',
  DAYS: 'ימים',
};

const getLiteralDescriptionOfTimeDuration = (timeInMinutes) => {
  if (timeInMinutes < 10) return TIME_DURATION_TYPES.A_FEW_MINUTES_AGO;
  if (timeInMinutes < 60) return TIME_DURATION_TYPES.IN_THE_PAST_HOUR;
  if (timeInMinutes < 120) return TIME_DURATION_TYPES.HOUR;
  if (timeInMinutes < 48 * 60) { return `${Math.floor(timeInMinutes / 60)} ${TIME_DURATION_TYPES.HOURS}`; }
  return `${Math.floor(timeInMinutes / (24 * 60))} ${TIME_DURATION_TYPES.DAYS}`;
};

const prepareRawDolevToDisplay = dolev => ({
  id: dolev.id,
  quantity: dolev.quantity,
  content: dolev.content,
  status: dolev.status,
  timeSinceLastChanged: getLiteralDescriptionOfTimeDuration((new Date() - new Date(dolev.lastModified)) / (60 * 1000)),
  timeSinceLastChangedInHours: (new Date() - new Date(dolev.lastModified)) / (60 * 1000),
});

const tableColumn = column => (
  <TableHeaderColumn
    key={column.dataField}
    isKey={column.isKey}
    dataSort={true}
    width={column.columnWidth}
    dataField={column.dataField}
    dataFormat={column.dataFormatter}
    sortFunc={column.sortFunction}
    columnClassName={`${CLASS_NAME}__td`}
    className={`${CLASS_NAME}__th`}
    headerAlign='right'
    dataAlign='right'>
    <div className={COLUMN_HEADER_CLASS_NAME}>
      <div>{column.name}</div>
    </div>
  </TableHeaderColumn>
);

const DolevsList = ({ dolevs, statusFilter }) => {
  const displayableDolevs = dolevs
    .map(prepareRawDolevToDisplay)
    .filter(dolev => (Number.isInteger(statusFilter) ? dolev.status === statusFilter : true));
  const options = {};

  return (
    <div className={CLASS_NAME}>
      <BootstrapTable
        data={displayableDolevs}
        bordered={false}
        options={options}
        headerContainerClass={`${CLASS_NAME}__header`}
        trClassName={`${CLASS_NAME}__row`}
      >
        {dolevColumns.map(dolevColumn => tableColumn(dolevColumn))}
      </BootstrapTable>
    </div>
  );
};

export default DolevsList;
