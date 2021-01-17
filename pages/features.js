import React from 'react';
import Layout from '../components/layout';
import Title from '../components/Title';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Subscribe from "../components/Subscribe";
import ActiveLink from "../components/ActiveLink";
import SignInButton from "../components/SignInButton";
import './features.scss';
import { ModalProvider } from "../context/modalContext";
import Head from "next/head";
import Banner from "../components/Banner";

const Features = () => {
    return(
        <Layout type = "features">
            
            <Head>
            {
                process.browser?
                <>
                <script type="text/javascript" src="../public/js/branch.js"></script>
                <script type="text/javascript" src="../public/js/GTM.js"></script>
                </>:
                <></>
            }
            </Head>
            <div className = "Featuresbackground">
                <div className = "overlayBackground">
                    <h1>Features that help your<br></br>child discover new <br></br>skills</h1>
                </div>
            </div>

            <Container className="app-features-container ourFeatures" maxWidth="false" style = {{marginBottom: '10%', marginTop: '10%'}}>
                <div className="cards-container">
                    <div className = "appLinks">
                        <Grid container justify="center" alignItems="center" style={{display:"none"}}>
                            <Grid item xs={12} sm={12}  md={5} >
                                <div className="image-container" style = {{textAlign: 'center'}}>
                                    <img src="images/googleplay.svg" alt="logo" />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={2}></Grid>
                            <Grid item xs={12} sm={12} md={5} >
                                <div className="image-container" style = {{textAlign: 'center'}}>
                                    <img src="images/appstore.svg" alt="logo" />
                                </div>
                            </Grid>
                        </Grid>
                    </div>


                    <Grid container justify="center" alignItems="center" style = {{marginTop: '10%'}}>
                        <Grid item xs={12} sm = {12} md = {12}>
                            {/* <div className="center-title" style = {{justifyContent: 'center'}}> */}
                                <Title boldText={"Features"} alignText = {"center"}/>
                            {/* </div> */}
                        </Grid>
                    </Grid>
                    <Grid container justify="center" alignItems="center" style = {{marginTop: '5%'}}>
                        <Grid item xs={12} sm={12}  md={5} >
                            <div className="image-container" style = {{textAlign: 'left'}}>
                                <img src="images/Parent Dashboard Section.png" alt="logo" />
                            </div>
                        </Grid>
                        <Grid item xs ={12} sm={12} md={1}></Grid>
                        <Grid item xs={12} sm={12}  md={6} >
                            
                            <Title boldText={"Parent Dashboard"} alignText = {"baseline"} />
                            <p>
                                An easy-to-use Parent Dashboard helps you view the progress your
                                child is making. From how long they have been reading for to what
                                books they are currently reading, you can track everything. This 
                                feature ensures parents can keep an eye on how well their children
                                are doing.
                            </p>
                            
                        </Grid>
                    </Grid>
                    <Grid container justify="center" alignItems="center" style = {{marginTop: '5%'}}>
                        <Grid item xs={12} sm={12}  md={5} className="hide-on-desk">
                            <div className="image-container">
                                <img src="images/personalised books.jpg" alt="logo" />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12}  md={6} >
                            <Title
                                alignText={"flex-start"}
                                boldText={"Personalised books"}
                            />
                            <p>
                                With our collection of books, children can choose the 
                                main character in each story to have a personalised 
                                experience.
                            </p>
                        </Grid>
                        <Grid item xs ={12} sm={12} md={1}></Grid>
                        <Grid item xs={12} sm={12}  md={5} className="hide-on-mobile">
                            <div className="image-container" style = {{textAlign: 'right'}}>
                                <img src="images/personalised books.jpg" alt="logo" />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" alignItems="center" style = {{marginTop: '5%'}}>
                        <Grid item xs={12} sm={12}  md={12} >
                            <div className="image-container coverImageContainer" style = {{textAlign: 'left', backgroundImage: 'url(/images/VocabHelper.jpg)'}}>
                                {/* <img src="images/fully-fledged-readers.jpg" alt="logo" /> */}
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12}  md={12} >
                            <Title
                                alignText={"center"}
                                boldText={"Vocab Helper"}
                                marginTop = {"5%"}
                            />
                            <p className = "featuresMiddlePara" style = {{paddingLeft: '25%', paddingRight: '25%', textAlign: 'center'}}>
                                Vocab Helper is a powerful feature that allows children to learn new
                                words as they read. This is how children can learn how to say certain
                                words and also how to use these words in a sentence. Each time a child
                                taps on a word to find its definition, the app also keeps a log of this
                                and stores it in the Parent Dashboard.
                            </p>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" alignItems="center" style = {{marginTop: '5%'}}>
                        <Grid item xs={12} sm={12}  md={5} className="hide-on-desk">
                            <div className="image-container">
                                <img src="images/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.png" alt="logo" />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12}  md={6} >
                            <Title
                                alignText={"flex-start"}
                                boldText={"Interactive Learning"}
                            />
                            <p>
                                We are an innovative company, driven by our passion to help
                                children see themselves in the stories they read. We believe
                                in harnessing the power of technology to encourage open-minded
                                learning and effective reading. For children aged 2-12, we offer
                                books designed for interactive-reading and enjoyment.
                            </p>
                        </Grid>
                        <Grid item xs ={12} sm={12} md={1}></Grid>
                        <Grid item xs={12} sm={12}  md={5} className="hide-on-mobile">
                            <div className="image-container" style = {{textAlign: 'right'}}>
                                <img src="images/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.png" alt="logo" />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" alignItems="center" style = {{marginTop: '5%'}}>
                        <Grid item xs={12} sm={12}  md={12} >
                            <div className="image-container coverImageContainer" style = {{textAlign: 'left', backgroundImage: 'url(/images/CompatibilitywithiOSandAndroid.jpeg)'}}>
                                {/* <img src="images/fully-fledged-readers.jpg" alt="logo" /> */}
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12}  md={12} >
                            <Title
                                alignText={"center"}
                                boldText={"Compatibility with iOS and Android"}
                                marginTop = {"5%"}
                            />
                            <p className = "featuresMiddlePara" style = {{paddingLeft: '25%', paddingRight: '25%', textAlign: 'center'}}>
                                Inspirable is compatible with both iOS and Android operating
                                systems for today's wide range of smartphones and tablets,
                                including the Samsung Galaxy, Samsung Note, Google Pixel 5,
                                iPad, the latest iPhone, and more.
                            </p>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" alignItems="center" style = {{marginTop: '5%'}}>
                        <Grid item xs={12} sm={12}  md={5} className="hide-on-desk">
                            <div className="image-container">
                                <img src="images/On-Call User Support.jpeg" alt="logo" style = {{borderRadius: '10px'}}/>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12}  md={6} >
                            <Title
                                alignText={"flex-start"}
                                boldText={"On-Call User Support"}
                            />
                            <p>
                                We are committed to offering comprehensive solutions to any
                                troubleshooting issues that may arise when using our app. We
                                have a member of our user support team on-call to assist should
                                it be necessary simply by using the 
                                <ModalProvider>
                                    <SignInButton isText = "true" text = "Help Desk" redirect = "/helpdesk"/>
                                </ModalProvider>
                                area in our website when logged in.
                            </p>
                        </Grid>
                        <Grid item xs ={12} sm={12} md={1}></Grid>
                        <Grid item xs={12} sm={12}  md={5} className="hide-on-mobile">
                            <div className="image-container" style = {{textAlign: 'right'}}>
                                <img src="images/On-Call User Support.jpeg" alt="logo" style = {{borderRadius: '10px'}}/>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" alignItems="center" style = {{marginTop: '5%'}}>
                        <Grid item xs={12} sm={12}  md={5} >
                            <div className="image-container" style = {{textAlign: 'left'}}>
                                <img src="images/Individual Packages.jpg" alt="logo" style = {{borderRadius: '10px'}}/>
                            </div>
                        </Grid>
                        <Grid item xs ={12} sm={12} md={1}></Grid>
                        <Grid item xs={12} sm={12}  md={6} >
                            
                            <Title boldText={"Individual Packages"} alignText = {"baseline"} />
                            <p>
                                You can buy children's books individually right from the Inspirable
                                app. The app is totally free and we have made it so that there are
                                no annoying ads too.
                            </p>
                            
                        </Grid>
                    </Grid>
                    <Grid container justify="center" alignItems="center" style = {{marginTop: '5%', marginBottom: '5%'}}>
                        <Grid item xs={12} sm={12}  md={5} className="hide-on-desk">
                            <div className="image-container">
                                <img src="images/4x Profiles per Account.jpeg" alt="logo" style = {{borderRadius: '10px'}}/>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12}  md={6} >
                            <Title
                                alignText={"flex-start"}
                                boldText={"4x Profiles per Account"}
                            />
                            <p>
                                Each account will allow up to 4 profiles to be created.
                                This takes into consideration families with more than
                                one child. Each account represents the parent and the
                                profile represents the child. This way each child can
                                have their own personal experience with inspirable.
                            </p>
                        </Grid>
                        <Grid item xs ={12} sm={12} md={1}></Grid>
                        <Grid item xs={12} sm={12}  md={5} className="hide-on-mobile">
                            <div className="image-container" style = {{textAlign: 'right'}}>
                                <img src="images/4x Profiles per Account.jpeg" alt="logo" style = {{borderRadius: '10px'}}/>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>

            <div className="subscribe-container">
				<Subscribe />
			</div>
        </Layout>
    )
}

export default Features;