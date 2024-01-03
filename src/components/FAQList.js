// FAQList.js
import React from 'react';
import FAQItem from './FAQItem';

const FAQList = () => {
  const faqData = [
    {
      question: 'Who all can register?',
      answer: "If you love to code, you are more than welcome to participate in the hackathon. The event is live on Unstop. We request all VIT participants to also register on the VTOP portal.",
    },
    {
      question: 'How big can a team be? ',
      answer: "Up to 4 people large! Pro Tip: Aim to have a mix of people with both design and developer skills.",
    },
    {
      question: 'Do I keep working throughout the event',
      answer: "Of course not. We have numerous fun-filled mini-events in the bag for you. Stay tuned to our social media handles for detailed updates on the mini-events.",
    },
    {
      question: 'Am I allowed to collaborate with participants from different colleges?',
      answer: "Offline participants are to exclusively team up with VITians, while others can have open collaborations."
    },
    {
      question: 'Can I bring my previous project to the hackathon?',
      answer: "We apologize, but all hackathon's projects should be developed during the event from scratch. We want honest conditions for all hackers. That's why all code should be done during the hackathon.",
    },
    {
      question: 'I am a newbie, can I hack?',
      answer: "Of course, you can! We at Technica ensure that no one is left behind during the hacking, thanks to our mentors and volunteers who help us achieve the same. We make sure that you learn the best you can alongside having fun and experiencing what it feels to belong to a community.",
    },
    {
      question: 'Do I need to give a demo for the product that I have built?',
      answer: "If you want you can submit a small presentation or video that demos your submission, however it's not mandatory, and only good to have. In case you are one of the winners, you might be invited to demo your application at a physical event, details of which will be shared with sufficient advance notice.",
    },
    {
      question: 'Are these the only themes/tracks for the hackathon?',
      answer: "We never want to limit your innovation. Under the category of Open Innovation, you can work on any project of your choice which can be of any theme.",
    },
    {
      question: 'If it is a team submission, does that mean all team members will have access to work at the same time? ',
      answer: "Yes, all team members can login from their account and do application submission on Unstop"
    },
    
    
  ];

  const halfLength = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, halfLength);
  const rightColumn = faqData.slice(halfLength);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-36 md:mx-40">
      <div className=''>
        {leftColumn.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div>
        {rightColumn.map((faq, index) => (
          <FAQItem key={index + halfLength} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQList;