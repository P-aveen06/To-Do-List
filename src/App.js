import './App.css';
import Home from './Page/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Reminder from './Custom/Reminder/Reminders.js';
import Archived from './Custom/Archived.js';
import Trash from './Custom/Trash.js';
import Note from './Custom/Notes/Notes'
import {SignUp} from './Static/SignUp';
import SignIn from './Static/SignIn';
import Orgchart from './Custom/OrganizationChart.js';
import ErrorPage from './Static/ErrorPages.js';
import Settings from './Custom/Settings';
import Help from './Custom/Help';
function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/reminder' element={<Reminder />}/>
      <Route path='/archived' element={<Archived/>}/>
      <Route path='/trash' element={<Trash />}/>
      <Route path='/note' element={<Note />}/>
      <Route path='/settings'  element={<Settings/>}/>
      <Route path='/chart' element={<Orgchart />}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/signin' element={<SignIn />}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='*' elements={<ErrorPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
