import { Box, Divider, Grid, Paper, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { FunctionComponent } from "react";

const About: FunctionComponent = () => {

    const Item = styled(Typography)(({ theme }) => ({
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <body>
            <Grid container sx={{ marginTop: 5 }}>
                <Grid item xs={7} sx={{ p: 15, display: "flex", alignItems: "center", justifyContent: "right" }}>
                    <Stack spacing={0}>
                        <Item variant="h3" sx={{ p:0, alignItems: "flex-end", opacity: "80%", alignContent: "flex-end", textAlign: "right" }}>KEELAN HASSELL</Item>
                        <Divider />
                        <Item variant="h1" sx={{ p:0, alignItems: "flex-end", textAlign: "right" }}>FULL STACK <br /> DEVELOPER.</Item>
                        <Item sx={{ alignItems: "flex-end", textAlign: "right" }}><b>Solving engineering problems with teamwork and vision.</b></Item>
                    </Stack>
                </Grid>
                <Grid item sx={{ justifyContent: "center" }} >
                    <Box
                        sx={{ marginTop: 5, p: 10, height: 450, width: 450, justifyContent: "center" }}
                        component="img"
                        alt="Personal Photo"
                        src="https://i.imgur.com/aqbJj4b.png"
                    />
                </Grid>
            </Grid>
            {/* <h2>VALUES</h2>
            <p></p>
            <p>I entered the tech industry because I'm good at problem solving, teamwork, and bringing designs from a requirements to product. Learning is fun, and I like to do a lot of it; across a lot of different areas, but my learning interests are currently in building applications with React and Python, and how those integrate with cloud environments (AWS and GCP). I am used to working with a team and negotiating directly with users and product owners to collaborate on designing solutions for their needs. </p>
            <p></p>
            <h2>KEY SKILLS</h2>
            <p></p>
            <p>I work very quickly, pick up new technology fast, and implement it well with a team. I take ownership of projects and deliver solo work to a high standard. I prefer to work Agile.</p>
            <p></p>
            <h2>ACHIEVEMENTS</h2>
            <p></p>
            <p>I've helped deliver some safety and security critical, high impact infrastructure and services in aero and defence spaces. I've been highlighted for my ability to clearly communicate with both team and clients and make sure requirements are met in a timely fashion. I don't do mindless work, so I've managed to maintain a healthy mindset and avoid burnout even in long and involved projects. I like to get on with people and build strong working relationships.</p>
            <p></p>
            <p>In my spare time I've built a few personal bits of tech, robots, sound manipulation, some AI apps and statistics helpers. </p>
            <p></p>
            <h2>ACCOMPLISHMENTS</h2>
            <p></p>
            <p>Beyond my profession, I have a growing interest in 2D and 3D art; this has a lot of transferable skills to engineering, improving my workflow and patience with difficult projects. From my experiences in freelancing, I have learned how to interact with clients in delivering product in a timely manner, and how to negotiate changing requirements.</p> */}
        </body>
    )
}

export default About