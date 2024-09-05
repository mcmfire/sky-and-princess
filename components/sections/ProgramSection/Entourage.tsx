"use client";

import { FaAward, FaBible, FaStar } from "react-icons/fa";
import { GiBigDiamondRing, GiHighHeel, GiTopHat } from "react-icons/gi";
import { RiCoinFill, RiFlowerFill } from "react-icons/ri";
import { IoHeart } from "react-icons/io5";
import {
    PROGRAM_SECTION_ENTOURAGE_BESTMAN, PROGRAM_SECTION_ENTOURAGE_BIBLE_BEARER,
    PROGRAM_SECTION_ENTOURAGE_BRIDESMAID, PROGRAM_SECTION_ENTOURAGE_CANDLE,
    PROGRAM_SECTION_ENTOURAGE_COIN_BEARER, PROGRAM_SECTION_ENTOURAGE_CORD,
    PROGRAM_SECTION_ENTOURAGE_FLOWER_BOY, PROGRAM_SECTION_ENTOURAGE_GROOMSMEN,
    PROGRAM_SECTION_ENTOURAGE_MATRON_OF_HONOR, PROGRAM_SECTION_ENTOURAGE_PRINCIPAL_SPONSORS,
    PROGRAM_SECTION_ENTOURAGE_RING_BEARER, PROGRAM_SECTION_ENTOURAGE_VEIL,
} from "@/utils/constants";

