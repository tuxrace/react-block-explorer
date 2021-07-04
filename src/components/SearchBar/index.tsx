import React from 'react'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core';
import styles from './styles';
import { useState } from 'react';

interface Props {
  handleSearch: (val: any) => void
}

const useStyles = makeStyles(styles)

const SearchBar = (props: Props) => {
    const {handleSearch} = props
    const [searchStr, setSearchStr] = useState() as any
    const classes = useStyles()

    const onSearch = () => {
      handleSearch(searchStr)
    }

    const handleInputChange = (event: any) => {
      setSearchStr(event?.target.value)
    }

    return <TextField
    label="transaction address"
    id="standard-start-adornment"
    variant="outlined"
    onChange={handleInputChange}
    className={classes.searchStyle}
    InputProps={{
      endAdornment: <InputAdornment position="end" onClick={onSearch}>{`🔎`}</InputAdornment>,
    }}
  />
}

export default SearchBar
