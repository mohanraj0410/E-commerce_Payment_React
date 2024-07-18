import { Grid, TextField } from "@mui/material";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

function FormInput({ name, label }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            defaultValue=""
            fullWidth
            required
          />
        )}
      />
    </Grid>
  );
}

export default FormInput;
