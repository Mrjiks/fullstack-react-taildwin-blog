import { AboutPage, ArticlePage, ArticlesListPage, NavBar, HomePage, NotFoundPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/articles' element={<ArticlesListPage />}></Route>
        <Route path='/articles/:articleId' element={<ArticlePage />} />
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
