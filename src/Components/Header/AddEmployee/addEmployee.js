import React from "react";
import AddForm from "./AddForm/addForm";

import "./addEmployee.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "24%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: "rgba(0, 0, 0, 0.35) 0 5 15",
  borderRadius: 8,
  p: 4,
};

const AddEmployee = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Add Employee
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <AddForm />
        </Box>
      </Modal>
    </div>
  );
};
export default AddEmployee;
