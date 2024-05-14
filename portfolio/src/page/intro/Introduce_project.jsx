import { useDispatch } from 'react-redux';
import { setMenu } from '../../Redux/menu/menu_action';
import { Link } from 'react-router-dom';

const Introduce_project = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h4>
                <i className="fa-solid fa-list-check"></i>
                프로젝트
                <Link to="/project" onClick={() => dispatch(setMenu("프로젝트"))} ><i className="fa-solid fa-angles-right"></i> 더 보러가기</Link>
            </h4>
            <div id='projectList'>
                <Link to='http://www.tomatofarm.shop' target="_blank">
                    🍅 토마토팜
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </Link>
                <Link to='https://simsim916.github.io/coinJung_CookieRun/' target="_blank">
                    🍪 쿠키런 팬 홈페이지
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </Link>
            </div>

        </div>
    );
}

export default Introduce_project;