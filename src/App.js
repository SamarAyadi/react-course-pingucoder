import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

const showCategories = true;
function App() {
  const tasks = [
    { id: 1, title: "Task One", description: "This is the first task" },
    { id: 2, title: "Task Two", description: "This is another one" },
    { id: 3, title: "Task Three", description: "A new Task" },
    { id: 4, title: "Task Four", description: "A new Task" },
  ];

  const myTaskList = tasks.map((task ) => {
    return (<div  key={task.id}>{task.title}</div>);
  });
  console.log(myTaskList);

  return (
    <div className="App">
      <Header />

      <div style={{ background: "red"}}>
        <h1>{myTaskList}</h1>
      </div>

      {/* POSTS CONTAINER */}
      {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
      {/* <div
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        > */}
      {/* POSTS CONTAINER */}
      {/* <div style={{ width: "70%" }}>
            <Post postName="PinguCoder" postBody="platform e learning"></Post>
            <Post postName="Learn React" postBody="With PinguCoder" />
            <Post postName="The third post" postBody="With PinguCoder" />
          </div> */}

      {/* <div style={{ width: "30%", marginTop: "25px" }}>
            <AppSideMenu />
          </div> */}
      {/* </div>
      </div> */}
    </div>
  );
}

function AppSideMenu() {
  if (showCategories == true) {
    return <SideMenu />;
  } else {
    return null;
  }
}

export default App;
