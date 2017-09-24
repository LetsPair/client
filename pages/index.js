// Module imports
import React from 'react'





// Component imports
import Page from '../components/Page'





// Component constants
const title = 'Home'





class Index extends React.Component {

  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  render () {
    return (
      <div>
        Hello world!
      </div>
    )
  }
}





export default Page(Index, title)
