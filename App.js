import React, { useState } from "react";
import ReactDOM  from "react-dom/client";
import TodoApp from "./components/TodoApp";
const App = () => {
  return (
    <div className="app">
      <TodoApp/>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
export default App
