import React from 'react';
import CareersCard from '../components/CareersCard/CareersCard';
import CareerBanner from '../components/CareerBanner/CareerBanner';
class LandingPage extends React.Component {
  render() {
    return (
        <div>
            {/* <Banner />
            <TournamentTab />
            <Videos />
            <Blogs />
            <About />
            <CarouselComponent/>
            <Footer/> */}
            <CareerBanner/>
            <CareersCard />
        </div>
        );
            }
}

export default LandingPage;
