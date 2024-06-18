import { Box } from "@mui/material";
import React from "react";
import { FunctionComponent } from "react";

const Projects: FunctionComponent = () => {
    return (
        <Box display="flex"
            justifyContent="center"
            alignItems="center">
            <main>
                <h2>Interesting Recent Completed Projects</h2>
                <ul>
                    <li> <a href="https://github.com/PersonalKez/citiesApp-docker">Database travel journal with server-side caching</a> </li>
                </ul>
            </main>
        </Box>
    )
}

export default Projects