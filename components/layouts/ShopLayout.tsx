import Head from 'next/head'
import { FC } from 'react';
import { Navbar, NavbarLDP, SideMenu } from '../ui';



interface Props{
  children?: React.ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?:string;   //el ? significa opcional
 }

export const ShopLayout:FC<Props> = ({ children ,title, pageDescription, imageFullUrl }) => {
  return (
    <>  
      
      <Head>
          <title></title>
          <meta name="descripcion" content={ pageDescription }/>
          
          {/* metas para redes sociales */}
          <meta name="og:title" content={ title }/>
          <meta name="og:pageDescription" content={ pageDescription }/> 

          {
            imageFullUrl && (
              <meta name="og:im" content={pageDescription} />
            )
          }

      </Head>

    
      <nav>
          {/* <Navbar/> */}
          <NavbarLDP/>
      </nav>

    
      <SideMenu/>

    
      <main style={{
        margin:'40px auto',
        maxWidth:'1440px',  //para que no se extienda tanto la pantalla
        padding: '0px 30px'
      }}>
        {children}
      </main>
    

      <footer>
          {/* footer */}
      </footer>
        
    </>
  )
}
