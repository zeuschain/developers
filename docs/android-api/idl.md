# Android Java 接口

## 全部

### 初始化
```java
/**
* 初始化
* @param context
* @param url
* @param name
* @param faucetUrl
* @param chainId
* @param callBack
*/
public void init(Context context, String url, String name, String faucetUrl, String chainId,
IBclCallBack callBack)
```

### 注册账号

```java
/**
* 注册账号
*
* @param username 用户名
* @param pwd 密码
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
* @param pwd 密码
* @param callBack
*/
public void login(String username, String pwd, IBclCallBack callBack)
```

### 获取平台可以购买的道具列表

```java
/**
* 获取平台可以购买的道具列表
*
* @param developerAccount 开发者账号
* @param callBack
*/
public void getItems(String developerAccount, IBclCallBack callBack)
```

### 转账

```java
/**
* 转账 客户的可以通过获取的资产列表先校验对应资产余额是否足够
*
* @param toAccount 转给目标账号
* @param assetId 资产Id 通过 getBalances先获取资产列表
* @param amount 转账数量
* @param memo 备注说明
* @param callBack
*/
public void transferAsset(String toAccount, String assetId, String amount, String memo,
IBclCallBack callBack)
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
* @param callBack
*/
public void keyLogin(String privateKey, IBclCallBack callBack)
```

### 获取用户信息

```java
/**
* 获取用户信息
*
* @param account 账号
* @param callBack
*/
public void getUserInfo(String account, IBclCallBack callBack)
```

### 获取用户资产

```java
/**
* 获取用户资产
*
* @param assetId 资产id
* @param account 账号
* @param callBack
*/
public void getBalances(String assetId, String account, IBclCallBack callBack)
```

### 获取平台itemVERs

```java
/**
* 获取平台itemVERs
*
* @param callBack
*/
public void getItemVERs(IBclCallBack callBack)
```

### declaraionItemVERs

```java
/**
* @param itemVERs
* @param callBack
*/
public void declaraionItemVERs(String itemVERs, IBclCallBack callBack)
```

### 创建道具

```java
/**
* 创建道具
*
* @param assetId 资产id
* @param itemVER 道具版本itemVER
* @param itemData 道具数据data
* @param count 道具数量
* @param callBack
*/
public void createItem(String assetId, String itemVER, String itemData, String count,
IBclCallBack callBack)
```

### 删除道具

```java
/**
* 删除道具
*
* @param itemId 游戏道具实例的唯一标识ID，如果是批量删除中间以&quot;,&quot;分隔开

* @param callBack
*/
public void deleteItemData(String itemId, IBclCallBack callBack)
```

### 修改道具

```java
/**
* 修改道具
*
* @param itemId 游戏道具实例的唯一标识ID
* @param itemData 对道具新的描述itemData
* @param callBack
*/
public void changeItem(String itemId, String itemData, IBclCallBack callBack)
```

### 卖出道具

```java
/**
* 卖出道具
*
* @param otcAccount OTC交易平台账户otcAccount，用于收取挂单费用
* @param itemID 道具itemID
* @param fee 挂单费用fee
* @param price 商品挂单价格price
* @param memo 挂单备注信息memo
* @param callBack
*/
public void sell(String otcAccount, String itemID, String fee, String price, String memo,
IBclCallBack callBack)
```

### 购买道具

```java
/**
* 购买道具
*
* @param receiver 收款方receiver
* @param token 价格token
* @param assetId 资产assetID
* @param itemId 道具itemID
* @param itemVER 道具版本itemVER
* @param itemData 道具itemData
* @param memo 交易备注信息memo
* @param callBack
*/
public void buy(String receiver, String token, String assetId, String itemId, String
itemVER, String itemData, String memo, IBclCallBack callBack)
```