import React, { Component } from 'react';
import './Socials.css';

class Socials extends Component {
    render() {
        return (
            <div className='SocialsOuterWrapper'>
                <div className='SocialsDiv'>
                    <a href="https://www.instagram.com/">
                        <img src='assets/logo_ig_128px.png' className='socialMediaLogo' alt='' />
                    </a>
                    <a href="https://www.twitter.com/">
                        <img src='assets/logo_twitter_128px.png' className='socialMediaLogo' alt='' />
                    </a>
                    <a href="https://www.facebook.com">
                        <img src='assets/logo_fb_128px.png' className='socialMediaLogo' alt='' />
                    </a>
                    <a href="https://www.youtube.com">
                        <img src='assets/logo_yt_128px.png' className='socialMediaLogo' alt='' />
                    </a>
                </div>
            </div>
        )
    }
}

export default Socials;
