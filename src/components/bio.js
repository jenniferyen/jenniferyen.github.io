import React from 'react';
import jenyen from '../images/jenyen.png';

function Bio(props) {
    const ggv_url = 'https://www.ggvc.com/ggv-nextgen-fellow/';
    const kp_url = 'https://fellows.kleinerperkins.com/meet-the-fellows/2020/';
    const neutral_url = 'https://shopneutral.io/';
    const phantom_url = 'https://phantom.app/';
    const photoshop_url = 'https://drive.google.com/drive/folders/1F9wdSjan59yEZVAk65lFOZR4hq7SU17_?usp=sharing';
    const pixel_portrait_url = 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/8112316025873927737505937898915153732580103913704334048512380838242682929153';
    const strava_bike_url = 'https://www.strava.com/activities/3686157755';
    const strava_run_url = 'https://www.strava.com/activities/5642567237';
    const twitter_url = 'https://twitter.com/jenyen0309';
    const wiress_url = 'https://www.thewiress.com/';

    return(
        <div className='bio'>
            <h1>
                Hey, I'm <span style={{color: '#00ffff'}}>Jen</span>.
            </h1>
            <h2>
                I'm a design-driven developer <span><a href={phantom_url} target='_blank' rel='noopener noreferrer' style={{color: '#ffffff', textDecoration: 'underline', textDecorationColor: '#FFD271'}}>@Phantom</a></span> and 
                a recent grad from <span style={{color: '#00ffff'}}> UPenn</span>.
            </h2>
            <h2>
                Ask me about how I took a leap of faith and left "traditional tech" for <span style={{color: '#FFD271'}}>crypto <span role='img' aria-label='winking'>😉</span></span>. 
                Check out my <span><a href={pixel_portrait_url} target='_blank' rel='noopener noreferrer' style={{color: '#ffffff', textDecoration: 'underline', textDecorationColor: '#00ffff'}}>pixel portrait</a></span>!
            </h2>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={jenyen} alt='Jen Yen pixel portrait' width='250' height='250'/>
            </div>
            <h2>
                Previously, I've learned a lot from experiences
                <span style={{color: '#FFD271'}}> @Airbnb</span>, <span style={{color: '#FFD271'}}> @Reddit</span>, <span><a href={twitter_url} target='_blank' rel='noopener noreferrer' style={{color: '#ffffff', textDecoration: 'underline', textDecorationColor: '#FFD271'}}>@Twitter</a></span>, and <span><a href={neutral_url} target='_blank' rel='noopener noreferrer' style={{color: '#ffffff', textDecoration: 'underline', textDecorationColor: '#FFD271'}}>@Neutral</a></span>.
            </h2>
            <h2>
                I'm in some awesome VC communities like
                <span> <a href={kp_url} target='_blank' rel='noopener noreferrer' style={{color: '#ffffff', textDecoration: 'underline', textDecorationColor: '#FFD271'}}>Kleiner Perkins Fellows</a></span>, 
                <span> <a href={ggv_url} target='_blank' rel='noopener noreferrer' style={{color: '#ffffff', textDecoration: 'underline', textDecorationColor: '#FFD271'}}>GGV Capital NextGen Fellows</a></span>, 
                and <span><a href={wiress_url} target='_blank' rel='noopener noreferrer' style={{color: '#ffffff', textDecoration: 'underline', textDecorationColor: '#FFD271'}}>The Wiress</a></span>.
            </h2>
            <h2>
                I like to
                <span> <a href={strava_run_url} target='_blank' rel='noopener noreferrer' style={{color: '#ffffff', textDecoration: 'underline', textDecorationColor: '#ff073a'}}>run <span role='img' aria-label='running'>🏃‍♀️</span></a></span>, 
                <span> <a href={strava_bike_url} target='_blank' rel='noopener noreferrer' style={{color: '#ffffff', textDecoration: 'underline', textDecorationColor: '#ff073a'}}>bike <span role='img' aria-label='biking'>🚴‍♀️</span></a></span>, 
                <span style={{color: '#ff073a'}}> play tennis <span role='img' aria-label='tennis'>🎾</span></span>, 
                <span style={{color: '#ff073a'}}> take photos (see below) <span role='img' aria-label='camera'>📷</span></span>, 
                and <span><a href={photoshop_url} target='_blank' rel='noopener noreferrer' style={{color: '#ffffff', textDecoration: 'underline', textDecorationColor: '#ff073a'}}>make my friends look epic</a></span>. 
            </h2>
            <h2>
                Feel free to reach out! I love making friends and my DMs are always open (Twitter link above).
            </h2>
            <h2>
                I'll update this site soon. I have so many thoughts :)
            </h2>
        </div>
    )
}

export default Bio;