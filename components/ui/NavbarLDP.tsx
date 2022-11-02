import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Navbar } from '@nextui-org/react'
import { Text } from '@nextui-org/react';
import PersonIcon from '@mui/icons-material/Person';



 

export const NavbarLDP = () => {
  return (
    <Navbar variant="floating">
        
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
          
        >
          <Text b color="inherit" hideIn="xs">
            SHOP
          </Text>
        </Navbar.Brand>

        <Navbar.Content hideIn="xs" variant="underline">
            <Navbar.Link href="/category/men">Hombre</Navbar.Link>
            <Navbar.Link href="/category/women">Mujer</Navbar.Link>
            <Navbar.Link href="/category/kid">Niños</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
            <Navbar.Link href='/cart'>
                <SearchOutlined/>
            </Navbar.Link>
            <Navbar.Link>
                <ShoppingCartOutlined/>
            </Navbar.Link>
            <Navbar.Link>
                <PersonIcon/>
            </Navbar.Link>
        </Navbar.Content>

    </Navbar>
  )
}
