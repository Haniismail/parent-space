import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../slices/modals';
import { Grid, Card } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { UIActions } from './../../slices/UI';

const ListCard = () => {
  const enfants = useSelector((state) => state.enfant.enfants);
  const students = useSelector((state) => state.enfant.students);
  const id = useSelector((state) => state.enfant.id);
  const dispatch = useDispatch();

  const [currentCard, setCarrentCard] = useState(id);
  const [isAdded, setIsAdded] = useState(false);

  const firstChild = enfants[0];

  useEffect(() => {
    if (id !== firstChild.id) {
      setIsAdded(true);
    }
    if (id !== firstChild.id && isAdded === true) {
      setCarrentCard(id);
    }
  }, [id, isAdded, firstChild.id]);

  const selectCard = () => {
    dispatch(UIActions.Show());
    console.log();
  };

  useEffect(() => {
    dispatch(UIActions.storeID(currentCard));
  }, [dispatch, currentCard]);

  return (
    <React.Fragment>
      <Grid className="card">
        <div className="addButton" onClick={() => dispatch(openModal('modal-add-enfant'))}>
          <div className="CircleButton">
            <div className="actionPlus">+</div>
          </div>
        </div>
        <Grid container>
          {students.map((data, index) => (
            <>
              <Grid
                item
                onClick={() => {
                  setCarrentCard(data.id);
                }}
              >
                <div className="ListCardContainer">
                  <Card key={index}>
                    <div
                      className={`minicard ${data.id === currentCard ? 'defaultCard' : 'minicard'}`}
                      onClick={selectCard}
                    >
                      <img className="image" src={data.image} alt="" />
                      <div className="body">
                        <span className="name">{data.name}</span>
                        <span className="id">id:{data.id}</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ListCard;
