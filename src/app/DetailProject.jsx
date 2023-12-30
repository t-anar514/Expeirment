'use client';
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useState,useRef } from "react";
import textData from "./data/data.json"


export default function DetailProject(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
const imageData=[
    {
        id:1,
        imgUrl:"https://images.squarespace-cdn.com/content/v1/5eb20e7ca83af72c16c40eb8/1589525940566-YXIJFCZXQ1PJJEQVMKAU/2znbqnm7gzp31-1024x564.jpg?format=750w"
    },
    {
      id:2,
      imgUrl:"https://images.squarespace-cdn.com/content/v1/5eb20e7ca83af72c16c40eb8/1589525940799-CX4BGNGI64WO2GH9LNKS/09d6c5c928c27142ec4edf815cae6db8511470a1.jpeg?format=750w"
  },
  {
    id:3,
    imgUrl:"https://images.squarespace-cdn.com/content/v1/5eb20e7ca83af72c16c40eb8/1589525940568-A4FGJE3X9MAN7K9MUIG5/ss_6941c37fa490ed18fadc6372e6a6ef4ff856bd3f.600x338.jpg?format=750w"
},
{
  id:4,
  imgUrl:"https://images.squarespace-cdn.com/content/v1/5eb20e7ca83af72c16c40eb8/1589526294520-KO0Y00LEC7BKR4CD25EA/ss_be0a5e642e11aed4503f8fd1173ef511e0106379.600x338.jpg?format=750w"
},
{
  id:5,
  imgUrl:"https://images.squarespace-cdn.com/content/v1/5eb20e7ca83af72c16c40eb8/1589525940566-YXIJFCZXQ1PJJEQVMKAU/2znbqnm7gzp31-1024x564.jpg?format=750w"
},
{
  id:6,
  imgUrl:"https://images.squarespace-cdn.com/content/v1/5eb20e7ca83af72c16c40eb8/1589526751864-UO4OYAI3NP94QZWJ8VI5/034c95f8684d7d46c1125d6859ffdd5c3f9ee091.jpg?format=750w"
}
    
]
const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
    return(
        <div className="w-full flex flex-col items-center dark:text-black lg:pb-24 pb-12" >
            <div className="w-full lg:px-12">
<h1 className="lg:text-5xl text-3xl pb-12">Hishigdalai</h1>
       <p className="lg:text-3xl text-2xl pb-8">developed by ######</p>
        <Image
      src="https://images.squarespace-cdn.com/content/v1/5eb20e7ca83af72c16c40eb8/1589526749697-YL0DD058VDPG96VCY4ZU/ss_bffa0a0c7d6c1afc82f17674f05596b486a3e1b6.1920x1080.jpg?format=750w"
      width={1090}
      height={571}
      alt="Picture of the author"
    />
<p className="text-lg pt-4">Armajet is a unique 2.5D multiplayer platformer centered around competitive jetpack combat and unique weapons. It was released in 2019 to very positive ratings with cross platform play between Steam, Android, and iOS. From early beta to today it’s maintained a devoted community with regular tournaments and Discord discussions.</p>
<div className="flex justify-start w-full">
<p className="text-xl lg:my-12 my-6 font-bold">My Role</p></div>
<p className="text-lg ">I worked as a senior engineer on this project on a close team that ranged from 12 to 22 total people. In that role I was fortunate to touch virtually all areas of the codebase and implemented many core gameplay, networking, and UI features. Although the client was built in Unity, gameplay was all implemented in pure C# and shared with the client and server, supporting custom networking and physics all built in house. Through close collaboration with the design team, I was able to bring crazy ideas like BattleBall, a 4v4 sports fight to the death, to reality for hundreds of thousands of users.</p>
<div className="flex justify-start w-full">
<p className="text-xl lg:my-12 my-6 font-bold">Project Difficulties</p></div>
<p>I had to solve countless problems only relevant to twitch real time multiplayer and matchmaking, as well as to a high performance game for a wide variety of platforms. I’m very proud that Armajet plays at a consistent 60 FPS on mid-range Android/iOS devices, and works well on slow or spotty internet due my work.</p>
     <div className="flex flex-col items-start w-full text-lg"> 
<p className="text-xl lg:py-12 py-6">Notable Features</p>
<p className="lg:pb-4 pb-2">Game mode synchronization on client and game server</p>
<p className="lg:pb-4 pb-2">Heavy optimization of UI, memory, and gameplay framerate</p>
<p className="lg:pb-4 pb-2">Flexible multi-platform input system</p>
<p className="lg:pb-4 pb-2">Party System</p>
<p className="lg:pb-4 pb-2">Real-time messaging and chat</p>
<p className="lg:pb-4 pb-2">Dozens of 3rd party integrations on iOS/Android/Steam</p>
<p className="lg:pb-4 pb-2">Proprietary Account Login</p>
<p className="lg:pb-4 pb-2">Level Creation And Design Tools
</p>
<p className="lg:pt-12 pt-8">Tetris Blitz has unfortunately since shut down, but it had a great 7 year run!</p>
     <p className="underline lg:pt-8 pt-4  lg:pb-12 pb-6">Official site</p>
     </div>
     </div>
     <div className="w-full">
     <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {imageData.map((data, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <Image
      src={data.imgUrl}
      width={500}
      height={500}
      alt="Picture of the author"
    />
          </motion.li>
        ))}
      </ul>
     </div>
        </div>
    );
}