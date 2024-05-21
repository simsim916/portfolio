
import { useState } from 'react';
import './Introduce.css'

const My_box2 = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='introduce'>
            <i onClick={() => setOpen(!open)} className={`fa-solid fa-caret-${open ? 'up' : 'down'}`}></i>
            <h4 onClick={() => setOpen(!open)}>
                <i className="fa-solid fa-message"></i>
                새로운 것에 도전하고 적응해 나아가는 개발자
            </h4>
            {open &&
                <div onClick={() => setOpen(!open)} className='introduce_word'>
                    <p>저는 사회생활을 시작하기 이전에, 학생들을 통솔하여 생태공원에서 <b>환경교육과 정화활동</b>, 사회복지관에서 이용자들과 함께 <b>사회활동</b>하기 등… 다양한 <span>봉사활동</span>을 했습니다. </p>
                    <p>이러한 현장에서의 경험에 즐거움을 느낀 저는 삶의 터전 이였던 안양을 떠나 <span>강원도 원주에서 스타트업 회사에서 새로운 도전을 시작</span>하였습니다.</p>
                    <p>새로운 지역에서의 회사생활 뿐만 아니라 이제 막 시작하는 <span>스타트업 회사의 창업 멤버로서 저에게는 하루하루가 ‘도전’</span> 이였습니다.</p>
                    <p>개발을 공부하면서도 안주하지 않고 <b>끊임없이 도전하고 스스로를 개발하여 발전하는 개발자</b>가 되겠습니다.</p>
                </div>}
        </div>
    );
}

export default My_box2;