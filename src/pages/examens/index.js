import React from 'react';
import ViewTitle from '../../components/ViewTitle';
import ListCard from '../Test/Card';
import './_index.scss';
import { useState } from 'react';
import ExamDetails from './ExamDetails';
import ExamsMenu from './ExamsMenu';

const Examens = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <React.Fragment>
      <>
        <ViewTitle title={'Mes enfants'} />
        <ListCard />
      </>
      <div>
        {isOpen && <ExamDetails />}
        {!isOpen && <ExamsMenu onClick={setIsOpen} />}
      </div>
    </React.Fragment>
  );
};
export default Examens;
