import React, { Component } from 'react';
import './AboutComponent.css';

const whoAreWeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam consequat consectetur. Ut nec aliquam leo. Pellentesque eget ipsum vitae eros lobortis posuere. Proin cursus erat vel congue pharetra. Proin orci mauris, consequat at eros eleifend, iaculis hendrerit urna. Duis vehicula placerat erat, non bibendum massa malesuada a. Integer tincidunt ligula quis diam ullamcorper, ut faucibus neque posuere. Mauris pharetra ullamcorper mi et tristique.'
const whyAreWeDoingThisText = 'Pellentesque laoreet magna at felis vestibulum, et hendrerit nibh mollis. Nunc sollicitudin turpis a dui finibus vehicula. Nulla eget orci dictum, convallis sem a, porta dolor. Phasellus vulputate lacus non ante iaculis lacinia. Cras mattis risus sed malesuada molestie. Etiam ex turpis, varius ac sapien in, maximus molestie turpis. Donec a augue eget tortor ullamcorper sagittis. Praesent nec ultrices mi. Aliquam id tellus ut nisi faucibus tempus sed a libero.';
const businessProcessText = 'In vitae nunc eget nisl imperdiet facilisis ac vel tellus. Nulla et pulvinar risus, pulvinar aliquet lacus. Quisque imperdiet, eros id ultricies ornare, nulla metus rutrum nulla, malesuada feugiat mi tortor sed justo. Aenean lectus mauris, pulvinar sed congue nec, sollicitudin id metus. Duis pharetra dapibus sem. Praesent ornare ex ex, quis fringilla ligula ultrices eget. Mauris sem enim, varius ut ultricies vel, cursus maximus purus. Nullam eget risus dapibus, pellentesque tortor in, ornare dolor. Duis tristique imperdiet nibh, vel dignissim est tempus eget. Suspendisse et condimentum lorem, at tincidunt nunc. In nisl metus, iaculis vel sapien vel, vehicula fringilla nisl. Proin molestie posuere pretium. Nunc hendrerit iaculis leo vel feugiat.';

class AboutComponent extends Component {
    render() {
        return (
            <div className='AboutComponentOuterWrapper'>
                <div className='AboutComponentDiv'>
                    <h3>About Us</h3>
                    <h4>Who are we?</h4>
                    <p>{ whoAreWeText }</p>
                    <h4>Why are we doing this?</h4>
                    <p>{ whyAreWeDoingThisText }</p>
                    <h4>The business process</h4>
                    <p>{ businessProcessText }</p>
                </div>
            </div>
        )
    }
}

export default AboutComponent;
