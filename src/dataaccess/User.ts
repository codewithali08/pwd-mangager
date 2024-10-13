import { ID } from "appwrite";
import { Users } from "../models/User";
import { Helper, database } from "../utility/AppSetting";
export class User {
  saveUser(user: Users) {
    try {
      const promise = database.createDocument(
        Helper.DatabaseId,
        "670a61f9000c259fbb0e",
        ID.unique(),
        {
          id: ID.unique.toString(),
          username: user.username,
          password: user.password,
        }
      );

      promise.then(
        function (response) {
          console.log(response);
        },
        function (error) {
          console.log(error);
        }
      );
    } catch (ex: any) {
      console.log(ex);
    }
  }
}
