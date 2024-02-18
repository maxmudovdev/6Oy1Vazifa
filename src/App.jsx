import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='logo'><img src={reactLogo} width="100px" alt="Logo" />
     <h1>REACT</h1>
     </div>
     <div className="main">
      <div className="card">
        <img src="https://picsum.photos/414/300" alt="first-logo" />
        <h2>Fazt Web</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quasi fugiat recusandae suscipit perferendis quaerat provident sit magni tempora laboriosam quod rem quo repudiandae exercitationem id ex obcaecati, cupiditate, mollitia nihil sequi.  Assumenda exercitationem mollitia error praesentium! <br />Go to Fazt web</p>

      </div>
      <div className="card">
        <img src="https://picsum.photos/414/300" alt="first-logo" />
        <h2>Fazl Blog</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quasi fugiat recusandae suscipit perferendis quaerat provident sit magni tempora laboriosam quod rem quo repudiandae exercitationem id ex obcaecati, cupiditate, mollitia nihil sequi. Assumenda exercitationem mollitia error praesentium!<br />Go to Fazt Blog</p>
      </div>
      <div className="card">
        <img src="https://picsum.photos/414/300" alt="first-logo" />
        <h2>Fazt You Tube</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quasi fugiat recusandae suscipit perferendis quaerat provident sit magni tempora laboriosam quod rem quo repudiandae exercitationem id ex obcaecati, cupiditate, mollitia nihil sequi.  Assumenda exercitationem mollitia error praesentium!<br />Go to Fazt You Tube</p>
      </div>

        
     </div>
     
    </>
  )
}

export default App
