import './questionsPage.css';

import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import SideBar from '../../components/SideBar/SideBar';

export default function QuestionsPage () {
    return (
        <>
            <Header />
            <div className='questionsPage_main_section_division'>
                <Nav/>
                <main className='questionsPage_main_container'>
                    <div className='questionsPage_title_container'>
                        <h1>All questions</h1>
                    </div>
                </main>
                <SideBar />
            </div>
        </>
    )
}