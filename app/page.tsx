"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { About } from "@/components/about"
import { Features } from "@/components/features"
import { Team } from "@/components/team"
import { Roadmap } from "@/components/roadmap"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section id="hero">
          <Hero />
        </section>
        <section id="problem">
          <Problem />
        </section>
        <section id="solution">
          <Solution />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="roadmap">
          <Roadmap />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="cta">
          <CTA />
        </section>
      </main>
      <Footer />
    </>
  )
}
