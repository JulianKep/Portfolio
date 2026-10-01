import Code from './Code.jsx';
import Sidepanel from './Sidepanel.jsx';
import Ai from './Ai.jsx';


function App() {

  return(

    <div id="content">

      <div id="header-bar">
        <span id="title">Portfolio Julian Keppel</span>
      </div>

      <div id="inner-content">
          <Sidepanel/>
          <Ai></Ai>
      </div>

    </div>


  );


}

export default App
