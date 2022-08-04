import React from 'react';
import './SearchPage.css';
import { Button } from '@mui/material';
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>162 stays · 04 August to 30 August · 2 Guest</p>
                <h1>Stays Nearby</h1>
                <Button variant="outlined">Sort By</Button>
                <Button variant="outlined">Type Of Place</Button>
                <Button variant="outlined">Reviews</Button>
                <Button variant="outlined">Rooms And Beds</Button>
                <Button variant="outlined">More Filters</Button>
            </div>
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private Room In Center Of Noida"
                title="Spacious Edwardian House"
                description="1 Guest · 1 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
                price="₹13,449 / night"
                total="₹33,779 total"
            />

            <SearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Private Room In Center Of Kanpur"
                title="Independant Luxury Studio "
                description="2 Guest · 3 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Kitchen"
                price="₹11,449 / night"
                total="₹25,659 total"
            />

            <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Private Room In Center Of Goa"
                title="London Studio Apartments"
                description="4 Guest · 4 Bedroom · 4 Bed · 2 Bathrooms · Free Parking · Washing Machine"
                price="₹9,770 / night"
                total="₹18,400 total"
            />
            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Private Room In Center Of Mumbai"
                title="Peaceful Modern Room"
                description="1 Guest · 1 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
                price="₹8,350 / night"
                total="₹14,200 total"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private Room In Center Of Puri"
                title="Spacious Modern Bedroom"
                description="3 Guest · 1 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Free parking · Dry Cleaning"
                price="₹16,779 / night"
                total="₹33,800 total"
            />
            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Private Room In Center Of Kochi"
                title="The Blue Room"
                description="2 Guest · 1 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Washing Machine"
                price="₹9,979 / night"
                total="₹20,999 total"
            />
        </div>
    )
}

export default SearchPage