import { AppBar, Container, Toolbar, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import { redirect, useNavigate } from "react-router-dom";

const pages = ["About", "Projects", "Skills"]
const paths = ["/about", "/projects", "/skills"]

const Navbar: FunctionComponent = () => {

    const navigate = useNavigate()

    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <AppBar position="static">
                    <Tabs 
                    value={value} 
                    onChange={(handleChange)} 
                    textColor="inherit"
                    indicatorColor="secondary">
                        {pages.map((page:string, n:number) => (
                            <Tab label={page} onClick={() => navigate(paths[n])}/>
                        ))}
                    </Tabs>
    </AppBar >
  );
}

export default Navbar

