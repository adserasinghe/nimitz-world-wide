import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah L.",
      title: "CEO, Tech Innovators",
      quote: "Nimitz World Wide transformed our online presence. Their attention to detail and commitment to our vision was outstanding. We couldn't be happier with our new website!",
      avatar: "https://placehold.co/200x200.png",
      hint: "woman portrait"
    },
    {
      name: "Mike D.",
      title: "Founder, Urban Style Co.",
      quote: "The e-commerce site they built for us is a game-changer. Sales have increased by 40% since launch. The team was professional, responsive, and delivered on time.",
      avatar: "https://placehold.co/200x200.png",
      hint: "man portrait"
    },
    {
      name: "Jessica P.",
      title: "Marketing Director, HealthFirst",
      quote: "Their SEO expertise is unmatched. We went from being invisible on Google to ranking on the first page for our top keywords. Highly recommended!",
      avatar: "https://placehold.co/200x200.png",
      hint: "woman professional"
    },
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 animate-in fade-in-50 duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            We're proud to have built strong relationships with our clients. Here's what they think about our work.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card className="h-full flex flex-col justify-between p-6 shadow-lg">
                    <CardContent className="p-0 flex-grow">
                      <blockquote className="text-lg italic text-foreground mb-6">
                        “{testimonial.quote}”
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
