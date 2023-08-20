import React from "react";
import Form from "../../../form";
import FormInput from "../../../formInput";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Checkbox, FormControlLabel, Input } from "@mui/material";

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
});

const AddForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const showPhoneInput = watch("hasPhone");

  const onSubmit = (data) => {
    reset();
    console.log(data);
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
        <Button type="submit" disabled={!isValid} variant="contained">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddForm;
