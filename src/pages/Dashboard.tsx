import { ID } from "appwrite";
import { database } from "../utility/AppSetting";

function Dashboard() {
  const submitHangler = async () => {
    try {
      const promise = await database.createDocument(
        "pwdmanager",
        "670a16e50010f786d353",
        ID.unique(),
        { title: "gmail", email: "masthan@gmail.com", password: "12345678" }
      );
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

export default Dashboard;
