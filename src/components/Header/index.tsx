import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { colors, makeStyles } from '@material-ui/core';
import styles from './styles';



const Header = () => {
    const useStyles = makeStyles(styles)
    const classes = useStyles()
    return <AppBar position="static" className={classes.header}>
    <Typography variant="h6">
        {`🛡️`} Clever Block Explorer
      </Typography>
  </AppBar>
}

export default Header
