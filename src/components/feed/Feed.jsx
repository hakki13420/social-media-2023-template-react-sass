import Posts from '../posts/Posts'
import Share from '../share/Share'

const Feed = () => {
  return (
    <div className="feed">
      <Share/>
      <Posts/>
    </div>
  )
}

export default Feed
