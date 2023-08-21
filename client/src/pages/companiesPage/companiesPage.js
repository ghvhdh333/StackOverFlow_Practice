import './companiesPage.css';

import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';

export default function CompaniesPage () {
    return (
        <>
            <Header />
            <div className='companiesPage_main_section_division'>
                <Nav/>
                <main className='companiesPage_main_container'>
                    <div className='companiesPage_title_container'>
                        <h1>Companies</h1>
                    </div>
                </main>
            </div>
        </>
    )
}