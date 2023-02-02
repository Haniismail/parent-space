import React from 'react';

import { Card, Grid } from '@material-ui/core';
import ViewTitle from '../../components/ViewTitle';
import './_portmonnaie.scss';
import addmoney from '../../assets/img/addmoney.png';
import { useDispatch } from 'react-redux';
import { openModal } from '../../slices/modals';

const PorteMonnaie = () => {
  const dispatch = useDispatch();

  return (
    <Card className="porte-monnaie-card">
      <Grid>
        <ViewTitle title={'Porte monnaie'} className="porte-title" />
        <div className="port-monnaie">
          <Grid item xs={8} md={6}>
            <div className="porte-body">
              <div className="header-monnaie">
                <div className="body-monnaie">
                  <div className="banque-monnaie">Banque zitouna</div>
                  <div className="account-monnaie">
                    Acount: <span className="takiacademy">TakiAcademy</span>
                  </div>
                  <div className="rib">
                    RIB: <span className="number">25 006 0000000031704168</span>
                  </div>
                </div>
              </div>

              <div className="header-monnaie">
                <div className="body-monnaie">
                  <div className="banque-monnaie">Banque Biat</div>
                  <div className="account-monnaie">
                    Acount: <span className="takiacademy">TakiAcademy</span>
                  </div>
                  <div className="rib">
                    RIB: <span className="number">08 139 0000000031704168</span>
                  </div>
                </div>
              </div>
              <div className="header-monnaie">
                <div className="body-monnaie">
                  <div className="banque-monnaie">La poste tunisienne</div>

                  <div className="rib">
                    Acount: <span className="number">25 006 0000000031704168</span>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={8} md={6}>
            <div className="display">
              <div className="soldPoints">
                <div className="monnaie-solde"> Mon Solde:</div>
                <div className="line-monnaie"></div>
                <div className="monnaie-point "> 1 Pts</div>
              </div>

              <div className="monnaie-button" onClick={() => dispatch(openModal('modal-example'))}>
                <div>
                  <img src={addmoney} className="image-monnaie" alt="" />
                </div>
                <div>
                  <div className="tarnsfer-monnaie">
                    Transférer <div>des points</div>{' '}
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
    </Card>
  );
};

export default PorteMonnaie;
