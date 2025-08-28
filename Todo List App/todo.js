let uniqId = 0;
function Todo() {
  const [inputValue, setInputValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Lấy giá trị từ input
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn trang reload khi submit form
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: ++uniqId, text: inputValue, completed: false },
      ]);
      setInputValue(""); // Reset input sau khi thêm
    }
  };
  const handleDelete = (e) => {
    const todoItem = e.target.closest(".todo-item");

    let arr = [];
    if (todoItem) {
      const key = todoItem.dataset.id;
      todos.forEach((todo) => {
        if (todo.id != key) {
          arr.push(todo);
        }
      });
      setTodos([...arr]);
    }
  };
  function handleChecked(e) {
    const todoItem = e.target.closest(".todo-item");
    if (todoItem) {
      const key = Number(todoItem.dataset.id) - 1;
      todos[key].completed = !todos[key].completed;
      setTodos([...todos]);
    }
  }
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Todo App</h1>
        <form className="add-todo" onSubmit={handleSubmit}>
          <input
            value={inputValue}
            placeholder="Nhập task mới..."
            className="todo-input"
            onChange={handleInputChange}
          />
          <button type="submit" className="add-btn">
            Thêm
          </button>
        </form>

        <ul className="todos">
          {todos.length === 0 && (
            <p className="empty-alert">
              Chưa có task nào. Hãy thêm task đầu tiên!
            </p>
          )}

          {todos.map((todo) => {
            return (
              <li className="todo-item" key={todo.id} data-id={todo.id}>
                <input
                  type="checkbox"
                  className="input-checkbox"
                  onChange={handleChecked}
                  checked={todo.completed}
                />
                <span
                  className="todo-content "
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
                <button className="destroy-todo-btn" onClick={handleDelete}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="todo-footer">
          <p className="todo-footer-text">Tổng: {todos.length} task(s)</p>
          <p className="todo-footer-text">
            Hoàn thành: {todos.filter((todo) => todo.completed).length} task(s)
          </p>
          <p className="todo-footer-text">
            Còn lại:{todos.filter((todo) => !todo.completed).length} task(s)
          </p>
        </div>
      </div>
    </div>
  );
}
const app = (
  <>
    <Todo />
  </>
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(app);
