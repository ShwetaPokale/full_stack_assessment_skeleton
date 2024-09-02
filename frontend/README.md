## 1. Approach
1. **API Integration:** All backend API endpoints are integrated using RTK Query. This allows for simplified and efficient data fetching, caching, and state management.

2. **Component Structure:**

- **HomesForUserPage:** The main page to select a user and display related homes.
- **HomeCard:** A card component displaying home details and an "Edit Users" button.
- **EditUserModal:** A modal for editing users associated with a selected home.
- **UserDropdown:**  A dropdown component for selecting a user.

3. **State Management:** Used Redux Toolkit to create slices (homesSlice, usersSlice) for managing homes and users state.
4. **Responsive and Accessible UI:** Used Tailwind CSS for styling, ensuring the UI is both responsive and accessible.

## 2. Project Folder Structure

project/ ├── frontend/ │ ├── src/ │ │ ├── components/ │ │ │ ├── HomeCard.jsx │ │ │ ├── EditUserModal.jsx │ │ │ └── HomesForUser.jsx │ │ ├── features/ │ │ │ ├── homesSlice.js │ │ │ └── usersSlice.js │ │ ├── api.js │ │ └── App.js │ ├── public/ │ ├── README.md │ └── package.json ├── backend/ │ ├── src/ │ │ ├── controllers/ │ │ ├── models/ │ │ ├── routes/ │ │ └── server.js │ ├── README.md │ └── package.json ├── README.md └── .gitignore


## 3. Setup Instructions
1. git clone https://github.com/ShwetaPokale/full_stack_assessment_skeleton.git
2. Checkout branch: git checkout shweta-develop
3. cd full_stack_assessment_skeleton
4. npm start
5. npm run build

## 4. Usage
- **View Homes for a User:** Select a user from the dropdown to see all homes they are associated with.
- **Edit Users for a Home:** Click the "Edit Users" button on a home card to open a modal, where you can add or remove users associated with that home.

## 5. Technologies Used
- **React:** JavaScript library for building user interfaces.
- **Redux Toolkit:** For state management.
- **RTK Query:** For efficient data fetching and caching.
- **Tailwind CSS:** For responsive UI design.
- **React Toastify:** For displaying notifications.
- **React Loading Skeleton:** For loading states.

## 6. Future Improvements
- Add pagination for large datasets.
- Enhance the UI for better user experience.
- Implement additional filters and sorting options for homes.

## 7. Demo
Watch the video demonstration of the working frontend here: [Video Demo](https://drive.google.com/file/d/1oUamegEj6nH6YIYKFQO2v2jh5Zyv9h2g/view?usp=sharing)
