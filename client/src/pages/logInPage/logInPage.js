import './logInPage.css';
import Header_Not_LogIn from '../../components/Header/Header_not_login/Header_not_login';
import LogIn from '../../components/Login/Login';

export default function LogInPage () {
  return (
    <>
      <Header_Not_LogIn />
      <main className='logInPage_main_total'>
        <form className='logInPage_Log_in_form'>
          <LogIn />
        </form>
      </main>
    </>
  );
}