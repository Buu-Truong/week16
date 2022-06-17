import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TableComponent from './tableComponent';

let activityList = defaultActivities();

function defaultActivities() {
    return [
        {
            city: 'Lake Havasu City',
            activity: 'There is a replica of the London Bridge here!'
        },
        {
            city: 'Sedona',
            activity: 'Slide Rock is so fun to escape the heat!'
        }
    ]
}

export default function FormComponent() {
    const [city, setCity] = useState('');
    const [activity, setActivity] = useState('');
    const [value, setValue] = useState(0); 
    const saveData = () => {
        activityList.push({city: city, activity: activity})
        setValue(value => value + 1);
    }

    function deleteActivity(activityId) {
        activityList.splice(activityId['id'], 1)
        setValue(value => value + 1); 
    }

    return (
        <div>
        <TableComponent data = {activityList} onDelete={deleteActivity}/>
        <Form id ='formStyle'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label id ='formLabelText'>Suggestions?</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Idea" onChange={(e) => setActivity(e.target.value)}/>
          <Form.Select onChange={(e) => setCity(e.target.value)} >
            <option>Select an Option</option>
            <option>Phoenix</option>
            <option>Sedona</option>
            <option>Lake Havasu City</option>
         </Form.Select>
        </Form.Group>
        <Button variant="primary" type="button" onClick={saveData}>
          Submit
        </Button>
      </Form>
      </div>
    )
}


