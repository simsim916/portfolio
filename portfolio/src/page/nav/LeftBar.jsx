import { useDispatch, useSelector } from 'react-redux';
import './LeftBar.css'
import { setMenu } from '../../Redux/menu/menu_action';
import { Link } from 'react-router-dom';

const LeftBar = ({ navOpen, setNavOpen }) => {
    const dispatch = useDispatch();
    const menu = useSelector(state => state.basic.menu)

    const changeMenu = (arg) => {
        dispatch(setMenu(arg));
    }

    return (
        <div id='leftBar' className={navOpen ? null : 'close'}>
            <div id='update'>
                last update 24.06.18
            </div>
            <i onClick={() => setNavOpen(!navOpen)} className={`fa-solid fa-arrow-${navOpen ? 'left' : 'right'} minimize`}></i>
            {
                navOpen ?
                    <>
                        <div id='mypic'><img src='/mypic.jpg'></img></div>
                        <h2>오늘이 가장 저렴한</h2>
                        <h3>백앤드 개발자</h3>
                        <p><span>최문석</span>'s 포트폴리오</p>
                        <ul>
                            <li className={['기술스택', '프로젝트', '경력'].includes(menu) ? null : 'check'}>
                                <Link to="/" style={{ color: ['기술스택', '프로젝트', '경력'].includes(menu) ? '#fff' : '#F6C026' }} onClick={() => changeMenu('전체보기')}>자기소개</Link>
                                <ul>
                                    <li><Link to="/" style={{ color: menu == '전체보기' ? '#F6C026' : '#fff' }} onClick={() => changeMenu('전체보기')}>전체보기</Link></li>
                                    <li><Link to="/my" style={{ color: menu == '자기소개' ? '#F6C026' : '#fff' }} onClick={() => changeMenu('자기소개')}>자기소개</Link></li>
                                    <li><Link to="/career" style={{ color: menu == '걸어온길' ? '#F6C026' : '#fff' }} onClick={() => changeMenu('걸어온길')}>걸어온 길...</Link></li>
                                    <li><Link to="/study" style={{ color: menu == '관련교육이수' ? '#F6C026' : '#fff' }} onClick={() => changeMenu('관련교육이수')}>관련교육이수</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/skill" style={{ color: menu == '기술스택' ? '#F6C026' : '#fff' }} onClick={() => changeMenu('기술스택')}>기술스택</Link></li>
                            <li><Link to="/project" style={{ color: menu == '프로젝트' ? '#F6C026' : '#fff' }} onClick={() => changeMenu('프로젝트')}>프로젝트</Link></li>
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
                            <div id='picClosed'><img src='/mypic.jpg'></img></div>
                        </div>
                    </>
            }
        </div>
    );
}

export default LeftBar;