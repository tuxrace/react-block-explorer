import React from 'react'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core';
import styles from './styles';

const useStyles = makeStyles(styles)
const SearchBar = () => {
    const classes = useStyles()

    return <TextField
    label="transaction address"
    id="standard-start-adornment"
    variant="outlined"
    className={classes.searchStyle}
    InputProps={{
      endAdornment: <InputAdornment position="end">{`🔎`}</InputAdornment>,
    }}
  />
}

export default SearchBar
