import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserDropdown from '../components/UserDropdown';
import HomeCard from '../components/HomeCard';
import { useFetchAllUsersQuery, useFetchHomesForUserQuery } from '../api';
import { setHomes } from '../features/homesSlice';


const HomesForUserPage = () => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState('');
  const [page] = useState(1);
  const { data: allUsers = [], error: usersError } = useFetchAllUsersQuery();
  const { data: homesData = {}, error: homesError, isLoading: homesLoading } = useFetchHomesForUserQuery({ username: selectedUser, page }, { skip: !selectedUser });
  const homes = homesData.homes || [];

  useEffect(() => {
    if (homesData.homes) {
      dispatch(setHomes(homesData.homes));
    }
    if (usersError) {
      console.error('Error fetching users:', usersError);
    }
    if (homesError) {
      console.error('Error fetching homes:', homesError);
    }
  }, [usersError, homesError, homesData, dispatch]);

  return (
    <div className="p-4">
      <UserDropdown users={allUsers} setSelectedUser={setSelectedUser} />
      {homesLoading ? (
        <p className="text-center text-gray-500">Loading homes...</p>
      ) : homesError ? (
        <p className="text-center text-red-500">Error loading homes: {homesError.message}</p>
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
