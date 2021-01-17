import React from "react";
import Layout from "../components/layout";
import ContainerArticle from "../components/ContainerArticle";
import "./about.scss";
import Title from "../components/Title";
import { AboutMissionText, ourWhy } from "../config/text";
import Subscribe from "../components/Subscribe";
import HomeAnimation from "../components/HomeAnimation";
import Grid from '@material-ui/core/Grid';
import Head from "next/head";
import Container from '@material-ui/core/Container';
import Banner from "../components/Banner";


const About = () => {
	return (
		<Layout>
			
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
			<div className = "aboutUs">
			<Container className = "aboutUsHeader" maxWidth="false" style = {{backgroundColor: "aliceblue", paddingTop: '5%', paddingBottom: '10%'}}>
				<Grid container className="aboutHeader">
					<Grid item xs={12} className="image hide-on-desk">
						<div className="image-container aboutUsImageContainer">
							<img className="image1" src="images/mision.png" alt="logo" />
							<img className="image2" src="images/square.png" alt="logo" />
						</div>
					</Grid>
					<Grid item xs={12} sm={12}  md={7} >
						<div className="container-title firstHeader">
							<Title text={"Our"} boldText={"Story: "} fontSize='1.5em' underline = 'yes' Display = 'block' textAlign = 'left'/>
						</div>
						<p className="aboutHeaderText">
						It all started back in 2017 when Natalie (<strong style = {{fontStyle: "italic"}}>
						founder and the mastermind behind Inspirable</strong>) came up with the 
						idea to have a mobile app where parents and children can take an adventurous 
						and fully immersive ride to the world of books. <br></br>
						<br></br>Natalie, who has worked professionally in Early Years for more 
						than a decade, recognised a need for a place where informative and interesting 
						books combine with modern technology. Natalie wants to inspire young children 
						to be imaginative and explore different professions that seem remote or in 
						other cases unattainable. <br></br>
						<br></br>Natalie alongside her tech-savvy husband started Inspirable to provide 
						children with books that would not only nourish their minds but also help expose 
						different and unique career pathways, such as an Astronaut, Computer Scientist or 
						Forensic Scientist as well as others.
						</p>
					</Grid>
					<Grid item xs={12} sm={12}  md={5} >
						<div className="image hide-on-mobile">
							<div className="image-container">
								<img className="image1" src="images/mision.png" alt="logo" />
								<img className="image2" src="images/square.png" alt="logo" />
							</div>
						</div>
					</Grid>
				</Grid>
			</Container>
			<Container maxWidth="false">
				<Grid container className="ourVisionSection">
					<Grid item xs={12} sm={12}  md={6} >
						<div className="image-container update-design">
							<img src="images/about-second.png" alt="logo" />
						</div>
					</Grid>
					<Grid item xs={12} sm={12}  md={6} >
						<Title text={"Our"} boldText={"Mission: "} padTop = {"100px"} alignText = {"baseline"} />
						<p className="aboutUrWhy">
						We aim to reform the reading habits of children and increase their 
						interest in books. As technology takes the newest forms, we wish to 
						leverage technology to inculcate a true love for reading among our 
						children. Inspirable’s mission is to nurture the imagination of children 
						and improve their social, emotional, and personal well-being.<br></br>
						<br></br>We also aim to bring parents and guardians on the same page with 
						their children to actively engage in fun and learning activities in order 
						to better develop interest and connection with literature. This will not 
						only help in broadening a child’s vocabulary but also help them think outside 
						the box.
						</p>
					</Grid>
				</Grid>
				<Grid container className="aboutInspirable">
					<Grid item xs={12} sm={12}  md={12} style = {{marginBottom: '10%'}} >
						<Title text={"Our"} boldText={"Vision"} />
					</Grid>
					<Grid item xs={12} sm={12}  md={5} className="hide-on-desk" style = {{display: 'none'}}>
						<div className="image-container hide-on-desk">
							<img src="images/Our Vision 1.jpeg" alt="logo" style = {{borderRadius: '10px'}}/>
						</div>
					</Grid>
					<Grid item xs={12} sm={12}  md={6} style = {{paddingTop: '5% !important'}}>
						<div className="text-container">
							<p>
							We envision to give direction to children towards the path of bettering 
							themselves and society by reforming their reading interests. We wish to 
							make reading fun and not a struggle in terms of encouraging your children 
							to read. We believe stories don’t have to be the same old narratives. 
							That is why we strive to bring the excitement back to reading so that your 
							child will be begging to dive into a story and feed their wildest dreams.
							</p>
						</div>
					</Grid>
					<Grid item xs = {12} sm = {12} md = {1}></Grid>
					<Grid item xs={12} sm={12}  md={5} className="hide-on-mobile">
						<div className="image-container hide-on-mobile">
							<img src="images/Our Vision 1.jpeg" alt="logo" style = {{borderRadius: '10px'}}/>
						</div>
					</Grid>
					<Grid item xs={12} sm={12}  md={5} style = {{paddingTop: '5%'}}>
						<div className="image-container first">
							<img src="images/Our Vision 2.jpeg" alt="logo" style = {{borderRadius: '10px'}}/>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={1} ></Grid>
					<Grid item xs={12} sm={12}  md={6} style = {{paddingTop: '5%'}}>
						<div className="text-container">
							<p>
								We want to breathe new life into children’s education by delivering
								well-conceptualised stories that are memorable, educational and fun
								to read. For children who struggle to remain attentive or for those
								who love finding new joys of reading and learning, Inspirable is the
								perfect tool. After thorough research and consideration, we have
								focused our efforts on adding real value to stories that serve to
								aid in a child’s balanced growth and development. By having the main
								character in each story personalised in some way, is the first step
								in the transformation of the reading experience for children. That
								said, we want the reader (your child) to become part of the story so
								that they can better comprehend the messaging and commit it to
								memory.
							</p>
						</div>
					
					</Grid>
					<Grid item xs={12} sm={12}  md={5} className="hide-on-desk" style = {{paddingTop: '10%', paddingBottom: '10%'}}>
						<div className="image-container hide-on-desk">
							<img src="images/Our Vision 3.jpeg" alt="logo" style = {{borderRadius: '10px'}}/>
						</div>
					</Grid>
					<Grid item xs={12} sm={12}  md={6} style = {{paddingTop: '7%'}}>
						<div className="text-container">
							<p>
								Inspirable is an innovative company, driven by our passion to help
								children see themselves in the stories they read. We believe in
								harnessing the power of technology to encourage open-minded learning
								and effective reading. For children ages 2-12, we offer books
								designed for interactive reading and enjoyment.
							</p>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={1}></Grid>
					<Grid item xs={12} sm={12}  md={5} style = {{paddingTop: '5%', paddingBottom: '10%'}}>
						<div className="image-container hide-on-mobile">
							<img src="images/Our Vision 3.jpeg" alt="logo" style = {{borderRadius: '10px'}}/>
						</div>
					</Grid>
				</Grid>
			</Container>
			{/* starts different content width and background */}
			<div class="upper-triangle hide-on-mobile"></div>
			<div className="animation-container-center app-feature-helper">
				<div className="animation">
					<HomeAnimation />
				</div>
				<Container className="app-features-container " maxWidth="false">
					<div className="cards-container">
						
						<Grid container justify="center" alignItems="center">
							<Grid item xs={12}>
								{/* <div className="center-title"> */}
									<Title text={" Through The Milestones"} boldText={"Helping Parents"} alignBoldText = {"left"} />
									<div style = {{textAlign: 'center'}}>
										<span>
											We are focused on helping children.
										</span>
									</div>
								{/* </div> */}
							</Grid>
						</Grid>
						<Grid container justify="center" alignItems="center" style = {{marginTop: '10%'}}>
							<Grid item xs={12} sm={12}  md={4} >
								<div className="image-container" style = {{textAlign: 'left'}}>
									<img src="images/early-years.jpg" alt="logo" />
								</div>
							</Grid>
							<Grid item xs={12} sm={12}  md={8} >
								
								<Title boldText={"Early Years"} subTitle = {"2-4 years old"}  alignText = {"baseline"} />
								<p>
									In those early years,it could be getting a toddler into a sleep routine,
									helping them recognise their name, or learning letters and sounds together.
								</p>
								
							</Grid>
						</Grid>
						<Grid container justify="center" alignItems="center" style = {{marginTop: '10%'}}>
							<Grid item xs={12} sm={12}  md={4} className="hide-on-desk">
								<div className="image-container">
									<img src="images/first-chapter-ebooks.jpg" alt="logo" style = {{borderRadius: '10px'}} />
								</div>
							</Grid>
							<Grid item xs={12} sm={12}  md={8} >
								<Title
									alignText={"flex-start"}
									boldText={"First Chapter Books"}
									subTitle = {"5-8 years old"}
								/>
								<p>
									As children start school, the world around them opens up. Stories
									about friendship, adventure, courage, and kindness help children
									develop important social skills and grow their imagination.
								</p>
							</Grid>
							<Grid item xs={12} sm={12}  md={4} className="hide-on-mobile">
								<div className="image-container" style = {{textAlign: 'right'}}>
									<img src="images/first-chapter-ebooks.jpg" alt="logo" style = {{borderRadius: '10px'}} />
								</div>
							</Grid>
						</Grid>
						<Grid container justify="center" alignItems="center" style = {{marginTop: '10%'}}>
							<Grid item xs={12} sm={12}  md={4} >
								<div className="image-container" style = {{textAlign: 'left'}}>
									<img src="images/fully-fledged-readers.jpg" alt="logo" />
								</div>
							</Grid>
							<Grid item xs={12} sm={12}  md={8} >
								<Title
									alignText={"flex-start"}
									boldText={"Fully Fledged Readers"}
									subTitle = {"9-12 years old"}
								/>
								<p>
									Children become more independent in their personality and reading
									habits. Stories help them explore their enormous potential. instill
									self-belief and build confidence in reading.
								</p>
							</Grid>
						</Grid>
					</div>
				</Container>
			</div>
			
			<div class="lower-triangle"></div>
			{/* ends different content width and background */}
			
			<Container className="app-features-container ourCoreValues" maxWidth="false" style = {{marginBottom: '10%'}}>
					<div className="cards-container">
						
						<Grid container justify="center" alignItems="center">
							<Grid item xs={12}>
								{/* <div className="center-title"> */}
									<Title boldText={"Our Core Values"} />
									<div>
										<span>
										As we are dedicated to improving the future of your children - the change-makers of tomorrow - Inspirable has zero-compromise policies when it comes to core values.
	
										<br></br>
										<br></br>Our focus is to ensure:
	
										</span>
									</div> 
							</Grid>
						</Grid>
						<Grid container justify="center" alignItems="center" style = {{marginTop: '10%'}}>
							<Grid item xs={12} sm={12}  md={4} >
								<div className="image-container" style = {{textAlign: 'left'}}>
									<img src="images/early-years.jpg" alt="logo" />
								</div>
							</Grid>
							<Grid item xs={12} sm={12}  md={8} >
								
								<Title boldText={"Transparency"} alignText = {"baseline"} />
								<p>
									We strive hard to create transparency when it comes to our customers. 
									Trustworthiness and ethics form the core foundation of all our processes. 
									Inspirable desires to create a place where parents, guardians, and adults 
									work together to build healthy reading habits among the new generation.
								</p>
								
							</Grid>
						</Grid>
						<Grid container justify="center" alignItems="center" style = {{marginTop: '10%'}}>
							<Grid item xs={12} sm={12}  md={4} className="hide-on-desk">
								<div className="image-container">
									<img src="images/first-chapter-ebooks.jpg" alt="logo" />
								</div>
							</Grid>
							<Grid item xs={12} sm={12}  md={8} >
								<Title
									alignText={"flex-start"}
									boldText={"Bravery"}
								/>
								<p>
									We are brave enough to take risks and formulate strategies that will 
									give our company a strong competitive edge within the industry. We are 
									always ready to take the big plunge when it comes to the learning and 
									development of young readers. We encourage innovative ideas from our 
									staff and suggestions that come from our customers. 
								</p>
							</Grid>
							<Grid item xs={12} sm={12}  md={4} className="hide-on-mobile">
								<div className="image-container" style = {{textAlign: 'right'}}>
									<img src="images/first-chapter-ebooks.jpg" alt="logo" />
								</div>
							</Grid>
						</Grid>
						<Grid container justify="center" alignItems="center" style = {{marginTop: '10%'}}>
							<Grid item xs={12} sm={12}  md={4} >
								<div className="image-container" style = {{textAlign: 'left'}}>
									<img src="images/fully-fledged-readers.jpg" alt="logo" />
								</div>
							</Grid>
							<Grid item xs={12} sm={12}  md={8} >
								<Title
									alignText={"flex-start"}
									boldText={"Passion"}
								/>
								<p>
									All it requires to bring a change is an idea backed with a true passion 
									to turn it into reality. We make sure to ignite this passion and build a 
									strong community around books. We believe new writers deserve appreciation 
									and a proper platform to showcase their talent. Inspirable is here to keep 
									this passion for writing and reading alive through our mobile app. We also 
									want to see parents take as much of an active role in the development of their 
									children whilst using modern technology.
								</p>
							</Grid>
						</Grid>
						<Grid container justify="center" alignItems="center" style = {{marginTop: '10%'}}>
							<Grid item xs={12} sm={12}  md={4} className="hide-on-desk">
								<div className="image-container">
									<img src="images/first-chapter-ebooks.jpg" alt="logo" />
								</div>
							</Grid>
							<Grid item xs={12} sm={12}  md={8} >
								<Title
									alignText={"flex-start"}
									boldText={"Educational"}
								/>
								<p>
									We share content that increases the knowledge of our young readers. 
									Our wide collection of books covers different subjects and encourages 
									learning with purpose. We wish to prepare children for the future with 
									real-world information.
								</p>
							</Grid>
							<Grid item xs={12} sm={12}  md={4} className="hide-on-mobile">
								<div className="image-container" style = {{textAlign: 'right'}}>
									<img src="images/first-chapter-ebooks.jpg" alt="logo" />
								</div>
							</Grid>
						</Grid>
					</div>
				</Container>

			<div className="subscribe-container">
				<Subscribe />
			</div>
			</div>
		</Layout>
	);
};

export default About;
