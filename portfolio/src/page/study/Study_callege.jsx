import { useState } from "react";


const Study_callege = () => {
    const [open, setOpen] = useState(true);
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)

    return (
        <div className="Career_news">
            <div onClick={() => setOpen(!open)} className='career_title'>
                <h4>2024. 3 ~ </h4>
                <p>방송통신대학교 - 컴퓨터과학과</p>
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
                                <i className="fa-solid fa-school"></i>
                                컴퓨터과학과
                            </h4>
                        </div>
                        {open1 &&
                            <div className="career_contents">
                                <p>프로그래밍을 배우면서 좀 더 <b>전문적이고 기본기에 기반된 교육을 듣고 싶어서 대학교에 진학</b>하게 되었습니다.</p>
                                <p>프로그래밍을 공부하면서 <span>코딩의 기술도 중요하지만, 컴퓨터, 네트워크 등에 대한 폭넓은 이해</span>가 있어야 진정한 프로그래밍을 할 수 있다고 생각하고 계속 <b>학습에 열중하여 훌륭한 개발자가 될 수 있도록 계속 발전</b>하겠습니다.</p>
                            </div>
                        }
                    </div>
                    <div onClick={() => setOpen2(!open2)} className="career_detail">
                        <div className="career_detail_title">
                            <i className={`fa-solid fa-caret-${open2 ? 'up' : 'down'}`}></i>
                            <h4 >
                                <i className="fa-solid fa-message"></i>
                                대학교를 포기 했었지만, 다시 도전하게 된 계기
                            </h4>
                        </div>
                        {open2 &&
                            <div className="career_contents">
                                <p>제가 대학교에 진학을 포기하고 <b>사회생활을 하면서 학업을 통해서 배우는 지식이 아닌, 삶의 경험과 교훈에서 배우는 지혜</b>를 배워왔습니다.</p>
                                <p>그리고 7년간 타지에서 사업이라는 것에 몰두하여 아직 부족하고 배울 것이 많지만, 저의 지혜를 발전해왔습니다.</p>
                                <p>이를 바탕으로 <b>프로그래밍을 공부할 때, 누구보다 진심으로 학습에 전념</b>할 수 있었습니다.</p>
                                <p>하지만 <span>프로그래밍을 공부하면서 진심으로 흥미를 느끼기도하고 삶의 지혜와 전문 지식을 같이 활용</span> 할 수 있다면 더 훌륭한 개발자가 될 수 있겠다라고 생각하고 다시 학업에 도전하게 되었습니다.</p>
                            </div>
                        }
                    </div>
                </div>
            }
        </div >
    );
}

export default Study_callege;