import { useState } from 'react';
import './LeftBar.css'

const LeftBar = ({ navOpen, setNavOpen, menu, setMenu }) => {

    return (
        <div id='leftBar' className={navOpen ? null : 'close'}>
            <div id='update'>
                last update 24.05.10
            </div>
            <i onClick={() => setNavOpen(!navOpen)} className={`fa-solid fa-arrow-${navOpen ? 'left' : 'right'} minimize`}></i>
            {
                navOpen ?
                    <>
                        <div id='mypic'><img src='/아라찌.gif'></img></div>
                        <h2>오늘이 가장 저렴한 개발자</h2>
                        <p><span>최문석</span>'s 포트폴리오</p>
                        <ul>
                            <li className={['기술스택', '프로젝트', '경력'].includes(menu) ? null : 'check'}>
                                <span style={{ color: ['기술스택', '프로젝트', '경력'].includes(menu) ? '#fff' : '#F6C026' }} onClick={() => setMenu('자기소개')}>자기소개</span>
                                <ul>
                                    <li><span style={{ color: menu == '자기소개' ? '#F6C026' : '#fff' }} onClick={() => setMenu('자기소개')}>자기소개</span></li>
                                    <li><span style={{ color: menu == '걸어온길' ? '#F6C026' : '#fff' }} onClick={() => setMenu('걸어온길')}>걸어온 길...</span></li>
                                    <li><span style={{ color: menu == '관련교육이수' ? '#F6C026' : '#fff' }} onClick={() => setMenu('관련교육이수')}>관련교육이수</span></li>
                                </ul>
                            </li>
                            <li><span style={{ color: menu == '기술스택' ? '#F6C026' : '#fff' }} onClick={() => setMenu('기술스택')}>기술스택</span></li>
                            <li><span style={{ color: menu == '프로젝트' ? '#F6C026' : '#fff' }} onClick={() => setMenu('프로젝트')}>프로젝트</span></li>
                            {/* <li><span style={{ color: menu == '걸어온길' ? '#F6C026' : '#fff' }} onClick={() => setMenu('경력')}>경력</span></li> */}
                        </ul>
                        <ul id='contactUS'>
                            <li><a href="mailto:simsim916@naver.com"><i className="fa-solid fa-envelope"></i>simsim916@naver.com</a></li>
                            <li><a href="https://github.com/simsim916"><i className="fa-brands fa-github"></i>https://github.com/simsim916</a></li>
                            <li><a><i className="fa-solid fa-phone"></i>010-7432-5585</a></li>
                        </ul>
                    </>
                    :
                    <>
                        <div id='navClosed'>
                            <div onClick={() => setNavOpen(!navOpen)}>
                                M<br />
                                E<br />
                                N<br />
                                U
                            </div>
                            <ul id='contactUSClosed'>
                                <li><a href="mailto:simsim916@naver.com"><i className="fa-solid fa-envelope"></i></a></li>
                                <li><a href="https://github.com/simsim916"><i className="fa-brands fa-github"></i></a></li>
                                <li><a><i className="fa-solid fa-phone"></i></a></li>
                            </ul>
                            <img src='/아라찌.gif'></img>
                        </div>
                    </>
            }
        </div>
    );
}

export default LeftBar;