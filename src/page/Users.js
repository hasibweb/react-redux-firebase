import React, { useState } from "react";
import { useFirestore, useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const Users = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const firestore = useFirestore();
  const firebase = useFirebase();
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    if (text) {
      setLoading(true);
      firestore
        .collection("users")
        .add({ text })
        .then(ref => {
          setText("");
          setLoading(false);
          history.push("/");
        })
        .catch(err => console.log(err));
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h1>Users</h1>

          <form onSubmit={handleSubmit}>
            <div className="card card-body">
              <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="User Name"
                type="text"
                className="form-control"
              />
              <button className="btn btn-info" type="submit">
                {loading ? "Sending..." : "Add New"}
              </button>
            </div>
          </form>
          <button onClick={() => firebase.logout()} className="btn btn-danger">
            SignOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
