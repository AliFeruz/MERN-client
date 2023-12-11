import Dropzone from 'react-dropzone';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import { useNavigate } from 'react-router-dom';
import { useState} from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    useTheme,
    useMediaQuery
} from "@mui/material";
import { SignInValidation, SignUpValidation } from '../../lib/validation';
import { useForm } from 'react-hook-form';
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const initialValuesLogin = {
  email: "",
  password: "",
};

const SignUpForm = () => {
    const { palette } = useTheme();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width: 600px)")

    const form = useForm<z.infer<typeof SignUpValidation>> ({
      resolver: zodResolver(SignUpValidation),
      defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      location: "",
      picture: "",
    }
    });
    

  async function onSubmit (values: z.infer<typeof SignUpValidation> ) {

    const newUser = await fetch(
      "http://localhost:8080/auth/register",
      {
          method: "POST",
          body?: values,
      });
       return newUser;

  };

  return (
    <div>

<Formik
        onSubmit={handleFormSubmit}
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? SignInValidation : SignInValidation}>
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                handleChange,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit}>
                <Box 
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4"},
                }}>
                    {isRegister && (
                        <>
                        <TextField
                        label="First Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.firstName || ''}
                        name='firstName'
                        error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        sx={{ gridColumn: "span 2"}}/>
                         <TextField
                        label="Last Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastName || ''}
                        name='lastName'
                        error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                        sx={{ gridColumn: "span 2"}}/>
                         <TextField
                        label="Location"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.location || ''}
                        name='location'
                        error={Boolean(touched.location) && Boolean(errors.location)}
                        helperText={touched.location && errors.location}
                        sx={{ gridColumn: "span 4"}}/>
                         <TextField
                        label="Occupation"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.occupation || ''}
                        name='occupation'
                        error={Boolean(touched.occupation) && Boolean(errors.occupation)}
                        helperText={touched.occupation && errors.occupation}
                        sx={{ gridColumn: "span 4"}}/>
                        <Box 
                        gridColumn="span 4"
                        border={`1px solid ${palette.neutral.medium}`}
                        borderRadius="5px"
                        p="1rem">
                            <Dropzone
                            acceptedFiles=".jpg, .jpeg, .png"
                            multiple={false}
                            onDrop={(acceptedFiles) => 
                            setFieldValue("picture", acceptedFiles[0])}>
                                {({ getRootProps, getInputProps }) => (
                                <Box
                                {...getRootProps()}
                                border={`2px dashed ${palette.primary.main}`}
                                p="1rem"
                                sx={{ "&:hover": {cursor: "pointer"}}}>
                                <input {...getInputProps()}/>
                                {!values.picture ? (
                                    <p>Add Picture Here</p>
                                ) : (
                                   <FlexBetween>
                                    <Typography>{values.picture.name}</Typography>
                                    <EditOutlinedIcon/>
                                   </FlexBetween> 
                                )}
                                </Box>
                                )}
                            </Dropzone>
                        </Box>
                        </>
                    )}
                <TextField
                        label="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email || ''}
                        name='email'
                        error={Boolean(touched.email) && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        sx={{ gridColumn: "span 2"}}/>
                <TextField
                        label="Password"
                        type='password'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password || ''}
                        name='password'
                        error={Boolean(touched.password) && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        sx={{ gridColumn: "span 2"}}/>   
                </Box> 
                <Box>
                <Button 
                fullWidth
                type='submit'
                sx={{
                    m: '2rem 0',
                    p: '1rem',
                    backgroundColor: palette.primary.main,
                    color: palette.background.alt,
                    "&:hover": {color:palette.primary.main}
                }}>
                    {isLogin ? "LOGIN" : "REGISTER"}
                </Button>
                <Typography
                onClick={() => {
                    setPageType(isLogin ? "register" : "login");
                    resetForm();
                }}
                sx={{
                    textDecoration: "underline",
                    color: palette.primary.main,
                    "&:hover": {
                        cursor: "pointer",
                        color: palette.primary.light,
                    },
                }}>
                    {isLogin
                    ? "Don`t have an account? Sign Up here."
                    : "Already have an account? Login here."}
                </Typography>
                </Box>

                </form>
            )}
        </Formik>
    </div>
  )
}

export default SignUpForm;










