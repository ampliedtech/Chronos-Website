"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ankit Nautiyal",
    company: "Teeoff Technologies",
    role: "CEO & Founder",
    content: "Ikigaii Digital Solution's digital transformation solutions have been transformative for our AI solutions company. Their ongoing partnership has enabled us to develop cutting-edge AI and AR technologies while maintaining focus on innovation. The dedicated team approach and predictable costs have been game-changers for our growth.",
    rating: 5,
    avatar: "/avatars/ankit.jpg",
    industry: "Artificial Intelligence"
  },
  {
    name: "Ankur Singh",
    company: "Witzeal Technologies",
    role: "CEO & Founder",
    content: "Ikigaii Digital Solution's digital transformation solutions have been instrumental in supporting our real money gaming platform. Their ongoing partnership helped us scale to 50+ million users across 20+ games while maintaining robust infrastructure. The dedicated team approach and continuous optimization have been crucial for our success in the competitive gaming market.",
    rating: 5,
    avatar: "/avatars/ankur.jpg",
    industry: "Gaming Technology"
  }
];

export default function Testimonials() {

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-brand-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-primary/3 to-brand-secondary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative space-y-16">
        {/* Header Section */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-brand-primary font-medium text-sm">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Client Testimonials
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            What Our Clients Say
          </h2>
          
          <p className="text-xl text-orange-300 max-w-4xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders have to say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white backdrop-blur-sm group-hover:scale-102 group-hover:-translate-y-1">
                <CardContent className="p-8 space-y-6 relative overflow-hidden flex flex-col justify-between h-full">
                  {/* Decorative background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-full -translate-y-16 translate-x-16"></div>
                  
                  {/* Quote icon with enhanced styling */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <Quote className="h-8 w-8 text-white" />
                  </div>

                  {/* Industry badge */}
                  <div className="inline-block  text-brand-primary text-xs font-semibold ">
                    <div className="bg-brand-primary/10 px-3 py-1 rounded-full">{testimonial.industry}</div>
                  </div>


                  {/* Content with improved typography */}
                  <blockquote className="text-brand-secondary leading-relaxed text-lg relative">
                    <span className="text-6xl text-brand-primary/20 absolute -top-4 -left-2 font-serif">&ldquo;</span>
                    <span className="relative z-10 pl-6 text-black">{testimonial.content}</span>
                  </blockquote>

                  {/* Author section with enhanced design */}
                  <div className="flex items-center space-x-4 pt-6 border-t border-brand-secondary/10  mt-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-primary border-2  border-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg overflow-hidden relative">
                        <Image 
                          src={testimonial.avatar} 
                          alt={`${testimonial.name} avatar`}
                          width={64}
                          height={64}
                          className="object-cover rounded-2xl"
                          priority={index < 2}
                        />
                      </div>
                      {/* <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div> */}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-text text-lg text-black">
                        {testimonial.name}
                      </div>
                      <div className="text-brand-secondary font-medium text-black">
                        {testimonial.role}
                      </div>
                      <div className="text-brand-primary font-semibold text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20  bg-black/50 rounded-2xl py-8 "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-2 ">
            <div className="text-4xl font-bold text-brand-primary" style={{ color: '#ffffff' }}>100%</div>
            <div className="text-brand-secondary font-medium" style={{ color: '#ffffff' }}>Client Satisfaction</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-brand-primary" style={{ color: '#ffffff' }}>50+</div>
            <div className="text-brand-secondary font-medium" style={{ color: '#ffffff' }}>Successful Projects</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-brand-primary" style={{ color: '#ffffff' }}>4.9</div>
            <div className="text-brand-secondary font-medium" style={{ color: '#ffffff' }}>Average Rating</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
