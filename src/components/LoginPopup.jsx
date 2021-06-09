import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { TextField, Button, Container } from "@material-ui/core";

// import $ from "jquery";
const LoginPopup = () => {
  // $(window).on("load", function () {
  //   $("#myModal").modal("show");
  // });
  // setTimeout(show_modal, 3000);

  // setTimeout(close_modal, 6000);

  // function show_modal() {
  //   var popup_box = document.getElementById("myModal");
  //   popup_box.style.display = "block";
  // }
  // function close_modal() {
  //   var popup_box = document.getElementById("popup-box");
  //   popup_box.style.display = "none";
  // }
  return (
    <>
      <Container maxwidth="md">
        <Popup trigger={<button> Trigger</button>} position="right center">
          <div className="row">
            <div className="col-md-5 loginLeft">
              <h2 className="loginHeading mb-4">Login</h2>
              <p className="logintext mb-5">
                Get access to your Orders, Wishlist and Recommendations
              </p>
              <img src="images/loginBottom.jpg" className="mt-5" />
            </div>
            <div className="col-md-7">
              <form className="loginForm" noValidate autoComplete="on">
                <div className="row mb-2">
                  <div className="col-md-12">
                    <TextField
                      id="standard-basic"
                      label="Enter Email/ Mobile number"
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-12">
                    <TextField
                      id="standard-password-input"
                      label="Enter Password"
                      type="password"
                      autoComplete="current-password"
                    />
                    <a href="" className="loginLink">
                      Forgot?
                    </a>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-md-12">
                    <small>
                      By continuing, you agree to Chauffeur's Terms of Use and
                      Privacy Policy.
                    </small>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-12">
                    <Button variant="contained" color="secondary">
                      Login
                    </Button>
                  </div>
                  <div className="col-md-12 mt-2 mb-2 text-center">
                    <span className="loginortext">OR</span>
                  </div>
                  <div className="col-md-12">
                    <Button variant="outlined" color="primary">
                      Request OTP
                    </Button>
                  </div>
                </div>
                <div className="row mt-5 text-center">
                  <div className="col-md-12">
                    <a href="" className="loginlink">
                      New to Chauffeur? Create an account
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Popup>
      </Container>
    </>
  );
};
const NewUser = () => {
  return (
    <>
      <Container maxwidth="md">
        <Popup trigger={<button> NewUser</button>} position="right center">
          <div className="row">
            <div className="col-md-5 loginLeft newUser">
              <h2 className="loginHeading mb-4">Looks like you're new here!</h2>
              <p className="logintext mb-5">
                Sign up with your mobile number to get started
              </p>
              <img src="images/loginBottom.jpg" className="mt-5" />
            </div>
            <div className="col-md-7">
              <form className="loginForm" noValidate autoComplete="on">
                <div className="row mb-2">
                  <div className="col-md-12">
                    <TextField
                      id="standard-basic"
                      label="Enter Mobile number"
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-6">
                    <small> OTP sent to Mobile</small>
                  </div>
                  <div className="col-md-6">
                    <a>Resend?</a>
                  </div>
                  <div className="col-md-12">
                    <TextField id="standard-basic" label="Enter OTP" />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-12">
                    <TextField
                      id="standard-password-input"
                      label="Enter Password"
                      type="password"
                      autoComplete="current-password"
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-12">
                    <small>
                      By continuing, you agree to Chauffeur's Terms of Use and
                      Privacy Policy.
                    </small>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-12 mb-4">
                    <Button variant="contained" color="secondary">
                      Continue
                    </Button>
                  </div>

                  <div className="col-md-12">
                    <Button variant="outlined" color="primary">
                      Existing User? Login
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Popup>
      </Container>
    </>
  );
};

export { LoginPopup, NewUser };
