import { Grid, Paper, TextField, Typography,makeStyles, createTheme, ThemeProvider,Button,InputAdornment} from '@material-ui/core'
import {useState,React} from 'react'
import SubmitButton from '../Layout/SubmitButton';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import './Pages.css'
import Wrapper from '../Layout/Wrapper';
import { useParams } from 'react-router-dom';
import axios from '../api/axios'
import { API } from "../config";
import { ActionButton } from '../Layout/ActionButton';
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Josefin Sans",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    // width: "50%",
    margin: "auto",
  },
}));

export const ChangePassword = () => {
  
  const [email, setEmail] =useState('')
  const [password,setPassword]=useState('')
  const [confirmpassword,setConfirmPassword]=useState('')
  const [message, setMessage] = useState("");
  
  const {currentUser} = useParams()
  // const id = useParams()
  console.log(currentUser,'cUser')

  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = (e) => {
    setShowPassword(!showPassword);
  };
  const [showCPassword, setCShowPassword] = useState(false);

  const handlePasswordConfirmToggle = (e) => {
    setCShowPassword(!showCPassword);
  };

  const findUser = ()=>{
    return (currentUser==='admin')? true:false
  }

  const submitPassword = () =>
    (
      axios
      .put(`${API}/user/user/changepassword`, {
        email:email,
        newPassword:password,
        confirmPassword:confirmpassword
      })
      .then(
        // window.location.reload()
        console.log(password)
        )
      // console.log(email,password,confirmpassword)
      )
  // const submitPassword = () =>
  //   (
  //     axios
  //     .put(`${API}/user/changepassword`,{
  //       email:email,
  //         password:password,
  //         confirmpassword:confirmpassword
  //     })
  //     .then(() => {
  //       window.location.reload()
  //     })
  //   )
  // const submitPassword = async (e) => {
  //   e.preventDefault();
    
  //   await axios
  //     .put(
  //       `${API}/user/user/changepassword`,
  //       {
  //         email:email,
  //         password:password,
  //         confirmpassword:confirmpassword
  //       }
       
  //     )
  //     .then((result) => {
  //       setMessage(result.data.msg);
  //       console.log(result.data,message);
  //       console.log(result.data.msg);
  //       window.location.reload()
  //     });
  // };
  
  return (
    <>
      <Wrapper adminSidebar={findUser()} userSideBar={!findUser()} navHeader>
        
        <ThemeProvider theme={theme}>
          <div className="password_container">
            <Paper className={classes.paperStyle}>
              <Typography className="formHeading" variant="h5">
                CHANGE PASSWORD
              </Typography>
              <Grid container className="gridContainer">
                <Grid item xs={12} md={4}>
                  <Typography>Email:</Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField
                    name="uname"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    size="small"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </Grid>
              </Grid>

              <Grid container className="gridContainer">
                <Grid item xs={12} md={4}>
                  <Typography>New Password:</Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    size="small"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button onClick={handlePasswordToggle}>
                            {!showPassword ? <VisibilityOff /> : <Visibility />}
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container className="gridContainer">
                <Grid item xs={12} md={4}>
                  <Typography>Confirm Password:</Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    value ={confirmpassword}
                    size="small"
                    type={showCPassword ? "text" : "password"}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button onClick={handlePasswordConfirmToggle}>
                            {!showCPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container xs={12} md={12} className="gridButton">
                {/* <SubmitButton button_name="Submit" handleChange={submitPassword} button_id="changePassword_btn" /> */}
                <ActionButton 
              actionButton={<SubmitButton button_name="SUBMIT" handleChange={submitPassword} button_id="addTask_btn" />}
              dialogTitle="Password changed"
              dialogContent={"The user's password has been changed"}
              dialogAction={<SubmitButton button_name="Ok" button_id="addTask_btn" />}
              handleClose={()=>(window.location.reload())}
              />
              </Grid>
            </Paper>
          </div>
        </ThemeProvider>
      </Wrapper>
    </>
  );
};