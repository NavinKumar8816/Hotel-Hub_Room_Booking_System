import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Signup from './log/Signup';
import Login from './log/Login';
import Ownerdata from './pages/ownerdata';
import Userdata from './pages/userdata';
import Hoteldata from './pages/Hoteldata';
import Profile from './pages/profile';
import UpdateUser from './log/Update';
import DeleteUser from './log/Delete';
import BookRoomdata from './pages/BookRoom';
function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path="/update" element={<UpdateUser />} />
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/ownerdata' element={<Ownerdata/>}/>
    <Route path='/userdata' element={<Userdata/>}/>
    <Route path='/hoteldata' element={<Hoteldata/>}/>
    <Route path='/bookroom' element={<BookRoomdata/>}/>
    <Route path="/delete-user" element={<DeleteUser />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
