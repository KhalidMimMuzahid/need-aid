import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, signInWithEmail } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(userInfo);
    const { email, password } = userInfo;
    signInWithEmail(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleinputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...userInfo };
    newUser[field] = value;
    setUserInfo(newUser);
    // console.log(userInfo);
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
  };
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Sign In</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>

              <div>
                <form
                  onSubmit={handleSubmitForm}
                  action=""
                  className="text-center d-flex flex-column align-items-center mx-auto w-100"
                >
                  <MDBInput
                    onChange={handleinputChange}
                    name="email"
                    className="mb-4 mx-auto w-100"
                    placeholder="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                  />
                  <MDBInput
                    onChange={handleinputChange}
                    name="password"
                    className="mb-4 mx-auto w-100"
                    placeholder="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                  />

                  <p className="small mb-2 pb-lg-2">
                    <a className="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <Button
                    type="submit"
                    variant="primary"
                    className=" w-100 px-4 mb-2"
                  >
                    SignIn
                  </Button>
                </form>
              </div>
              <div className="d-flex flex-row mt-3 mb-5">
                <div className="hover-pointer" onClick={handleGoogleSignIn}>
                  <FaGoogle className="fs-3" />
                </div>
              </div>

              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-white-50 fw-bold">
                    Sign Up
                  </Link>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignIn;
