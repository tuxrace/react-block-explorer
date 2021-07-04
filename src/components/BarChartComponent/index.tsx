/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect, useCallback, useState } from 'react';
import {VictoryBar} from 'victory'
import { getContracts } from '../../contractsService';

interface Props {
  selected: string
}

const BarChartComponent = (props: Props) => {
  const { selected } = props
  const [data, setData] = useState<any>()
  
  const getData = useCallback(async () => {
    const res = await getContracts({method: 'GetSmartContractState', params:[selected]})
    if (res) {
      const balances = res?.balances
      const convertedData = Object.keys(balances).map(key => {
        return {
          hash: key,
          balance: balances[key]
        }
      })
      setData(convertedData)
    }
  }, [selected])

    useEffect(() => {
      getData()
    }, [selected])
    
    return <div style={{marginTop: 16}}>
      <VictoryBar data={data} x="hash" y="balance" />
    </div>
}

export default BarChartComponent
