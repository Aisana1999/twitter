import ".Profile.css";
import Logo from "../../components/Home/Logo/Logo";

function Profile() {
  return (
    <div className="home">
      <div className="leftContainer">
        <Logo />
      </div>
      <div className="centerContainer">
        <h3>This is Profile</h3>
      </div>
      <div className="rightContainer">
        <LoginOption />
      </div>
    </div>
  );
}

export default Profile;
