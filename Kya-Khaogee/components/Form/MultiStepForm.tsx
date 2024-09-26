import React, { useState } from "react";
import Steps from "./Steps";
import { useRouter } from 'next/router';
import Button from "../Button";


type FormValues = {
    dietary: string;
    ingredients: string;
    pantry: boolean | null;
};

const MultiStepForm = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        dietary: "",
        ingredients: "",
        pantry: null
    });

    //to change the form questions and stepper number
    const [step, setStep] = useState<number>(1);
    const router = useRouter();


    // validate the form values
    const validateForm = () => {
        if (formValues.dietary === "" || formValues.ingredients === "" || formValues.pantry === null) {
            return false;
        }
        return true;
    };


    //handling form submission
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // validate the form values
        const isValid = validateForm();
        if (!isValid) {
            alert("Please fill in all fields before submitting the form.");
            return;
        }

        console.log(formValues);
        //save users choice in local storage
        localStorage.setItem('formValues', JSON.stringify(formValues));
        router.push('/recipes');

    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleRadioChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value === "true" });
    };

    const handleNextClick = () => {
            setStep(step + 1); 
    };

    const handlePrevClick = () => {
            setStep(step - 1);
    };

    return (
        <div>
            <Steps steps={["Step 1", "Step 2", "Step 3"]} currentStep={step} />

            <div className="max-w-screen-xl mx-auto gap-12 text-gray-600 px-1 pb-32 pt-10 md:px-1">

                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl text-gray-700 font-extrabold mx-auto md:text-5xl">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9e8bd2] to-[#5456c6]" >dietary preferences</span>
                    </h2>

                </div>

                <form onSubmit={handleFormSubmit} className="pt-28 pb-20">
                    <div>
                        {/* {step === 1 && (
                            <div className=" font-sans font-semibold text-xl mx-auto">
                                <label>
                                    What is your dietary requirement?
                                    <br></br>
                                    <br></br>
                                    <select className="text-base bg-teal-50 border-2 border-indigo-200 text-gray-700 rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-5"
                                        
                                        required
                                        name="dietary"
                                        value={formValues.dietary}
                                        onChange={handleInputChange}
                                        placeholder="Select an option"
                                    >
                                        <option value="" disabled>Select an option</option>
                                        <option value=" ">No Dietary Requirements 🥣</option>
                                        <option value="non-vegetarian">Non-Vegetarian 🍗</option>
                                        <option value="vegetarian">Vegetarian 🥗</option>
                                        <option value="vegan">Vegan 🌱</option>
                                        <option value="dairy-free">Dairy-Free 🥛</option>
                                        
                                        <option value="low-carb">Low-Carb 🍜</option>
                                        <option value="low-fat">Low-Fat 🥕</option>
                                        

                                         
                                        
                                    </select>
                                </label>
                                <div className="mx-auto flex justify-end py-6">
                                    <Button name="Next" onClick={handleNextClick} isTeal={false} />
                                </div>
                            </div>
                        )}
                    </div>
                    <div> */}



{step === 1 && (
  <div className="font-sans text-xl mx-auto space-y-6">
    <label className="block text-2xl font-bold text-gray-800 mb-4">
      Diet
    </label>
    <div className="relative">
      <select
        className="appearance-none w-full bg-gradient-to-r from-indigo-50 to-teal-50 border-2 border-indigo-200 text-gray-700 rounded-xl py-3 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
        required
        name="dietary"
        value={formValues.dietary}
        onChange={handleInputChange}
      >
        <option value="" disabled>Ek Options Choose Karo</option>
        <option value=" ">No Dietary Requirements 🥣</option>
        <option value="non-vegetarian">Non-Vegetarian 🍗</option>
        <option value="vegetarian">Vegetarian 🥗</option>
        <option value="vegan">Vegan 🌱</option>
        <option value="dairy-free">Dairy-Free 🥛</option>
        <option value="low-carb">Low-Carb 🍜</option>
        <option value="low-fat">Low-Fat 🥕</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
    <div className="mt-8">
      <Button 
        name="Next" 
        onClick={handleNextClick} 
        isTeal={false}
        className="bg-gradient-to-r from-indigo-500 to-teal-500 text-white font-bold py-2 px-4 rounded-full hover:from-indigo-600 hover:to-teal-600 transition duration-300 ease-in-out transform hover:scale-105"
      />
    </div>
  </div>
)}


                        {step === 2 && (
                            <div className=" font-semibold text-xl mx-auto">
                                <label>
                                    What do you have in your kitchen? 🥡
                                    <br></br>
                                    <br></br>
                                    <input className="text-base bg-teal-50 border-2 border-indigo-200 text-gray-700 rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-5"
                                        placeholder="beef, rice, potato"
                                        type="text"
                                        name="ingredients"
                                        value={formValues.ingredients}
                                        onChange={handleInputChange}
                                        spellCheck="true"
                                        required
                                    />
                                </label>

                                <div className="mx-auto flex justify-between py-6">
                                    <Button name="Previous" onClick={handlePrevClick} isTeal={true} />
                                    <Button name="Next" onClick={handleNextClick} isTeal={false} />
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        {step === 3 && (
                            <div className=" font-semibold text-xl mx-auto form-step">

                                <h1> Do you have pantry items to support your cooking? 🥫</h1>
                                <br></br>
                                <ul className="grid w-full gap-6 md:grid-cols-2">
                                    <li>
                                        <label className="inline-flex items-center justify-evenly w-full p-5 bg-teal-50 border-2 border-indigo-200 text-gray-700 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500" >
                                            <input type="radio" name="pantry" value="true" checked={formValues.pantry === true} onChange={handleRadioChange} required />
                                            <div className="block">
                                                <div className="text-base px-5">No, please only consider what I have in my kitchen 🔪</div>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="inline-flex items-center justify-evenly w-full p-5 bg-teal-50 border-2 border-indigo-200 text-gray-700 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500">
                                            <input type="radio" name="pantry" value="false" checked={formValues.pantry === false} onChange={handleRadioChange} required />
                                            <div className="block">
                                                <div className="text-base px-5">Yes, I have pantry stuff in my kitchen 🧂</div>
                                            </div>
                                        </label>
                                    </li>
                                </ul>

                                <div className="mx-auto flex justify-between py-6">
                                    <Button name="Previous" onClick={handlePrevClick} isTeal={true} />
                                    <Button name="Submit" type="submit" isTeal={false} />
                                </div>
                            </div>
                        )}
                    </div>

                </form>

            </div>
        </div>
    );
};

export default MultiStepForm;

