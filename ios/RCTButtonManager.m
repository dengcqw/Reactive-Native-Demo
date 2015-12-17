//
//  RCTButtonManager.m
//  AwesomeProject
//
//  Created by DengJinlong on 12/17/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "RCTButtonManager.h"

// Native Component Sample
@implementation RCTButtonManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  UIButton *aButton = [[UIButton alloc] initWithFrame:CGRectMake(0, 0, 120, 45)];
  [aButton setTitle:@"test button" forState:UIControlStateNormal];
  [aButton setTitleColor:[UIColor redColor] forState:UIControlStateNormal];
  aButton.backgroundColor = [UIColor clearColor];
  aButton.showsTouchWhenHighlighted = YES;
  NSLog(@"button manager create view");
  return aButton;
}

@end
