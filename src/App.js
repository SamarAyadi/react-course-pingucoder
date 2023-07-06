import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

const showCategories = true;
function App() {
  return (
    <div className="App">
      <Header />

      {/* POSTS CONTAINER */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        >
          {/* POSTS CONTAINER */}
          <div style={{ width: "70%" }}>
            <Post postName="PinguCoder" postBody="platform e learning"></Post>
            <Post postName="Learn React" postBody="With PinguCoder" />
            <Post postName="The third post" postBody="With PinguCoder" />
          </div>

          <div style={{ width: "30%", marginTop: "25px" }}>
            <AppSideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

function AppSideMenu() {
  if (showCategories == true) {
    return (<SideMenu />);
  } else {
    return null
  }
 
}

export default App;
