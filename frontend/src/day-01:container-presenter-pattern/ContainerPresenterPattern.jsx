import "./App.css";
// import UserProfile from "./components/messy-way/UserProfile";
import UserProfileContainer from "./components/with-pattern/UserProfileContainer";

function ContainerPresenterPattern() {
  return (
    <div>
      {/* <UserProfile userId={1} /> */}
      <UserProfileContainer userId={1} />
    </div>
  );
}

export default ContainerPresenterPattern;
