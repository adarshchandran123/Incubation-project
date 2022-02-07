import { Accordion, Badge, Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";

import axios from "axios"


const MyBooking = () => {

  const [booking,setBooking] = useState([])

  const deleteHandler = (id) => {
    
    if (window.confirm("Are you sure ?")) {
      axios.delete(`http://localhost:5000/api/user/mybooking/${id}`).then((res)=>{
        
        fetchData()
      })
    }
  };
  const fetchData = () => {
    
    var userinfo = JSON.parse(localStorage.getItem("userInfo"))
    var userId=userinfo._id

    axios.get(`http://localhost:5000/api/user/mybooking/${userId}`).then((data) => {
      
      const details =data.data
      
      setBooking(details);
     
    });
  };

  useEffect(() => {
    
    fetchData();
  }, []);

  return (
    <div>
      <MainScreen title="Welcome">
        <Link to="createBooking">
          <Button
            className="btn btn-success"
            style={{ marginLeft: 10, marginBottom: 6 }}
          >
            Apply
          </Button>
        </Link>

        {booking.map((note) => (
          <Accordion key={note._id}>
            <Accordion.Item eventKey="0">
              <Card>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "black",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                      textDecoration: "none",
                    }}
                  >
                    <Accordion.Header>{note.name}</Accordion.Header>
                  </span>
                  <div>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Body> 
                  <Card.Body>
                    <h5>
                      <Badge  bg={note.status=== 'Pending'? "danger": "success"} > {note.status}</Badge>
                    </h5>
                    <blockquote className="blockquote mb-0">
                      <h5>Company :{note.companyName}</h5>
                      <p>Incubation :{note.incubation}</p>
                      <p>Email : {note.email}</p>
                      <p>Mobile :{note.mobile}</p>
                      <footer className="blockquote-footer">
                        Created on - date {note.updatedAt}
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Body>
              </Card>
            </Accordion.Item>
          </Accordion>
        ))}
      </MainScreen>
    </div>
  );
};

export default MyBooking;
