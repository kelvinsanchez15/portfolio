import Head from "next/head";
import Button from "@material-ui/core/Button";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>HELLO HOME</h1>
        <Button variant="contained" color="primary">
          Hello Material Button
        </Button>
      </main>
    </div>
  );
}
