import Post from '../post/Post'
import { posts } from '../../data.json'

const Posts = () => {
  return (
    <div className="posts">
      {
        posts.map(post => <Post key={post.key} post={post} />)
      }
    </div>
  )
}

export default Posts
