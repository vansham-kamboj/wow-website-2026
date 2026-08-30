import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const defaultFaqs = [
    {
        question: "How do you help me start my journey?",
        answer: "We don't just hand you a checklist. From the moment you walk through our doors, we help you shape your entire story, from choosing the perfect university and crafting a flawless visa application, all the way to landing safely abroad."
    },
    {
        question: "Which chapters of the world can I explore with you?",
        answer: "We've built pathways to over 20+ countries. Whether you're dreaming of the bustling campuses in the USA and UK, or the welcoming communities of Canada, Australia, and Germany, we'll help you write your next chapter there."
    },
    {
        question: "How long does the visa process take?",
        answer: "Every journey has its own timeline. While it depends on your chosen destination, it generally takes a few weeks to several months. But don't worry, our certified experts ensure your documentation is flawless to avoid any unnecessary detours."
    },
    {
        question: "Will you help me clear my English proficiency tests?",
        answer: "Absolutely! We know standardized tests can feel like a tough hurdle. That's why our dedicated coaches provide comprehensive training for IELTS, GRE, PTE, Duolingo, SAT, and TOEFL to make sure you cross the finish line with confidence."
    },
    {
        question: "Are there any hidden plot twists in your pricing?",
        answer: "None at all. We believe in 100% transparency. Every cost and consultation fee is discussed upfront, so there are no surprises, just clear steps toward your success."
    }
];

const FAQ = ({ data }) => {
    const faqList = data || defaultFaqs;
    
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqList.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
    
    return (
        <section className="py-[80px] lg:py-[120px] px-[20px] lg:px-[60px] bg-white">
            <Helmet>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            </Helmet>
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[60px] lg:gap-[100px] items-start">
                
                {/* Left Side: Heading (approx 40%) */}
                <div className="w-full lg:w-[35%] lg:sticky lg:top-[120px]">
                    <h2 className="font-sans font-bold text-[28px] lg:text-[52px] leading-[1.1] text-[#161616] tracking-[-1px] mb-[30px]">
                        Frequently Asked Questions<br />
                        <span className="text-primary font-medium">find your answers here!</span>
                    </h2>
                </div>

                {/* Right Side: Accordion (approx 65%) */}
                <div className="w-full lg:w-[65%]">
                    <Accordion type="single" collapsible defaultValue="item-0">
                        {faqList.map((faq, index) => (
                            <AccordionItem 
                                key={index} 
                                value={`item-${index}`}
                                className="border-b border-[#f0eaf2] last:border-b-0"
                            >
                                <AccordionTrigger className="w-full flex justify-between items-center py-[24px] text-left group/accordion-trigger font-bold text-[17px] lg:text-[19px] pr-[30px] transition-colors duration-300 text-[#161616] group-hover/accordion-trigger:text-primary group-aria-expanded/accordion-trigger:text-primary hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                
                                <AccordionContent className="pb-[24px]">
                                    <p className="text-[15px] lg:text-[16px] leading-[1.7] text-[#767676] pr-[20px] lg:pr-[60px]">
                                        {faq.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

            </div>
        </section>
    );
};

export default FAQ;
