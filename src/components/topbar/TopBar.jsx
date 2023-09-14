import { SearchOutlined, Person2Outlined, NotificationsNoneOutlined, CommentOutlined } from '@mui/icons-material'
import Avatar from '../avatar/Avatar'
import TopBarItem from './TopBarItem'

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1 className="logo">
          <span>Hakki</span>
          <span>Media</span>
        </h1>

      </div>
      <div className="topbar-center">
        <div className="search">
          <SearchOutlined className='search-icon'/>
          <input type="search" placeholder="Search..." />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-right-links"></div>
        <div className="topbar-right-icons">
          <TopBarItem count={1}>
            <Person2Outlined/>
          </TopBarItem>
          <TopBarItem count={1}>
            <CommentOutlined/>
          </TopBarItem>
          <TopBarItem count={1}>
            <NotificationsNoneOutlined/>
          </TopBarItem>
        </div>
        <Avatar img={'https://picsum.photos/200'}/>
      </div>
    </div>
  )
}

export default TopBar
