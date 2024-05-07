
import { useState } from 'react';
import './Introduce.css'

const Introduce_challenge = () => {
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
                    <p>저는 삶의 터전 이였던 안양을 떠나 강원도 원주에서 <span>라온이라는 스타트업 회사에서 새로운 도전</span>을 시작하였습니다.</p>
                    <p>새로운 지역에서의 회사생활 뿐만 아니라 이제 막 시작하는 <span>스타트업 회사의 창업 멤버로서 저에게는 하루하루가 ‘도전’ </span>이였습니다.</p>
                    <p>
                        스타트업 회사였던 라온에서 스타팅맴버 였던 저는 매장을 관리하는 슈퍼바이저로서
                        매장 2개로 시작해서 <b>3년만에 연매출 30억</b>을 달성하고 6개의 직영매장,
                        4개의 가맹점을 운영, 관리 하였습니다.
                    </p>
                    <p>
                        7년간 매일매일 도전하면서 경험한 수많은 성공과 실패가 저에게는 커다란 <span>‘발전’ </span>이였습니다.
                    </p>
                    <p>
                        앞으로도 저는 발전을 멈추지 않기 위해서 <span>끊임없이 도전</span>하겠습니다.
                    </p>
                </div>}
        </div>
    );
}

export default Introduce_challenge;