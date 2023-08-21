import React, { forwardRef } from "react";
import { TextField } from "@mui/material";

const FormInput = forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin= 'normal'
      inputRef={ref}
      {...props}
      fullWidth
    ></TextField>
  );
});

export default FormInput;
