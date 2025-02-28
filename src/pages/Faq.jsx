import React from 'react'

export default function Faq() {
  const bloodDonationFAQs = [
    { id: 1, question: "Who can donate blood?", answer: "Generally, healthy individuals aged 18-65 and weighing at least 50 kg can donate blood." },
    { id: 2, question: "How often can I donate blood?", answer: "You can donate whole blood every 12 weeks (for men) and every 16 weeks (for women)." },
    { id: 3, question: "Is blood donation safe?", answer: "Yes, blood donation is safe. Sterile equipment is used, and there is no risk of infection." },
    { id: 4, question: "How long does the blood donation process take?", answer: "The whole process takes about 30-45 minutes, while the actual donation takes 10-15 minutes." },
    { id: 5, question: "Do I need to prepare before donating blood?", answer: "Yes, eat a healthy meal, stay hydrated, and avoid alcohol or caffeine before donating." },
    { id: 6, question: "Can I donate blood if I have a tattoo or piercing?", answer: "Yes, but you may need to wait 6-12 months after getting a tattoo or piercing, depending on regulations." },
    { id: 7, question: "What happens after I donate blood?", answer: "You will rest for a few minutes, have a snack, and can resume normal activities while avoiding heavy lifting for a few hours." },
    { id: 8, question: "Can I donate blood if I take medication?", answer: "It depends on the medication. Consult a doctor or blood donation center for eligibility." },
    { id: 9, question: "Does blood donation hurt?", answer: "You may feel a slight pinch when the needle is inserted, but the process is generally painless." },
    { id: 10, question: "What are the benefits of donating blood?", answer: "It helps save lives, improves heart health, reduces iron levels, and gives a sense of fulfillment." }
  ];
  return (
    <div>
      <h1 className='display-3 p-3 text-danger container fw-bolder'>Frequently asked question</h1>
      <div className='container'>
        {
          bloodDonationFAQs.map((question)=>(
            <div>
              <div className='q d-flex justify-content-between'>
                <h4 className='  display-6 text-danger'>{question.question}</h4>
                <button className='btn' data-bs-toggle="collapse" data-bs-target={`#${question.id}`}>&#x2b;</button>
              </div>
              <div className='collapse' id={question.id}>
                <p>{question.answer}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
