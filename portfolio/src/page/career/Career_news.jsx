import { useState } from "react";


const Career_news = () => {
    const [open, setOpen] = useState(true);
    return (
        <div onClick={() => setOpen(!open)} className="Career_news">
            <div className='career_title'>
                <h4>2016. 03 ~ 2017. 01</h4>
                <p>경기남부신문</p>
                <hr />
                <i className={`fa-solid fa-caret-${open ? 'up' : 'down'}`}></i>
            </div>
            {open &&
                <div className='career_content'>
                    <p>
                        편집기자
                    </p>
                    <div className="career_detail">
                        <p>처음에 취재기자로 입사하여 주로 국회의원 선거기간에 현장취재와 인터뷰, 여론조사를 분석해서 기사를 작성하였습니다.</p>
                        <p>이후, Photoshop 과 indesign 을 능숙하게 사용하여서 편집을 주로 담당하게 되었고 직접 신문을 디자인하고, 인쇄소로 출력을 맡기는 등의 업무를 하였습니다.</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Career_news;