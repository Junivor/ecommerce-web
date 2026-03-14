import { useState } from 'react';
import UsersPage from './pages/UsersPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🛒 Ecommerce Web</h1>
        <p>User Management System</p>
      </header>
      <main>
        <UsersPage />
      </main>
    </div>
  );
}

export default App;

