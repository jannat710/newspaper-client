

const Plans = () => {
    return (
        <div>
            <h1 className="font-semibold text-3xl divider">
                <span className="border-l-4 border-[#dc0003] pl-2">Plans</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                <div className="">
                    <div className="card w-full mx-auto bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex justify-between items-start">
                                <h2 className="card-title bg-[#dc0003] text-white p-1 rounded-sm">Free for 1 month</h2>
                                <h3>FREE <p className="font-bold text-xs">FOR 1 MONTH</p></h3>
                            </div>
                            <ul className="list-disc list-inside h-44">
                                <li>1 premium account</li>
                                <li>Cancel anytime</li>
                                <li>15 hours/month of listening time from our audiobooks subscriber catalog</li>
                            </ul>
                            <div className="card-actions justify-center">
                                <button className="btn border-[#dc0003] text-[#dc0003] w-full">Try free for 1 month</button>
                                <p className="text-sm h-14">Free for 1 month , then $10.99 per month after . Offer only available if you have not tried Premium before . <span className="underline">Terms apply</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-full mx-auto bg-base-100 shadow-xl">
                        <div className="card-body">

                            <div className="flex justify-between items-start">
                                <h2 className="card-title">Premium Duo</h2>
                                <h3>$14.99 <p className="font-bold text-xs">PER MONTH</p></h3>
                            </div>
                            <ul className="list-disc list-inside h-44">
                                <li>2 premium account</li>
                                <li>Cancel anytime</li>
                                <li>15 hours/month of listening time from our audiobooks subscriber catalog (plan manager only)</li>
                            </ul>
                            <div className="card-actions justify-end">
                                <button className="btn border-[#dc0003] text-[#dc0003] w-full ">Get premium duo</button>
                                <p className="text-sm h-14">For couples who reside at the same address <span className="underline">Terms apply.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-full mx-auto bg-base-100 shadow-xl">
                        <div className="card-body">
                          
                            <div className="flex justify-between items-start">
                            <h2 className="card-title">Premium Family</h2>
                                <h3>$16.99 <p className="font-bold text-xs">PER MONTH</p></h3>
                            </div>
                            <ul className="list-disc list-inside h-44">
                                <li>Up to 6 premium or Kids account </li>
                                <li>Block explicit music</li>
                                <li> Access to spotify kids</li>
                                <li>Cancel anytime</li>
                                <li>15 hours/month of listening time from our audiobooks subscriber catalog (plan manager only)</li>
                            </ul>
                            <div className="card-actions justify-end">
                                <button className="btn border-[#dc0003] text-[#dc0003] w-full">Get Premium Family</button>
                                <p className="text-sm h-14">For up to 6 family members residing at the same address . <span className="underline">Terms apply</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Plans;