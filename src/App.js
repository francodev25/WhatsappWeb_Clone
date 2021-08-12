import {useState} from 'react'
import {
	Route,
	BrowserRouter,
	Switch,
} from 'react-router-dom'
import './App.css'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'
import Login from './components/Login'

function App() {
  const [user, setUser] = useState(null);
  



	return (
		<div className='app'>
      {!user ? (
        <Login></Login>
      ):
      (
        <div className='app__body'>
          <BrowserRouter>
            <Sidebar />
            
            <Switch>
              <Route exact path='/'>
                <Chat />
              </Route>
            </Switch>
            <Switch>
              <Route path='/rooms/:roomID'>
                <Chat />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      )
      }
		</div>
	)
}

export default App
