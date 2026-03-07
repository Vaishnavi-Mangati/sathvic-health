import React from "react";

const About = () => {
    return (
        <> 
        <section id="about" className="scroll-mt-24">
            <section className="text-center mt-30 bg-[#F3F4F6] pt-20 pb-20 rounded-3xl  flex flex-col justify-center items-center">
                <div className="text-center max-w-[900px] mx-auto">
                    <h1 className="text-4xl mb-9 font-bold">Why <span className="text-[#065F46] font-bold text-4xl">Sathvic Health?</span></h1>
                    <p className="mb-15">In a world of generic diet plans and one-size-fits-all workouts, we return to the roots. Ayurveda teaches us that every individual is unique. Your path to health shouldn't be the same as everyone else's.</p>
                </div>
                <div className="flex pt-10 pl-20 pr-20 gap-20 justify-center items-center">
                    <div className="shadow-lg bg-white h-auto rounded-2xl p-5 flex flex-col items-center">
                        <img src="/images/Ancient_wisdom.jpg" className="h-[100px] rounded-[90px]" />
                        <h1 className="text-xl font-bold pb-3">Ancient Wisdom</h1>
                        <p className="text-[#4B5563] pb-3">Based on 5,000-year-old Ayurvedic principles of balancing the three Doshas.</p>
                    </div>
                    <div className="shadow-lg bg-white h-auto rounded-2xl p-5 flex flex-col items-center">
                        <img src="/images/modern_science.png" className="h-[100px] rounded-[90px]" />
                        <h1 className="text-xl font-bold pb-3">Modern Science</h1>
                        <p className="text-[#4B5563] pb-3">Actionable insights backed by nutritional science and modern fitness understanding.</p>
                    </div>
                    <div className="shadow-lg bg-white h-auto rounded-2xl p-5 flex flex-col items-center">
                        <img src="/images/holistic_balance.png" className="h-[100px] rounded-[90px]" />
                        <h1 className="text-xl font-bold pb-3">Holistic Balance</h1>
                        <p className="text-[#4B5563] pb-3">We don't just focus on the body. We nurture your mind, body, and spirit together.</p>
                    </div>
                </div>
            </section>
            <section className="text-center mt-30">
                <div>
                    <h1 className="text-s text-[#065F46]">THE THREE ENERGIES</h1>
                    <div className="max-w-[500px] mx-auto pb-10">
                        <h1 className="text-4xl pt-10 pb-5 font-bold">Understand your <span className="text-[#5B21B6]">Dosha</span> </h1>
                        <p>According to Ayurveda, everyone is born with a unique mix of three biological energies: Vata, Pitta, and Kapha.</p>
                    </div>
                    <div className="flex ml-20 mr-20 gap-20 text-left">
                        <div className="border h-auto p-5 rounded-2xl">
                            <div className="flex items-center">
                                <img src="/images/air_ether.png" className="h-[100px] rounded-[90px]" />
                                <div className="pl-12">
                                    <h1 className="text-3xl font-bold text-[#A78BFA]">Vata</h1>
                                    <p className="text-xl text-[#4B5563]">Air & Ether</p>
                                </div>
                            </div>
                            <p className="pt-7">Creative, energetic, and quick-moving. When out of balance, Vata types may experience anxiety, dryness, or irregularity.</p>
                        </div>
                        <div className="border h-auto p-5 rounded-2xl">
                            <div className="flex items-center">
                                <img src="/images/fire_water.png" className="h-[100px] rounded-[90px]" />
                                <div className="pl-12">
                                    <h1 className="text-3xl font-bold text-[#EF4444]">Pitta</h1>
                                    <p className="text-xl text-[#4B5563]">Fire & Water</p>
                                </div>
                            </div>
                            <p className="pt-7">Intelligent, focused, and ambitious. Imbalanced Pitta can lead to irritability, inflammation, or perfectionism.</p>
                        </div>
                        <div className="border h-auto p-5 rounded-2xl">
                            <div className="flex items-center">
                                <img src="/images/earth_water.png" className="h-[100px] rounded-[90px]" />
                                <div className="pl-12">
                                    <h1 className="text-3xl font-bold text-[#16A34A]">Kapha</h1>
                                    <p className="text-xl text-[#4B5563]">Earth & Water</p>
                                </div>
                            </div>
                            <p className="pt-7">Calm, loving, and steady. Excess Kapha may result in lethargy, weight gain, or resistance to change.</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        </>
    )

}

export default About