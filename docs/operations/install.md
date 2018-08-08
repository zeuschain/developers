# 安裝節點

參與主神聯盟鏈，提供出塊/超級節點的公司，需要提供區塊鏈節點所需的服務器以及頻寬。本文基於「主神聯盟鏈技術白皮書」所建議的部署架構，說明如何安裝與設定聯盟鏈程式。

## 部署架構

邏輯上，雖然是一個聯盟鏈的出塊節點，但基於服務的可用性、安全性、擴充性，需要使用一組服務器以及相關網路服務。每組服務器部署在一個可用區(Availability Zone; AZ)或者數據中心(data center)；另外，為了網路存取控制，主機(服務器)被劃分成 3 的子網路(subnet)，以及對應的安全領域(security domain)。

下圖呈現建議的網路架構：
(TODO: add figure)

## 準備工作

為了方便後續章節描述，下列表格定義之後會採用的變數名稱以及定義：

| 名稱           | 說明                         | 缺省值                           |
| -------------- | ---------------------------- | -------------------------------- |
| $NODE_ROOT     | 節點程式安裝的路徑           | /opt/zeus                        |
| $NODE_DATA_DIR | 節點程式運行所需的數據       | $NODE_ROOT/witness_node_data_dir |
| $SOURCE_PATH   | 程式執行檔以及設定檔來源路徑 | ~/zeus                           |
| $RPC_PORT      | RPC 的端口                   | 8090                             |
| $P2P_PORT      | P2P 通訊用端口               | 34567                            |

安裝過程需要有下列檔案：

| 檔名         | 說明           | 備註                     |
| ------------ | -------------- | ------------------------ |
| witness_node | 節點主程式     | 支援 Ubuntu 16.06 x86_64 |
| cli_wallet   | 錢包命令列介面 | 建立以及管理帳戶         |
| config.ini   | 節點程序設定檔 | 範例檔                   |
| genesis.json | 區塊鏈創世文件 |                          |

## 程式安裝

節點主機都需要按照下列各節描述的步驟安裝節點程式。
安裝相依套件

節點需要執行環境預先安裝有相關的系統套件，在命令列中使用下列指令安裝：

```shell
$ sudo apt-get install libbz2-dev libdb++-dev \
libdb-dev libssl-dev openssl \
 libreadline-dev libtool libcurl4-openssl-dev \
 libcurl4-openssl-dev libboost-all-dev
```

$ 為命令提示符號，不用輸入。
建立運行路徑
$ mkdir -p /opt/zeus
