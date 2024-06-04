"use client";
import BaseLayout from "@/components/BaseLayout";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "../../../../../styles/EmployeePage/employeePage.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lightBlue, lime, purple } from "@mui/material/colors";
import EmployeeTable from "../../../../components/EmployeeTable/EmployeeTable";
import { Box } from "@mui/material";

export default function Employee() {
  const Employee = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "John Smith", id: 3 },
    { name: "Jane Smith", id: 4 },
  ];
  const theme = createTheme({
    palette: {
      primary: { main: "#3979f0", contrastText: "#fff" },
      secondary: purple,
    },
  });

  return (
    <BaseLayout>
      <div className="employee-container">
        <div className="upper-container">
          <div className="upper-container__left">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={Employee}
              sx={{
                width: 500,
                borderRadius: 10,
              }}
              renderInput={(params) => (
                <TextField {...params} label="Name of the Employee" />
              )}
            />
          </div>
          <div className="upper-container__right">
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="primary">
                + Add Employee
              </Button>
            </ThemeProvider>
          </div>
        </div>
        <div className="lower-container">
          <Box
            sx={{
              bgcolor: "#EEEEEE",
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              minWidth: 300,
            }}
          >
            <EmployeeTable />
          </Box>
        </div>
      </div>
    </BaseLayout>
  );
}
