import { useLocation } from 'react-router-dom';
function UserDetail() {
    const location = useLocation();
    const userData = location.state?.userData || {};
    return (
        <div>
            {userData.userpicture && (
                    <img src={userData.userpicture} alt="Profile" />
                )}
                <p>{userData.username}</p>
        </div>
    )
}
export default UserDetail