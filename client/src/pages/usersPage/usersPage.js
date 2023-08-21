import './usersPage.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';

export default function UsersPage () {
    return (
        <>
            <Header />
            <Nav />
            <main className='main_container'>
                <h1>Users</h1>
            </main>
        </>
    )
}