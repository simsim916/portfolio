
import './Intro.css'
import Introduce from './Introduce';
import Introduce_future from './Introduce_future';
import Introduce_challenge from './Introduce_challenge';
import Introduce_skill from './Introduce_skill';
import Introduce_project from './Introduce_project';
import { Link } from 'react-router-dom';
import { setMenu } from '../../Redux/menu/menu_action';
import { useDispatch } from 'react-redux';

const Intro = () => {
    const dispatch = useDispatch();

    return (
        <div id='Intro'>


            <div id='title' >
                <h4>
                    <i className="fa-solid fa-circle-info"></i>
                    자기소개
                    <Link to="/my" onClick={() => dispatch(setMenu("전체보기"))} ><i className="fa-solid fa-angles-right"></i> 더 보러가기</Link>
                </h4>
            </div>
                <Introduce />
            <div id='introduceBox'>
                <Introduce_skill />
                <Introduce_project />
                {/* <Introduce_future /> */}
                {/* <Introduce_challenge /> */}
            </div>
        </div>
    );
}

export default Intro;