import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import './MailingList.css';

class MailingList extends Component {
    render() {
        return (
            <div className='MailingListOuterWrapper'>
                <div className='MailingListDiv'>
                    <form>
                        <MediaQuery query="(max-device-width: 767px)" /* Mobile Newsletter Signup */ >
                            <input type='text' placeholder='Email for Newsletter' />
                            <input type='submit' value='SIGN UP' />
                        </MediaQuery>
                        <MediaQuery query="(min-device-width: 768px)" /* Desktop Newsletter Signup */ >
                            <label>
                                NEWSLETTER:
                            </label>
                            <input type='text' placeholder='Enter email address' />
                            <input type='submit' value='SIGN UP NOW' />
                        </MediaQuery>
                    </form>
                </div>
            </div>
        )
    }
}

export default MailingList;
