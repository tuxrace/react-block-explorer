/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import DetailsCard from '../../components/DetailsCard'
import ToggleComponent from '../../components/ToggleComponent'
import BarChartComponent from '../../components/BarChartComponent'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import styles from './styles'
import { makeStyles, Typography } from '@material-ui/core'
import { getContracts } from '../../contractsService'
import { convertResults, convertStr } from '../../helpers'
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

    const handleSearch = (value: string) => {
        setToken(convertStr(value))
    }

    return (
        <>
            <Header />
            <Container className={classes.container}>
                <Grid md={10} xs={12}>
                    <SearchBar handleSearch={handleSearch} />
                </Grid>
                <Grid md={12}>
                    <ToggleComponent selected={token} handleChange={handleChange}/>
                </Grid>
                <Grid container md={10} xs={12} style={{border: '1px solid lightgrey', borderRadius: 6, padding: 16}}>
                    <DetailsCard loading={loading} contract={contract} />
                </Grid>
                <Grid container md={10} xs={12} style={{border: '1px solid lightgrey', borderRadius: 6, padding: 16, marginTop: 16}}>
                    <BarChartComponent selected={token}/>
                </Grid>
            </Container>
        </>
    )
}

export default Main
