import './css/App.css';
import Import from './Import'
import ImportGoogle from './ImportGoogle'
import ImportOk from './ImportOk'
import ImportError from './ImportError'
import {Route} from 'react-router-dom';
import Help from './help';


function App() {
  return (<div>
      <Route exact path='/import' component={Import} />
      <Route exact path='/ImportGoogle' component={ImportGoogle} />
      <Route exact path='/ImportOk' component={ImportOk} />
      <Route exact path='/ImportError' component={ImportError} />
      <Route exact path='/help' component={Help} />
    </div>
  );
}



export default App;
