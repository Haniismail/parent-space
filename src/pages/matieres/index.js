import React, { useState } from 'react';
import { Grid, Card } from '@material-ui/core';
import MatieresProgression from './Matiere-Progression';
import { EnfantActions } from './../../slices/enfant';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import './_matiere.scss';
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

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const storedid = useSelector((state) => state.ui.storedid);
  const students = useSelector((state) => state.enfant.students);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    currentMatiere: '',
    currentImage: '',
    currentPercentage: 0,
  });

  let storedmatieres = students.find((el) => el.id === storedid);
  let mapmatieres = storedmatieres.progression;

  return (
    <Grid container>
      {isOpen && (
        <>
          <MatieresProgression />
        </>
      )}
      {!isOpen && (
        <>
          {mapmatieres.length !== 0 ? (
            <>
              {' '}
              {mapmatieres.map((data) => (
                <Grid item md={3} xs={12}>
                  <Card
                    key={data.name}
                    className="matiere-card"
                    onClick={() => {
                      setData({
                        ...data,
                        currentImage: data.image,
                        currentMatiere: data.matiere,
                        currentPercentage: data.percentage,
                      });
                      dispatch(EnfantActions.storedData(data));

                      setIsOpen(true);
                    }}
                  >
                    <div className="image-container">
                      <img src={data.image} className="image-matiere" alt="" />
                    </div>

                    <div className="body-container">
                      <div className="matiere-name">{data.matiere}</div>
                      <div className="matiere-progression">{data.percentage}% </div>
                    </div>
                    <BorderLinearProgress
                      className="Progression-matieres"
                      variant="determinate"
                      value={data.percentage}
                      sx={{ flexGrow: 1 }}
                    />
                  </Card>
                </Grid>
              ))}
            </>
          ) : (
            <h1 className="" value={data}>
              No Matieres
            </h1>
          )}
        </>
      )}
    </Grid>
  );
};

export default Index;
