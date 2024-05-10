
import './Intro.css'
import Introduce from './Introduce';
import Introduce_future from './Introduce_future';
import Introduce_challenge from './Introduce_challenge';
import Introduce_skill from './Introduce_skill';

const Intro = () => {
    return (
        <div id='Intro'>
            <div id='title'>
                <h3>
                    <i className="fa-solid fa-circle-info"></i>
                    자기소개
                </h3>
            </div>
            <div id='introduce'>
                <img src="/mypic.jpg" alt="" />
                <div id='introduce_title'>
                    <h4>오늘이 가장 저렴한 개발자</h4>
                    <span>
                        <span>Java 백앤드개발자<br /></span>
                        <b>최문석</b> 입니다.</span>
                </div>
            </div>
            <div id='introduceBox'>
                <Introduce_skill />
                <Introduce />
                <Introduce_future />
                <Introduce_challenge />
            </div>
        </div>
    );
}

export default Intro;