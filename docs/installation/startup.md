# 节点启动

本章描述各个区块链节点启动所需设定。

为了让节点程式可以随著系统启动，将节点以服务方式执行。编辑节点服务所需的单元档，让此档内容如「Systemd 服务单元档」所示:

```bash
$ sudo vi /etc/systemd/system/zeus-node.service
```

Systemd 服务单元档(unit file):

```
[Unit]
Description = Zeus node

[Service]
ExecStart = /opt/zeus/witness_node -d /opt/zeus/witness_node_data_dir/

[Install]
WantedBy = multi-user.target
```

安装服务

```bash
$ sudo systemctl daemon-reload
$ sudo systemctl enable zeus-node
```

节点服务单元档安装完成后，节点程式会随系统启动自动执行。

有时需要手动执行、停止或检查服务状态，可以按照下面指令进行。

启动服务:

```bash
$ sudo systemctl start zeus-node
```

停止服务:

```bash
$ sudo systemctl start zeus-node
```

检查服务状态:

```bash
$sudo systemctl status zeus-node
```

## 主要出块节点启动

1. 建立初始化目录，复制必要档案并执行

```bash
$ mkdir -p /opt/zeus/
$ cp witness_node /opt/zeus/
$ cp genesis.json /opt/zeus/
$ cp config.ini /opt/zeus/
$ cd /opt/zeus/
$ chmod +x witness_node
$ ./witness_node --genesis-json genesis.json
## 执行后，出现 chain-id 之后，使用 control-c 中断
```

2. 复制主要环境档案到特定目录

```bash
$ mv genesis.json ./witness_node_data_dir/
$ mv config.ini ./witness_node_data_dir/
```

3. 修改 ./witness_node_data_dir/config.ini 档案

下面为 config.ini 范例：

```bash
# Endpoint for P2P node to listen on
 p2p-endpoint = 0.0.0.0:35789

# P2P nodes to connect to on startup (may specify multiple times)
# seed-node = ## 创世节点此处不需设定

# JSON array of P2P nodes to connect to on startup
 seed-nodes = [] ## 创世节点此部分需设定为空

# Pairs of [BLOCK_NUM,BLOCK_ID] that should be enforced as checkpoints.
# checkpoint =

# Endpoint for websocket RPC to listen on
# rpc-endpoint = ## 创世节点并不会用到RPC 故此处不另做设定

# Endpoint for TLS websocket RPC to listen on
# rpc-tls-endpoint =

# The TLS certificate file for this server
# server-pem =

# Password for this certificate
# server-pem-password =

# File to read Genesis State from
genesis-json = /opt/zeus/witness_node_data_dir/genesis.json ## 指定 genesis.json档案位址，这个项目每个节点都必须做设定

# Block signing key to use for init witnesses, overrides genesis file
# dbg-init-key =

# JSON file specifying API permissions
# api-access =

# Space-separated list of plugins to activate
# plugins =

# Enable block production, even if the chain is stale.
enable-stale-production = true ## 所有的见证人节点此部分需设定为 true才能正确出块。其他同步用全节点这部分应设定为 false。

# Percent of witnesses (0-99) that must be participating in order to produce blocks
required-participation = false

# ID of witness controlled by this node (e.g. "1.6.5", quotes are required, may specify multiple times)
 witness-id = "1.6.1" ## witness-id = “1.6.x” x 部分为帐号序列，需要与 genesis.json 内定的见证人序列号一致。也就是 genesis.json中指定的第一位见证人，那么这里就是用 1.6.1。若是第二位见证人，这里就用 1.6.2。这里的id 指定，需要与 genesis.json 里的序列一致，也必须与下面参数中的公钥与私钥一致。（非见证人节点，这个位置就不需要。）

# Tuple of [PublicKey, WIF private key] (may specify multiple times),The owner of the private key is nico
private-key = ["MTN6P5hfysmhpniKfY7MbvwU7ZKhsagS6YZ69ZmooZkDtyTU8dtqX","5KHKmBk8jySJC9eZeN9HGBeHo4gE1ULQCkjSpSVSDiVAizZnV2o"] ## 见证人节点的公钥与私钥，前为公钥后为私钥。这里的资料需要搭配前项 witness-id，必须一致。

# Account ID to track history for (may specify multiple times)
# track-account =

# Keep only those operations in memory that are related to account history tracking
partial-operations = 1

# Maximum number of operations per account will be kept in memory
max-ops-per-account = 1000

# Elastic Search database node url
# elasticsearch-node-url =
# Number of bulk documents to index on replay(5000)
# elasticsearch-bulk-replay =

# Number of bulk documents to index on a syncronied chain(10)
# elasticsearch-bulk-sync =

# Log bulk events to database
# elasticsearch-logs =

# Use visitor to index additional data(slows down the replay)
# elasticsearch-visitor =

# Track market history by grouping orders into buckets of equal size measured in seconds specified as a JSON array of numbers
bucket-size = [60,300,900,1800,3600,14400,86400]

# How far back in time to track history for each bucket size, measured in the number of buckets (default: 1000)
history-per-size = 1000

# Will only store this amount of matched orders for each market in order history for querying, or those meet the other option, which has more data (default: 1000)
max-order-his-records-per-market = 1000

# Will only store matched orders in last X seconds for each market in order history for querying, or those meet the other option, which has more data (default: 259200 (3 days))
max-order-his-seconds-per-market = 259200

# RPC endpoint of a trusted validating node (required)
# trusted-node =

# Block number after which to do a snapshot
# snapshot-at-block =

# Block time (ISO format) after which to do a snapshot
# snapshot-at-time =

# Pathname of JSON file where to store the snapshot
# snapshot-to =
```

