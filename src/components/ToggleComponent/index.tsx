import React, {useState} from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Grid, makeStyles } from '@material-ui/core';
import styles from './styles';
import { CoinTypes } from '../../types';
import { tokenMap } from '../../config';

const ToggleComponent = (props: any) => {
    const {handleChange, selected} = props
    const useStyles = makeStyles(styles)
    const classes = useStyles()
    
    return <ToggleButtonGroup exclusive value={selected} onChange={handleChange} className={classes.toggleStyle}>
        <ToggleButton value={tokenMap[CoinTypes.Alice]}> {CoinTypes.Alice} </ToggleButton>
        <ToggleButton value={tokenMap[CoinTypes.Bob]}> {CoinTypes.Bob} </ToggleButton>
      </ToggleButtonGroup>
      
}

export default ToggleComponent
