import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box sx={{ paddingY: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {info.portfolio.map((project, index) => (
                <Grid item xs={12} md={12} key={index} sx={{padding: 3}}>
                    <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} description={project.description} />
                </Grid>
            ))}
        </Box>
    );
};