"use client"
import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import image1 from '../assets/userway.png'
import image2 from '../assets/muilink.png'
import image3 from "../assets/mazar.png"
import image4 from '../assets/talbat.png'
import image5 from '../assets/nationalcare.png'

const projects = [
    {
    id: 1,
    title: "USERWAY",
    image: image1,
    alt:"national care",
    http: "https://userwayapp.netlify.app/",
    desc: "userway is a website for testing tool for your website and make you feel how the users see your website"
    },
    {
    id: 2,
    title: "MUILINK",
    image: image2,
    alt:"national care",
    http: "https://muitravel.netlify.app/",
    desc: "muilink is a website for travel agency for camping in different places around the world"
  },
  {
    id: 4,
    title: "MAZAR",
    image: image3,
    alt:"national care",
    http: "https://mazar.netlify.app/",
    desc: "mazar is a website for social media campaign for exploring religious touristic places in Egypt"
  },
  {
    id: 5,
    title: "TALBAT",
    alt:"national care",
    http: "https://farhatareek.github.io/e-commercee/",
    image: image4,
    desc: "talbat is a clone website from the famous app talabat for food delivery and restaurants"
  },
  {
    id: 6,
    title: "NATIONALCARE",
    alt:"national care",
    http: "https://nationalcaremedical.netlify.app/",
    image: image5,
    desc: "national care is a website for egyptian brand for skin care and cosmetics baised in cairo "
  }
]

const Single = ({ project }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
  })
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])
  return (
    <section ref={ref} style={{marginTop:"50px", display:"flex", justifyContent:"center"}}>
      <Grid container  style={{ display: "flex",marginTop:"50px", justifyContent: "center" }}>
        <Grid sx={{display:"flex", justifyContent:"center"}} md={4} item xs={10} >
          <Image alt={project.alt} className='projectsImg' style={{ borderRadius: "10px", objectFit: "cover" }} src={project.image.src} width={350} height={250} />
        </Grid>
        <motion.div className='portofolioTextContainer' style={{
          margin: "20px 0 0 0",
          textAlign: "start",
          flexWrap: "wrap",
          maxWidth:"320px",
          justifyContent:"center",
          gap: 4,
          flexDirection: "column",
          display: "flex",
          y
        }}>
          <Grid md={8} item xs={10} sx={{marginLeft:{xs:"17px"}}} >
          <Typography sx={{ fontSize: {md:"45px", xs:"25px"}, color: "#fff" }}>{project.title}</Typography>
          <Typography sx={{ color: "#fff", fontSize: "15px" }}>{project.desc}</Typography>
          <Button
            component={Link}
            className='viewbtn'
            sx={{ maxWidth: "150px", backgroundColor: "#fff", border: "1px solid #fff", color: "#2a2c39" }}
            href={project.http}>
            DEMO LINK
          </Button>
          </Grid>
        </motion.div>
      </Grid>
    </section>
  )
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <Box sx={{ height: {md:"auto", xs:"auto"}, width: "95%", margin: "auto " }} className='portfolio'>
      <Grid item xs={10} className='progressBar' sx={{ top: 0, left: 0, textAlign: "center", paddingTop: "50px" }}>
        <Typography sx={{ fontSize: "35px", color: "#fff", paddingBottom: "20px" }}>My Projects</Typography>
        <motion.div style={{ scaleX, height: "10px", top: "0", backgroundColor: "#fff" }}></motion.div>
      </Grid>
      <Grid md={6}  item xs={12}>
        {projects.map((project) => (
          <Single project={project} key={project.id} />
        ))}
      </Grid>
    </Box>
  )
}
