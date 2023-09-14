const AvatarName = ({ user }) => {
  return (
    <div className="avatar-name">
      <img src={user.profileImage} alt="img-avatar-name" />
      <span>{user.username}</span>
    </div>
  )
}

export default AvatarName
