import ".Profile.css";
import Logo from "../../components/Home/Logo/Logo";
import LoginOption from "../../components/Home/LoginOption/LoginOption";
function Profile() {
 <head></head>
 <body>
  <div id="root">
    <div class="profile">
      <div class="leftContainer"></div>
      <div class="centerContainer">
        <h3>profile Page</h3>
        <div class="profileIn">
          <div class="p-photo"></div>
          <div class="p-icon"></div>
        </div>
      </div>
    </div>
  </div>
 </body>

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
