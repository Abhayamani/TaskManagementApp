import { Paper, Typography} from '@material-ui/core'
import { Table, TableContainer, TableCell, TableRow} from '@mui/material'
import {React } from 'react'
import './Pages.css'

export const ViewTask = ({title,description,priority,task_status,user}) => {
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
                  Title
                </Typography>
              </TableCell>
              <TableCell>
              <Typography 
                variant="header" 
                className="tableHead">
                  {title}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <Typography variant="header" className="tableHead">
                  DESCRIPTION
                </Typography>
              </TableCell>
              <TableCell>
              <Typography variant="header" className="tableHead">
                  {description}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <Typography variant="header" className="tableHead">
                  PRIORITY
                </Typography>
              </TableCell>
              <TableCell>
              <Typography variant="header" className="tableHead">
                  {priority}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <Typography variant="header" className="tableHead">
                  STATUS
                </Typography>
              </TableCell>
              <TableCell>
              <Typography variant="header" className="tableHead">
                  {task_status}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <Typography variant="header" className="tableHead">
                  TASK ASSIGNED
                </Typography>
              </TableCell>
              <TableCell>
              <Typography variant="header" className="tableHead">
                  {user}
                </Typography>
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </>
    )
  }
  