const Entourage = () => {
    return (
        <div id="entourage-container" className="flex flex-col items-center w-full px-5 py-10 gap-10 sm:max-xl:gap-10 text-center">
            <h3>Entourage</h3>
            <div className="flex flex-col items-center w-full gap-5">
                <p className="italic font-serif text-2xl">To Stand as Witness To Our Vows</p>
                <div className="flex flex-col w-full gap-20">
                    <div className="flex max-sm:flex-col sm:justify-center max-sm:items-center w-full sm:gap-20 max-sm:gap-10">
                        <div className="entourage-card flex flex-col items-center gap-3">
                            <IoHeart className="text-8xl text-rose-500" />
                            <div id="sponsor-container" className="flex flex-col justify-center w-full gap-3">
                                <label htmlFor="sponsor-container" className="entourage-role font-bold text-xl">PRINCIPAL SPONSORS</label>
                                {PROGRAM_SECTION_ENTOURAGE_PRINCIPAL_SPONSORS.map((sponsor, index) => (
                                    <p key={`sponsor-${index}`} id={`${sponsor}-${index + 1}`} className="entourage-name mb-3 text-lg">{sponsor}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full gap-5">
                <p className="italic font-serif text-2xl">To Assist Us In Our Needs</p>
                <div className="flex flex-col w-full gap-20">
                    <div className="flex max-sm:flex-col sm:justify-center max-sm:items-center w-full sm:gap-20 max-sm:gap-10">
                        <div className="entourage-card flex flex-col items-center gap-3">
                            <FaAward className="text-8xl text-blue-500" />
                            <div id="bestman-container" className="flex flex-col justify-center w-full gap-3">
                                <label htmlFor="bestman-container" className="entourage-role font-bold text-xl">BESTMAN</label>
                                {PROGRAM_SECTION_ENTOURAGE_BESTMAN.map((bestman, index) => (
                                    <p key={`bestman-${index}`} id={`${bestman}-${index + 1}`} className="entourage-name text-lg">{bestman}</p>
                                ))}
                            </div>
                        </div>
                        <div className="entourage-card flex flex-col items-center gap-3">
                            <FaStar className="text-8xl text-pink-400" />
                            <div id="matron-container" className="flex flex-col justify-center w-full gap-3">
                                <label htmlFor="matron-container" className="entourage-role font-bold text-xl">MATRON OF HONOR</label>
                                {PROGRAM_SECTION_ENTOURAGE_MATRON_OF_HONOR.map((matron, index) => (
                                    <p key={`matron-${index}`} id={`${matron}-${index + 1}`} className="entourage-name text-lg">{matron}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex max-sm:flex-col sm:justify-center max-sm:items-center w-full sm:gap-20 max-sm:gap-10">
                        <div className="entourage-card flex flex-col items-center gap-3">
                            <GiTopHat className="text-8xl text-black" />
                            <div id="groomsmen-container" className="flex flex-col justify-center w-full gap-3">
                                <label htmlFor="groomsmen-container" className="entourage-role font-bold text-xl">GROOMSMEN</label>
                                {PROGRAM_SECTION_ENTOURAGE_GROOMSMEN.map((groomsmen, index) => (
                                    <div key={`groomsmen-${index}`} className="flex flex-col">
                                        <p id={`${groomsmen}-${index + 1}`}
                                            className={`entourage-name ${PROGRAM_SECTION_ENTOURAGE_CANDLE.includes(groomsmen)
                                                || PROGRAM_SECTION_ENTOURAGE_VEIL.includes(groomsmen)
                                                || PROGRAM_SECTION_ENTOURAGE_CORD.includes(groomsmen) ?
                                                "" : "mb-3"} text-lg`}>{groomsmen}</p>
                                        <p className={`${PROGRAM_SECTION_ENTOURAGE_CANDLE.includes(groomsmen)
                                            || PROGRAM_SECTION_ENTOURAGE_VEIL.includes(groomsmen)
                                            || PROGRAM_SECTION_ENTOURAGE_CORD.includes(groomsmen) ?
                                            "italic" : "hidden"
                                            }`}>
                                            {PROGRAM_SECTION_ENTOURAGE_CANDLE.includes(groomsmen) ? "Candle" : ""}
                                            {PROGRAM_SECTION_ENTOURAGE_VEIL.includes(groomsmen) ? "Veil" : ""}
                                            {PROGRAM_SECTION_ENTOURAGE_CORD.includes(groomsmen) ? "Cord" : ""}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="entourage-card flex flex-col items-center gap-3">
                            <GiHighHeel className="text-8xl text-red-800" />
                            <div id="bridesmaid-container" className="flex flex-col justify-center w-full gap-3">
                                <label htmlFor="bridesmaid-container" className="entourage-role font-bold text-xl">BRIDESMAIDS</label>
                                {PROGRAM_SECTION_ENTOURAGE_BRIDESMAID.map((bridesmaid, index) => (
                                    <div key={`bridesmaid-${index}`} className="flex flex-col">
                                        <p id={`${bridesmaid}-${index + 1}`}
                                            className={`entourage-name ${PROGRAM_SECTION_ENTOURAGE_CANDLE.includes(bridesmaid)
                                                || PROGRAM_SECTION_ENTOURAGE_VEIL.includes(bridesmaid)
                                                || PROGRAM_SECTION_ENTOURAGE_CORD.includes(bridesmaid) ?
                                                "" : "mb-3"} text-lg`}>{bridesmaid}</p>
                                        <p className={`${PROGRAM_SECTION_ENTOURAGE_CANDLE.includes(bridesmaid)
                                            || PROGRAM_SECTION_ENTOURAGE_VEIL.includes(bridesmaid)
                                            || PROGRAM_SECTION_ENTOURAGE_CORD.includes(bridesmaid) ?
                                            "italic" : "hidden"
                                            }`}>
                                            {PROGRAM_SECTION_ENTOURAGE_CANDLE.includes(bridesmaid) ? "Candle" : ""}
                                            {PROGRAM_SECTION_ENTOURAGE_VEIL.includes(bridesmaid) ? "Veil" : ""}
                                            {PROGRAM_SECTION_ENTOURAGE_CORD.includes(bridesmaid) ? "Cord" : ""}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex max-sm:flex-col sm:justify-center max-sm:items-center w-full sm:gap-20 max-sm:gap-10">
                        <div className="entourage-card flex flex-col items-center gap-3">
                            <RiCoinFill className="text-6xl text-yellow-400" />
                            <div id="coin-container" className="flex flex-col justify-center w-full gap-3">
                                <label htmlFor="coin-container" className="entourage-role font-bold text-xl">COIN BEARER</label>
                                {PROGRAM_SECTION_ENTOURAGE_COIN_BEARER.map((coin, index) => (
                                    <p key={`coin-${index}`} id={`${coin}-${index + 1}`} className="entourage-name text-lg">{coin}</p>
                                ))}
                            </div>
                        </div>
                        <div className="entourage-card flex flex-col items-center gap-3">
                            <GiBigDiamondRing className="text-6xl text-sky-300" />
                            <div id="ring-container" className="flex flex-col justify-center w-full gap-3">
                                <label htmlFor="ring-container" className="entourage-role font-bold text-xl">RING BEARER</label>
                                {PROGRAM_SECTION_ENTOURAGE_RING_BEARER.map((ring, index) => (
                                    <p key={`ring-${index}`} id={`${ring}-${index + 1}`} className="entourage-name text-lg">{ring}</p>
                                ))}
                            </div>
                        </div>
                        <div className="entourage-card flex flex-col items-center gap-3">
                            <FaBible className="text-6xl text-yellow-600" />
                            <div id="bible-container" className="flex flex-col justify-center w-full gap-3">
                                <label htmlFor="bible-container" className="entourage-role font-bold text-xl">BIBLE BEARER</label>
                                {PROGRAM_SECTION_ENTOURAGE_BIBLE_BEARER.map((bible, index) => (
                                    <p key={`bible-${index}`} id={`${bible}-${index + 1}`} className="entourage-name text-lg">{bible}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex max-sm:flex-col sm:justify-center max-sm:items-center w-full sm:gap-20 max-sm:gap-10">
                        <div className="entourage-card flex flex-col items-center gap-3">
                            <RiFlowerFill className="text-6xl text-rose-600" />
                            <div id="flower-container" className="flex flex-col justify-center w-full gap-3">
                                <label htmlFor="flower-container" className="entourage-role font-bold text-xl">FLOWER BEARER</label>
                                {PROGRAM_SECTION_ENTOURAGE_FLOWER_BOY.map((flower, index) => (
                                    <p key={`flower-${index}`} id={`${flower}-${index + 1}`} className="entourage-name mb-3 text-lg">{flower}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Entourage;