import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Styles from "@/styles/Signup.module.css"
import axios from "axios";

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    country:"India"
  });

  const [isError, setError] = useState({
    name: false,
    email: false,
    username: false,
    password: false,
    country:false
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInput({ ...input, [name]: value });
  };
  const handleError = () => {
    let Error = input.name === "";
    setError({
      ...isError,
      name: input.name === "",
      email: input.email === "",
      username: input.username === "",
      password: input.password === "",
    });
    if (!Error) {
      CloseBox();
    }
  };

  const CloseBox = () => {
    if (
      !isError.name &&
      !isError.email &&
      !isError.username &&
      !isError.password
    ) {
      //Send Post request for add new address
      // onClick(false);
      Register();
    }
  };
  const Register = async() => {
    try {
      let res = await axios.post("https://fancy-gray-lion.cyclic.app/", input);
      console.log(res);
     } catch (err) {
      console.log(err);
  }
}

  return (
    <Box  margin="auto" w="100%" minH="100%" border="1px solid black" className={Styles.bg}>
      <Stack className={Styles.form} w="40%" spacing={20}>
        <Text as="h1" textAlign="center">Register</Text>
        <Box>
          <FormControl isRequired isInvalid={isError.name}>
            <Input
              value={input.name}
              placeholder="Full Name"
              onChange={handleInputChange}
              name="name"
            />
            {isError.name && (
              <FormErrorMessage color="red">Enter your full name</FormErrorMessage>
            )}
          </FormControl>
        </Box>
        <Box>
          <FormControl isRequired isInvalid={isError.email}>
            <Input
              type="email"
              name="email"
              onChange={handleInputChange}
              value={input.email}
              placeholder="Email"
            />
            {isError.email && (
              <FormErrorMessage color="red">Enter your email</FormErrorMessage>
            )}
          </FormControl>
        </Box>
        <Box>
          <FormControl isRequired isInvalid={isError.username}>
            <Input
              name="username"
              onChange={handleInputChange}
              value={input.username}
              placeholder="Username"
            />
            {isError.username && (
              <FormErrorMessage color="red">
                Username must be between 2 and 30 characters
              </FormErrorMessage>
            )}
          </FormControl>
        </Box>
        <Box display="flex" gap={10}>
          <FormControl isInvalid={isError.password} isRequired>
            <Input
              type="password"
              name="password"
              onChange={handleInputChange}
              value={input.password}
              placeholder="Password"
            />
            {isError.password && (
              <FormErrorMessage color="red">Enter Password</FormErrorMessage>
            )}
          </FormControl>
        </Box>
        <Box className={Styles.select}>
          <select name="country" onChange={handleInputChange} value={input.country}>
            <option value="India" selected>India</option>
            <option value="Albania">Albania</option>
            <option value="Andorra">Andorra</option>
          </select>
        </Box>
      <Button
        colorScheme="white"
        bg="rgb(0, 181, 181)"
        w="30%"
        onClick={handleError}
      >
        Create account
      </Button>
      </Stack>
    </Box>
  );
};
export default Signup;
