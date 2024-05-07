
import { useState } from 'react';
import './Introduce.css'

const Introduce_future = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='introduce'>
            <i onClick={() => setOpen(!open)} className={`fa-solid fa-caret-${open ? 'up' : 'down'}`}></i>
            <h4 onClick={() => setOpen(!open)}>
                <i className="fa-solid fa-message"></i>
                동료들을 이끌어줄 수 있는 개발자
            </h4>
            {open &&
                <div onClick={() => setOpen(!open)} className='introduce_word'>
                    <p>학원에서 프로젝트를 진행할 때, <span>제가 이해하고 설계한 것과 팀원들이 이해한 것의 격차를 줄이는 것</span>이 가장 어렵고 힘들었습니다.</p>
                    <p>그래서 저는 <b>매일 아침 팀원들과 회의하며 각자 오늘의 목표를 선정하고 역할을 배분하여 개발</b>하고, 
                        <b>저녁에는 자신들이 작성한 코드를 리뷰하고 모르는 점에 토의하는 시간</b>을 가지며,
                        팀원들은 저의 생각을 이해하고 저에게는 팀원들에게 이론을 설명하며 <span>함께 개발하는 환경</span>을 만들 수 있었습니다.</p>
                    <p>
                        저도 개발을 하면서 어려울때 블로그나 유튜브를 보며 좋은 정보를 제공해 주시는 선배 개발자분들을 보며 
                        저도 언젠가는 그러한 선배개발자 분들께 가까워지고 싶습니다.
                    </p>
                    <p>
                        이러한 협업 프로젝트이 경험을 바탕으로 저도 회사에서는 <span>선배, 동료들과 함께 생각을 공유하며 팀원들을 이끌어 줄 수 있는 개발자</span>가 되고 싶습니다.
                    </p>
                </div>}
        </div>
    );
}

export default Introduce_future;