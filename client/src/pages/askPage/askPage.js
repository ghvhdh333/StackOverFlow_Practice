import './askPage.css';

import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';

export default function AskPage () {
    return (
        <>
            <Header />
            <div className='askPage_main_section_division'>
                <main className='askPage_main_container'>
                    <div className='askPage_title_container'>
                        <h1>Ask a public question</h1>
                    </div>
                </main>
                <SideBar />
            </div>
        </>
    )
}