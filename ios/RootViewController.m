//
//  RootViewController.m
//  Demo
//
//  Created by 赵怡苗 on 15/12/16.
//  Copyright © 2015年 Facebook. All rights reserved.
//

#import "RootViewController.h"
#import <RCTRootView.h>
#import "TestViewController.h"
#import "patch.h"
#import "AppDelegate.h"

#define ScreenW ([UIScreen mainScreen].bounds.size.width)
#define ScreenH ([UIScreen mainScreen].bounds.size.height)

@interface RootViewController ()
@property (strong, nonatomic) RCTRootView *rootView;
@end

@implementation RootViewController

- (void)viewDidLoad {
    [super viewDidLoad];
  
  [self loadViewFromBundle];
  
  UIBarButtonItem *rightItem = [[UIBarButtonItem alloc] initWithBarButtonSystemItem:(UIBarButtonSystemItemAdd) target:self action:@selector(pushViewNotif:)];
  self.navigationItem.rightBarButtonItem = rightItem;
  
  UIBarButtonItem *leftItem = [[UIBarButtonItem alloc] initWithTitle:@"Patch" style:(UIBarButtonItemStylePlain) target:self action:@selector(updateBundleAction:)];
  self.navigationItem.leftBarButtonItem = leftItem;
  
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(pushViewNotif:) name:@"push_view" object:nil];
}

- (void)loadViewFromBundle {
  if (self.rootView) {
    [self.rootView removeFromSuperview];
  }
  NSURL *jsCodeLocation;
  //  jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/UIExplorerApp.ios.bundle?platform=ios&dev=true"];
  //  self.rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
  //                                                      moduleName:@"UIExplorerApp"
  //                                               initialProperties:nil
  //                                                   launchOptions:nil];
  
  //  {
  //  jsCodeLocation = [NSURL URLWithString:@"http://10.59.92.152:8081/index.ios.bundle?platform=ios&dev=true"];
  //  self.rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
  //                                                      moduleName:@"AwesomeProject"
  //                                               initialProperties:nil
  //                                                   launchOptions:nil];
  //  }
  
  
  
  //   jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"index.ios.mapview" withExtension:@"bundle"];
  
  AppDelegate *appDelegate = [UIApplication sharedApplication].delegate; 
  jsCodeLocation = [NSURL URLWithString:appDelegate.jsBundlePath];
  
  self.rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                              moduleName:@"AwesomeProject"
                                       initialProperties:nil
                                           launchOptions:nil];
  [self.view addSubview:self.rootView];
}

//  diff -u index.ios.bundle index.ios.mapview.bundle > patch.txt
- (void)updateBundleAction:(id)sender {
  dispatch_queue_t concurrentQueue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
  dispatch_async(concurrentQueue, ^{
    AppDelegate *appDelegate = [UIApplication sharedApplication].delegate; 
    NSString *filePath = appDelegate.jsBundlePath; 
    NSLog(@"dist file: %@", filePath);
    NSString *diffPath = [[NSBundle mainBundle] pathForResource:@"patch.txt" ofType:nil];
    NSLog(@"patch file: %@",diffPath);
    NSLog(@"patch ret: %@",@(applyPatch(filePath, diffPath, @[@"--quiet", @"--force"])));
    
    dispatch_async(dispatch_get_main_queue(), ^{
      [self loadViewFromBundle]; 
      [self.view setNeedsLayout];
      NSLog(@"update reactive native bundle finish");
    });
  });
}

- (void)viewDidLayoutSubviews {
  [super viewDidLayoutSubviews]; 
  self.rootView.frame = CGRectMake(0, 44+20, ScreenW, ScreenH); 
  NSLog(@"frame:%@",NSStringFromCGRect(self.view.frame)); 
} 

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)pushViewNotif:(id)obj{
    TestViewController *test = [[TestViewController alloc] init];
    [self.navigationController pushViewController:test animated:YES];
}

- (void)dealloc {
  NSLog(@"check js obj dealloc"); 
}

@end