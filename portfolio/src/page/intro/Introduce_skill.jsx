
import { setMenu } from '../../Redux/menu/menu_action';
import './Introduce.css'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Introduce_skill = () => {
    const dispatch = useDispatch();

    return (
        <div className='skill'>
            <h4>
                <i className="fa-solid fa-book"></i>
                사용가능기술
                <Link to="/skill" onClick={() => dispatch(setMenu("기술스택"))} ><i className="fa-solid fa-angles-right"></i> 더 보러가기</Link>
            </h4>
            <div>
                <span>Spring Boot</span>
                <span>AWS</span>
                <span>MySQL</span>
                <span>JPA</span>
                <span>MyBatis</span>
                <span>QueryDSL</span>
                <span>React</span>
                <span>Redux</span>
            </div>
            <h4>
                <i className="fa-solid fa-graduation-cap"></i>
                관련교육
                <Link to="/study" onClick={() => dispatch(setMenu("관련교육이수"))} ><i className="fa-solid fa-angles-right"></i> 더 보러가기</Link>
            </h4>
            <ul id='intro_study'>
                <li>방송통신대학교 컴퓨터과학과 <span>재학</span></li>
                <li>KDT 풀스텍 자바 개발자 과정 <span>수료</span></li>
                <li>인프런
                    <ul>
                        <li>- 비전공자도 이해할 수 있는 AWS 입문/실전 <span>수료</span></li>
                        <li>- 개발자를 위한 쉬운 도커 <span>학습중</span></li>
                        <li>- Jenkins를 이용한 CI/CD Pipeline 구축 <span>학습중</span></li>
                    </ul>
                </li>
            </ul>
            <h4>
                <i className="fa-solid fa-id-card"></i>
                자격증
                <Link to="/study" onClick={() => dispatch(setMenu("관련교육이수"))} ><i className="fa-solid fa-angles-right"></i> 더 보러가기</Link>
            </h4>
            <div>
                <span>SQL 개발자(SQLD)</span>
            </div>
        </div>
    );
}

export default Introduce_skill;