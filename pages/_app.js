import "../components/index.scss";
import React, { useState, useEffect, useContext } from "react";
import Router from "next/router";
import LoadingAnimation from "../components/LoadingAnimation";
import { AuthContext } from "../context/auth";
import Banner from "../components/Banner";
import { AuthProvider } from "../context/auth";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      <Banner />
      {loading ? (
        <LoadingAnimation>
          <Component {...pageProps} />
        </LoadingAnimation>
      ) : (
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      )}
    </>
  );
}

export default MyApp;
