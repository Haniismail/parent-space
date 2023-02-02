import React from 'react';
import './_historiquetable.scss';
import Table from '../../components/Table/Table';

import ViewTitle from '../../components/ViewTitle';

const TransferHistory = (props) => {
  return (
    <div className="history-table-monnaie">
      <ViewTitle title={'Historique de transfert des points'} className="service-title" />
      <div className="HistoryTable">
        {' '}
        <Table historiquetransfertpoints />
      </div>
    </div>
  );
};

export default TransferHistory;
