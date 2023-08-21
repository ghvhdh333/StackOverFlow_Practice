import './homePage.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';

export default function HomePage () {
    return (
        <>
            <Header />
            <Nav />
            <main className='main_container'>
                <h1>Top Questions</h1>
            </main>
        </>
    )
}