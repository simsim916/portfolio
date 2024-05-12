import { useState } from "react";


const Study_kdt = () => {
    const [open, setOpen] = useState(true);
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)

    return (
        <div className="Career_news">
            <div onClick={() => setOpen(!open)} className='career_title'>
                <h4>2023. 10 ~ 2024. 05</h4>
                <p>KDT 풀스택 자바 개발자 정규과정</p>
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
                                KDT 풀스텍 자바 개발자 과정 (성남그린컴퓨터아카데미)
                            </h4>
                        </div>
                        {open1 &&
                            <div className="career_contents">
                                <p>7개월간 성남그린컴퓨터아카데미에서 <b>자바 기반의 스프링, 리액트, MySQL을 활용하여 풀스택 웹개발</b>하는 방법을 배웠습니다.</p>
                                <p>단순히 사용하는 방법을 배우는 것이 아니라 관련된 <span>이론, 논리 등을 배움</span>으로써 지금은 <b>혼자서도 찾아서 하기도하고 혼자서 연구</b>해볼 수 있게 되었습니다.</p>
                            </div>
                        }
                    </div>
                    <div onClick={() => setOpen2(!open2)} className="career_detail">
                        <div className="career_detail_title">
                            <i className={`fa-solid fa-caret-${open2 ? 'up' : 'down'}`}></i>
                            <h4 >
                                <i className="fa-solid fa-message"></i>
                                Legacy 부터 현재의 코드까지…
                            </h4>
                        </div>
                        {open2 &&
                            <div className="career_contents">
                                <p>짧은 시간이지만 저는 학원에서 <b>배우는 프로그래밍 기술을 토마토팜 프로젝트에 즉시 적용</b>하고 활용해 보면서 기술을 습득하고 <span>프로젝트를 계속 발전</span>시켜왔습니다.</p>
                                <p>배우는 기술들이 어떠한 점에서 장점이 있고 이러한 단점을 이 기술은 <span>어떻게 개선하고 어떻게 활용할 수 있는지를 배우는 것에 집중</span>했습니다. </p>
                                <p>그래서 현재의 토마토팜 프로젝트도 처음부터 기술스택이 완성된 상태가 아니라, {`HTML -> JSP -> 리액트`} / Servlet, Spring MVC, Mybatis, Spring Boot, JPA 의 <b>과정을 거쳐서 발전하고 개발</b>되어왔습니다. </p>
                                    <p>이러한 자세로 <span>Legacy 부터 차세대 기술까지 폭넓은 이해</span>를 가지기 위해 노력하고 있습니다.</p>
                            </div>
                        }
                    </div>
                </div>
            }
        </div >
    );
}

export default Study_kdt;