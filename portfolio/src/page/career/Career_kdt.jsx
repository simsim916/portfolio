import { useState } from "react";


const Career_kdt = () => {
    const [open, setOpen] = useState(false);
    return (
        <div onClick={() => setOpen(!open)} className="Career_news">
            <div className='career_title'>
                <h4>2023. 10 ~ 2024. 05</h4>
                <p>KDT 자바 풀스택 양성코스</p>
                <hr />
                <i className={`fa-solid fa-caret-${open ? 'up' : 'down'}`}></i>
            </div>
            {open &&
                <div>
                    
                </div>
            }
        </div>
    );
}

export default Career_kdt;