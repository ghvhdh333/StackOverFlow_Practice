import './Header.css'

// fontawesome으로 아이콘을 불러온다.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

import SearchDropdown from '../Dropdown/SearchDropdown'

export default function Header () {
    // Search Dropdown state 정의
    const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false)

    // search의 state가 true이면 드롭다운이 나오고, false이면 드롭다운이 사라진다.
    // search 드롭다운을 클릭하면 search 드롭다운이 나오고, 한 번더 search 드롭다운을 클릭하면 search 드롭다운이 꺼지도록 한다. (구현 완료)
    // search 드롭다운이 나온 경우에 search 드롭다운을 제외한 나머지 화면을 클릭하면 search 드롭다운이 꺼지도록 한다. (구현 해야함)
    const searchDropdownHandler = () => {
        setIsSearchDropdownOpen(!isSearchDropdownOpen);
    }

    return (
        <header className='header_container'>
            <Link to='/'>
                <div className='logo_container'>
                    <div className='logo_img'>
                        <FontAwesomeIcon icon={faStackOverflow} />
                    </div>
                    <div className='logo_name'>
                        <span>stack</span>
                        <span className='logo_name_overflow'>overflow</span>
                    </div>
                </div>
            </Link>
            <Link to='/creators'>
                <div className='creators'>Creators</div>
            </Link>
            <div className="search_container" onClick={searchDropdownHandler}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='search_icon' />
                <input type="text" className="search_input" placeholder="Search..." />
                {isSearchDropdownOpen ? <SearchDropdown /> : null}
            </div>
            <Link to='/members/login'>
                <button className='btn_log_in'>Log in</button>
            </Link>
            <Link to='/members/signup'>
                <button className='btn_sign_up'>Sign up</button>
            </Link>
        </header>
    )
}
