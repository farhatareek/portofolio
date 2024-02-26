"use client"
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';


export default function Skils() {
    return (
        <Container sx={{ flexGrow: 2, overflow:"hidden" , color:"#fff", marginTop:"30px" }}>
        <Typography sx={{fontSize:"25px" , textAlign:"center", paddingBottom:"60px"}}>Work Experience</Typography>
        {/* timeline bar for woek experience */}
        <Grid container  >
        <Timeline position="alternate" >
        <TimelineItem>
        <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary" variant="outlined">
        <LaptopMacIcon />
        </TimelineDot>
        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
        Freelancer Front end Developer 
        </Typography>
        <Typography sx={{paddingTop:"20px"}}>Upwork </Typography>
        <Typography>May 2022 to Present</Typography>
        <Typography sx={{paddingTop:"20px"}}>Utilized HTML, CSS, and JavaScript to create a dynamic, interactive user interface that improved user
        experience</Typography>
        </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        <TimelineDot color="secondary">
        <LaptopMacIcon/>
        </TimelineDot>
        <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
        Front End Develope
        </Typography>
        <Typography sx={{paddingTop:"20px"}}>Eraa soft - Giza</Typography>
        <Typography>September 2022 to October 2022</Typography>
        <Typography sx={{paddingTop:"20px"}}>one-month internship as a front end developer in eraa soft company using react.js and next.js
        Implemented a single-page application using React and Redux that improved overall performance and
        usability front end developer</Typography>
        </TimelineContent>
        </TimelineItem>
        </Timeline>
        </Grid>
        </Container>
    );
}






