import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Menu from './components/Navbar'
import { Container } from '@mui/material'

function App () {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/tasks/new' element={<TaskForm />} />
          <Route path='/tasks/:id/edit' element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
