import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What services does WOW Global Studies offer?",
        answer: "We offer a comprehensive range of visa and immigration consultancy services. This includes university shortlisting, student visas, PR applications, interview preparation, financial aid guidance, and post-arrival assistance."
    },
    {
        question: "Which countries do you help students apply to?",
        answer: "We partner with institutions across 20+ countries worldwide. Our primary expertise covers major educational destinations including the USA, Canada, UK, Australia, New Zealand, and Germany."
    },
    {
        question: "How long does the visa application process take?",
        answer: "Processing times vary significantly depending on the destination country and visa type, typically ranging from a few weeks to several months. Our experts ensure your application is flawless to prevent unnecessary delays."
    },
    {
        question: "Do you provide coaching for tests like IELTS or GRE?",
        answer: "Yes, we provide dedicated coaching for a wide range of proficiency and standardized tests. Our experienced tutors offer training for IELTS, GRE, PTE, Duolingo, SAT, and TOEFL-IBT."
    },
    {
        question: "Are there any hidden charges in your consultancy fees?",
        answer: "Absolutely not. We believe in 100% transparency. Our service packages and consultation fees are discussed completely upfront before we begin the process, with no hidden costs."
    }
];

const FAQ = () => {
    return (
        <section className="py-[80px] min-[820px]:py-[120px] px-[20px] min-[820px]:px-[60px] bg-white">
            <div className="max-w-[1200px] mx-auto flex flex-col min-[820px]:flex-row gap-[60px] min-[820px]:gap-[100px] items-start">
                
                {/* Left Side: Heading (approx 40%) */}
                <div className="w-full min-[820px]:w-[35%] min-[820px]:sticky min-[820px]:top-[120px]">
                    <h2 className="font-sans font-bold text-[36px] min-[820px]:text-[52px] leading-[1.1] text-[#161616] tracking-[-1px] mb-[30px]">
                        Frequently Asked Questions<br />
                        <span className="text-[#c026d3] font-medium">find your answers here!</span>
                    </h2>
                </div>

                {/* Right Side: Accordion (approx 65%) */}
                <div className="w-full min-[820px]:w-[65%]">
                    <Accordion type="single" collapsible defaultValue="item-0">
                        {faqs.map((faq, index) => (
                            <AccordionItem 
                                key={index} 
                                value={`item-${index}`}
                                className="border-b border-[#f0eaf2] last:border-b-0"
                            >
                                <AccordionTrigger className="w-full flex justify-between items-center py-[24px] text-left group/accordion-trigger font-quicksand font-bold text-[17px] min-[820px]:text-[19px] pr-[30px] transition-colors duration-300 text-[#161616] group-hover/accordion-trigger:text-[#c026d3] group-aria-expanded/accordion-trigger:text-[#c026d3] hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                
                                <AccordionContent className="pb-[24px]">
                                    <p className="text-[15px] min-[820px]:text-[16px] leading-[1.7] text-[#767676] pr-[20px] min-[820px]:pr-[60px]">
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
