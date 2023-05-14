import Menu from "./components/Menu";
import { AboutPage, ArticlePage, ArticlesListPage, NavBar, HomePage, NotFoundPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Router>
      <div className='container m-auto'>
        {showMenu && <Menu setShowMenu={setShowMenu} showMenu={showMenu} />}
        <NavBar setShowMenu={setShowMenu} showMenu={showMenu} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/articles' element={<ArticlesListPage />}></Route>
          <Route path='/articles/:articleId' element={<ArticlePage />} />
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
