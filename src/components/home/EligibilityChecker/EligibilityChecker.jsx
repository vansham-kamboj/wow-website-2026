import React, { useState } from 'react';
import { ArrowLeft, Phone, PhoneCall } from 'lucide-react';
import Card from '@/components/common/Card';
import { Button } from '@/components/ui/button';
import api from '@/services/api';

const questions = [
  {
    title: "Which country are you planning for?",
    options: [
      { label: "USA", points: 0 },
      { label: "Canada", points: 0 },
      { label: "UK", points: 0 },
      { label: "Australia", points: 0 },
      { label: "New Zealand", points: 0 },
      { label: "Germany", points: 0 }
    ]
  },
  {
    title: "What is your highest qualification?",
    options: [
      { label: "Completed 12th grade", points: 15 },
      { label: "Bachelor's degree", points: 20 },
      { label: "Master's degree", points: 25 }
    ]
  },
  {
    title: "Have you taken an English proficiency test?",
    options: [
      { label: "Not yet", points: 10 },
      { label: "Yes, band 6 to 6.5 or equivalent", points: 18 },
      { label: "Yes, band 7 or above or equivalent", points: 25 }
    ]
  },
  {
    title: "Do you have funds ready to show for tuition and living costs?",
    options: [
      { label: "Not arranged yet", points: 8 },
      { label: "Partially arranged", points: 18 },
      { label: "Fully arranged or have a sanctioned loan", points: 30 }
    ]
  },
  {
    title: "Do you have any backlogs or gap years in your education?",
    options: [
      { label: "No backlogs or gaps", points: 20 },
      { label: "One or two backlogs or a short gap", points: 12 },
      { label: "Multiple backlogs or a long gap", points: 5 }
    ]
  }
];

const EligibilityChecker = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [phone, setPhone] = useState('');
  const [submissionState, setSubmissionState] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleSelectOption = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = option;
    setAnswers(newAnswers);
    
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setPhone('');
    setSubmissionState('idle');
    setErrorMsg('');
  };

  const calculateScore = () => {
    return answers.reduce((total, answer) => total + (answer?.points || 0), 0);
  };

  const getResultBand = (score) => {
    if (score >= 75) {
      return {
        label: "Strong Match",
        headline: "You're in a Strong Position",
        subtext: "Your profile lines up well with what visa officers look for. Let's make sure every document backs that up."
      };
    } else if (score >= 50) {
      return {
        label: "Needs Some Work",
        headline: "You're On the Right Track",
        subtext: "A few gaps in your profile could slow things down. Nothing that can't be fixed with the right guidance."
      };
    } else {
      return {
        label: "Let's Build Your Case Together",
        headline: "This Needs a Real Conversation",
        subtext: "Your profile has real challenges right now, but plenty of students in a similar spot have turned it around with the right plan."
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone) return;

    setSubmissionState('submitting');
    setErrorMsg('');
    const score = calculateScore();

    const notes = `Qualification: ${answers[1]?.label}, English: ${answers[2]?.label}, Funds: ${answers[3]?.label}, Backlogs: ${answers[4]?.label}, Score: ${score}/100`;

    try {
      await api.post('/leads', {
        name: "Eligibility Checker Lead",
        phone: phone,
        country_interested: answers[0]?.label || "Not specified",
        source: "eligibility_checker",
        notes: notes
      });
      setSubmissionState('success');
    } catch (err) {
      console.error(err);
      setSubmissionState('error');
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  const renderQuestion = () => {
    const question = questions[currentStep];
    const progress = ((currentStep) / questions.length) * 100;

    return (
      <div className="flex flex-col h-full">
        {/* Header Strip */}
        <div className="bg-gradient-to-r from-primary to-purple-500 rounded-t-[20px] px-5 py-4 relative text-white">
          <div className="flex items-center justify-between">
            {currentStep > 0 ? (
              <button onClick={handleBack} className="text-white hover:text-white/80 transition-colors" aria-label="Go back">
                <ArrowLeft size={20} />
              </button>
            ) : (
              <div className="w-5"></div> /* Placeholder for alignment */
            )}
            <span className="font-bold text-white text-[14px]">Check Your Visa Chances in 30 Seconds</span>
            <div className="w-5"></div> {/* Placeholder */}
          </div>
          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20">
            <div className="h-full bg-white transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        {/* Question Area */}
        <div className="p-5 flex-1 flex flex-col justify-center">
          <h3 className="text-[18px] font-bold text-[#161616] mb-5 text-center leading-[1.3]">{question.title}</h3>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(option)}
                className="bg-[#f8f5fa] hover:bg-primary text-[#444] hover:text-white transition-all px-4 py-2.5 rounded-full text-[14px] font-medium text-left"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderResult = () => {
    const score = calculateScore();
    const band = getResultBand(score);

    if (submissionState === 'success') {
      return (
        <div className="flex flex-col items-center justify-center p-8 text-center h-full">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <PhoneCall size={32} className="text-green-600" />
          </div>
          <h3 className="text-[20px] font-bold text-[#161616] mb-2">Thanks!</h3>
          <p className="text-[15px] text-[#555] mb-6">One of our counsellors will call you within 24 hours with your full report.</p>
          <button onClick={handleReset} className="text-primary font-medium hover:underline text-[14px]">
            Retake Quiz
          </button>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center p-6 text-center h-full justify-between">
        <div className="mb-4 w-full">
          <h3 className="text-[20px] font-bold text-[#161616] mb-1 leading-[1.2]">{band.headline}</h3>
          <p className="text-[13px] text-[#666] leading-[1.4] max-w-[300px] mx-auto">{band.subtext}</p>
        </div>

        {/* Linear Progress */}
        <div className="w-full mb-3 px-2">
          <div className="flex justify-between items-end mb-1">
              <span className="text-[11px] font-bold text-[#888] uppercase tracking-wider">Score</span>
              <span className="text-[24px] font-bold text-primary leading-none">{score}</span>
          </div>
          <div className="w-full h-2.5 bg-[#f0f0f0] rounded-full overflow-hidden">
              <div 
                  className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${score}%` }}
              ></div>
          </div>
        </div>
        
        <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-[11px] font-bold mb-4">
          {band.label}
        </div>

        <div className="w-full mt-auto">
          <p className="text-[13px] font-medium text-[#444] mb-3">Get your full personalized report and next steps</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone size={16} className="text-[#888]" />
              </div>
              <input 
                type="tel" 
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 bg-[#f8f5fa] border border-[#e0e0e0] rounded-lg text-[14px] outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary"
                placeholder="Enter phone number"
              />
            </div>
            {errorMsg && <p className="text-red-500 text-[12px] text-left">{errorMsg}</p>}
            <Button 
              type="submit" 
              disabled={submissionState === 'submitting'}
              variant="custom" 
              className="w-full bg-primary hover:bg-primary-hover text-white py-2.5 rounded-lg font-bold text-[14px] transition-all shadow-md"
            >
              {submissionState === 'submitting' ? 'Submitting...' : 'Get My Report'}
            </Button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-[400px] mx-auto min-h-[320px] max-h-[380px] flex flex-col overflow-hidden bg-white shadow-xl rounded-[20px] border border-[#f0eaf2]">
      {currentStep < questions.length ? renderQuestion() : renderResult()}
    </div>
  );
};

export default EligibilityChecker;
