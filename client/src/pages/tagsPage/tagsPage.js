import './tagsPage.css';

import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';

export default function TagsPage () {
    return (
        <>
            <Header />
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