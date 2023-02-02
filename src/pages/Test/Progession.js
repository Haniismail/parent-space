import React from 'react';
import ViewTitle from '../../components/ViewTitle';
import './Progression-Exams.scss';
import ProgressionImage from '../../assets/img/icons/ProgressionImage.svg';
import Arrow from '../../assets/img/icons/Arrow (2).svg';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useSelector } from 'react-redux';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#E3E3E4',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: '6px',
    backgroundColor: '#FE726E',
  },
}));

const Progression = () => {
  const storedid = useSelector((state) => state.ui.storedid);
  const students = useSelector((state) => state.enfant.students);

  let varvar = students.find((el) => el.id === storedid);
  let mapvar = varvar.progression;
  console.log(mapvar);
  return (
    <Card className="Progression-Container">
      <ViewTitle className={'Progression-main-title'} title={'Progression'} />

      {mapvar.map(
        (row, index) =>
          index < 3 && (
            <div>
              <div className="Progression-matiere">
                <div className="Progression-matiere-image-and-text-holder">
                  <div className="Progression-matiere-image-holder">
                    <img className="Progression-matiere-image" src={ProgressionImage} alt="" />
                  </div>
                  <div className="Progression-matiere-title">{row.matiere}</div>
                </div>
                <span className="Progression-percentage">{row.percentage}%</span>
              </div>
              <BorderLinearProgress
                className="Progression-progressBar50"
                variant="determinate"
                value={row.percentage}
                sx={{ flexGrow: 1 }}
              />
              <div className="ProgressionUnderline"></div>
            </div>
          )
      )}
      <Link to="/matieres">
        <div className="Progression-view-more">
          <div className="voir">Voir plus</div>
          <img src={Arrow} className="forward" alt="" />
        </div>
      </Link>
    </Card>
  );
};

export default Progression;
