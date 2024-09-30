"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { RSVP_GIFT_MESSAGE } from "@/utils/constants";
import BrideWalletImage from "@/public/images/bride-wallet.webp";
import GroomWalletImage from "@/public/images/groom-wallet.webp";
import { downloadFirebaseImage } from "@/utils/import";

const Gift = () => {
    const [brideWalletUrl, setBrideWalletUrl] = useState("");
    const [groomWalletUrl, setGroomWalletUrl] = useState("");

    const fetchImageURL = async () => {
        const brideWalletImageURL = await downloadFirebaseImage("assets/bride-wallet.webp");
        const groomWalletImageURL = await downloadFirebaseImage("assets/groom-wallet.webp");

        setBrideWalletUrl(brideWalletImageURL);
        setGroomWalletUrl(groomWalletImageURL);
    };

    useEffect(() => {
        fetchImageURL();
    }, []);

    return (
        <div className="flex flex-col items-center w-full sm:py-5 max-sm:py-10 gap-5 bg-gradient-to-tl from-[--theme-color-bg] to-[--theme-color-bg-light] text-white">
            <div className="flex flex-1 max-sm:flex-col items-center w-full h-auto">
                <div className="flex flex-col justify-center items-center sm:w-1/3 max-sm:w-full sm:h-full max-sm:h-1/2 px-10 gap-5">
                    <h3>Gifting</h3>
                    <p className="italic w-full font-serif sm:text-xl text-center">
                        {RSVP_GIFT_MESSAGE}
                    </p>
                </div>
                <div className="flex max-sm:flex-col justify-around sm:w-2/3 max-sm:w-full h-max sm:p-32 sm:max-xl:p-20 max-sm:p-5 gap-5">
                    <div className="flex flex-col w-full h-full text-center">
                        <label id="bride-wallet" className="font-[AmsterdamSignatureRegular] text-6xl">Bride&apos;s Wallet</label>
                        <div id="bride-wallet" className="relative rounded-lg shadow-md shadow-black overflow-hidden" style={{ aspectRatio: 2 / 3 }}>
                            <Image src={brideWalletUrl ? brideWalletUrl : BrideWalletImage} alt="BrideWallet" loading="lazy"
                                placeholder="blur" blurDataURL={BrideWalletImage.blurDataURL} fill sizes="100%" style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-full text-center">
                        <label htmlFor="groom-wallet" className="font-[AmsterdamSignatureRegular] text-6xl">Groom&apos;s Wallet</label>
                        <div id="groom-wallet" className="relative border rounded-lg shadow-md shadow-black overflow-hidden" style={{ aspectRatio: 2 / 3 }}>
                            <Image src={groomWalletUrl ? groomWalletUrl : GroomWalletImage} alt="GroomWallet" loading="lazy"
                                placeholder="blur" blurDataURL={GroomWalletImage.blurDataURL} fill sizes="100%" style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gift;