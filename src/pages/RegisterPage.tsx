import { useState } from "react";
import { UtilityHelpers } from "../utility/Helpers";
import { User } from "../dataaccess/User";
import { Users } from "../models/User";
import { account } from "../utility/AppSetting";

function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitHangler = async () => {
    if (UtilityHelpers.isStringEmptyOrNull(userName)) {
      alert("Enter username");
      return;
    }

    if (UtilityHelpers.isStringEmptyOrNull(email)) {
      alert("Enter email");
      return;
    }

    if (UtilityHelpers.isStringEmptyOrNull(password)) {
      alert("Enter password");
      return;
    }

    if (UtilityHelpers.isStringEmptyOrNull(confirmPassword)) {
      alert("Enter confirm password");
      return;
    }

    if (password !== confirmPassword) {
      alert("Entere password not matched");
      return;
    }

    let userData: Users = {
      username: userName,
      password: password,
    };

    try {
      let r = await account.create(
        UtilityHelpers.generateUniqueId(),
        email,
        userData.password,
        userData.username
      );
      console.log(r);
    } catch (ex) {
      console.log(ex);
    }

    // let userDetails = new User();
    // userDetails.saveUser(userData);
  };

  return (
    <div className="container">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="card" style={{ width: "25%" }}>
          <div className="card-body">
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">
                User Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter user name"
                name="email"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pwd" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pwd" className="form-label">
                Confirm Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Confirm password"
                name="pswd"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitHangler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
