import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light", // Light mode
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark", // Dark mode
    primary: {
      main: "#010114",
    },
    secondary: {
      main: "#F5F5F5",
    },
  },
});
