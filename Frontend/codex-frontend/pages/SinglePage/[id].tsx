import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Styles from "@/styles/Single.module.css";
import { CgTimelapse } from "react-icons/cg";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
// import { useParams } from "react-router-dom";
import { NextPage } from "next";
import { useRouter } from "next/router";
import axios from "axios";

// const data = {
//   title: "MBA Essentials",
//   desc: "Build a toolkit of key strategic, managerial, and leadership skills for business.",
// };
const SinglePage: NextPage = () => {
    const [data,setData]=useState({})
  const router = useRouter();
  const { id } = router.query;
  //   console.log(id);
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const [isError, setError] = useState({
    firstname: false,
    lastname: false,
    email: false,
  });
  const [show, setShow] = useState(false);
  const toast = useToast();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleError = () => {
    setError({
      ...isError,
      firstname: input.firstname === "",
      lastname: input.lastname === "",
      email: input.email === "",
    });
    if (input.firstname !== "" && input.lastname !== "" && input.email !== "")
      CloseBox();
  };

  const CloseBox = () => {
    if (!isError.firstname && !isError.lastname && !isError.email) {
      //Send Post request for add new address
      // onClick(false);
      toast({
        title: "Successfully Send",
        description: "Our team contact as soon as possible.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };
    const getalldata = async (id) => {
        try {
          
            const res = await axios(
                `https://hackathon-data.onrender.com/combined/${id}`
                );
                setData(res.data.data);
        } catch (err) {
            console.log(err);
            }
  };
  useEffect(() => {
    getalldata(id);
  }, [id]);
  return (
    <>
      <Head>
        <title>Detail Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://i.postimg.cc/jqWWx3m2/learningplate.png"
        />
      </Head>
      <main>
        <Box className={Styles.navbarimage}>
          <Link href="/">
            <Image
              src="https://i.postimg.cc/jqWWx3m2/learningplate.png"
              alt="learningplate"
            />
          </Link>
        </Box>
        <Box className={Styles.detail}>
          <Box>
            <Text as="h1">{data.title}</Text>
            {/* <Text as="p">{data.desc}</Text> */}
            <Button onClick={() => setShow(true)}>Request More Info</Button>
          </Box>
          <Box>
            <Image
              src={data.imgurl}
              alt=""
            />
          </Box>
          <Box>
            <HStack>
              <CgTimelapse className={Styles.icon} />
              <Box>
                <Text as="h1">10 weeks</Text>
                <Text as="p">8-12 hours per week</Text>
              </Box>
            </HStack>
            <HStack>
              <AiTwotoneCalendar className={Styles.icon} />
              <Box>
                <Text as="h1">Starts Feb 8, 2023</Text>
                <Text as="p">Enroll by Jan 31, 2023</Text>
              </Box>
            </HStack>
            <HStack>
              <FaUserAlt className={Styles.icon} />
              <Box>
                <Text as="h1">Instructor-paced</Text>
                <Text as="p">Instructor-led on a course schedule</Text>
              </Box>
            </HStack>
          </Box>
        </Box>
        {show && (
          <Box className={Styles.request}>
            <Box>
              <Text as="h1">
                Request a{" "}
                <span style={{ color: "yellow" }}>course prospectus</span>
              </Text>
              <Text as="p">
                Want to know more? Enter your information to learn more about
                this course from GetSmarter.
              </Text>
            </Box>
            <Stack className={Styles.form} spacing={6}>
              <Box className={Styles.form1}>
                <FormControl isRequired isInvalid={isError.firstname}>
                  <Input
                    name="firstname"
                    onChange={handleInputChange}
                    value={input.firstname}
                    placeholder="First Name"
                  />
                  {isError.firstname && (
                    <FormErrorMessage color="red">
                      Enter your first name
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isRequired isInvalid={isError.lastname}>
                  <Input
                    name="lastname"
                    onChange={handleInputChange}
                    value={input.lastname}
                    placeholder="Last Name"
                  />
                  {isError.lastname && (
                    <FormErrorMessage color="red">
                      Enter your last name
                    </FormErrorMessage>
                  )}
                </FormControl>
              </Box>
              <Box display="flex">
                <FormControl isInvalid={isError.email} isRequired>
                  <Input
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    value={input.email}
                    placeholder="email"
                  />
                  {isError.email && (
                    <FormErrorMessage color="red">Enter email</FormErrorMessage>
                  )}
                </FormControl>
              </Box>
              <Text as="p">
                By consenting to receive communications, you agree to the use of
                your data as described in GetSmarters privacy policy. You may
                opt out of receiving communications at any time.
              </Text>
              <Button
                colorScheme="white"
                bg="rgb(0, 181, 181)"
                width="240px"
                onClick={handleError}
              >
                Request more info
              </Button>
            </Stack>
          </Box>
        )}
      </main>
    </>
  );
};

export default SinglePage;
