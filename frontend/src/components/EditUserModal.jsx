import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useUpdateUsersForHomeMutation, useFetchAllUsersQuery } from '../api';
import { setUsers } from '../features/usersSlice';

const EditUserModal = ({ home, usersForHome = {}, onClose }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const { data: allUsers = [], isLoading, isError } = useFetchAllUsersQuery();
  const [updateUsersForHome] = useUpdateUsersForHomeMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (usersForHome.users) {
      const selectedUsernames = usersForHome.users.map(user => user.username);
      setSelectedUsers(selectedUsernames);
    }
  }, [usersForHome]);

  const handleSave = async () => {
    if (selectedUsers.length === 0) {
      toast.error('At least one user must be selected');
      return;
    }

    try {
      await updateUsersForHome({ streetAddress: home.street_address, users: selectedUsers }).unwrap();
      toast.success('Users updated successfully');
      dispatch(setUsers(allUsers));
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      toast.error('Failed to update users');
    }
  };

  const handleCheckboxChange = (username) => {
    setSelectedUsers(prev =>
      prev.includes(username) ? prev.filter(user => user !== username) : [...prev, username]
    );
  };

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error fetching users</p>;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-4 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold">Edit Users for {home.street_address}</h2>
        <div className="mt-4">
          {allUsers.length > 0 ? allUsers.map(user => (
            <div key={user.username} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={selectedUsers.includes(user.username)}
                onChange={() => handleCheckboxChange(user.username)}
                className="mr-2"
              />
              <label>{user.username}</label>
            </div>
          )) : (
            <p>No users available</p>
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
