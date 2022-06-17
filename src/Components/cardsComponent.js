import React from "react";
import Card from 'react-bootstrap/Card'
export default class CardsComponent extends React.Component {
  render() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                {<Card.Img variant="top" src="FossilCreek.jpeg" />}
                <Card.Body>
                    <Card.Title>Waterfall Trail</Card.Title>
                    <Card.Text>
                    Waterfall Trail is the most popular area at Fossil Creek. The one-mile trail follows the creek to a natural waterfall, where crowds spend the day swimming.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem'}}>
                {<Card.Img variant="top" src="SlideRockAZ.jpeg" />}
                <Card.Body>
                    <Card.Title>Slide Rock </Card.Title>
                    <Card.Text>
                    Slide Rock State Park features a natural rock water slide located in Oak Creek Canyon just 15 minutes from Sedona.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem'}}>
                {<Card.Img variant="top" src="HorseShoeBend.jpg" /> }
                <Card.Body>
                    <Card.Title>Horseshoe Bend</Card.Title>
                    <Card.Text>
                    The Horseshoe Bend trail is a short 1.3-mile round trip hike. Most of the trail is covered in deep sand with a few rocky areas and the only location to escape from the desert sun is the small pavilion.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
  }
}



