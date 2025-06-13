'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useRef } from "react";

gsap.registerPlugin(ScrambleTextPlugin);

interface scrambleProp {
    content : string
}

const ScrambleText  = ({content}: scrambleProp) => {

    const boxRef = useRef(null);
  
    // Using useGSAP to run animation on mount
    useGSAP(() => {
        gsap.to(boxRef.current, { 
            duration: 1, 
            scrambleText: `${content}` });
    }, []);

    return <span ref={boxRef} className="box"></span>;	
}

export default ScrambleText;