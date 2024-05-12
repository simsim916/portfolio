import './Study.css'
import Study_callege from './Study_callege';
import Study_kdt from './Study_kdt';

const Study = () => {
    return (
        <div id="Study">
            <div>
                <h3>
                    <i className="fa-solid fa-graduation-cap"></i>
                    관련 교육 이수
                </h3>
            </div>
            <div id='Study_content'>
                <Study_callege />
                <Study_kdt />
            </div>
            <div id='certificate'>
                <h4>
                    <i className="fa-solid fa-id-card"></i>
                    보유한 자격증
                </h4>
                <span> SQL 개발자 (SQLD) </span>
            </div>
        </div>
    );
}

export default Study