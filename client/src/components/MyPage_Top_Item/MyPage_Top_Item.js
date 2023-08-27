import './MyPage_Top_Item.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faStackExchange } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function MyPage_Top_Item () {
    // myPage middle button active 정의
    // default value = 1는 myPage에서 myPage_activity가 첫 페이지로 나타나게 한다.
    const [myPageMiddleBtnActiveIndex, setMyPageMiddleBtnActiveIndex] = useState(1);

    // myPage Middle button active handler
    const myPageMiddleBtnActiveHandle = (index) => {
        setMyPageMiddleBtnActiveIndex(index);
    };

    return (
        <>
            <section className='myPage_top_item_name_container'>
                <Link to='/myPage/activity'>
                    <div className='myPage_top_item_name_icon'>
                        {/* {member_name}으로 바꿔야함 */}
                        코딩
                    </div>
                </Link>
                <div className='myPage_top_item_info_total'>
                    <h1 className='myPage_top_item_info_name_h1'>김코딩</h1>
                    <ul className='myPage_top_item_info'>
                        <li>
                            <FontAwesomeIcon icon={faCakeCandles} className='myPage_top_item_info_icons'/>Member for 17 days
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faClock} className='myPage_top_item_info_icons' /> Last seen this week
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCalendarDays} className='myPage_top_item_info_icons' />Visited 8 days, 1 consecutive
                        </li>
                    </ul>
                </div>
                <div className='myPage_btn_profile_container'>
                    <Link to='/myPage/settings'>
                        <button className='myPage_btn_profile'><FontAwesomeIcon icon={faPen} />Edit profile</button>
                    </Link>
                    <button className='myPage_btn_profile'><FontAwesomeIcon icon={faStackExchange} />Network profile</button>
                </div>
            </section>
            <section className='myPage_middle_btns_container'>
                <Link to='/myPage/profile'>
                    <button className={`myPage_middle_btn ${myPageMiddleBtnActiveIndex === 0 ? 'myPage_middle_btn_active' : ''}`} onClick={() => myPageMiddleBtnActiveHandle(0)}>Profile</button>
                </Link>
                <Link to='/myPage/activity'>
                    <button className={`myPage_middle_btn ${myPageMiddleBtnActiveIndex === 1 ? 'myPage_middle_btn_active' : ''}`} onClick={() => myPageMiddleBtnActiveHandle(1)}>Activity</button>
                </Link>
                <Link to='/myPage/saves'>
                    <button className={`myPage_middle_btn ${myPageMiddleBtnActiveIndex === 2 ? 'myPage_middle_btn_active' : ''}`} onClick={() => myPageMiddleBtnActiveHandle(2)}>Saves</button>
                </Link>
                <Link to='/myPage/settings'>
                    <button className={`myPage_middle_btn ${myPageMiddleBtnActiveIndex === 3 ? 'myPage_middle_btn_active' : ''}`} onClick={() => myPageMiddleBtnActiveHandle(3)}>Settings</button>
                </Link>
            </section>
        </>
    )
}