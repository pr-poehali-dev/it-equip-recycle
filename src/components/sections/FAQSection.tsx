import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqItems: FAQItem[];
}

export default function FAQSection({ faqItems }: FAQSectionProps) {
  return (
    <section id="faq" className="py-20 bg-professional-rolexCream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-4">Часто задаваемые вопросы</h2>
          <p className="premium-body text-gray-700 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы об утилизации ИТ-оборудования
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 premium-body pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}