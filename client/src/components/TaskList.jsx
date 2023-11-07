import { useEffect, useState } from 'react'
import { Card, CardContent, Typography, Button } from '@mui/material'

const TaskList = () => {
  const [task, setTask] = useState([])

  const loadTask = async () => {
    const response = await fetch('http://localhost:4000/tasks')
    const data = await response.json()
    setTask(data)
  }
  useEffect(() => {
    loadTask()
  }, [])

  return (
    <>
      <h1>Task List</h1>
      {
        task.map((task) => (
          <Card
            key={task.id} style={{
              marginBottom: '.7rem',
              backgroundColor: '#1e272e'
            }}
          >
            <CardContent style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
            >
              <div style={{ color: 'white' }}>
                <Typography>{task.title}</Typography>
                <Typography>{task.description}</Typography>
              </div>

              <div>
                <Button variant='contained' color='inherit' onClick={() => console.log('edit')}>
                  Edit
                </Button>
                <Button variant='contained' color='warning' onClick={() => console.log('Delete')} style={{ marginLeft: '.5rem' }}>
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      }

    </>
  )
}
export default TaskList
