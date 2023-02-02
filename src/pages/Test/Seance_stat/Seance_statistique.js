import React from 'react';
import { Card } from '@material-ui/core';
import ViewTitle from '../../../components/ViewTitle';
import rightarrow from '../../../assets/img/icons/rightarrow.svg';

import './_seance_stat.scss';
import Table from '../../../components/Table/Table';
import { Link } from 'react-router-dom';

const Seance_statistique = () => {
  return (
    <Card className="card_stat">
      <div className="seance_stat">
        <div>
          <ViewTitle title={'Séance en direct statistiques'} className="title-stat" />
          <div className="seance-stat-line"></div>
        </div>
        <Link to="/endirect">
          <div className="Voir-plus">
            <div className="voir">Voir plus</div>
            <div>
              <img src={rightarrow} className="forward" alt="" />
            </div>
          </div>
        </Link>
      </div>
      <div className="SeanceTable">
        <Table date nom duree />
      </div>
    </Card>
  );
};

export default Seance_statistique;
