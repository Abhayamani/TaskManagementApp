import { AddCircle, Delete,Edit,Visibility } from "@material-ui/icons"
import { ActionButton } from "./ActionButton"
import React from "react";
import { AddEvent } from "../Pages/AddEvent";

export const ViewButton = ({dialogTitle,dialogContent,handleView}) => {
  return (
    <>
      <ActionButton
        actionButton={<Visibility />}
        dialogTitle={dialogTitle}
        dialogContent={dialogContent}
        handleClose={handleView}
        close
      />
    </>
  );
};


export const EditButton = ({dialogContent,dialogTitle,handleEdit}) => {
  return (
    <>
      <ActionButton
        actionButton={<Edit />}
        dialogTitle={dialogTitle}
        dialogContent={dialogContent}
        alternateActionButton
        // dialogAction="Save Changes"
        actionButton_color="primary"
        handleClose={handleEdit}
        close
      />
    </>
  );
};

export const DeleteButton = ({dialogContent,dialogTitle,handleDelete}) => {
  return (
    <>
      <ActionButton
        actionButton={<Delete />}
        dialogTitle={dialogTitle}
        dialogContent={dialogContent}
        alternateActionButton
        dialogAction="Confirm Delete"
        actionButton_color="secondary"
        handleClose={handleDelete}
        close
      />
    </>
  );
};

export const AddEventButton = ({handleView}) => {
  return (
    <>
      <ActionButton
        actionButton={<p className="addevent_p"> <AddCircle fontSize='large'/> </p> }
        dialogTitle="Add Event"
        // dialogAction="Add"
        alternateActionButton
        dialogContent={<AddEvent/>}
        actionButton_color='primary'
        handleClose={handleView}
        close
      />
    </>
  );
};