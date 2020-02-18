import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const firebase = useFirebase();
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    firebase
      .login({
        email,
        password
      })
      .then(usr => {
        setLoading(false);
        history.push("/");
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-lg-6 mx-auto mt-3">
          <div className="card card-body">
            <h2 className="text-center text-info mb-3">Login</h2>

            <form onSubmit={onSubmit}>
              <div className="form-group">
                {/* <label htmlFor="email">Email</label> */}
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="password">Password</label> */}
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <button
                className={`btn btn-info btn-block ${loading && "disabled"}`}
                type="submit"
              >
                {loading ? "Wait..." : "Login"}
              </button>
            </form>
            <p className="lead mt-3 mb-0">
              Don't Have any account? Please <Link to="/signup">Register</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
