import React, { useState } from 'react';

const QuizQuestion = ({ question, options, onAnswer, isAnswered, correctAnswer }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{question}</h3>
    <div className="space-y-3">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => !isAnswered && onAnswer(option)}
          className={`w-full text-left p-4 rounded-lg transition-colors ${
            isAnswered
              ? option === correctAnswer
                ? 'bg-green-100 border-green-500 text-green-700'
                : 'bg-gray-50 text-gray-500'
              : 'hover:bg-blue-50 bg-gray-50'
          } ${isAnswered && 'cursor-default'}`}
          disabled={isAnswered}
        >
          {option}
        </button>
      ))}
    </div>
    {isAnswered && (
      <div className="mt-4 text-sm">
        <div className="font-medium text-green-600">
          Correct Answer: {correctAnswer}
        </div>
      </div>
    )}
  </div>
);

const CyberQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());

  const quizQuestions = [
    {
      question: "What is the most secure way to protect your online accounts?",
      options: [
        "Use the same password everywhere",
        "Use two-factor authentication",
        "Write passwords in a notebook",
        "Share passwords with trusted friends"
      ],
      correctAnswer: "Use two-factor authentication"
    },
    {
      question: "Which of these is a sign of a phishing email?",
      options: [
        "The sender's email matches the company",
        "Urgent requests for personal information",
        "Professional formatting",
        "Clear company branding"
      ],
      correctAnswer: "Urgent requests for personal information"
    },
    {
      question: "What should you do if you suspect a cyber attack?",
      options: [
        "Continue working normally",
        "Turn off your device immediately",
        "Disconnect from the network and report it",
        "Delete all your files"
      ],
      correctAnswer: "Disconnect from the network and report it"
    }
  ];

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setAnsweredQuestions(prev => new Set([...prev, currentQuestionIndex]));
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredQuestions(new Set());
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Cyber Security Quiz</h1>
          <p className="text-xl text-blue-100">
            Test your knowledge about cyber security basics
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Score Display */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Your Progress</h2>
              <p className="text-gray-600">
                Score: {score} / {quizQuestions.length}
              </p>
            </div>
            <button
              onClick={resetQuiz}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reset Quiz
            </button>
          </div>
        </div>

        {/* Questions */}
        {quizQuestions.map((q, index) => (
          <QuizQuestion
            key={index}
            question={q.question}
            options={q.options}
            correctAnswer={q.correctAnswer}
            isAnswered={answeredQuestions.has(index)}
            onAnswer={handleAnswer}
          />
        ))}

        {/* Results */}
        {answeredQuestions.size === quizQuestions.length && (
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Quiz Complete!
            </h3>
            <p className="text-gray-600 mb-4">
              You scored {score} out of {quizQuestions.length}
            </p>
            <button
              onClick={resetQuiz}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CyberQuiz; 