import NextLink from 'next/link';
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material"


export const Navbar = () => {
  return (
        <AppBar>
            <Toolbar>
                <NextLink href='/' passHref>
                    <Link display='flex' alignItems='center'>
                        <Typography variant='h6'>Teslo |</Typography>
                        <Typography sx={{ ml:0.5 }}>Shop</Typography>
                    </Link>
                </NextLink>
                
                <Box flex={1}/>

                <Box>
                    <NextLink href='/category/men' passHref>
                        <Link>
                            <Button>Hombres</Button>
                        </Link>
                    </NextLink>

                    <NextLink href='/category/women' passHref>
                        <Link>
                            <Button>Mujer</Button>
                        </Link>
                    </NextLink>

                    <NextLink href='/category/kid' passHref>
                        <Link>
                            <Button>Niños</Button>
                        </Link>
                    </NextLink>
                </Box>

                <Box flex={1}/>

            </Toolbar>
        </AppBar>
  )
}


//passHref significa que la direccion del Href se pasa al hijo LINK 