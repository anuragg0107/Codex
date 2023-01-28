import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import Styles from "@/styles/Signup.module.css"

const Login = () => {
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
      console.log(input)
    }
  };
  return (
    <Box  margin="auto" w="100%" minH="100%" className={Styles.bg}>
      <Stack className={Styles.form} w="40%" spacing={20}>
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
      <Button
        type="submit"
        colorScheme="white"
        bg="rgb(0, 181, 181)"
        w="30%"
        onClick={handleError}
      >
    Login
      </Button>
      </Stack>
    </Box>
  );
};
export default Login;
