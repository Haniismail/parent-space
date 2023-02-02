import React from 'react';
import { Grid, Card } from '@material-ui/core';
import PorteMonnaie from './PorteMonnaie';
import Services from './Services';
import HistoriqueTable from './HistoriqueTable';
import TransferHistory from './TransferHistory';
import './_historiquetable.scss';

const index = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8} md={6}>
          <PorteMonnaie />
        </Grid>
        <Grid item xs={8} md={6}>
          <Services />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8} sm={12} md={12}>
          <Card className="history-table-monnaie">
            <HistoriqueTable />
          </Card>
        </Grid>

        <Grid item xs={8} sm={12} md={12}>
          <Card>
            {' '}
            <TransferHistory />{' '}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default index;
