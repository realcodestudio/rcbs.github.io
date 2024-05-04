# 叶桃防灾(LPDP)  开源APIs 官方文档


## <font color="\#3CB371">LPDP APIs 介绍</font>
- 欢迎来到叶桃防灾(LPDP)的API官方文档页。在这里，我们为开发者们整合准备了多个API以用于获取防灾相关数据或测试连接性能。<br>
- 叶桃防灾将不对这些API作限速限量处理，并始终保持免费， **<font color="#3CB371">直到我们无法运营服务器</font>** 。<br>

- Tips: 为了其他开发者着想，请您 **<font color="#FFAE32">不要 滥用/随意传播/过高速率访问</font>** 。若这些API对您或您的作品有帮助，您可以为我们 **[赞助一点小资金](/donate_us)** 来帮助我们更好的运营与不断改进~<br>


- 请注意：以下API均非官方数据源或爱好者数据源， **<font color="#FFAE32">并不能替代官方数据，最终数据请以官方发表内容和数据为准</font>** 。针对使用这些API接口产生的损失或伤亡，叶桃防灾不承担任何责任，若您选择使用叶桃防灾API则代表您同意我们的规定。详情内容请见 **[《叶桃防灾权利声明与免责声明》](/lpdp_statement)** <br>


- **<font color="#F0869B">叶桃防灾官网还在施工中...</font>**  可能会出现显示不正确的情况，敬请谅解。

------



## 爱好者地震监测站点相关

### <font color="\#3CB371">AM.RD3C0 内蒙古鄂尔多斯市测站数据API</font>

- >**<font color="#3CB371">API描述:安装在内蒙古鄂尔多斯市的爱好者地震测站(Raspberry Shake 4D设备)观测到的数据 </font>** </font>

- **<font color="#FFAE32">注意：</font>** 该测站提供的数据已经过RS官方(Raspberry Shake)校准，但该数据不能替代官方测站数据使用，并且在测站附近地震时，该测站受到震动影响可能导致数据回传延迟或不稳定。同时，目前该测站的后期数据以及技术方面由©[wolfx.jp](https://wolfx.jp) [(@チルノ丶)](https://space.bilibili.com/18200769)提供支持。具体详细信息建议您前往[原网站](https://api.wolfx.jp/seis.html)查询。

- **<font color="#0E9FFF">测站详细信息:</font>** 

  > [AM.RD3C0测站信息](/info_rd3c0)

- **<font color="#0E9FFF">API地址:**
  > 测站api详情 https://api.wolfx.jp/seis.html

  > https://api.wolfx.jp/NM_EEDS_00.json
  
- **<font color="#0E9FFF">API内容说明:</font>**</font>
| 字段             | 数据类型 | 描述                                   | 例值                    | 提供条件 |
| ---------------- | -------- | -------------------------------------- | ----------------------- | -------- |
| PGA             | 数字   | 合成峰值地面加速度(cm/s²)             | 0.5629740946743037 | 始终提供 |
| PGV           | 数字   | 合成峰值地面速度(cm/s)                    |  0.03068616816230461                 |  始终提供 |
| PGD              | 数字     | 合成峰值地面位移(cm) | 0.00015355015535476057                    | 始终提供 |
| Max_PGA             | 数字     | 2分内最大垂直向PGA(cm/s²)   | 0.5829859160773921           | 始终提供 |
| Max_PGV       | 数字  | 2分内最大垂直水平向PGV(cm/s)                 | 0.03255943702816497             | 始终提供 |
| Max_PGD           | 数字     | 2分内最大垂直水平向PGD(cm)             | 0.00016331616576373384        | 始终提供 |
| Shindo | 字符串 | 合成JMA震度 | 6+ | 始终提供 |
| Max_Shindo     | 字符串  | 2分内最大合成JMA震度  | 0 | 始终提供 |
| CalcShindo  | 数字  | 合成JMA计测震度 | 0.44 | 始终提供 |
| Max_CalcShindo | 数字  | 2分内最大合成JMA计测震度 | 0.47 | 始终提供 |
| Intensity | 数字 | 合成中国烈度 | 1 | 始终提供 |
| Max_Intensity | 数字 | 2分内最大合成中国烈度 | 1 | 始终提供 |
| update_at | 字符串 | 数据更新时间 | 2024-02-25 15:55:11 | 始终提供 |
| create_at | 字符串 | JSON生成时间 | 2024-02-25 15:55:11 | 始终提供 |

## 图像数据相关

### **<font color="\#3CB371">Hi-Net 自动处理震源图 API</font>**

- >**<font color="#0E9FFF">API描述:每15分钟更新一次的日本地区的自动处理震源累计图像API</font>**</font> 

- **<font color="red">注意:</font>**</font> 该API提供的图像属NIED旗下的Hi-net自動処理震源マップ（Hi-Net自动处理震源图），非叶桃防灾团队产出，图像仅供参考，学习使用！该图像API上标识的内容均采用日本当地时间(JST; UTC+9)，在使用时请注意时间问题。**

- **<font color="#0E9FFF">API地址:(目前正在施工中...暂停访问。)</font>**</font>

  > 24小时 ~~https://api.leafpeach.cn/image/hinet/hypo_24h.jpg~~
  >
  > 7日 ~~https://api.leafpeach.cn/image/hinet/hypo_7d.jpg~~
  >
  > 30日 ~~https://api.leafpeach.cn/image/hinet/hypo_30d.jpg~~

- **<font color="#0E9FFF">API内容说明:</font>**</font>

  | API参数  | 描述                                         | 提供条件 |
  | -------- | -------------------------------------------- | -------- |
  | hypo_24h | 至图像更新时，前24小时内所有的震源点累计图像 | 始终提供 |
  | hypo_7d  | 至图像更新时，前7天内所有的震源点累计图像    | 始终提供 |
  | hypo_30d | 至图像更新时，前30天内所有的震源点累计图像   | 始终提供 |



## 文本数据服务相关


### **<font color="\#3CB371">叶桃防灾服务器时间同步API</font>**

- > **<font color="#0E9FFF">API描述:实时提供叶桃防灾数据处理服务器的时间数据来方便同步相关服务的时间</font>**</font> 

- **<font color="#0E9FFF"> API地址:</font>**

  > https://api.leafpeach.cn/data/sync_server_time.json
  
- **<font color="#0E9FFF"> API内容说明: </font>**
| 字段      | 数据类型 | 描述                           | 例值                | 提供条件 |
| --------- | -------- | ------------------------------ | ------------------- | -------- |
| time_gmt8 | 字符串   | 格式化后的时间数据(CST; UTC+8) | 2023-07-30 15:21:52 | 始终提供 |





------


API Docs Version 1.4.3

Update AT 2024/02/25 16:35(CST; UTC +8)
