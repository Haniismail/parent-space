import React from 'react';
import ViewTitle from '../../components/ViewTitle';
import { Grid, Card } from '@material-ui/core';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './Civil-State.scss';
import { useSelector } from 'react-redux';
import Download from '../../assets/img/icons/Download.svg';

const CivilState = () => {
  let array = useSelector((state) => state.enfant.students);

  let lastID = array?.slice(-1);
  let lastArrayofObjects = array?.slice(-1);

  let name = lastArrayofObjects[0]?.name;
  let email = lastArrayofObjects[0]?.email;
  let classes = lastArrayofObjects[0]?.classes;
  let id = lastID[0]?.id;

  return (
    <>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Card className="CivilStateContainer">
            <ViewTitle
              className="Civil-state-title"
              title={"Ajouter l'acte état civil de votre enfant"}
            />

            <div className="questionary">
              <div className="ChildInformation">Nom:</div>
              <div className="ChildInformationEntered">{name}</div>
            </div>
            <div className="questionary">
              <div className="ChildInformation">ID:</div>
              <div className="ChildInformationEntered">#{id}</div>
            </div>
            <div className="questionary">
              <div className="ChildInformation">Email:</div>
              <div className="ChildInformationEntered">{email}</div>
            </div>
            <div className="CivilStateUnderline"></div>
            <div className="questionary">
              <div className="ChildInformation">Class:</div>
              <div className="ChildInformationEntered">
                {classes}
                {''}
                <span className="debase">de base</span>
              </div>
            </div>
            <div className="questionary">
              <div className="ChildInformation">Matiére a option:</div>
              <div className="ChildInformationEntered">Italien</div>
            </div>
            <div className="CivilStateUnderline"></div>
            <div className="Civil-questionary">
              <div className="ChildInformation">Piece jointes:</div>
              <div className="Civil-State-download-bar">
                <div>
                  <div className="Civil-state-fichier">
                    <div className="Civil-state-fichiers">Fichier n 1</div>
                  </div>
                </div>
                <div>
                  <button className="Civil-state-downloadButton">
                    <div className="detailenfantajoute">
                      <div>
                        <img src={Download} alt="" />
                      </div>
                      <div> Télecharger</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="Civil-State-download-bar">
                <div>
                  <div className="Civil-state-fichier">
                    <div className="Civil-state-fichiers">Fichier n 1</div>
                  </div>
                </div>
                <div>
                  <button className="Civil-state-downloadButton">
                    <div className="detailenfantajoute">
                      <div>
                        <img src={Download} alt="" />
                      </div>
                      <div> Télecharger</div>
                    </div>
                  </button>
                </div>
              </div>
              <div>
                <button className="Civil-state-downloadButton">
                  <div className="Civil-state-uploader">
                    <div className="detailenfantajoute">
                      <div>
                        <CloudUploadIcon />
                      </div>
                      <div className="telechargerdetailenfant"> Télecharger</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div className="questionary">
              <div className="ChildInformation">Status:</div>
              <div className="Civil-state-status">En train de vérifier les documets</div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CivilState;
