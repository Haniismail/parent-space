import { createSlice } from '@reduxjs/toolkit';
import enfants from '../utilities/data';
import avtar from '../assets/img/icons/avatar-male.png';
import rawdata from '../utilities/constants';

const initialState = {
  lastID: '',
  enfants,
  array: [],
  index: 0,
  lastCard: false,
  id: 1001001,
  students: rawdata.STUDENTS_DATA,
  storedData: {
    image: '',
    matiere: '',
    percentage: 0,
  },
};
const enfantSlice = createSlice({
  name: 'enfants',
  initialState,
  reducers: {
    addEnfant(state, action) {
      const newEnfant = action.payload;
      state.students.push({
        id: newEnfant.id,
        name: newEnfant.name,
        image: avtar,
        email: newEnfant.email,
        classes: newEnfant.classes,
        identifiant: newEnfant.identifiant,
        sessions: [],
        enregistrement: [],
        progression: [],
        examens: [
          {
            numeroExamen: newEnfant.numeroExamen,
            dateFin: newEnfant.dateFin,
            dateExam: newEnfant.dateExam,
            Prof: newEnfant.Prof,
            session: newEnfant.session,
            subject: newEnfant.subject,
            mark: newEnfant.mark,
          },
        ],
      });
      state.id = newEnfant.id;
    },
    storedData(state, action) {
      const { image, percentage, matiere } = action.payload;
      console.log(action.payload);
      state.storedData.image = image;
      state.storedData.percentage = percentage;
      state.storedData.matiere = matiere;
    },
  },
});
export const EnfantActions = enfantSlice.actions;
export const reducer = enfantSlice.reducer;
export default enfantSlice;
