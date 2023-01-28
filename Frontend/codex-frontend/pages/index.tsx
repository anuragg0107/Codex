import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {Text,Box,Image,Input,Button,Container,UnorderedList,ListItem, Grid,Stack,SimpleGrid,Divider} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const [data,setData]=useState([])
  // const [category,setCategory]=useState("all")

  // const getData=()=>{
  //   if(category !== "all"){
  //     axios.get(`https://fancy-gray-lion.cyclic.app/${category}`)
  //     .then((data)=>setData(data.data))
  //     .catch((err)=>console.log(err))
  //   }
  //   else{
  //     axios.get(`https://fancy-gray-lion.cyclic.app/`)
  //     .then((data)=> setData(data.data))
  //     .catch((err)=>console.log(err))
  //   }
  // }
  // useEffect(()=>{
  //  getData(category)
  // },[category])

  // console.log(data)

  return (
    <>
      <Head>
        <title>LearningPlate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://i.postimg.cc/jqWWx3m2/learningplate.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
         <Box className={styles.navbar}>
         <Box className={styles.navbarimage}>
         <Image src='https://i.postimg.cc/jqWWx3m2/learningplate.png' alt='learningplate' />
         </Box>
         <Box className={styles.loginbutton}>
           <Button>Login</Button>
           <Button>Register</Button>
         </Box>

         </Box>
         <Box className={styles.deliver}>
          <Box className={styles.data}>
           <Text as='h1'>
           Deliver inspiring learning experiences <strong>on any scale</strong>
           </Text>
           <Text>
           Enable online campuses, instructor-led courses,
            degree programs, and self-paced courses using a
             single platform.
           </Text>
          </Box>
          <Box className={styles.dataimage}>
            <Image src='https://openedx.org/wp-content/uploads/2018/12/Home-header.svg' alt='images' />
          </Box>
         </Box>
         <Box className={styles.trusted}>
          <Box>
            <Text as='h2'>Trusted by top organizations worldwide</Text>
         <figure>
          <UnorderedList>
            <ListItem>
              <Image src='https://openedx.org/wp-content/uploads/2019/01/logo_ibm.png' alt='image2' />
            </ListItem>
            <ListItem>
              <Image src='https://openedx.org/wp-content/uploads/2019/01/logo_microsoft.png' alt='image2' />
            </ListItem>
            <ListItem>
              <Image src='https://openedx.org/wp-content/uploads/2019/01/logo_mit.png' alt='image2' />
            </ListItem>
            <ListItem>
              <Image src='https://openedx.org/wp-content/uploads/2019/01/logo_harvard.png' alt='image2' />
            </ListItem>
            <ListItem>
              <Image src='https://openedx.org/wp-content/uploads/2019/01/logo_xuetangx.png' alt='image2' />
            </ListItem>
          </UnorderedList>
         </figure>
          </Box>
         </Box>
         <Text as='h3' className={styles.texth3}>Easily and confidently scale from supporting small learning to <strong>thousands of simultaneous learners.</strong></Text>
        
          <Box className={styles.instructors}>
                <Box>
                <Container className={styles.instructorsleft}>
                  <Text as='h3'>Empower learners and instructors</Text>
                  <UnorderedList>
                    <ListItem>Interactive forums and discussions with IA</ListItem>
                    <ListItem>Advance learners and Instructor</ListItem>
                    <ListItem>Live video conferencing</ListItem>
                  </UnorderedList>
                 </Container>

                 <Container className={styles.instructorsleft}>
                  <Text as='h3'>Cross platform</Text>
                  <UnorderedList>
                    <ListItem>Work on any device</ListItem>
                    <ListItem>Seamlessly integrates with third part tools</ListItem>
                  </UnorderedList>
                 </Container>

                 <Container className={styles.instructorsleft}>
                  <Text as='h3'>Extensible and inclusive</Text>
                  <UnorderedList>
                    <ListItem>Easy to use our platform</ListItem>
                    <ListItem>Working on new project after end of units</ListItem>
                    <ListItem>Connecting with high professionals teacher</ListItem>
                  </UnorderedList>
                 </Container>
                </Box>
               <Box className={styles.instructorsimage}>
                <Image src='https://i.postimg.cc/9fbdr6rs/get-with-open-edx.png' alt='empower image' />
               </Box>
          </Box>
          <Text className={styles.new}><Text className={styles.new1}>New</Text>on learningplate</Text>
         <Box className={styles.buttons}>
          <Button >Bushiness</Button>
          <Button >Full Stack Web developer</Button>
          <Button > Java Backend</Button>
          <Button >Data Science</Button>
         </Box>
         <Box  w={'90%'} mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }} mb={20}>
        <Divider />
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
            {/* <Link > */}
              <Grid item xs={2} sm={4} md={4} >
                <Box borderRadius={'30px'} boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}
                  textAlign="center"
                  style={{
                    padding: "25px 1px",
                  }}
                >
                  <Image h={{base:"250px",sm:"400px",md:"350px",lg:"500px",xl:"500px",}}  src="" alt="Products" />
                  <Text
                    style={{
                      fontWeight: 600,
                      color: "#212121",
                    }}
                  >
                   fgtf
                  </Text>
                  <Text
                    style={{
                      color: "green",
                    }}
                  >
                    {`Rs.1000`}
                  </Text>
                </Box>
              </Grid>
            {/* </Link> */}
        </SimpleGrid>
      </Box>
        </div>
      </main>
    </>
  )
}
