# iOS Objective-C 接口

## 账户管理

### 登录账号

```objectivec
/**
  登录账号

 @param userName 用户名
 @param pwd 密码
 @param block 回调结果字典
 */
- (void)LoginWithName:(NSString *)userName pwd:(NSString *)pwd Callback:(void(^)(NSDictionary *responseDict))block;
```

### 退出登录

```objectivec
/**
 退出登录

 @param block 结果
 */
- (void)Logout:(void(^)(NSDictionary *responseDict))block;

```
### 注册账号

```objectivec
/**
  注册账号

 @param userName 用户名
 @param pwd 密码
 @param block 回调结果字典
 */
- (void)SignupWithName:(NSString *)userName pwd:(NSString *)pwd Callback:(void(^)(NSDictionary *responseDict))block;
```

### 修改密码

```objectivec
/**
  修改密码

 @param oldPassword 旧密码
 @param nowPassword 新密码
 @param block 修改密码结果
 */
- (void)ChangePasswordWithOldPwd:(NSString *)oldPassword NewPwd:(NSString *)nowPassword Callback:(void(^)(NSDictionary *responseDict))block;
```


### 获取私钥

```objectivec
/**
  获取私钥

 @param block 回调结果字典
 */
- (void)GetPrivateKey:(void(^)(NSDictionary *responseDict))block;
```

### 通过私钥登录

```objectivec
/**
 通过私钥登录

 @param key 私钥
 @param block 回调结果字典
 */
- (void)KeyLoginWithPrivateKey:(NSString *)key Callback:(void(^)(NSDictionary *responseDict))block;
```

### 获取用户信息

```objectivec
/**
 获取用户信息

 @param account 账号
 @param block 回调结果字典
 */
- (void)GetUserInfoWithAccount:(NSString *)account Callback:(void(^)(NSDictionary *responseDict))block;
```

### 转账

```objectivec
/**
  转账 客户的可以通过获取的资产列表先校验对应资产余额是否足够

 @param account 转给目标账号
 @param assetId 资产Id 通过 getBalances先获取资产列表
 @param amount 转账数量
 @param memo 备注说明
 @param block 回调结果字典
 */
- (void)TransferAssetToAccount:(NSString *)account
                       AssetId:(NSString *)assetId
                        Amount:(NSString *)amount
                          Memo:(NSString *)memo
                      Callback:(void(^)(NSDictionary *responseDict))block;
```

### 锁定账户

```objectivec
/**
 锁定账户

 @param block 回调结果
 */
- (void)LockAccountWithResultCallback:(void(^)(NSDictionary *responseDict))block;
```

### 解锁账号

```objectivec
/**
 解锁账号

 @param password 密码
 @param block 回调结果
 */
- (void)UnLockAccountByPassword:(NSString *)password Callback:(void(^)(NSDictionary *responseDict))block;
```

## 代币操作

### 查询账户拥有的所有资产列表

```objectivec
/**
 查询账户拥有的所有资产列表

 @param account 账号
 @param unit 记账单位
 @param block 查询结果回调
 */
- (void)QueryAccountAllBalancesByAccount:(NSString *)account Unit:(NSString *)unit Callback:(void(^)(NSDictionary *responseDict))block;

```

### 查询账户指定资产

```objectivec
/**
  查询账户指定资产

 @param account 账号
 @param assetIdOrSymbol 资产id或symbol
 @param block 查询结果回调
 */
- (void)GetAccountBalancesByAccount:(NSString *)account AssetIDOrSymbol:(NSString *)assetIdOrSymbol Callback:(void(^)(NSDictionary *responseDict))block;

```

### 查询账户记录

```objectivec
/**
  查询账户记录

 @param account 账号
 @param limitCount 条数
 @param block 查询结果回调
 */
- (void)QueryUserOperationsByAccount:(NSString *)account Limit:(NSInteger)limitCount Callback:(void(^)(NSDictionary *responseDict))block;
```


### 订阅账户记录

```objectivec
/**
  订阅账户记录

 @param account 账号
 @param block 订阅结果
 */
- (void)SubscribeToUserOperationsByAccount:(NSString *)account Callback:(void(^)(NSDictionary *responseDict))block;
```




