
import React from 'react';
import { GitHub } from '@mui/icons-material';
import { Container, Box, Typography, Link } from '@mui/material'
import { grey } from '@mui/material/colors'

function Footer() {
    return (
        
        <Container
            maxWidth="lg"
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{                    
                    height: "50px"
                }}
            >
                <Typography
                    variant='body2'
                    color={grey[500]}
                    >
                    Copyright © Shynity 2023.
                </Typography>
                <Box 
                    display="flex"
                    justifyContent="right"
                    alignItems="center"
                >
                    <Link 
                        href="https://github.com/ToyCommunity"
                        color={grey[500]}
                        underline="none"
                    >
                        <GitHub/>
                    </Link>
                </Box>
            </Box>
        </Container>
    )
}
export default Footer
