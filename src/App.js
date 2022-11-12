import GoogleLogin from "react-google-login";
import { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);

  const responseGoogle = (response) => {
    let index = userData.findIndex(
      (e) => e.email === response.profileObj.email
    );
    if (index !== -1) {
      alert("this email is already registered");
    } else {
      setUserData([
        ...userData,
        {
          name: response.profileObj.name,
          email: response.profileObj.email,
        },
      ]);
    }
  };
  const onDelete = (item) => {
    setUserData(
      userData.filter((e) => {
        return e.email !== item;
      })
    );
  };

  return (
    <div className="container-fluid text-center">
      <h2>Google Login</h2>
      <GoogleLogin
        clientId="Your Client Id Goes Here"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      {userData.map((items, index) => {
        return (
          <div
            className="d-flex"
            key={index}
            style={{
              boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              height: "50px",
              width: "300px",
              marginLeft: "38%",
              marginTop: "20px",
            }}
          >
            <div>
              <button
                className="btn btn-danger btn-sm my-2"
                onClick={() => {
                  onDelete(items.email);
                }}
              >
                X
              </button>
            </div>
            <div style={{ marginLeft: "20px" }}>
              {items.name}
              <br></br>
              {items.email}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;

// test commit
