import Layout from '../../components/layout/Layout'
import RightBarProfile from '../../components/rightBar/RightBarProfile'

const Profile = () => {
  return (
    <div className="profile">
      <Layout profile>
        <RightBarProfile/>
      </Layout>
    </div>
  )
}

export default Profile
