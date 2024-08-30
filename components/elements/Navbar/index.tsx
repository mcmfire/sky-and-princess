"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { animateNavbarLinks, animateSAPLogo } from "./animation";
import SapLogoImage from "@/public/images/sap-logo.webp";

const Navbar = () => {
    const navbarSapLogoRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        const navbarSapLogo = navbarSapLogoRef.current;

        const animationTimeline = gsap.timeline();

        if (!navbarSapLogo) return;

        animationTimeline.add(animateSAPLogo(navbarSapLogo));
        animationTimeline.add(animateNavbarLinks());
    }, {});

    return (
        <nav>
            <a href="#">
                <Image
                    ref={navbarSapLogoRef}
                    src={SapLogoImage}
                    alt="SAP Logo"
                    width={48}
                    height={48}
                />
            </a>
            <ul>
                <li id="portfolio-link">
                    <a href="#section-portfolio">PORTFOLIO</a>
                    <hr className="w-0"/>
                </li>
                <li id="program-link">
                    <a href="#section-program">PROGRAM</a>
                    <hr className="w-0"/>
                </li>
                <li id="rsvp-link">
                    <a href="#section-rsvp">RSVP</a>
                    <hr className="w-0"/>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;