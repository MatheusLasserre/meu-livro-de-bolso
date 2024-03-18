import { Budget } from "~/components/home/budget/Budget";
import { Footer } from "~/components/home/footer/Footer";
import { For } from "~/components/home/for/For";
import { Founders } from "~/components/home/founders/Founders";
import { Hero } from "~/components/home/hero/Hero";
import { Showcase } from "~/components/home/showcase/Showcase";
import { What } from "~/components/home/what/What";
import { Why } from "~/components/home/why/Why";

export default async function Home() {

  return (
    <>
    <Hero />
    <Why />
    <What />
    <For />
    <Showcase />
    <Budget />
    <Founders />
    <Footer />
    </>
  );
}

