import LeftBar from "./page/nav/LeftBar";
import './App.css'
import Intro from './page/intro/Intro';
import Skill from "./page/skill/Skill";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState('자기소개');
  return (
    <div className="App">
      <LeftBar menu={menu} setMenu={setMenu} />
      <div id="contents">
        {menu == '자기소개' && <Intro />}
        {menu == '기술스택' && <Skill />}
      </div>
    </div>
  );
}

export default App;
