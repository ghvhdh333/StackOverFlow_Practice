import './LogOut.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom';

export default function LogOut () {
    return (
        <div className='log_in_form_total'>
            <div className='log_in_form_logo_container'>
                <Link to='/'>
                    <FontAwesomeIcon icon={faStackOverflow} className='log_in_form_logo_icon'/>
                </Link>
            </div>

            <div className='log_in_form_input_total'>
                <div>
                    <div className='log_in_form_input_title'>Email</div>
                    <input type='text' className='log_in_form_input_box'></input>
                </div>
                <div>
                    <div className='log_in_form_password_text_container'>
                        <div className='log_in_form_input_title'>Password</div>
                        <div className='log_in_form_text_forgot'>Forgot password?</div>
                    </div>
                    <input type='text' className='log_in_form_input_box'></input>
                </div>
                <button className='log_in_form_btn'>Log in</button>
            </div>
        </div>
    )
}