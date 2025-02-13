import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BlogDetails from "./components/BlogDetails";
import AddBlog from "./components/AddBlog";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blogs/:id" element={<BlogDetails />} />
                <Route path="/add_blog" element={<AddBlog />} />
            </Routes>
        </Router>
    );
};

export default App;
