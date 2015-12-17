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

#define ScreenW ([UIScreen mainScreen].bounds.size.width)
#define ScreenH ([UIScreen mainScreen].bounds.size.height)

@interface RootViewController ()
@property (strong, nonatomic) RCTRootView *rootView;
@end

@implementation RootViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
  NSURL *jsCodeLocation;
  jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
  self.rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"AwesomeProject"
                                               initialProperties:nil
                                                   launchOptions:nil];
  [self.view addSubview:self.rootView];
  
  UIBarButtonItem *item = [[UIBarButtonItem alloc] initWithBarButtonSystemItem:(UIBarButtonSystemItemAdd) target:self action:@selector(xxxxx)];
  self.navigationItem.rightBarButtonItem = item;
  
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(xxxxx) name:@"push_view" object:nil];
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

- (void)xxxxx{
    TestViewController *test = [[TestViewController alloc] init];
    [self.navigationController pushViewController:test animated:YES];
}

- (void)dealloc
{
  NSLog(@"check js obj dealloc"); 
}

@end