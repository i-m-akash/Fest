import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: ' How can I reach AIIMS Rishikesh?',
      answer:
        'AIIMS Rishikesh is easily accessible by road, rail, and air. The nearest airport is Jolly Grant Airport in Dehradun, approximately 20 km away, with regular flights from major cities. Rishikesh Railway Station is just 8 km from the institute, and taxis and auto-rickshaws are readily available. Additionally, buses from Delhi, Haridwar, and Dehradun connect directly to Rishikesh.'
,
    },
    {
        question: 'What fun activities can I do in Rishikesh?',
        answer:
          'Rishikesh offers a variety of activities for adventure seekers and nature lovers alike. You can enjoy white-water rafting on the Ganges, bungee jumping, or trekking in the nearby hills. Don’t miss visiting the iconic Laxman Jhula, attending yoga sessions by the river, or exploring the vibrant local markets.',
      },
      {
        question: 'How do I register for events at Pyrexia 4.0?',
        answer:
          'To register for events at Pyrexia 4.0, visit our official website where you’ll find the registration portal. Follow the instructions to sign up for individual or team events. Early registration is recommended as spots fill up quickly. Detailed schedules and event guidelines will also be provided on the website.',
      },
      {
        question: 'Will meals be provided during the festival?',
        answer:
          'Yes, there will be a variety of food stalls on campus offering meals throughout Pyrexia 4.0. You can enjoy a range of cuisines to keep you fueled for the events. Additionally, Rishikesh has numerous cafes and restaurants where you can explore local and international flavors.',
      },
      {
        question: 'How do I stay updated on Pyrexia 4.0 announcements?',
        answer:
          'Stay updated on all Pyrexia 4.0 announcements by following us on our official social media handle on instagram, @pyrexiaaiims and regularly checking the event website. We’ll be posting updates, schedules, and important information leading up to and during the festival. You can also subscribe to our newsletter for the latest news and event highlights.',
      },
  ];

  return (
    <div className="max-w-2xl mx-auto py-16 bg-black text-white">
      <h1 className="text-3xl font-semibold text-center mb-6">FAQ</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full text-left py-4 text-lg font-medium flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="py-2 text-gray-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
