
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import RecentBlogPosts from "@/components/sections/RecentBlogPosts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home | Nimitz World Wide",
    description: "Welcome to Nimitz World Wide. We are a professional web development agency specializing in creating custom websites, e-commerce platforms, and SEO strategies that drive results.",
};


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <RecentBlogPosts />
      <Contact />
    </>
  );
}
