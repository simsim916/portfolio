
import { useState } from 'react';
import './Introduce.css'

const My_box5 = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='introduce'>
            <i onClick={() => setOpen(!open)} className={`fa-solid fa-caret-${open ? 'up' : 'down'}`}></i>
            <h4 onClick={() => setOpen(!open)}>
                <i className="fa-solid fa-message"></i>
                삶의 지혜로 만들어가는 개발
            </h4>
            {open &&
                <div onClick={() => setOpen(!open)} className='introduce_word'>
                    <p>여러 매장을 관리하면서 <b>여러가지 키오스크, 주문관리 프로그램들을 사용해보면서 현장과 거리감 있는 프로그램들을 보며</b> 제가 <span>직접 공부해보고 만들어 보고 싶어서 개발 공부</span>를 시작하게 되었습니다.</p>
                    <p>많은 사회경험을 해오면서 아직 부족한 점도 많고 배울 것이 정말 많지만 저의 생각과 가치관으로 더 나은 세상을 만들어 가고 싶습니다. 제가 프로그래밍을 하면서 가장 큰 매력을 느끼는 점은, <b>컴퓨터라는 공간에 나만의 세상을 만드는 것</b>이라고 생각합니다. </p>
                    <p>제가 경험하고 배워온 지혜로 프로그래밍이라는 작은 공간에서 우리들의 세상을 만들어가고 싶습니다.</p>
                </div>}
        </div>
    );
}

export default My_box5;