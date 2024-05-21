
import { useState } from 'react';
import './Introduce.css'

const My_box4 = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='introduce'>
            <i onClick={() => setOpen(!open)} className={`fa-solid fa-caret-${open ? 'up' : 'down'}`}></i>
            <h4 onClick={() => setOpen(!open)}>
                <i className="fa-solid fa-message"></i>
                사람들과 함께 더 나은 세상을 만들어가는 개발자
            </h4>
            {open &&
                <div onClick={() => setOpen(!open)} className='introduce_word'>
                    <p>학원에서 프로젝트를 진행할 때, <b>제가 이해하고 설계한 것과 팀원들이 이해한 것의 격차를 줄이는 것</b>이 가장 어렵고 힘들었습니다.</p>
                    <p>그래서 저는 매일 아침 <span>팀원들과 회의</span>하며 각자 <b>오늘의 목표를 선정하고 역할을 배분하여 개발</b>하고, 저녁에는 <b>자신들이 작성한 코드를 리뷰하고 모르는 점에 토의</b>하는 시간을 가지며, <span>팀원들은 저의 생각을 이해하고 저에게는 팀원들에게 이론을 설명하며 함께 개발</span>하는 환경을 만들 수 있었습니다.</p>
                    <p>저도 개발을 하면서 어려울 때 블로그나 유튜브를 보며 좋은 정보를 제공해 주시는 선배 개발자분들께 감사드리며 저도 언젠가는 선배개발자 분들께 가까워지고 싶습니다.</p>
                    <p>이러한 협업 프로젝트이 경험을 바탕으로 저도 회사에서는 선배, 동료들과 <span>함께 생각을 공유하며 팀원들을 이끌어 줄 수 있는 개발자</span>가 되고 싶습니다.</p>
                </div>}
        </div>
    );
}

export default My_box4;