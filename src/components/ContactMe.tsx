import { Box, Button, FormControl, FormHelperText, Grid, Input, InputLabel, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { FunctionComponent } from "react";
import Swal from 'sweetalert2'
import { error } from "console";
import emailjs from '@emailjs/browser';

const ContactMe: FunctionComponent = () => {
    
    // Adapted from https://plainenglish.io/blog/how-to-build-a-contact-form-in-react-that-sends-emails-using-emailjs-70011d2563a3

    const handleSubmit = (e:any) => {
        console.log(process.env.REACT_APP_SERVICE_ID," ", process.env.REACT_APP_TEMPLATE_ID, "", process.env.REACT_APP_TEMPLATE_ID)
        e.preventDefault();
        emailjs.sendForm("service_m0n38s9", "template_j6jio6l", e.target, "Ro9LRKuoYRKsR80Kt")
            .then((res) => {
                console.log(res.text)
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Error sending message',
                    text: error.text,
                })
                });
            e.target.reset()
            };

    return (
        <body>
            <Typography variant="h2" padding={10} textAlign={"left"} sx={{ opacity: 0.7 }}>Contact Me.</Typography>
            <Box alignItems="center"
                justifyContent="center" display="flex" padding={5}>
                <Paper elevation={3} sx={{ border: 1 }}>
                    <Stack direction="column" sx={{ p: 3 }}>
                        <Typography textAlign={"center"}><b>Contact Form</b></Typography>
                        <form onSubmit={handleSubmit}>
                        <FormControl>
                            <TextField margin="dense" name="from_email" id="email-address" label="email" variant="standard" />
                            <TextField margin="dense" name="from_name" id="name" label="name" variant="standard" />
                            <TextField size="medium" name="message" multiline margin="normal" id="opinion" label="message" variant="outlined" minRows={5} />
                            <Button variant="contained" sx={{opacity: 0.8}} type="submit">Submit</Button>
                        </FormControl>
                        </form>
                    </Stack>
                </Paper>

            </Box>



        </body >
    )
}

export default ContactMe