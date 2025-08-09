'use client'

import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div>
    <Navbar/>
    <Header />
    <About/>
    </div>
  );
}
