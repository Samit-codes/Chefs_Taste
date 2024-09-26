// import React, { useState } from "react";

// interface StepperProps {
//     steps: string[];
//     currentStep: number;
// }

// const Steps: React.FC<StepperProps> = ({ steps, currentStep }) => {
//     return (
//         <div className="max-w-lg mx-auto px-8 py-10 sm:px-10">
//             <ul aria-label="Steps" className="flex items-center">
//                 {steps.map((step, index) => (
//                     <li
//                         key={index}
                        
//                         aria-current={currentStep === index + 1 ? "step" : false}
//                         className="flex-1 last:flex-none flex items-center"
//                     >
//                         <div
//                             className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${currentStep > index + 1
//                                 ? "bg-indigo-600 border-indigo-600"
//                                 : "" || currentStep === index + 1
//                                     ? "border-indigo-600"
//                                     : ""
//                                 }`}
//                         >
//                             <span
//                                 className={`w-2.5 h-2.5 rounded-full bg-indigo-600 ${currentStep !== index + 1 ? "hidden" : ""
//                                     }`}
//                             ></span>
//                             {currentStep > index + 1 ? (
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     strokeWidth={1.5}
//                                     stroke="currentColor"
//                                     className="w-5 h-5 text-white"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="M4.5 12.75l6 6 9-13.5"
//                                     />
//                                 </svg>
//                             ) : (
//                                 ""
//                             )}
//                         </div>
//                         <hr
//                             className={`w-full border ${index + 1 === steps.length
//                                 ? "hidden"
//                                 : "" || currentStep > index + 1
//                                     ? "border-indigo-600"
//                                     : ""
//                                 }`}
//                         />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Steps;


import React from "react";

interface StepperProps {
    steps: string[];
    currentStep: number;
}

const Steps: React.FC<StepperProps> = ({ steps, currentStep }) => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-16">
            <ol className="flex items-center w-full">
                {steps.map((step, index) => (
                    <li key={index} className={`flex items-center ${
                        index !== steps.length - 1 ? 'w-full' : ''
                    }`}>
                        <div className="flex flex-col items-center">
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                                currentStep > index + 1
                                    ? "bg-green-500 border-green-500"
                                    : currentStep === index + 1
                                    ? "border-blue-500 text-blue-500"
                                    : "border-gray-300 text-gray-300"
                            }`}>
                                {currentStep > index + 1 ? (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                ) : (
                                    <span className="text-sm font-bold">{index + 1}</span>
                                )}
                            </div>
                            <span className={`mt-2 text-xs ${
                                currentStep === index + 1 ? "font-medium text-blue-500" : "text-gray-500"
                            }`}>
                                {step}
                            </span>
                        </div>
                        {index !== steps.length - 1 && (
                            <div className={`flex-1 border-t-2 ${
                                currentStep > index + 1 ? "border-green-500" : "border-gray-300"
                            }`}></div>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Steps;