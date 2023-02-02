import React from 'react';
import ListCard from '../Test/Card';
import ViewTitle from '../../components/ViewTitle';

import Index from './index';

const Matieres = () => {
  return (
    <React.Fragment>
      <div>
        <ViewTitle title={'Mes enfants'} />
        <ListCard />
      </div>
      <div>
        <ViewTitle title="Matieres" />
      </div>

      <Index />
    </React.Fragment>
  );
};

export default Matieres;
