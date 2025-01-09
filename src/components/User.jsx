import '../styles/user.scss';

export function User({userName}) {
  let userInitials = userName.split(' ')[0][0] + userName.split(' ')[1][0];

  return (
    <div className="user">
      <div className="userContainer">
        <div className="userInitials">
          <p>{userInitials}</p>
        </div>
        <div className="userName">
          <p>{userName}</p>
        </div>
      </div>
    </div>
  );
}