## 备援出块节点启动

1. 建立初始化目录，复制必要档案并执行

```bash
$ mkdir -p /opt/zeus/
$ cp witness_node /opt/zeus/
$ cp genesis.json /opt/zeus/
$ cp config.ini /opt/zeus/
$ cd /opt/zeus/
$ chmod +x witness_node
$ ./witness_node --genesis-json genesis.json -s 10.3.4.2:35789 ##这个为创世节点的IP与端口，联盟见证人节点此处则设定为出口节点IP与端口。
## 执行后，出现 chain-id 之后，使用 control-c 中断。需要核对是否与正式链的Chain ID一致。
```

2. 复制主要环境档案到特定目录

```bash
$ mv genesis.json ./witness_node_data_dir/
$ mv config.ini ./witness_node_data_dir/
```

3. 修改 ./witness_node_data_dir/config.ini 档案

下面为 config.ini 范例：

```bash
# Endpoint for P2P node to listen on
 p2p-endpoint = 0.0.0.0:35789

# P2P nodes to connect to on startup (may specify multiple times)
 seed-node = 10.3.4.2:35789 ## 备援见证人节点，此处需设定为创世节点IP 与端口。联盟主见证人节点与联盟备援见证人节点，这一行设定为出口节点与端口。

# JSON array of P2P nodes to connect to on startup
 seed-nodes = [] ## 备援见证人节点此部分需设定为空。联盟主见证人节点与备援见证人节点此处设定亦为空白。

# Pairs of [BLOCK_NUM,BLOCK_ID] that should be enforced as checkpoints.
# checkpoint =

# Endpoint for websocket RPC to listen on
# rpc-endpoint = ## 见证人节点并不会用到RPC 故此处不另做设定

# Endpoint for TLS websocket RPC to listen on
# rpc-tls-endpoint =

# The TLS certificate file for this server
# server-pem =

# Password for this certificate
# server-pem-password =

# File to read Genesis State from
 genesis-json = /opt/zeus/witness_node_data_dir/genesis.json ## 指定 genesis.json档案位址，这个项目每个节点都必须做设定
# Block signing key to use for init witnesses, overrides genesis file
# dbg-init-key =

# JSON file specifying API permissions
# api-access =

# Space-separated list of plugins to activate
# plugins =

# Enable block production, even if the chain is stale.
enable-stale-production = true ## 所有的见证人节点此部分需设定为 true才能正确出块。其他同步用全节点这部分应设定为 false。

# Percent of witnesses (0-99) that must be participating in order to produce blocks
required-participation = false

# ID of witness controlled by this node (e.g. "1.6.5", quotes are required, may specify multiple times)
 witness-id = "1.6.1" ## witness-id = “1.6.x” x 部分为帐号序列，需要与 genesis.json 内定的见证人序列号一致。也就是 genesis.json中指定的第一位见证人，那么这里就是用 1.6.1。若是第二位见证人，这里就用 1.6.2。这里的id 指定，需要与 genesis.json 里的序列一致，也必须与下面参数中的公钥与私钥一致。（非见证人节点，这个位置就不需要。）

# Tuple of [PublicKey, WIF private key] (may specify multiple times),The owner of the private key is nico
private-key = ["MTN6P5hfysmhpniKfY7MbvwU7ZKhsagS6YZ69ZmooZkDtyTU8dtqX","5KHKmBk8jySJC9eZeN9HGBeHo4gE1ULQCkjSpSVSDiVAizZnV2o"] ## 见证人节点的公钥与私钥，前为公钥后为私钥。这里的资料需要搭配前项 witness-id，必须一致。

# Account ID to track history for (may specify multiple times)
# track-account =

# Keep only those operations in memory that are related to account history tracking
partial-operations = 1

# Maximum number of operations per account will be kept in memory
max-ops-per-account = 1000

# Elastic Search database node url
# elasticsearch-node-url =

# Number of bulk documents to index on replay(5000)
# elasticsearch-bulk-replay =
# Number of bulk documents to index on a syncronied chain(10)
# elasticsearch-bulk-sync =

# Log bulk events to database
# elasticsearch-logs =

# Use visitor to index additional data(slows down the replay)
# elasticsearch-visitor =

# Track market history by grouping orders into buckets of equal size measured in seconds specified as a JSON array of numbers
bucket-size = [60,300,900,1800,3600,14400,86400]

# How far back in time to track history for each bucket size, measured in the number of buckets (default: 1000)
history-per-size = 1000

# Will only store this amount of matched orders for each market in order history for querying, or those meet the other option, which has more data (default: 1000)
max-order-his-records-per-market = 1000

# Will only store matched orders in last X seconds for each market in order history for querying, or those meet the other option, which has more data (default: 259200 (3 days))
max-order-his-seconds-per-market = 259200

# RPC endpoint of a trusted validating node (required)
# trusted-node =

# Block number after which to do a snapshot
# snapshot-at-block =

# Block time (ISO format) after which to do a snapshot
# snapshot-at-time =

# Pathname of JSON file where to store the snapshot
# snapshot-to =
```

