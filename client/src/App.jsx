import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TaskList />} />
        <Route path='/tasks/new' element={<TaskForm />} />
        {/* Edit Route */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
