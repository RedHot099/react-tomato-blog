import NavBar from "./components/NavBar";
import Post from "./pages/post/Post";
import Home from "./pages/home/Home";
import NewPage from "./pages/newpage/NewPage";
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/react-tomato-blog/" element={<Home/>}/>
          <Route path="/react-tomato-blog/blog" element={<Post/>}/>
          <Route path="/react-tomato-blog/write" element={<NewPage/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
