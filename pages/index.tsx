import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Navlist from '../components/Navlist';

const Home: NextPage = () => {
  const [showMenu, SetShowMenu] = useState(false);
  const handleMenuClick = (state?: boolean) => {
    console.log('passed state?', state);
    state !== undefined ? SetShowMenu(state) : SetShowMenu(!showMenu);
  };
  return (
    <div>
      <Head>
        <title>
          Oil and Gas Pages| Oil and Gas Industry | Oil and Gas Directory | OGP
        </title>
        <meta
          name="description"
          content="Our business is to support OIL, GAS and INDUSTRIAL sector of all Middle Eastern countries, & US with vendor information of Oil Companies, Oil Installations both Offshore Onshore Oil Drilling Oil tankers Oil Storage Oil refining, Marine transportation Seismic and Marine Surveys Geophysical Oceanographic and Hydro graphic Surveys Soil Investigation Oil Well Drilling"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container max-w-6xl mx-auto">
        <Navbar toggleMenu={handleMenuClick} />
        <Banner />
        <Navlist hideMenu={handleMenuClick} showMenu={showMenu} />
      </div>
    </div>
  );
};

export default Home;
