import './App.css'

// Import Font Inter ranges 
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import { NavbarHeader } from './components/Navbar';
import FindJobs from './pages/FindJobs/FindJobs';


function App() {

  return (
    <>
  <NavbarHeader />
  <FindJobs />
    </>
  )
}

export default App
