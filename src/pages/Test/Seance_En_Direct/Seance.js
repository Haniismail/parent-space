import React from 'react';
import { Card } from '@material-ui/core';
import Cast from '../../../assets/img/icons/Cast.svg';
import ViewTitle from '../../../components/ViewTitle';
import './_seance.scss';
import rightarrow from '../../../assets/img/icons/rightarrow.svg';
import Time from '../../../assets/img/icons/Time.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Seance = () => {
  const storedid = useSelector((state) => state.ui.storedid);
  const students = useSelector((state) => state.enfant.students);

  let varvar = students.find((el) => el.id === storedid);
  let mapvar = varvar.enregistrement;
  return (
    <Card className="seance-card">
      <div className="Header-seance">
        <div className="seance-icon">
          <img src={Cast} alt="" />
          <div>
            <ViewTitle title="Séance en direct d'aujourd'hui" className="title" />
          </div>
        </div>
        <Link to="/travailAFaire">
          <div className="Voir-plus">
            <div className="voir">Voir plus</div>
            <div>
              <img src={rightarrow} className="forward" alt="" />
            </div>
          </div>
        </Link>
      </div>
      {mapvar.length !== 0 ? (
        <>
          {mapvar.map((row) => (
            <div>
              <div className="seance-primo">
                <div>
                  <img src={Time} alt="" />
                </div>
                <div className="seance-text">{row.date}</div>
              </div>
              <div className="seance-secand-text">
                <div>Matiere : {row.matiere}</div>
                <div>Présenté par {row.prof}</div>
              </div>
              <div className="seance-line"></div>
            </div>
          ))}
        </>
      ) : (
        <h1 className="noData"> Non séance en direct pour aujourd'hui</h1>
      )}
    </Card>
  );
};

export default Seance;
