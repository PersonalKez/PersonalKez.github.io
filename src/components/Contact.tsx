import { Box, Stack } from "@mui/material";
import React from "react";
import { FunctionComponent } from "react";

const Contact: FunctionComponent = () => {
    return (
        <body>
            <Stack direction={"row"} justifyContent={"center"}>
                <Box paddingRight={5}>
                    <a href="https://www.linkedin.com/in/keelan-hassell-meng/">
                        <Box
                            component="img"
                            alt="[LinkedIn Logo]"
                            src={require("../LI-In-Bug.png")}
                            sx={{ width: 50, height: 50, objectFit: "contain" }}
                        />
                    </a>
                </Box>
                <Box >
                    <a href="https://github.com/PersonalKez/">
                        <Box
                            component="img"
                            alt="[Github Logo]"
                            src={require("../github-mark.png")}
                            sx={{ width: 50, height: 50, objectFit: "contain" }}
                        />
                    </a>
                </Box>
            </Stack>
        </body>
    )
}

export default Contact