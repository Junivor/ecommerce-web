import { useState, useEffect } from 'react';
import './UserForm.css';

function UserForm({ onSubmit, initialName = '', isEditing = false, onCancel }) {
  const [name, setName] = useState(initialName);

  useEffect(() => {
    setName(initialName);
  }, [initialName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit(name.trim());
    if (!isEditing) {
      setName('');
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">User Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter user name..."
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-submit">
          {isEditing ? '💾 Update' : '➕ Add User'}
        </button>
        {isEditing && (
          <button type="button" className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default UserForm;

