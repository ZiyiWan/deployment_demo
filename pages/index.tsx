import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import PatientList from "./patientList";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import Head from "next/head";
import { Button } from "antd";

const Home: NextPage = () => {
  function SignInButton() {
    // useMsal hook will return the PublicClientApplication instance you provided to MsalProvider
    const { instance } = useMsal();

    return <button onClick={() => instance.loginRedirect()}>Sign In</button>;
  }

  function SignOutButton() {
    const { instance } = useMsal();

    return <Button onClick={() => signOutClickHandler(instance)}>Sign Out</Button>;
  }
  function signOutClickHandler(instance:any) {
    const logoutRequest = {
      account: instance.getAccountByHomeId("89d1d101-d07e-4a24-b175-0e282875630f"),
      postLogoutRedirectUri: "http://localhost:3000/",
    };
    instance.logoutRedirect(logoutRequest);
  }
  function WelcomeUser() {
    const { accounts } = useMsal();
    const username = accounts[0].username;

    return (
      <div>
        <PatientList username={username}>
          <SignOutButton />
        </PatientList>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Azure AD Authentication using MSAL and Next.js</title>
      </Head>

      <AuthenticatedTemplate>
        <WelcomeUser />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>This will only render if a user is not signed-in.</p>
        <SignInButton />
      </UnauthenticatedTemplate>
    </div>
  );
};

export default Home;
