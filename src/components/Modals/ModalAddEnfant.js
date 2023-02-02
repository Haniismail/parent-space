import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import { TextField, Box, FormHelperText, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import './_modaladdenfant.scss';
import { closeModal } from '../../slices/modals';
import { useState } from 'react';
import { MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { EnfantActions } from './../../slices/enfant';
import { UIActions } from './../../slices/UI';
import { useSelector } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';

const ModalAddEnfant = ({ id, open, handleClose, data, ...rest }) => {
  const isMountedRef = useIsMountedRef();
  const [isopen, setisOpen] = useState(false);
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  let students = useSelector((state) => state.enfant.students);
  let lastArrayofObjects = students?.slice(-1);
  let ss = lastArrayofObjects[0]?.image;
  let LastEnfantName = lastArrayofObjects[0]?.name;
  console.log(ss);

  const changestate = () => {
    setisOpen(!isopen);
  };

  const classe = [
    {
      label: "7'eme",
    },
    {
      label: "8'eme",
    },
    {
      label: "9'eme",
    },
    {
      label: "1'ére",
    },
    {
      label: "2'éme",
    },
    {
      label: "3'éme",
    },
    {
      label: 'BAC',
    },
  ];
  return (
    <Dialog
      open={open}
      onClose={(e, reason) => {
        if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
          handleClose(id);
        }
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="ta-modal add-video-modal"
    >
      <DialogTitle id="alert-dialog-title">
        <span className="label">Ajouter un enfant</span>
        <span className="close-btn" onClick={() => handleClose(id)}>
          <CloseIcon />
        </span>
      </DialogTitle>
      <DialogContent>
        {/*render formik isopen*/}

        {isopen && (
          <Formik
            initialValues={{
              name: '',
              prenom: '',
              email: '',
              telephone: '',
              motdepasse: '',
              confirmmotdepasse: '',
              classes: '',

              submit: null,
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().max(255).required('Le nom est requis.'),
              prenom: Yup.string().max(255).required('Le prénom est requis.'),
              email: Yup.string().max(255).required("L'email est requis."),
              telephone: Yup.string().max(255).required('Le telephone est requis.'),
              motdepasse: Yup.string().max(255).required('Le mot de passe est requis.'),
              confirmmotdepasse: Yup.string()
                .max(255)
                .required('Le confirm mot de passe est requis.'),
              classes: Yup.string().max(255).required('Les classes sont requis.'),
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
              try {
                dispatch(
                  EnfantActions.addEnfant({
                    id: Math.floor(100 + Math.random() * 9000000),
                    name: values.name,

                    email: values.email,
                    classes: values.classes,
                  })
                );

                console.log(students);
                console.log(name);
                dispatch(UIActions.ShowScreen());

                dispatch(closeModal('modal-add-enfant'));

                if (isMountedRef.current) {
                  setStatus({ success: true });
                  setSubmitting(false);
                }
              } catch (err) {
                console.error(err);
                if (isMountedRef.current) {
                  setStatus({ success: false });
                  setErrors({ submit: err.message });
                  setSubmitting(false);
                }
              }
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
              resetForm,
              // setFieldValue,
              // setTouched,
            }) => (
              <form onSubmit={handleSubmit} className="ta-form" {...rest}>
                <Typography variant="body2" color="textSecondary" className="label"></Typography>
                <span className="question-add">votre fils est-il inscrit sur le site?</span>
                <div className="select-button">
                  <div className="button-inscrit" onClick={changestate}>
                    <div
                      className={`text-button ${
                        !isopen ? 'default-button-inscrit' : 'text-button'
                      }`}
                    >
                      oui
                    </div>
                  </div>
                  <div className="button-inscrit" onClick={setisOpen}>
                    {' '}
                    <div
                      className={`text-button ${
                        isopen ? 'default-button-not-inscrit' : 'text-button'
                      }`}
                    >
                      non
                    </div>
                  </div>
                </div>

                <div className="OptionsHolder">
                  <TextField
                    className="namelastnamestyle"
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                    margin="dense"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    value={values.name}
                    variant="outlined"
                    size="small"
                    placeholder="Nom"
                  />

                  <TextField
                    className="namelastnamestyle"
                    error={Boolean(touched.prenom && errors.prenom)}
                    helperText={touched.prenom && errors.prenom}
                    margin="dense"
                    name="prenom"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    value={values.prenom}
                    variant="outlined"
                    size="small"
                    placeholder="Prénom "
                  />
                </div>
                <div className="RestOfOptionsHolder">
                  <TextField
                    className="input"
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    margin="dense"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    value={values.email}
                    variant="outlined"
                    size="small"
                    placeholder="Email "
                  />
                  <TextField
                    className="input"
                    error={Boolean(touched.telephone && errors.telephone)}
                    helperText={touched.telephone && errors.telephone}
                    margin="dense"
                    name="telephone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    value={values.telephone}
                    variant="outlined"
                    size="small"
                    placeholder="Téléphone "
                  />
                  <TextField
                    className="input"
                    error={Boolean(touched.motdepasse && errors.motdepasse)}
                    helperText={touched.motdepasse && errors.motdepasse}
                    margin="dense"
                    name="motdepasse"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    value={values.motdepasse}
                    variant="outlined"
                    size="small"
                    placeholder="Mot de passe "
                  />
                  <TextField
                    className="input"
                    error={Boolean(touched.confirmmotdepasse && errors.confirmmotdepasse)}
                    helperText={touched.confirmmotdepasse && errors.confirmmotdepasse}
                    margin="dense"
                    name="confirmmotdepasse"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    value={values.confirmmotdepasse}
                    variant="outlined"
                    size="small"
                    placeholder="Confirmation de mot de passe "
                  />
                  <TextField
                    className="input"
                    error={Boolean(touched.classes && errors.classes)}
                    helperText={touched.classes && errors.classes}
                    margin="dense"
                    name="classes"
                    onBlur={handleBlur}
                    select="true"
                    variant="outlined"
                    size="small"
                    value={values.classes}
                    onChange={handleChange}
                  >
                    <MenuItem disabled value="">
                      <em>classes</em>
                    </MenuItem>
                    {classe.map((option) => (
                      <MenuItem key={option.value} value={option.label}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <Box mt={2} className="button-group">
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="ta-btn primary btn-rounded btn-lg"
                    // onClick={() => submitHandler()}
                  >
                    Ajouter
                  </Button>
                  <div className="button-fermer">
                    <Button className="button-fermer" onClick={() => handleClose(id)}>
                      <span className="text-fermer">Fermer</span>
                    </Button>
                  </div>
                </Box>

                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
              </form>
            )}
          </Formik>
        )}
        {!isopen && (
          <Formik
            initialValues={{
              identifiant: '',
              name: '',
              submit: null,
            }}
            validationSchema={Yup.object().shape({
              identifiant: Yup.string().max(255).required('L identifiant est requis.'),
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
              try {
                dispatch(
                  EnfantActions.addEnfant({
                    id: values.identifiant,
                    name: LastEnfantName,
                  })
                );

                dispatch(UIActions.ShowScreen());

                dispatch(closeModal('modal-add-enfant'));

                if (isMountedRef.current) {
                  setStatus({ success: true });
                  setSubmitting(false);
                }
              } catch (err) {
                console.error(err);
                if (isMountedRef.current) {
                  setStatus({ success: false });
                  setErrors({ submit: err.message });
                  setSubmitting(false);
                }
              }
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
              resetForm,
              // setFieldValue,
              // setTouched,
            }) => (
              <form onSubmit={handleSubmit} className="ta-form" {...rest}>
                <Typography variant="body2" color="textSecondary" className="label"></Typography>
                <span className="question-add">votre fils est-il inscrit sur le site?</span>
                <div className="select-button">
                  <div className="button-inscrit" onClick={changestate}>
                    <div
                      className={`text-button ${
                        !isopen ? 'default-button-inscrit' : 'text-button'
                      }`}
                    >
                      oui
                    </div>
                  </div>
                  <div className="button-inscrit" onClick={setisOpen}>
                    {' '}
                    <div
                      className={`text-button ${
                        isopen ? 'default-button-not-inscrit' : 'text-button'
                      }`}
                    >
                      non
                    </div>
                  </div>
                </div>

                <div className="RestOfOptionsHolder">
                  <TextField
                    className="input"
                    error={Boolean(touched.identifiant && errors.identifiant)}
                    fullWidth
                    helperText={touched.identifiant && errors.identifiant}
                    margin="normal"
                    name="identifiant"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    value={values.identifiant}
                    variant="outlined"
                    size="small"
                    placeholder="L' identifiant "
                  />
                </div>
                <div className="identifiant">
                  <img src={ss} className="imageenfant" alt="" />
                  <div
                    className="selectenfant"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  >
                    {LastEnfantName}
                  </div>
                </div>
                <Box mt={2} className="button-group">
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="ta-btn primary btn-rounded btn-lg"
                    // onClick={() => submitHandler()}
                  >
                    Ajouter
                  </Button>
                  <div className="button-fermer">
                    <Button className="button-fermer" onClick={() => handleClose(id)}>
                      <span className="text-fermer">Fermer</span>
                    </Button>
                  </div>
                </Box>

                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
              </form>
            )}
          </Formik>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ModalAddEnfant;
