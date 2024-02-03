"use client";

import styled from "styled-components";

export const Cursor = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  width: 10px;
  height: 10px;
  background: #184dc4;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  &.link {
    width: 100px;
    height: 100px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background: hsla(0, 0%, 100%, 0.7);
    border-radius: 10rem;
    border: 1px solid var(--c-accent);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.5s cubic-bezier(0.19, 1, 0.22, 1),
      color 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    width: -moz-fit-content;
    cursor: none;
  }
  &.section {
    padding: 25px;
    border: 1px solid #184dc4;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background: hsla(0, 0%, 100%, 0.7);
    border-radius: 10rem;
    min-width: 200px;
    text-align: center;
  }
  &.collab {
    width: 350px;
    height: 250px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background: hsla(0, 0%, 100%, 0.7);
    text-align: center;
    line-height: 400px;
    border-radius: 20px;
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1),
    color 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
`;
