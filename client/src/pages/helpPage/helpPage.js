import './helpPage.css';

import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import SideBar from '../../components/SideBar/SideBar';

export default function HelpPage () {
    return (
        <>
            <Header />
            <div className='helpPage_main_section_division'>
                <Nav/>
                <main className='helpPage_main_container'>
                    <div className='helpPage_title_container'>
                        <h1>How do I search?</h1>
                    </div>
                </main>
                <SideBar />
            </div>
        </>
    )
}