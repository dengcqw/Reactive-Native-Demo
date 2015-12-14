/**
 * NavigatorExample.js
 * haofangtuo

 * Created by DengJinlong on 12/12/15.
 * Copyright (c) 2015 平安好房. All rights reserved.
 */

'use strict';

var React = require('react-native');
var FlexExamples = require('./flexExamples.ios.js');
//var LayoutSample = require('./LayoutSample.ios.js');

var {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Navigator,
} = React;

var PANavigator = React.createClass({

    render: function() {

        return (
            < Navigator
                initialRoute = {
                    {
                        name: 'My First Scene',
                        index: 0
                    }
                }
                renderScene = {
                    (route, navigator) =>
                    < FlexExamples
                        name = {
                            route.name
                        }
                        onForward = {
                            () => {
                                var nextIndex = route.index + 1;
                                navigator.push({
                                    name: 'Scene ' + nextIndex,
                                    index: nextIndex,
                                });
                            }
                        }
                        onBack = {
                            () => {
                                if (route.index > 0) {
                                    navigator.pop();
                                }
                            }
                        }
                    />
                }
            / >
        );
    },

    // Private Process
    _onPress: function() {
    },

});

