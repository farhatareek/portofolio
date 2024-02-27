'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { animate, motion } from "framer-motion";
import { Button, Container } from '@mui/material';
import personalImage from '../assets/2823496.png'
import Particless from "./particles";
import Link from 'next/link';

export default function MainHome() {
    const varients={
        initial:{
        x:-500,
        y:100,
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
    <Container sx={{ flexGrow: 2, overflow:"hidden" }}>
        <Particless/>
        <motion.div variants={varients} initial="initial" animate="animate">
        <Grid sx={{display:"flex",  justifyContent:"center", alignItems:"center" }} container spacing={2} >
        <Grid  sx={{padding:{xs:"10px"}}}  item md={6} xs={12}>
        <Image alt='person' className='personalImg' width={500} height={500} src={personalImage.src}/>
        </Grid>
        <Grid  md={6} item xs={12}>
        <Box sx={{fontSize:"25px",color:"#fff"}}>
            <h1>
                Hello  I'm farha tareek
            </h1>
            <h2>
                Front end developer
            </h2>
            Mass Comm grad turned into freelance web developer I'm a freelancer combining my Mass
            Communication background with 2 years of experience as a front-end developer. I specialize in
            building dynamic and user-friendly web experiences
            <Box sx={{paddingTop:"20px", display:"flex", justifyContent:"space-between"}}>
            <Link href="/contact" style={{textDecoration:"none"}}>
            <Button className='conatctbtn' sx={{border:"1px solid #fff", color:"#fff"}}>Contact Me</Button>
            </Link>
            <Link href='/portofolio'style={{textDecoration:"none"}}>
            <Button className='viewbtn' sx={{border:"1px solid #fff",background:"#fff", color:"#2a2c39"}}>View My Work</Button>
            </Link>
            </Box>
        </Box>
        </Grid>
        </Grid>
        </motion.div>
    </Container>
    );
}