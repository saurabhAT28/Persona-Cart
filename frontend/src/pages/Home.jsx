import React from 'react'
import zzHeroHero from '../components/zzHero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
    return (
        <div>
            <zzHero />
            <LatestCollection />
            <BestSeller/>
            <OurPolicy/>
            <NewsletterBox/>
        </div>



    )
}

export default Home