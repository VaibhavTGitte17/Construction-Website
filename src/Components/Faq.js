import React, { useState } from 'react';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: 'What services does Vaibhav Construction offer?', answer: 'Vaibhav Construction offers a range of services including residential and commercial construction, renovation, and project management. We specialize in delivering high-quality results tailored to your needs.' },
    { question: 'How can I get a quote for my project?', answer: 'You can get a quote by contacting us through our website or by calling our office. We will schedule a consultation to discuss your project requirements and provide a detailed estimate based on your needs.' },
    { question: 'What is the typical timeline for a construction project?', answer: 'The timeline for a construction project varies depending on the size and complexity of the project. Typically, we provide a detailed timeline during the initial consultation to ensure transparency and proper planning.' },
    { question: 'Do you offer any guarantees for your work?', answer: 'Yes, we offer a warranty on our workmanship to ensure that you are satisfied with the final result. Our goal is to provide high-quality construction services that meet your expectations.' },
    { question: 'Can I make changes to the project after it has started?', answer: 'Yes, we can accommodate changes during the project, though it may affect the timeline and cost. We will work with you to make sure any adjustments are handled smoothly and efficiently.' },
    { question: 'How do you handle project delays?', answer: 'We strive to adhere to the project timeline, but in case of delays, we will communicate with you promptly and provide solutions to get back on track. We aim to minimize any impact on your project.' },
    { question: 'What sets Vaibhav Construction apart from other companies?', answer: 'Vaibhav Construction stands out due to our commitment to quality, attention to detail, and customer satisfaction. Our experienced team ensures that every project is completed to the highest standards, exceeding client expectations.' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg">
            <button
              className="w-full px-4 py-2 text-left bg-gray-200 border-b flex justify-between items-center focus:outline-none"
              onClick={() => toggle(index)}
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-2 bg-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
