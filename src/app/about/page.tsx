import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building, Target, Users } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    title: "Founder & CEO",
    avatar: "https://placehold.co/100x100.png",
    hint: "man professional portrait"
  },
  {
    name: "Jane Smith",
    title: "Lead Developer",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman developer portrait"
  },
  {
    name: "Peter Jones",
    title: "UI/UX Designer",
    avatar: "https://placehold.co/100x100.png",
    hint: "man designer portrait"
  },
  {
    name: "Mary Johnson",
    title: "Marketing Specialist",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman marketing portrait"
  }
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="About Us"
          fill
          className="z-0 object-cover"
          data-ai-hint="team collaboration"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container relative z-20 mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              About Nimitz World Wide
            </h1>
            <p className="text-lg text-gray-300 md:text-xl">
              Home / About
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <Image src="https://placehold.co/600x400.png" alt="Our Story" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="office history"/>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Crafting Digital Excellence Since 2015
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Nimitz World Wide was founded with a simple yet powerful mission: to help businesses thrive in the digital landscape. What started as a small team of passionate developers has grown into a full-service agency dedicated to creating beautiful, functional, and high-performing web solutions.
              </p>
              <p className="text-muted-foreground md:text-xl">
                We believe in the power of technology to solve problems and create opportunities. Our journey has been one of continuous learning, adaptation, and a relentless pursuit of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center space-y-4">
                  <div className="inline-block rounded-full bg-primary/10 p-4">
                      <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline">Our Mission</h3>
                  <p className="text-muted-foreground">
                      To empower our clients by creating innovative and effective web solutions that drive growth, enhance their brand, and provide a competitive edge in the market.
                  </p>
              </div>
              <div className="text-center space-y-4">
                   <div className="inline-block rounded-full bg-primary/10 p-4">
                      <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline">Our Vision</h3>
                  <p className="text-muted-foreground">
                      To be a leading web development agency recognized for our creativity, quality, and commitment to client success, shaping the future of digital interaction one project at a time.
                  </p>
              </div>
              <div className="text-center space-y-4 md:col-span-2 lg:col-span-1">
                   <div className="inline-block rounded-full bg-primary/10 p-4">
                      <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline">Our Values</h3>
                  <p className="text-muted-foreground">
                    Innovation, Quality, Integrity, Collaboration, and Client-Centricity are the pillars that guide every decision we make and every line of code we write.
                  </p>
              </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              The passionate individuals behind our success.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                  <p className="text-primary">{member.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mb-4">
                Let's Create Together
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-8">
                Have an idea for your next project? We're here to help you turn it into reality.
            </p>
            <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in Touch</Link>
            </Button>
            </div>
        </section>
    </div>
  );
}
