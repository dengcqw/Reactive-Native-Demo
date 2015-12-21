/**
 * button.js
 * haofangtuo

 * Created by DengJinlong on 17/12/15.
 * Copyright (c) 2015 平安好房. All rights reserved.
 */

'use strict';

var React = require('react-native');
var {
    requireNativeComponent,
    View,
} = React;


var Button = React.createClass({

    getInitialState: function() {
        return {
        };
    },

    render: function() {
        return(
              <RCTButton
                onStartShouldSetResponder = {() => true}
                onResponderTerminationRequest = {() => false}
              />
        );
    },
});

Button.propTypes = {
    ...View.propTypes,
  /**
   * When this property is set to `true` and a valid camera is associated
   * with the map, the camera’s pitch angle is used to tilt the plane
   * of the map. When this property is set to `false`, the camera’s pitch
   * angle is ignored and the map is always displayed as if the user
   * is looking straight down onto it.
   */
  enabled: React.PropTypes.bool,
};

var RCTButton = requireNativeComponent('RCTButton', Button);

module.exports = Button;
