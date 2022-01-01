import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, Routes } from "react-router-dom";
import state, { addMessages } from "./redux/state";

const App = (props) => {
  return (
    <div>
      <div className='header_wrapper'>
        <Header />
      </div>
      <div className='app_wrapper'>
        <Navbar state={props.state.sidebar} />
        <section className='content'>
          <Routes>
            <Route
              path='profile'
              element={
                <Profile
                  state={props.state.profilePage}
                  addPost={props.addPost}
                />
              }
            />
            <Route
              path='dialogs/*'
              element={
                <Dialogs
                  state={props.state.dialogsPage}
                  addMessages={addMessages}
                />
              }
            />
            <Route path='news' element={<News />} />
            <Route path='music' element={<Music />} />
            <Route path='settings' element={<Settings />} />
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default App;
