import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}
export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
        <header className="header">
            <h1>Tareas con <img
            style={{ width: '70px', height: 'auto' }}
            src="/typescript.png" ></img>
            </h1>

            <CreateTodo onAddTodo={onAddTodo} />

        </header>
  )
}
