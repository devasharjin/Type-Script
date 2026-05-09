import './App.css'
import { UserDetails } from './components/02_default_props'
import { User } from './components/01_optional_and_required_props'
import { Button } from './components/05_componentProps'

function App() {

  return (
  <>
  <User id={12} subTitle={<h3>hi</h3>}/>
  <UserDetails/>
  <Button variant='primary' >click me</Button>
  </>
  )
}

export default App
