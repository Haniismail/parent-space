import React from 'react';
import ViewTitle from '../../components/ViewTitle';
import { Card } from '@material-ui/core';
import './_services.scss';
import carteD17 from '../../assets/img/carteD17.png';
import moneybag from '../../assets/img/icons/moneybag.svg';
import CreditCard from '../../assets/img/icons/CreditCard.svg';
import addmoney from '../../assets/img/addmoney.png';
import { useDispatch } from 'react-redux';
import { openModal } from '../../slices/modals';

const Services = () => {
  const dispatch = useDispatch();
  return (
    <Card className="Card-Header">
      <ViewTitle title={'Services'} className="service-title" />
      <div className="first-text">Charger mon compte</div>
      <div className="service-images">
        <div className="moneybag-service">
          <img src={moneybag} className="money-service" alt="" />
          <div className="secand-service-text">Versement Bancaire</div>
        </div>
        <div className="carteD17-service">
          <img src={carteD17} className="carte-service" alt="" />
          <div className="secand-service-text">D 17</div>
        </div>

        <div className="credit-service">
          <img src={CreditCard} className="carte-service" alt="" />
          <div className="secand-service-text">Paiement en ligne</div>
        </div>
      </div>
      <div className="service-button" onClick={() => dispatch(openModal('modal-points'))}>
        <div>
          <img src={addmoney} className="image-monnaie" alt="" />
        </div>
        <div>
          <div className="tarnsfer-monnaie">
            <div>Ajouter des points</div>{' '}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Services;
