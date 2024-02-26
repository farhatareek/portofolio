import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function CopyrightFooter() {
    return (
    <Container sx={{position:"relative", top:{md:"350px",xs:"290px"}, margin:"auto ", borderTop:"1px solid #858792", paddingBottom:"2px"}}>
    <Box sx={{marginBottom:"50px"}}>
    <Typography sx={{color:"#858792", margin:"30px 0 0 0", textAlign:'center'}}>Copyrights<span><CopyrightIcon/></span>Farha Tareek . All Rights Reserved</Typography>
    </Box>
    </Container>
    )
}
