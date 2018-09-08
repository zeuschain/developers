# Android Java 接口

## 账户管理

### 注册账号

```java
/**
* 注册账号
*
* @param username 用户名
* @param pwd      密码
* @param callBack
*/
public void signup(String username, String pwd, IBclCallBack callBack)
```

### 登录账号

```java
/**
* 登录账号
*
* @param username 用户名
* @param pwd      密码
* @param callBack
*/
public void login(String username, String pwd, IBclCallBack callBack)
```
### 获取私钥

```java
/**
* 获取私钥
*
* @param callBack
*/
public void getPrivateKey(IBclCallBack callBack)
```

### 通过私钥登录

```java
/**
* 通过私钥登录
*
* @param privateKey 私钥
* @param password 设置临时密码
* @param callBack
*/
public void keyLogin(String privateKey, String password,IBclCallBack callBack)
```

### 修改密码

```java
   /**
     * 修改密码
     * @param oldPassword 旧密码
     * @param newPassword 新密码
     * @param callBack
     */
    public void changePassword(String oldPassword, String newPassword,IBclCallBack callBack)
```

### 获取用户信息

```java

/**
* 获取用户信息
*
* @param account  账号
* @param callBack
 */
public void getUserInfo(String account, IBclCallBack callBack)
```
### 转账

```java
/**
* 转账 客户的可以通过获取的资产列表先校验对应资产余额是否足够
*
* @param toAccount 转给目标账号
* @param assetId   资产Id 通过 getBalances先获取资产列表
* @param amount    转账数量
* @param memo      备注说明
* @param  onlyGetFee 设置只返回本次调用所需手续费,默认false
* @param callBack
*/
public void transferAsset(String toAccount, String assetId, String amount, String memo, Boolean onlyGetFee, IBclCallBack callBack)
```

## 代币操作

### 查询账户指定资产

```java
/** 
* 查询账户指定资产 
* 
* @param account         账号 
* @param assetIdOrSymbol 资产id或symbol 
* @param callBack 
*/ 
public void getAccountBalances(String account, String assetIdOrSymbol, IBclCallBack callBack)  
```

### 查询账户记录

```java
/** 
* 查询账户记录 
* 
* @param account  账号 
* @param limit    条数 
* @param callBack 
*/ 
public void queryUserOperations(String account, String limit, IBclCallBack callBack)  
```

### 订阅账户记录

```java
/** 
* 订阅账户记录 
* @param account 
* @param callBack 
*/ 
public void subscribeToUserOperations(String account, IBclCallBack callBack)  
```

## 游戏道具操作

### 注册游戏开发者

```java
/** 
* 注册游戏开发者 
* 
* @param callBack 
*/ 
public void registerGameDeveloper(IBclCallBack callBack) 
```

### 创建游戏版本

```java
/** 
* 创建游戏版本 
* 
* @param versionName 版本名字 
* @param callBack 
*/ 
public void createGameVersion(String versionName, IBclCallBack callBack) 
```

### 提议关联游戏版本

```java
/** 
* 提议关联游戏版本 
* 
* @param gameVersion  游戏版本 
* @param versionOwner 游戏版本创建人 
* @param callBack 
*/ 
public void proposeRelateGameVersion(String gameVersion, String versionOwner, IBclCallBack callBack) 
```

### 创建游戏道具

```java
/** 
* 创建游戏道具 
* 
* @param assetID  资产id 
* @param itemVER  道具版本itemVER 
* @param itemData 道具数据data 
* @param callBack 
*/ 
public void createGameItem(String assetID, String itemVER, String itemData, IBclCallBack callBack) 
```

### 删除游戏道具

```java
/** 
* 删除游戏道具 
* 
* @param itemID   游戏道具实例的唯一标识ID 
* @param callBack 
*/ 
public void deleteGameItem(String itemID, IBclCallBack callBack)  
```

### 更新游戏道具数据

```java
/** 
* 更新游戏道具数据 
* 
* @param itemID   游戏道具实例的唯一标识ID 
* @param itemData 对道具新的描述itemData 
* @param callBack 
*/ 
public void updateGameItem(String itemID, String itemData, IBclCallBack callBack) 
```

### 查询道具详细信息

```java
/** 
* 查询道具详细信息 
* 
* @param gameHashOrId hash或id 
* @param callBack 
*/ 
public void queryGameItemInfo(String gameHashOrId, IBclCallBack callBack)  
```

### 转移游戏道具

```java
/** 
* 转移游戏道具 
* 
* @param toAccount 转移目标账户 
* @param itemId    道具ID 
* @param callBack 
*/ 
public void transferGameItem(String toAccount, String itemId, IBclCallBack callBack)  
```


