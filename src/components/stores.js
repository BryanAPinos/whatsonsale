import React from "react";
import firebase from "../firestore";
import "../App.css";
import { Card } from "react-bootstrap";

class Stores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
    };
  }

  componentDidMount() {
    const db = firebase.firestore();

    db.collection("stores")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        // console.log(data);
        this.setState({ stores: data });
      });
  }

  render() {
    const { stores } = this.state;
    return (
      <div className="storeList row">
        {stores.map((store) => (
          <div key={store.uid} className=" col-s-12 col-md-6 col-xl-4">
            <Card border="secondary" className="storeCard">
              <Card.Img variant="top" src={store.logo} className="storeLogo" />
              <Card.Body className="storeInfo">
                <Card.Title>
                  {" "}
                  <a href={store.url} target="_blank">
                    {store.name}
                  </a>
                </Card.Title>
                <Card.Text>Up to {store.discount}% off</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

export default Stores;
