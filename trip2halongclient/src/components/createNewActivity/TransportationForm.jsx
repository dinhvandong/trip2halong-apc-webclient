import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const TransportationForm = () => {
    const [shuttleBus, setShuttleBus] = useState(true);
    const [pickUpMethod, setPickUpMethod] = useState("Pick-up");
    const [timeHanoi, setTimeHanoi] = useState("07:00");
    const [timeHalong, setTimeHalong] = useState("22:30");
    const [notIncluded, setNotIncluded] = useState(false);

    return (
        <div className="flex flex-col w-full h-auto p-3 mt-3">
            <p className='text-[15px]  text-black font-medium'>Highights<span className='text-red-500'>*</span></p>
            <p style={{ fontStyle: "italic" }} className='text-[13px] text-gray-400 mt-2'>Please selete pick-up time for your bus transfer service </p>
            <div className="flex flex-row justify-between w-full h-auto mt-3">
                <div className="flex flex-col w-[49%] h-auto">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={shuttleBus}
                            onChange={() => setShuttleBus(!shuttleBus)}
                            className="w-4 h-4"
                        />
                        <span className="font-medium">
                            Shuttle bus transfer <span className="text-blue-500">Hanoi - Halong</span>
                        </span>
                    </label>
                    <input className='w-full h-[40px] px-2 mt-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md hover:text-black  text-gray-300' placeholder='49 Hai Bà Trưng, Hoàn Kiếm, Hà Nội' type='text'></input>
                </div>
                <div className="w-[49%] h-auto">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={notIncluded}
                            onChange={() => setNotIncluded(!notIncluded)}
                            className="w-4 h-4"
                        />
                        <span>Not included</span>
                    </label>
                </div>
            </div>
            <div className="flex flex-row w-full h-auto mt-3">
                <div className="w-[17%] h-auto flex flex-col ">
                    <div className="mb-2">
                        <label className="block ml-3 font-medium ">
                            Pick-up time <span className="text-[#0D7BE7]">in Hanoi</span>
                        </label>
                        <div className="flex items-center p-2 mt-1 rounded-lg">
                            <input
                                type="time"
                                value={timeHanoi}
                                onChange={(e) => setTimeHanoi(e.target.value)}
                                className="w-full bg-white h-[40px] rounded-md focus:outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block ml-3 font-medium ">
                            Pick-up time <span className="text-[#0D7BE7]">in Halong</span>
                        </label>
                        <div className="flex items-center p-2 mt-1 rounded-md">
                            <input
                                type="time"
                                value={timeHalong}
                                onChange={(e) => setTimeHalong(e.target.value)}
                                className="w-full bg-white h-[40px] rounded-md  focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-[25%] h-auto flex flex-col items-center">
                    <div className="flex flex-col">
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="pickup"
                                value="Pick-up"
                                checked={pickUpMethod === "Pick-up"}
                                onChange={(e) => setPickUpMethod(e.target.value)}
                                className="w-4 h-4"
                            />
                            <span className="font-medium">Pick-up</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="pickup"
                                value="Meet-up"
                                checked={pickUpMethod === "Meet-up"}
                                onChange={(e) => setPickUpMethod(e.target.value)}
                                className="w-4 h-4"
                            />
                            <span  className="font-medium">Meet-up</span>
                        </label>
                    </div>
                </div>

            </div>

            {/* Pick-up Method
            <div className="mt-4">
                <label className="block mb-1 font-medium">Pick-up Method:</label>
                <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="pickup"
                            value="Pick-up"
                            checked={pickUpMethod === "Pick-up"}
                            onChange={(e) => setPickUpMethod(e.target.value)}
                            className="w-4 h-4"
                        />
                        <span>Pick-up</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="pickup"
                            value="Meet-up"
                            checked={pickUpMethod === "Meet-up"}
                            onChange={(e) => setPickUpMethod(e.target.value)}
                            className="w-4 h-4"
                        />
                        <span>Meet-up</span>
                    </label>
                </div>
            </div>

           
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block font-medium">Pick-up time in Halong</label>
                    <input
                        type="time"
                        value={pickUpTimeHalong}
                        onChange={(e) => setPickUpTimeHalong(e.target.value)}
                        className="w-full p-2 mt-1 border rounded-lg"
                    />
                </div>
                <div>
                    <label className="block font-medium">Pick-up time in Hanoi</label>
                    <input
                        type="time"
                        value={pickUpTimeHanoi}
                        onChange={(e) => setPickUpTimeHanoi(e.target.value)}
                        className="w-full p-2 mt-1 border rounded-lg"
                    />
                </div>
            </div>

            

        
            <button className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Submit
            </button> */}
        </div>
    );
};

export default TransportationForm;