import { BrowserRouter as  Switch,Route} from 'react-router-dom'
import Mainroutes from './components/Routes/Mainroutes'

function App() {
 return(
   <>
      <Switch>
         <Route>
            <Mainroutes />
         </Route>
      </Switch>
   </>
 )
}

export default App