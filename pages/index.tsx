import { Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts";
import { initialData } from "../database/products";


export default function Home() {
  return (
    <ShopLayout title={'Tesla-shop - Home'} pageDescription={'Encuentra los mejores productos'}>
      
      <Typography variant='h1'component='h1' >Tienda</Typography>
      <Typography variant='h2' sx={{ mb:1 }} >Todos los productos</Typography>

      <Grid container spacing={4}>
        {
          initialData.products.map(product =>(
            <Grid item xs={6} sm={4} key={product.slug}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image={`products/${product.images[0]}`}
                    alt={product.title}
                  /> 
                </CardActionArea>
              </Card>

            </Grid>
          ))
        }

      </Grid>


    </ShopLayout>
  )
}


//typografy nos ayuda a colocarle las propiedas, si rotulamos ej:h1 ayudamos al seo
