'use client'
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useRef } from 'react';
import { animate, motion, useInView } from "framer-motion";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Card, Container, Typography } from '@mui/material';

function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : "translateX(-500px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </span>
      </section>
    );
  }

export default function About() {
    const [value, setValue] = React.useState('md');
    
const varients={
    initial:{
    x:500,
    y:-100,
    opacity:0
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
        duration:1,
        staggerChildren:0.1
        }
    }
    }
    return (
    <Container   sx={{ flexGrow: 2,overflowX:"hidden", width:"100%" ,color:"#fff", textAlign:"center"}}>
        <Section >
        <Typography sx={{fontSize:"25px", marginTop:"90px"}}>About me</Typography>
        <Grid component={motion.div} sx={{display:"flex"}} container spacing={2} >
        <Grid sx={{display:{xs:"block",md:"flex"}, justifyContent:"center", alignItems:"center"}}>
        <Grid sx={{marginTop:"100px", paddingLeft:"20px"}}  md={6} item xs={10}>
        <Typography sx={{textAlign:"start", fontSize:"20px", color:"#858792"}}>Introduction</Typography>
        <Typography sx={{fontSize:"35px", fontWeight:"bold" , textAlign:"start", padding:"20px 0px 20px 0px"}}> Overview</Typography>
        <Box sx={{fontSize:"35px",color:"#fff", display:"flex" , justifyContent:"flex-start"}}>
        <Typography sx={{fontSize:"20px", textAlign:"start", color:"#858792"}}>
        I'm a skilled frontend developer with experience in Html , Css and JavaScript , Bootstrap , MUI and
        expertise in frameworks like React, and Next.js I'm a quick learner and
        collaborate closely with clients to create efficient, scalable, and user-friendly solutions
        that solve real-world problems. Let's work together to bring your ideas to life!
        </Typography>
        </Box>
        </Grid>
        <Grid md={6} item xs={12}  >
        <a
        href="/Farha-Tareek.pdf"
        download="Farha-PDF-document"
        target="_blank"
        rel="noopener noreferrer"
        >
        <Button sx={{ paddingRight:" 40px",height:" 65px",
            lineHeight: "60px", color:"#fff",
            border: "1px solid #3b3d49",
            borderRadius:" 35px",
            margin:"30px 0 30px 0",
            paddingLeft: "40px",}}  className='hireMeBtn'>
            Download my resume
            <ArrowDownwardIcon/>
            </Button> 
        </a>
        </Grid>
        </Grid>
    <Grid  sx={{margin:{md:"90px 0 50px 0", xs:"auto 20px "}, display:{xs:"block", md:"flex"}, justifyContent:{md:"space-evenly", xs:"center"}}}  item md={12} xs={12}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
        <Card sx={{maxWidth: 275,backgroundColor:"#2a2c39" , color:"#858792", border:"1px solid #858792"}}>
        <CardContent>
        <Typography sx={{ fontSize: 25 }}  gutterBottom>
        Web Developer
        </Typography>
        </CardContent>
        </Card > 
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
        <Card sx={{ maxWidth: 275, backgroundColor:"#2a2c39" ,color:"#858792", border:"1px solid #858792"}}>
        <CardContent>
        <Typography sx={{ fontSize: 25 }}  gutterBottom>
        Frontend Developer
        </Typography>
        </CardContent>
        </Card> 
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
        <Card sx={{ maxWidth: 275, backgroundColor:"#2a2c39" ,color:"#858792", border:"1px solid #858792"}}>
        <CardContent>
        <Typography sx={{ fontSize: 25 }}  gutterBottom>
        React.js Developer
        </Typography>
        </CardContent>
        </Card> 
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
        <Card sx={{ maxWidth: 275 , backgroundColor:"#2a2c39" ,color:"#858792", border:"1px solid #858792" }}>
        <CardContent>
        <Typography sx={{ fontSize: 25 }}  gutterBottom>
        Next.js Developer
        </Typography>
        </CardContent>
        </Card> 
        </motion.div>
        </Grid>
        </Grid>
        </Section>
    </Container>
    );
}