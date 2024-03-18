import { For } from "~/components/home/for/For";
import { Hero } from "~/components/home/hero/Hero";
import { What } from "~/components/home/what/What";
import { Why } from "~/components/home/why/Why";

export default async function Home() {

  return (
    <>
    <Hero />
    <Why />
    <What />
    <For />
    </>
  );
}

