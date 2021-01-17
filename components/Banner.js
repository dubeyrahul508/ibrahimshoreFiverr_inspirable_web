import React, {Component} from 'react';
import './Banner.scss';
class Banner extends Component {
    render() {
        return (
            <div className="flex-main banner">
                <div className="flex-c1">

                    <p><span>&#10024;</span> Sign up today for your  <span className="flex-btn">25% Discount</span>Limited time only!
                        <span>&#10024;</span>
                    </p>

                </div>

            </div>
        );
    }
}

export default Banner;