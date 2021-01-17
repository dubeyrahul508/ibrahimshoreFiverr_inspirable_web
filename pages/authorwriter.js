import React from "react";
import Layout from "../components/layout";
import Subscribe from "../components/Subscribe";
import Benefits from "../components/Benefits";
import RoundedButton from "../components/RoundedButton";
import "./authorwriter.scss";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import LatestBlog from "../components/LatestBlogs";
import Banner from "../components/Banner";

const AuthorWriter = ({ posts }) => {
  var items = [
    {
      text:
        "Languages are assets - and so is the ability to link between them. Helping somebody to spread a message in multiple languages is an exciting thing. You will learn a lot about new topics and sometimes even about your own first language. Bridging gaps is so satisfysing!",
      name: "Jonathan Smith",
      opt1: "Founder ",
      opt2: "- Best Buy",
    },
    {
      text:
        "Languages are assets - and so is the ability to link between them. Helping somebody to spread a message in multiple languages is an exciting thing. You will learn a lot about new topics and sometimes even about your own first language. Bridging gaps is so satisfysing!",
      name: "xxxxx xxxxxxxx ",
      opt1: "Founder ",
      opt2: "- Best Buy",
    },
    {
      text:
        "Languages are assets - and so is the ability to link between them. Helping somebody to spread a message in multiple languages is an exciting thing. You will learn a lot about new topics and sometimes even about your own first language. Bridging gaps is so satisfysing!",
      name: "xxxxxxxxxxx xxxxxxxx",
      opt1: "Founder ",
      opt2: "- Best Buy",
    },
  ];

  return (
    <Layout>
      <Banner />
      <div className="container-author">
        <div className="experiencesContainer">
          <div class="experiencesImageContainer">
            <img src="images/about.png" alt="logo" />
          </div>
          <div className="experiencesInfoContainer">
            <div className="experiencesText">
              <p className="bigInfo">
                Experience writing your own content or already writing{" "}
                <strong>children's books?</strong>
              </p>
              <p>
                ‘Join our community of creative writers! Sign up and if you meet
                our criteria’s, then we’ll love for you to start writing
                immediately!
              </p>
              <button className="signUp-button">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <div className="container-title-author">
        <span className="title">
          <strong>Benefits</strong> to enjoy
        </span>
      </div>

      <div className="benefits-container">
        <Benefits
          text="You can work from anywhere in the world"
          icon="public"
        />
        <Benefits
          text="You will have access to resources and receive feedback"
          icon="feedback"
        />
        <Benefits
          text="You will decide when to work and how much work to take on"
          icon="calendar_today"
        />
      </div>

      <div className="container-title-author">
        <span className="title">
          <strong>Topics</strong> to write about
        </span>
      </div>

      <div className="benefits-container">
        <Benefits text="Aspirations for children later in life" icon="star" />
        <Benefits text="Social Experiences that Children face" icon="star" />
        <Benefits
          text="Physical & Emotional stories thet help develop children"
          icon="star"
        />
      </div>
      <div class="upper-triangle"></div>
      <div className="carouselContainer">
        <Carousel autoPlay={false}>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
      <div class="lower-triangle"></div>
      <div className="paragraph">
        <div className="paragraphContent">
          <p>
            <strong>
              There are a number of benefits for being a writer. Have a quick
              look at this video on why you should{" "}
              <span>sign up to become a writer!</span>
            </strong>
          </p>
        </div>
        <div className="asks-image-content">
          <div className="paragraphVideo">
            <img src="images/video.png" alt=" " />
          </div>
          <section className="asks-section">
            <h4>How to become a writer with Inspirable:</h4>
            <span>1. Sign up to join the community</span>
            <span>2. Fill out your details</span>
            <span>3. Read through all the writing manuals</span>
            <span>4. Ask any questions you have (we’ll answer honestly)</span>
            <span>
              5. Sit back and relax while we work on the finer details
            </span>
            <h4>The benefits of working with Inspirable:</h4>
            <ul>
              <li>Transparency</li>
              <p>
                The first for us is transparency based on personal
                trustworthiness and ethics. We want to not only build a business
                but we want to create a community where our customer base has a
                say in how we develop as well as showing them the stages of how
                things get implemented.
              </p>
              <li>Bravery</li>
              <p>
                The second is bravery. We know it is a mean feat to take on the
                big organisations within this industry but we believe we have
                the right idea for the market and we also feel taking certain
                risks is worthwhile our time. Bravery also stands for the
                willingness to come up with and try new things.
              </p>
              <li>Passion</li>
              <p>
                Our meaning of this to us is having great enthusiasm for what it
                is we are building. We truly believe we can change the narrative
                when it comes to children books and we want distinct voices on
                our platform by way of independent writers. This is what drives
                us to want to bring this to the market because our desire is to
                see children being able to dream big and being able to aspire to
                become certain things that may have been seen as obscure. We
                also want to see parents take more of an active role in the
                development of their children.
              </p>
              <li>Educational</li>
              <p>
                For us this means actually doing our research into the content
                we put out there for children to read. This means if there is a
                book that will help to inspire young children to one day become
                Astronauts then we will do our research to make sure it contains
                elements that reflect real life. So, that children to go beyond
                or further when they place the book down.
              </p>
            </ul>
            <h3>Stories to write about:</h3>
            <p>
              ‘At Inspirable, it is all about being creative and doing research
              into the stories we put out for children. This is much more than
              just writing stories that are fun but it is more about excellence
              and striving to expose children to new things. The dream we have
              is to one day hear how a child at the age of 16 years of age,
              knows exactly what they want to become because of the time and
              effort we put in to see that such stories were available.
            </p>
          </section>
        </div>
      </div>

      <LatestBlog posts={posts} />
      <div className="subscribe-container">
        <Subscribe />
      </div>
    </Layout>
  );
};

function Item(props) {
  return (
    <Paper>
      <img className="photo" src="images/mision.png" alt="logo" />
      <p>{props.item.text}</p>
      <div>
        <strong>{props.item.name}</strong>
      </div>
      <div>
        <span>
          <strong>{props.item.opt1}</strong> {props.item.opt2}
        </span>
      </div>
    </Paper>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://production.inspirable.io/api/blog");
  const posts = await res.json();
  await posts.data.sort(function (a, b) {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return {
    props: {
      posts: posts,
    },
  };
}
export default AuthorWriter;
