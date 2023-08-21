import './companiesPage.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';

export default function CompaniesPage () {
    return (
        <>
            <Header />
            <Nav />
            <main className='main_container'>
                <h1>Companies</h1>
            </main>
        </>
    )
}