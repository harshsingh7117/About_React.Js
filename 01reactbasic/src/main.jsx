import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  const username = "harsh"

  return(
    <div>
      <h1>Custom App!{username}</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https//google.com',
//       target: '_blank'
//   },
//   childeren: 'click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "harsh react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click Me to Visit Google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
   reactElement
)
