import { useState, useEffect } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from '../api/users';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import './UsersPage.css';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await getUsers();
      setUsers(res.data);
      setError(null);
    } catch (err) {
      setError('Failed to load users. Make sure the backend is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreate = async (name) => {
    try {
      await createUser({ name });
      fetchUsers();
    } catch (err) {
      setError('Failed to create user');
      console.error(err);
    }
  };

  const handleUpdate = async (id, name) => {
    try {
      await updateUser(id, { name });
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      setError('Failed to update user');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (err) {
      setError('Failed to delete user');
      console.error(err);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div className="users-page">
      <div className="users-page-grid">
        <div className="form-section">
          <h2>{editingUser ? '✏️ Edit User' : '➕ Add New User'}</h2>
          <UserForm
            onSubmit={editingUser ? (name) => handleUpdate(editingUser.id, name) : handleCreate}
            initialName={editingUser ? editingUser.name : ''}
            isEditing={!!editingUser}
            onCancel={handleCancelEdit}
          />
        </div>

        <div className="list-section">
          <h2>👥 Users ({users.length})</h2>
          {error && <div className="error-message">{error}</div>}
          {loading ? (
            <div className="loading">Loading users...</div>
          ) : (
            <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
          )}
        </div>
      </div>
    </div>
  );
}

export default UsersPage;