### 查看当前登录账户收到的提议

```objectivec
/**
  查看当前登录账户收到的提议

 @param block 结果
 */
- (void)GetAccountProposalsWithResult:(void(^)(NSDictionary *responseDict))block;
```


## 游戏道具操作

### 注册游戏开发者

```objectivec
/**
 注册游戏开发者

 @param block 回调结果
 */
- (void)RegisterGameDeveloperWithResultCallback:(void(^)(NSDictionary *responseDict))block;
```

### 创建游戏版本

```objectivec
/**
 创建游戏版本

 @param versionName 版本名称
 @param block 创建结果
 */
- (void)CreateGameVersionWith:(NSString *)versionName Callback:(void(^)(NSDictionary *responseDict))block;
```

### 提议关联游戏版本

```objectivec
/**
 提议关联游戏版本

 @param gameVersion 游戏版本
 @param owner 游戏版本创建人
 @param block 结果回调
 */
- (void)ProposeRelateGameVersionWith:(NSString *)gameVersion VersionOwner:(NSString *)owner Callback:(void(^)(NSDictionary *responseDict))block;
```

### 创建游戏道具

```objectivec
/**
  创建游戏道具

 @param assetId 资产id
 @param itemVer 道具版本itemVER
 @param itemData 道具数据data
 @param block 结果
 */
- (void)CreateGameItemByAssetId:(NSString *)assetId
                            VER:(NSString *)itemVer
                           Data:(NSString *)itemData
                       Callback:(void(^)(NSDictionary *responseDict))block;
```


### 删除游戏道具

```objectivec
/**
  删除游戏道具

 @param itemID 游戏道具实例的唯一标识ID
 @param block 结果
 */
- (void)DeleteGameItemByItemID:(NSString *)itemID Callback:(void(^)(NSDictionary *responseDict))block;
```


### 更新游戏道具数据

```objectivec
/**
 更新游戏道具数据

 @param itemID 游戏道具实例的唯一标识ID
 @param itemData 对道具新的描述itemData
 @param block 更新结果
 */
- (void)UpdateGameItemBy:(NSString *)itemID Data:(NSString *)itemData Callback:(void(^)(NSDictionary *responseDict))block;
```

### 查询道具详细信息

```objectivec
/**
 查询道具详细信息

 @param gameHashOrID hash或道具id
 @param block 查询结果
 */
- (void)QueryGameItemInfoBy:(NSString *)gameHashOrID Callback:(void(^)(NSDictionary *responseDict))block;
```


### 转移游戏道具
/**
 转移游戏道具

 @param account 转移目标账户
 @param itemID 道具ID
 @param block 转移结果
 */
- (void)TransferGameItemToAccount:(NSString *)account ItemID:(NSString *)itemID Callback:(void(^)(NSDictionary *responseDict))block;
```

### 查询账户下所拥有的道具

```objectivec
/**
 查询账户下所拥有的道具

 @param account 账户
 @param block 查询结果
 */
- (void)QueryAccountGameItemsByAccount:(NSString *)account Callback:(void(^)(NSDictionary *responseDict))block;
```


## 游戏道具买卖

### 创建游戏道具出售单

```objectivec
/**
 创建游戏道具出售单

 @param account OTC交易平台账户otcAccount, 用于收取挂单费用
 @param itemID 道具itemID
 @param price 商品挂单价格price
 @param fee 挂单费用
 @param memo 挂单备注信息
 @param expiration 过期时间(即挂卖时间,number类型,如3600，表示3600秒后过期)
 */
- (void)CreateGameItemOrderByOTCAccount:(NSString *)account
                                 ItemID:(NSString *)itemID
                                  Price:(NSString *)price
                                    Fee:(NSString *)fee
                                   Memo:(NSString *)memo
                             Expiration:(NSInteger)expiration
                               Callback:(void(^)(NSDictionary *responseDict))block;

```

### 取消游戏道具出售单

```objectivec
/**
  取消游戏道具出售单

 @param orderID 订单号
 @param block 取消结果回调
 */
