import LeftBar from "./page/nav/LeftBar";
import './App.css'
import Intro from './page/intro/Intro';
import Skill from "./page/skill/Skill";
import { useEffect, useState } from "react";
import Project from './page/project/Project';
import Career from "./page/career/Career";
import Study from "./page/study/Study";
import store from './Redux/store';
import { useSelector, Provider } from 'react-redux';
import Screen from "./page/Screen";

function App() {


  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
}

export default App;
