import TopBar from '../topbar/TopBar'
import LeftBar from '../leftBar/LeftBar'
import Feed from '../feed/Feed'
import ProfileComp from '../profile/ProfileComp'

const LayoutHome = ({ children }) => {
  return (
    <>
      <TopBar/>
      <div className="layout">
        <LeftBar/>
        <Feed />
        {children}
      </div>
    </>
  )
}

const LayoutProfile = ({ children }) => {
  return (
    <>
      <TopBar/>
      <div className="layout">
        <LeftBar/>
        <div className="layout-profile">
          <ProfileComp/>
          <div className="content">
            <Feed />
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

const Layout = ({ children, profile }) => {
  return (
    <>
      {
        profile
          ? <LayoutProfile>{children}</LayoutProfile>
          : <LayoutHome>{children}</LayoutHome>
      }
    </>
  )
}

export default Layout
