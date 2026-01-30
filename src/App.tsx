import './App.css'
import CompoundComponent from './components/CompoundComponents/CompoundComponents'
import ParentComponent from './components/ParentComponent'
import {ParentComponent2} from './components/CustomHooks/CustomHooks'

function App() {

  return (
    <>
      <ParentComponent/>



      <CompoundComponent/>

      <ParentComponent2/>

    </>
  )
}

export default App
