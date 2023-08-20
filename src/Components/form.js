import React from "react";
import { styled } from "@mui/material/styles";

// const theme = createTheme();
const useStyle = styled((theme) => ({
  root: {
    width: "100",
    marginTop: theme.spacing(1),
  },
}));

const Form = ({ children, ...props }) => {
  const style = useStyle;

  return (
    <form noValidate {...props} className={style.root}>
      {children}
    </form>
  );
};

export default Form;
