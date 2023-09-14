import { BrowseGallery, EmojiEmotions, Label, PermMedia, Room, Tag } from '@mui/icons-material'
import Avatar from '../avatar/Avatar'

const Share = () => {
  return (
    <div className='share'>
      <div className="share-top">
        <Avatar img={'https://picsum.photos/62'} />
        <input type="text" placeholder="What in your mind Hakki?...." />
      </div>
      <hr />
      <div className="share-bottom">
        <div className="share-bottom-item">
          <PermMedia htmlColor='red'/>
          <span>Photo|video</span>
        </div>
        <div className="share-bottom-item">
          <Label htmlColor='green'/>
          <span>Tag</span>
        </div>
        <div className="share-bottom-item">
          <Room htmlColor='blue'/>
          <span>Location</span>
        </div>
        <div className="share-bottom-item">
          <EmojiEmotions htmlColor='orange'/>
          <span>Feelings</span>
        </div>
        <button>Share</button>
      </div>

    </div>
  )
}

export default Share
