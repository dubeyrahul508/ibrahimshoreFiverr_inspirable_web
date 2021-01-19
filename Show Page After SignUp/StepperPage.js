import { Component } from 'react';
//import img from '../images/assets-image.jpg';
import './StepperPage.scss';
/* took code from cdn of bootstrap and converted it into scss and put it in this file */
import './bootstrap_min.scss'; 
import './bootstrap_min.scss';

class StepperPage extends Component{
    constructor(){
        super();
        this.state = {
            page1_active: true,
            page2_active: false,
            page3_active: false
        }
    }

    Page1(){
        return(
            <div className="page-text mt-4">
                <h3 className="p-heading">Thank You For Signing Up!</h3>
                <br />
                <p>
                    As a new member of inspirable community, we whould like to give you a special 
                    welcome gift
                    <br /><br />
                    Chek your email to recieve a discount code. Using the code, you will be able to 
                    enjoy a 25% discount on your entire purchase.
                    <br /><br />
                    If you don't see the email (check your spam, promotions, and spam folder to be sure!),
                    reach out to us at <span><a href='#' className="p-link">hello@inspirable.io</a> </span>
                     and we will get it sorted right away.
                    <br /><br />
                    To avoid missing any thing we sent to you, it's best to add
                    <span> <a href='#' className="p-link">hello@inspirable.io</a> </span>
                     to your contanct list.
                </p>
                <button 
                    style={{color: 'black', backgroundColor: 'white', borderRadius: '20px'}}
                    className="btn pr-5 pl-5 pt-1 pb-1"
                    onClick={() => this.pageChanger(2)}
                >
                    Next
                </button>
            </div>        
        );
    }
    
    Page2(){
        return(
            <div className="page-text mt-4">
                <h3 className="p-heading">Download the Inspirable App</h3>
                <br />
                <p>
                    Now it's time to download FREE Inspirable APP.
                    <br /><br />
                    <span>Inspirable is compatible with both IOS and Android operating systems.</span>
                    <br /><br />
                    Once you have downloaded the app, you can access your account using the email address
                    and password you used when signing up.                    
                    <br />
                    <div className="image-column">
                        <div className="logo-hold" style = {{textAlign: 'center'}}>
                            <img className="appButton" src="../images/appstore.svg" alt="icon" />
                            <img className="appButton" src="../images/googleplay.svg" alt="icon" />
                        </div>
                    </div>
                    <button 
                        style={{color: 'black', backgroundColor: 'white', borderRadius: '20px'}}
                        className="btn pr-5 pl-5 pt-1 pb-1"
                        onClick={() => this.pageChanger(3)}
                    >
                        Next
                    </button>
                </p>
            </div>
        );
    }
    
    Page3(){
        return(
            <div className="page-text mt-4">
                <h3 className="p-heading">Log in & Start Exploring</h3>
                <br />
                <p>
                    Starting with Inspirable is as easy as downloading it. Just open the app, enter
                    your login details, and tada...you are in!
                    <br /><br />
                    Enjoy exploring the world of stories and imagination with your child-one book at a
                    time.
                    <br /><br />
                    Don't forget to use your 25% discount code at the checkout!
                    <br /><br />
                    If you face any issues using the app, get in support with our customer support team
                    using the contact form or visiting the Help Desk page 
                    <span> <a href="#" className="p-link">{`{via the My Account Page}`}</a> </span> where 
                    you can create a ticket. We will be happy to assit!
                </p>
                <button 
                    style={{color: 'black', backgroundColor: 'white', borderRadius: '20px'}}
                    className="btn pr-5 pl-5 pt-1 pb-1"
                    onClick={() => this.pageChanger(1)}
                >
                    Next
                </button>
            </div>
        );
    }

    // handle click event on numbered circles
    pageChanger(currPage){
        switch(currPage){
            case 1:
                this.setState({page1_active: true});
                this.setState({page2_active: false});
                this.setState({page3_active: false});
                break;
            case 2:
                this.setState({page1_active: false});
                this.setState({page2_active: true});
                this.setState({page3_active: false});
                break;
            case 3:
                this.setState({page1_active: false});
                this.setState({page2_active: false});
                this.setState({page3_active: true});
                break;
            default:
                this.setState({page1_active: true});
                this.setState({page2_active: false});
                this.setState({page3_active: false});
                break;
        }
    }        

    // display the content depending to numbered circle clicked
    pageDisplayer(){
        if(this.state.page1_active){
            return this.Page1();
        }
        else if(this.state.page2_active){
            return this.Page2();
        }
        else if(this.state.page3_active){
            return this.Page3();
        }
    }
    
    render(){

        return(            
            <div>
                <div className="box row p-5 m-0">
                    <div className="col-sm box-left container">
                        <img src="../images/assets-image.jpg" alt="Image Not Found" className="box-img" />                        
                    </div>
                    <div className="col-sm box-right">
                        <div className="navigation container-fluid d-flex justify-content-between">                            
                            <button 
                                className={"nav-btn "+ (this.state.page1_active? 'bg-color-pink':'bg-color-gray') }
                                id="nav-btn1" 
                                onClick={()=>this.pageChanger(1)}
                            >
                                1
                            </button>                            
                            <button 
                                className={"nav-btn "+ (this.state.page2_active? 'bg-color-pink':'bg-color-gray') }
                                id="nav-btn2" 
                                onClick={()=>this.pageChanger(2)}>
                                2
                            </button>
                            <button 
                                className={"nav-btn "+ (this.state.page3_active? 'bg-color-pink':'bg-color-gray') }
                                id="nav-btn3" 
                                onClick={()=>this.pageChanger(3)}>
                                3
                            </button>   
                            <span className="nav-dash" id="nav-dash1"></span>                                                   
                        </div>
                        <div className="box-page">                            
                            {         
                                this.pageDisplayer()
                            }
                        </div>                        
                    </div>
                </div>
            </div>            
        );
    }
}
export default StepperPage;