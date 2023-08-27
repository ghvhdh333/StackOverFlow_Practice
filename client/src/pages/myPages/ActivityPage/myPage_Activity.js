import './myPage_Activity.css';
import Header_Logging from '../../../components/Header/Header_Logging/Header_Logging';
import Nav from '../../../components/Nav/Nav';
import MyPage_Top_Item from '../../../components/MyPage_Top_Item/MyPage_Top_Item';



export default function MyPage_Activity () {

    return (
        <>
            <Header_Logging />
            <div className='myPage_main_section_division'>
                <Nav />
                <main className='myPage_total_container'>
                    <MyPage_Top_Item />
                    <div>
                        <h2 className='myPage_activity_h2'>Likes</h2>
                        <textarea className='myPage_activity_textarea'/>
                        <h2 className='myPage_activity_h2'>Questions</h2>
                        <textarea className='myPage_activity_textarea'/>
                    </div>
                </main>

            </div>
        </>
    )
}