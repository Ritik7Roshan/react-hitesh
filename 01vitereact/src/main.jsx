import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
 
function MyApp() 
{
   return (
    <div>
      Custom App | Hare Krsna Hare
    </div>
   )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a', // 1st expected parameter is tag 
  {href: 'https://google.com',target:'_blank'}, //2nd is obj
  'click me to visit google'//3rd is text 
)

createRoot(document.getElementById('root')).render(
    //anotherElement
    //  MyApp() works fine
    //<MyApp />
    // reactElement
    <App/>
)
