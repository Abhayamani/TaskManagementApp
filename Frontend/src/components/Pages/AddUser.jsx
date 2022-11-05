// import React, { useState } from 'react';
// import {Paper,  TextField, Grid, Typography, makeStyles, FormControl, Select, MenuItem,IconButton, createTheme, ThemeProvider,Button,InputAdornment} from '@material-ui/core';
// import {AccountCircleRounded,PhotoCamera,Visibility, VisibilityOff} from '@material-ui/icons';
// import './Pages.css'
// import SubmitButton from '../Layout/SubmitButton';
// import Wrapper from '../Layout/Wrapper';
// import { ActionButton } from '../Layout/ActionButton';

// //defining theme to overRide the default topography fontFamily
// const theme = createTheme({
//   typography: {
//     allVariants:{
//       fontFamily: 'Josefin Sans',
//       textAlign:'left'
//     }
//   },
// });

// //defining styles for various components
// const useStyles=makeStyles(theme=>({
  
//   gridContainer:{
//     paddingRight:40,
//     paddingLeft:40,
//     paddingBottom:30,
//   },
  
//   userImage:{
//     height:50,
//     borderRadius:50,
//     marginLeft:30
//   },
//   userIcon:
//   {
//     marginBottom:20,
//     padding:0, 
//     paddingLeft:15
//   },
//   userIconCircle:{
//     fontSize:50,
//     marginLeft:30},

// }))

// //defining an array of roles for the dropdown menu
// const roles=[
//   'Frontend Developer',
//   'Backend Developer',
//   'Designer',
//   'QA'
// ]

// export default function AddUser() {
//   const classes = useStyles(); //allows you to use styles as objects. You can use classes.anyStyle

//   const [image, setImage] = useState();
//   const handleImageUpload = (e) => {
//     setImage(URL.createObjectURL(e.target.files[0]));
//   };

//   const [showPassword, setShowPassword] = useState(false);

//   const handlePasswordToggle = (e) => {
//     setShowPassword(!showPassword);
//   };

//   //select bhako role ko value chaiyema use this---
//   const [role, setRole] = useState("Select a role");

//   const handleChange = (event) => {
//     setRole(event.target.value);
//   };
//   //---//

//   return (
//     <>

//       <ThemeProvider theme={theme}>
//         <Wrapper adminSidebar navHeader >
        
//           <Paper className="paperStyle">
//             <Typography
//               className="formHeading"
//               style={{ textAlign: "center" }}
//               variant="h4"
//             >
//               ADD USER
//             </Typography>
//             <Grid container spacing={3} className={classes.gridContainer}>
//               <Grid item xs={6} md={8}>
//                 <Typography>Name</Typography>
//                 <TextField
//                   id="userName"
//                   size="small"
//                   variant="outlined"
//                   fullWidth
//                 ></TextField>
//               </Grid>
//               <Grid item xs={6} md={4}>
//                 {
//                   // if image chaina bhane icon dekhaucha natra image nai dekhaucha. if else use garya cha tala
//                 }
//                 {!image ? (
//                   <AccountCircleRounded className={classes.userIconCircle} />
//                 ) : (
//                   <img className={classes.userImage} src={image} alt="" />
//                 )}
//                 <IconButton
//                   className={classes.userIcon}
//                   color="primary"
//                   aria-label="upload picture"
//                   component="label"
//                 >
//                   <input
//                     hidden
//                     id="userImage"
//                     accept="image/*"
//                     type="file"
//                     onChange={handleImageUpload}
//                   />
//                   <PhotoCamera />
//                 </IconButton>
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <Typography>Phone</Typography>
//                 <TextField
//                   id="userPhone"
//                   size="small"
//                   type="number"
//                   variant="outlined"
//                   fullWidth
//                 ></TextField>
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <Typography>Mobile No.</Typography>
//                 <TextField
//                   id="userMobile"
//                   size="small"
//                   type="number"
//                   variant="outlined"
//                   fullWidth
//                 ></TextField>
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <Typography>Email</Typography>
//                 <TextField
//                   id="userEmail"
//                   size="small"
//                   type="email"
//                   variant="outlined"
//                   fullWidth
//                 ></TextField>
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Typography>Role</Typography>
//                 <FormControl fullWidth>
//                   <Select
//                     value={role}
//                     onChange={handleChange}
//                     style={{ height: 40 }}
//                     variant="outlined"
//                     defaultValue={role}
//                   >
//                     <MenuItem value="Select a role">
//                       <em style={{ fontStyle: "normal", color: "gray" }}>
//                         Select a role
//                       </em>
//                     </MenuItem>
//                     {roles.map((role) => {
//                       return (
//                         <MenuItem key={role} value={role}>
//                           {role}
//                         </MenuItem>
//                       );
//                     })}
//                   </Select>
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <Typography>Password</Typography>
//                 <TextField
//                   size="small"
//                   type={showPassword ? "text" : "password"}
//                   variant="outlined"
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <Button onClick={handlePasswordToggle}>
//                           {!showPassword ? <VisibilityOff /> : <Visibility />}
//                         </Button>
//                       </InputAdornment>
//                     ),
//                   }}
//                   fullWidth
//                 ></TextField>
//               </Grid>
//             </Grid>
//             <Grid container xs={12} md={12} className="gridButton">
              
