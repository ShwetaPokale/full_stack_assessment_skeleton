import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from '../features/usersSlice';
import { setHomes } from '../features/homesSlice';
import UserDropdown from '../components/UserDropdown';
import HomeCard from '../components/HomeCard';
import { fetchAllUsers, fetchHomesForUser } from '../api';

const HomesForUserPage = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const homes = useSelector((state) => state.homes.homes);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchAllUsers();
        dispatch(setUsers(data));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    getUsers();
  }, [dispatch]);

  useEffect(() => {
    if (selectedUser) {
      const fetchHomes = async () => {
        setLoading(true);
        try {
          const data = await fetchHomesForUser(selectedUser);
          dispatch(setHomes(data.homes));
        } catch (error) {
          console.error('Error fetching homes:', error);
        }
        setLoading(false);
      };
      fetchHomes();
    }
  }, [selectedUser, dispatch]);

  return (
    <div className="p-4">
      <UserDropdown users={users} setSelectedUser={setSelectedUser} />
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {homes.length > 0 ? (
            homes.map(home => (
              <HomeCard key={home.street_address} home={home} />
            ))
          ) : (
            <p className="text-center text-gray-500">No homes available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HomesForUserPage;
