import React from 'react'
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

interface Props {
  loading: boolean;
  contract: any;
}

const DetailsCard = (props: Props) => {
    const {loading, contract} = props
    return <>
      {loading ? <Grid item><CircularProgress size={24} /></Grid>: 
                    <Grid item>
                        <Typography variant="h6">{contract?.symbol?.value}</Typography> 
                        <Typography variant="body1">Name: {contract?.name?.value}</Typography> 
                        <Typography variant="caption">{contract?.owner?.value}</Typography>
                        <Typography variant="body1">Total Tokens: {contract?.total_tokens?.value}</Typography> 
                        <Typography variant="body1">Decimals: {contract?.decimals?.value}</Typography> 
                    </Grid>}
    </>
}

export default DetailsCard
