import { useState } from "react";


const Career_laon = () => {
    const [open, setOpen] = useState(false);
    return (
        <div onClick={() => setOpen(!open)} className="Career_news">
            <div className='career_title'>
                <h4>2017. 06 ~ 2023. 03</h4>
                <p>라온자리</p>
                <hr />
                <i className={`fa-solid fa-caret-${open ? 'up' : 'down'}`}></i>
            </div>
            {open &&
                <div className='career_content'>
                    <p>
                        슈퍼바이저
                    </p>
                    <div className="career_detail">
                        <p>삶에서 새로운 도전을 하고 싶어서 고향인 경기도 안양을 떠나서 강원도 원주에서 </p>
                        <p>이후, <span>Photoshop 과 indesign 을 능숙하게 사용하여서 편집을 주로 담당</span>하게 되었고 직접 신문을 디자인하고, 인쇄소로 출력을 맡기는 등의 업무를 하였습니다.</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Career_laon;