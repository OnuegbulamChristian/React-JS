import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const UserScreen = () => {
  const [userData, setUserData] = useState([]);

  console.log(userData);

  useEffect(() => {
    const fetchData = async () => {
      const { data }: any = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUserData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {userData?.map((items: any) => (
        <>
          {/* <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{items?.username}</Card.Title>
              <Card.Text>{items?.name
              }</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}
          <div>
            <Link to={`/profile/${items?.id}`}>
              <p>{items?.name}</p>
              <h6></h6>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default UserScreen;
