function UsersList({
  users,
  currentUsername,
}) {
  return (
    <aside className="users">

      <div className="users-title">
        <h3>Members</h3>

        <span>
          {users.length}
        </span>
      </div>

      {users.map((user) => (
        <div
          className="user"
          key={user.id}
        >
          <div className="avatar">
            {user.username
              .charAt(0)
              .toUpperCase()}
          </div>

          <div>
            <strong>
              {user.username}
            </strong>

            {user.username === currentUsername && (
              <small>
                You
              </small>
            )}

            <p>
              <span></span>
              Online
            </p>
          </div>
        </div>
      ))}

    </aside>
  );
}

export default UsersList;