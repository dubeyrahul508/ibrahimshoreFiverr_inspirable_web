import LayoutHome from "../components/LayoutHome";
import ChildrenAnimation from "../components/ChildrenAnimation";
import HomeAnimation from "../components/HomeAnimation";
import RoundedButton from "../components/RoundedButton";
import "./index.scss";
import ContainerArticle from "../components/ContainerArticle";
import Title from "../components/Title";
import Subscribe from "../components/Subscribe";
import LatestBlog from "../components/LatestBlogs";
import ActiveLink from "../components/ActiveLink";
import PlayStore from "../components/PlayStore";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Head from "next/head";
import React from "react";

const Home = ({posts}) => {
  return (


    <LayoutHome>
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
      {/* <div className="home-container"> */}
      <Container maxWidth="false">
        <Grid  container  className="animation_child_content">
          <Grid items xs={12} sm={12}  md={6}>
            <ChildrenAnimation />
          </Grid>
          <Grid items xs={12} sm={12}  md={6} className="why-inspirable-container muted-text" style = {{paddingTop: '10%'}}>
            <h2>Inspirable – A Mobile App That Encourages Your Child To Read</h2>
            <p>Inspirable is a mobile app that allows children to enjoy reading. 
                We use technology to help young readers develop their focus and 
                consistency that will make them a lifelong reader.
            </p>
            <ActiveLink href={"/about"}>
              <RoundedButton text="Learn More" />
            </ActiveLink>
          </Grid>
        </Grid>
      </Container>
      <div className="animationContainer">  
        <div className="animation">
          <div class="upper-triangle">
          </div>
          <HomeAnimation />
          <div class="lower-triangle-home">
          </div>
        </div>
        <div className="title_cards">
            <Title text={" Age Groups"} boldText="Reading" alignBoldText="left"/>
            <span className="muted-text" style={{ top: -10 }}>
              Inspirable is designed to inculcate the love for reading among children 
              from different age groups.
            </span>
        </div>
        <Container maxWidth="false">
          <div className="cards-container muted-text">
          <ContainerArticle
            backgroundImage={"/images/help1.png"}
            title={"Early Years"}
            colorTitle={"#f2f9fb"}
            colorSubTitle={"#f2f9fb"}
            subTitle={"2-4 years old"}
            titleButton={"Explore Range"}
            colorButton={"white"}
            colorTextButton={"#334d5e"}
          />
          <ContainerArticle
            backgroundImage={"/images/first-chapter-ebooks.jpg"}
            title={"First Chapter Books"}
            colorTitle={"#f2f9fb"}
            colorSubTitle={"#f2f9fb"}
            subTitle={"5-8 years old"}
            titleButton={"Explore Range"}
            colorButton={"white"}
            colorTextButton={"#334d5e"}
          />
          <ContainerArticle
            backgroundImage={"/images/fully-fledged-readers.jpg"}
            title={"Fully Fledged Readers"}
            colorTitle={"#f2f9fb"}
            colorSubTitle={"#f2f9fb"}
            subTitle={"9-12 years old"}
            titleButton={"Explore Range"}
            colorButton={"white"}
            colorTextButton={"#334d5e"}
          />
        </div>
        </Container> 
      </div>
      <Container  maxWidth="false" className="app-features-container" style = {{marginTop: "15%"}}>  
        {/* app feature section */}
        
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <div className="container-title">
                <Title text={"Why Choose "} boldText="Inspirable?"/>
                <span>Here’s what makes Inspirable the top choice among parents.</span>
            </div>
          </Grid>
        </Grid>
        {/* <Grid container  className="feature feature_1">
          
          <Grid item xs={12} sm={12}  md={8} className="feature-text-container">
            <div className="content-align-title">
              <div className="title-with-image">
                <img className="image1" src="images/parent-dashboard-icon.jpg" alt="icon" />
              </div>
              <div className="title-with">
                <Title text={"Using Technology to Make Reading Fun"}/>
              </div>
            </div>
            <div alignContent="center" className="image-container hide-on-desk-home">
              <img className="image1" src="images/parent_dashboard.png" alt="logo" />
            </div>
            <p className="feature-description">
              Inspirable helps turn screen time into quality reading time for children 
              between the ages of 2 and 12. The more they read, the more they learn new 
              things, develop deep knowledge, and come up with new ideas.
            </p>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item xs={12} sm={12}  md={3} className="image-container image-container-feature content-align-right hide-on-mobile-home" style = {{textAlign: 'right'}}>
            <img className="image1" src="images/parent_dashboard.png" alt="logo" />
          </Grid>
          
        </Grid>
         */}
        <Grid container className="feature feature_2">
          
          {/* feature 2 */}
          <Grid item xs={12} sm={12}  md={4} className="image-container image-container-feature content-align-center hide-on-mobile-home" style = {{textAlign: 'left'}}>
            <img className="image1 " src="images/Educating young learners.jpeg" alt="logo" style = {{borderRadius: '10px'}} />
          </Grid>
          <Grid item md = {1}></Grid>
          <Grid item xs={12} sm={12}  md={7} className="feature-text-container">
            <div className="content-align-title">
              {/* <div className="title-with-image">
                <img className="image1" src="images/personalised-ebooks-icon.jpg" alt="icon" />
              </div> */}
              <div className="title-with">
                <Title text={"Educating young learners"}/>
              </div>
            </div>
            <div alignContent="center" className="image-container hide-on-desk-home">
              <img className="image1" src="images/Educating young learners.jpeg" alt="logo" style = {{borderRadius: '10px'}}/>
            </div>
            <p className="feature-description">
              The original and illustrated books touch on topics that play a part in 
              children’s lives and have an educational aspect to them. Parents can monitor 
              their child’s vocabulary development by checking the Parent Dashboard.
            </p>
          </Grid>
        
        </Grid>
        <Grid container className="feature feature_3">
          
          {/* feature 3 */}
          
          <Grid item xs={12} sm={12}  md={7} className="feature-text-container">
            <div className="content-align-title">
              {/* <div className="title-with-image">
                <img className="image1" src="images/vocab-helper-icon.jpg" alt="logo" />
              </div> */}
              <div className="title-with">
                <Title text={"Preparing children for the future"}/>
              </div>
            </div>
            <div alignContent="center" className="image-container hide-on-desk-home">
              <img className="image1" src="images/Preparing children for the future.jpeg" alt="logo" style = {{borderRadius: '10px'}}/>
            </div>
            <p className="feature-description">
              Books with Inspirable helps to uncover the different and diverse world we all live in.
              Children are at times not exposed to the vast métiers out there, which 
              at times seem remote. We aspire children to go further and explore what 
              later life could look like for them through stories that uncover things 
              that are not often told. 
            </p>
          </Grid>
          <Grid item md = {1}></Grid>
          <Grid item xs={12} sm={12}  md={4} className="image-container image-container-feature hide-on-mobile-home content-align-center" style = {{textAlign: 'right'}}>
            <img className="image1" src="images/Preparing children for the future.jpeg" alt="logo" style = {{borderRadius: '10px'}}/>
          </Grid>
        </Grid>
        <Grid container className="feature feature_4">
          
            {/* feature 4 */}
            <Grid item xs={12} sm={12}  md={4} className="image-container image-container-feature content-align-center hide-on-mobile-home" style = {{textAlign: 'left'}}>
              <img className="image1 " src="images/Encouraging emotional development.jpeg" alt="logo" style = {{borderRadius: '10px'}}/>
            </Grid>
            <Grid item md = {1}></Grid>
            <Grid item xs={12} sm={12}  md={7} className="feature-text-container">
              <div className="content-align-title">
                {/* <div className="title-with-image">
                  <img className="image1" src="images/personalised-ebooks-icon.jpg" alt="icon" />
                </div> */}
                <div className="title-with">
                  <Title text={"Encouraging emotional development"}/>
                </div>
              </div>
              <div alignContent="center" className="image-container hide-on-desk-home">
                <img className="image1" src="images/Encouraging emotional development.jpeg" alt="logo" style = {{borderRadius: '10px'}}/>
              </div>
              <p className="feature-description">
                We want to encourage children’s emotional development through our books, 
                for example books that speak on family dynamics.
              </p>
            </Grid>
        
        </Grid>
        <Grid container className="feature feature_5">
          
          {/* feature 5 */}
          
          <Grid item xs={12} sm={12}  md={7} className="feature-text-container">
            <div className="content-align-title">
              {/* <div className="title-with-image">
                <img className="image1" src="images/vocab-helper-icon.jpg" alt="logo" />
              </div> */}
              <div className="title-with">
                <Title text={"Improving attentiveness"}/>
              </div>
            </div>
            <div alignContent="center" className="image-container hide-on-desk-home">
              <img className="image1" src="images/Improving attentiveness.jpeg" alt="logo" style = {{borderRadius: '10px'}}/>
            </div>
            <p className="feature-description">
              Inspirable is the perfect tool for children who struggle to remain attentive 
              or for those who love finding new joys of reading and learning.
            </p>
          </Grid>
          <Grid item md = {1}></Grid>
          <Grid item xs={12} sm={12}  md={4} className="image-container image-container-feature hide-on-mobile-home content-align-center" style = {{textAlign: 'right'}}>
            <img className="image1" src="images/Improving attentiveness.jpeg" alt="logo" style = {{borderRadius: '10px'}}/>
          </Grid>
        </Grid>

        <Grid container className="">
          <LatestBlog posts={posts}/>
        </Grid>

        <div className="text-play-store text_1">
          <span class="muted-text">Help us build the kind of children's reading app you can be proud of</span>
        </div>
        {/* <div className="text-play-store">
          <span class="muted-text sub-play-store">Download the Inspirable app on iOS or Android to get started.</span>
        </div>
        <PlayStore /> */}

      </Container>

      <Subscribe/>

    </LayoutHome>


  );
};


export async function getStaticProps() {
 
  const res = await fetch("https://production.inspirable.io/api/blog/most-viewed");
  const posts = await res.json();
  
  //It's optional while i think in another option to do it.

  let today = new Date();
  if ( today.getHours() < 18 ){
    await posts.data.sort(function (a, b) {
      return new Date(b.created_at) - new Date(a.created_at);
    });
  }
  
  return {
    props: {
      posts: posts,
    },
  };
}

export default Home;

