function Article(props) {
  console.log(props);
  const children = props.children;
  return (
    <>
      <div
        style={{
          background: "#222",
          boxShadow: "0px 10px 10px gray",
          color: "white",
          margin: "10px",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Article;
