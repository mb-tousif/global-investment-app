import CountDown from "@/components/CountDown";
import Description from "@/components/Description";
import HeroSection from "@/components/HeroSection";
import InvestPlan from "@/components/InvestPlan";
import Subscribe from "@/components/Subscribe";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <Description />
      <InvestPlan />
      <Subscribe />
    </section>
  );
}
