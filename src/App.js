import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Image} from "./components/Image";
import {Test} from "./components/Test";
function App() {
  return (
    <div className="container">
      <Header />
      <Image />
      <Test />
    </div>
  );
}

export default App;
