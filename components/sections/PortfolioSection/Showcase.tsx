"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ShowcaseOneImage from "@/public/images/showcase-one.webp";
import ShowcaseTwoImage from "@/public/images/showcase-two.webp";
import { downloadFirebaseImage } from "@/utils/import";
import { SPOTIFY_PLAYLIST } from "@/utils/constants";


const Showcase = () => {
    const [showcaseOneUrl, setShowcaseOneUrl] = useState("");
    const [showcaseTwoUrl, setShowcaseTwoUrl] = useState("");

    const fetchImageURL = async () => {
        const showcaseOneImageURL = await downloadFirebaseImage("assets/showcase-one.webp");
        const showcaseTwoImageURL = await downloadFirebaseImage("assets/showcase-two.webp");

        setShowcaseOneUrl(showcaseOneImageURL);
        setShowcaseTwoUrl(showcaseTwoImageURL);
    };

    useEffect(() => {
        fetchImageURL();
    }, []);


    return (
        <div className="flex flex-col items-center w-full h-auto gap-5">
            <h3>Showcase</h3>
            <div className="flex flex-col justify-around items-center w-full">
                <div className="flex sm:w-1/2 max-sm:w-full h-auto">
                    <div className="flex flex-col w-1/2 h-full">
                        <div className="flex flex-1">
                            <video preload="metadata" autoPlay loop muted disablePictureInPicture>
                                <source src="/videos/journal.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="showcase-image relative aspect-square">
                            <Image src={showcaseOneUrl ? showcaseOneUrl : ShowcaseOneImage} alt="ShowcaseOne" fill sizes="100%" placeholder="blur"
                                blurDataURL={ShowcaseOneImage.blurDataURL}
                                style={{ objectFit: "cover", objectPosition: "top" }} />
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 h-full">
                        <div className="showcase-image relative aspect-square">
                            <Image src={showcaseTwoUrl ? showcaseTwoUrl : ShowcaseTwoImage} alt="ShowcaseTwo" fill sizes="100%" placeholder="blur"
                                blurDataURL={ShowcaseTwoImage.blurDataURL}
                                style={{ objectFit: "cover", objectPosition: "top" }} />
                        </div>
                        <div className="flex flex-1">
                            <video preload="metadata" autoPlay loop muted disablePictureInPicture>
                                <source src="/videos/montage.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                <hr className="w-3/4 my-20 border border-gray-300" />
                <div className="flex flex-col items-center w-full h-auto px-5 gap-5">
                    <p className="italic font-[PoppinsLight] text-xl text-center">Play our favorite songs as you scroll down</p>
                    <iframe src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST}?utm_source=generator&theme=0`}
                        className="sm:w-3/4 max-sm:w-full h-92" title="Spotify Playlist"
                        width="100%" height="352" allow="encrypted-media" loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Showcase;