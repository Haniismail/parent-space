import Card from './Card';
import React from 'react';
import Grid from '@mui/material/Grid';
import ViewTitle from '../../components/ViewTitle';
import Downlod from '../../assets/img/icons/Download.svg';
const ExamDetails = () => {
  return (
    <Card>
      <ViewTitle className="examen" title={'Detail de l examen'} />
      <Grid className="container2" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item md={6} xs={12}>
          <div className="detailbox">
            <span className="detailbutton">Matiére</span>
            <div className="mainHeaders">
              <span className="detailexamTitle">Examen n 1</span>
              <span className="detailprofessorTitle">Par Professeur</span>
              <span className="detaildateTitle">Date Fin: 30/11/2021 20:30</span>
            </div>
            <span className="detailTitles">Examen</span>
            <div className="download-bar">
              <div>
                <div className="fichier">
                  <div className="fichiers">Fichier n 1</div>
                </div>
              </div>

              <div>
                <button className="downloadButton">
                  <div className="buttondownload">
                    <div>
                      <img src={Downlod} alt="" />
                    </div>
                    <div className="examtelecharger">Télecharger</div>
                  </div>
                </button>
              </div>
            </div>
            <span className="detailTitles">Correction générale</span>
            <div className="download-bar">
              <div>
                <div className="fichier">
                  <div className="fichiers">Fichier n 1</div>
                </div>
              </div>

              <div>
                <button className="downloadButton">
                  <div className="buttondownload">
                    <div>
                      <img src={Downlod} alt="" />
                    </div>
                    <div className="examtelecharger">Télecharger</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};
export default ExamDetails;
