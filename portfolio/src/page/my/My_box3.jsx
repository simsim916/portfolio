
import { useState } from 'react';
import './Introduce.css'

const My_box3 = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='introduce'>
            <i onClick={() => setOpen(!open)} className={`fa-solid fa-caret-${open ? 'up' : 'down'}`}></i>
            <h4 onClick={() => setOpen(!open)}>
                <i className="fa-solid fa-message"></i>
                에러를 찾고 에러를 해결해주는 에러아저씨
            </h4>
            {open &&
                <div onClick={() => setOpen(!open)} className='introduce_word'>
                    <p>학원 동료들의 <b>에러코드를 잘 찾고 해결</b>하다 보니 동료들이 저를 <span>에러아저씨</span>라고 불렀습니다.</p>
                    <p>어떠한 일의 처리과정의 흐름을 읽고 각 부분을 파트로 나눠서 파트별로 체크하고 어떤 곳에서 흐름이 막히는지 찾아보는 이러한 습관은 제가 <span>7년간 관리자 일을 해오면서 습득한 지혜</span>라고 생각합니다.</p>
                    <p>구축한 시스템을 나누어서 조금씩 실행해보고 수정보완 후에 적용하고 이러한 경험들은 제가 개발을 할 때에 제출, 실행을 누르기전에 항상 확인하고, <b>부분부분 체크하게 되는 꼼꼼함</b>이 되었습니다.</p>
                    <p>그래서 지금 학원에 다니면서는 누군가가 프로그래밍을 하다가 <span>버그나 에러를 찾고 해결해주는 ‘에러아저씨’</span>가 되어서 도움을 주고 있습니다.</p>
                </div>}
        </div>
    );
}

export default My_box3;