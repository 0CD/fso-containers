import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Todo from './Todo'

describe('Todo', () => {
  const todo = {
    _id: '1',
    text: 'Test Todo',
    done: false,
  }

  test('renders a todo item', () => {
    render(<Todo todo={todo} />)
    const todoText = screen.getByText('Test Todo')
    expect(todoText).toBeInTheDocument()
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
  })
})
