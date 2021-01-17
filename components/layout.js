import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import { ModalProvider } from "../context/modalContext";


import './Layout.scss'


const Layout = ({children, typeHeader='main', type='main'}) => {
  
   return(
    <div className="main_layout">
      <Head>
        <title>Inspirable</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
      </Head>
      <Header type={type} typeHeader={typeHeader} color={"#334d5e"} toggleColor={'#334d5e'} textColor={'#334d5e'} colorText={"#f2f9fb"}/>
      <div className="layout-content">{children}</div>
      <Footer typeHeader={typeHeader}/>
    </div>
   )
};
  
  export default Layout;