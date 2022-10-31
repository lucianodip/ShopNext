import { Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts";


export default function Home() {
  return (
    <ShopLayout title={'Tesla-shop - Home'} pageDescription={'Encuentra los mejores productos'}>
      
      <Typography variant='h1'component='h1' >Tienda</Typography>
      <Typography variant='h2' sx={{ mb:1 }} >Todos los productos</Typography>

    </ShopLayout>
  )
}


//typografy nos ayuda a colocarle las propiedas, si rotulamos ej:h1 ayudamos al seo
