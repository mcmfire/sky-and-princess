"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { animateNavbarLinks, animateLogo } from "./animation";
import LogoImage from "@/public/images/logo.webp";

const Navbar = () => {
    const navbarLogoRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        const navbarLogo = navbarLogoRef.current;

        const animationTimeline = gsap.timeline();

        if (!navbarLogo) return;

        const { navbarLinksfadingInAnimation, navbarLinkHRsWidthAnimation } = animateNavbarLinks();

        animationTimeline.add(animateLogo(navbarLogo));
        animationTimeline.add(navbarLinksfadingInAnimation);
        animationTimeline.add(navbarLinkHRsWidthAnimation);
    }, {});

    return (
        <nav id="navbar">
            <a href="#">
                <Image
                    ref={navbarLogoRef}
                    src={LogoImage}
                    alt="Logo"
                    width={48}
                    height={48}
                />
            </a>
            <ul>
                <li id={`portfolio-link`}>
                    <a href={`#portfolio-section`}>PORTFOLIO</a>
                    <hr className="w-0" />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;