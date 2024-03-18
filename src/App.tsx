import { Route, Switch } from 'wouter'
import './App.css'
import { Navbar } from './components/Navbar'
import { BillAon } from './pages'

function App() {

  return (
    <>
      <Navbar />
        <Switch>
            <Route path='/' component={BillAon} />
        </Switch>
    </>
  )
}

export default App
