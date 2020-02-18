import React from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

const Home = () => {
  useFirestoreConnect(["users"]);

  const users = useSelector(state => state.firestore.ordered.users);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h1>Home</h1>
          {users ? (
            users.length ? (
              <ol>
                {users.map(user => (
                  <li key={user.id}>{user.text}</li>
                ))}
              </ol>
            ) : (
              "No Data Found"
            )
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
