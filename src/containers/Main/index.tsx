/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import ToggleComponent from '../../components/ToggleComponent'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import styles from './styles'
import { makeStyles, Typography } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import { getContracts } from '../../contractsService'
import { convertResults } from '../../helpers'
import { tokenMap } from '../../config'
import { CoinTypes } from '../../types'

const useStyle = makeStyles(styles)

const Main = () => {
    const [contract, setContract] = useState({} as any)
    const [loading, setLoading] = useState({} as any)
    const [token, setToken] = useState(tokenMap[CoinTypes.Alice])
    const classes = useStyle()
    
    const getData = useCallback(async () => {
        setLoading(true)
        const res = await getContracts({
            method: 'GetSmartContractInit',
            params: [token]
        })
        if (res) {
            setLoading(false)
            setContract(convertResults(res))
        }
    }, [token])

    useEffect(() => {
        getData()
    }, [token])
        
    const handleChange = (event: any, value: string) => {
        setToken(value)
    }

    return (
        <>
            <Header />
            <Container className={classes.container}>
                <Grid md={10} xs={12}>
                    <SearchBar />
                </Grid>
                <Grid md={12}>
                    <ToggleComponent selected={token} handleChange={handleChange}/>
                </Grid>
                <Grid container md={10} xs={12} style={{border: '1px solid lightgrey', borderRadius: 6, padding: 16}}>
                    {loading ? <Grid item><CircularProgress size={24} /></Grid>: 
                    <Grid item>
                        <Typography variant="h6">{contract?.symbol?.value}</Typography> 
                        <Typography variant="body1">Name: {contract?.name?.value}</Typography> 
                        <Typography variant="caption">{contract?.owner?.value}</Typography>
                        <Typography variant="body1">Total Tokens: {contract?.total_tokens?.value}</Typography> 
                        <Typography variant="body1">Decimals: {contract?.decimals?.value}</Typography> 
                    </Grid>}
                </Grid>
            </Container>
        </>
    )
}

export default Main