## 游戏道具买卖


### 查询账户下游戏道具售卖订单

```java
/** 
* 查询账户下游戏道具售卖订单 
* 
* @param account 
* @param pageSize 
* @param page 
*/ 
public void queryAccountGameItemOrders(String account, String pageSize, String page, IBclCallBack callBack) 
```

### 创建游戏道具出售单

```java
/** 
* 创建游戏道具出售单 
* 
* @param otcAccount OTC交易平台账户otcAccount，用于收取挂单费用 
* @param itemId     道具itemID 
* @param price      商品挂单价格price 
* @param fee        挂单费用fee 
* @param memo       挂单备注信息memo 
* @param expiration 过期时间(即挂卖时间,number类型,如3600，表示3600秒后过期) 
* @param callBack 
*/ 
public void createGameItemOrder(String otcAccount, String itemId, String price, String fee, 
String memo, String expiration, IBclCallBack callBack) 
```


### 取消游戏道具出售单

```java
/** 
* 取消游戏道具出售单 
* 
* @param orderId  订单号 
* @param callBack 
*/ 
public void cancelGameItemOrder(String orderId, IBclCallBack callBack)
```

### 装填游戏道具出售单

```java
/** 
* 装填游戏道具出售单 
* 
* @param orderId     订单ID 
* @param seller      seller 
* @param itemId      道具ID 
* @param price       支付价格 
* @param assetId     资源ID 
* @param assetSymbol assetSymbol 
* @param callBack 
*/ 
public void fillGameItemOrder(String orderId, String seller, String itemId, String price, String assetId, String assetSymbol, IBclCallBack callBack)  
```

### 查询全网游戏道具售卖订单

```java
/** 
* 查询全网游戏道具售卖订单 
* 
* @param assetSymbolsOrIds assetSymbolsOrIds 
* @param versionNameOrIds  versionNameOrIds 
* @param pageSize          分页大小 
* @param page              页码 
* @param callBack 
*/ 
public void queryGameItemOrders(String assetSymbolsOrIds, String versionNameOrIds, String pageSize, String page, IBclCallBack callBack)
```


## 道具查询

### 查询游戏开发者所关联的游戏版本

```java
/** 
* 查询游戏开发者所关联的游戏版本 
* 
* @param account  账号 
* @param callBack 
*/ 
public void queryDeveloperGameVersions(String account, IBclCallBack callBack)  
```


### 获取用户(开发者)关联版本提议

```java
/** 
* 获取用户(开发者)关联版本提议 
* 
* @param callBack 
*/ 
public void getAccountProposals(IBclCallBack callBack) 
```

### 查询账户下所拥有的道具

```java
/** 
* 查询账户下所拥有的道具 
* 
* @param account  账号 
* @param callBack 
*/ 
public void queryAccountGameItems(String account, IBclCallBack callBack) 
```

### 查询游戏开发者所创建的道具

```java
/** 
* 查询游戏开发者所创建的道具 
* 
* @param account  账号 
* @param callBack 
*/ 
public void queryGameItemByDeveloper(String account, IBclCallBack callBack) 
```

### 查询账户拥有的所有资产列表

```java
/** 
* 查询账户拥有的所有资产列表 
* 
* @param account  账号 
* @param unit     记账单位 
* @param callBack 
*/ 
public void queryAccountAllBalances(String account, String unit, IBclCallBack callBack) 
```


## 节点投票

### 加载节点投票信息数据 

```java
/** 
* 加载节点投票信息数据 
* @param callBack 
*/ 
public void loadVotes(IBclCallBack callBack) 
```

### 代理投票账户 

```java
/** 
*  代理投票账户 
* @param voteIds  节点数组 
* @param proxyAccount  代理投票账户 
* @param callBack 
*/ 
public void publishVotes(String voteIds,String proxyAccount,IBclCallBack callBack) 
```

### 加载节点投票信息数据 

```java
/** 
* 加载节点投票信息数据 
* @param callBack 
*/ 
public void disconnect(String voteId
```

## 其它

### 初始化

```java
/**
* 初始化
* @param context
* @param url 由官方提供
* @param name由官方提供
* @param faucetUrl由官方提供
* @param chainId 由官方提供
* @param callBack
*/
public void init(Context context, String url, String name, String faucetUrl, String chainId, IBclCallBack callBack) 
```

### 查询block/TXID

```java
/** 
* 查询block/TXID 
* 
* @param blockOrTXID 
* @param callBack 
*/ 
public void queryBlockTXID(String blockOrTXID, IBclCallBack callBack) 
```


