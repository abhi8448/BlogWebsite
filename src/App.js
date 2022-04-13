
//compoents
import React from 'react';
import Header from './components/Header';
import Home from './components/home/Home';
import { Box } from '@material-ui/core';
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Switch from "react-switch";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style={{ margintop: 64 }}>
        <Routes>
          <Route exact path = '/' element = {<Home/>} ></Route>
          <Route exact path = '/details' element = {<DetailView/>} ></Route>
          <Route exact path = '/create' element = {<CreateView/>} ></Route>
          <Route exact path = '/about' element = {<About/>} ></Route>
          <Route exact path = '/contact' element = {<Contact/>} ></Route>
          <Route exact path = '/login' element = {<Login/>} ></Route>
        </Routes>

      </Box>
    </BrowserRouter>
  );
}

export default App;
