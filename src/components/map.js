import { fetchAsyncQuestionPropertyQuestionProperty } from 'inquirer/lib/utils/utils';
import React from 'react';

const Map = ({ feature }) => {

    return (
        React.createElement("iframe", {
            src: feature.src,
            width: feature.width,
            height: feature.height,
            frameborder: feature.frameborder,
            allowfullscreen: feature.allowfullscreen,
            tabindex: feature.tabindex
        })
)};

export default Map;