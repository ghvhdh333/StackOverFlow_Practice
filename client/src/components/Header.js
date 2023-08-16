import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

// 아이콘 수정 중

export default function Header () {
    return (
        <header className='header-container'>
            <div>
                <FontAwesomeIcon icon={faBars} size="" style={{color: "#545454",}} />
            </div>
            <div>
                <img src='logo.png'/>
            </div>
            <div className='logo-name'>
                <span>stack </span>
                <span className='logo-name-overflow'>overflow</span>
            </div>
            <div>
                <span className='about'>About</span>
            </div>
            <div className="search-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#b8b8b8",}} />
                <input type="text" className="search-input" placeholder="Search..." />
            </div>
            <div>
                <button className='btn-log-in'>Log in</button>
            </div>
            <div>
                <button className='btn-sign-up'>Sign up</button>
            </div>
        </header>
    )
}
