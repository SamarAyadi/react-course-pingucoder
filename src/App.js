import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

function App() {
  const posts = [{
    id: 1,
    postName: "PinguCoder",
    postBody: "platform e learning"
  },
  {
    id: 2,
    postName: "Learn React",
    postBody: "With PinguCoder"
    },
    {
      id: 3,
      postName: "Learn Angular",
      postBody: "With PinguCode"
    }
  ];
  const postList = posts.map((post) => {
    return <Post key={post.id} postName={post.postName} postBody={post.postBody} />
  })
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
           {postList}
          </div>

          <div style={{ width: "30%", marginTop: "25px" }}>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
