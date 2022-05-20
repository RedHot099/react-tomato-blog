import NavBar from "./components/NavBar";
import Post from "./pages/post/Post";
import Home from "./pages/home/Home";
import NewPage from "./pages/newpage/NewPage";
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Post/>}/>
          <Route path="/write" element={<NewPage/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
