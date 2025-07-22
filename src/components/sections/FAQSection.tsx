import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqItems?: FAQItem[];
}

export default function FAQSection({ faqItems = [] }: FAQSectionProps) {
  const defaultFAQItems: FAQItem[] = [
    {
      question: "Какие документы нужны для утилизации?",
      answer: "Для утилизации ИТ-оборудования необходимы: список оборудования с указанием серийных номеров, документы, подтверждающие право собственности, доверенность на лицо, сдающее технику. Мы поможем оформить все документы правильно."
    },
    {
      question: "Сколько времени занимает процесс утилизации?",
      answer: "Стандартный процесс утилизации занимает от 3 до 7 рабочих дней с момента подачи заявки. Срочная утилизация возможна в течение 24 часов за дополнительную плату."
    },
    {
      question: "Предоставляете ли вы сертификаты об утилизации?",
      answer: "Да, мы предоставляем полный пакет документов: акт передачи оборудования, справку об утилизации, экологический сертификат. Все документы имеют юридическую силу и соответствуют требованиям законодательства РФ."
    },
    {
      question: "Какое оборудование вы принимаете на утилизацию?",
      answer: "Мы принимаем любое ИТ-оборудование: компьютеры, ноутбуки, серверы, принтеры, мониторы, сетевое оборудование, телефоны, планшеты и другую электронную технику. Работаем как с рабочим, так и с неисправным оборудованием."
    },
    {
      question: "Возможен ли выкуп оборудования?",
      answer: "Да, мы выкупаем рабочее ИТ-оборудование по справедливой цене. Оценка проводится бесплатно. В некоторых случаях стоимость выкупа может покрыть расходы на утилизацию неисправной техники."
    },
    {
      question: "Как обеспечивается безопасность данных?",
      answer: "Мы гарантируем полное уничтожение всех данных с носителей информации. Используем сертифицированные методы: физическое уничтожение HDD/SSD, многократная перезапись, размагничивание. Выдаем справку о гарантированном уничтожении данных."
    }
  ];

  const faqToDisplay = faqItems.length > 0 ? faqItems : defaultFAQItems;
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
            {faqToDisplay.map((item, index) => (
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