import React from "react";

function Bio(props) {
    const ggv_url = "https://www.ggvc.com/";
    const kp_url = "https://fellows.kleinerperkins.com/meet-the-fellows/2020/";
    const neutral_url = "https://shopneutral.io/";
    const photoshop_url = "https://drive.google.com/drive/folders/1F9wdSjan59yEZVAk65lFOZR4hq7SU17_?usp=sharing";
    const strava_bike_url = "https://www.strava.com/activities/3686157755";
    const strava_run_url = "https://www.strava.com/activities/4707580268";
    const twitter_url = "https://twitter.com/jenyen0309";
    const wiress_url = "https://www.thewiress.com/";

    return(
        <div className="bio">
            <h1>Hey, I'm <span style={{color: "#00ffff"}}>Jen</span>.</h1>
            <h2>I'm currently tinkering with things at 
                <span style={{color: "#00ffff"}}> UPenn </span> 
                and am also developing for
                <a href={neutral_url} target="_blank" rel="noopener noreferrer"> <span style={{color: "#ffffff", textDecoration: "underline", textDecorationColor: "#00ffff"}}>Neutral.</span></a>
            </h2>
            <h2>I'll be 
                <span style={{color: "#FFD271"}}> @Airbnb </span> 
                soon and have learned tons from my previous experiences 
                <span style={{color: "#FFD271"}}> @Reddit </span> 
                and <a href={twitter_url} target="_blank" rel="noopener noreferrer"><span style={{color: "#ffffff", textDecoration: "underline", textDecorationColor: "#FFD271"}}> @Twitter.</span></a>
            </h2>
            <h2>I'm in some awesome VC communities like 
                <a href={kp_url} target="_blank" rel="noopener noreferrer"> <span style={{color: "#ffffff", textDecoration: "underline", textDecorationColor: "#FFD271"}}>Kleiner Perkins Fellows</span> </a>, 
                <a href={ggv_url} target="_blank" rel="noopener noreferrer"> <span style={{color: "#ffffff", textDecoration: "underline", textDecorationColor: "#FFD271"}}>GGV Capital NextGen Fellows</span> </a>, 
                and <a href={wiress_url} target="_blank" rel="noopener noreferrer"><span style={{color: "#ffffff", textDecoration: "underline", textDecorationColor: "#FFD271"}}> The Wiress.</span></a>
            </h2>
            <h2>I like to 
                <a href={strava_run_url} target="_blank" rel="noopener noreferrer"> <span style={{color: "#ffffff", textDecoration: "underline", textDecorationColor: "#ff073a"}}>run</span></a>, 
                <a href={strava_bike_url} target="_blank" rel="noopener noreferrer"> <span style={{color: "#ffffff", textDecoration: "underline", textDecorationColor: "#ff073a"}}>bike</span></a>, 
                <span style={{color: "#ff073a"}}> take photos (see below)</span>, 
                and <a href={photoshop_url} target="_blank" rel="noopener noreferrer"><span style={{color: "#ffffff", textDecoration: "underline", textDecorationColor: "#ff073a"}}>make my friends look epic</span></a>. 
                Talk to me about climate tech, history and culture, and blockchain (or anything really)!
            </h2>
            <h2>I'll update this site soon. I have so many thoughts :)</h2>
        </div>
    )
}

export default Bio;