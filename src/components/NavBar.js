import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import LoginButton from './LoginButton';

function NavBar() {
    return (
        <AppBar
            className="appbar"
            position="fixed"
            sx={{
                backgroundColor: 'white',
                height: '4rem',
                justifyContent: 'center'
            }}>
            <Toolbar
                className="toolbar"
                sx={{
                    alignItems: 'center'
                }}>
                <Box
                    className="links"
                    sx={{
                        display: 'flex',
                        gap: '2.5rem'
                    }}>
                    <Button
                        href="/"
                        variant="text"
                        sx={{
                            color: '#023047',
                            fontWeight: 'bold'
                        }}>
                        Home
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        ml: 'auto'
                    }}>
                    <Button href="https://github.com/matthewaching/food-memories">
                        <GitHub htmlColor="#023047" sx={{ fontSize: '54px' }} />
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mr: '-1rem'
                    }}>
                    <LoginButton />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
