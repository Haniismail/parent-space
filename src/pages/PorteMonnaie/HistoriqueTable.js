import React from 'react';
import './_historiquetable.scss';
import Table from '../../components/Table/Table';

import ViewTitle from '../../components/ViewTitle';

const HistoriqueTable = (props) => {
  return (
    <div className="history-table-monnaie">
      <ViewTitle title={'Historique des points'} className="service-title" />
      <div className="HistoryTable">
        {' '}
        <Table historiquepoints />
      </div>
    </div>
  );
};

export default HistoriqueTable;
