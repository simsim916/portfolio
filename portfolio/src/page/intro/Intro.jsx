
import './Intro.css'
import Introduce from './Introduce';
import Introduce_future from './Introduce_future';
import Introduce_challenge from './Introduce_challenge';
import Introduce_skill from './Introduce_skill';

const Intro = () => {
    return (
        <div id='Intro'>
            <div id='title' >
                <h3>
                    <i className="fa-solid fa-circle-info"></i>
                    자기소개
                </h3>
            </div>
                <Introduce />
            <div id='introduceBox'>
                <Introduce_skill />
                <Introduce_future />
                <Introduce_challenge />
            </div>
        </div>
    );
}

export default Intro;