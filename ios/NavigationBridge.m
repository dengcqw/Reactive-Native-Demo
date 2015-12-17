//
//  NavigationBridge.m
//  AwesomeProject
//
//  Created by DengJinlong on 12/17/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "NavigationBridge.h"

@implementation NavigationBridge

RCT_EXPORT_MODULE(NaviB);

RCT_EXPORT_METHOD(jump:(NSString *)ss) {
  [[NSNotificationCenter defaultCenter] postNotificationName:@"push_view" object:nil];
}

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

@end
