import React , {useState, useEffect} from 'react';
import {  useNavigate } from "react-router-dom"
import axios from 'axios';
import { Flex, Box, FormControl, FormLabel, Input,  Stack,Button,Heading, useColorModeValue} from '@chakra-ui/react';



function Login() {
    const [email, setEmail] = useState( )
    const [password, setPassword] = useState( )
    // const [] = useState();

    const navigat = useNavigate();


    const API = 'https://6362424b66f75177ea2a9980.mockapi.io/ToDoList';

    const submit = () => {
      //  e.preventDefault();
        axios.post(API , {
            email,
            password,
        }).then( (res) =>{
            console.log(res);
            localStorage.setItem("Email",res.data.email);
            localStorage.setItem("Password",res.data.password);
            localStorage.setItem("id",res.data.id);
            navigat('/Cards');
           
        })
    }
    // const arr = [];
    useEffect(() => {
      localStorage.setItem('Email', JSON.stringify(email));
      localStorage.setItem('Password', JSON.stringify(password));

    }, [email][password]);

    // arr =[...JSON.parse(localStorage.getItem('setEmail'))]
    const [item , setItem] = useState([]);
    useEffect(() => {
     const item = JSON.parse(localStorage.getItem('items'));
     if (item){
      setItem(item)
     }
    }, []);    


    // useEffect(() => {
    //   localStorage.setItem('Password', JSON.stringify(password));
    // }, [password]);
 
  return (
    <>
        <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.100', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          </Stack>
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow= {'xl'} p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange= {e => {setEmail(e.target.value) }} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange= {e => {setPassword(e.target.value) }}/>
              </FormControl>
              <Stack spacing={10}>
                <Button bg={'gray.500'}color={'white'} _hover={{bg: 'gray.700', }} onClick ={submit}> Sign in </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

    </>
  )
}

export default Login

