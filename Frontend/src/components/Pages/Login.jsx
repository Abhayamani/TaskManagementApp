import {useNavigate} from 'react-router-dom';
import {Paper,  TextField, FormControlLabel,makeStyles, InputAdornment} from '@material-ui/core';
import { Button, Checkbox} from '@mui/material';
import SubmitButton from '../Layout/SubmitButton';
import React, {  useContext, useEffect, useRef, useState } from "react";
import AuthContext  from '../context/AuthProvider';
import axios from '../api/axios'
import Navbar from '../Navbar/Navbar';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    width: 344,
    textAlign: "center",
    padding: 36,
  },

  logoStyle: { height: 60, width: 60, margin: 20 },
  heading: {
    fontSize: 20,
  },
  checkboxStyle: {
    display: "flex",
    marginLeft: 10,
    marginBottom: 10,
  },
}));

const LOGIN_URL = "/user/login";

export default function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  // const [status,setStatus]=useState();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handlePasswordToggle = (e) => {
    setShowPassword(!showPassword);
  };

  //navigation to dashboard after clicking on login button
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // refreshPage()

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const token = response?.data?.token;
      const userID = response?.data?.userID;
      localStorage.setItem("token", token);
      localStorage.setItem("id", userID);
      setId(userID);
      console.log(JSON.stringify(response?.data));
      setRole(response?.data?.role);
      setAuth({ email, password, role, token });
      setSuccess(true);
      setEmail("");
      setPassword("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (err.response?.status === 404) {
        setErrMsg("Invalid email");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    handleSubmit();
  }
};
 
  //
  const admin_path = `/admin/dashboard/${id}`;
  const user_path = `/user/dashboard/${id}`;
  return (
    <>
      {success ? (
        role !== "Project Manager" ? (
          navigate(user_path)
        ) : (
          navigate(admin_path)
        )
      ) : (
        <section className="login_page">
          <Navbar />

          <div className="login_container">
            <div className="login_banner">
              <h1>WELCOME BACK!</h1>
              <p>You can sign in to access with your existing account.</p>
            </div>
            <div className="login_form">
            
              <Paper elevation={20} className={classes.paperStyle}>
              <form onSubmit={handleSubmit} >
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/asterLogo.png"}
                    alt=""
                    className={classes.logoStyle}
                  />
                  <h1 className={classes.heading}>LOG IN</h1>
                </div>
                <TextField
                  label="Username"
                  type="email"
                  placeholder="Enter username"
                  autoComplete="off"
                  fullWidth
                  required
                  ref={userRef}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  style={{ marginBottom: 20 }}
                />
                <TextField
                  label="Password"
                  // type="password"
                  placeholder="Enter password"
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button onClick={handlePasswordToggle}>
                          {!showPassword ? <VisibilityOff /> : <Visibility />}
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                  required
                  style={{ marginBottom: 20 }}
                />
                <div className={classes.checkboxStyle}>
                  <FormControlLabel
                    control={<Checkbox name="checked" defaultChecked />}
                    label="Remember me"
                  />
                </div>
                <p
                  ref={errRef}
                  className={errMsg ? "errmsg" : "offscreen"}
                  aria-live="assertive"
                  style={{ color: "#ff0000" }}
                >
                  {errMsg}
                </p>
                <SubmitButton
                  handleChange={(e) => handleSubmit(e)}
                  button_name="Login"
                  fullWidth
                />
                {/* <button
                onClick={(e) => handleSubmit(e)}
                type='submit'
                label='Login'
                /> */}
                
              </form>
              </Paper>
            </div>
          </div>
        </section>
      )}
    </>
  );
}