//               <ActionButton 
//               actionButton={<SubmitButton button_name="ADD" button_id="addTask_btn" />}
//               dialogTitle="User Added"
//               dialogContent={"A new user has been added"}
//               dialogAction={<SubmitButton button_name="Ok" button_id="addTask_btn" />}
//               handleClose={()=>(window.location.reload())}
//               />
//             </Grid>
//           </Paper>
//         </Wrapper>
//       </ThemeProvider>
//     </>
//   );
// }
import React, {  useRef, useState } from 'react';
import { Paper, TextField, Grid, Typography, makeStyles, FormControl, Select, MenuItem, IconButton, createTheme, ThemeProvider, Button, InputAdornment } from '@material-ui/core';
import { AccountCircleRounded, PhotoCamera, Visibility, VisibilityOff } from '@material-ui/icons';
import './Pages.css'
import SubmitButton from '../Layout/SubmitButton';
import Wrapper from '../Layout/Wrapper';
import axios from '../api/axios'
// import AuthContext from '../context/AuthProvider';
import { API } from "../config";
import { ActionButton } from '../Layout/ActionButton';
//defining theme to overRide the default topography fontFamily
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Josefin Sans',
      textAlign: 'left'
    }
  },
});

//defining styles for various components
const useStyles = makeStyles(theme => ({

  gridContainer: {
    paddingRight: 40,
    paddingLeft: 40,
    paddingBottom: 30,
  },

  userImage: {
    height: 50,
    borderRadius: 50,
    marginLeft: 30
  },
  userIcon:
  {
    marginBottom: 20,
    padding: 0,
    paddingLeft: 15
  },
  userIconCircle: {
    fontSize: 50,
    marginLeft: 30
  },

}))


//defining an array of roles for the dropdown menu
const roles = [
  'Frontend Developer',
  'Backend Developer',
  'Designer',
  'QA'
]

