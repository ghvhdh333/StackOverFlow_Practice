import './myPage_Saves.css';
import Header_Logging from '../../../components/Header/Header_Logging/Header_Logging';
import Nav from '../../../components/Nav/Nav';
import MyPage_Top_Item from '../../../components/MyPage_Top_Item/MyPage_Top_Item';



export default function MyPage_Saves () {

    return (
        <>
            <Header_Logging />
            <div className='myPage_main_section_division'>
                <Nav />
                <main className='myPage_total_container'>
                    <MyPage_Top_Item />
                    <div>
                        Saves Page
                    </div>
                </main>
            </div>
        </>
    )
}