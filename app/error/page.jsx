"use client";

import React, { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    const body = document.body;
    const stars = [];
    const createStar = () => {
      const right = Math.random() * 500;
      const top = Math.random() * window.innerHeight;
      const star = document.createElement("div");
      star.classList.add("star");
      body.appendChild(star);
      star.style.top = `${top}px`;
      stars.push({ element: star, right: right });
    };

    const moveStars = () => {
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        if (star.right >= window.innerWidth) {
          star.element.remove();
          stars.splice(i, 1);
        } else {
          star.right += 3;
          star.element.style.right = `${star.right}px`;
        }
      }
    };

    const createStarInterval = setInterval(createStar, 100);
    const moveStarsInterval = setInterval(moveStars, 10);

    return () => {
      clearInterval(createStarInterval);
      clearInterval(moveStarsInterval);
    };
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-t from-[#170d3c] to-[#050819] overflow-hidden ">
      <div className="absolute top-[25%] lg:top-[30%] text-white text-center transform scale-[1.5] md:scale-[2.5] lg:scale-[2.5]  font-tmrw uppercase z-10 ">
        <div className="text-4xl mb-6">ERROR</div>
        <h1 className="flex justify-evenly items-center text-6xl mb-6">
          4
          <span className="relative flex justify-center items-center mx-4 bg-white w-14 h-14 rounded-full shadow-lg">
            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></div>
          </span>
          4
        </h1>
        <hr className="mb-4 border-white border-1" />
        <div className="text-2xl">Page Not Found</div>
      </div>

      <div className="astronaut">
        <img
          alt="Astronaut"
          className="w-24 absolute animate-float mt-40"
          src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
          style={{
            animation: "astronautFly 6s infinite linear",
            position: "absolute",
          }}
        />
      </div>

      <style>
        {`
          @keyframes astronautFly {
            0% {
              left: -100px;
            }
            25% {
              top: 50%;
              transform: rotate(30deg);
            }
            50% {
              transform: rotate(45deg);
              top: 55%;
            }
            75% {
              top: 60%;
              transform: rotate(30deg);
            }
            100% {
              left: 110%;
              transform: rotate(45deg);
            }
          }
          @keyframes starTwinkle {
            0% {
              background: rgba(255, 255, 255, 0.4);
            }
            25% {
              background: rgba(255, 255, 255, 0.8);
            }
            50% {
              background: rgba(255, 255, 255, 1);
            }
            75% {
              background: rgba(255, 255, 255, 0.8);
            }
            100% {
              background: rgba(255, 255, 255, 0.4);
            }
          }
          .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: #fff;
            right: 0;
            animation: starTwinkle 3s infinite linear;
          }
        `}
      </style>
    </div>
  );
};

export default NotFoundPage;

