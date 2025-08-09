'use client'

import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div>
    <Navbar/>
    <Header />
    </div>
  );
}
