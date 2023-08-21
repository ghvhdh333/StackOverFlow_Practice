import './logInPage.css';
import Header from "../../components/Header/Header";
import LogIn from '../../components/Login/Login';

export default function LogInPage () {
  return (
    <>
      <Header />
      <main className='logInPage_main_total'>
        <form className='logInPage_Log_in_form'>
          <LogIn />
        </form>
      </main>
    </>
  );
}