
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LeftBar from './nav/LeftBar';
import Intro from './intro/Intro';
import Career from './career/Career';
import Study from './study/Study';
import Skill from './skill/Skill';
import Project from './project/Project';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import My from './my/My';

const Screen = () => {
    const menu = useSelector(state => state.basic.menu);
    const [navOpen, setNavOpen] = useState(true)

    useEffect(() => {
        if (window.matchMedia("(max-width : 500px)").matches) {
            setNavOpen(false);
        }
    }, [menu])

    const mobile = window.matchMedia("(max-width : 500px)").matches && navOpen;

    return (
        <div className="App">
            <LeftBar navOpen={navOpen} setNavOpen={setNavOpen} />
            <div style={{ paddingLeft: navOpen ? '370px' : '70px', width: navOpen ? 'calc(100vw - 390px)' : 'calc(100vw - 90px)' }} id="contents">
                {mobile && <h2>메뉴를 닫아주세요</h2>}
                <Routes>
                    <Route path='/study' element={!mobile && <Study />} />
                    <Route path='/project' element={!mobile && <Project />} />
                    <Route path='/career' element={!mobile && <Career />} />
                    <Route path='/skill' element={!mobile && <Skill />} />
                    <Route path='/my' element={!mobile && <My />} />
                    <Route path='/*' element={!mobile && <Intro />} />
                </Routes>
            </div>
        </div>
    );
}

export default Screen;