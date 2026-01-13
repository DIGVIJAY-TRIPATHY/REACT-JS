import React from 'react'
import Basic from './components/Basic'
import List from './components/List'
import Propsss from './components/Propsss'
import Proops from './components/Proops'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import Greetings from './components/Greetings'
import Inlinecss from './components/Inlinecss'

function App() {
  return (
    <div>
      <Basic/>
      <List/>
      <Propsss/> 
      <Proops>
        <h1>hii</h1>
        <p>hello guys</p>
      </Proops>
      <Weather/>
      <UserStatus loggedin={true} isAdmin={true}/>
      <Greetings timeofDay="morning"/>
      <Inlinecss/>
      
    </div>
  )
}

export default App
