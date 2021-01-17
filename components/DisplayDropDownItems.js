import React from 'react';
import DisplayCarouselCards from './displayCarouselCards';

const DisplayDropDownItems = (props) => {
    
    const childrenList = props.childrens.length ? (props.childrens.map(child => {
        return (
            <div style ={{display: 'flex'}}>
                <img src = {child.avatar} alt = "images/playStore.png" style = {{width: '30px'}}/>
                <a class="dropdown-item" href="#">{child.first_name}'s screentime</a>
            </div>
    )})) : (
        <p>Nothing to show</p>
    )

    const val = () => {
        console.log("HELLO G" + props.childrens[0].first_name);
    }

    return(
        <div className = "items">
            {childrenList}
        </div>
    );
}

export default DisplayDropDownItems;