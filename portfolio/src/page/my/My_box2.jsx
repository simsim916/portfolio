
import { useState } from 'react';
import './Introduce.css'

const My_box2 = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className='introduce'>
            <i onClick={() => setOpen(!open)} className={`fa-solid fa-caret-${open ? 'up' : 'down'}`}></i>
            <h4 onClick={() => setOpen(!open)}>
                <i className="fa-solid fa-message"></i>
                오늘이 가장 저렴한 개발자
            </h4>
            {open &&
                <div onClick={() => setOpen(!open)} className='introduce_word'>
                    <p>우스워 보일 수 있는 이 말은 제가 개발을 공부하면서 <span>어제보다 오늘, 오늘보다 내일 더 발전하고 전진</span>하고 싶은 제 마음을 담고 있는 저의 개발 모토입니다. </p>
                    <p>하나라도 더 발전시키고, 어떻게 하면 더 좋은 방법일지 고민하고, 서로의 생각을 공유하고 토의하는 것이 진정한 의미의 개발이라고 생각합니다.</p>
                    <p>저도 <span>꾸준히 발전</span>하여 저의 가치를 올려서 <span>내일은 더 비싼 백앤드 개발자</span>가 되겠습니다.</p>
                </div>}
        </div>
    );
}

export default My_box2;