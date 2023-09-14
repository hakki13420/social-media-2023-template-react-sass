const OnlineFriend = ({ user }) => {
  return (
    <li className="online-friend-item">
      <div className="online-friend-image">
        <img src={user.profileImage} alt="online-friend-image" />
        <div className="online"></div>
      </div>
      <span>{user.username}</span>
    </li>
  )
}

export default OnlineFriend
