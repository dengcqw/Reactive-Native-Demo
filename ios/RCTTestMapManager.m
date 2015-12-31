//
//  RCTTestMapManager.m
//  AwesomeProject
//
//  Created by DengJinlong on 12/27/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "RCTTestMapManager.h"
#import <MapKit/MapKit.h>

@implementation RCTTestMapManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  return [[MKMapView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)

@end
