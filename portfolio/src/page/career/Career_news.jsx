import { useState } from "react";


const Career_news = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
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
                    <div onClick={() => setOpen1(!open1)} className="career_detail">
                        <div className="career_detail_title">
                            <i className={`fa-solid fa-caret-${open1 ? 'up' : 'down'}`}></i>
                            <h4>
                                <i className="fa-solid fa-briefcase" style={{ color: '#CA4046' }}></i>
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
                    <div onClick={() => setOpen2(!open2)} className="career_detail">
                        <div className="career_detail_title">
                            <i className={`fa-solid fa-caret-${open1 ? 'up' : 'down'}`}></i>
                            <h4>
                                <i className="fa-solid fa-message"></i>
                                봉사활동, 사회활동에서의 인연...
                            </h4>
                        </div>
                        {open2 &&
                            <div className="career_contents">
                                    <p>제가 대학진학에 실패하고 힘든 시기를 보낼 때, <b>삶의 의미를 찾고 새로운 목표를 만들기 위해 봉사활동</b>에 주로 참여했습니다.</p>
                                <p>주로 학생들을 통솔하여 생태공원에서 환경교육을 하고 정화활동, 사회복지관에서 이용자들과 함께 사회활동하기 등… 다양한 활동을 했습니다.</p>
                                    <p>이때 만났던 <span>소중한 인연으로 저에게 다양한 곳에서 일하고 경험할 수 있는 기회를 주셨고 신문사에서 근무</span>하게 되었습니다.</p>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default Career_news;