import Login from './pages/Login.jsx'
import { Routes, Route, Navigate, Outlet, useLocation, replace} from 'react-router-dom'
import Dashboard from './pages/dashboard.jsx'
import Tasks from './pages/tasks.jsx'
import Users from './pages/Users.jsx'
import Trash from './pages/Trash.jsx'
import TaskDetails from './pages/TaskDetails.jsx'
import { Toaster } from 'sonner'

function Layout() {
  const user = ""
  const location = useLocation()
  return user ? (
    <div className='w-full h-screen flex flex-col md:flex-row'>
        <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>
          {/* <Sidebar /> */}
        </div>

        {/* <MobileSidebar /> */}

    </div>
  ):(
    <Navigate to='/login' state={{from: location}} replace/>
  )
}
function App() {
  return (
    <main className='w-full min-h-screen bg-[#f3f4f6]'>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Navigate to='/dashboard'/>} />
        <Route path='/dashboard >' element= {<Dashboard/>}/>
        <Route path='/tasks >' element= {<Tasks />}/>
        <Route path='/completed/:status >' element= {<Tasks/>}/>
        <Route path='/in-progress/:status >' element= {<Tasks/>}/>
        <Route path='/todo/:status >' element= {<Tasks/>}/>
        <Route path='/teams >' element= {<Users />}/>
        <Route path='/trashed >' element= {<Trash />}/>
        <Route path='/task/:id >' element= {<TaskDetails />}/>
      </Route>

      <Route path='/login' element= {<Login />}/>
    </Routes>

    <Toaster richColors />
  </main>
  )
}

export default App
