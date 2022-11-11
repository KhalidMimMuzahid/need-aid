import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
import { FaGoogle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../context/UserContext";
const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    signInWithGoogle,
    signUpWithEmailAndPassword,
    updateUserProfileInfo,
  } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(userInfo);
    const { displayName, email, password, photoURL } = userInfo;
    const userAdditionalInfo = { displayName, photoURL };
    console.log(userAdditionalInfo);
    signUpWithEmailAndPassword(email, password)
      .then((userCredential) => {
        updateUserProfile(userAdditionalInfo);
        // console.log(userInfo);
        const user = userCredential.user;
        // console.log(user);
        // setIsLoading(false);
        const currentUser = {
          userUid: user.uid,
        };
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
          });
        // ...
        navigate(from, { replace: true });
        window.location.reload();
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
    if (field === "password") {
      if (value.length < 6) {
        setPasswordError(
          "the lenght of password must be at least 6 characters"
        );
      } else if (!/[A-Z]/.test(value)) {
        setPasswordError("the password must contain at least one Uppercase");
      } else if (!/[a-z]/.test(value)) {
        setPasswordError("the password must contain at least one lowercase");
      } else if (!/[0-9]/.test(value)) {
        setPasswordError("the password must contain at least one number");
      } else if (!/[\W]{1,}/.test(value)) {
        setPasswordError(
          "the password must contain at least one special character"
        );
      } else {
        setPasswordError("");
      }
    }
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        const currentUser = {
          userUid: user.uid,
        };
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
          });
        // ...
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
  };
  const updateUserProfile = (userAdditionalInfo) => {
    console.log(userAdditionalInfo);
    updateUserProfileInfo(userAdditionalInfo)
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
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
              <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
              {/* <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p> */}

              <div>
                <form
                  onSubmit={handleSubmitForm}
                  action=""
                  className="text-center d-flex flex-column align-items-center mx-auto w-100"
                >
                  <MDBInput
                    onChange={handleinputChange}
                    name="displayName"
                    className="mb-4 mx-auto w-100"
                    placeholder="name"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    required
                  />
                  <MDBInput
                    onChange={handleinputChange}
                    name="email"
                    className="mb-4 mx-auto w-100"
                    placeholder="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    required
                  />
                  <MDBInput
                    onChange={handleinputChange}
                    name="photoURL"
                    className="mb-4 mx-auto w-100"
                    placeholder="Profile photo URL"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    required
                  />
                  <MDBInput
                    onChange={handleinputChange}
                    name="password"
                    className="mb-4 mx-auto w-100"
                    placeholder="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    required
                  />
                  {passwordError ? (
                    <p className="text-danger">{passwordError}</p>
                  ) : (
                    <p className="small mb-2 pb-lg-2 invisible">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    className="px-4 mb-2 w-100"
                  >
                    SignUp
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
                  <Link to="/signin" className="text-white-50 fw-bold">
                    Sign In
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

export default SignUp;
