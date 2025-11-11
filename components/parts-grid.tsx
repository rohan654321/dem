"use client"

import type * as React from "react";
import Button from "@/components/UI/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/UI/Card";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type Part = {
  title: string
  description: string
  image: string
}

type PartsGridProps = {
  items?: Part[]
  primary?: string
  buttonText?: string
  viewMoreText?: string
  onPartClick?: (part: Part, index: number) => void
  onViewMoreClick?: () => void
}

export function PartsGrid({
  items = [
    {
      title: "Engine Assembly",
      description: "Quality used engines & transmission parts sold as complete assemblies with full testing.",
      image: "/images/Engine_Assembly.png",
    },
    {
      title: "Transmission Systems",
      description: "Complete transmission units and electronic control modules for smooth shifting.",
      image: "/images/transmission.png",
    },
    {
      title: "ABS Modules",
      description: "Anti-lock braking system components to ensure your safety on the road.",
      image: "/images/ABS Module.png",
    },
    {
      title: "Brake Systems",
      description: "Complete mechanical brake assemblies for reliable stopping power.",
      image: "/images/ABS System.png",
    },
    {
      title: "Suspension Knuckles",
      description: "Front spindle knuckles that securely attach suspension components.",
      image: "/images/spindle.png",
    },
    {
      title: "Lighting Assemblies",
      description: "Headlight assemblies for optimal visibility and road safety.",
      image: "/images/head_light_assembly.png",
    },
  ],
  primary = "oklch(0.60 0.16 255)",
  buttonText = "View Details",
  viewMoreText = "View All Parts",
  onPartClick = () => {},
  onViewMoreClick = () => {},
}: PartsGridProps) {
  const router = useRouter();

  const scopedStyle = {
    "--primary": primary,
    "--primary-foreground": "oklch(0.985 0 0)",
  } as React.CSSProperties;

  const goToHomeWithForm = (partType?: string) => {
    if (partType) sessionStorage.setItem("prefilledPart", partType);
    router.push("/");
    setTimeout(() => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) heroSection.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handlePartClick = (part: Part, index: number) => {
    onPartClick(part, index);
    goToHomeWithForm(part.title);
  };

  const handleKnowMoreClick = (part: Part, index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    onPartClick(part, index);
    goToHomeWithForm(part.title);
  };

  const handleViewMoreClick = () => {
    onViewMoreClick();
    goToHomeWithForm();
  };

  return (
    <section
      className="w-full px-4 py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white"
      style={scopedStyle}
      aria-labelledby="parts-grid-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.header
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="parts-grid-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quality Used Auto Parts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium recycled parts that undergo rigorous testing and quality checks.
          </p>
        </motion.header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Card
                className="h-full flex flex-col bg-white hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer border-0 shadow-sm rounded-none"
                onClick={() => handlePartClick(item, index)}
              >
                <CardContent className="flex flex-col h-full p-0">
                  {/* Main Content Row */}
                  <div className="flex flex-1">
                    {/* Image */}
                    <div className="w-1/3 min-w-[120px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 min-h-[140px]"
                      />
                    </div>

                    {/* Text Content and Button */}
                    <div className="flex-1 flex flex-col p-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {item.description}
                        </CardDescription>
                      </div>
                      
                      {/* Button aligned to right */}
                      <div className="flex justify-end mt-3">
                        <Button
                          size="sm"
                          className="bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 font-medium py-2 px-4  transition-all duration-300 text-sm min-w-[100px]"
                          onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleKnowMoreClick(item, index, e)}
                        >
                          {buttonText}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-6 py-2 text-sm font-semibold transition-all duration-300 rounded-lg"
            onClick={handleViewMoreClick}
          >
            {viewMoreText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default PartsGrid;