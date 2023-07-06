import TagButton from "./TagButton";

function SideMenu() {
  return (
    <div style={{ margin: "25px", border: "solid #1d9bf0 5px" }}>
      <TagButton title="Programming">
        <div>
          <span>🐧🐧🐧</span>
        </div>
      </TagButton>
      <TagButton title="Data Science">
        <div>
          <img style={{ width: "100px"}} src="https://images.unsplash.com/photo-1688588428113-d24195a109bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1033&q=80" alt=""/>
        </div>
      </TagButton>
      <TagButton title="Technology" >
        <h1>Click me</h1>
        <span>😎😎😎</span>
      </TagButton>
      <TagButton title="Self Improvement" />
      {/* <TagButton />
      <TagButton />
      <TagButton /> */}
    </div>
  );
}

export default SideMenu;
