import { Client, Databases, Account } from "appwrite";

export class Helper {
  public static AppWriteUrl: string = "https://cloud.appwrite.io/v1";
  public static ProjectId: string = "670a164a0029808764bc";
  public static DatabaseId: string = "pwdmanager";
}

export const client = new Client();
client
  .setEndpoint(Helper.AppWriteUrl) // Your Appwrite Endpoint
  .setProject(Helper.ProjectId); // Your project ID

export const account = new Account(client);

export const database = new Databases(client);
