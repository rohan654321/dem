// app/faq/page.js
'use client';
import { motion } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';

const faqCategories = [
  {
    title: 'General Questions',
    questions: [
      {
        question: 'What types of auto parts do you sell?',
        answer: 'We specialize in used engines, transmissions, and major automotive components. All parts are OEM-tested and come with a 90-day warranty.'
      },
      {
        question: 'How do I know if a part will fit my vehicle?',
        answer: 'You can use our compatibility checker or contact our experts with your vehicle VIN number for guaranteed fitment.'
      },
      {
        question: 'Do you offer installation services?',
        answer: 'We specialize in parts sales only, but we can recommend trusted installation partners in your area.'
      }
    ]
  },
  {
    title: 'Shipping & Delivery',
    questions: [
      {
        question: 'How long does shipping take?',
        answer: 'Most orders ship within 2-3 business days and arrive in 3-5 days via our nationwide carriers.'
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Currently, we only ship within the United States and Canada.'
      },
      {
        question: 'Can I track my order?',
        answer: 'Yes, you\'ll receive tracking information via email once your order ships.'
      }
    ]
  },
  {
    title: 'Warranty & Returns',
    questions: [
      {
        question: 'What does the 90-day warranty cover?',
        answer: 'Our warranty covers manufacturing defects and functional failures. Normal wear and tear are not covered.'
      },
      {
        question: 'How do I return a part?',
        answer: 'Contact our support team within 30 days of delivery to initiate a return. Parts must be in original condition.'
      },
      {
        question: 'What if the part doesn\'t fit my vehicle?',
        answer: 'We offer free returns within 30 days if the part is incompatible with your vehicle (verified by VIN).'
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-secondary pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              FAQ
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Find answers to common questions about our parts, shipping, warranty, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openItems[key];
                    
                    return (
                      <motion.div
                        key={key}
                        className="border border-gray-200 rounded-2xl overflow-hidden"
                        whileHover={{ y: -2 }}
                      >
                        <button
                          onClick={() => toggleItem(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-all"
                        >
                          <h3 className="text-lg font-semibold text-primary pr-4">
                            {item.question}
                          </h3>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="text-primary flex-shrink-0" size={20} />
                          </motion.div>
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-16 p-8 bg-primary rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-gray-300 mb-6">
                Our support team is here to help you find the answers you need.
              </p>
              <button
                onClick={() => window.location.href = '/contact'}
                className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Contact Support
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}