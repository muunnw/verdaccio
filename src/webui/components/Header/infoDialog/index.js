/**
 * @prettier
 */

// @flow

import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import {IProps} from './interfaces';

const InfoDialog = ({open = false, children, onClose}: IProps): ReactElement => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Register Info</DialogTitle>
    <DialogContent>{children}</DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary" autoFocus>
        OK
      </Button>
    </DialogActions>
  </Dialog>
);

export default InfoDialog;
