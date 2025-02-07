import React, { useState } from 'react'

const Longg1 = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const progressWidths = [0, 0, 0];
    const steps = [
        { id: 1, label: 'Select your preferred pricing' },
        { id: 2, label: 'Contact information' },
        { id: 3, label: 'Payment confirmation' },
    ];
    return (
        <div className='flex justify-center items-center w-full h-[150px]'>
        <div className='flex justify-center items-center w-full h-[150px] bg-[#F4F4F4]'>
            <div className="relative w-full max-w-4xl mx-auto">
                {/* Dòng kẻ nền */}
                <div className="absolute left-0 w-full h-1 bg-[#EAEEEF] top-4"></div>

                {/* Dòng kẻ xanh */}
                <div
                    className="absolute  h-1 transition-all duration-500 bg-[#3E75AB] top-4"
                    style={{ width: `${progressWidths[currentStep - 1]}%`, left: `${(currentStep - 1) * (100 / (steps.length - 1))}%` }}
                ></div>

                {/* Các bước */}
                <div className="relative flex justify-between mt-1.5">
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center w-1/3">
                            {/* Vòng tròn số */}
                            <div
                                onClick={() => setCurrentStep(step.id)}
                                className={`w-5 h-5 flex justify-center items-center rounded-full cursor-pointer transition-colors duration-300 ${currentStep === step.id
                                    ? 'bg-[#3E75AB] '
                                    : 'bg-[#EAEEEF]'
                                }`}
                            >
                            </div>

                            {/* Nhãn bước */}
                            <span
                                className={`mt-2 text-center text-lg font-bold ${currentStep === step.id
                                    ? 'text-[#3E75AB] font-bold'
                                    : 'text-[#D1D5D5]'
                                }`}
                            >
                                {step.id === 1 ? (
                                    <>
                                        Select your <br /> preferred pricing
                                    </>
                                ) : (
                                    step.label
                                )}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Longg1
