import React from 'react';
import constants from '../../../utilities/constants';

const list = constants.SOCIALS_LIST;

const Footer = () => {
  const informations = null;
  const offer = informations && informations.offers;
  return (
    <div className="footer">
      <span>Nos contacts</span>
      <div className="contacts">
        {offer && offer.length > 0 ? (
          <span className="contact-phone">73.832.002</span>
        ) : (
          <span className="contact-phone">73.832.000</span>
        )}
      </div>
      <span>Nos réseaux sociaux</span>
      <ul>
        {list &&
          list.length > 0 &&
          list.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img alt={item.name} src={item.img} />
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Footer;
