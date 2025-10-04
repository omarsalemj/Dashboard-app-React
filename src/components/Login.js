import React, {useState} from 'react'

import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import myLogo from '../images/myLogo.png'
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    input: {
        display: 'block',
        width: '100%',
        padding: '18px 15px',
        backgroundColor: '#f1f1f1',
        height: '50px',
        border: 'none',
        outline: 'none',
        borderRadius: '10px',
        boxShadow: '0px 0px 8px 5px #f0f0f0',
        fontSize: '1.1rem',
        '&::placeholder': {
            color: '#b0b0b0',
        },
        '&:first-of-type': {
            marginBottom: '55px'
        }
    },
    submitBtn: {
      width: '100%',
      display: 'block',
      textAlign: 'center',
      textDecoration: 'none',
      fontSize: '1.2rem',
      background: 'linear-gradient(to right top, #0e479c, #77c7e2)',
      color: '#fff',
      textTransform: 'none',
      padding: '15px 0',
      borderRadius: '15px',
      boxShadow: '0px 5px 10px #aaa',
      marginTop: '35px',
      '&:hover': {
        color: '#fff'
      }
    }
})

function Login() {

    
    const theme = useTheme()
    const hidden = useMediaQuery(theme.breakpoints.down('md'))

    const classes = useStyles()

    const [showMyPassword, setShowMyPassword] = useState(false);
    const [password, setPassword] = useState('');
  
    const handleTogglePasswordVisibility = () => {
      setShowMyPassword(!showMyPassword);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

  return (
    <>
        <div style={{width: !hidden ? '40%' : '80%', margin: 'auto', paddingTop: '50px'}}>
            <img src={myLogo} alt='logo' width={150} style={{display: 'block', margin: 'auto'}} />
            <p style={{marginTop: '50px'}}>Hello welcome back, Please login to your account</p>
            <form>
                <InputBase className={classes.input} type='email' placeholder='Email'/>
                <InputBase
                    className={classes.input} 
                    style={{position: 'relative'}}
                    type={showMyPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={handleTogglePasswordVisibility}>
                        {showMyPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                <Link style={{display: 'block', marginTop: '15px', color: '#aaa', textAlign: 'right'}}>Forgot password?</Link>
                <Link to='/home' className={classes.submitBtn}>Login</Link>
            </form>
        </div>
    </>
  )
}

export default Login