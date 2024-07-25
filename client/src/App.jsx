import { useState } from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import CreateForm from './pages/CreateForm';
import ChatBot from './pages/ChatBot';
import Analytics from './pages/Analytics';
import UpdateForm from './pages/UpdateForm';
import Dashboard from './pages/Dashboard';
import Folder from './pages/Folder';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';

function App() {
  


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login  /> } />
          <Route path="/register" element={<Register  />} />
          <Route path="/create" element={<CreateForm/>} />
          <Route path="/create/:folderId" element={<CreateForm/>} />
          <Route path="/chatbot/:id" element={<ChatBot/>} />
          <Route path="/analytics/:formId" element={<Analytics/>} />
          <Route path="/update/:formId" element={<UpdateForm/>} />
          <Route path="/dashboard" element={<Dashboard  />} />
          <Route path="/folder/:folderId" element={<Folder/>} />
          <Route path="/settings" element={<Settings/>} />
        
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
