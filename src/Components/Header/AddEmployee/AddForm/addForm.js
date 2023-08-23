import React, { useContext } from "react";
import Form from "../../../form";
import FormInput from "../../../formInput";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, FormControl, MenuItem, Select } from "@mui/material";
import { EmployeeContext } from "../../../../Context/EmployeeContext";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  location: yup.object().shape({
    country: yup
      .string()
      .matches(/^([^0-9]*)$/, "Country should not contain numbers")
      .required("Country is a required field"),
    city: yup
      .string()
      .matches(/^([^0-9]*)$/, "City should not contain numbers")
      .required("City is a required field"),
    address: yup.string().required("City is a required field"),
  }),
  salary: yup
    .number()
    .typeError("Salary must not be empty")
    .min(500, "Salary must not be less than 500")
    .max(25000, "Very costly!")
    .required("Salary is a required field"),
  currency: yup.string().typeError("Salary must not be empty").required("Currency is a required field"),
  teams: yup
    .string()
    .matches(/^([^0-9]*)$/, "Teams should not contain numbers")
    .required("Teams is a required field"),
});

const AddForm = () => {
  const { addNewItem } = useContext(EmployeeContext);
  const [currency, setCurrency] = React.useState();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const onSubmit = async (data) => {
    addNewItem(data);
    reset();
  };

  return (
    <div className="modal-content">
      <Form onSubmit={handleSubmit(onSubmit)} className="modal-form">
        <FormInput
          sx={{ m: 1, maxWidth: 352 }}
          {...register("firstName", {
            required: "Fill in the field",
          })}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <FormInput
          sx={{ m: 1, maxWidth: 352 }}
          {...register("lastName", {
            required: "Fill in the field",
          })}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <FormInput
          sx={{ m: 1, maxWidth: 720 }}
          {...register("email", {
            required: "Fill in the field",
          })}
          id="email"
          type="email"
          label="Email"
          name="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <FormInput
          sx={{ m: 1, maxWidth: 720 }}
          {...register("location.country", {
            required: "Fill in the field",
          })}
          id="location.country"
          type="text"
          label="Country"
          name="location.country"
          error={!!errors.location}
          helperText={errors?.location?.message}
        />
        <FormInput
          sx={{ m: 1, maxWidth: 720 }}
          {...register("location.city", {
            required: "Fill in the field",
          })}
          id="location.city"
          type="text"
          label="City"
          name="location.city"
          error={!!errors.location}
          helperText={errors?.location?.message}
        />
        <FormInput
          sx={{ m: 1, maxWidth: 720 }}
          {...register("location.address", {
            required: "Fill in the field",
          })}
          id="location.address"
          type="text"
          label="Address"
          name="location.address"
          error={!!errors.location}
          helperText={errors?.location?.message}
        />
        <FormInput
          sx={{ m: 1, maxWidth: 620 }}
          {...register("salary", {
            required: "Fill in the field",
          })}
          id="salary"
          type="text"
          label="Salary"
          name="salary"
          error={!!errors.salary}
          helperText={errors?.salary?.message}
        />
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select
            {...register("currency", {
              required: "Fill in the field",
            })}
            id="currency"
            value={currency}
            onChange={handleChange}
            autoWidth
            error={!!errors.currency}
            helperText={errors?.currency?.message}
          >
            <MenuItem value="GEL">GEL</MenuItem>
            <MenuItem value="USD">USD </MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
          </Select>
        </FormControl>
        <FormInput
          sx={{ m: 1, maxWidth: 720 }}
          {...register("teams", {
            required: "Fill in the field",
          })}
          id="teams"
          type="text"
          label="Teams"
          name="teams"
          error={!!errors.teams}
          helperText={errors?.teams?.message}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <Button type="submit" disabled={!isValid} variant="contained">
            Add
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default AddForm;
