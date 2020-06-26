import React from 'react';
import MarvelApi from '../components/MarvelApi'
import '../assets/styles/App.css'


function App() {
return(
<div className= "main">
  <h1 id="title" >
      Best Marvel Comics
  </h1>

  <MarvelApi/>

</div>

    );

}

export default App;
