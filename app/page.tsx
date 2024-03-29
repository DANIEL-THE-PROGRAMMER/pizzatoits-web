'use client'

import { Gallery } from "./components/section/gallery";
import { Articles } from "./components/section/articles";
import { FurnitureSection } from "./components/section/furniture/components/f_section";

export default function Home() {
  return (
    <>
      <Gallery />
      <Articles />
      <FurnitureSection name="Bathroom furniture" number="001" video="" />
      <FurnitureSection name="Comfort Environment" number="002" video="" />
      <FurnitureSection name="Water Treatment" number="003" video="" />
      <FurnitureSection name="Plant engineering" number="004" video="" />
    </>
  );
}
