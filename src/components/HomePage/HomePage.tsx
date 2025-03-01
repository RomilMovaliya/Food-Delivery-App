
import React from 'react'
import Hero from './Hero'
import CuisineList from './CuisineList'
import PopularRecipes from './PopularRecipes'
import FeaturedFood from './FeaturedFood'
import Gallery from './Gallery'
import Offers from './Offers'
import DownloadApp from './DownloadApp'
import Home from './Home'

const HomePage = () => {
    return (
        <>
            <Home />
            <Hero />
            <CuisineList />
            {/* <PopularRecipes /> */}
            <FeaturedFood />
            <Offers />
            <Gallery />
            <DownloadApp />
        </>
    )
}

export default HomePage
