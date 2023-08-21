import './logOutPage.css';

import Header_Logging from '../../components/Header/Header_logging/Header_logging';
import LogIn from '../../components/Login/Login';

export default function LogOutPage () {
  return (
    <>
      <Header_Logging />
      <main className='logInPage_main_total'>
        <form className='logInPage_Log_in_form'>
          <LogIn />
          logout
        </form>
      </main>
    </>
  );
}