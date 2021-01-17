import React, { Component } from 'react';
import Layout from "../components/layout";
import './parentdashboard.scss';
import {getAllBooks,getUserInfo,getCompletedBooks, getChildrenProfiles} from '../services/rest_service';
import DisplayCarouselCards from '../components/displayCarouselCards';
import {AuthToken} from '../services/auth_token';
import DisplayDropDownItems from "../components/DisplayDropDownItems";
import Banner from "../components/Banner";

class ParentDashboard extends Component {
    state = {
        books: [],
        completedBooks: [],
        userData: {},
        childrenProfiles: [],
        selected: "currentlyReading",
        isDropDownClicked: true
    }

    carouselCheck = () => {
        const wrapper = document.querySelector('.cards-wrapper');
        // console.log(wrapper.clientWidth);

        // grab the dots
        const next = document.querySelector('.next');
        const prev = document.querySelector('.prev');
        // the default active dot num which is array[0]
        let activeDotNum = 0;
        let clickedDotNum = 0;
        let divide = document.getElementById("card-wrapper").offsetWidth/120
        let maxScroll;

        //Checking how many cards are displayed on the screen
        if(divide > (Math.floor(divide) + ".2")) {
            maxScroll = Math.ceil(this.state.books.length / Math.ceil(divide)) - 1;
        }
        else {
            maxScroll = Math.ceil(this.state.books.length / Math.floor(divide)) - 1;
        }
        //   add a click event listener to each dot
        next.addEventListener('click', (e) => {
            
            clickedDotNum = activeDotNum + 1;

            if(activeDotNum >= maxScroll) {
                clickedDotNum = 0;
                activeDotNum = -1;
            }
            // console.log('not active');
            // shift the wrapper
            let displayArea = wrapper.parentElement.clientWidth;;
            // let pixels = -wrapper.clientWidth * clickedDotNum;
            let pixels = -displayArea * clickedDotNum
            wrapper.style.transform = 'translateX('+ pixels + 'px)';
            activeDotNum = clickedDotNum;
        });

        prev.addEventListener('click', (e) => {
            clickedDotNum = activeDotNum - 1;
            if(activeDotNum <= 0) {
                clickedDotNum = 0;
                activeDotNum = maxScroll;
            }
            let displayArea = wrapper.parentElement.clientWidth;;
            // let pixels = -wrapper.clientWidth * clickedDotNum;
            let pixels = -displayArea * clickedDotNum
            wrapper.style.transform = 'translateX('+ pixels + 'px)';
            activeDotNum = clickedDotNum;
        })
    }

    componentDidMount() {
        //please();
        AuthToken.getToken().then(res => {
            getAllBooks(res).then(
                result => {
                    this.setState({
                        books: result
                    })
                }
            )

            getCompletedBooks(res).then(result => {
                this.setState({
                    completedBooks: result
                })
            })
            /* this.setState({
                books: getAllBooks(res)
            }) */
            getUserInfo(res).then(result => {
                this.setState({
                    userData: result
                })
            })

            getChildrenProfiles(res).then(result => {
                this.setState({
                    childrenProfiles: result
                })
                // console.log("Gotten child: " + this.state.childrenProfiles[0].id);
            })
        })
        
        this.carouselCheck();     
    }

    carouselSelection = (e) => {
        if(e.target.className === "currentlyReading") {
            document.getElementById("currentlyReading").style.backgroundColor = "aliceblue";
            document.getElementById("booksCompleted").style.backgroundColor = "#EFEFEF";
        } else {
            document.getElementById("currentlyReading").style.backgroundColor = "#EFEFEF";
            document.getElementById("booksCompleted").style.backgroundColor = "aliceblue";
        }

        this.setState({
            selected: e.target.className
        })
    }

    dropdownClicked = () => {
        console.log("state: " + this.state.isDropDownClicked);
        if(this.state.isDropDownClicked)
            document.getElementById("dropdownParentDashboard").style.display = "block";
        else 
            document.getElementById("dropdownParentDashboard").style.display = "none";

        this.setState({
            isDropDownClicked: !this.state.isDropDownClicked
        });
    }

    render() {

        return (
            <Layout>
                <Banner />
                <div class = "parentDashboard">
                    <div class = "customContainer">
                        <div class = "row">
                            <div class = "col-lg-9">
                                <div class = "background"><img src = "images/back-dash-head.png" /></div>
                                <div class = "userDetails">
                                    <div class  = "avatar">
                                        <img src="images/photo.png"/>
                                    </div>
                                    <div class = "content">
                                        <h5 style = {{position: 'relative'}}>
                                            {this.state.userData.first_name} {this.state.userData.last_name} 
                                            <a class = "dropdown-toggle" data-toggle="dropdown" onClick = {this.dropdownClicked}>
                                                
                                            </a>
                                            <div className="dropdown-menu" id = "dropdownParentDashboard">
                                                {/* <a class="dropdown-item" href="#">Link 1</a>
                                                <a class="dropdown-item" href="#">Link 2</a>
                                                <a class="dropdown-item" href="#">Link 3</a> */}
                                                <DisplayDropDownItems childrens = {this.state.childrenProfiles} />
                                            </div>
                                        </h5>
                                        <p>Reader</p>
                                    </div>
                                </div>
                                <div class = "booksInfo card">
                                    <h3 class = "books">Books</h3>
                                    <ul class="tabs" id="myTab" role="tablist">
                                        <button class = "currentlyReading" id = "currentlyReading" onClick = {this.carouselSelection}>Currently Reading</button>
                                        <button class = "booksCompleted" id = "booksCompleted" onClick = {this.carouselSelection}>Books Completed</button>
                                        <button class = "viewAll">view all</button>
                                    </ul>
                                    <div class="cards-carousel" id="myTabContent">
                                        <div class="display-area">
                                            <div class="cards-wrapper" id = "card-wrapper">
                                                <DisplayCarouselCards books = {(this.state.selected === "currentlyReading")?this.state.books:this.state.completedBooks} />
                                            </div> 
                                            </div>

                                        <div class="dots-wrapper">
                                            <button class="next"><img src="https://img.icons8.com/cotton/50/000000/circled-right--v1.png"/></button>
                                            <button class = "prev"><img src="https://img.icons8.com/cotton/50/000000/circled-right--v1.png"/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class = "col-lg-3 rightCol">
                                <div class = "recordingTime">
                                    <div class = "firstCard">
                                        <h5>{this.state.userData.first_name} Recording Time</h5>
                                        <div class = "card">
                                            <div class  = "avatar">
                                                <img src="images/book.png"/>
                                            </div>
                                            <p class = "blueText">Time of book reading</p>
                                            <p>30 hrs</p>
                                        </div>
                                    </div>
                                    <div class = "secondCard">
                                        <h5>Vocab Helper</h5>
                                        <div class = "card">
                                            <div class = "borderTime">
                                                <p>1:00 PM</p>
                                                <p>Today</p>
                                            </div>
                                            <p class = "blueText">Twirl</p>
                                            <p>page 1</p>
                                        </div>
                                    </div>
                                    <button>Words List</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default ParentDashboard;