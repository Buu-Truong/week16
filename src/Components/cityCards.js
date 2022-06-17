import React from "react";
import Card from 'react-bootstrap/Card'
export default class CityCards extends React.Component {
  render() {
    return (
        <div className ='row' >
            <Card style={{ width: '20rem', height: ''}}>
                { <Card.Img variant="top" src="Phoenix.jpg" /> }
                <Card.Body>
                    <Card.Title>Phoenix</Card.Title>
                    <Card.Text>
                    Phoenix is the capital of the southwestern U.S. state of Arizona. Known for its year-round sun and warm temperatures, it anchors a sprawling, multicity metropolitan area known as the Valley of the Sun.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                { <Card.Img variant="top" src="Sedonda.jpg" /> }
                <Card.Body>
                    <Card.Title>Sedona</Card.Title>
                    <Card.Text>
                    Sedona is an Arizona desert town near Flagstaff that’s surrounded by red-rock buttes, steep canyon walls and pine forests. It’s noted for its mild climate and vibrant arts community.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                {<Card.Img variant="top" src="LakeHavasuCity.jpg" /> }
                <Card.Body>
                    <Card.Title>Lake Havasu City</Card.Title>
                    <Card.Text>
                    Lake Havasu City is in western Arizona. It’s known as a base for trails in the nearby desert and water sports on Lake Havasu.  
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
  }
}