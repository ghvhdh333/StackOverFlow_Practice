import './usersPage.css';

import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';

export default function UsersPage () {
    return (
        <>
            <Header />
            <div className='usersPage_main_section_division'>
                <Nav/>
                <main className='usersPage_main_container'>
                    <div className='usersPage_title_container'>
                        <h1>Users</h1>
                    </div>
                </main>
            </div>
        </>
    )
}