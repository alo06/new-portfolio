import { useState } from 'react'
import Message from './Components/Message/Message'
import Taskbar from './Components/Taskbar/Taskbar'
import Folders from './Components/Folders/Folders';


function App() {

  return (
    <div className="main-container">
      <Message />
      <Folders/>
      <Taskbar />
    </div>
  );
}

export default App
