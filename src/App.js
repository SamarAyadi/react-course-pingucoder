import "./App.css";
import Header from "./Header";

import Article from "./Article";

function App() {

  const firstArticle = `
  dfdjfkklsdfkdskkdklf
  dkdfklkdskdslkdk
  dddf;dfmmdfmdfm;mdf
  `
  const secondArticle = `
  lorem ipsum
  `
  return (
    <div className="App">
      <Header />
      
      {/* <Article content={firstArticle} personName="kamel" email="kamel@gmail.com" age="20">
        <div style={{ background: "teal" }}>
          <h2>PinguCoder</h2>
          <p style={{ background: "orange" }}> To begin the development</p>
      </div>
      </Article> */}
      <Article content={secondArticle} personName="marwa" email="marwa@gmail.com" age="22"/>
      <Article personName="Arwa" email="arwa@gmail.com" age="20"/>
     
    
    </div>
  );
}

export default App;
