import { useState } from "react";

const Project_cookierun = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='project'>
            <div onClick={() => setOpen(!open)} className='title'>
                <h4>쿠키런 게임 팬 홈페이지</h4>
                <hr />
                <i className={`fa-solid fa-caret-${open ? 'up' : 'down'}`}></i>
            </div>
            {open &&
                <div className="project_content">
                    <h5>홈페이지 링크</h5>
                    <p><a href='https://simsim916.github.io/coinJung_CookieRun/' target="_blank">https://simsim916.github.io/coinJung_CookieRun/</a></p>
                    {/* <h5>제작과정 (notion)</h5>
                    <p><a href='https://simsim916.notion.site/825da1d0f3d34b3e91a4d539a92d9720?pvs=4'>노션에서 자세히 보기</a></p> */}
                    <h5>제작기획</h5>
                    <p>쿠키런 게임 홈페이지 만들어보기</p>
                    <h5>제작목표</h5>
                    <p>공식 커뮤니티 홈페이지가 없는 <span>쿠키런의 공식 홈페이지 컨셉</span>으로 디자인해보기</p>
                    <p><span>쿠키런이라는 좋은 IP</span>를 살려서 홈페이지 만들어보기</p>
                    <p>개발을 공부한 <b>1개월동안 배운 것을 최대한 활용</b>해보기</p>
                    <p>React를 배우기전 최대한 <span>SPA(Single Page Application)구현</span> 해보기</p>
                    <h5>제작기간 / 인원</h5>
                    <p>23.11.13 ~ 23.11.23 (약 2주)</p>
                    <p>프론트 6인 (본인 포함)</p>
                    <h5>핵심 기능</h5>
                    <p>JS를 최대한 활용하여 SPA구현</p>
                    <h5>프로젝트 기여</h5>
                    <p>프로젝트 팀장</p>
                    <p>프로젝트 기획 설계</p>
                    <p>Firebase 배포</p>
                </div>}
        </div>
    );
}

export default Project_cookierun;