//
//  RCTButtonManager.h
//  AwesomeProject
//
//  Created by DengJinlong on 12/17/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "RCTViewManager.h"

@interface RCTButtonManager : RCTViewManager

@end

@interface RCTButton : UIButton
@property (nonatomic, copy) RCTBubblingEventBlock onPress;
@end