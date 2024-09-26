import Image from "next/image"
import Logo from "@/public/logo.png"
import { useState } from "react"
import MultiStepForm from "@/components/Form/MultiStepForm"


export default function Dietary(): JSX.Element {


  return (
    // <div className="min-h-full bg-[url('../public/background-2.gif')] px-10 md:px-4 bg-cover">
    //  <MultiStepForm></MultiStepForm>
    // </div>

    
      <div className="min-h-full px-10 md:px-4 relative">
    <div className="absolute inset-0 bg-[url('../public/background-2.gif')] bg-cover opacity-80"></div>
    <div className="relative z-10">
        <MultiStepForm />
    </div>
</div>
  )
}