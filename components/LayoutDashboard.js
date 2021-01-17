import Head from "next/head";
import NavDashboard from "../components/NavDashboard";
import './LayoutDashboard.scss'


const LayoutDashboard = ({children, typeHeader='main', type='main'}) => {
  
   return(
    <div className="main_layout_dashboard">
      <Head>
        <title>Inspirable</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
      </Head>

      <NavDashboard type={type} typeHeader={typeHeader} color={"#334d5e"} toggleColor={'#334d5e'} textColor={'#334d5e'} colorText={"#f2f9fb"}/>
      
      <div className="layout-content">{children}</div>
    </div>
   )
};
  
  export default LayoutDashboard;