## API 全节点启动

1. 建立初始化目录，复制必要档案并执行

```bash
$ mkdir -p /opt/zeus/
$ cp witness_node /opt/zeus/
$ cp genesis.json /opt/zeus/
$ cp config.ini /opt/zeus/
$ cd /opt/zeus/
$ chmod +x witness_node
$ ./witness_node --genesis-json genesis.json -s 10.3.4.2:35789 ##这个为创世节点的IP与端口，联盟见证人节点此处则设定为出口节点IP与端口。
## 执行后，出现 chain-id 之后，使用 control-c 中断。需要核对是否与正式链的Chain ID一致。
```

2. 复制主要环境档案到特定目录

```bash
$ mv genesis.json ./witness_node_data_dir/
$ mv config.ini ./witness_node_data_dir/
```

3. 修改 ./witness_node_data_dir/config.ini 档案

下面为 config.ini 范例：

```bash
# Endpoint for P2P node to listen on
 p2p-endpoint = 0.0.0.0:35789

# P2P nodes to connect to on startup (may specify multiple times)
 seed-node = 10.3.4.2:35789 ## 备援见证人节点，此处需设定为创世节点IP 与端口。联盟主见证人节点与联盟备援见证人节点，这一行设定为出口节点与端口。

# JSON array of P2P nodes to connect to on startup
 seed-nodes = [] ## 备援见证人节点此部分需设定为空。联盟主见证人节点与备援见证人节点此处设定亦为空白。

# Pairs of [BLOCK_NUM,BLOCK_ID] that should be enforced as checkpoints.
# checkpoint =

# Endpoint for websocket RPC to listen on
# rpc-endpoint = ## 见证人节点并不会用到RPC 故此处不另做设定

# Endpoint for TLS websocket RPC to listen on
# rpc-tls-endpoint =

# The TLS certificate file for this server
# server-pem =

# Password for this certificate
# server-pem-password =

# File to read Genesis State from
 genesis-json = /opt/zeus/witness_node_data_dir/genesis.json ## 指定 genesis.json档案位址，这个项目每个节点都必须做设定
# Block signing key to use for init witnesses, overrides genesis file
# dbg-init-key =

# JSON file specifying API permissions
# api-access =

# Space-separated list of plugins to activate
# plugins =

# Enable block production, even if the chain is stale.
enable-stale-production = true ## 所有的见证人节点此部分需设定为 true才能正确出块。其他同步用全节点这部分应设定为 false。

# Percent of witnesses (0-99) that must be participating in order to produce blocks
required-participation = false

# ID of witness controlled by this node (e.g. "1.6.5", quotes are required, may specify multiple times)
 witness-id = "1.6.1" ## witness-id = “1.6.x” x 部分为帐号序列，需要与 genesis.json 内定的见证人序列号一致。也就是 genesis.json中指定的第一位见证人，那么这里就是用 1.6.1。若是第二位见证人，这里就用 1.6.2。这里的id 指定，需要与 genesis.json 里的序列一致，也必须与下面参数中的公钥与私钥一致。（非见证人节点，这个位置就不需要。）

# Tuple of [PublicKey, WIF private key] (may specify multiple times),The owner of the private key is nico
private-key = ["MTN6P5hfysmhpniKfY7MbvwU7ZKhsagS6YZ69ZmooZkDtyTU8dtqX","5KHKmBk8jySJC9eZeN9HGBeHo4gE1ULQCkjSpSVSDiVAizZnV2o"] ## 见证人节点的公钥与私钥，前为公钥后为私钥。这里的资料需要搭配前项 witness-id，必须一致。

# Account ID to track history for (may specify multiple times)
# track-account =

# Keep only those operations in memory that are related to account history tracking
partial-operations = 1

# Maximum number of operations per account will be kept in memory
max-ops-per-account = 1000

# Elastic Search database node url
# elasticsearch-node-url =

# Number of bulk documents to index on replay(5000)
# elasticsearch-bulk-replay =
# Number of bulk documents to index on a syncronied chain(10)
# elasticsearch-bulk-sync =

# Log bulk events to database
# elasticsearch-logs =

# Use visitor to index additional data(slows down the replay)
# elasticsearch-visitor =

# Track market history by grouping orders into buckets of equal size measured in seconds specified as a JSON array of numbers
bucket-size = [60,300,900,1800,3600,14400,86400]

# How far back in time to track history for each bucket size, measured in the number of buckets (default: 1000)
history-per-size = 1000

# Will only store this amount of matched orders for each market in order history for querying, or those meet the other option, which has more data (default: 1000)
max-order-his-records-per-market = 1000

# Will only store matched orders in last X seconds for each market in order history for querying, or those meet the other option, which has more data (default: 259200 (3 days))
max-order-his-seconds-per-market = 259200

# RPC endpoint of a trusted validating node (required)
# trusted-node =

# Block number after which to do a snapshot
# snapshot-at-block =

# Block time (ISO format) after which to do a snapshot
# snapshot-at-time =

# Pathname of JSON file where to store the snapshot
# snapshot-to =
```

