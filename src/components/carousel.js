import React from 'react';
import Loadable from 'react-loadable';

const Carousel = Loadable({
    loader: () => import('./home-splash'),
    loading() {
        return <div>Loading...</div>
    } 
})

export default () => <Carousel />