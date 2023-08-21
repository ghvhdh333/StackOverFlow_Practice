import './questionsPage.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';


export default function QuestionsPage () {
    return (
        <>
            <Header />
            <Nav />
            <main className='main_container'>
                <h1>All Questions</h1>
            </main>
        </>
    )
}