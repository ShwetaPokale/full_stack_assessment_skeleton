import React from 'react';

const UserDropdown = ({ users, setSelectedUser }) => {
  return (
    <div className="mb-4">
      <select onChange={(e) => setSelectedUser(e.target.value)} className="p-2 border rounded">
        <option value="">Select User</option>
        {users.map(user => (
          <option key={user.username} value={user.username}>{user.username}</option>
        ))}
      </select>
    </div>
  );
};

export default UserDropdown;
