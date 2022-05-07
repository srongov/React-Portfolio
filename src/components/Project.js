import React from 'react'
import {Card, Button} from 'react-bootstrap'

export const Project = () => {
  return (
    <div>
<Card className='pcard' style={{ width: '58rem' }}>
  <Card.Body>
    <Card.Title>Project</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Check out my side project with sound effect and keypress
    </Card.Text>
    <Card.Link href="https://github.com/srongov/drum">Drum</Card.Link>
  </Card.Body>
      </Card>
      <div className='pfooter'>
      <h5 className='footerdiv'><a href="https://github.com/srongov">My Github</a></h5>
      </div>
      </div>
  )
}
