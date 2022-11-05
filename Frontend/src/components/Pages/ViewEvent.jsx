import { Paper, Typography} from '@material-ui/core'
import { Table, TableContainer, TableCell, TableRow} from '@mui/material'
import {React } from 'react'
import './Pages.css'
import moment from 'moment'

export const ViewEvent = ({eventTitle,eventDate,eventDetail}) => {
  const eventUnix = moment(eventDate).format('MMMM Do YYYY')
    return (
      <>
      <TableContainer
          component={Paper}
          className="paperStyle"
          sx={{ maxWidth: 700 }}
        >
          {/* <Typography className="formHeading" variant="h5">
            USER DETAIL
          </Typography> */}
          <Table>
            <TableRow>
              <TableCell variant="head">
                <Typography 
                variant="header" 
                className="tableHead">
                  EVENT
                </Typography>
              </TableCell>
              <TableCell>
              <Typography 
                variant="header" 
                className="tableHead">
                  {eventTitle}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <Typography variant="header" className="tableHead">
                  EVENT DATE
                </Typography>
              </TableCell>
              <TableCell>
              <Typography variant="header" className="tableHead">
                  {eventUnix}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <Typography variant="header" className="tableHead">
                  EVENT DETAILS
                </Typography>
              </TableCell>
              <TableCell>
              <Typography variant="header" className="tableHead">
                  {eventDetail}
                </Typography>
              </TableCell>
            </TableRow>
 
          </Table>
        </TableContainer>
      </>
    )
  }
  