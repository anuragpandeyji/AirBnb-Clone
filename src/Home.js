import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Fun Combo in Goa"
                description="Unique activities we can do together, led by a world of hosts."
                price="₹9,699 / night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique Stays in Andaman"
                description="Spaces that are more than just a place to sleep."
                price="₹19,733 / night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire Homes in Manali"
                description="Comfortable private places, with room for friends or family."
                price="₹11,840 / night"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="Flat in Mumbai"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="₹15,240 / night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Apartment in Kochi"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="₹8,999 / night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="Flat in Rishikesh"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="₹10,499 / night"
            />
            </div>
        </div>
    )
}

export default Home