## 出站与入站全节点启动

1. 建立初始化目录，复制必要档案并执行

```bash
$ mkdir -p /opt/zeus/
$ cp witness_node /opt/zeus/
$ cp genesis.json /opt/zeus/
$ cp config.ini /opt/zeus/
$ cd /opt/zeus/
$ chmod +x witness_node
$ ./witness_node --genesis-json genesis.json -s 10.3.4.2:35789 ##这个为创世节点的IP与端口，联盟见证人节点此处则设定为出口节点IP与端口。
## 执行后，出现 chain-id 之后，使用 control-c 中断。需要核对是否与正式链的Chain ID一致。
```

2. 复制主要环境档案到特定目录

```bash
$ mv genesis.json ./witness_node_data_dir/
$ mv config.ini ./witness_node_data_dir/
```

3. 修改 ./witness_node_data_dir/config.ini 档案

下面为 config.ini 范例：

```bash
# Endpoint for P2P node to listen on
 p2p-endpoint = 0.0.0.0:35789

# P2P nodes to connect to on startup (may specify multiple times)
 seed-node = 10.3.4.2:35789 ## 备援见证人节点，此处需设定为创世节点IP 与端口。联盟主见证人节点与联盟备援见证人节点，这一行设定为出口节点与端口。

# JSON array of P2P nodes to connect to on startup
 seed-nodes = [] ## 备援见证人节点此部分需设定为空。联盟主见证人节点与备援见证人节点此处设定亦为空白。

# Pairs of [BLOCK_NUM,BLOCK_ID] that should be enforced as checkpoints.
# checkpoint =

# Endpoint for websocket RPC to listen on
# rpc-endpoint = ## 见证人节点并不会用到RPC 故此处不另做设定

# Endpoint for TLS websocket RPC to listen on
# rpc-tls-endpoint =

# The TLS certificate file for this server
# server-pem =

# Password for this certificate
# server-pem-password =

# File to read Genesis State from
 genesis-json = /opt/zeus/witness_node_data_dir/genesis.json ## 指定 genesis.json档案位址，这个项目每个节点都必须做设定
# Block signing key to use for init witnesses, overrides genesis file
# dbg-init-key =

# JSON file specifying API permissions
# api-access =

# Space-separated list of plugins to activate
# plugins =

# Enable block production, even if the chain is stale.
enable-stale-production = true ## 所有的见证人节点此部分需设定为 true才能正确出块。其他同步用全节点这部分应设定为 flase。

# Percent of witnesses (0-99) that must be participating in order to produce blocks
required-participation = false

# ID of witness controlled by this node (e.g. "1.6.5", quotes are required, may specify multiple times)
 witness-id = "1.6.1" ## witness-id = “1.6.x” x 部分为帐号序列，需要与 genesis.json 内定的见证人序列号一致。也就是 genesis.json中指定的第一位见证人，那么这里就是用 1.6.1。若是第二位见证人，这里就用 1.6.2。这里的id 指定，需要与 genesis.json 里的序列一致，也必须与下面参数中的公钥与私钥一致。（非见证人节点，这个位置就不需要。）

# Tuple of [PublicKey, WIF private key] (may specify multiple times),The owner of the private key is nico
private-key = ["MTN6P5hfysmhpniKfY7MbvwU7ZKhsagS6YZ69ZmooZkDtyTU8dtqX","5KHKmBk8jySJC9eZeN9HGBeHo4gE1ULQCkjSpSVSDiVAizZnV2o"] ## 见证人节点的公钥与私钥，前为公钥后为私钥。这里的资料需要搭配前项 witness-id，必须一致。

# Account ID to track history for (may specify multiple times)
# track-account =

# Keep only those operations in memory that are related to account history tracking
partial-operations = 1

# Maximum number of operations per account will be kept in memory
max-ops-per-account = 1000

# Elastic Search database node url
# elasticsearch-node-url =

# Number of bulk documents to index on replay(5000)
# elasticsearch-bulk-replay =
# Number of bulk documents to index on a syncronied chain(10)
# elasticsearch-bulk-sync =

# Log bulk events to database
# elasticsearch-logs =

# Use visitor to index additional data(slows down the replay)
# elasticsearch-visitor =

# Track market history by grouping orders into buckets of equal size measured in seconds specified as a JSON array of numbers
bucket-size = [60,300,900,1800,3600,14400,86400]

# How far back in time to track history for each bucket size, measured in the number of buckets (default: 1000)
history-per-size = 1000

# Will only store this amount of matched orders for each market in order history for querying, or those meet the other option, which has more data (default: 1000)
max-order-his-records-per-market = 1000

# Will only store matched orders in last X seconds for each market in order history for querying, or those meet the other option, which has more data (default: 259200 (3 days))
max-order-his-seconds-per-market = 259200

# RPC endpoint of a trusted validating node (required)
# trusted-node =

# Block number after which to do a snapshot
# snapshot-at-block =

# Block time (ISO format) after which to do a snapshot
# snapshot-at-time =

# Pathname of JSON file where to store the snapshot
# snapshot-to =
```
