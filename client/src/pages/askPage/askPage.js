import './askPage.css';

import Header_Logging from '../../components/Header/Header_logging/Header_logging';
import Header_Not_LogIn from '../../components/Header/Header_not_login/Header_not_login';
import SideBar from '../../components/SideBar/SideBar';

export default function AskPage () {
    return (
        <>
            {/* <Header_Logging /> */}
            <Header_Not_LogIn />
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