export default function AddUser() {


  const userRef = useRef()
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  // const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("Select a role");
 
 
  const submitUser = async (e) => {
    e.preventDefault();
    // console.log(name,email,role,address,password,mobile)
    await axios
      .post(
        `${API}/user/register`,
        {
          name: name,
          email: email,
          role: role,
          mobile: mobile, 
          address: address,
          password:password,
          // phone:phone
        }
       
      )
      .then((result) => {
        
        console.log(result.data);
        console.log(result.data.msg);
      });
  };

  const classes = useStyles(); //allows you to use styles as objects. You can use classes.anyStyle

  const [image, setImage] = useState();
  // const handleImageUpload = (e) => {
  //   setImage(URL.createObjectURL(e.target.files[0]));
  // };



  const handlePasswordToggle = (e) => {
    setShowPassword(!showPassword);
  };

  //select bhako role ko value chaiyema use this---


  // const handleChange = (event) => {
  //   setRole(event.target.value);
  // };
  //---//

  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper adminSidebar navHeader>
          <Paper className="paperStyle">
            
              <Typography
                className="formHeading"
                style={{ textAlign: "center" }}
                variant="h4"
              >
                ADD USER
              </Typography>
              <Grid container spacing={3} className={classes.gridContainer}>
                <Grid item xs={12} md={12}>
                  <Typography>Name</Typography>
                  <TextField
                    value={name}
                    ref={userRef}
                    size="small"
                    variant="outlined"
                    fullWidth
                    onChange={(e)=>setName(e.target.value)}
                  ></TextField>
                </Grid>
                {/* <Grid item xs={6} md={4}>
                  {
                    // if image chaina bhane icon dekhaucha natra image nai dekhaucha. if else use garya cha tala
                  }
                  {!image ? (
                    <AccountCircleRounded className={classes.userIconCircle} />
                  ) : (
                    <img className={classes.userImage} src={image} alt="" />
                  )}
                  <IconButton
                    className={classes.userIcon}
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    <input
                      hidden
                      id="userImage"
                      accept="image/*"
                      type="file"
                      onChange={(e)=>setImage(e.target.value)}
                    />
                    <PhotoCamera />
                  </IconButton>
                </Grid> */}
                <Grid item xs={6} md={6}>
                  <Typography>Address</Typography>
                  <TextField
                    value={address}
                    size="small"
                    type="string"
                    variant="outlined"
                    fullWidth
                    onChange={(e)=>setAddress(e.target.value)}
                  ></TextField>
                </Grid>
                {/* <Grid item xs={6} md={6}>
                  <Typography>Phone</Typography>
                  <TextField
                    value={phone}
                    size="small"
                    type="string"
                    variant="outlined"
                    fullWidth
                    onChange={(e)=>setPhone(e.target.value)}
                  ></TextField>
                </Grid> */}
                <Grid item xs={6} md={6}>
                  <Typography>Mobile No.</Typography>
                  <TextField
                    value={mobile}
                    size="small"
                    type="number"
                    variant="outlined"
                    fullWidth
                    onChange={(e)=>setMobile(e.target.value)}
                  ></TextField>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>Email</Typography>
                  <TextField
                    value={email}
                    size="small"
                    type="email"
                    variant="outlined"
                    fullWidth
                    onChange={(e)=>setEmail(e.target.value)}
                  ></TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>Role</Typography>
                  <FormControl fullWidth>
                    <Select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      style={{ height: 40 }}
                      variant="outlined"
                      defaultValue={role}
                    >
                      <MenuItem value="Select a role">
                        <em style={{ fontStyle: "normal", color: "gray" }}>
                          Select a role
                        </em>
                      </MenuItem>
                      {roles.map((role) => {
                        return (
                          <MenuItem key={role} value={role}>
                            {role}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>Password</Typography>
                  <TextField
                    size="small"
                    value={password}
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
                    onChange={
                      (e)=>setPassword(e.target.value)}
                  ></TextField>
                </Grid>
              </Grid>
              <Grid container xs={12} md={12} className="gridButton">
                {/* <SubmitButton
                  button_name="ADD"
                      handleChange={submitUser}
                /> */}
                <ActionButton 
              actionButton={<SubmitButton button_name="ADD" handleChange={submitUser} button_id="addTask_btn" />}
              dialogTitle="User Added"
              dialogContent={"A new user has been added"}
              dialogAction={<SubmitButton button_name="Ok" button_id="addTask_btn" />}
              handleClose={()=>(window.location.reload())}
              />
              </Grid>
            
          </Paper>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}