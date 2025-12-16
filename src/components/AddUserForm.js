import React, { useEffect, useState } from "react";

const AddUserForm = ({ onAddUser }) => {
  const [users, setUsers] = useState([]);
 const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // 🔹 Form validation
  const isFormValid =
    name.trim() !== "" && email.includes("@");

  // 🔹 Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    // Add user locally
    setUsers((prev) => [newUser, ...prev]);

    // Clear form
    setName("");
    setEmail("");
  };

  return (
     <div className=" bg-gray-200 p-4 space-y-6 ">
    <form 
    onSubmit={handleSubmit}
    className="bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto ">
      <h3 className="text-lg font-semibold">Add User</h3>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 mb-2 rounded-md"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2 rounded-md"
      />

      <button
        type="submit"
        disabled={!isFormValid}
        
        className={`
          block mx-auto px-6 py-3 rounded-md text-white mt-2
          ${isFormValid
            ? "bg-purple-500 hover:bg-purple-700"
            : "bg-gray-400"}
        `}
      >
        Add User
      </button>
    </form>
      {loading && (
        <p className="text-center font-semibold">
          Loading users...
        </p>
      )}

      
      {error && (
        <p className="text-center text-red-500">
          {error}
        </p>
      )}

     
      {!loading && !error && (
        <div className="max-w-md mx-auto space-y-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white p-3 rounded-md shadow  border border-transparent hover:border-purple-500"
            >
              <p className="font-semibold">
                {user.name}
              </p>
              <p className="text-sm text-gray-600">
                {user.email}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>

  );
};

export default AddUserForm;