- (void)CancelGameItemOrderByOrderID:(NSString *)orderID Callback:(void(^)(NSDictionary *responseDict))block;
```


### 装填游戏道具出售单

```objectivec
/**
  装填游戏道具出售单

 @param orderID 订单ID
 @param seller seller
 @param itemID 道具ID
 @param price 支付价格
 @param assetID 资源ID
 @param assetSymbol assetSymbol
 @param block 操作结果
 */
- (void)FillGameItemOrderByOrder:(NSString *)orderID
                          Seller:(NSString *)seller
                          ItemID:(NSString *)itemID
                           Price:(NSString *)price
                         AssetID:(NSString *)assetID
                    AssetSynmbol:(NSString *)assetSymbol
                        Callback:(void(^)(NSDictionary *responseDict))block;
```



## 道具查询

### 查询全网游戏道具售卖订单

```objectivec
/**
  查询全网游戏道具售卖订单

 @param symbolsOrIds assetSymbolsOrIds
 @param versionNameOrIds versionNameOrIds
 @param pageSize 分页大小
 @param page 页码
 @param block 查询结果回调
 */
- (void)QueryGameItemOrdersByAssetSymbolsOrIds:(NSString *)symbolsOrIds
                              VersionNameOrIds:(NSString *)versionNameOrIds
                                      PageSize:(NSInteger)pageSize
                                          Page:(NSInteger)page
                                      Callback:(void(^)(NSDictionary *responseDict))block;
```


### 查询账户下游戏道具售卖订单

```objectivec
/**
  查询账户下游戏道具售卖订单

 @param account  账号
 @param pageSize 分页大小
 @param page 页码
 @param block 查询结果回调
 */
- (void)QueryAccountGameItemOrdersByAccount:(NSString *)account PageSize:(NSInteger)pageSize Page:(NSInteger)page Callback:(void(^)(NSDictionary *responseDict))block;
```

### 查询游戏开发者所关联的游戏版本

```objectivec
/**
 查询游戏开发者所关联的游戏版本

 @param account 账号
 @param block 查询结果回调
 */
- (void)QueryDeveloperGameVersionsByAccount:(NSString *)account Callback:(void(^)(NSDictionary *responseDict))block;
```


### 查询游戏开发者所创建的道具

```objectivec
/**
查询游戏开发者所创建的道具

 @param account 账号
 @param block 查询结果回调
 */
- (void)QueryGameItemByDeveloperByAccount:(NSString *)account Callback:(void(^)(NSDictionary *responseDict))block;

```




## 节点投票

### 代理投票账户

```objectivec
/**
 代理投票账户

 @param voteIDs 节点数组 Array<NSString>
 @param account 代理投票账户
 @param block 结果
 */
- (void)PublishVotesByVoteIds:(NSArray <NSString *>*)voteIDs ProxyAccount:(NSString *)account Callback:(void(^)(NSDictionary *responseDict))block;
```

### 加载节点投票信息数据

```objectivec
/**
 加载节点投票信息数据

 @param block 数据返回
 */
- (void)LoadVotesWithResult:(void(^)(NSDictionary *responseDict))block;
```

## 其它

### 单例实例

```objectivec
/**
 单例实例

 @return sdk方法提供者
 */
+ (instancetype)sharedInstance;
```

### 库传参初始化

```objectivec
/**
 库传参初始化

 @param url api节点
 @param name 节点名称
 @param core_asset 链标识
 @param faucetUrl 地址
 @param chainId 链接
 @param block 回调结果字典  eg:{ status: 1, data: "init Success" }
 */
- (void)initWithUrl:(NSString *)url
               Name:(NSString *)name
         Core_Asset:(NSString *)core_asset
         Faucet_url:(NSString *)faucetUrl
            ChainId:(NSString *)chainId
           Callback:(void(^)(NSDictionary *responseDict))block;
```





### 断开websoket通信

```objectivec
/**
 断开websoket通信
 @param block 结果
 */
- (void)Disconnect:(void(^)(NSDictionary *responseDict))block;
```

### 查询block/TXID

```objectivec
/**
  查询block/TXID

 @param blockOrTXID 区块ID
 @param block 查询结果
 */
- (void)QueryBlockTXID:(NSString *)blockOrTXID Callback:(void(^)(NSDictionary *responseDict))block;
```
