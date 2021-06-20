import Head from "next/head";
import Header from "components/header/header";
import Dashboard from "components/dashboard/dashboard";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Dashboard"></Header>
      <Dashboard></Dashboard>
    </>
  );
}
