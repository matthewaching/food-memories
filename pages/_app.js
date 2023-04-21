import "../src/App.css";
import NavBar from "../src/components/NavBar";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Matt&apos;s Food App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Food Memories Journal and Random Recipe Generator"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}