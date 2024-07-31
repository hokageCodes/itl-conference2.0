"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const faqs = [
  { question: "What is the Internationally Trained Lawyers Conference?", answer: "The ITL Conference is the largest gathering of Internationally Trained Lawyers (ITLs) in Canada. The Conference will feature different legal professionals, regulators, change makers, and other stakeholders committed to supporting ITLs in their legal practice journey in Canada. The ITL Conference is a joint effort of our partner organizations: The ITL Network and Global Lawyers of Canada." },
  { question: "When and where will the ITL Conference take place?", answer: "The ITL Conference has been scheduled to hold between April 3-5, 2025 in the city of Calgary, Alberta." },
  { question: "Who should attend the ITL Conference?", answer: "The conference is opened to internationally trained lawyers, students, legal educators, employers, recruiters, equity seeking groups and other legal professionals." },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div layout onClick={toggleOpen} className="cursor-pointer border-b-2 py-4">
      <motion.div layout initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }} className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-textPrimary">{question}</h4>
        <motion.span className="text-lg text-textPrimary">
          {isOpen ? '−' : '+'}
        </motion.span>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-textDark"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqSection = () => {
  return (
    <div className="bg-white text-textPrimary container mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold pt-12 text-textPrimary">Learn More About The ITL Conference</h2>
          <p className='max-w-[500px] text-textDark'>Welcome to the FAQ section. Here, you will find answers to common questions about the ITL Conference, registration process, event details, and more. Explore the information to get the most out of your conference experience.</p>
        </div>
        <div className="lg:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} {...faq} />
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link legacyBehavior href="/faqs">
          <a className="inline-block bg-ctaBg text-white hover:bg-ctaHover rounded font-bold py-2 px-4 transition-colors duration-300 mt-[30px]">
            See All Questions
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FaqSection;
