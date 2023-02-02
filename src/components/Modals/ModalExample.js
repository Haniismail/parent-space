import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import { TextField, Box, FormHelperText, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import CloseIcon from '@material-ui/icons/Close';

const ModalExample = ({ id, open, handleClose, data, ...rest }) => {
  const isMountedRef = useIsMountedRef();
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
        <span className="label">Transfere des points</span>
        <span className="close-btn" onClick={() => handleClose(id)}>
          <CloseIcon />
        </span>
      </DialogTitle>
      <DialogContent className="ta-modal-content-scroll">
        <Formik
          initialValues={{
            identifiant: '',
            montant: '',
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            identifiant: Yup.string().max(255).required('L identifiant est requis.'),
            montant: Yup.string().max(255).required('Le montant  est requis.'),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              console.log('click!', values);

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
            <form noValidate onSubmit={handleSubmit} className="ta-form" {...rest}>
              <Typography variant="body2" color="textSecondary" className="label"></Typography>
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
                placeholder="identifiant de bénéficiare"
              />
              <TextField
                className="input"
                error={Boolean(touched.montant && errors.montant)}
                fullWidth
                helperText={touched.montant && errors.montant}
                margin="normal"
                name="montant"
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                value={values.montant}
                variant="outlined"
                size="small"
                placeholder="Montant"
              />
              {errors.submit && (
                <Box mt={3}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}
              <Box mt={2} className="ta-btns-group">
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="ta-btn primary btn-rounded btn-lg"
                >
                  Transferer des points
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default ModalExample;
