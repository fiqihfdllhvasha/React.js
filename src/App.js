import './App.css';
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Favorite from "./components/Favorite"

import "./style/landingPage.css"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}
      
      {/* Favorite section */}
      <div className='Favotite'>
        <Favorite/>
      </div>
      {/* end of Favorite section */}
    </div>
  )
}

export default App;
