
import React from 'react';
import { Container, Box, Link } from '@mui/material'
import { grey } from '@mui/material/colors'

function Nav() {
    return (
        
    <Container
        maxWidth="lg"
    >
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
            }}
        >
            <Box 
                gridColumn="span 10"
                display="flex"
                alignItems="center"
                sx={{                    
                    height: "50px"
                }}
            >
                <Link 
                    href="/"
                    color={grey[900]}
                    underline="none"
                    sx={{     
                        fontWeight: "bold",
                        marginX: "8px"              
                    }}
                >
                    라운지
                </Link>
            </Box>
            <Box 
                gridColumn="span 2"
                display="flex"
                justifyContent="right"
                alignItems="center"
                sx={{                    
                    height: "50px"
                }}
            >
                <Link 
                    href="signin"
                    color={grey[500]}
                    underline="none"
                    sx={{      
                        marginX: "8px"              
                    }}
                >
                    로그인
                </Link>
                
                <Link 
                    href="signup"
                    color={grey[500]}
                    underline="none"
                    sx={{      
                        marginX: "8px"              
                    }}
                >
                    회원가입
                </Link>
            </Box>
        </Box>
    </Container>
    )
}
export default Nav
