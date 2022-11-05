// import { createTheme, ThemeProvider } from '@material-ui/core';
import {Button} from '@mui/material';
import React from 'react'

const SubmitButton = ({button_id,button_name,handleChange,fullWidth}) => {
  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
        <Button id={button_id} onClick={handleChange}  type='submit' variant="contained" style={{backgroundColor:'#00d563'}} fullWidth={fullWidth} >{button_name}</Button>
      {/* </ThemeProvider> */}
    </>
  )
}

export default SubmitButton
