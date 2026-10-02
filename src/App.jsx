import { useState } from 'react';

import Sidepanel from './Sidepanel.jsx';

import Ai from './pages/Ai.jsx';
import Code from './pages/Code.jsx';
import Home from './pages/Home.jsx';

function App() {

  const [page, setPage] = useState("home");

  return(

    <div id="content">

      <div id="header-bar">
        <span id="title">Portfolio Julian Keppel</span>
      </div>

      <div id="inner-content">
          <Sidepanel onSelect={setPage}/>
          {page === "home" && <Home />}
          {page === "ai" && <Ai />}
          {page === "code" && <Code />}
      </div>

    </div>


  );


}

export default App
