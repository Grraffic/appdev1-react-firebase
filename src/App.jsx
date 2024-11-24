import { useState } from "react";
import ListTodos from "./ListTodos";

function App() {
  const [user, setUser] = useState("Rafael Ramos");

  return (
    <>
      <h1>Todo React App</h1>
      {user ? (
        <ListTodos user={user} />
      ) : (
        <p>You must login to view the todo lists</p>
      )}
    </>
  );
}

export default App;
