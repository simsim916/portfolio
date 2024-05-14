
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