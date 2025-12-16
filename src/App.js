import { Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUserForm from "./components/AddUserForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/add-user" element={<AddUserForm />} />
    </Routes>
  );
};

export default App;

