import React from 'react'
import Link from 'next/link'

export default function HeroBanner() {
    return (
        <div className="bg-green-50 bg-[url('../public/background.gif')] bg-cover bg-top bg-no-repeat" style={{ height: '65vh', backgroundSize: '100% auto' }}>
            {/* rest of your code remains the same */}
            <section className="relative">
                <div className="relative z-10 max-w-screen-xl mx-auto px-10 py-28 md:px-8">
                    <div className="space-y-5 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl text-gray-700 font-extrabold mx-auto md:text-5xl">
                            <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#2a9d8f] to-[#e9c46a]"> Chefs Taste </span>
                            <br></br>Let's Plan Your Next Meal?
                        </h2>
                        <br></br>
                        <p className="max-w-2xl mx-auto text-gray-800 font-semibold">
                        Tum Jaisa Chahoge aisa hii milega
                        </p>
                        <br></br>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="justify-center items-center gap-x-3 sm:flex">

                            <button className="py-2.5 px-4 mt-3 w-full text-sm font-medium text-white bg-gradient-to-r from-[#4f772d] to-[#90a955] rounded-lg shadow-lg shadow-[#6366f1]/50 hover:shadow-[#6366f1]/70 active:shadow-[#6366f1]/90 duration-150 sm:mt-0 sm:w-auto">
                                <Link href={{ pathname: "/get-started" }}>
                                    Get Started </Link>
                            </button>

                        </form>
                    </div>
                </div>
                <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            </section>
        </div>
    )
}

// style={{ height: '65vh', backgroundSize: '90% auto' }}