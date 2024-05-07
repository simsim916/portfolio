import './LeftBar.css'

const LeftBar = ({ menu, setMenu }) => {
    return (
        <div id='leftBar'>
            <i className="fa-solid fa-arrow-left minimize"></i>
            <div id='mypic'><img src='/아라찌.gif'></img></div>
            <h2>오늘이 가장 저렴한 개발자</h2>
            <p><span>최문석</span>'s 포트폴리오</p>
            <ul>
                <li className={['기술스택', '프로젝트', '경력'].includes(menu) ? null : 'check'}>
                    <span style={{ color: ['기술스택', '프로젝트', '경력'].includes(menu) ? '#fff' : '#F6C026' }} onClick={() => setMenu('자기소개')}>자기소개</span>
                    <ul>
                        <li><span style={{ color: menu == '자기소개' ? '#F6C026' : '#fff' }} onClick={() => setMenu('자기소개')}>자기소개</span></li>
                        <li><span style={{ color: menu == '직장생활' ? '#F6C026' : '#fff' }} onClick={() => setMenu('직장생활')}>직장생활</span></li>
                        <li><span style={{ color: menu == '관련교육이수' ? '#F6C026' : '#fff' }} onClick={() => setMenu('관련교육이수')}>관련교육이수</span></li>
                        <li><span style={{ color: menu == '성장과정' ? '#F6C026' : '#fff' }} onClick={() => setMenu('성장과정')}>성장과정</span></li>
                        <li><span style={{ color: menu == '성격' ? '#F6C026' : '#fff' }} onClick={() => setMenu('성격')}>성격</span></li>
                    </ul>
                </li>
                <li><span style={{ color: menu == '기술스택' ? '#F6C026' : '#fff' }} onClick={() => setMenu('기술스택')}>기술스택</span></li>
                <li><span style={{ color: menu == '프로젝트' ? '#F6C026' : '#fff' }} onClick={() => setMenu('프로젝트')}>프로젝트</span></li>
                <li><span style={{ color: menu == '경력' ? '#F6C026' : '#fff' }} onClick={() => setMenu('경력')}>경력</span></li>
            </ul>
            <ul id='contactUS'>
                <li><a href=""><i className="fa-solid fa-envelope"></i>simsim916@naver.com</a></li>
                <li><a href=""><i className="fa-brands fa-github"></i>https://github.com/simsim916</a></li>
                <li><a href=""><i className="fa-solid fa-phone"></i>010-7432-5585</a></li>
            </ul>
        </div>
    );
}

export default LeftBar;