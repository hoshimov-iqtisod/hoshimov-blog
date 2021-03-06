import React from 'react';
import './home-splash.css';
import Carousel from 'nuka-carousel';
import jennifer from '../../images/jennifer.webp';
import odilbek from '../../images/odilbek.webp';
import frederick from '../../images/frederick.webp';
import timur from '../../images/timur.webp';
import sodiq from '../../images/sodiq.webp';


class HomeSplash extends React.Component {
    // componentDidMount() {
    //     import('nuka-carousel').then((carousel) => {
    //         this.carousel = carousel;
    //     }).catch((error) => console.log(error));
    // }
    render() {
        // const Carousel = this.carousel;
          return (
            <section className="home-splash">
                    <Carousel autoplay renderBottomCenterControls={null} renderCenterLeftControls={null} renderCenterRightControls={null} wrapAround autoplayReverse transitionMode='fade'>
                        <img src={jennifer} alt="Jennifer"/>
                        <img src={odilbek} alt="Odilbek"/>
                        <img src={frederick} alt="Frederick"/>
                        <img src={timur} alt="Timur"/>
                        <img src={sodiq} alt="Sodiq"/>
                    </Carousel>
            </section>
        )
    }
}

export default HomeSplash;