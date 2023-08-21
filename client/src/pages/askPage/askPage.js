import './askPage.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';

export default function AskPage () {
    return (
        <>
            <Header />
            <Nav />
            <main className='main_container'>
                <h1>Ask a public question</h1>
            </main>
        </>
    )
}