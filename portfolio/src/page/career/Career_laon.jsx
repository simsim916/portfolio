import { useState } from "react";


const Career_laon = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false)

    return (
        <div className="Career_news">
            <div onClick={() => setOpen(!open)} className='career_title'>
                <h4>2017. 06 ~ 2023. 03</h4>
                <p>라온자리</p>
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
                                새로운 지역에서의 새로운 도전
                            </h4>
                        </div>
                        {open1 &&
                            <div className="career_contents">
                                <p>삶에서 새로운 도전을 하고 싶어서 <b>고향인 경기도 안양을 떠나서 강원도 원주에서 이제 막 삽을 뜬 라온이라는 스타트업 회사에서 약 7년간 근무</b> 하였습니다.</p>
                                <p>새로운 지역에서의 회사생활 뿐만 아니라 이제 막 시작하는 <span>스타트업 회사의 창업 멤버로서 저에게는 하루하루가 ‘도전’ </span>이였습니다.</p>
                                <p>하지만, 7년간 매일매일 도전하면서 수많은 <span>성공과 실패가 저에게는 커다란 ‘발전’</span> 이였습니다.</p>
                                <p>스타트업 회사였던 라온에서 스타팅맴버 였던 저는,  <b>매장 2개로 시작해서 3년만에 연매출 30억을 달성</b>하고 6개의 직영매장, 4개의 가맹점을 운영, 관리 하였습니다.</p>
                            </div>
                        }
                    </div>
                </div>
            }
        </div >
    );
}

export default Career_laon;