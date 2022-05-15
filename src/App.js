import logo from './logo.svg';
import './App.css';
import './assets/css/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { useEffect } from 'react';
import loadjs from "loadjs";

function App() {
  useEffect(() => {
    loadjs("/assets/js/jquery.min.js", function () {
      // loadjs("/assets/js/header.js", function () {
        loadjs(
          "/assets/plugins/bootstrap/js/bootstrap.bundle.min.js",
          function () {}
        );
      // });
    });
  });
  return (
    <>
    <Home />
    </>
  );
}

export default App;
