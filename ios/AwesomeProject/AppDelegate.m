/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTRootView.h"
#import "RootViewController.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [self copyjsBundleToDocument];
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UINavigationController *naviVC = [[UINavigationController alloc] initWithRootViewController:[RootViewController new]];
  self.window.rootViewController = naviVC;
  [self.window makeKeyAndVisible];

  return YES;
}

- (void)copyjsBundleToDocument {
  NSFileManager *fileManager = [NSFileManager defaultManager];
  NSError *error;
  NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
  NSString *documentsDirectory = [paths objectAtIndex:0];
  
  NSString *jsBundle = [documentsDirectory stringByAppendingPathComponent:@"main.jsbundle"];
  self.jsBundlePath = jsBundle;
  
  if ([fileManager fileExistsAtPath:jsBundle] == YES) {
    [fileManager removeItemAtPath:jsBundle error:&error];
  }
  
  if ([fileManager fileExistsAtPath:jsBundle] == NO) {
    NSString *resourcePath = [[NSBundle mainBundle] pathForResource:@"index.ios" ofType:@"bundle"];
    [fileManager copyItemAtPath:resourcePath toPath:jsBundle error:&error];
  }
}

@end
