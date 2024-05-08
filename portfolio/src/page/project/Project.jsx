import './Project.css'
import Project_tomatofarm from './Project_tomatofarm';
import Project_cookierun from './Project_cookierun';
import Project_portfolio from './Project_portfolio';

const Project = () => {
    return (
        <div id="Project">
            <div>
                <h3>
                    <i className="fa-solid fa-list-check"></i>
                    프로젝트
                </h3>
            </div>
            <div id='projectBox'>
                <Project_tomatofarm />
                <Project_portfolio />
                <Project_cookierun />
            </div>
        </div>
    );
}

export default Project;