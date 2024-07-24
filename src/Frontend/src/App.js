import ReactDOM from "react-dom/client";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginSignup from './Components/Assets/LoginSignup/LoginSignup';
import ProtectedRoute from './Components/Assets/Internet/ProtectedRoute';
import ClassroomDashboard from './Components/Assets/ClassroomDashboard/ClassroomDashboard';
import ClassroomDashboardTeacher from './Components/Assets/ClassroomDashboardTeacher/ClassroomDashboardTeacher';

// Когато искаш да пуснеш уеб сайта, остави само импорта на уеб сайта който ти трябва. може да коментираш тези които не ти трябват

// За да се Пусне уеб сайта, пишете npm start след като напишете cd src/Frontend

function App() {
  return (
    <div>
      <ClassroomDashboardTeacher/> 
    </div> // ^^^ Сменяш кои сайт да пуснеш
  ); 
}

// do a npm install react-router-dom bc i cant do it
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginSignup />} />
//         <Route path="/" element={
//           <ProtectedRoute 
//             endpoint="checktoken" 
//             roleRedirects={{ 
//               student: "/student-dashboard", 
//               teacher: "/teacher-dashboard" 
//             }}
//           >
//             <ClassroomDashboard />
//           </ProtectedRoute>
//         } />
//         <Route path="/teacher" element={
//           <ProtectedRoute 
//             endpoint="checkteacher" 
//             navigateTo="/login"
//           >
//             <ClassroomDashboardTeacher />
//           </ProtectedRoute>
//         } />
//         <Route path="/student-dashboard" element={
//           <ProtectedRoute 
//             endpoint="checktoken" 
//             navigateTo="/login"
//           >
//             <ClassroomDashboard />
//           </ProtectedRoute>
//         } />
//         <Route path="/teacher-dashboard" element={
//           <ProtectedRoute 
//             endpoint="checkteacher" 
//             navigateTo="/login"
//           >
//             <ClassroomDashboardTeacher />
//           </ProtectedRoute>
//         } />
//       </Routes>
//     </Router>
//   );
// };

export default App;
