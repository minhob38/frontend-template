import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

const TRAIN: NextPage = () => {
  return (
    <>
      <Head>
        <title>Train 🚂</title>
        <meta name="description" content="train page ..." />
      </Head>
      <div className="text-base font-mono">Train 🚂</div>
    </>
  );
};

export default TRAIN;
