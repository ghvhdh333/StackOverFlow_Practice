import './myPage_Settings.css';
import Header_Logging from '../../../components/Header/Header_Logging/Header_Logging';
import Nav from '../../../components/Nav/Nav';
import MyPage_Top_Item from '../../../components/MyPage_Top_Item/MyPage_Top_Item';



export default function MyPage_Settings () {

    return (
        <>
            <Header_Logging />
            <div className='myPage_main_section_division'>
                <Nav />
                <main className='myPage_total_container'>
                    <MyPage_Top_Item />
                    <section>
                        <h2 className='myPage_settings_h2_edit'>Edit your profile</h2>
                        <h2 className='myPage_settings_h2_infomation'>Public infomation</h2>
                        <section className='myPage_settings_gray_box'>
                            <h3 className='myPage_settings_h3_profile_image'>Profile image</h3>
                            <div className='myPage_settings_change_picture_total'>
                                <div className='myPage_settings_change_picture_input'></div>
                                <div className='myPage_settings_change_picture_btn'>change picture</div>
                            </div>
                            <h3 className='myPage_settings_h3_other'>Display name</h3>
                            <textarea className='myPage_settings_textarea'/>
                            <h3 className='myPage_settings_h3_other'>Location</h3>
                            <textarea className='myPage_settings_textarea'/>
                            <h3 className='myPage_settings_h3_other'>Title</h3>
                            <textarea className='myPage_settings_textarea'/>
                            <h3 className='myPage_settings_h3_other'>About me</h3>
                            <textarea className='myPage_settings_textarea_about_me'/>
                        </section>
                        <div className='myPage_settings_bottom_btns_container'>
                            <button className='myPage_settings_bottom_btn'>Save profile</button>
                            <button className='myPage_settings_bottom_btn'>Cancel</button>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}