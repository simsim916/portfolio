import './My.css'
import My_box1 from './My_box1';


const My = ()=>{
    return(
        <div id='My'>
            <div>
                <h3>
                    <i className="fa-solid fa-user-tie"></i>
                    자기 소개
                </h3>
            </div>
            <div id='introduceBox'>
                <My_box1 />
            </div>
        </div>
    );
}

export default My;