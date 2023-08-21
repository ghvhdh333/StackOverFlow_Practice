import './homePage.css';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Question from '../../components/Question/Question';
import SideBar from '../../components/SideBar/SideBar';

export default function HomePage () {
    return (
        <>
            <Header />
            <Nav />
            <main className='main_container'>
                <div className='homePage_title_container'>
                    <h1>Top Questions</h1>
                    <Link to='/questions/ask'>
                        <button className='homePage_btn_ask_question'>Ask Question</button>
                    </Link>
                </div>
                <div className='homePage_filter_btns_container'>
                    <button className='homePage_filter_btn'>Newsest</button>
                    <button className='homePage_filter_btn'>Hot</button>
                </div>
                <section>
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                </section>
            </main>
            {/* <SideBar /> */}
        </>
    )
}