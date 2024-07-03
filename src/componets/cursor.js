import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const ballRef = useRef(null);
  const dotRef = useRef(null);

  let mouse = { x: 0, y: 0 };
  let pos = { x: 0, y: 0 };
  let dotPos = { x: 0, y: 0 };
  const ratio = 0.15;
  const sensitivity = 0.15;

  useEffect(() => {
    const mouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    document.addEventListener('mousemove', mouseMove);

    const updatePosition = () => {
      dotPos.x += (mouse.x - dotPos.x) * ratio;
      dotPos.y += (mouse.y - dotPos.y) * ratio;
      gsap.set(dotRef.current, { x: dotPos.x, y: dotPos.y });

      pos.x += (dotPos.x - pos.x) * sensitivity;
      pos.y += (dotPos.y - pos.y) * sensitivity;
      gsap.set(ballRef.current, { x: pos.x, y: pos.y });
    };

    const ticker = () => {
      updatePosition();
      requestAnimationFrame(ticker);
    };
    ticker();

    return () => {
      document.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  useEffect(() => {
    const ballElement = ballRef.current;
    const dotElement = dotRef.current;

    const handleMouseMove = () => {
      const bgColor = getComputedStyle(document.body).backgroundColor;
      const invertedColor = invertColor(bgColor);

      ballElement.style.borderColor = invertedColor;
      dotElement.style.backgroundColor = invertedColor;
    };

    const invertColor = (color) => {
      if (!color) return '#000';
      const hexToRgb = (hex) =>
        hex.match(/[A-Za-z0-9]{2}/g).map((v) => parseInt(v, 16));
      const invertedRgb = hexToRgb(color)
        .map((v) => 255 - v)
        .join(',');
      return `rgb(${invertedRgb})`;
    };

    handleMouseMove();

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="magic-cursor">
      <div id="dot" ref={dotRef}></div>
      <div id="ball" ref={ballRef}></div>
    </div>
  );
};

export default Cursor;
