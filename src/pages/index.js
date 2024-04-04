
import { Inter } from "next/font/google";
import ButtonComponent from "./components/button";
const inter = Inter({ subsets: ["latin"] });
import { ChakraProvider,extendBaseTheme,
  theme as chakraTheme, } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
    
      <main className="container">
        <div className="text">
          <h1>DigiLabs Assignment</h1>
          <h3 style={{color:"grey"}}>Press push Notification Button to get Notification</h3>

        </div>
        <img className="image" src='/image.png' alt="App Image" width={'344px'}/>
          
        
      <ChakraProvider>

      <ButtonComponent/>

      </ChakraProvider>
      </main>

      
    </>
  );
}
