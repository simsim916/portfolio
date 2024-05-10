import LeftBar from "./page/nav/LeftBar";
import './App.css'
import Intro from './page/intro/Intro';
import Skill from "./page/skill/Skill";
import { useEffect, useState } from "react";
import Project from './page/project/Project';
import Career from "./page/career/Career";
import Study from "./page/study/Study";

function App() {
  const [menu, setMenu] = useState('자기소개');
  const [navOpen, setNavOpen] = useState(true)

  useEffect(() => {
    if (window.matchMedia("(max-width : 500px)").matches) {
      setNavOpen(false);
    }
  }, [menu])

  const mobile = window.matchMedia("(max-width : 500px)").matches && navOpen;

  return (
    <div className="App">
      <LeftBar navOpen={navOpen} setNavOpen={setNavOpen} menu={menu} setMenu={setMenu} />
      <div style={{ paddingLeft: navOpen ? '370px' : '70px', width: navOpen ? 'calc(100vw - 390px)' : 'calc(100vw - 90px)' }} id="contents">
        {mobile && <h2>메뉴를 닫아주세요</h2>}
        {!mobile && menu == '자기소개' && <Intro />}
        {!mobile && menu == '걸어온길' && <Career />}
        {!mobile && menu == '관련교육이수' && <Study />}
        {!mobile && menu == '기술스택' && <Skill />}
        {!mobile && menu == '프로젝트' && <Project />}
      </div>
    </div>
  );
}

export default App;
