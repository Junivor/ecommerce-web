import UserCard from './UserCard';
import './UserList.css';

function UserList({ users, onEdit, onDelete }) {
  if (users.length === 0) {
    return <div className="no-users">No users found. Add one above!</div>;
  }

  return (
    <div className="user-list">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserCard key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

