import './My.css'
import My_box1 from './My_box1';
import My_box2 from './My_box2';
import My_box3 from './My_box3';
import My_box4 from './My_box4';
import My_box5 from './My_box5';


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
                <My_box2 />
                <My_box3 />
                <My_box4 />
                <My_box5 />
            </div>
        </div>
    );
}

export default My;