import React from 'react';
import ViewTitle from '../../components/ViewTitle';
import matiereProgression from '../../utilities/matiere-progression';

import { Grid, Card } from '@material-ui/core';
import './Matiere-Progression.scss';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Index from './index';
import { useState } from 'react';

const MatieresProgression = () => {
  const { image, matiere, percentage } = useSelector((state) => state.enfant.storedData);
  const storedid = useSelector((state) => state.ui.storedid);
  const students = useSelector((state) => state.enfant.students);
  let varvar = students.find((el) => el.id === storedid);
  let mapvar = varvar.progression;
  const [isOpen, setIsOpen] = useState(false);

  console.log(image, matiere, percentage);
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

  return (
    <>
      <Grid container>
        {isOpen && <Index />}
        {!isOpen && (
          <Grid item md={4} xs={12}>
            <Card className="SideMatieres">
              <div className="image-title">
                <img className="Matiere-image" src={image} alt="" />
                <div className="SIDEBARTheme">{matiere}</div>
              </div>
              <div className="TeacherAndVideos">
                <div className="SideBarProgression">progression </div>
                <div className="SideBarProgression">{percentage} %</div>
              </div>
              <BorderLinearProgress
                className="SideBar-progressBar0Percent"
                variant="determinate"
                value={percentage}
                sx={{ flexGrow: 1 }}
              />
              <div className="ThemeInfo">
                <div className="ChampterNUmber">
                  {' '}
                  Nombre de Chapitres : <span className="Chapterinformations">24 chapitre</span>
                </div>
                <div className="ChampterNUmber">
                  {' '}
                  Nombre de Videos : <span className="Chapterinformations">1704 videos</span>
                </div>
              </div>
              <ViewTitle className="autres-matieres" title={'Autres  matiéres'} />
              {mapvar.map(
                (el, index) =>
                  index < 5 && (
                    <>
                      <div className="sidebarsmallsizelefthandside">
                        <div className="imageandtitlesmallsize">
                          <img className="smallSizedImage" src={el.image} alt="" />
                          <div className="smallSizedTitle"> {el.matiere} </div>
                        </div>
                        <div className="smallSizedPercentage">{el.percentage}%</div>
                      </div>
                      <BorderLinearProgress
                        className="SideBar-progressBar0Percent"
                        variant="determinate"
                        value={el.percentage}
                        sx={{ flexGrow: 1 }}
                      />
                      <div className="miniProgression"></div>
                    </>
                  )
              )}

              <div className="Mini-voir-plus" onClick={setIsOpen}>
                <div className="mini-voir">Voir plus</div>
              </div>
            </Card>
          </Grid>
        )}

        {!isOpen && (
          <Grid item md={8} xs={12}>
            <Grid container>
              <Card className="cours-examens-enregistrements-container">
                <div className="Cours-Examens-Enregistrements">
                  Cours - Examens - Enregistrements
                </div>
                {matiereProgression.map((data) => (
                  <Grid item md={12} xs={12}>
                    <div key={data.number}>
                      <div className="CoursMatieres">
                        <div className="">
                          <span className="CoursNumber">{data.number}</span>
                          <span className="Theme">{data.Themes}</span>
                        </div>
                        <div className="TeacherAndVideos">
                          <div className="MatieresTeacher">Par {data.Teacher}</div>
                          <div className="MatieresTeacher">{data.videos} videos</div>
                        </div>
                        <div className="ChapitreProgression">
                          <div className="Cours-progressBar0Percent"></div>
                          <div className="ChapitreProgressionPercentage"> {data.progression}%</div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Card>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
};
export default MatieresProgression;
