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
import DialogComponent from '../../components/DialogComponent'

const useStyle = makeStyles(styles)

const Main = () => {
    const [contract, setContract] = useState({} as any)
    const [loading, setLoading] = useState({} as any)
    const [open, setOpen] = useState(false)
    const [token, setToken] = useState<string>(tokenMap[CoinTypes.Alice])
    const classes = useStyle()
    
    const getData = useCallback(async () => {
        setLoading(true)
        const res = await getContracts({
            method: 'GetSmartContractInit',
            params: [token]
        })

        if (res?.error){
            setOpen(true)
            setLoading(false)
        }

        if (res?.result) {
            setLoading(false)
            setContract(convertResults(res?.result))
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

    const onModalClose = () => {
        setOpen(false)
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
                <Grid container md={10} xs={12} className={classes.detailsCardStyle}>
                    <DetailsCard loading={loading} contract={contract} />
                </Grid>
                <Grid container md={10} xs={12} className={classes.barChartStyle}>
                    <BarChartComponent selected={token}/>
                </Grid>
                <DialogComponent 
                    open={open}
                    onClose={onModalClose}
                    title="Invalid Address"
                    content="The transaction address that you have entered on the address bar is somehow invalid. Please try again."
                />
            </Container>
        </>
    )
}

export default Main
