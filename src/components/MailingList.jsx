import React, { Component } from 'react';
import './MailingList.css';

class MailingList extends Component {
    render() {
        return (
            <div className='MailingListOuterWrapper'>
                <div className='MailingListDiv'>
                    <form>
                        <label>
                            NEWSLETTER:
                        </label>
                        <input type='text' placeholder='Enter email address' />
                        <input type='submit' value='SIGN UP NOW' />
                    </form>
                </div>
            </div>
        )
    }
}

export default MailingList;
