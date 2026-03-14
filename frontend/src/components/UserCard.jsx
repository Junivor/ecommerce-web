import './UserCard.css';

function UserCard({ user, onEdit, onDelete }) {
  return (
    <tr className="user-card">
      <td className="user-id">{user.id}</td>
      <td className="user-name">{user.name}</td>
      <td className="user-actions">
        <button className="btn btn-edit" onClick={() => onEdit(user)}>
          ✏️ Edit
        </button>
        <button className="btn btn-delete" onClick={() => onDelete(user.id)}>
          🗑️ Delete
        </button>
      </td>
    </tr>
  );
}

export default UserCard;

