import { useState } from "react";


const Career_news = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    return (
        <div className="Career_news">
            <div onClick={() => setOpen(!open)} className='career_title'>
                <h4>2016. 03 ~ 2016. 11</h4>
                <p>경기남부신문</p>
                <hr />
                <i className={`fa-solid fa-caret-${open ? 'up' : 'down'}`}></i>
            </div>
            {
                open &&
                <div className='career_content'>
                    <div className="career_detail">
                        <div className="career_detail_title">
                            <i onClick={() => setOpen1(!open1)} className={`fa-solid fa-caret-${open1 ? 'up' : 'down'}`}></i>
                            <h4 onClick={() => setOpen1(!open1)}>
                                <i className="fa-solid fa-message"></i>
                                취재/편집기자
                            </h4>
                        </div>
                        {open1 &&
                            <div className="career_contents">
                                <p>처음에 <b>취재기자</b>로 입사하여 주로 국회의원 선거기간에 현장취재와 인터뷰, 여론조사를 분석해서 기사를 작성하였습니다.</p>
                                <p>이후, <span>Photoshop 과 indesign 을 능숙하게 사용하여서 편집을 주로 담당</span>하게 되었고 직접 신문을 디자인하고, 인쇄소로 출력을 맡기는 등의 업무를 하였습니다.</p>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default Career_news;