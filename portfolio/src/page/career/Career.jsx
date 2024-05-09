
import './Career.css'
import Career_kdt from './Career_kdt';
import Career_laon from './Career_laon';
import Career_news from './Career_news';

const Career = () => {
    return (
        <div id='Career'>
            <div>
                <h3>
                    <i className="fa-solid fa-user-tie"></i>
                    걸어온 길...
                </h3>
            </div>
            <div id='introduceBox'>
                {/* <Career_kdt /> */}
                <Career_laon />
                <Career_news />
            </div>
        </div>
    );
}

export default Career;