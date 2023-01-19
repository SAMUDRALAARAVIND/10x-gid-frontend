import { AddNewPost } from "./AddNewPost"
import { ViewPosts } from "./ViewPosts"
import {BrowserRouter, Routes, Route} from "react-router-dom"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/post" element={<AddNewPost />}/>
        <Route path="/view" element={<ViewPosts />}/>
      </Routes>
    </BrowserRouter>
  );
}