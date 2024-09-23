import { TodoList } from "./components/todo-list";
import './index.css'; // Importuj Tailwind stilove

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-100">
      <TodoList />
    </div>
  );
}

export default App;
