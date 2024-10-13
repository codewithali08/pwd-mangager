import { useState } from "react";
import { UtilityHelpers } from "../utility/Helpers";
import { account } from "../utility/AppSetting";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHangler = async () => {
    if (UtilityHelpers.isStringEmptyOrNull(email)) {
      alert("Enter email");
      return;
    }

    if (UtilityHelpers.isStringEmptyOrNull(password)) {
      alert("Enter password");
      return;
    }

    try {
      let x = await account.createEmailPasswordSession(email, password);
      navigate("/dashboard");
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="container">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="card">
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
