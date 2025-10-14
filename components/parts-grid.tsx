"use client"

import type * as React from "react";
import Button from "@/components/UI/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/UI/Card";
import { motion } from "framer-motion";

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
      image: "/images/OIP.jpg",
    },
    {
      title: "Transmission Systems",
      description: "Complete transmission units and electronic control modules for smooth shifting.",
      image: "/images/OIP.jpg",
    },
    {
      title: "ABS Modules",
      description: "Anti-lock braking system components to ensure your safety on the road.",
      image: "/images/OIP.jpg",
    },
    {
      title: "Brake Systems",
      description: "Complete mechanical brake assemblies for reliable stopping power.",
      image: "/images/OIP.jpg",
    },
    {
      title: "Suspension Knuckles",
      description: "Front spindle knuckles that securely attach suspension components.",
      image: "/images/OIP.jpg",
    },
    {
      title: "Lighting Assemblies",
      description: "Headlight assemblies for optimal visibility and road safety.",
      image: "/images/OIP.jpg",
    },
  ],
  primary = "oklch(0.60 0.16 255)",
  buttonText = "View Details",
  viewMoreText = "View All Parts",
  onPartClick = () => {},
  onViewMoreClick = () => {},
}: PartsGridProps) {
  const scopedStyle = {
    "--primary": primary,
    "--primary-foreground": "oklch(0.985 0 0)",
  } as React.CSSProperties;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const handlePartClick = (part: Part, index: number) => {
    onPartClick(part, index);
  };

  const handleKnowMoreClick = (part: Part, index: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent card click from triggering
    onPartClick(part, index);
  };

  return (
    <section
      className="w-full px-4 py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white"
      style={scopedStyle}
      aria-labelledby="parts-grid-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.header 
          className="mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            id="parts-grid-heading" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Quality Used Auto Parts
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Premium recycled parts that undergo rigorous testing and quality checks
          </p>
        </motion.header>

        {/* Parts Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card 
                className="h-full group cursor-pointer border border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all duration-300 bg-white overflow-hidden"
                onClick={() => handlePartClick(item, index)}
              >
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={`${item.title} image`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="space-y-3">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[var(--primary)] transition-colors duration-300">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed text-base">
                        {item.description}
                      </CardDescription>
                    </div>
                    
                    {/* Button */}
                    <div className="mt-6">
                      <Button 
                        size="sm" 
                        className="w-full bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 hover:shadow-md transition-all duration-300 border-none"
                        onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleKnowMoreClick(item, index, e)}
                      >
                        {buttonText}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-8 py-3 text-base font-semibold transition-all duration-300"
            onClick={onViewMoreClick}
          >
            {viewMoreText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default PartsGrid;