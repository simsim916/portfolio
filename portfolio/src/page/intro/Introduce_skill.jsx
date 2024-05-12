
import { useState } from 'react';
import './Introduce.css'

const Introduce_skill = () => {

    return (
        <div className='skill'>
            <h4>
                <i className="fa-solid fa-book"></i>
                사용가능기술
                <span><i className="fa-solid fa-angles-right"></i> 더 보러가기</span>
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
                <i className="fa-solid fa-book"></i>
                자격증
            </h4>
            <div>
                <span>SQL 개발자(SQLD)</span>
            </div>
        </div>
    );
}

export default Introduce_skill;