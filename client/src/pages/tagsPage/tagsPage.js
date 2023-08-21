import './tagsPage.css';

import Header_Logging from '../../components/Header/Header_logging/Header_logging';
import Header_Not_LogIn from '../../components/Header/Header_not_login/Header_not_login';
import Nav from '../../components/Nav/Nav';

export default function TagsPage () {
    return (
        <>
            {/* <Header_Logging /> */}
            <Header_Not_LogIn />
            <div className='tagsPage_main_section_division'>
                <Nav/>
                <main className='tagsPage_main_container'>
                    <div className='tagsPage_title_container'>
                        <h1>Tags</h1>
                    </div>
                </main>
            </div>
        </>
    )
}