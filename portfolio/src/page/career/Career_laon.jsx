import { useState } from "react";


const Career_laon = () => {
    const [open, setOpen] = useState(false);
    return (
        <div onClick={() => setOpen(!open)} className="Career_news">
            <div className='career_title'>
                <h4>2017. 06 ~ 2023. 03</h4>
                <p>라온자리</p>
                <hr />
                <i className={`fa-solid fa-caret-${open ? 'up' : 'down'}`}></i>
            </div>
            {open &&
                <div>
                    슈퍼바이저 - 직영, 가맹 매장 운영 & 관리
                </div>
            }
        </div>
    );
}

export default Career_laon;