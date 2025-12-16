
import React from "react";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";


  

const UserList = () => {
  const navigate = useNavigate();
  const users = [
    { id: 1, name: "John", email: "john@test.com" },
    { id: 2, name: "Sara", email: "sara@test.com" },
  ];

  return ( 
    <div>
    <button
        onClick={() => navigate("/add-user")}
        className="bg-purple-500 text-white px-6 py-2 "
      >
        Add User
      </button>
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
    </div>
  );
};

export default UserList;


