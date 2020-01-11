import React from 'react';
import {
  Paper,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const Login = () => {
  const [userInput, setUserInput] = React.useState('');
  const [pwdInput, setPwdInput] = React.useState('');
  const [confirmPwdInput, setConfirmPwdInput] = React.useState('');
  const [confirmState, setConfirmState] = React.useState({
    message: false,
    warning: false,
    success: false,
  });

  React.useEffect(() => {
    if (pwdInput === confirmPwdInput && confirmPwdInput !== '') {
      setConfirmState({
        ...confirmState,
        message: true,
        warning: false,
        success: true,
      });
    } else if (pwdInput !== confirmPwdInput && confirmPwdInput !== '') {
      setConfirmState({
        ...confirmState,
        message: true,
        warning: true,
        success: false,
      });
    } else if (pwdInput === '' && confirmPwdInput === '') {
      setConfirmState({
        ...confirmState,
        message: false,
        warning: false,
        success: false,
      });
    }
  }, [pwdInput, confirmPwdInput, confirmState]);
  console.log(confirmState.message);
  return (
    <div>
      <Paper>
        <div>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md sm xs>
              <h1>Create Account</h1>
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">

            <Grid item md sm xs>
              <TextField id="username" label="Username" type="email" fullWidth autoFocus required onChange={(e) => setUserInput(e.target.value)} value={userInput} />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md sm xs>
              <TextField id="password" label="Password" type="password" fullWidth required onChange={(e) => setPwdInput(e.target.value)} value={pwdInput} />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md sm xs>
              <TextField id="confirmPassword" label="Confirm Password" type="password" fullWidth required onChange={(e) => setConfirmPwdInput(e.target.value)} value={confirmPwdInput} />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md sm xs>
              {confirmState.message && (
                <Grid item md sm xs>
                  {confirmState.warning && (
                    <Alert severity="error">{'Error: Password\'s Don\'t Match'}</Alert>
                  )}
                  {confirmState.success && (
                    <Alert severity="success">{'Success: Password\'s Match'}</Alert>
                  )}
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <FormControlLabel control={<Checkbox color="primary" />} label="Remember me" />
            </Grid>
            <Grid item>
              <Button disableFocusRipple disableRipple style={{ textTransform: 'none' }} variant="text" color="primary">Forgot password ?</Button>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: '10px' }}>
            <Button variant="outlined" color="primary" style={{ textTransform: 'none' }}>Login</Button>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default Login;
