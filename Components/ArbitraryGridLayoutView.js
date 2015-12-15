/**
 * ArbitraryGridLayoutView.js
 * haofangtuo

 * Created by DengJinlong on 12/11/15.
 * Copyright (c) 2015 平安好房. All rights reserved.
 */

'use strict'

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    View,
    Dimensions,
} = React;

/**
 * Globle Variable
 */
var topLayout;

/**
 * Reactive Native Class
 */
var ArbitraryGridView = React.createClass({
    getInitialState: function() {
        return { // variable here can use by 'this.state'
        };
    },

    _layoutSubViews: function(layout, containerFlex, viewList, isTopLayout) {
        var flexs = layout.flexRatio.split(':');
        var direction;
        var subLayouts;
        var borderStyle = [];
        if ( layout.left === undefined ) {
            direction = 'column';
            subLayouts = [layout.top, layout.bottom];
            borderStyle.push(styles.bottomBorder);
        } else {
            direction = 'row';
            subLayouts = [layout.left, layout.right];
            borderStyle.push(styles.rightBorder);
        }
        if ( isTopLayout ) {
            borderStyle.push(style.topBorder);
            borderStyle.push(style.bottomBorder);
        }

        var subViews = [];
        for (var layout in subLayouts) {
            var idx = subLayouts[layout];
            if (layout.flexRatio == undefined) { // no more subview
                subViews.push(
                    < View style = { idx===0? borderStyle : {} } >
                        { viewList[idx] }
                    < /View >
                );
            } else {
                subViews.push(
                    this._layoutSubViews(layout, flexs[idx], viewList.slice(idx, idx+2), false)
                );
            }
        }

        return subViews;
    },

    componentWillMount: function () {
        if (this.props.children != undefined) {
            viewList = this.props.children;
        } else if (this.props.views != undefined){
            viewList = this.props.views;
        }

        topLayout = this.props.layout;
    },

    render: function() {
        var direction = (layout.left === undefined)? 'column' : 'row';
        return this._layoutSubViews(topLayout, 1, viewList, true);
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    topBorder: {
        borderTopWidth:0.5,
        borderColor:'#DDD8CE'
    },
    leftBorder: {
        borderLeftWidth:0.5,
        borderColor:'#DDD8CE'
    },
    bottomBorder: {
        borderBottomWidth:0.5,
        borderColor:'#DDD8CE'
    },
    rightBorder: {
        borderRightWidth:0.5,
        borderColor:'#DDD8CE'
    },
});

/**
 * Private Class
 */


/**
 * Exports
 */
exports.title = 'template file'
exports.description = 'This is template file for iOS Reactive Native develop! Enjoy it.'
exports.examples = {
    <ArbitraryGridView
        layout = {
            {
                left:{
                    top:{},
                    bottom:{},
                    flexRatio:"1:2"
                },
                right:{},
                flexRatio:"1:1",
            }
        }
        views = {[
            topView,bottomView,rightView,
        ]}
    />

}

/**
 * Private Component
 */
module.exports = ArbitraryGridView;
