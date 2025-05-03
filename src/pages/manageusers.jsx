import { useState } from 'react';

export default function ManageUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'admin', password: '123456789' },
    { id: 2, name: 'Jane Smith', role: 'user', password: '123456789' },
  ]);

  const [newUser, setNewUser] = useState({ name: '', role: 'user' });

  const handleAddUser = () => {
    if (!newUser.name.trim()) return;
    setUsers([
      ...users,
      { id: Date.now(), name: newUser.name.trim(), role: newUser.role },
    ]);
    setNewUser({ name: '', role: 'user' });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleRoleChange = (id, role) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, role } : u)));
  };

  return (
    <div className="manageusers-container">
      <h2 className="manageusers-title">Manage Users</h2>

      <div className="manageusers-form">
        <input
          type="text"
          placeholder="Enter name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="manageusers-input"
        />
        <input
          type="text"
          placeholder="Enter password"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="manageusers-input"
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          className="manageusers-select"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleAddUser} className="manageusers-add-btn">
          Add
        </button>
      </div>

      <div className="manageusers-list">
        {users.map((user) => (
          <div key={user.id} className="manageusers-card">
            <div className="manageusers-info">
              <div className="username">
                <span className="manageusers-name">{user.name}</span>
                <span className="manageusers-password">{user.password}</span>
              </div>
              <select
                value={user.role}
                onChange={(e) => handleRoleChange(user.id, e.target.value)}
                className="manageusers-role"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              className="manageusers-delete"
              onClick={() => handleDelete(user.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
