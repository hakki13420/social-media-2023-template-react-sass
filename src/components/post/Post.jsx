import { Comment, MoreVert, ThumbUpOutlined, Share, FavoriteBorderOutlined } from '@mui/icons-material'
import Avatar from '../avatar/Avatar'
import { users } from '../../data.json'
import { useState } from 'react'

const Post = ({ post }) => {
  const [like, setLike] = useState(null)
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header-left">
          <Avatar img={users[post.userId].profileImage} />
          <div className="post-header-left-info">
            <span>{users[post.userId].username}</span>
            <span>{post.createdAt}</span>
          </div>
        </div>
        <div className="post-header-right">
          <MoreVert />
        </div>
      </div>
      <div className="post-body">
        <p>{post.content}</p>
        <img src={post.picture} alt="image-post" />
      </div>
      <div className="post-footer">
        <div className="post-footer-container">
          <div className="post-footer-item">
            <ThumbUpOutlined onClick={() => setLike(like => like + 1)} htmlColor={like ? 'red' : ''}/>
            {/* <FavoriteBorderOutlined/> */}
            <span>{post.likes} likes</span>
          </div>
          <div className="post-footer-item">
            <Comment/>
            <span>{post.comments} comments</span>
          </div>
          <div className="post-footer-item">
            <Share/>
            <span>{post.shares} shares</span>
          </div></div>

      </div>

    </div>
  )
}

export default Post
