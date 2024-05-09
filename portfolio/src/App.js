import LeftBar from "./page/nav/LeftBar";
import './App.css'
import Intro from './page/intro/Intro';
import Skill from "./page/skill/Skill";
import { useState } from "react";
import Project from './page/project/Project';
import Career from "./page/career/Career";

function App() {
  const [menu, setMenu] = useState('걸어온길');
  return (
    <div className="App">
      <LeftBar menu={menu} setMenu={setMenu} />
      <div id="contents">
        {menu == '자기소개' && <Intro />}
        {menu == '기술스택' && <Skill />}
        {menu == '프로젝트' && <Project />}
        {menu == '걸어온길' && <Career />}
      </div>
    </div>
  );
}

export default App;
