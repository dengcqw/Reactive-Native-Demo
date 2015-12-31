//
//  RCTButtonManager.m
//  AwesomeProject
//
//  Created by DengJinlong on 12/17/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "RCTButtonManager.h"
#import "RCTConvert.h"

// Native Component Sample
@implementation RCTButtonManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  RCTButton *aButton = [[RCTButton alloc] init];
  [aButton setTitle:@"test button" forState:UIControlStateNormal];
  [aButton setTitleColor:[UIColor redColor] forState:UIControlStateNormal];
  [aButton setTitleColor:[UIColor grayColor] forState:UIControlStateDisabled];
  aButton.backgroundColor = [UIColor grayColor];
  aButton.layer.borderColor = [UIColor redColor].CGColor;
  aButton.layer.borderWidth = 1;
  aButton.showsTouchWhenHighlighted = YES;
  [aButton addTarget:self action:@selector(buttonAction:) forControlEvents:(UIControlEventTouchUpInside)];
  NSLog(@"button manager create view");
  return aButton;
}

RCT_EXPORT_VIEW_PROPERTY(enabled, BOOL)
RCT_CUSTOM_VIEW_PROPERTY(title, NSString, RCTButton) {
  [view setTitle:[RCTConvert NSString:json] forState:UIControlStateNormal];
}

RCT_EXPORT_VIEW_PROPERTY(onPress, RCTBubblingEventBlock);

- (void)buttonAction:(RCTButton *)sender {
    NSLog(@"button action");
    if (sender.onPress) {
      sender.onPress(@{});
    }
}

@end

@implementation RCTButton
@end
