import { MenuItem, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import classes from "./Header.module.css";
import categorys from "../Data/category";

const Header = (props) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: props.backgroundMode ? "#fff" : "#000",
      },
      mode: props.backgroundMode ? "dark" : "light",
    },
  });

  const handleChange = (language) => {
    props.setCategory(language);
    props.setWord("");
  };

  return (
    <div className={classes.header}>
      <span className={classes.title}>
        {props.word ? props.word : "Word Hunt 🔍"}
      </span>
      <div className={classes.inputs}>
        <ThemeProvider theme={darkTheme}>
          <TextField
            className={classes.search}
            label="Search a word"
            variant="standard"
            value={props.word}
            onChange={(e) => props.setWord(e.target.value)}
          />
          <TextField
            select
            className={classes.select}
            label="Language"
            onChange={(e) => handleChange(e.target.value)}
            value={props.category}
            variant="standard"
          >
            {categorys.map((option) => {
              return (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              );
            })}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
