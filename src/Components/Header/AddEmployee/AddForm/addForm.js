import React from "react";
import Form from "../../../form";
import FormInput from "../../../formInput";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button } from "@mui/material";
import { useData } from "../../../../Context/EmployeeContext";

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
      .matches(/^([^0-9]*)$/, "Country should not contain numbers")
      .required("Country is a required field"),
    address: yup.string().required("Country is a required field"),
  }),
  salary: yup
    .number()
    .typeError("Salary must not be empty")
    .min(500, "Salary must not be less than 500")
    .max(25000, "Very costly!")
    .required("Country is a required field"),
  teams: yup
    .string()
    .matches(/^([^0-9]*)$/, "Teams should not contain numbers")
    .required("Teams is a required field"),
});

const AddForm = () => {
  const { employee, setValues } = useData();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      location: employee.location,
      salary: employee.salary,
      teams: employee.teams,
    },
  });

  const onSubmit = (employee) => {
    setValues(employee);
    reset();
    console.log(employee);
  };

  return (
    <div className="modal-content">
      <Form onSubmit={handleSubmit(onSubmit)} className="modal-form">
        <FormInput
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
          {...register("salary", {
            required: "Fill in the field",
          })}
          id="salary"
          type="number"
          label="Salary"
          name="salary"
          error={!!errors.salary}
          helperText={errors?.salary?.message}
        />
        <FormInput
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
            // flexDirection: 'column',
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
