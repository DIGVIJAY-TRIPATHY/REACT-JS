import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
   <UserContextProvider>
    <h1 className='text-center bg-gray-600 '>React with chai and coffee</h1>
   </UserContextProvider>
  )
}

export default App
