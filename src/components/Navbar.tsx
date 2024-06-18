import { AppBar, Tab, Tabs, Box } from "@mui/material";
import React, { useState } from "react";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

const pages = ["About", "Projects", "Contact Me"]
const paths = ["/about", "/projects", "/contact"]

const Navbar: FunctionComponent = () => {

    const navigate = useNavigate()

    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <AppBar sx={{opacity: "80%"}} position="sticky">
            <Box sx={{display: "flex", justifyContent: "right", pr: 5}}>
                <Tabs
                    value={value}
                    onChange={(handleChange)}
                    textColor="inherit"
                    indicatorColor="secondary">
                    {pages.map((page: string, n: number) => (
                        <Tab label={page} onClick={() => navigate(paths[n])} />
                    ))}
                </Tabs>
            </Box>
        </AppBar >
    );
}

export default Navbar

