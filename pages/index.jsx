import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-200 to-orange-200 w-screen h-screen align-middle	justify-items-center	">
      <Head>
        <title>Ey! I Care | GPT-3 HealhCare Assistent</title>
      </Head>
      <div className="container">
        <div className="mx-auto px-4">
          <div className="">
            <h1 class="text-7xl font-gugi bg-gradient-to-r from-orange-400 to-cyan-300 bg-clip-text text-transparent">
              Ey! I Care
            </h1>
          </div>
          <div className="header-text-4x1 font-mono text-neutral-900 mt-4">
            <h2>A GPT3-like smarter, more personalized way to stay healthy</h2>
          </div> 
        </div>
        <div className="max-w-full mx-auto">
        <form class="flex items-center">   
        <label for="voice-search" class="sr-only">Search</label>
        <div class="relative w-96">
          <div class="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">
              <svg class="w-5 h-5 text-neutral-700 dark:text-neutral-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" id="voice-search" class="text-neutral-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white" placeholder="Tell us how do you feel today..." required/>
          <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3">
              <svg class="w-4 h-4 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <button type="submit" class="transition duration-350 ease-in-out hover:-translate-y-1 hover:shadow-lg ml-3 text-sm text-center font-semibold w-36 h-full p-2 text-neutral-900 hover:text-white bg-transparent hover:bg-neutral-700 border-2 border-neutral-900 hover:border-neutral-700 rounded-lg dark:focus:ring-neutral-800 ">Get Helthier</button>
        </form>
      </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
