'use client'

import NavModal from "@/components/NavModal";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import React, { useState } from "react";


export default function Home() {
  const [navModalOpen, setNavModalOpen] = useState(false)

  return (
    <>
     <NavModal navModalOpen={navModalOpen} setNavModalOpen={setNavModalOpen}/>
      <Header navModalOpen={navModalOpen} setNavModalOpen={setNavModalOpen}/>
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
