import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './log/Signup'
import Login from './log/Login';
import UpdateUser from './log/Update';
import DeleteUser from './log/Delete';
import Rooms from './pages/Rooms';
import Profile from './pages/profile';
import BookNow from './pages/BookNow';
import About from './pages/about';
import BookRoom from './pages/BookRoom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/room' element={<Rooms />}></Route>
          <Route path='/bookroom' element={<BookRoom />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path="/book" element={<BookNow />} ></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path="/update" element={<UpdateUser />} ></Route>
          <Route path="/delete-user" element={<DeleteUser />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
