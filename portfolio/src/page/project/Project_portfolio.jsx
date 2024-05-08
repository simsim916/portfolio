import { useState } from "react";

const Project_portfolio = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='project'>
            <div onClick={() => setOpen(!open)} className='title'>
                <h4>My 포트폴리오</h4>
                <hr />
                <i className={`fa-solid fa-caret-${open ? 'up' : 'down'}`}></i>
            </div>
            {open &&
                <div className="project_content">
                    <h5>홈페이지 링크</h5>
                    <p><a href='https://simsim916.github.io/' target="_blank">https://simsim916.github.io/</a></p>
                    <h5>제작기획</h5>
                    <p>나를 소개하는 이력, 포트폴리오 페이지</p>
                    <h5>제작기간 / 인원</h5>
                    <p>24.05.06 ~ 24.05.10 (약 1주)</p>
                    <p>풀스택 1인</p>
                    <h5>핵심 기능</h5>
                    <p>React를 활용한 간단한 페이지 제작</p>
                    <h5>제작목표</h5>
                    <p>노션, 노코드, 로우코드 기능을 활용하여 제작할까 했지만... 리액트로 만드는게 더 빠를거 같아서 간단한 페이지 제작</p>
                </div>}
        </div>
    );
}

export default Project_portfolio;