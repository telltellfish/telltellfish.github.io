window.MARKET_SENTIMENT_HISTORY = [
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.11.12",
    "closeTime": "15:00",
    "badge": "11月12日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.11.12 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 39,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度偏冷，早盘冲高后回落，午后探低，收盘靠近低位，上涨875家、下跌4635家，成交1.93万亿，暂无确认主线。",
    "miniGauges": [
      {
        "score": 16,
        "title": "市场宽度",
        "desc": "875涨 / 4635跌"
      },
      {
        "score": 54,
        "title": "成交热度",
        "desc": "两市 1.93万亿"
      },
      {
        "score": 42,
        "title": "主线承接",
        "desc": "暂无确认主线"
      },
      {
        "score": 53,
        "title": "赚钱效应",
        "desc": "37涨停 / 6跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3655.83",
        "change": "-0.67%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "11197.98",
        "change": "-1.68%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "2509.43",
        "change": "-2.44%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1309.84",
        "change": "+0.73%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.93万亿",
        "change": "放量2558亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.61%",
        "change": "5577只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "875 / 4635",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "37 / 6",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v6-calibrated-20261110",
      "displayAsPrimary": true,
      "score": 34,
      "rawScore": 39.68,
      "temperatureScore": 35.23,
      "resonanceAdjustment": -0.74,
      "structuralAdjustment": 0.0,
      "structuralFloor": null,
      "resonanceNotes": [
        "宽度与指数同向走弱"
      ],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 39,
      "delta": -5,
      "funddb": {
        "score": 41,
        "status": "恐惧",
        "tradeDate": "2026.11.12",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "date-validated-five-factor",
        "proxyDetail": {
          "method": "date-validated-five-factor",
          "ifindFactorScore": 41.43,
          "ifindFactorCoverage": 1.0,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorDetail": {
            "tradeDate": "2026.11.12",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "weight": 0.18,
                "score": 56.13,
                "status": "ready",
                "dateUsed": "2026-11-12",
                "value": 30.6041
              },
              {
                "key": "priceStrength",
                "weight": 0.2,
                "score": 24.07,
                "status": "ready",
                "dateUsed": "2026-11-12",
                "value": 0.3488
              },
              {
                "key": "futuresBasis",
                "weight": 0.16,
                "score": 46.31,
                "status": "ready_external_fallback",
                "dateUsed": "2026-11-12",
                "value": -1.0269
              },
              {
                "key": "safeHaven",
                "weight": 0.26,
                "score": 29.1,
                "status": "ready",
                "dateUsed": "2026-11-12",
                "value": -3.2712
              },
              {
                "key": "leverage",
                "weight": 0.2,
                "score": 57.68,
                "status": "ready_previous_available",
                "dateUsed": "2026-11-11",
                "value": 8.961
              }
            ],
            "status": "ready",
            "ivCalibration": [
              {
                "key": "sz50",
                "value": 14.5718,
                "weight": 0.15098,
                "score": 69.66,
                "referenceCount": 89
              },
              {
                "key": "hs300",
                "value": 17.201,
                "weight": 0.16418,
                "score": 70.79,
                "referenceCount": 89
              },
              {
                "key": "zz1000",
                "value": 27.7321,
                "weight": 0.20688,
                "score": 53.93,
                "referenceCount": 89
              },
              {
                "key": "star50",
                "value": 45.1306,
                "weight": 0.24758,
                "score": 48.86,
                "referenceCount": 88
              },
              {
                "key": "chinext",
                "value": 37.6184,
                "weight": 0.23038,
                "score": 46.6,
                "referenceCount": 103
              }
            ]
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 29,
          "weight": "20%",
          "desc": "875 / 4635，37 / 6"
        },
        {
          "name": "指数表现",
          "score": 37,
          "weight": "20%",
          "desc": "四大指数平均 -1.01%"
        },
        {
          "name": "流动性",
          "score": 58,
          "weight": "10%",
          "desc": "1.93万亿 放量2558亿"
        },
        {
          "name": "恐贪风险",
          "score": 41,
          "weight": "32%",
          "desc": "自算恐贪 41 / 恐惧"
        },
        {
          "name": "主线结构",
          "score": 42,
          "weight": "18%",
          "desc": "暂无确认主线"
        }
      ],
      "summary": "新版保留原权重得到原始分 39.7，再用连续温度映射及有上限的盘面修正下修至 34。当前宽度与指数同向走弱，恐贪代理口径为恐惧，暂无确认主线。"
    },
    "bullFactors": [
      "两市成交 1.93 万亿，较前一日 +15.3%，较近 20 日中位数 +19.4%。"
    ],
    "bearFactors": [
      "上涨 875 家、下跌 4635 家；上涨占比 15.9%，个股涨跌幅中位数 -1.61%。",
      "收盘承接偏弱：4 个主要指数收盘平均位于日内高低区间的 8%，其中 4 个收在区间下三成且较日高回落至少 0.5%；创业板指较日高回落 4.33%。",
      "主要指数均值 -1.01%：上证指数 -0.67%、深证成指 -1.68%、创业板指 -2.44%、科创50 +0.73%。",
      "37 家涨停、6 家跌停，净涨停 +31 家，较近 20 日中位数 -16 家。"
    ],
    "blocks": [
      {
        "tag": "承压",
        "name": "CPO / 光模块 / 铜缆",
        "tone": "down",
        "note": "通信设备 -2.05%，较全A -0.55 个百分点；成交前200占 16.3%（19 只）；板块上涨 14%；成交前排核心股中位数 -3.67%",
        "stockCodes": [
          "300308.SZ",
          "300502.SZ",
          "300394.SZ",
          "600487.SH",
          "603083.SH",
          "002281.SZ",
          "601869.SH",
          "600522.SH",
          "300570.SZ",
          "300548.SZ",
          "600105.SH",
          "002396.SZ",
          "688313.SH",
          "300620.SZ",
          "002929.SZ",
          "688143.SH",
          "600498.SH",
          "603236.SH",
          "002491.SZ"
        ],
        "evidence": {
          "board": "通信设备",
          "boardCode": "881129.TI",
          "boardChange": -2.0479,
          "relativeChange": -0.5484,
          "breadth": 0.13978494623655913,
          "coreMedian": -3.6654960491659,
          "amountShare": 0.1629726610182422
        }
      },
      {
        "tag": "承压",
        "name": "消费电子 / 免税 / 品牌消费",
        "tone": "down",
        "note": "消费电子 -2.45%，较全A -0.96 个百分点；成交前200占 3.1%（7 只）；板块上涨 9%；成交前排核心股中位数 -4.85%",
        "stockCodes": [
          "601138.SH",
          "600519.SH",
          "300136.SZ",
          "002241.SZ",
          "300115.SZ",
          "000021.SZ",
          "300433.SZ"
        ],
        "evidence": {
          "board": "消费电子",
          "boardCode": "881124.TI",
          "boardChange": -2.4549,
          "relativeChange": -0.9554,
          "breadth": 0.09375,
          "coreMedian": -4.8507462686567,
          "amountShare": 0.03072142496233533
        }
      },
      {
        "tag": "承压",
        "name": "数字媒体",
        "tone": "down",
        "note": "数字媒体 -3.85%，较全A -2.35 个百分点；成交前200占 2.6%（6 只）；板块上涨 6%；成交前排核心股中位数 -7.69%",
        "stockCodes": [
          "300413.SZ",
          "300364.SZ",
          "300418.SZ",
          "603466.SH",
          "301313.SZ",
          "603533.SH"
        ],
        "evidence": {
          "board": "数字媒体",
          "boardCode": "884261.TI",
          "boardChange": -3.8519,
          "relativeChange": -2.3524,
          "breadth": 0.0625,
          "coreMedian": -7.6896903708745,
          "amountShare": 0.025919120564311615
        }
      },
      {
        "tag": "承压",
        "name": "有色 / 小金属 / 稀土",
        "tone": "down",
        "note": "小金属 -1.99%，较全A -0.49 个百分点；成交前200占 2.3%（4 只）；板块上涨 7%；成交前排核心股中位数 -3.10%",
        "stockCodes": [
          "601899.SH",
          "002428.SZ",
          "002149.SZ",
          "000657.SZ"
        ],
        "evidence": {
          "board": "小金属",
          "boardCode": "881170.TI",
          "boardChange": -1.9936,
          "relativeChange": -0.4941,
          "breadth": 0.06666666666666667,
          "coreMedian": -3.09882747068675,
          "amountShare": 0.022969438283717017
        }
      },
      {
        "tag": "承压",
        "name": "机器人 / 工业母机 / 低空",
        "tone": "down",
        "note": "人形机器人 -3.15%，较全A -1.65 个百分点；成交前200占 2.3%（6 只）；板块上涨 7%；成交前排核心股中位数 -4.79%",
        "stockCodes": [
          "688836.SH",
          "002050.SZ",
          "688017.SH",
          "002747.SZ",
          "601689.SH",
          "300124.SZ"
        ],
        "evidence": {
          "board": "人形机器人",
          "boardCode": "886069.TI",
          "boardChange": -3.1511,
          "relativeChange": -1.6516,
          "breadth": 0.07228915662650602,
          "coreMedian": -4.7867950481431,
          "amountShare": 0.022900483179285003
        }
      },
      {
        "tag": "承压",
        "name": "光学光电子",
        "tone": "down",
        "note": "光学光电子 -1.97%，较全A -0.47 个百分点；成交前200占 1.8%（5 只）；板块上涨 13%；成交前排核心股中位数 -2.87%",
        "stockCodes": [
          "000725.SZ",
          "300489.SZ",
          "688322.SH",
          "600261.SH",
          "002222.SZ"
        ],
        "evidence": {
          "board": "光学光电子",
          "boardCode": "881122.TI",
          "boardChange": -1.9672,
          "relativeChange": -0.4677,
          "breadth": 0.1308411214953271,
          "coreMedian": -2.8719101123595,
          "amountShare": 0.01794192627738432
        }
      }
    ],
    "marketReview": {
      "version": "evidence-20261110",
      "poolSize": 200,
      "benchmark": -1.4995,
      "returnCoverage": 200,
      "factorEvidence": [
        {
          "group": "宽度",
          "side": "bear",
          "strength": 5.704,
          "text": "上涨 875 家、下跌 4635 家；上涨占比 15.9%，个股涨跌幅中位数 -1.61%。"
        },
        {
          "group": "盘中承接",
          "side": "bear",
          "strength": 4.013,
          "text": "收盘承接偏弱：4 个主要指数收盘平均位于日内高低区间的 8%，其中 4 个收在区间下三成且较日高回落至少 0.5%；创业板指较日高回落 4.33%。"
        },
        {
          "group": "成交",
          "side": "bull",
          "strength": 2.148,
          "text": "两市成交 1.93 万亿，较前一日 +15.3%，较近 20 日中位数 +19.4%。"
        },
        {
          "group": "指数",
          "side": "bear",
          "strength": 2.03,
          "text": "主要指数均值 -1.01%：上证指数 -0.67%、深证成指 -1.68%、创业板指 -2.44%、科创50 +0.73%。"
        },
        {
          "group": "赚钱效应",
          "side": "bear",
          "strength": 0.889,
          "text": "37 家涨停、6 家跌停，净涨停 +31 家，较近 20 日中位数 -16 家。"
        },
        {
          "group": "主线反馈",
          "side": "bear",
          "strength": 0.548,
          "text": "CPO / 光模块 / 铜缆（承压），通信设备 -2.05%，成交前排占比 16.3%。"
        }
      ]
    },
    "crossFactors": [],
    "marketStructure": {
      "version": "market-structure-20261110",
      "tradeDate": "2026.11.12",
      "ladder": {
        "tradeDate": "2026.11.12",
        "activeCount": 5573,
        "eligibleCount": 5572,
        "touched": 78,
        "sealed": 37,
        "failed": 41,
        "limitDown": 6,
        "sealRate": 0.47435897435897434,
        "repeat": {
          "previousTradeDate": "2026.11.11",
          "previousSealed": 85,
          "eligible": 85,
          "sealedAgain": 11,
          "excluded": 0,
          "rate": 0.12941176470588237
        }
      },
      "themes": {
        "previousTradeDate": "2026.11.11",
        "referenceName": "同花顺全A",
        "todayBenchmark": -1.4995,
        "previousBenchmark": 1.1415,
        "rows": [
          {
            "name": "CPO / 光模块 / 铜缆",
            "tag": "承压",
            "board": "通信设备",
            "code": "881129.TI",
            "todayChange": -2.0479,
            "previousChange": 4.9136,
            "todayRelative": -0.5484,
            "previousRelative": 3.7721,
            "delta": -4.3205,
            "status": "由强转弱"
          },
          {
            "name": "消费电子 / 免税 / 品牌消费",
            "tag": "承压",
            "board": "消费电子",
            "code": "881124.TI",
            "todayChange": -2.4549,
            "previousChange": 1.4361,
            "todayRelative": -0.9554,
            "previousRelative": 0.2946,
            "delta": -1.25,
            "status": "相对走弱"
          },
          {
            "name": "数字媒体",
            "tag": "承压",
            "board": "数字媒体",
            "code": "884261.TI",
            "todayChange": -3.8519,
            "previousChange": 2.1288,
            "todayRelative": -2.3524,
            "previousRelative": 0.9873,
            "delta": -3.3397,
            "status": "由强转弱"
          },
          {
            "name": "有色 / 小金属 / 稀土",
            "tag": "承压",
            "board": "小金属",
            "code": "881170.TI",
            "todayChange": -1.9936,
            "previousChange": 0.9157,
            "todayRelative": -0.4941,
            "previousRelative": -0.2258,
            "delta": -0.2683,
            "status": "相对持平"
          },
          {
            "name": "机器人 / 工业母机 / 低空",
            "tag": "承压",
            "board": "人形机器人",
            "code": "886069.TI",
            "todayChange": -3.1511,
            "previousChange": 2.1853,
            "todayRelative": -1.6516,
            "previousRelative": 1.0438,
            "delta": -2.6954,
            "status": "由强转弱"
          },
          {
            "name": "光学光电子",
            "tag": "承压",
            "board": "光学光电子",
            "code": "881122.TI",
            "todayChange": -1.9672,
            "previousChange": 1.4528,
            "todayRelative": -0.4677,
            "previousRelative": 0.3113,
            "delta": -0.779,
            "status": "相对走弱"
          }
        ]
      }
    },
    "turnoverLeaders": [
      {
        "rank": 1,
        "code": "300308.SZ",
        "name": "中际旭创",
        "amountValue": 33622447403.58,
        "amount": "336.22亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "F5G概念;共封装光学(CPO);5G;芯片概念;汽车电子;液冷服务器;同花顺新质50;数据中心(AIDC);中国AI 50;无人驾驶;人民币贬值受益;创投;深股通;融资融券",
        "pct": -6.1070110701107,
        "pctText": "-6.11%",
        "price": ""
      },
      {
        "rank": 2,
        "code": "300502.SZ",
        "name": "新易盛",
        "amountValue": 25664755985.2,
        "amount": "256.65亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "共封装光学(CPO);5G;芯片概念;数据中心(AIDC);中国AI 50;2026中报预增;人民币贬值受益;西部大开发;深股通;融资融券",
        "pct": -4.3813953488372,
        "pctText": "-4.38%",
        "price": ""
      },
      {
        "rank": 10,
        "code": "300394.SZ",
        "name": "天孚通信",
        "amountValue": 9818966498.36,
        "amount": "98.19亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "共封装光学(CPO);光纤概念;先进封装;英伟达概念;5G;数据中心(AIDC);专精特新;同花顺新质50;华为概念;无人驾驶;人民币贬值受益;深股通;融资融券",
        "pct": -2.582257392753,
        "pctText": "-2.58%",
        "price": ""
      },
      {
        "rank": 13,
        "code": "600487.SH",
        "name": "亨通光电",
        "amountValue": 8577165103.4,
        "amount": "85.77亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "共封装光学(CPO);光纤概念;F5G概念;6G概念;太赫兹;芯片概念;液冷服务器;5G;2026三季报预增;人形机器人;数据中心(AIDC);2026中报预增;新能源汽车;无人驾驶;华为概念;量子科技;机器人概念;军工;小米汽车;柔性直流输电;特高压;网络安全;智能电网;海工装备;智慧城市;长三角一体化;DeepSeek概念;创投;一带一路;风电;同花顺出海50;水利;沪股通;融资融券",
        "pct": -3.6654960491659,
        "pctText": "-3.67%",
        "price": ""
      },
      {
        "rank": 16,
        "code": "601138.SH",
        "name": "工业富联",
        "amountValue": 7391553352.72,
        "amount": "73.92亿",
        "industry": "电子-消费电子-消费电子零部件及组装",
        "concept": "共封装光学(CPO);同花顺果指数;富士康概念;英伟达概念;苹果概念;芯片概念;液冷服务器;5G;2026中报预增;人形机器人;数据中心(AIDC);同花顺新质50;新能源汽车;东数西算(算力);机器人概念;海峡两岸;虚拟现实;物联网;算力租赁;工业互联网;阿里巴巴概念;人工智能;云计算;智慧城市;医疗器械概念;创投;同花顺出海50;同花顺漂亮100;沪股通;融资融券",
        "pct": -4.8507462686567,
        "pctText": "-4.85%",
        "price": ""
      },
      {
        "rank": 20,
        "code": "603083.SH",
        "name": "剑桥科技",
        "amountValue": 6609617740.16,
        "amount": "66.10亿",
        "industry": "通信-通信设备-通信终端及配件",
        "concept": "F5G概念;共封装光学(CPO);WiFi 6;5G;液冷服务器;2026中报预增;华为概念;物联网;人民币贬值受益;智能家居;工业互联网;一带一路;沪股通;融资融券",
        "pct": 5.0448909790509,
        "pctText": "+5.04%",
        "price": ""
      },
      {
        "rank": 24,
        "code": "601899.SH",
        "name": "紫金矿业",
        "amountValue": 6020280147.71,
        "amount": "60.20亿",
        "industry": "有色金属-贵金属-贵金属Ⅲ",
        "concept": "金属铅;金属锌;黄金概念;金属铜;金属钴;小金属概念;盐湖提锂;同花顺出海50;2026中报预增;锂电池概念;同花顺漂亮100;国企改革;氢能源;福建自贸区;一带一路;沪股通;融资融券;同花顺中特估100",
        "pct": -3.8765254845657,
        "pctText": "-3.88%",
        "price": ""
      },
      {
        "rank": 25,
        "code": "002428.SZ",
        "name": "云南锗业",
        "amountValue": 6011105330.11,
        "amount": "60.11亿",
        "industry": "有色金属-小金属-其他小金属",
        "concept": "第三代半导体;光纤概念;芯片概念;2026中报预增;氟化工概念;卫星导航;商业航天;华为概念;光伏概念;小金属概念;军工;金属回收;西部大开发;深股通;融资融券",
        "pct": -1.6157989228007,
        "pctText": "-1.62%",
        "price": ""
      },
      {
        "rank": 26,
        "code": "300413.SZ",
        "name": "芒果超媒",
        "amountValue": 5815636910.51,
        "amount": "58.16亿",
        "industry": "传媒-文化传媒-数字媒体",
        "concept": "AI视频;短剧游戏;AI语料;手机游戏;文化传媒概念;网络游戏;智谱AI;虚拟数字人;AIGC概念;IP经济(谷子经济);多模态AI;抖音概念(字节概念);AI应用;元宇宙;AI智能体;网红经济;区块链;鸿蒙概念;阿里巴巴概念;独角兽概念;虚拟现实;DeepSeek概念;人工智能;MR(混合现实);跨境电商;数字孪生;农村电商;华为概念;乡村振兴;机器人概念;国企改革;5G;深股通;融资融券",
        "pct": -9.5381251708117,
        "pctText": "-9.54%",
        "price": ""
      },
      {
        "rank": 29,
        "code": "002281.SZ",
        "name": "光迅科技",
        "amountValue": 5745775139.44,
        "amount": "57.46亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "共封装光学(CPO);F5G概念;光纤概念;先进封装;6G概念;5G;芯片概念;2026三季报预增;液冷服务器;数据中心(AIDC);东数西算(算力);2026中报预增;华为概念;量子科技;抖音概念(字节概念);阿里巴巴概念;腾讯概念;百度概念;深股通;融资融券;国企改革;央企国企改革;股权转让(并购重组)",
        "pct": -0.62542095641298,
        "pctText": "-0.63%",
        "price": ""
      },
      {
        "rank": 34,
        "code": "601869.SH",
        "name": "长飞光纤",
        "amountValue": 5188570003.45,
        "amount": "51.89亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "共封装光学(CPO);光纤概念;铜缆高速连接;第三代半导体;5G;芯片概念;太赫兹;数据中心(AIDC);2026中报预增;东数西算(算力);专精特新;人形机器人;量子科技;新能源汽车;机器人概念;抖音概念(字节概念);特高压;工业互联网;智能电网;海工装备;创投;一带一路;风电;同花顺出海50;沪股通;融资融券",
        "pct": -3.220925205361,
        "pctText": "-3.22%",
        "price": ""
      },
      {
        "rank": 37,
        "code": "688836.SH",
        "name": "宇树科技",
        "amountValue": 5002915825.48,
        "amount": "50.03亿",
        "industry": "机械设备-自动化设备-机器人",
        "concept": "人形机器人;科创次新股;注册制次新股;机器人概念;专精特新;高端装备;人工智能;人民币贬值受益;共同富裕示范区;新股与次新股;融资融券",
        "pct": -8.3790849673203,
        "pctText": "-8.38%",
        "price": ""
      },
      {
        "rank": 42,
        "code": "600519.SH",
        "name": "贵州茅台",
        "amountValue": 4536814517.85,
        "amount": "45.37亿",
        "industry": "食品饮料-白酒-白酒Ⅲ",
        "concept": "超级品牌;白酒概念;同花顺漂亮100;国企改革;乡村振兴;沪股通;融资融券;西部大开发",
        "pct": 0.56835199315411,
        "pctText": "+0.57%",
        "price": ""
      },
      {
        "rank": 43,
        "code": "000725.SZ",
        "name": "京东方A",
        "amountValue": 4495860587.92,
        "amount": "44.96亿",
        "industry": "电子-光学光电子-面板",
        "concept": "玻璃基板;同花顺果指数;先进封装;MicroLED概念;电子纸;OLED;MiniLED;共封装光学(CPO);芯片概念;AI PC;柔性屏(折叠屏);光纤概念;智能座舱;传感器;AI眼镜;智能穿戴;小米概念;2026中报预增;新能源汽车;钙钛矿电池;光伏概念;机器人概念;长安汽车概念;华为概念;虚拟现实;物联网;储能;工业互联网;充电桩;智慧灯杆;人工智能;医疗器械概念;智能医疗;AI应用;光伏建筑一体化;深股通;融资融券;虚拟电厂;民营医院;国企改革;同花顺漂亮100",
        "pct": -3.2894736842105,
        "pctText": "-3.29%",
        "price": ""
      },
      {
        "rank": 44,
        "code": "600522.SH",
        "name": "中天科技",
        "amountValue": 4407138180.8,
        "amount": "44.07亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "铜缆高速连接;光纤概念;共封装光学(CPO);6G概念;PCB概念;PET铜箔;5G;液冷服务器;芯片概念;汽车电子;超级电容;数据中心(AIDC);商业航天;东数西算(算力);2026中报预增;新能源汽车;钙钛矿电池;华为概念;量子科技;机器人概念;光伏概念;可控核聚变;超导概念;特高压;柔性直流输电;锂电池概念;固态电池;低空经济;智能电网;工业互联网;储能;阿里巴巴概念;海工装备;核电;DeepSeek概念;数据要素;氢能源;风电;数字经济;一带一路;碳中和;沪股通;融资融券;绿色电力",
        "pct": -2.2718052738337,
        "pctText": "-2.27%",
        "price": ""
      },
      {
        "rank": 51,
        "code": "300364.SZ",
        "name": "中文在线",
        "amountValue": 4115657923.96,
        "amount": "41.16亿",
        "industry": "传媒-文化传媒-数字媒体",
        "concept": "AI视频;短剧游戏;快手概念;AI语料;知识产权保护;智谱AI;文化传媒概念;AIGC概念;Web3.0;抖音概念(字节概念);NFT概念;虚拟数字人;多模态AI;ChatGPT概念;元宇宙;在线教育;数据确权;百度概念;腾讯概念;AI应用;阿里巴巴概念;虚拟现实;AI智能体;鸿蒙概念;IP经济(谷子经济);数据要素;区块链;人工智能;数字乡村;华为概念;职业教育;DeepSeek概念;数字经济;京津冀一体化;乡村振兴;同花顺出海50;深股通;融资融券",
        "pct": -7.6896903708745,
        "pctText": "-7.69%",
        "price": ""
      },
      {
        "rank": 59,
        "code": "300570.SZ",
        "name": "太辰光",
        "amountValue": 3833241798.38,
        "amount": "38.33亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "共封装光学(CPO);F5G概念;光纤概念;铜缆高速连接;5G;芯片概念;传感器;数据中心(AIDC);人民币贬值受益;融资融券;深股通",
        "pct": -2.4,
        "pctText": "-2.40%",
        "price": ""
      },
      {
        "rank": 61,
        "code": "300548.SZ",
        "name": "长芯博创",
        "amountValue": 3821842891.21,
        "amount": "38.22亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "共封装光学(CPO);F5G概念;光纤概念;铜缆高速连接;芯片概念;5G;机器视觉;数据中心(AIDC);专精特新;2026中报预增;华为概念;机器人概念;抖音概念(字节概念);长三角一体化;融资融券;深股通",
        "pct": 2.2654229050717,
        "pctText": "+2.27%",
        "price": ""
      },
      {
        "rank": 66,
        "code": "300136.SZ",
        "name": "信维通信",
        "amountValue": 3657900948.5,
        "amount": "36.58亿",
        "industry": "电子-消费电子-消费电子零部件及组装",
        "concept": "MLCC概念;富士康概念;WiFi 6;6G概念;芯片概念;苹果概念;柔性屏(折叠屏);同花顺果指数;消费电子概念;AI眼镜;5G;卫星导航;毫米波雷达;汽车电子;无线耳机;智能穿戴;商业航天;无线充电;智能音箱;人形机器人;数据中心(AIDC);无人机;特斯拉概念;华为概念;机器人概念;虚拟现实;物联网;低空经济;海峡两岸;粤港澳大湾区;车联网(车路协同);人民币贬值受益;一带一路;深股通;融资融券",
        "pct": -5.8513750731422,
        "pctText": "-5.85%",
        "price": ""
      },
      {
        "rank": 75,
        "code": "300418.SZ",
        "name": "昆仑万维",
        "amountValue": 3348622981.15,
        "amount": "33.49亿",
        "industry": "传媒-文化传媒-数字媒体",
        "concept": "AI视频;短剧游戏;AI语料;手机游戏;AIGC概念;多模态AI;Web3.0;ChatGPT概念;网络游戏;虚拟数字人;元宇宙;在线教育;AI应用;阿里巴巴概念;虚拟现实;AI智能体;区块链;算力租赁;独角兽概念;东数西算(算力);人工智能;华为概念;DeepSeek概念;同花顺新质50;网红经济;芯片概念;无人驾驶;京津冀一体化;人民币贬值受益;深股通;融资融券",
        "pct": -3.7647058823529,
        "pctText": "-3.76%",
        "price": ""
      },
      {
        "rank": 80,
        "code": "002050.SZ",
        "name": "三花智控",
        "amountValue": 3220733858.21,
        "amount": "32.21亿",
        "industry": "家用电器-白色家电-家电零部件",
        "concept": "人形机器人;汽车热管理;华为汽车;特斯拉概念;同花顺新质50;长安汽车概念;机器人概念;新能源汽车;比亚迪概念;小米概念;液冷服务器;宁德时代概念;家用电器;数据中心(AIDC);燃料电池;储能;空气能热泵;DeepSeek概念;同花顺出海50;一带一路;深股通;融资融券",
        "pct": -4.7867950481431,
        "pctText": "-4.79%",
        "price": ""
      },
      {
        "rank": 81,
        "code": "002149.SZ",
        "name": "西部材料",
        "amountValue": 3212733612.87,
        "amount": "32.13亿",
        "industry": "有色金属-小金属-其他小金属",
        "concept": "航空发动机;可控核聚变;卫星导航;海工装备;商业航天;核电;军工;俄乌冲突概念;氢能源;超导概念;小金属概念;锂电池概念;燃料电池;专精特新;柔性屏(折叠屏);西部大开发;5G;医疗器械概念;国企改革;深股通;融资融券",
        "pct": -8.7421529876773,
        "pctText": "-8.74%",
        "price": ""
      },
      {
        "rank": 82,
        "code": "300489.SZ",
        "name": "光智科技",
        "amountValue": 3203832844.8,
        "amount": "32.04亿",
        "industry": "电子-光学光电子-光学元件",
        "concept": "先进封装;第三代半导体;核污染防治;无人驾驶;新能源汽车;无人机;低空经济;核电;氢能源;深股通",
        "pct": -2.8719101123595,
        "pctText": "-2.87%",
        "price": ""
      },
      {
        "rank": 83,
        "code": "600105.SH",
        "name": "永鼎股份",
        "amountValue": 3176215067.87,
        "amount": "31.76亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "共封装光学(CPO);光纤概念;芯片概念;5G;数据中心(AIDC);3D打印;商业航天;专精特新;东数西算(算力);2026中报预增;比亚迪概念;华为概念;超导概念;新能源汽车;可控核聚变;军工;华为汽车;低空经济;网络安全;工业互联网;数据安全;核电;长三角一体化;风电;一带一路;沪股通;参股银行;融资融券",
        "pct": -2.6628430970914,
        "pctText": "-2.66%",
        "price": ""
      },
      {
        "rank": 88,
        "code": "688017.SH",
        "name": "绿的谐波",
        "amountValue": 3072221127.0,
        "amount": "30.72亿",
        "industry": "机械设备-自动化设备-机器人",
        "concept": "人形机器人;中国AI 50;同花顺新质50;减速器;新型工业化;机器人概念;专精特新;沪股通;融资融券",
        "pct": -6.2937293729373,
        "pctText": "-6.29%",
        "price": ""
      },
      {
        "rank": 91,
        "code": "002396.SZ",
        "name": "星网锐捷",
        "amountValue": 3043375400.48,
        "amount": "30.43亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "WiFi 6;共封装光学(CPO);F5G概念;5G;数据中心(AIDC);华为概念;海峡两岸;机器人概念;物联网;抖音概念(字节概念);智能家居;信创;网络安全;阿里巴巴概念;腾讯概念;车联网(车路协同);AIGC概念;人工智能;脑机接口;福建自贸区;鸿蒙概念;移动支付;AI应用;DeepSeek概念;数字货币;互联网金融;文化传媒概念;国企改革;深股通;融资融券",
        "pct": 4.1291905151267,
        "pctText": "+4.13%",
        "price": ""
      },
      {
        "rank": 92,
        "code": "000657.SZ",
        "name": "中钨高新",
        "amountValue": 3028245492.32,
        "amount": "30.28亿",
        "industry": "有色金属-小金属-钨",
        "concept": "PCB概念;2026三季报预增;2026中报预增;金属钴;小金属概念;工业母机;光伏概念;金属铜;可控核聚变;高端装备;金属回收;军工;DeepSeek概念;创投;医疗器械概念;海南自贸区;雅下水电概念;乡村振兴;深股通;国企改革;中字头股票;融资融券",
        "pct": -2.3211294568078,
        "pctText": "-2.32%",
        "price": ""
      },
      {
        "rank": 95,
        "code": "603466.SH",
        "name": "风语筑",
        "amountValue": 2943402906.64,
        "amount": "29.43亿",
        "industry": "传媒-文化传媒-数字媒体",
        "concept": "AI视频;抖音概念(字节概念);AIGC概念;ChatGPT概念;空间计算;虚拟数字人;元宇宙;百度概念;虚拟现实;文化传媒概念;MR(混合现实);AI智能体;NFT概念;数据要素;数字孪生;人工智能;IP经济(谷子经济);华为概念;DeepSeek概念;职业教育;数字经济;人形机器人;网红经济;机器人概念;商业航天;旅游概念;2026中报预增;乡村振兴;融资融券;沪股通",
        "pct": -4.9228944246738,
        "pctText": "-4.92%",
        "price": ""
      },
      {
        "rank": 100,
        "code": "688313.SH",
        "name": "仕佳光子",
        "amountValue": 2856270644.59,
        "amount": "28.56亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "共封装光学(CPO);F5G概念;光纤概念;芯片概念;5G;专精特新;数据中心(AIDC);沪股通;融资融券",
        "pct": 0.019438235008257,
        "pctText": "+0.02%",
        "price": ""
      },
      {
        "rank": 108,
        "code": "002747.SZ",
        "name": "埃斯顿",
        "amountValue": 2755031317.07,
        "amount": "27.55亿",
        "industry": "机械设备-自动化设备-机器人",
        "concept": "人形机器人;工业母机;新型工业化;机器视觉;机器人概念;比亚迪概念;专精特新;宁德时代概念;长安汽车概念;高端装备;工业互联网;农机;2026中报预增;光伏概念;智能医疗;医疗器械概念;养老概念;深股通;融资融券",
        "pct": -4.3742017879949,
        "pctText": "-4.37%",
        "price": ""
      },
      {
        "rank": 114,
        "code": "688322.SH",
        "name": "奥比中光",
        "amountValue": 2665837064.54,
        "amount": "26.66亿",
        "industry": "电子-光学光电子-光学元件",
        "concept": "英伟达概念;人形机器人;MLOps概念;机器视觉;智能座舱;空间计算;新型工业化;传感器;消费电子概念;同花顺新质50;芯片概念;虚拟现实;机器人概念;专精特新;东数西算(算力);3D打印;人脸识别;华为概念;无人驾驶;元宇宙;新能源汽车;阿里巴巴概念;人工智能;数字孪生;虚拟数字人;粤港澳大湾区;移动支付;智能物流;蚂蚁集团概念;沪股通;融资融券",
        "pct": -12.703691386764,
        "pctText": "-12.70%",
        "price": ""
      },
      {
        "rank": 115,
        "code": "300620.SZ",
        "name": "光库科技",
        "amountValue": 2611512585.32,
        "amount": "26.12亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "共封装光学(CPO);光纤概念;芯片概念;5G;2026三季报预增;3D打印;数据中心(AIDC);2026中报预增;卫星导航;无人驾驶;商业航天;量子科技;粤港澳大湾区;横琴新区;海工装备;一带一路;国企改革;股权转让(并购重组);深股通;融资融券",
        "pct": 1.2601216999665,
        "pctText": "+1.26%",
        "price": ""
      },
      {
        "rank": 117,
        "code": "002241.SZ",
        "name": "歌尔股份",
        "amountValue": 2581935899.69,
        "amount": "25.82亿",
        "industry": "电子-消费电子-消费电子零部件及组装",
        "concept": "智能音箱;星闪概念;无线耳机;语音技术;AI眼镜;智能穿戴;小米概念;同花顺果指数;MR(混合现实);传感器;虚拟现实;机器人概念;元宇宙;智能家居;物联网;消费电子概念;苹果概念;人工智能;华为概念;汽车电子;MicroLED概念;人民币贬值受益;工业互联网;3D打印;芯片概念;独角兽概念;无人机;富士康概念;海峡两岸;创投;同花顺漂亮100;深股通;融资融券",
        "pct": -1.909307875895,
        "pctText": "-1.91%",
        "price": ""
      },
      {
        "rank": 125,
        "code": "002929.SZ",
        "name": "润建股份",
        "amountValue": 2492924485.11,
        "amount": "24.93亿",
        "industry": "通信-通信服务-通信工程及服务",
        "concept": "MR(混合现实);空间计算;算力租赁;东数西算(算力);华为昇腾;虚拟现实;智慧灯杆;多模态AI;5G;元宇宙;云办公;华为数字能源;华为概念;数据安全;数据中心(AIDC);信创;阿里巴巴概念;百度概念;数字乡村;虚拟数字人;数字孪生;AI智能体;数据要素;电力物联网;机器人概念;无人机;光伏概念;智慧城市;AI应用;军工;人工智能;智能电网;低空经济;工业互联网;DeepSeek概念;充电桩;储能;虚拟电厂;一带一路;跨境电商;西部大开发;雄安新区;乡村振兴;融资融券;深股通",
        "pct": -5.9117402164863,
        "pctText": "-5.91%",
        "price": ""
      },
      {
        "rank": 133,
        "code": "601689.SH",
        "name": "拓普集团",
        "amountValue": 2357344615.03,
        "amount": "23.57亿",
        "industry": "汽车-汽车零部件-底盘与发动机系统",
        "concept": "人形机器人;汽车热管理;华为汽车;新型工业化;小米汽车;特斯拉概念;智能座舱;同花顺新质50;机器人概念;比亚迪概念;小米概念;新能源汽车;一体化压铸;英伟达概念;无人驾驶;液冷服务器;汽车电子;中国AI 50;数据中心(AIDC);同花顺出海50;沪股通;融资融券",
        "pct": -1.3658536585366,
        "pctText": "-1.37%",
        "price": ""
      },
      {
        "rank": 139,
        "code": "301313.SZ",
        "name": "凡拓数创",
        "amountValue": 2257075253.44,
        "amount": "22.57亿",
        "industry": "传媒-文化传媒-数字媒体",
        "concept": "空间计算;智谱AI;ChatGPT概念;元宇宙;AIGC概念;华为鲲鹏;虚拟数字人;虚拟现实;智慧政务;AI应用;数字孪生;数据要素;百度概念;军工信息化;车联网(车路协同);物联网;人工智能;机器人概念;智慧城市;数字经济;智能医疗;低空经济;数据中心(AIDC);IP经济(谷子经济);旅游概念;水利;地下管网;污水处理;融资融券",
        "pct": -12.642240840315,
        "pctText": "-12.64%",
        "price": ""
      },
      {
        "rank": 144,
        "code": "688143.SH",
        "name": "长盈通",
        "amountValue": 2221657007.15,
        "amount": "22.22亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "共封装光学(CPO);光纤概念;芯片概念;专精特新;商业航天;汽车热管理;军工;特高压;海工装备;DeepSeek概念;沪股通;融资融券",
        "pct": 0.8102212527267,
        "pctText": "+0.81%",
        "price": ""
      },
      {
        "rank": 153,
        "code": "603533.SH",
        "name": "掌阅科技",
        "amountValue": 2138463518.04,
        "amount": "21.38亿",
        "industry": "传媒-文化传媒-数字媒体",
        "concept": "短剧游戏;AI视频;知识产权保护;AI语料;文化传媒概念;AIGC概念;抖音概念(字节概念);IP经济(谷子经济);ChatGPT概念;AI应用;AI智能体;鸿蒙概念;数据要素;独角兽概念;人工智能;华为概念;电子纸;沪股通;融资融券",
        "pct": -6.3984795692113,
        "pctText": "-6.40%",
        "price": ""
      },
      {
        "rank": 156,
        "code": "300115.SZ",
        "name": "长盈精密",
        "amountValue": 2126321991.67,
        "amount": "21.26亿",
        "industry": "电子-消费电子-消费电子零部件及组装",
        "concept": "MR(混合现实);同花顺果指数;无线耳机;人形机器人;减速器;AI眼镜;AI手机;AI PC;智能穿戴;新型工业化;虚拟现实;小米概念;传感器;苹果概念;消费电子概念;机器人概念;液冷服务器;华为汽车;华为概念;芯片概念;东数西算(算力);5G;特斯拉概念;铜缆高速连接;PEEK材料;卫星导航;新能源汽车;3D打印;宁德时代概念;无人机;粤港澳大湾区;海峡两岸;燃料电池;充电桩;储能;锂电池概念;氢能源;深股通;融资融券",
        "pct": -5.5537190082645,
        "pctText": "-5.55%",
        "price": ""
      },
      {
        "rank": 164,
        "code": "000021.SZ",
        "name": "深科技",
        "amountValue": 2080545114.66,
        "amount": "20.81亿",
        "industry": "电子-消费电子-消费电子零部件及组装",
        "concept": "存储芯片;先进封装;共封装光学(CPO);第三代半导体;芯片概念;汽车电子;超级电容;新能源汽车;无人机;机器人概念;物联网;人民币贬值受益;储能;智能电网;医疗器械概念;智能物流;区块链;数字经济;虚拟电厂;深股通;国企改革;央企国企改革;融资融券",
        "pct": -1.1195377392561,
        "pctText": "-1.12%",
        "price": ""
      },
      {
        "rank": 165,
        "code": "600261.SH",
        "name": "阳光照明",
        "amountValue": 2080308983.48,
        "amount": "20.80亿",
        "industry": "电子-光学光电子-LED",
        "concept": "高股息精选;跨境电商;氢能源;一带一路;融资融券;智能家居;可控核聚变;人民币贬值受益;商业航天;物联网",
        "pct": 1.92,
        "pctText": "+1.92%",
        "price": ""
      },
      {
        "rank": 167,
        "code": "600498.SH",
        "name": "烽火通信",
        "amountValue": 2073376902.19,
        "amount": "20.73亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "光纤概念;共封装光学(CPO);F5G概念;6G概念;WiFi 6;液冷服务器;汽车芯片;5G;芯片概念;MCU芯片;卫星导航;数据中心(AIDC);商业航天;东数西算(算力);华为概念;特高压;华为昇腾;网络安全;海工装备;人工智能;数据安全;云计算;智慧城市;智慧政务;华为鲲鹏;AI智能体;智能医疗;数字乡村;数据要素;DeepSeek概念;创投;一带一路;国资云;国企改革;沪股通;融资融券;央企国企改革",
        "pct": -3.5064505458154,
        "pctText": "-3.51%",
        "price": ""
      },
      {
        "rank": 168,
        "code": "300433.SZ",
        "name": "蓝思科技",
        "amountValue": 2064057703.79,
        "amount": "20.64亿",
        "industry": "电子-消费电子-消费电子零部件及组装",
        "concept": "同花顺果指数;AI手机;苹果概念;玻璃基板;AI眼镜;无线耳机;智能穿戴;先进封装;消费电子概念;柔性屏(折叠屏);OLED;人形机器人;智能座舱;汽车电子;光纤概念;传感器;新型烟草(电子烟);3D打印;小米概念;液冷服务器;新型工业化;比亚迪概念;减速器;特斯拉概念;宁德时代概念;机器人概念;新能源汽车;TOPCON电池;小米汽车;虚拟现实;华为概念;商业航天;光伏概念;人民币贬值受益;智能家居;工业互联网;充电桩;智能物流;元宇宙;蚂蚁集团概念;深股通;同花顺漂亮100;融资融券",
        "pct": -3.6413603572655,
        "pctText": "-3.64%",
        "price": ""
      },
      {
        "rank": 175,
        "code": "603236.SH",
        "name": "移远通信",
        "amountValue": 1970445244.0,
        "amount": "19.70亿",
        "industry": "通信-通信设备-通信终端及配件",
        "concept": "星闪概念;AI眼镜;WiFi 6;智能穿戴;英伟达概念;东数西算(算力);华为海思概念股;AI智能体;AI应用;小米概念;MCU芯片;机器视觉;消费电子概念;移动支付;智能座舱;数字货币;5G;智能家居;人工智能;物联网;6G概念;芯片概念;数字乡村;汽车电子;车联网(车路协同);区块链;毫米波雷达;DeepSeek概念;先进封装;智能医疗;智慧城市;电力物联网;卫星导航;人形机器人;无人驾驶;机器人概念;工业互联网;无人零售;人民币贬值受益;商业航天;智能电网;充电桩;长安汽车概念;跨境电商;储能;两轮车;水利;农机;融资融券;沪股通",
        "pct": -1.5825343652535,
        "pctText": "-1.58%",
        "price": ""
      },
      {
        "rank": 183,
        "code": "002491.SZ",
        "name": "通鼎互联",
        "amountValue": 1910705552.74,
        "amount": "19.11亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "光纤概念;5G;专精特新;数据中心(AIDC);固态电池;储能;数字水印;网络安全;长三角一体化;数据安全;独角兽概念;深股通;融资融券",
        "pct": -2.1753908905506,
        "pctText": "-2.18%",
        "price": ""
      },
      {
        "rank": 195,
        "code": "002222.SZ",
        "name": "福晶科技",
        "amountValue": 1827100684.9,
        "amount": "18.27亿",
        "industry": "电子-光学光电子-光学元件",
        "concept": "共封装光学(CPO);光纤概念;虚拟现实;华为概念;无人驾驶;海峡两岸;福建自贸区;深股通;国企改革;融资融券",
        "pct": 2.8904054596548,
        "pctText": "+2.89%",
        "price": ""
      },
      {
        "rank": 198,
        "code": "300124.SZ",
        "name": "汇川技术",
        "amountValue": 1809263525.0,
        "amount": "18.09亿",
        "industry": "机械设备-自动化设备-工控设备",
        "concept": "农机;同花顺漂亮100;人形机器人;小米汽车;一体化压铸;新型工业化;机器人概念;工业母机;机器视觉;AI应用;人工智能;AI智能体;工业互联网;DeepSeek概念;数字经济;小米概念;新能源汽车;换电概念;储能;商业航天;碳中和;液冷服务器;深股通;融资融券",
        "pct": -3.6116152450091,
        "pctText": "-3.61%",
        "price": ""
      }
    ],
    "stockDailyDate": "2026.11.12",
    "observation": "观察重点：跟踪CPO / 光模块 / 铜缆的板块强弱、成交占比与核心股反馈能否相互确认，并观察全A与个股宽度是否同向。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-11-12T17:14:00+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.11.11",
    "closeTime": "15:00",
    "badge": "11月11日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.11.11 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 63,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨3538家、下跌1827家，成交1.68万亿，主线：CPO / 光模块 / 铜缆、芯片 / 半导体 / 算力硬件、PCB / 元件 / 被动元件、数字芯片设计。",
    "miniGauges": [
      {
        "score": 66,
        "title": "市场宽度",
        "desc": "3538涨 / 1827跌"
      },
      {
        "score": 48,
        "title": "成交热度",
        "desc": "两市 1.68万亿"
      },
      {
        "score": 72,
        "title": "主线承接",
        "desc": "CPO / 光模块 / 铜缆、芯片 / 半导体 / 算力硬件、PCB / 元件 / 被动元件、数字芯片设计"
      },
      {
        "score": 82,
        "title": "赚钱效应",
        "desc": "85涨停 / 3跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3680.64",
        "change": "+0.46%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "11389.74",
        "change": "+1.32%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "2572.07",
        "change": "+3.11%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1300.38",
        "change": "+2.80%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.68万亿",
        "change": "放量1715亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.59%",
        "change": "5577只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3538 / 1827",
        "change": "占比 65.9%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "85 / 3",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v6-calibrated-20261110",
      "displayAsPrimary": true,
      "score": 73,
      "rawScore": 64.68,
      "temperatureScore": 70.72,
      "resonanceAdjustment": 2.01,
      "structuralAdjustment": 0.0,
      "structuralFloor": null,
      "resonanceNotes": [
        "宽度与指数同向走强"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 63,
      "delta": 10,
      "funddb": {
        "score": 51,
        "status": "中性",
        "tradeDate": "2026.11.11",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "date-validated-five-factor",
        "proxyDetail": {
          "method": "date-validated-five-factor",
          "ifindFactorScore": 50.69,
          "ifindFactorCoverage": 1.0,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorDetail": {
            "tradeDate": "2026.11.11",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "weight": 0.18,
                "score": 62.82,
                "status": "ready",
                "dateUsed": "2026-11-11",
                "value": 29.7632
              },
              {
                "key": "priceStrength",
                "weight": 0.2,
                "score": 65.42,
                "status": "ready",
                "dateUsed": "2026-11-11",
                "value": 0.679
              },
              {
                "key": "futuresBasis",
                "weight": 0.16,
                "score": 56.56,
                "status": "ready_external_fallback",
                "dateUsed": "2026-11-11",
                "value": -0.7927
              },
              {
                "key": "safeHaven",
                "weight": 0.26,
                "score": 25.41,
                "status": "ready",
                "dateUsed": "2026-11-11",
                "value": -3.7575
              },
              {
                "key": "leverage",
                "weight": 0.2,
                "score": 53.23,
                "status": "ready_previous_available",
                "dateUsed": "2026-11-10",
                "value": 8.6935
              }
            ],
            "status": "ready",
            "ivCalibration": [
              {
                "key": "sz50",
                "value": 14.1742,
                "weight": 0.1519,
                "score": 82.95,
                "referenceCount": 88
              },
              {
                "key": "hs300",
                "value": 17.0057,
                "weight": 0.1643,
                "score": 76.14,
                "referenceCount": 88
              },
              {
                "key": "zz1000",
                "value": 26.8371,
                "weight": 0.2066,
                "score": 62.5,
                "referenceCount": 88
              },
              {
                "key": "star50",
                "value": 43.9649,
                "weight": 0.2476,
                "score": 52.87,
                "referenceCount": 87
              },
              {
                "key": "chinext",
                "value": 36.5239,
                "weight": 0.2296,
                "score": 50.98,
                "referenceCount": 102
              }
            ]
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 72,
          "weight": "20%",
          "desc": "3538 / 1827，85 / 3"
        },
        {
          "name": "指数表现",
          "score": 79,
          "weight": "20%",
          "desc": "四大指数平均 +1.92%"
        },
        {
          "name": "流动性",
          "score": 52,
          "weight": "10%",
          "desc": "1.68万亿 放量1715亿"
        },
        {
          "name": "恐贪风险",
          "score": 51,
          "weight": "32%",
          "desc": "自算恐贪 51 / 中性"
        },
        {
          "name": "主线结构",
          "score": 72,
          "weight": "18%",
          "desc": "CPO / 光模块 / 铜缆、芯片 / 半导体 / 算力硬件、PCB / 元件 / 被动元件、数字芯片设计"
        }
      ],
      "summary": "新版保留原权重得到原始分 64.7，再用连续温度映射及有上限的盘面修正上修至 73。当前宽度与指数同向走强，恐贪代理口径为中性，CPO / 光模块 / 铜缆、芯片 / 半导体 / 算力硬件、PCB / 元件 / 被动元件、数字芯片设计。"
    },
    "bullFactors": [
      "主要指数均值 +1.92%：上证指数 +0.46%、深证成指 +1.32%、创业板指 +3.11%、科创50 +2.80%。",
      "上涨 3538 家、下跌 1827 家；上涨占比 65.9%，个股涨跌幅中位数 +0.59%。",
      "85 家涨停、3 家跌停，净涨停 +82 家，较近 20 日中位数 +42 家。",
      "两市成交 1.68 万亿，较前一日 +11.4%，较近 20 日中位数 +5.9%。"
    ],
    "bearFactors": [],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "tone": "up",
        "note": "数据中心(AIDC) +2.20%，较全A +1.06 个百分点；成交前200占 20.4%（24 只）；板块上涨 75%；成交前排核心股中位数 +13.96%",
        "stockCodes": [
          "300308.SZ",
          "300502.SZ",
          "300394.SZ",
          "600487.SH",
          "601138.SH",
          "300570.SZ",
          "002281.SZ",
          "600522.SH",
          "300548.SZ",
          "002353.SZ",
          "601869.SH",
          "600105.SH",
          "000988.SZ",
          "688313.SH",
          "300620.SZ",
          "603083.SH",
          "002929.SZ",
          "603236.SH",
          "688143.SH",
          "600498.SH",
          "002491.SZ",
          "301486.SZ",
          "600869.SH",
          "301205.SZ"
        ],
        "evidence": {
          "board": "数据中心(AIDC)",
          "boardCode": "885887.TI",
          "boardChange": 2.2025,
          "relativeChange": 1.061,
          "breadth": 0.75,
          "coreMedian": 13.962502966537,
          "amountShare": 0.20409543670216934
        }
      },
      {
        "tag": "主线",
        "name": "芯片 / 半导体 / 算力硬件",
        "tone": "up",
        "note": "芯片概念 +2.23%，较全A +1.09 个百分点；成交前200占 13.9%（24 只）；板块上涨 79%；成交前排核心股中位数 +6.15%",
        "stockCodes": [
          "603986.SH",
          "688256.SH",
          "688498.SH",
          "688008.SH",
          "688347.SH",
          "600641.SH",
          "688012.SH",
          "002371.SZ",
          "600206.SH",
          "002156.SZ",
          "300604.SZ",
          "600584.SH",
          "688041.SH",
          "300666.SZ",
          "688981.SH",
          "688072.SH",
          "002185.SZ",
          "688048.SH",
          "688361.SH",
          "688200.SH",
          "688120.SH",
          "301660.SZ",
          "600667.SH",
          "002409.SZ"
        ],
        "evidence": {
          "board": "芯片概念",
          "boardCode": "885756.TI",
          "boardChange": 2.2326,
          "relativeChange": 1.0911,
          "breadth": 0.7889125799573561,
          "coreMedian": 6.1536574395879,
          "amountShare": 0.13903791090913503
        }
      },
      {
        "tag": "主线",
        "name": "PCB / 元件 / 被动元件",
        "tone": "up",
        "note": "元件 +5.01%，较全A +3.87 个百分点；成交前200占 11.4%（18 只）；板块上涨 98%；成交前排核心股中位数 +9.92%",
        "stockCodes": [
          "002384.SZ",
          "600183.SH",
          "300476.SZ",
          "002463.SZ",
          "002636.SZ",
          "300408.SZ",
          "002436.SZ",
          "603186.SH",
          "000823.SZ",
          "600601.SH",
          "002916.SZ",
          "603228.SH",
          "301526.SZ",
          "000636.SZ",
          "300903.SZ",
          "603920.SH",
          "688519.SH",
          "002938.SZ"
        ],
        "evidence": {
          "board": "元件",
          "boardCode": "881270.TI",
          "boardChange": 5.007,
          "relativeChange": 3.8655,
          "breadth": 0.9841269841269841,
          "coreMedian": 9.9171686746988,
          "amountShare": 0.11390382367499217
        }
      },
      {
        "tag": "主线",
        "name": "数字芯片设计",
        "tone": "up",
        "note": "数字芯片设计 +3.34%，较全A +2.20 个百分点；成交前200占 8.2%（15 只）；板块上涨 88%；成交前排核心股中位数 +4.69%",
        "stockCodes": [
          "688825.SH",
          "300223.SZ",
          "603893.SH",
          "001309.SZ",
          "301308.SZ",
          "688525.SH",
          "688766.SH",
          "300613.SZ",
          "688018.SH",
          "688521.SH",
          "688702.SH",
          "301536.SZ",
          "301666.SZ",
          "300458.SZ",
          "688802.SH"
        ],
        "evidence": {
          "board": "数字芯片设计",
          "boardCode": "884287.TI",
          "boardChange": 3.3442,
          "relativeChange": 2.2027,
          "breadth": 0.8793103448275862,
          "coreMedian": 4.6892680939664,
          "amountShare": 0.08222891410916806
        }
      },
      {
        "tag": "成长",
        "name": "机器人 / 工业母机 / 低空",
        "tone": "up",
        "note": "人形机器人 +2.19%，较全A +1.04 个百分点；成交前200占 3.0%（7 只）；板块上涨 79%；成交前排核心股中位数 +2.49%",
        "stockCodes": [
          "688836.SH",
          "002050.SZ",
          "601689.SH",
          "688017.SH",
          "002747.SZ",
          "300124.SZ",
          "300607.SZ"
        ],
        "evidence": {
          "board": "人形机器人",
          "boardCode": "886069.TI",
          "boardChange": 2.1853,
          "relativeChange": 1.0438,
          "breadth": 0.7883064516129032,
          "coreMedian": 2.4869109947644,
          "amountShare": 0.03026097587559504
        }
      },
      {
        "tag": "扩散",
        "name": "数字媒体",
        "tone": "up",
        "note": "数字媒体 +2.13%，较全A +0.99 个百分点；成交前200占 3.0%（6 只）；板块上涨 75%；成交前排核心股中位数 +1.41%",
        "stockCodes": [
          "300413.SZ",
          "300364.SZ",
          "603533.SH",
          "300418.SZ",
          "301313.SZ",
          "603466.SH"
        ],
        "evidence": {
          "board": "数字媒体",
          "boardCode": "884261.TI",
          "boardChange": 2.1288,
          "relativeChange": 0.9873,
          "breadth": 0.75,
          "coreMedian": 1.4077785731329,
          "amountShare": 0.02985643389596954
        }
      }
    ],
    "marketReview": {
      "version": "evidence-20261110",
      "poolSize": 200,
      "benchmark": 1.1415,
      "returnCoverage": 200,
      "factorEvidence": [
        {
          "group": "指数",
          "side": "bull",
          "strength": 3.845,
          "text": "主要指数均值 +1.92%：上证指数 +0.46%、深证成指 +1.32%、创业板指 +3.11%、科创50 +2.80%。"
        },
        {
          "group": "宽度",
          "side": "bull",
          "strength": 2.503,
          "text": "上涨 3538 家、下跌 1827 家；上涨占比 65.9%，个股涨跌幅中位数 +0.59%。"
        },
        {
          "group": "赚钱效应",
          "side": "bull",
          "strength": 2.333,
          "text": "85 家涨停、3 家跌停，净涨停 +82 家，较近 20 日中位数 +42 家。"
        },
        {
          "group": "成交",
          "side": "bull",
          "strength": 1.262,
          "text": "两市成交 1.68 万亿，较前一日 +11.4%，较近 20 日中位数 +5.9%。"
        },
        {
          "group": "主线反馈",
          "side": "bull",
          "strength": 1.061,
          "text": "CPO / 光模块 / 铜缆（主线），数据中心(AIDC) +2.20%，成交前排占比 20.4%。"
        }
      ]
    },
    "crossFactors": [],
    "marketStructure": {
      "version": "market-structure-20261110",
      "tradeDate": "2026.11.11",
      "ladder": {
        "tradeDate": "2026.11.11",
        "activeCount": 5574,
        "eligibleCount": 5573,
        "touched": 110,
        "sealed": 85,
        "failed": 25,
        "limitDown": 3,
        "sealRate": 0.7727272727272727,
        "repeat": {
          "previousTradeDate": "2026.11.10",
          "previousSealed": 95,
          "eligible": 95,
          "sealedAgain": 19,
          "excluded": 0,
          "rate": 0.2
        }
      },
      "themes": {
        "previousTradeDate": "2026.11.10",
        "referenceName": "同花顺全A",
        "todayBenchmark": 1.1415,
        "previousBenchmark": 1.7412,
        "rows": [
          {
            "name": "CPO / 光模块 / 铜缆",
            "tag": "主线",
            "board": "数据中心(AIDC)",
            "code": "885887.TI",
            "todayChange": 2.2025,
            "previousChange": 2.2317564418403,
            "todayRelative": 1.061,
            "previousRelative": 0.4906,
            "delta": 0.5704,
            "status": "延续强势"
          },
          {
            "name": "芯片 / 半导体 / 算力硬件",
            "tag": "主线",
            "board": "芯片概念",
            "code": "885756.TI",
            "todayChange": 2.2326,
            "previousChange": 2.5215727661111,
            "todayRelative": 1.0911,
            "previousRelative": 0.7804,
            "delta": 0.3107,
            "status": "延续强势"
          },
          {
            "name": "PCB / 元件 / 被动元件",
            "tag": "主线",
            "board": "元件",
            "code": "881270.TI",
            "todayChange": 5.007,
            "previousChange": 2.6489,
            "todayRelative": 3.8655,
            "previousRelative": 0.9077,
            "delta": 2.9578,
            "status": "相对走强"
          },
          {
            "name": "数字芯片设计",
            "tag": "主线",
            "board": "数字芯片设计",
            "code": "884287.TI",
            "todayChange": 3.3442,
            "previousChange": 4.1424,
            "todayRelative": 2.2027,
            "previousRelative": 2.4012,
            "delta": -0.1985,
            "status": "延续强势"
          },
          {
            "name": "机器人 / 工业母机 / 低空",
            "tag": "成长",
            "board": "人形机器人",
            "code": "886069.TI",
            "todayChange": 2.1853,
            "previousChange": 3.3213,
            "todayRelative": 1.0438,
            "previousRelative": 1.5801,
            "delta": -0.5363,
            "status": "延续强势"
          },
          {
            "name": "数字媒体",
            "tag": "扩散",
            "board": "数字媒体",
            "code": "884261.TI",
            "todayChange": 2.1288,
            "previousChange": 4.7291,
            "todayRelative": 0.9873,
            "previousRelative": 2.9879,
            "delta": -2.0006,
            "status": "相对走弱"
          }
        ]
      }
    },
    "turnoverLeaders": [
      {
        "rank": 1,
        "code": "300308.SZ",
        "name": "中际旭创",
        "amountValue": 31229065541.41,
        "amount": "312.29亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "F5G概念;共封装光学(CPO);5G;芯片概念;汽车电子;液冷服务器;同花顺新质50;数据中心(AIDC);中国AI 50;无人驾驶;人民币贬值受益;创投;深股通;融资融券",
        "pct": 15.074309978769,
        "pctText": "+15.07%",
        "price": ""
      },
      {
        "rank": 2,
        "code": "300502.SZ",
        "name": "新易盛",
        "amountValue": 25233996399.9,
        "amount": "252.34亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "共封装光学(CPO);5G;芯片概念;数据中心(AIDC);中国AI 50;2026中报预增;人民币贬值受益;西部大开发;深股通;融资融券",
        "pct": 16.974972796518,
        "pctText": "+16.97%",
        "price": ""
      },
      {
        "rank": 3,
        "code": "688825.SH",
        "name": "长鑫科技",
        "amountValue": 14753181079.6,
        "amount": "147.53亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "科创次新股;国家大基金持股;存储芯片;芯片概念;注册制次新股;消费电子概念;小米概念;抖音概念(字节概念);人民币贬值受益;腾讯概念;阿里巴巴概念;新股与次新股;融资融券",
        "pct": 4.0049443757726,
        "pctText": "+4.00%",
        "price": ""
      },
      {
        "rank": 4,
        "code": "002384.SZ",
        "name": "东山精密",
        "amountValue": 12653578551.42,
        "amount": "126.54亿",
        "industry": "电子-元件-印制电路板",
        "concept": "共封装光学(CPO);光纤概念;同花顺果指数;PCB概念;苹果概念;MiniLED;AI手机;5G;芯片概念;消费电子概念;智能穿戴;数据中心(AIDC);小米概念;2026中报预增;华为概念;人形机器人;高压快充;新能源汽车;特斯拉概念;机器人概念;人民币贬值受益;深股通;融资融券",
        "pct": 10.001194885888,
        "pctText": "+10.00%",
        "price": ""
      },
      {
        "rank": 5,
        "code": "603986.SH",
        "name": "兆易创新",
        "amountValue": 10589069207.9,
        "amount": "105.89亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "存储芯片;汽车芯片;MCU芯片;芯片概念;汽车电子;无线耳机;小米概念;传感器;人形机器人;2026中报预增;物联网;光伏概念;锂电池概念;人民币贬值受益;融资融券;沪股通",
        "pct": 6.1536574395879,
        "pctText": "+6.15%",
        "price": ""
      },
      {
        "rank": 6,
        "code": "600183.SH",
        "name": "生益科技",
        "amountValue": 10306505794.82,
        "amount": "103.07亿",
        "industry": "电子-元件-印制电路板",
        "concept": "共封装光学(CPO);PCB概念;存储芯片;先进封装;MiniLED;2026三季报预增;毫米波雷达;芯片概念;5G;汽车电子;2026中报预增;商业航天;新能源汽车;华为概念;沪股通;融资融券",
        "pct": 8.3885520936134,
        "pctText": "+8.39%",
        "price": ""
      },
      {
        "rank": 7,
        "code": "300394.SZ",
        "name": "天孚通信",
        "amountValue": 10204456115.02,
        "amount": "102.04亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "共封装光学(CPO);光纤概念;先进封装;英伟达概念;5G;数据中心(AIDC);专精特新;同花顺新质50;华为概念;无人驾驶;人民币贬值受益;深股通;融资融券",
        "pct": 13.962502966537,
        "pctText": "+13.96%",
        "price": ""
      },
      {
        "rank": 8,
        "code": "688256.SH",
        "name": "寒武纪",
        "amountValue": 10113114995.77,
        "amount": "101.13亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "先进封装;汽车芯片;芯片概念;中国AI 50;同花顺新质50;东数西算(算力);数据中心(AIDC);阿里巴巴概念;人工智能;国产操作系统;沪股通;融资融券",
        "pct": 7.3985680190931,
        "pctText": "+7.40%",
        "price": ""
      },
      {
        "rank": 10,
        "code": "600487.SH",
        "name": "亨通光电",
        "amountValue": 7576371415.08,
        "amount": "75.76亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "共封装光学(CPO);光纤概念;F5G概念;6G概念;太赫兹;芯片概念;液冷服务器;5G;2026三季报预增;人形机器人;数据中心(AIDC);2026中报预增;新能源汽车;无人驾驶;华为概念;量子科技;机器人概念;军工;小米汽车;柔性直流输电;特高压;网络安全;智能电网;海工装备;智慧城市;长三角一体化;DeepSeek概念;创投;一带一路;风电;同花顺出海50;水利;沪股通;融资融券",
        "pct": 6.6729103254507,
        "pctText": "+6.67%",
        "price": ""
      },
      {
        "rank": 11,
        "code": "688498.SH",
        "name": "源杰科技",
        "amountValue": 7250501840.89,
        "amount": "72.51亿",
        "industry": "电子-半导体-分立器件",
        "concept": "共封装光学(CPO);光纤概念;2026三季报预增;汽车芯片;5G;芯片概念;数据中心(AIDC);2026中报预增;西部大开发;沪股通;融资融券",
        "pct": 19.999690263431,
        "pctText": "+20.00%",
        "price": ""
      },
      {
        "rank": 12,
        "code": "300476.SZ",
        "name": "胜宏科技",
        "amountValue": 7164024405.06,
        "amount": "71.64亿",
        "industry": "电子-元件-印制电路板",
        "concept": "共封装光学(CPO);PCB概念;富士康概念;英伟达概念;AI PC;芯片概念;AI手机;5G;汽车电子;小米概念;人形机器人;数据中心(AIDC);东数西算(算力);虚拟现实;新能源汽车;特斯拉概念;机器人概念;光伏概念;物联网;粤港澳大湾区;海峡两岸;人民币贬值受益;储能;智能电网;同花顺出海50;乡村振兴;深股通;融资融券",
        "pct": 9.9171686746988,
        "pctText": "+9.92%",
        "price": ""
      },
      {
        "rank": 13,
        "code": "601138.SH",
        "name": "工业富联",
        "amountValue": 7003879199.41,
        "amount": "70.04亿",
        "industry": "电子-消费电子-消费电子零部件及组装",
        "concept": "共封装光学(CPO);同花顺果指数;富士康概念;英伟达概念;苹果概念;芯片概念;液冷服务器;5G;2026中报预增;人形机器人;数据中心(AIDC);同花顺新质50;新能源汽车;东数西算(算力);机器人概念;海峡两岸;虚拟现实;物联网;算力租赁;工业互联网;阿里巴巴概念;人工智能;云计算;智慧城市;医疗器械概念;创投;同花顺出海50;同花顺漂亮100;沪股通;融资融券",
        "pct": 5.5118110236221,
        "pctText": "+5.51%",
        "price": ""
      },
      {
        "rank": 14,
        "code": "002463.SZ",
        "name": "沪电股份",
        "amountValue": 6939139958.17,
        "amount": "69.39亿",
        "industry": "电子-元件-印制电路板",
        "concept": "PCB概念;2026三季报预增;毫米波雷达;5G;芯片概念;汽车电子;2026中报预增;数据中心(AIDC);华为概念;无人驾驶;海峡两岸;人民币贬值受益;污水处理;深股通;同花顺出海50;融资融券",
        "pct": 10.0,
        "pctText": "+10.00%",
        "price": ""
      },
      {
        "rank": 18,
        "code": "300223.SZ",
        "name": "君正股份",
        "amountValue": 5482479480.81,
        "amount": "54.82亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "存储芯片;汽车芯片;MCU芯片;OLED;芯片概念;MiniLED;AI眼镜;消费电子概念;汽车电子;毫米波雷达;智能座舱;传感器;智能音箱;3D打印;机器视觉;小米概念;2026中报预增;无人驾驶;机器人概念;安防;物联网;人民币贬值受益;人脸识别;家用电器;抖音概念(字节概念);智能家居;人工智能;鸿蒙概念;区块链;京津冀一体化;深股通;融资融券",
        "pct": 7.2574626865672,
        "pctText": "+7.26%",
        "price": ""
      },
      {
        "rank": 20,
        "code": "300413.SZ",
        "name": "芒果超媒",
        "amountValue": 5120240671.53,
        "amount": "51.20亿",
        "industry": "传媒-文化传媒-数字媒体",
        "concept": "AI视频;短剧游戏;AI语料;手机游戏;文化传媒概念;网络游戏;智谱AI;虚拟数字人;AIGC概念;IP经济(谷子经济);多模态AI;抖音概念(字节概念);AI应用;元宇宙;AI智能体;网红经济;区块链;鸿蒙概念;阿里巴巴概念;独角兽概念;虚拟现实;DeepSeek概念;人工智能;MR(混合现实);跨境电商;数字孪生;农村电商;华为概念;乡村振兴;机器人概念;国企改革;5G;深股通;融资融券",
        "pct": 2.9254571026723,
        "pctText": "+2.93%",
        "price": ""
      },
      {
        "rank": 22,
        "code": "688008.SH",
        "name": "澜起科技",
        "amountValue": 4785622399.46,
        "amount": "47.86亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "存储芯片;中芯国际概念;芯片概念;消费电子概念;2026三季报预增;数据中心(AIDC);2026中报预增;数据安全;人民币贬值受益;人工智能;沪股通;融资融券",
        "pct": 5.2067183462532,
        "pctText": "+5.21%",
        "price": ""
      },
      {
        "rank": 23,
        "code": "688347.SH",
        "name": "华虹宏力",
        "amountValue": 4674135634.31,
        "amount": "46.74亿",
        "industry": "电子-半导体-集成电路制造",
        "concept": "国家大基金持股;存储芯片;芯片概念;MCU芯片;消费电子概念;国企改革;上海国企改革;沪股通;融资融券",
        "pct": -0.20664816673555,
        "pctText": "-0.21%",
        "price": ""
      },
      {
        "rank": 24,
        "code": "002636.SZ",
        "name": "金安国纪",
        "amountValue": 4646504349.63,
        "amount": "46.47亿",
        "industry": "电子-元件-印制电路板",
        "concept": "PCB概念;2026中报预增;医疗器械概念;消毒剂;深股通;融资融券",
        "pct": 5.3137883646358,
        "pctText": "+5.31%",
        "price": ""
      },
      {
        "rank": 25,
        "code": "300364.SZ",
        "name": "中文在线",
        "amountValue": 4627237452.94,
        "amount": "46.27亿",
        "industry": "传媒-文化传媒-数字媒体",
        "concept": "AI视频;短剧游戏;快手概念;AI语料;知识产权保护;智谱AI;文化传媒概念;AIGC概念;Web3.0;抖音概念(字节概念);NFT概念;虚拟数字人;多模态AI;ChatGPT概念;元宇宙;在线教育;数据确权;百度概念;腾讯概念;AI应用;阿里巴巴概念;虚拟现实;AI智能体;鸿蒙概念;IP经济(谷子经济);数据要素;区块链;人工智能;数字乡村;华为概念;职业教育;DeepSeek概念;数字经济;京津冀一体化;乡村振兴;同花顺出海50;深股通;融资融券",
        "pct": 1.170395869191,
        "pctText": "+1.17%",
        "price": ""
      },
      {
        "rank": 26,
        "code": "688836.SH",
        "name": "宇树科技",
        "amountValue": 4586081138.95,
        "amount": "45.86亿",
        "industry": "机械设备-自动化设备-机器人",
        "concept": "人形机器人;科创次新股;注册制次新股;机器人概念;专精特新;高端装备;人工智能;人民币贬值受益;共同富裕示范区;新股与次新股;融资融券",
        "pct": 0.52430322860409,
        "pctText": "+0.52%",
        "price": ""
      },
      {
        "rank": 28,
        "code": "600641.SH",
        "name": "先导基电",
        "amountValue": 4398351896.32,
        "amount": "43.98亿",
        "industry": "电子-半导体-半导体材料",
        "concept": "存储芯片;第三代半导体;OLED;芯片概念;TOPCON电池;2026中报预增;光伏概念;固态电池;小金属概念;高端装备;创投;沪股通;融资融券",
        "pct": 7.3199880489991,
        "pctText": "+7.32%",
        "price": ""
      },
      {
        "rank": 29,
        "code": "603893.SH",
        "name": "瑞芯微",
        "amountValue": 4383095906.81,
        "amount": "43.83亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "智能音箱;AI眼镜;中国AI 50;智能穿戴;汽车芯片;MCU芯片;国家大基金持股;机器视觉;消费电子概念;小米概念;智能座舱;虚拟现实;芯片概念;人形机器人;腾讯概念;华为概念;2026三季报预增;百度概念;物联网;人工智能;智能家居;机器人概念;比亚迪概念;电力物联网;2026中报预增;海峡两岸;福建自贸区;融资融券;沪股通",
        "pct": 0.77615780445969,
        "pctText": "+0.78%",
        "price": ""
      },
      {
        "rank": 30,
        "code": "688012.SH",
        "name": "中微公司",
        "amountValue": 4306585639.74,
        "amount": "43.07亿",
        "industry": "电子-半导体-半导体设备",
        "concept": "国家大基金持股;中芯国际概念;存储芯片;先进封装;芯片概念;MiniLED;2026中报预增;同花顺新质50;工业互联网;区块链;沪股通;融资融券",
        "pct": 1.7666693804445,
        "pctText": "+1.77%",
        "price": ""
      },
      {
        "rank": 31,
        "code": "002371.SZ",
        "name": "北方华创",
        "amountValue": 4245007480.85,
        "amount": "42.45亿",
        "industry": "电子-半导体-半导体设备",
        "concept": "中芯国际概念;国家大基金持股;存储芯片;先进封装;第三代半导体;OLED;芯片概念;华为海思概念股;中国AI 50;同花顺新质50;光伏概念;锂电池概念;深股通;融资融券;国企改革;同花顺漂亮100",
        "pct": 1.7134476869384,
        "pctText": "+1.71%",
        "price": ""
      },
      {
        "rank": 32,
        "code": "300570.SZ",
        "name": "太辰光",
        "amountValue": 4224879540.33,
        "amount": "42.25亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "共封装光学(CPO);F5G概念;光纤概念;铜缆高速连接;5G;芯片概念;传感器;数据中心(AIDC);人民币贬值受益;融资融券;深股通",
        "pct": 17.052158441802,
        "pctText": "+17.05%",
        "price": ""
      },
      {
        "rank": 35,
        "code": "300408.SZ",
        "name": "三环集团",
        "amountValue": 4063865229.98,
        "amount": "40.64亿",
        "industry": "电子-元件-被动元件",
        "concept": "MLCC概念;共封装光学(CPO);光纤概念;5G;消费电子概念;小米概念;数据中心(AIDC);华为概念;燃料电池;深股通;融资融券",
        "pct": 5.4839558127301,
        "pctText": "+5.48%",
        "price": ""
      },
      {
        "rank": 36,
        "code": "001309.SZ",
        "name": "德明利",
        "amountValue": 4053481112.02,
        "amount": "40.53亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "存储芯片;共封装光学(CPO);中芯国际概念;AI PC;芯片概念;汽车电子;智能穿戴;专精特新;数据中心(AIDC);粤港澳大湾区;人民币贬值受益;人工智能;融资融券;深股通",
        "pct": 6.6081810631229,
        "pctText": "+6.61%",
        "price": ""
      },
      {
        "rank": 38,
        "code": "002281.SZ",
        "name": "光迅科技",
        "amountValue": 3953497704.13,
        "amount": "39.53亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "共封装光学(CPO);F5G概念;光纤概念;先进封装;6G概念;5G;芯片概念;2026三季报预增;液冷服务器;数据中心(AIDC);东数西算(算力);2026中报预增;华为概念;量子科技;抖音概念(字节概念);阿里巴巴概念;腾讯概念;百度概念;深股通;融资融券;国企改革;央企国企改革;股权转让(并购重组)",
        "pct": 10.002116850127,
        "pctText": "+10.00%",
        "price": ""
      },
      {
        "rank": 39,
        "code": "600522.SH",
        "name": "中天科技",
        "amountValue": 3944182355.28,
        "amount": "39.44亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "铜缆高速连接;光纤概念;共封装光学(CPO);6G概念;PCB概念;PET铜箔;5G;液冷服务器;芯片概念;汽车电子;超级电容;数据中心(AIDC);商业航天;东数西算(算力);2026中报预增;新能源汽车;钙钛矿电池;华为概念;量子科技;机器人概念;光伏概念;可控核聚变;超导概念;特高压;柔性直流输电;锂电池概念;固态电池;低空经济;智能电网;工业互联网;储能;阿里巴巴概念;海工装备;核电;DeepSeek概念;数据要素;氢能源;风电;数字经济;一带一路;碳中和;沪股通;融资融券;绿色电力",
        "pct": 4.0084388185654,
        "pctText": "+4.01%",
        "price": ""
      },
      {
        "rank": 40,
        "code": "002050.SZ",
        "name": "三花智控",
        "amountValue": 3884461612.37,
        "amount": "38.84亿",
        "industry": "家用电器-白色家电-家电零部件",
        "concept": "人形机器人;汽车热管理;华为汽车;特斯拉概念;同花顺新质50;长安汽车概念;机器人概念;新能源汽车;比亚迪概念;小米概念;液冷服务器;宁德时代概念;家用电器;数据中心(AIDC);燃料电池;储能;空气能热泵;DeepSeek概念;同花顺出海50;一带一路;深股通;融资融券",
        "pct": 2.8288543140028,
        "pctText": "+2.83%",
        "price": ""
      },
      {
        "rank": 41,
        "code": "300548.SZ",
        "name": "长芯博创",
        "amountValue": 3848921902.29,
        "amount": "38.49亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "共封装光学(CPO);F5G概念;光纤概念;铜缆高速连接;芯片概念;5G;机器视觉;数据中心(AIDC);专精特新;2026中报预增;华为概念;机器人概念;抖音概念(字节概念);长三角一体化;融资融券;深股通",
        "pct": 7.9546416180079,
        "pctText": "+7.95%",
        "price": ""
      },
      {
        "rank": 44,
        "code": "600206.SH",
        "name": "有研新材",
        "amountValue": 3758872732.76,
        "amount": "37.59亿",
        "industry": "电子-半导体-半导体材料",
        "concept": "国家大基金持股;中芯国际概念;存储芯片;先进封装;OLED;芯片概念;光纤概念;5G;稀土永磁;牙科医疗;华为概念;医疗器械概念;军工;京津冀一体化;雄安新区;沪股通;融资融券;国企改革;央企国企改革",
        "pct": 3.6101083032491,
        "pctText": "+3.61%",
        "price": ""
      },
      {
        "rank": 45,
        "code": "002156.SZ",
        "name": "通富微电",
        "amountValue": 3739399796.78,
        "amount": "37.39亿",
        "industry": "电子-半导体-集成电路封测",
        "concept": "国家大基金持股;存储芯片;先进封装;玻璃基板;共封装光学(CPO);第三代半导体;汽车芯片;AI PC;芯片概念;华为海思概念股;消费电子概念;汽车电子;智能穿戴;毫米波雷达;智能座舱;传感器;2026中报预增;同花顺新质50;比亚迪概念;特斯拉概念;海峡两岸;物联网;人民币贬值受益;创投;深股通;融资融券",
        "pct": 3.1460674157303,
        "pctText": "+3.15%",
        "price": ""
      },
      {
        "rank": 47,
        "code": "002353.SZ",
        "name": "杰瑞股份",
        "amountValue": 3691101641.12,
        "amount": "36.91亿",
        "industry": "机械设备-专用设备-能源及重型设备",
        "concept": "液冷服务器;数据中心(AIDC);高端装备;锂电池概念;储能;海工装备;核电;同花顺出海50;一带一路;动力电池回收;深股通;融资融券;页岩气;污水处理;中俄贸易概念;土壤修复;天然气;固废处理",
        "pct": -3.3802151045976,
        "pctText": "-3.38%",
        "price": ""
      },
      {
        "rank": 48,
        "code": "601869.SH",
        "name": "长飞光纤",
        "amountValue": 3657420988.12,
        "amount": "36.57亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "共封装光学(CPO);光纤概念;铜缆高速连接;第三代半导体;5G;芯片概念;太赫兹;数据中心(AIDC);2026中报预增;东数西算(算力);专精特新;人形机器人;量子科技;新能源汽车;机器人概念;抖音概念(字节概念);特高压;工业互联网;智能电网;海工装备;创投;一带一路;风电;同花顺出海50;沪股通;融资融券",
        "pct": 9.9988110807276,
        "pctText": "+10.00%",
        "price": ""
      },
      {
        "rank": 49,
        "code": "300604.SZ",
        "name": "长川科技",
        "amountValue": 3623418364.18,
        "amount": "36.23亿",
        "industry": "电子-半导体-半导体设备",
        "concept": "国家大基金持股;存储芯片;先进封装;2026三季报预增;芯片概念;2026中报预增;专精特新;海峡两岸;融资融券;深股通",
        "pct": 4.1512354209275,
        "pctText": "+4.15%",
        "price": ""
      },
      {
        "rank": 50,
        "code": "600584.SH",
        "name": "长电科技",
        "amountValue": 3616391630.46,
        "amount": "36.16亿",
        "industry": "电子-半导体-集成电路封测",
        "concept": "国家大基金持股;存储芯片;中芯国际概念;先进封装;玻璃基板;第三代半导体;汽车芯片;共封装光学(CPO);同花顺果指数;芯片概念;苹果概念;汽车电子;智能穿戴;毫米波雷达;2026中报预增;数据中心(AIDC);无人驾驶;机器人概念;物联网;人民币贬值受益;人工智能;沪股通;融资融券;绿色电力;国企改革;央企国企改革",
        "pct": 3.0693444486548,
        "pctText": "+3.07%",
        "price": ""
      },
      {
        "rank": 51,
        "code": "301308.SZ",
        "name": "江波龙",
        "amountValue": 3547173877.04,
        "amount": "35.47亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "国家大基金持股;存储芯片;先进封装;芯片概念;AI PC;AI手机;消费电子概念;AI眼镜;2026三季报预增;智能穿戴;智能座舱;小米概念;2026中报预增;专精特新;数据中心(AIDC);EDR概念;华为概念;机器人概念;小米汽车;人民币贬值受益;信创;数据安全;华为鲲鹏;深股通;融资融券",
        "pct": 4.6892680939664,
        "pctText": "+4.69%",
        "price": ""
      },
      {
        "rank": 54,
        "code": "688525.SH",
        "name": "佰维存储",
        "amountValue": 3385709404.84,
        "amount": "33.86亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "存储芯片;共封装光学(CPO);国家大基金持股;先进封装;汽车芯片;AI PC;AI手机;芯片概念;消费电子概念;AI眼镜;智能穿戴;小米概念;人形机器人;专精特新;数据中心(AIDC);比亚迪概念;华为概念;机器人概念;粤港澳大湾区;信创;阿里巴巴概念;同花顺出海50;沪股通;融资融券",
        "pct": 6.9461538461538,
        "pctText": "+6.95%",
        "price": ""
      },
      {
        "rank": 56,
        "code": "002436.SZ",
        "name": "兴森科技",
        "amountValue": 3243286052.57,
        "amount": "32.43亿",
        "industry": "电子-元件-印制电路板",
        "concept": "共封装光学(CPO);PCB概念;存储芯片;先进封装;玻璃基板;6G概念;2026三季报预增;芯片概念;5G;毫米波雷达;2026中报预增;商业航天;华为概念;机器人概念;粤港澳大湾区;军工;低空经济;深股通;融资融券",
        "pct": 7.7201884740848,
        "pctText": "+7.72%",
        "price": ""
      },
      {
        "rank": 57,
        "code": "688041.SH",
        "name": "海光信息",
        "amountValue": 3196573279.5,
        "amount": "31.97亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "中国AI 50;芯片概念;东数西算(算力);信创;抖音概念(字节概念);量子科技;阿里巴巴概念;腾讯概念;百度概念;人工智能;DeepSeek概念;水利;同花顺中特估100;沪股通;融资融券",
        "pct": 3.3421052631579,
        "pctText": "+3.34%",
        "price": ""
      },
      {
        "rank": 59,
        "code": "603186.SH",
        "name": "华正新材",
        "amountValue": 3181639977.65,
        "amount": "31.82亿",
        "industry": "电子-元件-印制电路板",
        "concept": "PCB概念;先进封装;MiniLED;6G概念;芯片概念;消费电子概念;5G;毫米波雷达;2026中报预增;石墨烯;固态电池;锂电池概念;华为概念;海峡两岸;储能;绿色电力;冷链物流;沪股通",
        "pct": 8.7004103967168,
        "pctText": "+8.70%",
        "price": ""
      },
      {
        "rank": 60,
        "code": "600105.SH",
        "name": "永鼎股份",
        "amountValue": 3173208925.15,
        "amount": "31.73亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "共封装光学(CPO);光纤概念;芯片概念;5G;数据中心(AIDC);3D打印;商业航天;专精特新;东数西算(算力);2026中报预增;比亚迪概念;华为概念;超导概念;新能源汽车;可控核聚变;军工;华为汽车;低空经济;网络安全;工业互联网;数据安全;核电;长三角一体化;风电;一带一路;沪股通;参股银行;融资融券",
        "pct": 7.485689123734,
        "pctText": "+7.49%",
        "price": ""
      },
      {
        "rank": 61,
        "code": "300666.SZ",
        "name": "江丰电子",
        "amountValue": 3138314655.62,
        "amount": "31.38亿",
        "industry": "电子-半导体-半导体材料",
        "concept": "中芯国际概念;存储芯片;光刻机;第三代半导体;OLED;芯片概念;2026中报预增;光伏概念;碳纤维;海峡两岸;共同富裕示范区;深股通;中韩自贸区;融资融券",
        "pct": 4.6605927112535,
        "pctText": "+4.66%",
        "price": ""
      },
      {
        "rank": 62,
        "code": "000988.SZ",
        "name": "华工科技",
        "amountValue": 3125550006.73,
        "amount": "31.26亿",
        "industry": "机械设备-自动化设备-激光设备",
        "concept": "F5G概念;共封装光学(CPO);铜缆高速连接;先进封装;存储芯片;玻璃基板;PCB概念;苹果概念;第三代半导体;6G概念;MiniLED;5G;芯片概念;MicroLED概念;柔性屏(折叠屏);汽车电子;智能座舱;传感器;3D打印;东数西算(算力);专精特新;工业母机;钙钛矿电池;卫星导航;比亚迪概念;商业航天;华为概念;宁德时代概念;新型工业化;高压快充;新能源汽车;特斯拉概念;量子科技;机器人概念;物联网;汽车热管理;高端装备;锂电池概念;航空发动机;华为汽车;阿里巴巴概念;腾讯概念;智能家居;充电桩;储能;家用电器;长安汽车概念;百度概念;工业互联网;数字孪生;智慧城市;AI智能体;大飞机;独角兽概念;数据要素;创投;基因测序;氢能源;农机;乡村振兴;深股通;融资融券;国企改革",
        "pct": 5.6123227085558,
        "pctText": "+5.61%",
        "price": ""
      },
      {
        "rank": 63,
        "code": "601689.SH",
        "name": "拓普集团",
        "amountValue": 3119632736.42,
        "amount": "31.20亿",
        "industry": "汽车-汽车零部件-底盘与发动机系统",
        "concept": "人形机器人;汽车热管理;华为汽车;新型工业化;小米汽车;特斯拉概念;智能座舱;同花顺新质50;机器人概念;比亚迪概念;小米概念;新能源汽车;一体化压铸;英伟达概念;无人驾驶;液冷服务器;汽车电子;中国AI 50;数据中心(AIDC);同花顺出海50;沪股通;融资融券",
        "pct": 5.844692275919,
        "pctText": "+5.84%",
        "price": ""
      },
      {
        "rank": 66,
        "code": "688313.SH",
        "name": "仕佳光子",
        "amountValue": 3097113165.65,
        "amount": "30.97亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "共封装光学(CPO);F5G概念;光纤概念;芯片概念;5G;专精特新;数据中心(AIDC);沪股通;融资融券",
        "pct": 13.980281378088,
        "pctText": "+13.98%",
        "price": ""
      },
      {
        "rank": 68,
        "code": "688981.SH",
        "name": "中芯国际",
        "amountValue": 3079573164.4,
        "amount": "30.80亿",
        "industry": "电子-半导体-集成电路制造",
        "concept": "国家大基金持股;中芯国际概念;存储芯片;OLED;中国AI 50;芯片概念;消费电子概念;汽车电子;物联网;上海自贸区;同花顺漂亮100;融资融券;沪股通",
        "pct": 1.4477958236659,
        "pctText": "+1.45%",
        "price": ""
      },
      {
        "rank": 70,
        "code": "688766.SH",
        "name": "普冉股份",
        "amountValue": 3068951542.42,
        "amount": "30.69亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "存储芯片;汽车芯片;MCU芯片;芯片概念;汽车电子;小米概念;数据中心(AIDC);2026中报预增;华为概念;融资融券;沪股通",
        "pct": 9.7299614230604,
        "pctText": "+9.73%",
        "price": ""
      },
      {
        "rank": 72,
        "code": "603533.SH",
        "name": "掌阅科技",
        "amountValue": 3010408525.78,
        "amount": "30.10亿",
        "industry": "传媒-文化传媒-数字媒体",
        "concept": "短剧游戏;AI视频;知识产权保护;AI语料;文化传媒概念;AIGC概念;抖音概念(字节概念);IP经济(谷子经济);ChatGPT概念;AI应用;AI智能体;鸿蒙概念;数据要素;独角兽概念;人工智能;华为概念;电子纸;沪股通;融资融券",
        "pct": -3.75,
        "pctText": "-3.75%",
        "price": ""
      },
      {
        "rank": 73,
        "code": "300613.SZ",
        "name": "富瀚微",
        "amountValue": 3008996753.27,
        "amount": "30.09亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "汽车芯片;AI眼镜;智能音箱;消费电子概念;智能穿戴;芯片概念;人形机器人;汽车电子;机器视觉;专精特新;比亚迪概念;机器人概念;东数西算(算力);安防;智能家居;2026中报预增;人脸识别;人工智能;鸿蒙概念;深股通;融资融券",
        "pct": 6.7983004248938,
        "pctText": "+6.80%",
        "price": ""
      },
      {
        "rank": 74,
        "code": "000823.SZ",
        "name": "超声电子",
        "amountValue": 2963779184.41,
        "amount": "29.64亿",
        "industry": "电子-元件-印制电路板",
        "concept": "PCB概念;共封装光学(CPO);MiniLED;毫米波雷达;2026三季报预增;苹果概念;5G;汽车电子;消费电子概念;AI眼镜;卫星导航;传感器;数据中心(AIDC);商业航天;比亚迪概念;东数西算(算力);无人机;虚拟现实;无人驾驶;深股通;融资融券;国企改革",
        "pct": 3.0368763557484,
        "pctText": "+3.04%",
        "price": ""
      },
      {
        "rank": 75,
        "code": "600601.SH",
        "name": "方正科技",
        "amountValue": 2954362269.09,
        "amount": "29.54亿",
        "industry": "电子-元件-印制电路板",
        "concept": "共封装光学(CPO);PCB概念;5G;2026中报预增;东数西算(算力);华为概念;智慧城市;网络游戏;融资融券;国企改革;沪股通",
        "pct": 6.1674008810573,
        "pctText": "+6.17%",
        "price": ""
      },
      {
        "rank": 76,
        "code": "300418.SZ",
        "name": "昆仑万维",
        "amountValue": 2929941691.13,
        "amount": "29.30亿",
        "industry": "传媒-文化传媒-数字媒体",
        "concept": "AI视频;短剧游戏;AI语料;手机游戏;AIGC概念;多模态AI;Web3.0;ChatGPT概念;网络游戏;虚拟数字人;元宇宙;在线教育;AI应用;阿里巴巴概念;虚拟现实;AI智能体;区块链;算力租赁;独角兽概念;东数西算(算力);人工智能;华为概念;DeepSeek概念;同花顺新质50;网红经济;芯片概念;无人驾驶;京津冀一体化;人民币贬值受益;深股通;融资融券",
        "pct": 1.4077785731329,
        "pctText": "+1.41%",
        "price": ""
      },
      {
        "rank": 77,
        "code": "300620.SZ",
        "name": "光库科技",
        "amountValue": 2918006108.62,
        "amount": "29.18亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "共封装光学(CPO);光纤概念;芯片概念;5G;2026三季报预增;3D打印;数据中心(AIDC);2026中报预增;卫星导航;无人驾驶;商业航天;量子科技;粤港澳大湾区;横琴新区;海工装备;一带一路;国企改革;股权转让(并购重组);深股通;融资融券",
        "pct": 11.908847184987,
        "pctText": "+11.91%",
        "price": ""
      },
      {
        "rank": 82,
        "code": "688072.SH",
        "name": "拓荆科技",
        "amountValue": 2844043519.5,
        "amount": "28.44亿",
        "industry": "电子-半导体-半导体设备",
        "concept": "国家大基金持股;存储芯片;先进封装;芯片概念;沪股通;融资融券",
        "pct": 2.3285794859399,
        "pctText": "+2.33%",
        "price": ""
      },
      {
        "rank": 83,
        "code": "002916.SZ",
        "name": "深南电路",
        "amountValue": 2826443839.57,
        "amount": "28.26亿",
        "industry": "电子-元件-印制电路板",
        "concept": "PCB概念;存储芯片;先进封装;富士康概念;国家大基金持股;苹果概念;2026三季报预增;5G;芯片概念;汽车电子;2026中报预增;数据中心(AIDC);新能源汽车;华为概念;粤港澳大湾区;深股通;国企改革;央企国企改革;融资融券",
        "pct": 10.0,
        "pctText": "+10.00%",
        "price": ""
      },
      {
        "rank": 89,
        "code": "002185.SZ",
        "name": "华天科技",
        "amountValue": 2663124038.45,
        "amount": "26.63亿",
        "industry": "电子-半导体-集成电路封测",
        "concept": "国家大基金持股;存储芯片;玻璃基板;先进封装;汽车芯片;共封装光学(CPO);第三代半导体;芯片概念;华为海思概念股;汽车电子;毫米波雷达;传感器;5G;智能座舱;比亚迪概念;2026中报预增;机器人概念;无人驾驶;华为概念;深股通;融资融券;西部大开发",
        "pct": 2.3271731690623,
        "pctText": "+2.33%",
        "price": ""
      },
      {
        "rank": 93,
        "code": "603228.SH",
        "name": "景旺电子",
        "amountValue": 2579058275.62,
        "amount": "25.79亿",
        "industry": "电子-元件-印制电路板",
        "concept": "共封装光学(CPO);PCB概念;2026三季报预增;6G概念;5G;毫米波雷达;英伟达概念;华为手机;OLED;柔性屏(折叠屏);AI PC;汽车电子;消费电子概念;卫星导航;商业航天;华为数字能源;比亚迪概念;华为概念;新能源汽车;无人驾驶;特斯拉概念;沪股通;融资融券",
        "pct": 10.0,
        "pctText": "+10.00%",
        "price": ""
      },
      {
        "rank": 95,
        "code": "688017.SH",
        "name": "绿的谐波",
        "amountValue": 2561705149.07,
        "amount": "25.62亿",
        "industry": "机械设备-自动化设备-机器人",
        "concept": "人形机器人;中国AI 50;同花顺新质50;减速器;新型工业化;机器人概念;专精特新;沪股通;融资融券",
        "pct": 0.079270709472853,
        "pctText": "+0.08%",
        "price": ""
      },
      {
        "rank": 96,
        "code": "603083.SH",
        "name": "剑桥科技",
        "amountValue": 2558410954.09,
        "amount": "25.58亿",
        "industry": "通信-通信设备-通信终端及配件",
        "concept": "F5G概念;共封装光学(CPO);WiFi 6;5G;液冷服务器;2026中报预增;华为概念;物联网;人民币贬值受益;智能家居;工业互联网;一带一路;沪股通;融资融券",
        "pct": 9.9981188863807,
        "pctText": "+10.00%",
        "price": ""
      },
      {
        "rank": 97,
        "code": "002929.SZ",
        "name": "润建股份",
        "amountValue": 2552739862.64,
        "amount": "25.53亿",
        "industry": "通信-通信服务-通信工程及服务",
        "concept": "MR(混合现实);空间计算;算力租赁;东数西算(算力);华为昇腾;虚拟现实;智慧灯杆;多模态AI;5G;元宇宙;云办公;华为数字能源;华为概念;数据安全;数据中心(AIDC);信创;阿里巴巴概念;百度概念;数字乡村;虚拟数字人;数字孪生;AI智能体;数据要素;电力物联网;机器人概念;无人机;光伏概念;智慧城市;AI应用;军工;人工智能;智能电网;低空经济;工业互联网;DeepSeek概念;充电桩;储能;虚拟电厂;一带一路;跨境电商;西部大开发;雄安新区;乡村振兴;融资融券;深股通",
        "pct": 2.4744027303754,
        "pctText": "+2.47%",
        "price": ""
      },
      {
        "rank": 98,
        "code": "301526.SZ",
        "name": "国际复材",
        "amountValue": 2534192900.33,
        "amount": "25.34亿",
        "industry": "建筑材料-建筑材料-玻璃玻纤",
        "concept": "PCB概念;华为手机;消费电子概念;汽车电子;5G;2026中报预增;华为概念;光伏概念;特高压;工业互联网;风电;数字经济;一带一路;西部大开发;绿色电力;国企改革;深股通;融资融券",
        "pct": 4.2232277526395,
        "pctText": "+4.22%",
        "price": ""
      },
      {
        "rank": 100,
        "code": "000636.SZ",
        "name": "风华高科",
        "amountValue": 2496578860.28,
        "amount": "24.97亿",
        "industry": "电子-元件-被动元件",
        "concept": "MLCC概念;共封装光学(CPO);5G;汽车电子;液冷服务器;超级电容;AI眼镜;智能穿戴;传感器;卫星导航;数据中心(AIDC);商业航天;比亚迪概念;2026中报预增;东数西算(算力);光伏概念;高压快充;华为概念;无人机;锂电池概念;机器人概念;粤港澳大湾区;储能;低空经济;小金属概念;创投;深股通;国企改革;融资融券",
        "pct": 4.7826086956522,
        "pctText": "+4.78%",
        "price": ""
      },
      {
        "rank": 106,
        "code": "002747.SZ",
        "name": "埃斯顿",
        "amountValue": 2410779511.67,
        "amount": "24.11亿",
        "industry": "机械设备-自动化设备-机器人",
        "concept": "人形机器人;工业母机;新型工业化;机器视觉;机器人概念;比亚迪概念;专精特新;宁德时代概念;长安汽车概念;高端装备;工业互联网;农机;2026中报预增;光伏概念;智能医疗;医疗器械概念;养老概念;深股通;融资融券",
        "pct": 2.4869109947644,
        "pctText": "+2.49%",
        "price": ""
      },
      {
        "rank": 111,
        "code": "603236.SH",
        "name": "移远通信",
        "amountValue": 2227513278.08,
        "amount": "22.28亿",
        "industry": "通信-通信设备-通信终端及配件",
        "concept": "星闪概念;AI眼镜;WiFi 6;智能穿戴;英伟达概念;东数西算(算力);华为海思概念股;AI智能体;AI应用;小米概念;MCU芯片;机器视觉;消费电子概念;移动支付;智能座舱;数字货币;5G;智能家居;人工智能;物联网;6G概念;芯片概念;数字乡村;汽车电子;车联网(车路协同);区块链;毫米波雷达;DeepSeek概念;先进封装;智能医疗;智慧城市;电力物联网;卫星导航;人形机器人;无人驾驶;机器人概念;工业互联网;无人零售;人民币贬值受益;商业航天;智能电网;充电桩;长安汽车概念;跨境电商;储能;两轮车;水利;农机;融资融券;沪股通",
        "pct": 5.4445797807552,
        "pctText": "+5.44%",
        "price": ""
      },
      {
        "rank": 112,
        "code": "688048.SH",
        "name": "长光华芯",
        "amountValue": 2222991298.44,
        "amount": "22.23亿",
        "industry": "电子-半导体-分立器件",
        "concept": "共封装光学(CPO);光纤概念;第三代半导体;汽车芯片;芯片概念;数据中心(AIDC);专精特新;商业航天;华为概念;无人驾驶;可控核聚变;医美概念;沪股通;融资融券",
        "pct": 12.051807405239,
        "pctText": "+12.05%",
        "price": ""
      },
      {
        "rank": 114,
        "code": "301313.SZ",
        "name": "凡拓数创",
        "amountValue": 2184375377.24,
        "amount": "21.84亿",
        "industry": "传媒-文化传媒-数字媒体",
        "concept": "空间计算;智谱AI;ChatGPT概念;元宇宙;AIGC概念;华为鲲鹏;虚拟数字人;虚拟现实;智慧政务;AI应用;数字孪生;数据要素;百度概念;军工信息化;车联网(车路协同);物联网;人工智能;机器人概念;智慧城市;数字经济;智能医疗;低空经济;数据中心(AIDC);IP经济(谷子经济);旅游概念;水利;地下管网;污水处理;融资融券",
        "pct": 4.5496143286704,
        "pctText": "+4.55%",
        "price": ""
      },
      {
        "rank": 121,
        "code": "688143.SH",
        "name": "长盈通",
        "amountValue": 2149306715.08,
        "amount": "21.49亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "共封装光学(CPO);光纤概念;芯片概念;专精特新;商业航天;汽车热管理;军工;特高压;海工装备;DeepSeek概念;沪股通;融资融券",
        "pct": 12.202797202797,
        "pctText": "+12.20%",
        "price": ""
      },
      {
        "rank": 122,
        "code": "600498.SH",
        "name": "烽火通信",
        "amountValue": 2132440309.7,
        "amount": "21.32亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "光纤概念;共封装光学(CPO);F5G概念;6G概念;WiFi 6;液冷服务器;汽车芯片;5G;芯片概念;MCU芯片;卫星导航;数据中心(AIDC);商业航天;东数西算(算力);华为概念;特高压;华为昇腾;网络安全;海工装备;人工智能;数据安全;云计算;智慧城市;智慧政务;华为鲲鹏;AI智能体;智能医疗;数字乡村;数据要素;DeepSeek概念;创投;一带一路;国资云;国企改革;沪股通;融资融券;央企国企改革",
        "pct": 3.1388604571819,
        "pctText": "+3.14%",
        "price": ""
      },
      {
        "rank": 126,
        "code": "688018.SH",
        "name": "乐鑫科技",
        "amountValue": 2101286148.43,
        "amount": "21.01亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "星闪概念;中国AI 50;MCU芯片;WiFi 6;语音技术;小米概念;芯片概念;抖音概念(字节概念);物联网;智能家居;机器人概念;AI智能体;人工智能;上海自贸区;数字经济;沪股通;融资融券",
        "pct": -0.4711893272779,
        "pctText": "-0.47%",
        "price": ""
      },
      {
        "rank": 128,
        "code": "688521.SH",
        "name": "芯原股份",
        "amountValue": 2099960296.86,
        "amount": "21.00亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "国家大基金持股;先进封装;汽车芯片;芯片概念;MCU芯片;AI手机;AI眼镜;智能音箱;东数西算(算力);虚拟现实;无人驾驶;物联网;阿里巴巴概念;腾讯概念;人工智能;数字货币;上海自贸区;沪股通;融资融券",
        "pct": 5.9689362470652,
        "pctText": "+5.97%",
        "price": ""
      },
      {
        "rank": 129,
        "code": "300903.SZ",
        "name": "科翔股份",
        "amountValue": 2097184941.34,
        "amount": "20.97亿",
        "industry": "电子-元件-印制电路板",
        "concept": "PCB概念;共封装光学(CPO);存储芯片;先进封装;MiniLED;第三代半导体;芯片概念;消费电子概念;毫米波雷达;5G;汽车电子;小米概念;专精特新;数据中心(AIDC);比亚迪概念;新能源汽车;锂电池概念;粤港澳大湾区;血氧仪;无人机;军工;机器人概念;充电桩;低空经济;储能;工业互联网;钠离子电池;深股通;融资融券",
        "pct": 6.6666666666667,
        "pctText": "+6.67%",
        "price": ""
      },
      {
        "rank": 132,
        "code": "688361.SH",
        "name": "中科飞测",
        "amountValue": 2066829765.19,
        "amount": "20.67亿",
        "industry": "电子-半导体-半导体设备",
        "concept": "国家大基金持股;中芯国际概念;存储芯片;先进封装;芯片概念;同花顺新质50;沪股通;融资融券",
        "pct": 2.8663035500444,
        "pctText": "+2.87%",
        "price": ""
      },
      {
        "rank": 134,
        "code": "002491.SZ",
        "name": "通鼎互联",
        "amountValue": 2053192876.0,
        "amount": "20.53亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "光纤概念;5G;专精特新;数据中心(AIDC);固态电池;储能;数字水印;网络安全;长三角一体化;数据安全;独角兽概念;深股通;融资融券",
        "pct": 6.056236481615,
        "pctText": "+6.06%",
        "price": ""
      },
      {
        "rank": 136,
        "code": "603466.SH",
        "name": "风语筑",
        "amountValue": 2034566763.2,
        "amount": "20.35亿",
        "industry": "传媒-文化传媒-数字媒体",
        "concept": "AI视频;抖音概念(字节概念);AIGC概念;ChatGPT概念;空间计算;虚拟数字人;元宇宙;百度概念;虚拟现实;文化传媒概念;MR(混合现实);AI智能体;NFT概念;数据要素;数字孪生;人工智能;IP经济(谷子经济);华为概念;DeepSeek概念;职业教育;数字经济;人形机器人;网红经济;机器人概念;商业航天;旅游概念;2026中报预增;乡村振兴;融资融券;沪股通",
        "pct": 9.9804305283757,
        "pctText": "+9.98%",
        "price": ""
      },
      {
        "rank": 140,
        "code": "688702.SH",
        "name": "盛科通信",
        "amountValue": 2026729218.89,
        "amount": "20.27亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "国家大基金持股;芯片概念;5G;中国AI 50;数据中心(AIDC);网络安全;沪股通;融资融券",
        "pct": 4.7300797844783,
        "pctText": "+4.73%",
        "price": ""
      },
      {
        "rank": 142,
        "code": "301536.SZ",
        "name": "星宸科技",
        "amountValue": 2012934799.05,
        "amount": "20.13亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "汽车芯片;AI眼镜;智能穿戴;星闪概念;芯片概念;消费电子概念;机器视觉;2026三季报预增;汽车电子;小米概念;毫米波雷达;传感器;虚拟现实;东数西算(算力);专精特新;多模态AI;数据安全;人脸识别;安防;网络安全;卫星导航;2026中报预增;腾讯概念;无人驾驶;机器人概念;车联网(车路协同);智能家居;移动支付;人工智能;无人机;新能源汽车;海峡两岸;低空经济;福建自贸区;融资融券;深股通",
        "pct": 3.1356783919598,
        "pctText": "+3.14%",
        "price": ""
      },
      {
        "rank": 145,
        "code": "300124.SZ",
        "name": "汇川技术",
        "amountValue": 1957492345.3,
        "amount": "19.57亿",
        "industry": "机械设备-自动化设备-工控设备",
        "concept": "农机;同花顺漂亮100;人形机器人;小米汽车;一体化压铸;新型工业化;机器人概念;工业母机;机器视觉;AI应用;人工智能;AI智能体;工业互联网;DeepSeek概念;数字经济;小米概念;新能源汽车;换电概念;储能;商业航天;碳中和;液冷服务器;深股通;融资融券",
        "pct": -1.3428827215756,
        "pctText": "-1.34%",
        "price": ""
      },
      {
        "rank": 152,
        "code": "301486.SZ",
        "name": "致尚科技",
        "amountValue": 1897553256.98,
        "amount": "18.98亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "光纤概念;富士康概念;5G;芯片概念;消费电子概念;MR(混合现实);数据中心(AIDC);东数西算(算力);比亚迪概念;华为概念;虚拟现实;粤港澳大湾区;新型工业化;抖音概念(字节概念);高端装备;华为昇腾;阿里巴巴概念;股权转让(并购重组);深股通;融资融券",
        "pct": 19.998505343397,
        "pctText": "+20.00%",
        "price": ""
      },
      {
        "rank": 153,
        "code": "688200.SH",
        "name": "华峰测控",
        "amountValue": 1894399853.01,
        "amount": "18.94亿",
        "industry": "电子-半导体-半导体设备",
        "concept": "第三代半导体;芯片概念;专精特新;华为概念;高端装备;京津冀一体化;沪股通;融资融券",
        "pct": 4.1441441441441,
        "pctText": "+4.14%",
        "price": ""
      },
      {
        "rank": 155,
        "code": "688120.SH",
        "name": "华海清科",
        "amountValue": 1875955885.59,
        "amount": "18.76亿",
        "industry": "电子-半导体-半导体设备",
        "concept": "中芯国际概念;存储芯片;先进封装;第三代半导体;芯片概念;MicroLED概念;专精特新;国企改革;沪股通;融资融券",
        "pct": 0.82436568269325,
        "pctText": "+0.82%",
        "price": ""
      },
      {
        "rank": 156,
        "code": "603920.SH",
        "name": "世运电路",
        "amountValue": 1862251478.18,
        "amount": "18.62亿",
        "industry": "电子-元件-印制电路板",
        "concept": "共封装光学(CPO);PCB概念;毫米波雷达;5G;汽车电子;OLED;AI眼镜;智能座舱;数据中心(AIDC);人形机器人;东数西算(算力);商业航天;无人驾驶;特斯拉概念;新能源汽车;无人机;机器人概念;粤港澳大湾区;光伏概念;海峡两岸;飞行汽车(eVTOL);脑机接口;人民币贬值受益;低空经济;充电桩;储能;国企改革;融资融券;沪股通",
        "pct": 8.3860324443223,
        "pctText": "+8.39%",
        "price": ""
      },
      {
        "rank": 159,
        "code": "600869.SH",
        "name": "远东股份",
        "amountValue": 1831599778.05,
        "amount": "18.32亿",
        "industry": "电力设备-电网设备-线缆部件及其他",
        "concept": "铜缆高速连接;光纤概念;超导概念;PET铜箔;液冷服务器;军民融合;商业航天;芯片概念;军工;可控核聚变;无人机;数据中心(AIDC);东数西算(算力);特高压;柔性直流输电;光伏概念;低空经济;新能源汽车;华为概念;特斯拉概念;高端装备;核电;宁德时代概念;充电桩;海工装备;人形机器人;锂电池概念;储能;智能电网;机器人概念;独角兽概念;固态电池;智慧城市;西部大开发;风电;阿里巴巴概念;人工智能;DeepSeek概念;雅下水电概念;钠离子电池;参股银行;沪股通;融资融券",
        "pct": 3.5343035343035,
        "pctText": "+3.53%",
        "price": ""
      },
      {
        "rank": 161,
        "code": "688519.SH",
        "name": "南亚新材",
        "amountValue": 1821468530.73,
        "amount": "18.21亿",
        "industry": "电子-元件-印制电路板",
        "concept": "共封装光学(CPO);PCB概念;存储芯片;MiniLED;5G;2026中报预增;专精特新;华为概念;新能源汽车;沪股通;融资融券",
        "pct": 12.46296184314,
        "pctText": "+12.46%",
        "price": ""
      },
      {
        "rank": 164,
        "code": "301666.SZ",
        "name": "大普微",
        "amountValue": 1810575369.39,
        "amount": "18.11亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "存储芯片;英伟达概念;注册制次新股;芯片概念;专精特新;数据中心(AIDC);数据安全;抖音概念(字节概念);阿里巴巴概念;腾讯概念;百度概念;DeepSeek概念;小红书概念;快手概念;新股与次新股;融资融券",
        "pct": 6.8059392265193,
        "pctText": "+6.81%",
        "price": ""
      },
      {
        "rank": 166,
        "code": "301205.SZ",
        "name": "联特科技",
        "amountValue": 1796177773.01,
        "amount": "17.96亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "共封装光学(CPO);5G;芯片概念;数据中心(AIDC);人民币贬值受益;深股通;融资融券",
        "pct": 12.374948609017,
        "pctText": "+12.37%",
        "price": ""
      },
      {
        "rank": 178,
        "code": "300607.SZ",
        "name": "拓斯达",
        "amountValue": 1656346260.57,
        "amount": "16.56亿",
        "industry": "机械设备-自动化设备-机器人",
        "concept": "富士康概念;共封装光学(CPO);人形机器人;工业母机;机器视觉;新型工业化;比亚迪概念;机器人概念;新能源汽车;华为概念;宁德时代概念;无人机;高端装备;物联网;智谱AI;飞行汽车(eVTOL);光伏概念;粤港澳大湾区;2026中报预增;华为欧拉;阿里巴巴概念;低空经济;工业互联网;人工智能;锂电池概念;华为鲲鹏;一带一路;融资融券;深股通",
        "pct": 8.732486151841,
        "pctText": "+8.73%",
        "price": ""
      },
      {
        "rank": 186,
        "code": "002938.SZ",
        "name": "鹏鼎控股",
        "amountValue": 1611483824.22,
        "amount": "16.11亿",
        "industry": "电子-元件-印制电路板",
        "concept": "共封装光学(CPO);PCB概念;富士康概念;MiniLED;苹果概念;同花顺果指数;AI PC;汽车电子;消费电子概念;AI手机;AI眼镜;智能穿戴;智能座舱;无线耳机;人形机器人;商业航天;华为概念;无人驾驶;虚拟现实;新能源汽车;海峡两岸;人民币贬值受益;融资融券;深股通",
        "pct": 6.0318741174097,
        "pctText": "+6.03%",
        "price": ""
      },
      {
        "rank": 187,
        "code": "301660.SZ",
        "name": "粤芯半导体",
        "amountValue": 1590270680.96,
        "amount": "15.90亿",
        "industry": "电子-半导体-集成电路制造",
        "concept": "注册制次新股;共封装光学(CPO);汽车芯片;芯片概念;消费电子概念;传感器;粤港澳大湾区;光伏概念;新股与次新股;融资融券",
        "pct": 3.6462093862816,
        "pctText": "+3.65%",
        "price": ""
      },
      {
        "rank": 190,
        "code": "300458.SZ",
        "name": "全志科技",
        "amountValue": 1572605767.89,
        "amount": "15.73亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "MCU芯片;汽车芯片;AI眼镜;智能穿戴;消费电子概念;机器视觉;芯片概念;中芯国际概念;小米概念;智能座舱;汽车电子;EDR概念;东数西算(算力);虚拟现实;2026三季报预增;华为概念;物联网;机器人概念;阿里巴巴概念;无人驾驶;智能家居;车联网(车路协同);腾讯概念;百度概念;人工智能;2026中报预增;长安汽车概念;DeepSeek概念;家用电器;横琴新区;创投;深股通;融资融券",
        "pct": 0.47345282380792,
        "pctText": "+0.47%",
        "price": ""
      },
      {
        "rank": 196,
        "code": "600667.SH",
        "name": "太极实业",
        "amountValue": 1519977056.5,
        "amount": "15.20亿",
        "industry": "建筑装饰-建筑装饰-工程咨询服务",
        "concept": "存储芯片;先进封装;OLED;芯片概念;光伏建筑一体化;沪股通;融资融券;绿色电力;国企改革",
        "pct": 3.4003091190108,
        "pctText": "+3.40%",
        "price": ""
      },
      {
        "rank": 197,
        "code": "688802.SH",
        "name": "沐曦股份",
        "amountValue": 1518948946.34,
        "amount": "15.19亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "科创次新股;先进封装;注册制次新股;芯片概念;人形机器人;智谱AI;东数西算(算力);信创;人工智能;DeepSeek概念;新股与次新股;融资融券",
        "pct": 2.744435494961,
        "pctText": "+2.74%",
        "price": ""
      },
      {
        "rank": 199,
        "code": "002409.SZ",
        "name": "雅克科技",
        "amountValue": 1510970529.98,
        "amount": "15.11亿",
        "industry": "电子-半导体-半导体材料",
        "concept": "国家大基金持股;中芯国际概念;存储芯片;先进封装;光刻胶;OLED;芯片概念;专精特新;氟化工概念;特高压;磷化工;海工装备;深股通;天然气;融资融券",
        "pct": 3.8850761893684,
        "pctText": "+3.89%",
        "price": ""
      }
    ],
    "stockDailyDate": "2026.11.11",
    "observation": "观察重点：跟踪CPO / 光模块 / 铜缆的板块强弱、成交占比与核心股反馈能否相互确认，并观察全A与个股宽度是否同向。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-11-11T17:31:51+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.11.10",
    "closeTime": "15:00",
    "badge": "11月10日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.11.10 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 66,
    "mood": "偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，早盘冲高后回落，午后探低，收盘靠近低位，上涨4273家、下跌1149家，成交1.50万亿，主线：CPO / 光模块 / 铜缆、PCB / 元件 / 被动元件、数字芯片设计。",
    "miniGauges": [
      {
        "score": 79,
        "title": "市场宽度",
        "desc": "4273涨 / 1149跌"
      },
      {
        "score": 42,
        "title": "成交热度",
        "desc": "两市 1.50万亿"
      },
      {
        "score": 71,
        "title": "主线承接",
        "desc": "CPO / 光模块 / 铜缆、PCB / 元件 / 被动元件、数字芯片设计"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "95涨停 / 0跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3663.72",
        "change": "+0.08%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "11241.54",
        "change": "+0.86%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "2494.40",
        "change": "+1.46%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1265.02",
        "change": "+0.64%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.50万亿",
        "change": "放量222亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.31%",
        "change": "5573只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4273 / 1149",
        "change": "占比 78.8%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "95 / 0",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v6-calibrated-20261110",
      "displayAsPrimary": true,
      "score": 68,
      "rawScore": 61.34,
      "temperatureScore": 66.18,
      "resonanceAdjustment": 1.7,
      "structuralAdjustment": 0.0,
      "structuralFloor": null,
      "resonanceNotes": [
        "宽度与指数同向走强"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 66,
      "delta": 2,
      "funddb": {
        "score": 43,
        "status": "恐惧",
        "tradeDate": "2026.11.10",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "date-validated-five-factor",
        "proxyDetail": {
          "method": "date-validated-five-factor",
          "ifindFactorScore": 42.79,
          "ifindFactorCoverage": 1.0,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorDetail": {
            "tradeDate": "2026.11.10",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "weight": 0.18,
                "score": 46.32,
                "status": "ready",
                "dateUsed": "2026-11-10",
                "value": 31.6418
              },
              {
                "key": "priceStrength",
                "weight": 0.2,
                "score": 68.87,
                "status": "ready",
                "dateUsed": "2026-11-10",
                "value": 0.7342
              },
              {
                "key": "futuresBasis",
                "weight": 0.16,
                "score": 52.05,
                "status": "ready_external_fallback",
                "dateUsed": "2026-11-10",
                "value": -0.8502
              },
              {
                "key": "safeHaven",
                "weight": 0.26,
                "score": 14.34,
                "status": "ready",
                "dateUsed": "2026-11-10",
                "value": -5.5278
              },
              {
                "key": "leverage",
                "weight": 0.2,
                "score": 43.11,
                "status": "ready_previous_available",
                "dateUsed": "2026-11-09",
                "value": 8.0865
              }
            ],
            "status": "ready",
            "ivCalibration": [
              {
                "key": "sz50",
                "value": 14.6373,
                "weight": 0.1522,
                "score": 67.82,
                "referenceCount": 87
              },
              {
                "key": "hs300",
                "value": 18.9907,
                "weight": 0.1645,
                "score": 41.38,
                "referenceCount": 87
              },
              {
                "key": "zz1000",
                "value": 28.8926,
                "weight": 0.2071,
                "score": 40.23,
                "referenceCount": 87
              },
              {
                "key": "star50",
                "value": 46.0694,
                "weight": 0.2476,
                "score": 47.67,
                "referenceCount": 86
              },
              {
                "key": "chinext",
                "value": 38.9307,
                "weight": 0.2286,
                "score": 39.6,
                "referenceCount": 101
              }
            ]
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 81,
          "weight": "20%",
          "desc": "4273 / 1149，95 / 0"
        },
        {
          "name": "指数表现",
          "score": 70,
          "weight": "20%",
          "desc": "四大指数平均 +0.76%"
        },
        {
          "name": "流动性",
          "score": 46,
          "weight": "10%",
          "desc": "1.50万亿 放量222亿"
        },
        {
          "name": "恐贪风险",
          "score": 43,
          "weight": "32%",
          "desc": "自算恐贪 43 / 恐惧"
        },
        {
          "name": "主线结构",
          "score": 71,
          "weight": "18%",
          "desc": "CPO / 光模块 / 铜缆、PCB / 元件 / 被动元件、数字芯片设计"
        }
      ],
      "summary": "新版保留原权重得到原始分 61.3，再用连续温度映射及有上限的盘面修正上修至 68。当前宽度与指数同向走强，恐贪代理口径为恐惧，CPO / 光模块 / 铜缆、PCB / 元件 / 被动元件、数字芯片设计。"
    },
    "bullFactors": [
      "上涨 4273 家、下跌 1149 家；上涨占比 78.8%，个股涨跌幅中位数 +1.31%。",
      "95 家涨停、0 家跌停，净涨停 +95 家，较近 20 日中位数 +55 家。",
      "主要指数均值 +0.76%：上证指数 +0.08%、深证成指 +0.86%、创业板指 +1.46%、科创50 +0.64%。",
      "CPO / 光模块 / 铜缆（主线），通信设备 +2.82%，成交前排占比 13.6%。"
    ],
    "bearFactors": [
      "收盘承接偏弱：4 个主要指数收盘平均位于日内高低区间的 17%，其中 4 个收在区间下三成且较日高回落至少 0.5%；科创50较日高回落 2.03%。",
      "量能低于常态：两市成交 1.50 万亿，较前一日 +1.5%，但仍低于近 20 日中位数 7.0%。"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "tone": "up",
        "note": "通信设备 +2.82%，较全A +1.08 个百分点；成交前200占 13.6%（18 只）；板块上涨 91%；成交前排核心股中位数 +4.20%",
        "stockCodes": [
          "300308.SZ",
          "300502.SZ",
          "300394.SZ",
          "600487.SH",
          "300548.SZ",
          "603083.SH",
          "002929.SZ",
          "002281.SZ",
          "601869.SH",
          "600522.SH",
          "300620.SZ",
          "600498.SH",
          "603236.SH",
          "300570.SZ",
          "688313.SH",
          "000988.SZ",
          "600105.SH",
          "688143.SH"
        ],
        "evidence": {
          "board": "通信设备",
          "boardChange": 2.8182,
          "relativeChange": 1.077,
          "breadth": 0.9139784946236559,
          "coreMedian": 4.1966241178683,
          "amountShare": 0.1355628101640887
        }
      },
      {
        "tag": "主线",
        "name": "PCB / 元件 / 被动元件",
        "tone": "up",
        "note": "元件 +2.65%，较全A +0.91 个百分点；成交前200占 10.4%（16 只）；板块上涨 97%；成交前排核心股中位数 +1.05%",
        "stockCodes": [
          "002384.SZ",
          "600183.SH",
          "002463.SZ",
          "300476.SZ",
          "002636.SZ",
          "300408.SZ",
          "000823.SZ",
          "603186.SH",
          "603228.SH",
          "002436.SZ",
          "002916.SZ",
          "603920.SH",
          "600601.SH",
          "000636.SZ",
          "002938.SZ",
          "688519.SH"
        ],
        "evidence": {
          "board": "元件",
          "boardChange": 2.6489,
          "relativeChange": 0.9077,
          "breadth": 0.9682539682539683,
          "coreMedian": 1.0500684827272,
          "amountShare": 0.10354324015551479
        }
      },
      {
        "tag": "主线",
        "name": "数字芯片设计",
        "tone": "up",
        "note": "数字芯片设计 +4.14%，较全A +2.40 个百分点；成交前200占 8.8%（18 只）；板块上涨 93%；成交前排核心股中位数 +3.85%",
        "stockCodes": [
          "688825.SH",
          "603893.SH",
          "300223.SZ",
          "688018.SH",
          "001309.SZ",
          "301536.SZ",
          "688702.SH",
          "300613.SZ",
          "688525.SH",
          "688766.SH",
          "300458.SZ",
          "688608.SH",
          "301308.SZ",
          "688521.SH",
          "688099.SH",
          "688801.SH",
          "688802.SH",
          "603501.SH"
        ],
        "evidence": {
          "board": "数字芯片设计",
          "boardChange": 4.1424,
          "relativeChange": 2.4012,
          "breadth": 0.9310344827586207,
          "coreMedian": 3.8457812651361,
          "amountShare": 0.08812632201853163
        }
      },
      {
        "tag": "扩散",
        "name": "消费电子 / 免税 / 品牌消费",
        "tone": "up",
        "note": "消费电子 +4.35%，较全A +2.61 个百分点；成交前200占 4.7%（8 只）；板块上涨 97%；成交前排核心股中位数 +3.84%",
        "stockCodes": [
          "300136.SZ",
          "601138.SH",
          "002241.SZ",
          "600519.SH",
          "300115.SZ",
          "300433.SZ",
          "000858.SZ",
          "603626.SH"
        ],
        "evidence": {
          "board": "消费电子",
          "boardChange": 4.3524,
          "relativeChange": 2.6112,
          "breadth": 0.96875,
          "coreMedian": 3.839935327405,
          "amountShare": 0.04748750344561988
        }
      },
      {
        "tag": "成长",
        "name": "机器人 / 工业母机 / 低空",
        "tone": "up",
        "note": "人形机器人 +3.32%，较全A +1.58 个百分点；成交前200占 3.5%（6 只）；板块上涨 92%；成交前排核心股中位数 +3.24%",
        "stockCodes": [
          "688836.SH",
          "002050.SZ",
          "688017.SH",
          "002747.SZ",
          "300124.SZ",
          "601689.SH"
        ],
        "evidence": {
          "board": "人形机器人",
          "boardChange": 3.3213,
          "relativeChange": 1.5801,
          "breadth": 0.9232323232323232,
          "coreMedian": 3.2418224299065,
          "amountShare": 0.034668794780245725
        }
      },
      {
        "tag": "扩散",
        "name": "通用设备",
        "tone": "up",
        "note": "通用设备 +2.62%，较全A +0.88 个百分点；成交前200占 3.2%（9 只）；板块上涨 91%；成交前排核心股中位数 +4.58%",
        "stockCodes": [
          "002639.SZ",
          "688808.SH",
          "603667.SH",
          "300007.SZ",
          "688827.SH",
          "002131.SZ",
          "002164.SZ",
          "000530.SZ",
          "300503.SZ"
        ],
        "evidence": {
          "board": "通用设备",
          "boardChange": 2.6203,
          "relativeChange": 0.8791,
          "breadth": 0.9098039215686274,
          "coreMedian": 4.5801526717557,
          "amountShare": 0.03170748226540494
        }
      }
    ],
    "marketReview": {
      "version": "evidence-20261110",
      "poolSize": 200,
      "benchmark": 1.7412,
      "returnCoverage": 200,
      "factorEvidence": [
        {
          "group": "宽度",
          "side": "bull",
          "strength": 4.767,
          "text": "上涨 4273 家、下跌 1149 家；上涨占比 78.8%，个股涨跌幅中位数 +1.31%。"
        },
        {
          "group": "赚钱效应",
          "side": "bull",
          "strength": 3.056,
          "text": "95 家涨停、0 家跌停，净涨停 +95 家，较近 20 日中位数 +55 家。"
        },
        {
          "group": "盘中承接",
          "side": "bear",
          "strength": 2.672,
          "text": "收盘承接偏弱：4 个主要指数收盘平均位于日内高低区间的 17%，其中 4 个收在区间下三成且较日高回落至少 0.5%；科创50较日高回落 2.03%。"
        },
        {
          "group": "指数",
          "side": "bull",
          "strength": 1.52,
          "text": "主要指数均值 +0.76%：上证指数 +0.08%、深证成指 +0.86%、创业板指 +1.46%、科创50 +0.64%。"
        },
        {
          "group": "主线反馈",
          "side": "bull",
          "strength": 1.077,
          "text": "CPO / 光模块 / 铜缆（主线），通信设备 +2.82%，成交前排占比 13.6%。"
        },
        {
          "group": "成交",
          "side": "bear",
          "strength": 0.492,
          "text": "量能低于常态：两市成交 1.50 万亿，较前一日 +1.5%，但仍低于近 20 日中位数 7.0%。"
        }
      ]
    },
    "crossFactors": [],
    "turnoverLeaders": [
      {
        "rank": 1,
        "code": "300308.SZ",
        "name": "中际旭创",
        "amountValue": 18564294000.0,
        "amount": "185.64亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "深股通;融资融券;5G;芯片概念;F5G概念;无人驾驶;汽车电子;创投;同花顺新质50;共封装光学(CPO);中国AI 50;人民币贬值受益;液冷服务器;数据中心(AIDC)",
        "pct": 4.1966241178683,
        "pctText": "+4.20%",
        "price": ""
      },
      {
        "rank": 2,
        "code": "300502.SZ",
        "name": "新易盛",
        "amountValue": 16304174000.0,
        "amount": "163.04亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "5G;融资融券;深股通;共封装光学(CPO);西部大开发;中国AI 50;人民币贬值受益;芯片概念;数据中心(AIDC);2026中报预增",
        "pct": 4.4318181818182,
        "pctText": "+4.43%",
        "price": ""
      },
      {
        "rank": 3,
        "code": "002384.SZ",
        "name": "东山精密",
        "amountValue": 10537458800.0,
        "amount": "105.37亿",
        "industry": "电子-元件-印制电路板",
        "concept": "深股通;5G;小米概念;融资融券;MiniLED;PCB概念;华为概念;苹果概念;特斯拉概念;同花顺果指数;消费电子概念;新能源汽车;人民币贬值受益;机器人概念;共封装光学(CPO);人形机器人;芯片概念;高压快充;AI手机;智能穿戴;光纤概念;数据中心(AIDC);2026中报预增",
        "pct": 2.69971775678,
        "pctText": "+2.70%",
        "price": ""
      },
      {
        "rank": 4,
        "code": "688825.SH",
        "name": "长鑫科技",
        "amountValue": 9638928800.0,
        "amount": "96.39亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "人民币贬值受益;存储芯片;国家大基金持股;芯片概念;小米概念;抖音概念(字节概念);阿里巴巴概念;腾讯概念;融资融券;新股与次新股;注册制次新股;科创次新股;消费电子概念",
        "pct": 1.150287571893,
        "pctText": "+1.15%",
        "price": ""
      },
      {
        "rank": 6,
        "code": "600183.SH",
        "name": "生益科技",
        "amountValue": 7963285100.0,
        "amount": "79.63亿",
        "industry": "电子-元件-印制电路板",
        "concept": "融资融券;沪股通;5G;华为概念;PCB概念;汽车电子;MiniLED;毫米波雷达;先进封装;共封装光学(CPO);新能源汽车;芯片概念;存储芯片;商业航天;2026中报预增;2026三季报预增",
        "pct": 0.35370684776457,
        "pctText": "+0.35%",
        "price": ""
      },
      {
        "rank": 10,
        "code": "688836.SH",
        "name": "宇树科技",
        "amountValue": 6379970400.0,
        "amount": "63.80亿",
        "industry": "机械设备-自动化设备-机器人",
        "concept": "人民币贬值受益;专精特新;人工智能;人形机器人;共同富裕示范区;机器人概念;高端装备;融资融券;新股与次新股;注册制次新股;科创次新股",
        "pct": 6.286312849162,
        "pctText": "+6.29%",
        "price": ""
      },
      {
        "rank": 11,
        "code": "002463.SZ",
        "name": "沪电股份",
        "amountValue": 5664219000.0,
        "amount": "56.64亿",
        "industry": "电子-元件-印制电路板",
        "concept": "深股通;融资融券;芯片概念;华为概念;汽车电子;PCB概念;5G;毫米波雷达;同花顺出海50;污水处理;人民币贬值受益;无人驾驶;海峡两岸;数据中心(AIDC);2026中报预增;2026三季报预增",
        "pct": 5.4474708171206,
        "pctText": "+5.45%",
        "price": ""
      },
      {
        "rank": 12,
        "code": "300136.SZ",
        "name": "信维通信",
        "amountValue": 5298856100.0,
        "amount": "52.99亿",
        "industry": "电子-消费电子-消费电子零部件及组装",
        "concept": "智能穿戴;智能音箱;苹果概念;深股通;5G;融资融券;无线充电;汽车电子;无线耳机;华为概念;消费电子概念;WiFi 6;虚拟现实;6G概念;卫星导航;毫米波雷达;商业航天;特斯拉概念;同花顺果指数;柔性屏(折叠屏);粤港澳大湾区;无人机;车联网(车路协同);物联网;AI眼镜;一带一路;富士康概念;人民币贬值受益;机器人概念;低空经济;海峡两岸;芯片概念;数据中心(AIDC);MLCC概念;人形机器人",
        "pct": 6.5618448637316,
        "pctText": "+6.56%",
        "price": ""
      },
      {
        "rank": 13,
        "code": "300394.SZ",
        "name": "天孚通信",
        "amountValue": 5216908100.0,
        "amount": "52.17亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "5G;融资融券;华为概念;深股通;专精特新;共封装光学(CPO);光纤概念;同花顺新质50;先进封装;人民币贬值受益;英伟达概念;无人驾驶;数据中心(AIDC)",
        "pct": 2.9229767138902,
        "pctText": "+2.92%",
        "price": ""
      },
      {
        "rank": 14,
        "code": "601138.SH",
        "name": "工业富联",
        "amountValue": 4948922600.0,
        "amount": "49.49亿",
        "industry": "电子-消费电子-消费电子零部件及组装",
        "concept": "物联网;机器人概念;融资融券;工业互联网;苹果概念;沪股通;智慧城市;富士康概念;新能源汽车;5G;人工智能;同花顺漂亮100;虚拟现实;芯片概念;液冷服务器;算力租赁;创投;同花顺出海50;同花顺果指数;东数西算(算力);同花顺新质50;云计算;医疗器械概念;共封装光学(CPO);英伟达概念;海峡两岸;阿里巴巴概念;数据中心(AIDC);2026中报预增;人形机器人",
        "pct": 1.4329339910735,
        "pctText": "+1.43%",
        "price": ""
      },
      {
        "rank": 16,
        "code": "002241.SZ",
        "name": "歌尔股份",
        "amountValue": 4914678300.0,
        "amount": "49.15亿",
        "industry": "电子-消费电子-消费电子零部件及组装",
        "concept": "语音技术;融资融券;深股通;物联网;富士康概念;独角兽概念;智能穿戴;机器人概念;智能音箱;虚拟现实;工业互联网;智能家居;小米概念;苹果概念;无线耳机;同花顺漂亮100;芯片概念;华为概念;消费电子概念;元宇宙;创投;汽车电子;星闪概念;MR(混合现实);同花顺果指数;传感器;无人机;AI眼镜;3D打印;人工智能;人民币贬值受益;海峡两岸;MicroLED概念",
        "pct": 3.839935327405,
        "pctText": "+3.84%",
        "price": ""
      },
      {
        "rank": 21,
        "code": "300476.SZ",
        "name": "胜宏科技",
        "amountValue": 4462835000.0,
        "amount": "44.63亿",
        "industry": "电子-元件-印制电路板",
        "concept": "物联网;深股通;富士康概念;5G;融资融券;粤港澳大湾区;PCB概念;光伏概念;英伟达概念;小米概念;虚拟现实;AI PC;AI手机;特斯拉概念;人形机器人;新能源汽车;机器人概念;乡村振兴;人民币贬值受益;同花顺出海50;东数西算(算力);共封装光学(CPO);芯片概念;智能电网;储能;汽车电子;海峡两岸;数据中心(AIDC)",
        "pct": 1.0500684827272,
        "pctText": "+1.05%",
        "price": ""
      },
      {
        "rank": 24,
        "code": "600487.SH",
        "name": "亨通光电",
        "amountValue": 4242600200.0,
        "amount": "42.43亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "智慧城市;军工;融资融券;特高压;网络安全;海工装备;华为概念;长三角一体化;芯片概念;量子科技;风电;沪股通;5G;一带一路;F5G概念;柔性直流输电;6G概念;太赫兹;小米汽车;智能电网;共封装光学(CPO);光纤概念;水利;创投;机器人概念;DeepSeek概念;新能源汽车;人形机器人;液冷服务器;无人驾驶;同花顺出海50;数据中心(AIDC);2026中报预增;2026三季报预增",
        "pct": 1.1845534233594,
        "pctText": "+1.18%",
        "price": ""
      },
      {
        "rank": 26,
        "code": "603893.SH",
        "name": "瑞芯微",
        "amountValue": 4144798600.0,
        "amount": "41.45亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "芯片概念;人工智能;华为概念;虚拟现实;物联网;MCU芯片;消费电子概念;沪股通;百度概念;小米概念;融资融券;智能音箱;智能座舱;国家大基金持股;汽车芯片;电力物联网;福建自贸区;AI眼镜;机器视觉;机器人概念;智能家居;智能穿戴;人形机器人;海峡两岸;腾讯概念;中国AI 50;比亚迪概念;2026中报预增;2026三季报预增",
        "pct": 10.0,
        "pctText": "+10.00%",
        "price": ""
      },
      {
        "rank": 28,
        "code": "300223.SZ",
        "name": "君正股份",
        "amountValue": 3994659400.0,
        "amount": "39.95亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "智能音箱;人工智能;芯片概念;物联网;OLED;融资融券;区块链;深股通;汽车电子;MCU芯片;MiniLED;汽车芯片;小米概念;存储芯片;鸿蒙概念;机器人概念;安防;AI眼镜;抖音概念(字节概念);智能座舱;无人驾驶;人民币贬值受益;智能家居;机器视觉;人脸识别;传感器;家用电器;消费电子概念;3D打印;京津冀一体化;毫米波雷达;2026中报预增",
        "pct": 3.8457812651361,
        "pctText": "+3.85%",
        "price": ""
      },
      {
        "rank": 33,
        "code": "002636.SZ",
        "name": "金安国纪",
        "amountValue": 3619553400.0,
        "amount": "36.20亿",
        "industry": "电子-元件-印制电路板",
        "concept": "深股通;消毒剂;医疗器械概念;PCB概念;融资融券;2026中报预增",
        "pct": -0.81781008632441,
        "pctText": "-0.82%",
        "price": ""
      },
      {
        "rank": 37,
        "code": "300408.SZ",
        "name": "三环集团",
        "amountValue": 3511243300.0,
        "amount": "35.11亿",
        "industry": "电子-元件-被动元件",
        "concept": "深股通;小米概念;5G;燃料电池;融资融券;华为概念;消费电子概念;光纤概念;共封装光学(CPO);数据中心(AIDC);MLCC概念",
        "pct": 1.6305800588078,
        "pctText": "+1.63%",
        "price": ""
      },
      {
        "rank": 41,
        "code": "002050.SZ",
        "name": "三花智控",
        "amountValue": 3376585900.0,
        "amount": "33.77亿",
        "industry": "家用电器-白色家电-家电零部件",
        "concept": "融资融券;深股通;家用电器;燃料电池;华为汽车;储能;汽车热管理;空气能热泵;机器人概念;长安汽车概念;新能源汽车;比亚迪概念;同花顺出海50;特斯拉概念;人形机器人;同花顺新质50;宁德时代概念;DeepSeek概念;一带一路;小米概念;液冷服务器;数据中心(AIDC)",
        "pct": 3.2418224299065,
        "pctText": "+3.24%",
        "price": ""
      },
      {
        "rank": 42,
        "code": "600519.SH",
        "name": "贵州茅台",
        "amountValue": 3316078800.0,
        "amount": "33.16亿",
        "industry": "食品饮料-白酒-白酒Ⅲ",
        "concept": "超级品牌;融资融券;沪股通;同花顺漂亮100;白酒概念;国企改革;西部大开发;乡村振兴",
        "pct": -0.41453574073177,
        "pctText": "-0.41%",
        "price": ""
      },
      {
        "rank": 45,
        "code": "002639.SZ",
        "name": "雪人集团",
        "amountValue": 3266715500.0,
        "amount": "32.67亿",
        "industry": "机械设备-通用设备-制冷空调设备",
        "concept": "冷链物流;天然气;冰雪产业;融资融券;燃料电池;碳中和;体育产业;深股通;空气能热泵;氢能源;物联网;可控核聚变;核电;福建自贸区;一带一路;工业互联网;阿里巴巴概念;腾讯概念;海峡两岸;海工装备;华为概念;数字经济;雅下水电概念;液冷服务器;水利;东数西算(算力);抽水蓄能;商业航天;高端装备;数据中心(AIDC)",
        "pct": 0.94043887147337,
        "pctText": "+0.94%",
        "price": ""
      },
      {
        "rank": 48,
        "code": "688017.SH",
        "name": "绿的谐波",
        "amountValue": 3075384900.0,
        "amount": "30.75亿",
        "industry": "机械设备-自动化设备-机器人",
        "concept": "融资融券;专精特新;机器人概念;减速器;沪股通;新型工业化;同花顺新质50;人形机器人;中国AI 50",
        "pct": 2.2147197839298,
        "pctText": "+2.21%",
        "price": ""
      },
      {
        "rank": 54,
        "code": "300548.SZ",
        "name": "长芯博创",
        "amountValue": 2832246700.0,
        "amount": "28.32亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "5G;长三角一体化;芯片概念;华为概念;F5G概念;专精特新;深股通;铜缆高速连接;共封装光学(CPO);光纤概念;机器人概念;抖音概念(字节概念);融资融券;机器视觉;数据中心(AIDC);2026中报预增",
        "pct": 9.8744769874477,
        "pctText": "+9.87%",
        "price": ""
      },
      {
        "rank": 55,
        "code": "000823.SZ",
        "name": "超声电子",
        "amountValue": 2824108900.0,
        "amount": "28.24亿",
        "industry": "电子-元件-印制电路板",
        "concept": "融资融券;苹果概念;5G;汽车电子;PCB概念;传感器;比亚迪概念;国企改革;毫米波雷达;深股通;东数西算(算力);无人机;共封装光学(CPO);AI眼镜;虚拟现实;消费电子概念;无人驾驶;商业航天;卫星导航;数据中心(AIDC);MiniLED;2026三季报预增",
        "pct": 3.2474804031355,
        "pctText": "+3.25%",
        "price": ""
      },
      {
        "rank": 56,
        "code": "688018.SH",
        "name": "乐鑫科技",
        "amountValue": 2792872400.0,
        "amount": "27.93亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "芯片概念;物联网;融资融券;上海自贸区;MCU芯片;WiFi 6;机器人概念;人工智能;沪股通;小米概念;星闪概念;语音技术;抖音概念(字节概念);中国AI 50;AI智能体;数字经济;智能家居",
        "pct": 8.1404628890663,
        "pctText": "+8.14%",
        "price": ""
      },
      {
        "rank": 57,
        "code": "001309.SZ",
        "name": "德明利",
        "amountValue": 2792378000.0,
        "amount": "27.92亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "专精特新;粤港澳大湾区;人工智能;芯片概念;中芯国际概念;存储芯片;深股通;共封装光学(CPO);AI PC;融资融券;汽车电子;人民币贬值受益;智能穿戴;数据中心(AIDC)",
        "pct": 2.8126167476117,
        "pctText": "+2.81%",
        "price": ""
      },
      {
        "rank": 61,
        "code": "603083.SH",
        "name": "剑桥科技",
        "amountValue": 2762309900.0,
        "amount": "27.62亿",
        "industry": "通信-通信设备-通信终端及配件",
        "concept": "物联网;智能家居;5G;工业互联网;融资融券;F5G概念;WiFi 6;沪股通;华为概念;共封装光学(CPO);人民币贬值受益;液冷服务器;一带一路;2026中报预增",
        "pct": 2.9036004645761,
        "pctText": "+2.90%",
        "price": ""
      },
      {
        "rank": 65,
        "code": "603186.SH",
        "name": "华正新材",
        "amountValue": 2668987900.0,
        "amount": "26.69亿",
        "industry": "电子-元件-印制电路板",
        "concept": "5G;冷链物流;芯片概念;PCB概念;华为概念;先进封装;固态电池;毫米波雷达;MiniLED;6G概念;锂电池概念;消费电子概念;绿色电力;储能;石墨烯;沪股通;海峡两岸;2026中报预增",
        "pct": -1.5554508113932,
        "pctText": "-1.56%",
        "price": ""
      },
      {
        "rank": 66,
        "code": "603228.SH",
        "name": "景旺电子",
        "amountValue": 2640619400.0,
        "amount": "26.41亿",
        "industry": "电子-元件-印制电路板",
        "concept": "沪股通;OLED;融资融券;汽车电子;PCB概念;5G;毫米波雷达;英伟达概念;华为概念;无人驾驶;卫星导航;共封装光学(CPO);特斯拉概念;柔性屏(折叠屏);AI PC;6G概念;消费电子概念;新能源汽车;比亚迪概念;华为手机;华为数字能源;商业航天;2026三季报预增",
        "pct": 1.7537766973433,
        "pctText": "+1.75%",
        "price": ""
      },
      {
        "rank": 68,
        "code": "300115.SZ",
        "name": "长盈精密",
        "amountValue": 2594323900.0,
        "amount": "25.94亿",
        "industry": "电子-消费电子-消费电子零部件及组装",
        "concept": "小米概念;融资融券;深股通;芯片概念;宁德时代概念;华为概念;无线耳机;新能源汽车;苹果概念;虚拟现实;智能穿戴;消费电子概念;5G;氢能源;华为汽车;燃料电池;AI手机;人形机器人;充电桩;无人机;MR(混合现实);特斯拉概念;同花顺果指数;AI眼镜;3D打印;锂电池概念;储能;传感器;机器人概念;AI PC;粤港澳大湾区;新型工业化;铜缆高速连接;减速器;PEEK材料;海峡两岸;卫星导航;东数西算(算力);液冷服务器",
        "pct": 4.2847503373819,
        "pctText": "+4.28%",
        "price": ""
      },
      {
        "rank": 69,
        "code": "688808.SH",
        "name": "联讯仪器",
        "amountValue": 2580983100.0,
        "amount": "25.81亿",
        "industry": "机械设备-通用设备-仪器仪表",
        "concept": "融资融券;新股与次新股;注册制次新股;科创次新股;专精特新;芯片概念;共封装光学(CPO);存储芯片;高端装备;2026中报预增;2026三季报预增",
        "pct": -1.8242925145159,
        "pctText": "-1.82%",
        "price": ""
      },
      {
        "rank": 70,
        "code": "002929.SZ",
        "name": "润建股份",
        "amountValue": 2567845600.0,
        "amount": "25.68亿",
        "industry": "通信-通信服务-通信工程及服务",
        "concept": "雄安新区;电力物联网;工业互联网;无人机;光伏概念;深股通;5G;储能;华为概念;虚拟现实;信创;充电桩;一带一路;百度概念;机器人概念;云办公;智慧城市;智慧灯杆;跨境电商;数据安全;智能电网;元宇宙;阿里巴巴概念;多模态AI;人工智能;低空经济;MR(混合现实);融资融券;西部大开发;东数西算(算力);数字乡村;数字孪生;军工;数据要素;乡村振兴;算力租赁;虚拟电厂;华为数字能源;虚拟数字人;空间计算;AI智能体;DeepSeek概念;华为昇腾;AI应用;数据中心(AIDC)",
        "pct": -0.67796610169491,
        "pctText": "-0.68%",
        "price": ""
      },
      {
        "rank": 71,
        "code": "002281.SZ",
        "name": "光迅科技",
        "amountValue": 2556337300.0,
        "amount": "25.56亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "融资融券;深股通;华为概念;5G;F5G概念;国企改革;6G概念;芯片概念;液冷服务器;量子科技;共封装光学(CPO);央企国企改革;光纤概念;抖音概念(字节概念);百度概念;腾讯概念;阿里巴巴概念;东数西算(算力);股权转让(并购重组);数据中心(AIDC);先进封装;2026中报预增;2026三季报预增",
        "pct": 1.2104981253348,
        "pctText": "+1.21%",
        "price": ""
      },
      {
        "rank": 75,
        "code": "601869.SH",
        "name": "长飞光纤",
        "amountValue": 2466854500.0,
        "amount": "24.67亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "沪股通;5G;工业互联网;融资融券;芯片概念;第三代半导体;太赫兹;特高压;智能电网;铜缆高速连接;共封装光学(CPO);风电;光纤概念;创投;抖音概念(字节概念);机器人概念;新能源汽车;一带一路;海工装备;量子科技;人形机器人;专精特新;东数西算(算力);同花顺出海50;数据中心(AIDC);2026中报预增",
        "pct": -0.24116391239028,
        "pctText": "-0.24%",
        "price": ""
      },
      {
        "rank": 79,
        "code": "600522.SH",
        "name": "中天科技",
        "amountValue": 2393509200.0,
        "amount": "23.94亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "融资融券;沪股通;5G;海工装备;工业互联网;华为概念;特高压;储能;风电;绿色电力;柔性直流输电;光伏概念;超导概念;6G概念;一带一路;超级电容;氢能源;固态电池;共封装光学(CPO);光纤概念;锂电池概念;碳中和;DeepSeek概念;东数西算(算力);液冷服务器;数据要素;铜缆高速连接;新能源汽车;汽车电子;可控核聚变;智能电网;低空经济;机器人概念;阿里巴巴概念;量子科技;数字经济;商业航天;钙钛矿电池;核电;芯片概念;PCB概念;PET铜箔;数据中心(AIDC);2026中报预增",
        "pct": 0.59422750424448,
        "pctText": "+0.59%",
        "price": ""
      },
      {
        "rank": 81,
        "code": "002436.SZ",
        "name": "兴森科技",
        "amountValue": 2382384900.0,
        "amount": "23.82亿",
        "industry": "电子-元件-印制电路板",
        "concept": "深股通;华为概念;融资融券;芯片概念;PCB概念;5G;军工;6G概念;粤港澳大湾区;先进封装;低空经济;存储芯片;机器人概念;共封装光学(CPO);毫米波雷达;商业航天;玻璃基板;2026中报预增;2026三季报预增",
        "pct": 2.6413690476191,
        "pctText": "+2.64%",
        "price": ""
      },
      {
        "rank": 84,
        "code": "300620.SZ",
        "name": "光库科技",
        "amountValue": 2324299900.0,
        "amount": "23.24亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "3D打印;横琴新区;5G;芯片概念;无人驾驶;量子科技;融资融券;国企改革;深股通;共封装光学(CPO);光纤概念;海工装备;一带一路;粤港澳大湾区;股权转让(并购重组);商业航天;卫星导航;数据中心(AIDC);2026中报预增;2026三季报预增",
        "pct": 6.614074201109,
        "pctText": "+6.61%",
        "price": ""
      },
      {
        "rank": 87,
        "code": "300433.SZ",
        "name": "蓝思科技",
        "amountValue": 2288496400.0,
        "amount": "22.88亿",
        "industry": "电子-消费电子-消费电子零部件及组装",
        "concept": "苹果概念;深股通;OLED;机器人概念;华为概念;融资融券;无线耳机;工业互联网;智能家居;新能源汽车;汽车电子;同花顺漂亮100;虚拟现实;小米概念;消费电子概念;光伏概念;元宇宙;传感器;充电桩;TOPCON电池;3D打印;智能座舱;特斯拉概念;同花顺果指数;智能穿戴;AI眼镜;新型烟草(电子烟);新型工业化;比亚迪概念;小米汽车;人形机器人;柔性屏(折叠屏);人民币贬值受益;液冷服务器;减速器;宁德时代概念;智能物流;蚂蚁集团概念;商业航天;AI手机;先进封装;光纤概念;玻璃基板",
        "pct": 1.249566122874,
        "pctText": "+1.25%",
        "price": ""
      },
      {
        "rank": 89,
        "code": "301536.SZ",
        "name": "星宸科技",
        "amountValue": 2245086100.0,
        "amount": "22.45亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "芯片概念;人工智能;人脸识别;新能源汽车;安防;专精特新;消费电子概念;机器人概念;毫米波雷达;卫星导航;汽车电子;虚拟现实;移动支付;汽车芯片;腾讯概念;海峡两岸;无人驾驶;星闪概念;福建自贸区;深股通;融资融券;智能穿戴;智能家居;AI眼镜;数据安全;网络安全;东数西算(算力);车联网(车路协同);机器视觉;传感器;小米概念;低空经济;无人机;多模态AI;2026中报预增;2026三季报预增",
        "pct": 14.737084870849,
        "pctText": "+14.74%",
        "price": ""
      },
      {
        "rank": 90,
        "code": "002747.SZ",
        "name": "埃斯顿",
        "amountValue": 2237690800.0,
        "amount": "22.38亿",
        "industry": "机械设备-自动化设备-机器人",
        "concept": "深股通;工业互联网;机器人概念;宁德时代概念;农机;融资融券;专精特新;机器视觉;医疗器械概念;人形机器人;工业母机;比亚迪概念;光伏概念;高端装备;长安汽车概念;新型工业化;智能医疗;养老概念;2026中报预增",
        "pct": 3.9102346140768,
        "pctText": "+3.91%",
        "price": ""
      },
      {
        "rank": 91,
        "code": "688702.SH",
        "name": "盛科通信",
        "amountValue": 2227263900.0,
        "amount": "22.27亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "芯片概念;融资融券;5G;国家大基金持股;沪股通;中国AI 50;网络安全;数据中心(AIDC)",
        "pct": 5.0849303135889,
        "pctText": "+5.08%",
        "price": ""
      },
      {
        "rank": 93,
        "code": "300613.SZ",
        "name": "富瀚微",
        "amountValue": 2217242400.0,
        "amount": "22.17亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "人工智能;安防;芯片概念;深股通;专精特新;汽车电子;汽车芯片;比亚迪概念;融资融券;智能音箱;智能家居;机器视觉;人脸识别;机器人概念;东数西算(算力);AI眼镜;鸿蒙概念;智能穿戴;消费电子概念;人形机器人;2026中报预增",
        "pct": 20.00599880024,
        "pctText": "+20.01%",
        "price": ""
      },
      {
        "rank": 94,
        "code": "300124.SZ",
        "name": "汇川技术",
        "amountValue": 2186902100.0,
        "amount": "21.87亿",
        "industry": "机械设备-自动化设备-工控设备",
        "concept": "融资融券;深股通;新能源汽车;工业互联网;同花顺漂亮100;机器人概念;储能;工业母机;换电概念;机器视觉;新型工业化;小米概念;小米汽车;人形机器人;一体化压铸;DeepSeek概念;数字经济;碳中和;人工智能;农机;液冷服务器;AI应用;商业航天;AI智能体",
        "pct": -2.9539530842745,
        "pctText": "-2.95%",
        "price": ""
      },
      {
        "rank": 95,
        "code": "002916.SZ",
        "name": "深南电路",
        "amountValue": 2178248800.0,
        "amount": "21.78亿",
        "industry": "电子-元件-印制电路板",
        "concept": "富士康概念;芯片概念;5G;深股通;苹果概念;融资融券;华为概念;PCB概念;新能源汽车;国企改革;存储芯片;先进封装;国家大基金持股;央企国企改革;汽车电子;粤港澳大湾区;数据中心(AIDC);2026中报预增;2026三季报预增",
        "pct": 2.3095823095823,
        "pctText": "+2.31%",
        "price": ""
      },
      {
        "rank": 98,
        "code": "688525.SH",
        "name": "佰维存储",
        "amountValue": 2138203600.0,
        "amount": "21.38亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "融资融券;信创;专精特新;汽车芯片;消费电子概念;存储芯片;先进封装;华为概念;智能穿戴;国家大基金持股;AI PC;AI手机;沪股通;芯片概念;小米概念;AI眼镜;机器人概念;阿里巴巴概念;粤港澳大湾区;比亚迪概念;人形机器人;同花顺出海50;数据中心(AIDC);共封装光学(CPO)",
        "pct": 3.6599952156925,
        "pctText": "+3.66%",
        "price": ""
      },
      {
        "rank": 99,
        "code": "600498.SH",
        "name": "烽火通信",
        "amountValue": 2129370800.0,
        "amount": "21.29亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "融资融券;沪股通;5G;网络安全;国企改革;6G概念;一带一路;智慧城市;国资云;人工智能;数据安全;数据要素;智慧政务;液冷服务器;WiFi 6;华为昇腾;共封装光学(CPO);央企国企改革;光纤概念;东数西算(算力);F5G概念;汽车芯片;芯片概念;DeepSeek概念;云计算;智能医疗;数字乡村;华为鲲鹏;MCU芯片;海工装备;特高压;创投;商业航天;卫星导航;AI智能体;数据中心(AIDC);华为概念",
        "pct": 1.6649323621228,
        "pctText": "+1.66%",
        "price": ""
      },
      {
        "rank": 100,
        "code": "688766.SH",
        "name": "普冉股份",
        "amountValue": 2125908100.0,
        "amount": "21.26亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "存储芯片;MCU芯片;华为概念;沪股通;小米概念;芯片概念;融资融券;汽车电子;2026中报预增;数据中心(AIDC);汽车芯片",
        "pct": 2.1319441404369,
        "pctText": "+2.13%",
        "price": ""
      },
      {
        "rank": 101,
        "code": "300458.SZ",
        "name": "全志科技",
        "amountValue": 2123061800.0,
        "amount": "21.23亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "汽车电子;深股通;小米概念;融资融券;人工智能;中芯国际概念;华为概念;物联网;MCU芯片;EDR概念;汽车芯片;横琴新区;机器视觉;机器人概念;阿里巴巴概念;百度概念;智能座舱;长安汽车概念;无人驾驶;虚拟现实;东数西算(算力);车联网(车路协同);智能家居;芯片概念;腾讯概念;家用电器;AI眼镜;DeepSeek概念;创投;智能穿戴;2026中报预增;消费电子概念;2026三季报预增",
        "pct": 10.418222554145,
        "pctText": "+10.42%",
        "price": ""
      },
      {
        "rank": 102,
        "code": "603920.SH",
        "name": "世运电路",
        "amountValue": 2118377100.0,
        "amount": "21.18亿",
        "industry": "电子-元件-印制电路板",
        "concept": "OLED;沪股通;PCB概念;5G;充电桩;融资融券;粤港澳大湾区;机器人概念;毫米波雷达;低空经济;无人机;人形机器人;智能座舱;无人驾驶;汽车电子;新能源汽车;特斯拉概念;光伏概念;储能;国企改革;人民币贬值受益;飞行汽车(eVTOL);AI眼镜;东数西算(算力);共封装光学(CPO);脑机接口;海峡两岸;商业航天;数据中心(AIDC)",
        "pct": 8.3085169743895,
        "pctText": "+8.31%",
        "price": ""
      },
      {
        "rank": 105,
        "code": "603667.SH",
        "name": "五洲新春",
        "amountValue": 2066710300.0,
        "amount": "20.67亿",
        "industry": "机械设备-通用设备-金属制品",
        "concept": "新能源汽车;风电;汽车热管理;机器人概念;融资融券;沪股通;军工;减速器;特斯拉概念;人形机器人;无人机;特钢概念;商业航天;大飞机;高端装备",
        "pct": 4.5801526717557,
        "pctText": "+4.58%",
        "price": ""
      },
      {
        "rank": 106,
        "code": "688608.SH",
        "name": "恒玄科技",
        "amountValue": 2066122400.0,
        "amount": "20.66亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "语音技术;星闪概念;消费电子概念;AI眼镜;智能穿戴;华为概念;小米概念;无线耳机;智能音箱;芯片概念;沪股通;融资融券;阿里巴巴概念;中国AI 50;人民币贬值受益;人工智能",
        "pct": 7.0157480314961,
        "pctText": "+7.02%",
        "price": ""
      },
      {
        "rank": 113,
        "code": "603236.SH",
        "name": "移远通信",
        "amountValue": 2021198200.0,
        "amount": "20.21亿",
        "industry": "通信-通信设备-通信终端及配件",
        "concept": "沪股通;物联网;5G;融资融券;6G概念;英伟达概念;机器人概念;无人驾驶;智能电网;储能;星闪概念;智慧城市;机器视觉;汽车电子;智能座舱;WiFi 6;华为海思概念股;电力物联网;长安汽车概念;无人零售;移动支付;跨境电商;毫米波雷达;工业互联网;人工智能;卫星导航;车联网(车路协同);AI眼镜;智能穿戴;小米概念;DeepSeek概念;人形机器人;智能医疗;智能家居;东数西算(算力);两轮车;区块链;芯片概念;人民币贬值受益;数字乡村;数字货币;农机;AI智能体;充电桩;AI应用;MCU芯片;商业航天;水利;消费电子概念;先进封装",
        "pct": 3.9108973547652,
        "pctText": "+3.91%",
        "price": ""
      },
      {
        "rank": 121,
        "code": "300570.SZ",
        "name": "太辰光",
        "amountValue": 1911039900.0,
        "amount": "19.11亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "5G;芯片概念;深股通;铜缆高速连接;共封装光学(CPO);光纤概念;融资融券;传感器;F5G概念;人民币贬值受益;数据中心(AIDC)",
        "pct": 4.5423396965247,
        "pctText": "+4.54%",
        "price": ""
      },
      {
        "rank": 125,
        "code": "301308.SZ",
        "name": "江波龙",
        "amountValue": 1872488700.0,
        "amount": "18.72亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "融资融券;芯片概念;EDR概念;专精特新;信创;深股通;存储芯片;华为概念;先进封装;国家大基金持股;AI PC;AI手机;小米汽车;小米概念;华为鲲鹏;智能穿戴;消费电子概念;AI眼镜;人民币贬值受益;智能座舱;机器人概念;数据安全;数据中心(AIDC);2026中报预增;2026三季报预增",
        "pct": 2.4911857487475,
        "pctText": "+2.49%",
        "price": ""
      },
      {
        "rank": 127,
        "code": "601689.SH",
        "name": "拓普集团",
        "amountValue": 1858319500.0,
        "amount": "18.58亿",
        "industry": "汽车-汽车零部件-底盘与发动机系统",
        "concept": "沪股通;新能源汽车;汽车电子;无人驾驶;融资融券;汽车热管理;一体化压铸;小米概念;华为汽车;机器人概念;小米汽车;新型工业化;同花顺出海50;特斯拉概念;比亚迪概念;同花顺新质50;智能座舱;中国AI 50;人形机器人;液冷服务器;英伟达概念;数据中心(AIDC)",
        "pct": 3.6830835117773,
        "pctText": "+3.68%",
        "price": ""
      },
      {
        "rank": 128,
        "code": "300007.SZ",
        "name": "汉威科技",
        "amountValue": 1851400500.0,
        "amount": "18.51亿",
        "industry": "机械设备-通用设备-仪器仪表",
        "concept": "智能穿戴;语音技术;物联网;智慧城市;工业互联网;创投;独角兽概念;数字孪生;华为概念;无线耳机;碳中和;区块链;专精特新;元宇宙;新能源汽车;传感器;氢能源;机器人概念;小米概念;融资融券;深股通;脑机接口;核污染防治;互联网金融;人形机器人;比亚迪概念;地下管网;芯片概念;智能家居;柔性屏(折叠屏);数据安全;储能;养老概念;抖音概念(字节概念);消费电子概念;污水处理;锂电池概念;水利;医美概念;固态电池;军工",
        "pct": 7.4494949494949,
        "pctText": "+7.45%",
        "price": ""
      },
      {
        "rank": 132,
        "code": "600601.SH",
        "name": "方正科技",
        "amountValue": 1826584200.0,
        "amount": "18.27亿",
        "industry": "电子-元件-印制电路板",
        "concept": "网络游戏;智慧城市;5G;华为概念;国企改革;PCB概念;沪股通;共封装光学(CPO);融资融券;东数西算(算力);2026中报预增",
        "pct": 2.0224719101124,
        "pctText": "+2.02%",
        "price": ""
      },
      {
        "rank": 134,
        "code": "688313.SH",
        "name": "仕佳光子",
        "amountValue": 1820560300.0,
        "amount": "18.21亿",
        "industry": "通信-通信设备-通信网络设备及器件",
        "concept": "融资融券;5G;F5G概念;沪股通;芯片概念;共封装光学(CPO);光纤概念;专精特新;数据中心(AIDC)",
        "pct": 5.0750785705971,
        "pctText": "+5.08%",
        "price": ""
      },
      {
        "rank": 140,
        "code": "688521.SH",
        "name": "芯原股份",
        "amountValue": 1757710700.0,
        "amount": "17.58亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "融资融券;芯片概念;人工智能;数字货币;上海自贸区;汽车芯片;沪股通;腾讯概念;MCU芯片;阿里巴巴概念;智能音箱;物联网;虚拟现实;先进封装;国家大基金持股;无人驾驶;AI眼镜;东数西算(算力);AI手机",
        "pct": 2.2246838364257,
        "pctText": "+2.22%",
        "price": ""
      },
      {
        "rank": 141,
        "code": "688099.SH",
        "name": "晶晨股份",
        "amountValue": 1748122500.0,
        "amount": "17.48亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "芯片概念;上海自贸区;融资融券;汽车电子;沪股通;小米概念;WiFi 6;智能座舱;智能家居;机器视觉;人工智能;汽车芯片;人民币贬值受益;机器人概念;智能音箱;共封装光学(CPO);东数西算(算力);2026三季报预增",
        "pct": 5.1593646732758,
        "pctText": "+5.16%",
        "price": ""
      },
      {
        "rank": 146,
        "code": "000636.SZ",
        "name": "风华高科",
        "amountValue": 1691505800.0,
        "amount": "16.92亿",
        "industry": "电子-元件-被动元件",
        "concept": "5G;华为概念;融资融券;超级电容;小金属概念;汽车电子;深股通;国企改革;比亚迪概念;高压快充;无人机;创投;传感器;锂电池概念;低空经济;东数西算(算力);机器人概念;光伏概念;粤港澳大湾区;AI眼镜;智能穿戴;液冷服务器;储能;共封装光学(CPO);卫星导航;商业航天;数据中心(AIDC);2026中报预增;MLCC概念",
        "pct": 1.3215859030837,
        "pctText": "+1.32%",
        "price": ""
      },
      {
        "rank": 152,
        "code": "688801.SH",
        "name": "燧原科技",
        "amountValue": 1620499400.0,
        "amount": "16.20亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "芯片概念;国家大基金持股;腾讯概念;DeepSeek概念;融资融券;新股与次新股;注册制次新股;科创次新股",
        "pct": 2.576247689464,
        "pctText": "+2.58%",
        "price": ""
      },
      {
        "rank": 155,
        "code": "688802.SH",
        "name": "沐曦股份",
        "amountValue": 1611180700.0,
        "amount": "16.11亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "融资融券;新股与次新股;注册制次新股;科创次新股;芯片概念;信创;东数西算(算力);人工智能;先进封装;智谱AI;DeepSeek概念;人形机器人",
        "pct": -2.1904963203505,
        "pctText": "-2.19%",
        "price": ""
      },
      {
        "rank": 156,
        "code": "000988.SZ",
        "name": "华工科技",
        "amountValue": 1610743500.0,
        "amount": "16.11亿",
        "industry": "机械设备-自动化设备-激光设备",
        "concept": "3D打印;汽车电子;融资融券;深股通;芯片概念;新能源汽车;智慧城市;创投;独角兽概念;苹果概念;量子科技;华为概念;传感器;5G;比亚迪概念;F5G概念;国企改革;充电桩;高压快充;宁德时代概念;钙钛矿电池;工业互联网;长安汽车概念;工业母机;物联网;第三代半导体;氢能源;智能家居;共封装光学(CPO);航空发动机;特斯拉概念;机器人概念;柔性屏(折叠屏);数字孪生;家用电器;锂电池概念;6G概念;先进封装;新型工业化;汽车热管理;智能座舱;大飞机;PCB概念;乡村振兴;铜缆高速连接;农机;AI智能体;专精特新;华为汽车;数据要素;高端装备;东数西算(算力);基因测序;阿里巴巴概念;百度概念;腾讯概念;卫星导航;商业航天;储能;MicroLED概念;MiniLED;存储芯片;玻璃基板",
        "pct": 1.3916808411937,
        "pctText": "+1.39%",
        "price": ""
      },
      {
        "rank": 157,
        "code": "688827.SH",
        "name": "钶锐锶",
        "amountValue": 1610288100.0,
        "amount": "16.10亿",
        "industry": "机械设备-通用设备-机床工具",
        "concept": "富士康概念;工业母机;粤港澳大湾区;高端装备;融资融券;新股与次新股;注册制次新股;科创次新股;机器人概念",
        "pct": 184.76967158916,
        "pctText": "+184.77%",
        "price": ""
      },
      {
        "rank": 159,
        "code": "002131.SZ",
        "name": "利欧股份",
        "amountValue": 1577444800.0,
        "amount": "15.77亿",
        "industry": "机械设备-通用设备-其他通用设备",
        "concept": "水利;深股通;独角兽概念;区块链;融资融券;小米概念;创投;跨境电商;新能源汽车;快手概念;虚拟数字人;百度概念;AIGC概念;ChatGPT概念;腾讯概念;多模态AI;数字经济;人工智能;文化传媒概念;芯片概念;机器视觉;医疗器械概念;抖音概念(字节概念);小红书概念;AI智能体;DeepSeek概念;污水处理;液冷服务器;华为概念;核电;海工装备;专精特新;一带一路;AI应用;数据要素;数据中心(AIDC);第三代半导体;AI视频",
        "pct": 3.1026252983294,
        "pctText": "+3.10%",
        "price": ""
      },
      {
        "rank": 162,
        "code": "002164.SZ",
        "name": "宁波东力",
        "amountValue": 1541869000.0,
        "amount": "15.42亿",
        "industry": "机械设备-通用设备-金属制品",
        "concept": "风电;减速器;融资融券;共同富裕示范区;高铁;机器人概念;深股通;2026中报预增;人形机器人",
        "pct": 1.1167512690355,
        "pctText": "+1.12%",
        "price": ""
      },
      {
        "rank": 164,
        "code": "000530.SZ",
        "name": "冰山冷热",
        "amountValue": 1533466400.0,
        "amount": "15.33亿",
        "industry": "机械设备-通用设备-制冷空调设备",
        "concept": "冷链物流;独角兽概念;体育产业;碳中和;中俄贸易概念;统一大市场;汽车热管理;空气能热泵;融资融券;氢能源;储能;数字经济;冰雪产业;海工装备;核电;比亚迪概念;军工;无人零售;液冷服务器;军民融合;数据中心(AIDC)",
        "pct": 10.031347962382,
        "pctText": "+10.03%",
        "price": ""
      },
      {
        "rank": 166,
        "code": "600105.SH",
        "name": "永鼎股份",
        "amountValue": 1524703600.0,
        "amount": "15.25亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "长三角一体化;融资融券;华为汽车;华为概念;新能源汽车;5G;一带一路;专精特新;参股银行;超导概念;沪股通;工业互联网;风电;比亚迪概念;核电;可控核聚变;共封装光学(CPO);网络安全;光纤概念;数据安全;芯片概念;军工;东数西算(算力);3D打印;商业航天;低空经济;数据中心(AIDC);2026中报预增",
        "pct": 0.97821253890619,
        "pctText": "+0.98%",
        "price": ""
      },
      {
        "rank": 167,
        "code": "002938.SZ",
        "name": "鹏鼎控股",
        "amountValue": 1524047200.0,
        "amount": "15.24亿",
        "industry": "电子-元件-印制电路板",
        "concept": "深股通;华为概念;无线耳机;MiniLED;苹果概念;富士康概念;消费电子概念;PCB概念;汽车电子;融资融券;新能源汽车;虚拟现实;AI手机;AI PC;同花顺果指数;AI眼镜;人形机器人;人民币贬值受益;无人驾驶;共封装光学(CPO);智能座舱;海峡两岸;智能穿戴;商业航天",
        "pct": 3.1204493447056,
        "pctText": "+3.12%",
        "price": ""
      },
      {
        "rank": 173,
        "code": "688143.SH",
        "name": "长盈通",
        "amountValue": 1494394900.0,
        "amount": "14.94亿",
        "industry": "通信-通信设备-通信线缆及配套",
        "concept": "专精特新;融资融券;军工;光纤概念;DeepSeek概念;海工装备;汽车热管理;共封装光学(CPO);芯片概念;沪股通;特高压;商业航天",
        "pct": 0.4742666432461,
        "pctText": "+0.47%",
        "price": ""
      },
      {
        "rank": 178,
        "code": "688519.SH",
        "name": "南亚新材",
        "amountValue": 1475744600.0,
        "amount": "14.76亿",
        "industry": "电子-元件-印制电路板",
        "concept": "融资融券;华为概念;专精特新;5G;沪股通;MiniLED;新能源汽车;PCB概念;存储芯片;共封装光学(CPO);2026中报预增",
        "pct": 0.55944055944057,
        "pctText": "+0.56%",
        "price": ""
      },
      {
        "rank": 179,
        "code": "603501.SH",
        "name": "豪威集团",
        "amountValue": 1472463100.0,
        "amount": "14.72亿",
        "industry": "电子-半导体-数字芯片设计",
        "concept": "芯片概念;沪股通;无线耳机;融资融券;华为概念;中芯国际概念;同花顺漂亮100;小米概念;汽车芯片;MCU芯片;传感器;OLED;华为手机;汽车电子;机器视觉;人民币贬值受益;消费电子概念;无人驾驶;英伟达概念;医疗器械概念;AI眼镜;机器人概念;共封装光学(CPO)",
        "pct": 2.0555103936825,
        "pctText": "+2.06%",
        "price": ""
      },
      {
        "rank": 186,
        "code": "300503.SZ",
        "name": "昊志机电",
        "amountValue": 1453238000.0,
        "amount": "14.53亿",
        "industry": "机械设备-通用设备-其他通用设备",
        "concept": "高端装备;富士康概念;燃料电池;专精特新;工业母机;机器人概念;减速器;传感器;新能源汽车;新型工业化;深股通;粤港澳大湾区;氢能源;人工智能;人形机器人;PCB概念;比亚迪概念;光伏概念;海峡两岸;芯片概念;商业航天;融资融券;MLCC概念",
        "pct": 4.5666666666667,
        "pctText": "+4.57%",
        "price": ""
      },
      {
        "rank": 193,
        "code": "000858.SZ",
        "name": "五粮液",
        "amountValue": 1426758200.0,
        "amount": "14.27亿",
        "industry": "食品饮料-白酒-白酒Ⅲ",
        "concept": "融资融券;深股通;参股券商;同花顺漂亮100;白酒概念;超级品牌;国企改革;西部大开发;证金持股;高股息精选;2026中报预增",
        "pct": -0.65560610115065,
        "pctText": "-0.66%",
        "price": ""
      },
      {
        "rank": 198,
        "code": "603626.SH",
        "name": "科森科技",
        "amountValue": 1394413300.0,
        "amount": "13.94亿",
        "industry": "电子-消费电子-消费电子零部件及组装",
        "concept": "苹果概念;智能音箱;富士康概念;无线耳机;元宇宙;虚拟现实;融资融券;华为概念;机器人概念;固态电池;特斯拉概念;柔性屏(折叠屏);智能穿戴;新型烟草(电子烟);消费电子概念;储能;人民币贬值受益;AI PC;海峡两岸;沪股通;医疗器械概念",
        "pct": 5.5900621118012,
        "pctText": "+5.59%",
        "price": ""
      }
    ],
    "stockDailyDate": "2026.11.10",
    "observation": "观察重点：跟踪CPO / 光模块 / 铜缆的板块强弱、成交占比与核心股反馈能否相互确认，并观察全A与个股宽度是否同向。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-11-10T16:36:27+08:00",
    "marketStructure": {
      "version": "market-structure-20261110",
      "tradeDate": "2026.11.10",
      "ladder": {
        "tradeDate": "2026.11.10",
        "activeCount": 5573,
        "eligibleCount": 5572,
        "touched": 115,
        "sealed": 95,
        "failed": 20,
        "limitDown": 0,
        "sealRate": 0.8260869565217391,
        "repeat": {
          "previousTradeDate": "2026.11.09",
          "previousSealed": 58,
          "eligible": 58,
          "sealedAgain": 19,
          "excluded": 0,
          "rate": 0.3275862068965517
        }
      },
      "themes": {
        "previousTradeDate": "2026.11.09",
        "referenceName": "同花顺全A",
        "todayBenchmark": 1.7412,
        "previousBenchmark": 0.1062,
        "rows": [
          {
            "name": "CPO / 光模块 / 铜缆",
            "tag": "主线",
            "board": "通信设备",
            "code": "881129.TI",
            "todayChange": 2.8182,
            "previousChange": 1.7815,
            "todayRelative": 1.077,
            "previousRelative": 1.6753,
            "delta": -0.5983,
            "status": "延续强势"
          },
          {
            "name": "PCB / 元件 / 被动元件",
            "tag": "主线",
            "board": "元件",
            "code": "881270.TI",
            "todayChange": 2.6489,
            "previousChange": 2.5669,
            "todayRelative": 0.9077,
            "previousRelative": 2.4607,
            "delta": -1.553,
            "status": "相对走弱"
          },
          {
            "name": "数字芯片设计",
            "tag": "主线",
            "board": "数字芯片设计",
            "code": "884287.TI",
            "todayChange": 4.1424,
            "previousChange": 0.93556377239176,
            "todayRelative": 2.4012,
            "previousRelative": 0.8294,
            "delta": 1.5718,
            "status": "相对走强"
          },
          {
            "name": "消费电子 / 免税 / 品牌消费",
            "tag": "扩散",
            "board": "消费电子",
            "code": "881124.TI",
            "todayChange": 4.3524,
            "previousChange": 1.2581,
            "todayRelative": 2.6112,
            "previousRelative": 1.1519,
            "delta": 1.4593,
            "status": "相对走强"
          },
          {
            "name": "机器人 / 工业母机 / 低空",
            "tag": "成长",
            "board": "人形机器人",
            "code": "886069.TI",
            "todayChange": 3.3213,
            "previousChange": 1.5988,
            "todayRelative": 1.5801,
            "previousRelative": 1.4926,
            "delta": 0.0875,
            "status": "延续强势"
          },
          {
            "name": "通用设备",
            "tag": "扩散",
            "board": "通用设备",
            "code": "881117.TI",
            "todayChange": 2.6203,
            "previousChange": 1.1577,
            "todayRelative": 0.8791,
            "previousRelative": 1.0515,
            "delta": -0.1724,
            "status": "延续强势"
          }
        ]
      }
    }
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.11.09",
    "closeTime": "15:00",
    "badge": "11月9日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.11.09 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 47,
    "mood": "修复",
    "moodTone": "blue",
    "summary": "收盘温度偏冷，早盘冲高后回落，午后探低，收盘靠近低位，上涨2242家，强势57家，成交1.48万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 42,
        "title": "市场宽度",
        "desc": "2242涨 / 3148跌"
      },
      {
        "score": 31,
        "title": "成交热度",
        "desc": "两市 1.48万亿"
      },
      {
        "score": 49,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 74,
        "title": "赚钱效应",
        "desc": "57涨停 / 2跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3660.79",
        "change": "+0.32%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "11145.49",
        "change": "-0.27%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "2458.56",
        "change": "-0.27%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1256.96",
        "change": "+0.30%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.48万亿",
        "change": "缩量1752亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.31%",
        "change": "5573只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "2242 / 3148",
        "change": "占比 41.6%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "57 / 2",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 32,
      "rawScore": 40.36,
      "temperatureScore": 31.98,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 47,
      "delta": -15,
      "funddb": {
        "score": 27,
        "status": "恐惧",
        "tradeDate": "2026.11.09",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 57.37,
          "mappedScore": 37.21,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 54,
          "participation": 32,
          "limitScore": 97,
          "median": -0.31,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 27.12,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 38,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.11.09",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 15.64,
                "weight": 0.18,
                "status": "ready",
                "value": 34.7552,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 18.7,
                "weight": 0.2,
                "status": "ready",
                "value": 0.5506,
                "detail": "30/5449 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 55.33,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.8015,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 11.89,
                "weight": 0.26,
                "status": "ready",
                "value": -5.9237,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 43.11,
                "weight": 0.2,
                "status": "ready",
                "value": 8.0865,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 53,
          "weight": "20%",
          "desc": "2242 / 3148，57 / 2"
        },
        {
          "name": "指数路径",
          "score": 50,
          "weight": "20%",
          "desc": "四大指数平均 +0.02%"
        },
        {
          "name": "流动性",
          "score": 23,
          "weight": "10%",
          "desc": "1.48万亿 缩量1752亿"
        },
        {
          "name": "恐贪风险",
          "score": 27,
          "weight": "32%",
          "desc": "自算恐贪 27 / 恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 49,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 40.4，再用情绪温度映射与共振修正下修至 32。当前未出现明显单边共振，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "PCB、CPO、光模块等科技线共振，福莱新材、芒果超媒等核心股创阶段新高",
      "焦炭加工涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "仍有单一指数抗跌收红：上证 +0.32%，深证成指 -0.27%，创业板指 -0.27%"
    ],
    "bearFactors": [
      "多数指数收跌：上证 +0.32%，深证成指 -0.27%，创业板指 -0.27%",
      "两市成交额 1.48万亿，缩量1752亿，资金承接不足，前一交易日 2026.11.06",
      "早盘冲高后回落，午后探低，收盘靠近低位，日内承接偏弱",
      "上涨家数仅 2242，占比 41.6%，个股宽度偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约46.3%",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "科创次新股",
        "note": "科创次新股涨幅+1.77%，主线链条内热度继续外溢",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "机器人 / 工业母机 / 低空",
        "note": "三一重工、上纬新材、九阳股份等成交额前排集中，成交占比约8.7%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "有色 / 小金属 / 稀土",
        "note": "洛阳钼业、紫金矿业、中国神华等成交额前排集中，成交占比约3.0%",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业 / 高股息",
        "note": "华电辽能、长江电力、中国平安等成交额前排集中，成交占比约5.0%",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "有色 / 小金属 / 稀土",
        "note": "锂跌幅-3.82%，退潮压力需要跟踪",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.11.09",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中承接能否改善，成交额能否维持在1.48万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-11-10T09:29:56+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.11.06",
    "closeTime": "15:00",
    "badge": "11月6日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.11.06 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 32,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度冰点，盘中波动较大，方向仍有分歧，上涨758家，强势33家，成交1.66万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 14,
        "title": "市场宽度",
        "desc": "758涨 / 4741跌"
      },
      {
        "score": 35,
        "title": "成交热度",
        "desc": "两市 1.66万亿"
      },
      {
        "score": 40,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 44,
        "title": "赚钱效应",
        "desc": "33涨停 / 15跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3649.18",
        "change": "-1.10%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "11175.78",
        "change": "-2.57%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "2465.23",
        "change": "-3.96%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1253.20",
        "change": "-2.60%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.66万亿",
        "change": "缩量4602亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.87%",
        "change": "5573只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "758 / 4741",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "33 / 15",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 11,
      "rawScore": 26.54,
      "temperatureScore": 18.72,
      "resonanceAdjustment": -8.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多因子偏弱共振",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 32,
      "delta": -21,
      "funddb": {
        "score": 27,
        "status": "恐惧",
        "tradeDate": "2026.11.06",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 20.64,
          "mappedScore": 20.94,
          "calibration": -5.0,
          "appliedCalibration": -5.0,
          "calibrationNotes": [
            "weak-median",
            "very-low-up-ratio"
          ],
          "priceStrength": 27,
          "participation": 32,
          "limitScore": 69,
          "median": -1.87,
          "penalties": [
            "指数与宽度共振偏弱",
            "缩量弱宽度"
          ],
          "boosts": [],
          "ifindFactorScore": 27.15,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 16,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.11.06",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 13.61,
                "weight": 0.18,
                "status": "ready",
                "value": 37.3086,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 17.48,
                "weight": 0.2,
                "status": "ready",
                "value": 0.514,
                "detail": "28/5448 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 51.23,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.8849,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 8.2,
                "weight": 0.26,
                "status": "ready",
                "value": -6.6366,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 54.37,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.7619,
                "detail": "Latest disclosed iFinD margin buy amount and same-date all-A turnover."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 24,
          "weight": "20%",
          "desc": "758 / 4741，33 / 15"
        },
        {
          "name": "指数路径",
          "score": 16,
          "weight": "20%",
          "desc": "四大指数平均 -2.56%"
        },
        {
          "name": "流动性",
          "score": 27,
          "weight": "10%",
          "desc": "1.66万亿 缩量4602亿"
        },
        {
          "name": "恐贪风险",
          "score": 27,
          "weight": "32%",
          "desc": "自算恐贪 27 / 恐惧 / 指数与宽度共振偏弱、缩量弱宽度"
        },
        {
          "name": "主线结构",
          "score": 40,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 26.5，再用情绪温度映射与共振修正下修至 11。当前多因子偏弱共振;原口径确认弱度，恐贪代理口径为恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -1.10%，深证成指 -2.57%，创业板指 -3.96%",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "两市成交额 1.66万亿，缩量4602亿，资金承接不足，前一交易日 2026.11.05",
      "盘中波动较大，方向仍有分歧"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "转基因",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.11.06",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-11-06T17:43:06+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.11.05",
    "closeTime": "15:00",
    "badge": "11月5日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.11.05 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 65,
    "mood": "偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中波动较大，方向仍有分歧，上涨4869家，强势86家，成交2.12万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 89,
        "title": "市场宽度",
        "desc": "4869涨 / 625跌"
      },
      {
        "score": 57,
        "title": "成交热度",
        "desc": "两市 2.12万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "86涨停 / 0跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3689.91",
        "change": "+0.10%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "11471.09",
        "change": "+1.19%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "2566.80",
        "change": "+0.87%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1286.67",
        "change": "+1.68%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.12万亿",
        "change": "放量803亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+2.02%",
        "change": "5571只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4869 / 625",
        "change": "占比 88.6%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "86 / 0",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 66,
      "rawScore": 56.12,
      "temperatureScore": 63.6,
      "resonanceAdjustment": 2.8,
      "structuralAdjustment": 0,
      "structuralFloor": 63,
      "resonanceNotes": [
        "多数因子偏强",
        "结构分化抑制极值",
        "原口径确认强度"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 65,
      "delta": 1,
      "funddb": {
        "score": 31,
        "status": "恐惧",
        "tradeDate": "2026.11.05",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 91.02,
          "mappedScore": 52.12,
          "calibration": 7.0,
          "appliedCalibration": 2.45,
          "calibrationNotes": [
            "strong-median",
            "limit-up-spread",
            "high-up-ratio"
          ],
          "priceStrength": 84,
          "participation": 55,
          "limitScore": 100,
          "median": 2.02,
          "penalties": [],
          "boosts": [
            "中位数强",
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 31.21,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 55,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.11.05",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 17.17,
                "weight": 0.18,
                "status": "ready",
                "value": 33.3181,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 11.79,
                "weight": 0.2,
                "status": "ready",
                "value": 0.3855,
                "detail": "21/5447 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 77.87,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.3844,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 16.39,
                "weight": 0.26,
                "status": "ready",
                "value": -5.1007,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 45.2,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.2117,
                "detail": "Latest disclosed iFinD margin buy amount and same-date all-A turnover."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 88,
          "weight": "20%",
          "desc": "4869 / 625，86 / 0"
        },
        {
          "name": "指数路径",
          "score": 72,
          "weight": "20%",
          "desc": "四大指数平均 +0.96%"
        },
        {
          "name": "流动性",
          "score": 61,
          "weight": "10%",
          "desc": "2.12万亿 放量803亿"
        },
        {
          "name": "恐贪风险",
          "score": 31,
          "weight": "32%",
          "desc": "自算恐贪 31 / 恐惧 / 中位数强、涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 56.1，再用情绪温度映射与共振修正上修至 66。当前多数因子偏强;结构分化抑制极值;原口径确认强度，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4869，占比 88.6%，市场宽度偏强",
      "小红书概念等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 2.12万亿，较前一日继续放量，前一交易日 2026.11.04"
    ],
    "bearFactors": [
      "PCB走弱，高位硬科技杀估值明显",
      "盘中波动较大，方向仍有分歧",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "消费电子 / 免税 / 稀土",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.11.05",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-11-05T17:47:29+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.11.04",
    "closeTime": "15:00",
    "badge": "11月4日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.11.04 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 71,
    "mood": "偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨4667家，强势121家，成交2.04万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 86,
        "title": "市场宽度",
        "desc": "4667涨 / 779跌"
      },
      {
        "score": 57,
        "title": "成交热度",
        "desc": "两市 2.04万亿"
      },
      {
        "score": 71,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "121涨停 / 10跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3686.17",
        "change": "+2.16%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "11335.69",
        "change": "+4.22%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "2544.73",
        "change": "+6.40%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1265.47",
        "change": "+9.92%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.04万亿",
        "change": "放量3343亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.88%",
        "change": "5572只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4667 / 779",
        "change": "占比 85.7%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "121 / 10",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 76,
      "rawScore": 61.76,
      "temperatureScore": 70.38,
      "resonanceAdjustment": 5.73,
      "structuralAdjustment": 0,
      "structuralFloor": 65,
      "resonanceNotes": [
        "多因子偏强共振",
        "结构分化抑制极值",
        "原口径确认强度"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 71,
      "delta": 5,
      "funddb": {
        "score": 24,
        "status": "极度恐惧",
        "tradeDate": "2026.11.04",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 92.45,
          "mappedScore": 52.76,
          "calibration": 8.0,
          "appliedCalibration": 2.8,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio",
            "index-confirmed-strength"
          ],
          "priceStrength": 83,
          "participation": 64,
          "limitScore": 92,
          "median": 1.88,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 23.87,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 56,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.11.04",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 14.97,
                "weight": 0.18,
                "status": "ready",
                "value": 34.893,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 3.25,
                "weight": 0.2,
                "status": "ready",
                "value": 0.2386,
                "detail": "13/5448 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 57.79,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.7348,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 8.61,
                "weight": 0.26,
                "status": "ready",
                "value": -6.4145,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 45.2,
                "weight": 0.2,
                "status": "ready",
                "value": 8.2117,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 86,
          "weight": "20%",
          "desc": "4667 / 779，121 / 10"
        },
        {
          "name": "指数路径",
          "score": 90,
          "weight": "20%",
          "desc": "四大指数平均 +5.67%"
        },
        {
          "name": "流动性",
          "score": 61,
          "weight": "10%",
          "desc": "2.04万亿 放量3343亿"
        },
        {
          "name": "恐贪风险",
          "score": 24,
          "weight": "32%",
          "desc": "自算恐贪 24 / 极度恐惧 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 71,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 61.8，再用情绪温度映射与共振修正上修至 76。当前多因子偏强共振;结构分化抑制极值;原口径确认强度，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4667，占比 85.7%，市场宽度偏强",
      "贵金属涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "PCB、CPO、光模块等科技线共振，核心股维持强势",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "科创次新股",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.11.04",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在2.04万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-11-05T17:40:34+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.11.03",
    "closeTime": "15:00",
    "badge": "11月3日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.11.03 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 46,
    "mood": "修复",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨2108家，强势52家，成交1.70万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 39,
        "title": "市场宽度",
        "desc": "2108涨 / 3309跌"
      },
      {
        "score": 40,
        "title": "成交热度",
        "desc": "两市 1.70万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 63,
        "title": "赚钱效应",
        "desc": "52涨停 / 17跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3608.10",
        "change": "-0.82%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "10876.99",
        "change": "-1.21%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "2391.65",
        "change": "-2.73%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1151.28",
        "change": "-3.81%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.70万亿",
        "change": "缩量803亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.66%",
        "change": "5570只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "2108 / 3309",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "52 / 17",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 20,
      "rawScore": 31.22,
      "temperatureScore": 22.75,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 46,
      "delta": -26,
      "funddb": {
        "score": 21,
        "status": "极度恐惧",
        "tradeDate": "2026.11.03",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 45.34,
          "mappedScore": 31.89,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 48,
          "participation": 37,
          "limitScore": 75,
          "median": -0.66,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 20.91,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 33,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.11.03",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 12.45,
                "weight": 0.18,
                "status": "ready",
                "value": 38.9797,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 9.35,
                "weight": 0.2,
                "status": "ready",
                "value": 0.3489,
                "detail": "19/5445 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 56.97,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.7502,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 4.92,
                "weight": 0.26,
                "status": "ready",
                "value": -8.1612,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 32.04,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 7.4227,
                "detail": "Latest disclosed iFinD margin buy amount and same-date all-A turnover."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 47,
          "weight": "20%",
          "desc": "2108 / 3309，52 / 17"
        },
        {
          "name": "指数路径",
          "score": 19,
          "weight": "20%",
          "desc": "四大指数平均 -2.14%"
        },
        {
          "name": "流动性",
          "score": 32,
          "weight": "10%",
          "desc": "1.70万亿 缩量803亿"
        },
        {
          "name": "恐贪风险",
          "score": 21,
          "weight": "32%",
          "desc": "自算恐贪 21 / 极度恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 31.2，再用情绪温度映射与共振修正下修至 20。当前多数因子偏弱，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.82%，深证成指 -1.21%，创业板指 -2.73%，科创50 -3.81%",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "两市成交额 1.70万亿，缩量803亿，资金承接不足，前一交易日 2026.11.02"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约45.0%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "消费电子 / 免税 / 品牌消费",
        "note": "超级品牌涨幅+1.74%，成长方向短线承接增强",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "肉鸡养殖",
        "note": "肉鸡养殖涨幅+3.34%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "医疗美容",
        "note": "医疗美容涨幅+2.69%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "中船系",
        "note": "中船系涨幅+3.44%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、CPO、PCB",
        "note": "半导体、CPO、PCB走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.11.03",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-11-03T18:00:48+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.11.02",
    "closeTime": "15:00",
    "badge": "11月2日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.11.02 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 69,
    "mood": "偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨4681家，强势131家，成交1.78万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 85,
        "title": "市场宽度",
        "desc": "4681涨 / 818跌"
      },
      {
        "score": 51,
        "title": "成交热度",
        "desc": "两市 1.78万亿"
      },
      {
        "score": 70,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "131涨停 / 10跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3638.03",
        "change": "+1.08%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "11010.68",
        "change": "+1.63%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "2458.70",
        "change": "+1.87%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1196.94",
        "change": "+3.11%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.78万亿",
        "change": "放量1092亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+2.02%",
        "change": "5571只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4681 / 818",
        "change": "占比 85.1%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "131 / 10",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 68,
      "rawScore": 57.3,
      "temperatureScore": 65.17,
      "resonanceAdjustment": 2.8,
      "structuralAdjustment": 0,
      "structuralFloor": 65,
      "resonanceNotes": [
        "多数因子偏强",
        "结构分化抑制极值",
        "原口径确认强度"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 69,
      "delta": -1,
      "funddb": {
        "score": 20,
        "status": "极度恐惧",
        "tradeDate": "2026.11.02",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 93.88,
          "mappedScore": 53.39,
          "calibration": 11.0,
          "appliedCalibration": 3.85,
          "calibrationNotes": [
            "strong-median",
            "limit-up-spread",
            "high-up-ratio",
            "index-confirmed-strength"
          ],
          "priceStrength": 83,
          "participation": 60,
          "limitScore": 93,
          "median": 2.02,
          "penalties": [],
          "boosts": [
            "中位数强",
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 20.49,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 57,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.11.02",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 13.17,
                "weight": 0.18,
                "status": "ready",
                "value": 36.9737,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 14.63,
                "weight": 0.2,
                "status": "ready",
                "value": 0.4958,
                "detail": "27/5446 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 44.26,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.0485,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 6.56,
                "weight": 0.26,
                "status": "ready",
                "value": -7.8812,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 32.04,
                "weight": 0.2,
                "status": "ready",
                "value": 7.4227,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 85,
          "weight": "20%",
          "desc": "4681 / 818，131 / 10"
        },
        {
          "name": "指数路径",
          "score": 79,
          "weight": "20%",
          "desc": "四大指数平均 +1.92%"
        },
        {
          "name": "流动性",
          "score": 55,
          "weight": "10%",
          "desc": "1.78万亿 放量1092亿"
        },
        {
          "name": "恐贪风险",
          "score": 20,
          "weight": "32%",
          "desc": "自算恐贪 20 / 极度恐惧 / 中位数强、涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 70,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 57.3，再用情绪温度映射与共振修正上修至 68。当前多数因子偏强;结构分化抑制极值;原口径确认强度，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4681，占比 85.1%，市场宽度偏强",
      "PCB、CPO、光模块午后共振，招商银行、长江电力、工商银行等核心股创阶段新高",
      "Web3.0等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "AI视频",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.11.02",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在1.78万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-11-03T10:30:08+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.30",
    "closeTime": "15:00",
    "badge": "10月30日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.30 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 31,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨893家，强势49家，成交1.67万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 16,
        "title": "市场宽度",
        "desc": "893涨 / 4602跌"
      },
      {
        "score": 48,
        "title": "成交热度",
        "desc": "两市 1.67万亿"
      },
      {
        "score": 41,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 24,
        "title": "赚钱效应",
        "desc": "49涨停 / 86跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3599.02",
        "change": "-1.44%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "10833.78",
        "change": "-2.73%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "2413.63",
        "change": "-4.13%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1160.84",
        "change": "-5.48%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.67万亿",
        "change": "放量1179亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-3.13%",
        "change": "5571只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "893 / 4602",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "49 / 86",
        "change": "亏钱效应扩散",
        "tone": "green"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 9,
      "rawScore": 23.42,
      "temperatureScore": 16.21,
      "resonanceAdjustment": -7.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱",
        "核心弱因子极端偏低",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 31,
      "delta": -22,
      "funddb": {
        "score": 17,
        "status": "极度恐惧",
        "tradeDate": "2026.10.30",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 5.92,
          "mappedScore": 14.42,
          "calibration": -7.0,
          "appliedCalibration": -7.0,
          "calibrationNotes": [
            "deep-median-drawdown",
            "limit-down-dominance"
          ],
          "priceStrength": 18,
          "participation": 48,
          "limitScore": 36,
          "median": -3.13,
          "penalties": [
            "中位数深跌",
            "跌停多于涨停",
            "指数与宽度共振偏弱"
          ],
          "boosts": [],
          "ifindFactorScore": 16.77,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 7,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.30",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 14.08,
                "weight": 0.18,
                "status": "ready",
                "value": 37.5561,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 14.63,
                "weight": 0.2,
                "status": "ready",
                "value": 0.4959,
                "detail": "27/5445 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 26.64,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.4428,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 0.82,
                "weight": 0.26,
                "status": "ready",
                "value": -10.7769,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 34.16,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 7.5494,
                "detail": "Latest disclosed iFinD margin buy amount and same-date all-A turnover."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 19,
          "weight": "20%",
          "desc": "893 / 4602，49 / 86"
        },
        {
          "name": "指数路径",
          "score": 8,
          "weight": "20%",
          "desc": "四大指数平均 -3.45%"
        },
        {
          "name": "流动性",
          "score": 52,
          "weight": "10%",
          "desc": "1.67万亿 放量1179亿"
        },
        {
          "name": "恐贪风险",
          "score": 17,
          "weight": "32%",
          "desc": "自算恐贪 17 / 极度恐惧 / 中位数深跌、跌停多于涨停、指数与宽度共振偏弱"
        },
        {
          "name": "主线结构",
          "score": 41,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 23.4，再用情绪温度映射与共振修正下修至 9。当前多数因子偏弱;核心弱因子极端偏低;原口径确认弱度，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 1.67万亿，较前一日继续放量，前一交易日 2026.10.29"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -1.44%，深证成指 -2.73%，创业板指 -4.13%，科创50 -5.48%",
      "指数下跌但成交额放量1179亿，放量分歧明显升温",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO走弱，高位硬科技杀估值明显"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "消费电子 / 免税 / 稀土",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.10.30",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-30T17:51:30+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.29",
    "closeTime": "15:00",
    "badge": "10月29日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.29 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 28,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨781家，强势39家，成交1.56万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 14,
        "title": "市场宽度",
        "desc": "781涨 / 4728跌"
      },
      {
        "score": 36,
        "title": "成交热度",
        "desc": "两市 1.56万亿"
      },
      {
        "score": 41,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 24,
        "title": "赚钱效应",
        "desc": "39涨停 / 42跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3651.43",
        "change": "-0.82%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "11138.20",
        "change": "-2.92%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "2517.59",
        "change": "-4.45%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1228.09",
        "change": "-4.27%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.56万亿",
        "change": "缩量720亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-2.60%",
        "change": "5570只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "781 / 4728",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "39 / 42",
        "change": "亏钱效应扩散",
        "tone": "green"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 2,
      "rawScore": 21.74,
      "temperatureScore": 14.9,
      "resonanceAdjustment": -13.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多因子偏弱共振",
        "核心弱因子极端偏低",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 28,
      "delta": -26,
      "funddb": {
        "score": 18,
        "status": "极度恐惧",
        "tradeDate": "2026.10.29",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 2.42,
          "mappedScore": 12.87,
          "calibration": -9.0,
          "appliedCalibration": -9.0,
          "calibrationNotes": [
            "deep-median-drawdown",
            "limit-down-dominance",
            "very-low-up-ratio"
          ],
          "priceStrength": 19,
          "participation": 33,
          "limitScore": 48,
          "median": -2.6,
          "penalties": [
            "中位数深跌",
            "跌停多于涨停",
            "指数与宽度共振偏弱",
            "缩量弱宽度"
          ],
          "boosts": [],
          "ifindFactorScore": 17.59,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 4,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.29",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 14.32,
                "weight": 0.18,
                "status": "ready",
                "value": 34.3716,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 18.29,
                "weight": 0.2,
                "status": "ready",
                "value": 0.5696,
                "detail": "31/5442 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 23.77,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.52,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 0.41,
                "weight": 0.26,
                "status": "ready",
                "value": -11.0438,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 37.2,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 7.7318,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 18,
          "weight": "20%",
          "desc": "781 / 4728，39 / 42"
        },
        {
          "name": "指数路径",
          "score": 11,
          "weight": "20%",
          "desc": "四大指数平均 -3.11%"
        },
        {
          "name": "流动性",
          "score": 28,
          "weight": "10%",
          "desc": "1.56万亿 缩量720亿"
        },
        {
          "name": "恐贪风险",
          "score": 18,
          "weight": "32%",
          "desc": "自算恐贪 18 / 极度恐惧 / 中位数深跌、跌停多于涨停、指数与宽度共振偏弱、缩量弱宽度"
        },
        {
          "name": "主线结构",
          "score": 41,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 21.7，再用情绪温度映射与共振修正下修至 2。当前多因子偏弱共振;核心弱因子极端偏低;原口径确认弱度，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.82%，深证成指 -2.92%，创业板指 -4.45%，科创50 -4.27%",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "两市成交额 1.56万亿，缩量720亿，资金承接不足，前一交易日 2026.10.28"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "证金持股",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.10.29",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-29T16:41:15+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.28",
    "closeTime": "15:00",
    "badge": "10月28日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.28 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 67,
    "mood": "偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨4156家，强势73家，成交1.63万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 77,
        "title": "市场宽度",
        "desc": "4156涨 / 1239跌"
      },
      {
        "score": 47,
        "title": "成交热度",
        "desc": "两市 1.63万亿"
      },
      {
        "score": 73,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 82,
        "title": "赚钱效应",
        "desc": "73涨停 / 6跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3681.47",
        "change": "+0.91%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "11473.18",
        "change": "+2.02%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "2634.76",
        "change": "+3.40%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1282.93",
        "change": "+2.45%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.63万亿",
        "change": "放量1675亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.34%",
        "change": "5570只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4156 / 1239",
        "change": "占比 77.0%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "73 / 6",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 66,
      "rawScore": 55.88,
      "temperatureScore": 63.26,
      "resonanceAdjustment": 2.8,
      "structuralAdjustment": 0,
      "structuralFloor": 60,
      "resonanceNotes": [
        "多数因子偏强",
        "结构分化抑制极值",
        "原口径确认强度"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 67,
      "delta": -1,
      "funddb": {
        "score": 17,
        "status": "极度恐惧",
        "tradeDate": "2026.10.28",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 86.99,
          "mappedScore": 50.33,
          "calibration": 8.0,
          "appliedCalibration": 2.8,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio",
            "index-confirmed-strength"
          ],
          "priceStrength": 77,
          "participation": 59,
          "limitScore": 92,
          "median": 1.34,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 16.85,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 53,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.28",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 15.48,
                "weight": 0.18,
                "status": "ready",
                "value": 31.9256,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 9.76,
                "weight": 0.2,
                "status": "ready",
                "value": 0.3491,
                "detail": "19/5443 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 27.87,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.3877,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 0.82,
                "weight": 0.26,
                "status": "ready",
                "value": -10.6566,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 37.2,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 7.7318,
                "detail": "Latest disclosed iFinD margin buy amount and same-date all-A turnover."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 79,
          "weight": "20%",
          "desc": "4156 / 1239，73 / 6"
        },
        {
          "name": "指数路径",
          "score": 82,
          "weight": "20%",
          "desc": "四大指数平均 +2.19%"
        },
        {
          "name": "流动性",
          "score": 51,
          "weight": "10%",
          "desc": "1.63万亿 放量1675亿"
        },
        {
          "name": "恐贪风险",
          "score": 17,
          "weight": "32%",
          "desc": "自算恐贪 17 / 极度恐惧 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 73,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 55.9，再用情绪温度映射与共振修正上修至 66。当前多数因子偏强;结构分化抑制极值;原口径确认强度，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4156，占比 77.0%，市场宽度偏强",
      "PCB、CPO、光模块等科技线共振，核心股维持强势",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "两市成交额 1.63万亿，较前一日继续放量，前一交易日 2026.10.27"
    ],
    "bearFactors": [
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "机器人 / 商业航天",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.10.28",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在1.63万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-29T16:33:25+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.27",
    "closeTime": "15:00",
    "badge": "10月27日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.27 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 30,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨606家，强势42家，成交1.46万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 11,
        "title": "市场宽度",
        "desc": "606涨 / 4922跌"
      },
      {
        "score": 31,
        "title": "成交热度",
        "desc": "两市 1.46万亿"
      },
      {
        "score": 42,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 42,
        "title": "赚钱效应",
        "desc": "42涨停 / 23跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3648.30",
        "change": "-1.33%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "11245.73",
        "change": "-2.50%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "2548.15",
        "change": "-3.41%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1252.28",
        "change": "-4.81%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.46万亿",
        "change": "缩量1478亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-2.98%",
        "change": "5570只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "606 / 4922",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "42 / 23",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 2,
      "rawScore": 21.78,
      "temperatureScore": 14.93,
      "resonanceAdjustment": -14.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多因子偏弱共振",
        "核心弱因子极端偏低",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 30,
      "delta": -28,
      "funddb": {
        "score": 16,
        "status": "极度恐惧",
        "tradeDate": "2026.10.27",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 10.62,
          "mappedScore": 16.51,
          "calibration": -7.0,
          "appliedCalibration": -7.0,
          "calibrationNotes": [
            "deep-median-drawdown",
            "very-low-up-ratio"
          ],
          "priceStrength": 22,
          "participation": 30,
          "limitScore": 65,
          "median": -2.98,
          "penalties": [
            "中位数深跌",
            "指数与宽度共振偏弱",
            "缩量弱宽度"
          ],
          "boosts": [],
          "ifindFactorScore": 16.22,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 10,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.27",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 14.57,
                "weight": 0.18,
                "status": "ready",
                "value": 35.0976,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 8.54,
                "weight": 0.2,
                "status": "ready",
                "value": 0.3307,
                "detail": "18/5443 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 26.23,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.4409,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 0,
                "weight": 0.26,
                "status": "ready",
                "value": -11.3112,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 38.48,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 7.8088,
                "detail": "Latest disclosed iFinD margin buy amount and same-date all-A turnover."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 22,
          "weight": "20%",
          "desc": "606 / 4922，42 / 23"
        },
        {
          "name": "指数路径",
          "score": 12,
          "weight": "20%",
          "desc": "四大指数平均 -3.01%"
        },
        {
          "name": "流动性",
          "score": 23,
          "weight": "10%",
          "desc": "1.46万亿 缩量1478亿"
        },
        {
          "name": "恐贪风险",
          "score": 16,
          "weight": "32%",
          "desc": "自算恐贪 16 / 极度恐惧 / 中位数深跌、指数与宽度共振偏弱、缩量弱宽度"
        },
        {
          "name": "主线结构",
          "score": 42,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 21.8，再用情绪温度映射与共振修正下修至 2。当前多因子偏弱共振;核心弱因子极端偏低;原口径确认弱度，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -1.33%，深证成指 -2.50%，创业板指 -3.41%，科创50 -4.81%",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、PCB走弱，高位硬科技杀估值明显",
      "两市成交额 1.46万亿，缩量1478亿，资金承接不足，前一交易日 2026.10.26"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "消费电子 / 免税 / 稀土",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.10.27",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-27T17:30:04+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.26",
    "closeTime": "15:00",
    "badge": "10月26日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.26 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 45,
    "mood": "修复",
    "moodTone": "blue",
    "summary": "收盘温度冰点，盘中路径待确认，上涨2252家，强势59家，成交1.61万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 42,
        "title": "市场宽度",
        "desc": "2252涨 / 3157跌"
      },
      {
        "score": 34,
        "title": "成交热度",
        "desc": "两市 1.61万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 61,
        "title": "赚钱效应",
        "desc": "59涨停 / 27跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3697.52",
        "change": "+0.19%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "11534.38",
        "change": "-1.19%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "2638.23",
        "change": "-1.71%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1315.50",
        "change": "-2.23%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.61万亿",
        "change": "缩量3475亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.47%",
        "change": "5570只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "2252 / 3157",
        "change": "占比 41.6%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "59 / 27",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 22,
      "rawScore": 32.94,
      "temperatureScore": 24.33,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 45,
      "delta": -23,
      "funddb": {
        "score": 17,
        "status": "极度恐惧",
        "tradeDate": "2026.10.26",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 48.68,
          "mappedScore": 33.36,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 49,
          "participation": 33,
          "limitScore": 69,
          "median": -0.47,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 16.69,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 34,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.26",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 15.07,
                "weight": 0.18,
                "status": "ready",
                "value": 32.3699,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 6.5,
                "weight": 0.2,
                "status": "ready",
                "value": 0.294,
                "detail": "16/5443 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 28.69,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.3292,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 0.41,
                "weight": 0.26,
                "status": "ready",
                "value": -9.4864,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 39.9,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 7.8943,
                "detail": "Latest disclosed iFinD margin buy amount and same-date all-A turnover."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 49,
          "weight": "20%",
          "desc": "2252 / 3157，59 / 27"
        },
        {
          "name": "指数路径",
          "score": 35,
          "weight": "20%",
          "desc": "四大指数平均 -1.23%"
        },
        {
          "name": "流动性",
          "score": 26,
          "weight": "10%",
          "desc": "1.61万亿 缩量3475亿"
        },
        {
          "name": "恐贪风险",
          "score": 17,
          "weight": "32%",
          "desc": "自算恐贪 17 / 极度恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 32.9，再用情绪温度映射与共振修正下修至 22。当前多数因子偏弱，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "仍有单一指数抗跌收红：上证 +0.19%，深证成指 -1.19%，创业板指 -1.71%"
    ],
    "bearFactors": [
      "多数指数收跌：上证 +0.19%，深证成指 -1.19%，创业板指 -1.71%",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "两市成交额 1.61万亿，缩量3475亿，资金承接不足，前一交易日 2026.10.23",
      "上涨家数仅 2252，占比 41.6%，个股宽度偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约48.4%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "消费电子 / 免税 / 品牌消费",
        "note": "乳业涨幅+2.13%，成长方向短线承接增强",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "有色 / 小金属 / 稀土",
        "note": "洛阳钼业、紫金矿业、北方稀土等成交额前排集中，成交占比约4.1%",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "毛发医疗",
        "note": "毛发医疗涨幅+1.50%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "游戏",
        "note": "游戏涨幅+3.29%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、CPO、PCB",
        "note": "半导体、CPO、PCB走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.10.26",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-26T17:17:57+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.23",
    "closeTime": "15:00",
    "badge": "10月23日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.23 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 63,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度中性偏热，盘中下探后修复，收盘靠近日内高位，上涨4526家，强势84家，成交1.96万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 83,
        "title": "市场宽度",
        "desc": "4526涨 / 909跌"
      },
      {
        "score": 55,
        "title": "成交热度",
        "desc": "两市 1.96万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 84,
        "title": "赚钱效应",
        "desc": "84涨停 / 7跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3690.48",
        "change": "+0.89%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "11673.83",
        "change": "+2.79%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "2684.10",
        "change": "+4.16%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1345.51",
        "change": "+3.04%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.96万亿",
        "change": "放量4276亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.56%",
        "change": "5572只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4526 / 909",
        "change": "占比 83.3%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "84 / 7",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 61,
      "rawScore": 53.24,
      "temperatureScore": 59.17,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 2,
      "structuralFloor": 61,
      "resonanceNotes": [
        "结构分化抑制极值",
        "结构修复抑制慢因子过度降温"
      ],
      "mood": "中性偏热",
      "moodTone": "red",
      "originalScore": 63,
      "delta": -2,
      "funddb": {
        "score": 17,
        "status": "极度恐惧",
        "tradeDate": "2026.10.23",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 86.73,
          "mappedScore": 50.22,
          "calibration": 8.0,
          "appliedCalibration": 2.8,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio",
            "index-confirmed-strength"
          ],
          "priceStrength": 81,
          "participation": 54,
          "limitScore": 92,
          "median": 1.56,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 17.38,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 53,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.23",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 16.92,
                "weight": 0.18,
                "status": "ready",
                "value": 30.4381,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 2.03,
                "weight": 0.2,
                "status": "ready",
                "value": 0.2204,
                "detail": "12/5444 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 33.2,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.2259,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 2.46,
                "weight": 0.26,
                "status": "ready",
                "value": -8.4822,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 39.9,
                "weight": 0.2,
                "status": "ready",
                "value": 7.8943,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 83,
          "weight": "20%",
          "desc": "4526 / 909，84 / 7"
        },
        {
          "name": "指数路径",
          "score": 86,
          "weight": "20%",
          "desc": "四大指数平均 +2.72%"
        },
        {
          "name": "流动性",
          "score": 59,
          "weight": "10%",
          "desc": "1.96万亿 放量4276亿"
        },
        {
          "name": "恐贪风险",
          "score": 17,
          "weight": "32%",
          "desc": "自算恐贪 17 / 极度恐惧 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 53.2，再用情绪温度映射、共振修正与结构修复保护上修至 61。当前结构分化抑制极值;结构修复抑制慢因子过度降温，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4526，占比 83.3%，市场宽度偏强",
      "MLOps概念等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 1.96万亿，较前一日继续放量，前一交易日 2026.10.22"
    ],
    "bearFactors": [
      "PCB走弱，高位硬科技杀估值明显",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "机器人 / 商业航天",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.10.23",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-26T14:41:09+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.22",
    "closeTime": "15:00",
    "badge": "10月22日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.22 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 29,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨535家，强势33家，成交1.53万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 10,
        "title": "市场宽度",
        "desc": "535涨 / 4999跌"
      },
      {
        "score": 42,
        "title": "成交热度",
        "desc": "两市 1.53万亿"
      },
      {
        "score": 43,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 24,
        "title": "赚钱效应",
        "desc": "33涨停 / 55跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3658.03",
        "change": "-1.48%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "11357.32",
        "change": "-2.96%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "2576.90",
        "change": "-4.37%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1305.87",
        "change": "-2.78%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.53万亿",
        "change": "放量994亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-2.53%",
        "change": "5570只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "535 / 4999",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "33 / 55",
        "change": "亏钱效应扩散",
        "tone": "green"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 8,
      "rawScore": 22.74,
      "temperatureScore": 15.67,
      "resonanceAdjustment": -7.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱",
        "核心弱因子极端偏低",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 29,
      "delta": -21,
      "funddb": {
        "score": 15,
        "status": "极度恐惧",
        "tradeDate": "2026.10.22",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 5.89,
          "mappedScore": 14.41,
          "calibration": -9.0,
          "appliedCalibration": -9.0,
          "calibrationNotes": [
            "deep-median-drawdown",
            "limit-down-dominance",
            "very-low-up-ratio"
          ],
          "priceStrength": 17,
          "participation": 45,
          "limitScore": 38,
          "median": -2.53,
          "penalties": [
            "中位数深跌",
            "跌停多于涨停",
            "指数与宽度共振偏弱"
          ],
          "boosts": [],
          "ifindFactorScore": 14.78,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 5,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.22",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 14.89,
                "weight": 0.18,
                "status": "ready",
                "value": 32.0602,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 0.81,
                "weight": 0.2,
                "status": "ready",
                "value": 0.147,
                "detail": "8/5443 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 19.67,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.6425,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 0,
                "weight": 0.26,
                "status": "ready",
                "value": -10.4431,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 43.95,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.1371,
                "detail": "Latest disclosed iFinD margin buy amount and same-date all-A turnover."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 15,
          "weight": "20%",
          "desc": "535 / 4999，33 / 55"
        },
        {
          "name": "指数路径",
          "score": 13,
          "weight": "20%",
          "desc": "四大指数平均 -2.90%"
        },
        {
          "name": "流动性",
          "score": 46,
          "weight": "10%",
          "desc": "1.53万亿 放量994亿"
        },
        {
          "name": "恐贪风险",
          "score": 15,
          "weight": "32%",
          "desc": "自算恐贪 15 / 极度恐惧 / 中位数深跌、跌停多于涨停、指数与宽度共振偏弱"
        },
        {
          "name": "主线结构",
          "score": 43,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 22.7，再用情绪温度映射与共振修正下修至 8。当前多数因子偏弱;核心弱因子极端偏低;原口径确认弱度，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 1.53万亿，较前一日继续放量，前一交易日 2026.10.21"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -1.48%，深证成指 -2.96%，创业板指 -4.37%",
      "指数下跌但成交额放量994亿，放量分歧明显升温",
      "CPO、PCB走弱，高位硬科技杀估值明显",
      "早盘冲高后回落，午后探低，收盘靠近低位，日内承接偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "机器人 / 商业航天",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.10.22",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-22T16:53:26+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.21",
    "closeTime": "15:00",
    "badge": "10月21日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.21 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 44,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨1981家，强势50家，成交1.43万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 37,
        "title": "市场宽度",
        "desc": "1981涨 / 3364跌"
      },
      {
        "score": 33,
        "title": "成交热度",
        "desc": "两市 1.43万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 64,
        "title": "赚钱效应",
        "desc": "50涨停 / 5跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3713.03",
        "change": "-0.60%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "11704.35",
        "change": "-0.82%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "2694.71",
        "change": "-1.62%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1343.28",
        "change": "+0.06%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.43万亿",
        "change": "缩量268亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.45%",
        "change": "5568只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1981 / 3364",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "50 / 5",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 22,
      "rawScore": 33.36,
      "temperatureScore": 24.72,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 44,
      "delta": -22,
      "funddb": {
        "score": 18,
        "status": "极度恐惧",
        "tradeDate": "2026.10.21",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 51.04,
          "mappedScore": 34.41,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 48,
          "participation": 32,
          "limitScore": 91,
          "median": -0.45,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 18.03,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 35,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.21",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 19.85,
                "weight": 0.18,
                "status": "ready",
                "value": 29.3175,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 6.5,
                "weight": 0.2,
                "status": "ready",
                "value": 0.3124,
                "detail": "17/5442 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 22.13,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.5645,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 2.05,
                "weight": 0.26,
                "status": "ready",
                "value": -8.18,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 45.41,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.2244,
                "detail": "Latest disclosed iFinD margin buy amount and same-date all-A turnover."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 46,
          "weight": "20%",
          "desc": "1981 / 3364，50 / 5"
        },
        {
          "name": "指数路径",
          "score": 39,
          "weight": "20%",
          "desc": "四大指数平均 -0.74%"
        },
        {
          "name": "流动性",
          "score": 25,
          "weight": "10%",
          "desc": "1.43万亿 缩量268亿"
        },
        {
          "name": "恐贪风险",
          "score": 18,
          "weight": "32%",
          "desc": "自算恐贪 18 / 极度恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 33.4，再用情绪温度映射与共振修正下修至 22。当前多数因子偏弱，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "小红书概念等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.60%，深证成指 -0.82%，创业板指 -1.62%",
      "科创次新股走弱，高位硬科技杀估值明显",
      "两市成交额 1.43万亿，缩量268亿，资金承接不足，前一交易日 2026.10.20",
      "早盘冲高后回落，午后探低，收盘靠近低位，日内承接偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约53.2%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "小红书概念",
        "note": "小红书概念涨幅+2.07%，成长方向短线承接增强",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "生猪养殖",
        "note": "生猪养殖涨幅+3.24%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业 / 高股息",
        "note": "长江电力、中国平安、中国银行等成交额前排集中，成交占比约4.5%",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "DRG/DIP",
        "note": "DRG/DIP涨幅+3.14%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "科创次新股",
        "note": "科创次新股走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.10.21",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-21T17:29:41+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.20",
    "closeTime": "15:00",
    "badge": "10月20日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.20 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 60,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度中性偏热，盘中下探后修复，收盘靠近日内高位，上涨3778家，强势56家，成交1.46万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 69,
        "title": "市场宽度",
        "desc": "3778涨 / 1668跌"
      },
      {
        "score": 40,
        "title": "成交热度",
        "desc": "两市 1.46万亿"
      },
      {
        "score": 61,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 77,
        "title": "赚钱效应",
        "desc": "56涨停 / 7跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3735.37",
        "change": "+0.12%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "11801.29",
        "change": "-0.14%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "2739.20",
        "change": "-0.26%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1342.42",
        "change": "+1.00%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.46万亿",
        "change": "放量186亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.97%",
        "change": "5568只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3778 / 1668",
        "change": "占比 69.4%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "56 / 7",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 56,
      "rawScore": 45.74,
      "temperatureScore": 39.14,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 17,
      "structuralFloor": 56,
      "resonanceNotes": [
        "结构修复抑制慢因子过度降温"
      ],
      "mood": "中性偏热",
      "moodTone": "red",
      "originalScore": 60,
      "delta": -4,
      "funddb": {
        "score": 18,
        "status": "极度恐惧",
        "tradeDate": "2026.10.20",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 67.89,
          "mappedScore": 41.88,
          "calibration": 4.0,
          "appliedCalibration": 1.4,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio"
          ],
          "priceStrength": 70,
          "participation": 50,
          "limitScore": 89,
          "median": 0.97,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 17.52,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 43,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.20",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 20.64,
                "weight": 0.18,
                "status": "ready",
                "value": 29.021,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 6.5,
                "weight": 0.2,
                "status": "ready",
                "value": 0.3307,
                "detail": "18/5443 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 18.03,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.6692,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 2.87,
                "weight": 0.26,
                "status": "ready",
                "value": -7.7903,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 44.35,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.1612,
                "detail": "Latest disclosed iFinD margin buy amount and same-date all-A turnover."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 72,
          "weight": "20%",
          "desc": "3778 / 1668，56 / 7"
        },
        {
          "name": "指数路径",
          "score": 51,
          "weight": "20%",
          "desc": "四大指数平均 +0.18%"
        },
        {
          "name": "流动性",
          "score": 44,
          "weight": "10%",
          "desc": "1.46万亿 放量186亿"
        },
        {
          "name": "恐贪风险",
          "score": 18,
          "weight": "32%",
          "desc": "自算恐贪 18 / 极度恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 61,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 45.7，再用情绪温度映射、共振修正与结构修复保护上修至 56。当前结构修复抑制慢因子过度降温，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3778，占比 69.4%，市场宽度偏强",
      "PCB、CPO、光模块等科技线共振，九阳股份、工商银行、中国银行等核心股创阶段新高",
      "MLOps概念等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "多数指数收跌：上证 +0.12%，深证成指 -0.14%，创业板指 -0.26%",
      "指数下跌但成交额放量186亿，放量分歧明显升温",
      "盘中振幅偏大，修复并非单边走强",
      "强势股 56 家，短线强度偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约49.0%",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "中芯国际、兆易创新、海光信息等成交额前排集中，成交占比约18.0%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "AI PC",
        "note": "AI PC涨幅+3.65%，成长方向短线承接增强",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "有色 / 小金属 / 稀土",
        "note": "洛阳钼业、紫金矿业、中国神华等成交额前排集中，成交占比约3.8%",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "其他医疗服务",
        "note": "其他医疗服务涨幅+6.53%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "航海装备",
        "note": "航海装备跌幅-2.90%，退潮压力需要跟踪",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.10.20",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在1.46万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-20T17:09:42+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.19",
    "closeTime": "15:00",
    "badge": "10月19日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.19 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 44,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度偏冷，早盘冲高后回落，收盘弱于开盘，上涨2275家，强势49家，成交1.44万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 42,
        "title": "市场宽度",
        "desc": "2275涨 / 3129跌"
      },
      {
        "score": 30,
        "title": "成交热度",
        "desc": "两市 1.44万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 59,
        "title": "赚钱效应",
        "desc": "49涨停 / 25跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3730.92",
        "change": "+0.39%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "11817.42",
        "change": "+0.13%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "2746.29",
        "change": "-0.94%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1329.19",
        "change": "-2.17%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.44万亿",
        "change": "缩量1179亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.38%",
        "change": "5564只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "2275 / 3129",
        "change": "占比 42.1%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "49 / 25",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 26,
      "rawScore": 34.66,
      "temperatureScore": 25.97,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 44,
      "delta": -18,
      "funddb": {
        "score": 18,
        "status": "极度恐惧",
        "tradeDate": "2026.10.19",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 46.3,
          "mappedScore": 32.31,
          "calibration": 0.0,
          "appliedCalibration": 0.0,
          "calibrationNotes": [],
          "priceStrength": 49,
          "participation": 30,
          "limitScore": 66,
          "median": -0.38,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 17.83,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 32,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.19",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 19.36,
                "weight": 0.18,
                "status": "ready",
                "value": 30.6741,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 7.32,
                "weight": 0.2,
                "status": "ready",
                "value": 0.3678,
                "detail": "20/5438 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 21.72,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.5363,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 2.05,
                "weight": 0.26,
                "status": "ready",
                "value": -7.8613,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 44.35,
                "weight": 0.2,
                "status": "ready",
                "value": 8.1612,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 48,
          "weight": "20%",
          "desc": "2275 / 3129，49 / 25"
        },
        {
          "name": "指数路径",
          "score": 45,
          "weight": "20%",
          "desc": "四大指数平均 -0.65%"
        },
        {
          "name": "流动性",
          "score": 22,
          "weight": "10%",
          "desc": "1.44万亿 缩量1179亿"
        },
        {
          "name": "恐贪风险",
          "score": 18,
          "weight": "32%",
          "desc": "自算恐贪 18 / 极度恐惧"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 34.7，再用情绪温度映射与共振修正下修至 26。当前未出现明显单边共振，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "MLOps概念等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "多数指数收红：上证 +0.39%，深证成指 +0.13%，创业板指 -0.94%"
    ],
    "bearFactors": [
      "指数修复但成交额缩量1179亿，增量资金仍需确认，前一交易日 2026.10.16",
      "半导体走弱，高位硬科技杀估值明显",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温",
      "上涨家数仅 2275，占比 42.1%，个股宽度偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约49.3%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "AI应用 / 软件 / 数据要素",
        "note": "东方财富、中文在线、分众传媒等成交额前排集中，成交占比约4.5%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "有色 / 小金属 / 稀土",
        "note": "洛阳钼业、紫金矿业、中国神华等成交额前排集中，成交占比约3.5%",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业 / 高股息",
        "note": "长江电力、中国平安、中国银行等成交额前排集中，成交占比约5.0%",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "兵装重组概念",
        "note": "兵装重组概念涨幅+4.75%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体",
        "note": "半导体走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.10.19",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-19T17:47:29+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.16",
    "closeTime": "15:00",
    "badge": "10月16日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.16 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 52,
    "mood": "修复",
    "moodTone": "red",
    "summary": "收盘温度偏冷，早盘冲高后回落，收盘弱于开盘，上涨3301家，强势61家，成交1.56万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 61,
        "title": "市场宽度",
        "desc": "3301涨 / 2128跌"
      },
      {
        "score": 36,
        "title": "成交热度",
        "desc": "两市 1.56万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 74,
        "title": "赚钱效应",
        "desc": "61涨停 / 11跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3716.28",
        "change": "+0.24%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "11802.46",
        "change": "-0.12%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "2772.38",
        "change": "-0.39%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1358.65",
        "change": "-0.06%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.56万亿",
        "change": "缩量776亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.47%",
        "change": "5567只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3301 / 2128",
        "change": "占比 60.8%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "61 / 11",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 28,
      "rawScore": 37.06,
      "temperatureScore": 28.37,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 52,
      "delta": -24,
      "funddb": {
        "score": 13,
        "status": "极度恐惧",
        "tradeDate": "2026.10.16",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 59.5,
          "mappedScore": 38.16,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 64,
          "participation": 34,
          "limitScore": 85,
          "median": 0.47,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 13.01,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 39,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.16",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 18.12,
                "weight": 0.18,
                "status": "ready",
                "value": 30.4368,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 3.66,
                "weight": 0.2,
                "status": "ready",
                "value": 0.2574,
                "detail": "14/5440 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 7.79,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.9617,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally. Current-day close is supplemented from the completed 15:00 five-minute bar while the daily endpoint is delayed."
              },
              {
                "key": "safeHaven",
                "score": 0.82,
                "weight": 0.26,
                "status": "ready",
                "value": -8.6811,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 37.77,
                "weight": 0.2,
                "status": "ready",
                "value": 7.7663,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 66,
          "weight": "20%",
          "desc": "3301 / 2128，61 / 11"
        },
        {
          "name": "指数路径",
          "score": 44,
          "weight": "20%",
          "desc": "四大指数平均 -0.08%"
        },
        {
          "name": "流动性",
          "score": 28,
          "weight": "10%",
          "desc": "1.56万亿 缩量776亿"
        },
        {
          "name": "恐贪风险",
          "score": 13,
          "weight": "32%",
          "desc": "自算恐贪 13 / 极度恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 37.1，再用情绪温度映射与共振修正下修至 28。当前未出现明显单边共振，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3301，占比 60.8%，市场宽度偏强",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "仍有单一指数抗跌收红：上证 +0.24%，深证成指 -0.12%，创业板指 -0.39%",
      "强势股 61 家，局部短线情绪仍有承接"
    ],
    "bearFactors": [
      "多数指数收跌：上证 +0.24%，深证成指 -0.12%，创业板指 -0.39%",
      "CPO、PCB走弱，高位硬科技杀估值明显",
      "两市成交额 1.56万亿，缩量776亿，资金承接不足，前一交易日 2026.10.15",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约46.9%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "AI应用 / 软件 / 数据要素",
        "note": "万华化学、东方财富、中文在线等成交额前排集中，成交占比约5.4%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "有色 / 小金属 / 稀土",
        "note": "洛阳钼业、紫金矿业、中国神华等成交额前排集中，成交占比约3.7%",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "医药 / 创新药 / 中药",
        "note": "恒瑞医药、药明康德、凯莱英等成交额前排集中，成交占比约7.5%",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "兵装重组概念",
        "note": "兵装重组概念涨幅+5.90%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "CPO、PCB",
        "note": "CPO、PCB走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.10.16",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-16T16:40:47+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.15",
    "closeTime": "15:00",
    "badge": "10月15日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.15 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 32,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，收盘弱于开盘，上涨430家，强势36家，成交1.63万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 8,
        "title": "市场宽度",
        "desc": "430涨 / 5108跌"
      },
      {
        "score": 47,
        "title": "成交热度",
        "desc": "两市 1.63万亿"
      },
      {
        "score": 42,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 38,
        "title": "赚钱效应",
        "desc": "36涨停 / 26跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3707.48",
        "change": "-1.59%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "11816.79",
        "change": "-2.43%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "2783.17",
        "change": "-2.92%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1359.52",
        "change": "-1.50%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.63万亿",
        "change": "放量2186亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-3.04%",
        "change": "5565只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "430 / 5108",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "36 / 26",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 9,
      "rawScore": 24.22,
      "temperatureScore": 16.84,
      "resonanceAdjustment": -7.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱",
        "核心弱因子极端偏低",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 32,
      "delta": -23,
      "funddb": {
        "score": 13,
        "status": "极度恐惧",
        "tradeDate": "2026.10.15",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 16.01,
          "mappedScore": 18.89,
          "calibration": -7.0,
          "appliedCalibration": -7.0,
          "calibrationNotes": [
            "deep-median-drawdown",
            "very-low-up-ratio"
          ],
          "priceStrength": 19,
          "participation": 48,
          "limitScore": 58,
          "median": -3.04,
          "penalties": [
            "中位数深跌",
            "指数与宽度共振偏弱"
          ],
          "boosts": [],
          "ifindFactorScore": 13.11,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 12,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.15",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 13.02,
                "weight": 0.18,
                "status": "ready",
                "value": 34.8163,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 7.32,
                "weight": 0.2,
                "status": "ready",
                "value": 0.3677,
                "detail": "20/5439 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 14.75,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.7622,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 0.41,
                "weight": 0.26,
                "status": "ready",
                "value": -9.2454,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 34.2,
                "weight": 0.2,
                "status": "ready",
                "value": 7.5519,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 18,
          "weight": "20%",
          "desc": "430 / 5108，36 / 26"
        },
        {
          "name": "指数路径",
          "score": 19,
          "weight": "20%",
          "desc": "四大指数平均 -2.11%"
        },
        {
          "name": "流动性",
          "score": 51,
          "weight": "10%",
          "desc": "1.63万亿 放量2186亿"
        },
        {
          "name": "恐贪风险",
          "score": 13,
          "weight": "32%",
          "desc": "自算恐贪 13 / 极度恐惧 / 中位数深跌、指数与宽度共振偏弱"
        },
        {
          "name": "主线结构",
          "score": 42,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 24.2，再用情绪温度映射与共振修正下修至 9。当前多数因子偏弱;核心弱因子极端偏低;原口径确认弱度，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 1.63万亿，较前一日继续放量，前一交易日 2026.10.14"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -1.59%，深证成指 -2.43%，创业板指 -2.92%",
      "指数下跌但成交额放量2186亿，放量分歧明显升温",
      "半导体、CPO走弱，高位硬科技杀估值明显",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "消费电子 / 免税 / 稀土",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.10.15",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-15T17:32:40+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.14",
    "closeTime": "15:00",
    "badge": "10月14日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.14 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 34,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨979家，强势39家，成交1.41万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 18,
        "title": "市场宽度",
        "desc": "979涨 / 4496跌"
      },
      {
        "score": 30,
        "title": "成交热度",
        "desc": "两市 1.41万亿"
      },
      {
        "score": 43,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 50,
        "title": "赚钱效应",
        "desc": "39涨停 / 11跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3767.23",
        "change": "-0.88%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "12110.59",
        "change": "-1.97%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "2866.76",
        "change": "-3.10%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1380.26",
        "change": "-3.29%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.41万亿",
        "change": "缩量2615亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.94%",
        "change": "5563只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "979 / 4496",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "39 / 11",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 5,
      "rawScore": 25.42,
      "temperatureScore": 17.81,
      "resonanceAdjustment": -13.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多因子偏弱共振",
        "核心弱因子极端偏低",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 34,
      "delta": -29,
      "funddb": {
        "score": 19,
        "status": "极度恐惧",
        "tradeDate": "2026.10.14",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 29.78,
          "mappedScore": 24.99,
          "calibration": -3.0,
          "appliedCalibration": -3.0,
          "calibrationNotes": [
            "weak-median"
          ],
          "priceStrength": 31,
          "participation": 29,
          "limitScore": 78,
          "median": -1.94,
          "penalties": [
            "缩量弱宽度"
          ],
          "boosts": [],
          "ifindFactorScore": 19.24,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 22,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.14",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 18.25,
                "weight": 0.18,
                "status": "ready",
                "value": 31.2228,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 17.48,
                "weight": 0.2,
                "status": "ready",
                "value": 0.6435,
                "detail": "35/5439 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 25.82,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.3534,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 1.23,
                "weight": 0.26,
                "status": "ready",
                "value": -7.7842,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 40.06,
                "weight": 0.2,
                "status": "ready",
                "value": 7.9036,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 29,
          "weight": "20%",
          "desc": "979 / 4496，39 / 11"
        },
        {
          "name": "指数路径",
          "score": 18,
          "weight": "20%",
          "desc": "四大指数平均 -2.31%"
        },
        {
          "name": "流动性",
          "score": 22,
          "weight": "10%",
          "desc": "1.41万亿 缩量2615亿"
        },
        {
          "name": "恐贪风险",
          "score": 19,
          "weight": "32%",
          "desc": "自算恐贪 19 / 极度恐惧 / 缩量弱宽度"
        },
        {
          "name": "主线结构",
          "score": 43,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 25.4，再用情绪温度映射与共振修正下修至 5。当前多因子偏弱共振;核心弱因子极端偏低;原口径确认弱度，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "焦炭加工涨幅靠前，但成交主线仍以通信设备 / 光模块 / 光纤为核心",
      "数字媒体等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.88%，深证成指 -1.97%，创业板指 -3.10%，科创50 -3.29%",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体走弱，高位硬科技杀估值明显",
      "两市成交额 1.41万亿，缩量2615亿，资金承接不足，前一交易日 2026.10.13"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 煤炭",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "手机游戏",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.10.14",
    "observation": "观察重点：煤炭脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-14T17:23:14+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.13",
    "closeTime": "15:00",
    "badge": "10月13日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.13 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 55,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度修复，盘中下探后修复，收盘靠近日内高位，上涨2909家，强势70家，成交1.68万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 54,
        "title": "市场宽度",
        "desc": "2909涨 / 2486跌"
      },
      {
        "score": 48,
        "title": "成交热度",
        "desc": "两市 1.68万亿"
      },
      {
        "score": 55,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 74,
        "title": "赚钱效应",
        "desc": "70涨停 / 10跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3800.86",
        "change": "+0.10%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "12353.70",
        "change": "-0.25%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "2958.34",
        "change": "-0.18%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1427.18",
        "change": "+0.03%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.68万亿",
        "change": "放量1381亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.16%",
        "change": "5561只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "2909 / 2486",
        "change": "占比 53.9%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "70 / 10",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 51,
      "rawScore": 43.82,
      "temperatureScore": 36.32,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 15,
      "structuralFloor": 51,
      "resonanceNotes": [
        "结构修复抑制慢因子过度降温"
      ],
      "mood": "修复",
      "moodTone": "red",
      "originalScore": 55,
      "delta": -4,
      "funddb": {
        "score": 21,
        "status": "极度恐惧",
        "tradeDate": "2026.10.13",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 62.87,
          "mappedScore": 39.65,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 61,
          "participation": 53,
          "limitScore": 88,
          "median": 0.16,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 20.69,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 40,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.13",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 22.0,
                "weight": 0.18,
                "status": "ready",
                "value": 29.4321,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 18.78,
                "weight": 0.2,
                "status": "ready",
                "value": 0.6621,
                "detail": "36/5437 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 25.41,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.3584,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 1.64,
                "weight": 0.26,
                "status": "ready",
                "value": -6.8376,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 42.41,
                "weight": 0.2,
                "status": "ready",
                "value": 8.0447,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 61,
          "weight": "20%",
          "desc": "2909 / 2486，70 / 10"
        },
        {
          "name": "指数路径",
          "score": 49,
          "weight": "20%",
          "desc": "四大指数平均 -0.07%"
        },
        {
          "name": "流动性",
          "score": 52,
          "weight": "10%",
          "desc": "1.68万亿 放量1381亿"
        },
        {
          "name": "恐贪风险",
          "score": 21,
          "weight": "32%",
          "desc": "自算恐贪 21 / 极度恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 55,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 43.8，再用情绪温度映射、共振修正与结构修复保护上修至 51。当前结构修复抑制慢因子过度降温，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 2909，市场宽度接近均衡，局部赚钱效应仍在",
      "CPO / 光模块 / 铜缆主线逆势活跃，中际旭创、天孚通信等核心股仍有承接",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "两市成交额 1.68万亿，较前一日继续放量，前一交易日 2026.10.12"
    ],
    "bearFactors": [
      "多数指数收跌：上证 +0.10%，深证成指 -0.25%，创业板指 -0.18%",
      "指数下跌但成交额放量1381亿，放量分歧明显升温",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约52.4%",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "中芯国际、兆易创新、海光信息等成交额前排集中，成交占比约14.2%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "AI应用 / 软件 / 数据要素",
        "note": "万华化学、东方财富、中文在线等成交额前排集中，成交占比约4.6%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "有色 / 小金属 / 稀土",
        "note": "紫金矿业、北方稀土、中国神华等成交额前排集中，成交占比约2.9%",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业 / 高股息",
        "note": "长江电力、中国平安、中国银行等成交额前排集中，成交占比约4.7%",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "电池化学品",
        "note": "电池化学品跌幅-3.22%，退潮压力需要跟踪",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.10.13",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在1.68万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-13T17:02:48+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.12",
    "closeTime": "15:00",
    "badge": "10月12日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.12 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 34,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨1167家，强势48家，成交1.54万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 21,
        "title": "市场宽度",
        "desc": "1167涨 / 4325跌"
      },
      {
        "score": 32,
        "title": "成交热度",
        "desc": "两市 1.54万亿"
      },
      {
        "score": 41,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 47,
        "title": "赚钱效应",
        "desc": "48涨停 / 22跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3797.24",
        "change": "-0.43%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "12384.87",
        "change": "-2.03%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "2963.82",
        "change": "-2.61%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1426.72",
        "change": "-2.10%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.54万亿",
        "change": "缩量3627亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.68%",
        "change": "5561只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1167 / 4325",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "48 / 22",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 6,
      "rawScore": 26.9,
      "temperatureScore": 19.02,
      "resonanceAdjustment": -13.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多因子偏弱共振",
        "核心弱因子极端偏低",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 34,
      "delta": -28,
      "funddb": {
        "score": 21,
        "status": "极度恐惧",
        "tradeDate": "2026.10.12",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 30.2,
          "mappedScore": 25.18,
          "calibration": -3.0,
          "appliedCalibration": -3.0,
          "calibrationNotes": [
            "weak-median"
          ],
          "priceStrength": 32,
          "participation": 30,
          "limitScore": 69,
          "median": -1.68,
          "penalties": [
            "缩量弱宽度"
          ],
          "boosts": [],
          "ifindFactorScore": 21.49,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 22,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.12",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 24.91,
                "weight": 0.18,
                "status": "ready",
                "value": 28.5439,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 18.44,
                "weight": 0.2,
                "status": "ready",
                "value": 0.662,
                "detail": "36/5438 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 28.28,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.2682,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 3.69,
                "weight": 0.26,
                "status": "ready",
                "value": -5.9548,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 39.16,
                "weight": 0.2,
                "status": "ready",
                "value": 7.8494,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 30,
          "weight": "20%",
          "desc": "1167 / 4325，48 / 22"
        },
        {
          "name": "指数路径",
          "score": 22,
          "weight": "20%",
          "desc": "四大指数平均 -1.79%"
        },
        {
          "name": "流动性",
          "score": 24,
          "weight": "10%",
          "desc": "1.54万亿 缩量3627亿"
        },
        {
          "name": "恐贪风险",
          "score": 21,
          "weight": "32%",
          "desc": "自算恐贪 21 / 极度恐惧 / 缩量弱宽度"
        },
        {
          "name": "主线结构",
          "score": 41,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 26.9，再用情绪温度映射与共振修正下修至 6。当前多因子偏弱共振;核心弱因子极端偏低;原口径确认弱度，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "快手概念等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.43%，深证成指 -2.03%，创业板指 -2.61%",
      "CPO走弱，高位硬科技杀估值明显",
      "两市成交额 1.54万亿，缩量3627亿，资金承接不足，前一交易日 2026.10.09",
      "早盘冲高后回落，午后探低，收盘靠近低位，日内承接偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "短剧游戏",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.10.12",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-12T18:26:51+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.09",
    "closeTime": "15:00",
    "badge": "10月9日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.09 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 56,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度偏冷，盘中下探后修复，收盘靠近日内高位，上涨3297家，强势72家，成交1.90万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 61,
        "title": "市场宽度",
        "desc": "3297涨 / 2145跌"
      },
      {
        "score": 54,
        "title": "成交热度",
        "desc": "两市 1.90万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 76,
        "title": "赚钱效应",
        "desc": "72涨停 / 10跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3813.79",
        "change": "+0.05%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "12641.86",
        "change": "+0.17%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3043.33",
        "change": "+0.22%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1457.27",
        "change": "+0.06%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.90万亿",
        "change": "放量2184亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.60%",
        "change": "5559只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3297 / 2145",
        "change": "占比 60.6%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "72 / 10",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 40,
      "rawScore": 46.5,
      "temperatureScore": 40.39,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 56,
      "delta": -16,
      "funddb": {
        "score": 20,
        "status": "极度恐惧",
        "tradeDate": "2026.10.09",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 68.2,
          "mappedScore": 42.01,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 65,
          "participation": 53,
          "limitScore": 88,
          "median": 0.6,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 20.13,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 43,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.09",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 26.94,
                "weight": 0.18,
                "status": "ready",
                "value": 25.9126,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 15.64,
                "weight": 0.2,
                "status": "ready",
                "value": 0.6071,
                "detail": "33/5436 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 16.39,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.6783,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 6.56,
                "weight": 0.26,
                "status": "ready",
                "value": -5.421,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 39.13,
                "weight": 0.2,
                "status": "ready",
                "value": 7.8477,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 66,
          "weight": "20%",
          "desc": "3297 / 2145，72 / 10"
        },
        {
          "name": "指数路径",
          "score": 65,
          "weight": "20%",
          "desc": "四大指数平均 +0.12%"
        },
        {
          "name": "流动性",
          "score": 58,
          "weight": "10%",
          "desc": "1.90万亿 放量2184亿"
        },
        {
          "name": "恐贪风险",
          "score": 20,
          "weight": "32%",
          "desc": "自算恐贪 20 / 极度恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 46.5，再用情绪温度映射与共振修正下修至 40。当前未出现明显单边共振，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3297，占比 60.6%，市场宽度偏强",
      "贵金属涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "快手概念等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "两市成交额 1.90万亿，较前一日继续放量，前一交易日 2026.10.08"
    ],
    "bearFactors": [
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "AI视频",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.10.09",
    "observation": "观察重点：贵金属脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-09T17:40:27+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.10.08",
    "closeTime": "15:00",
    "badge": "10月8日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.10.08 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 43,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨1698家，强势45家，成交1.68万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 31,
        "title": "市场宽度",
        "desc": "1698涨 / 3748跌"
      },
      {
        "score": 48,
        "title": "成交热度",
        "desc": "两市 1.68万亿"
      },
      {
        "score": 44,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 52,
        "title": "赚钱效应",
        "desc": "45涨停 / 15跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3811.90",
        "change": "-0.79%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "12620.90",
        "change": "-2.07%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3036.66",
        "change": "-3.15%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1456.32",
        "change": "-4.82%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.68万亿",
        "change": "放量2441亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.01%",
        "change": "5557只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1698 / 3748",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "45 / 15",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 20,
      "rawScore": 30.56,
      "temperatureScore": 22.16,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 43,
      "delta": -23,
      "funddb": {
        "score": 22,
        "status": "极度恐惧",
        "tradeDate": "2026.10.08",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 38.29,
          "mappedScore": 28.76,
          "calibration": 0.0,
          "appliedCalibration": 0.0,
          "calibrationNotes": [],
          "priceStrength": 40,
          "participation": 49,
          "limitScore": 75,
          "median": -1.01,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 22.04,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 29,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.10.08",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 27.77,
                "weight": 0.18,
                "status": "ready",
                "value": 25.4206,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 13.64,
                "weight": 0.2,
                "status": "ready",
                "value": 0.552,
                "detail": "30/5435 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 22.95,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.4448,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 6.15,
                "weight": 0.26,
                "status": "ready",
                "value": -5.4624,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 45.19,
                "weight": 0.2,
                "status": "ready",
                "value": 8.2115,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 38,
          "weight": "20%",
          "desc": "1698 / 3748，45 / 15"
        },
        {
          "name": "指数路径",
          "score": 14,
          "weight": "20%",
          "desc": "四大指数平均 -2.71%"
        },
        {
          "name": "流动性",
          "score": 52,
          "weight": "10%",
          "desc": "1.68万亿 放量2441亿"
        },
        {
          "name": "恐贪风险",
          "score": 22,
          "weight": "32%",
          "desc": "自算恐贪 22 / 极度恐惧"
        },
        {
          "name": "主线结构",
          "score": 44,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 30.6，再用情绪温度映射与共振修正下修至 20。当前多数因子偏弱，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "煤炭概念涨幅靠前，但成交主线仍以通信设备 / 光模块 / 光纤为核心",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 1.68万亿，较前一日继续放量，前一交易日 2026.09.30"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.79%，深证成指 -2.07%，创业板指 -3.15%，科创50 -4.82%",
      "指数下跌但成交额放量2441亿，放量分歧明显升温",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO走弱，高位硬科技杀估值明显"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 煤炭",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "钠离子电池",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.10.08",
    "observation": "观察重点：煤炭脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-10-08T17:33:34+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.30",
    "closeTime": "15:00",
    "badge": "9月30日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.30 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 49,
    "mood": "修复",
    "moodTone": "blue",
    "summary": "收盘温度偏冷，早盘冲高后回落，午后探低，收盘靠近低位，上涨2567家，强势56家，成交1.44万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 48,
        "title": "市场宽度",
        "desc": "2567涨 / 2824跌"
      },
      {
        "score": 40,
        "title": "成交热度",
        "desc": "两市 1.44万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 69,
        "title": "赚钱效应",
        "desc": "56涨停 / 12跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3842.19",
        "change": "+0.31%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "12887.62",
        "change": "-0.11%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3135.28",
        "change": "-0.23%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1530.01",
        "change": "-2.51%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.44万亿",
        "change": "放量288亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.09%",
        "change": "5561只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "2567 / 2824",
        "change": "占比 47.6%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "56 / 12",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 30,
      "rawScore": 38.54,
      "temperatureScore": 29.94,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 49,
      "delta": -19,
      "funddb": {
        "score": 22,
        "status": "极度恐惧",
        "tradeDate": "2026.09.30",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 55.67,
          "mappedScore": 36.46,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 55,
          "participation": 44,
          "limitScore": 82,
          "median": -0.09,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 22.39,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 37,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.30",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 29.95,
                "weight": 0.18,
                "status": "ready",
                "value": 23.8158,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 20.0,
                "weight": 0.2,
                "status": "ready",
                "value": 0.754,
                "detail": "41/5438 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 25.41,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.3038,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 4.1,
                "weight": 0.26,
                "status": "ready",
                "value": -5.818,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 39.34,
                "weight": 0.2,
                "status": "ready",
                "value": 7.8605,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 55,
          "weight": "20%",
          "desc": "2567 / 2824，56 / 12"
        },
        {
          "name": "指数路径",
          "score": 40,
          "weight": "20%",
          "desc": "四大指数平均 -0.63%"
        },
        {
          "name": "流动性",
          "score": 44,
          "weight": "10%",
          "desc": "1.44万亿 放量288亿"
        },
        {
          "name": "恐贪风险",
          "score": 22,
          "weight": "32%",
          "desc": "自算恐贪 22 / 极度恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 38.5，再用情绪温度映射与共振修正下修至 30。当前未出现明显单边共振，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 2567，市场宽度接近均衡，局部赚钱效应仍在",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 1.44万亿，较前一日继续放量，前一交易日 2026.09.29",
      "仍有单一指数抗跌收红：上证 +0.31%，深证成指 -0.11%，创业板指 -0.23%"
    ],
    "bearFactors": [
      "多数指数收跌：上证 +0.31%，深证成指 -0.11%，创业板指 -0.23%",
      "指数下跌但成交额放量288亿，放量分歧明显升温",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "早盘冲高后回落，午后探低，收盘靠近低位，日内承接偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约47.7%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "机器人 / 工业母机 / 低空",
        "note": "万科A、亿纬锂能、华友钴业等成交额前排集中，成交占比约5.9%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "有色 / 小金属 / 稀土",
        "note": "洛阳钼业、紫金矿业、力勤资源等成交额前排集中，成交占比约3.4%",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "医疗研发外包",
        "note": "医疗研发外包涨幅+4.30%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "其他生物制品",
        "note": "其他生物制品涨幅+4.98%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、CPO、PCB",
        "note": "半导体、CPO、PCB走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.09.30",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-30T17:30:16+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.29",
    "closeTime": "15:00",
    "badge": "9月29日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.29 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 52,
    "mood": "修复",
    "moodTone": "red",
    "summary": "收盘温度偏冷，盘中路径待确认，上涨3471家，强势57家，成交1.41万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 64,
        "title": "市场宽度",
        "desc": "3471涨 / 1933跌"
      },
      {
        "score": 30,
        "title": "成交热度",
        "desc": "两市 1.41万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 74,
        "title": "赚钱效应",
        "desc": "57涨停 / 11跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3830.45",
        "change": "+0.18%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "12901.95",
        "change": "+0.34%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3142.56",
        "change": "+0.09%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1569.34",
        "change": "+0.86%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.41万亿",
        "change": "缩量2936亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.48%",
        "change": "5559只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3471 / 1933",
        "change": "占比 64.2%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "57 / 11",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 37,
      "rawScore": 44.02,
      "temperatureScore": 36.6,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 52,
      "delta": -15,
      "funddb": {
        "score": 21,
        "status": "极度恐惧",
        "tradeDate": "2026.09.29",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 65.31,
          "mappedScore": 40.73,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 66,
          "participation": 30,
          "limitScore": 84,
          "median": 0.48,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 20.99,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 41,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.29",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 25.58,
                "weight": 0.18,
                "status": "ready",
                "value": 25.4023,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 10.2,
                "weight": 0.2,
                "status": "ready",
                "value": 0.4782,
                "detail": "26/5437 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 20.08,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.5651,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 1.64,
                "weight": 0.26,
                "status": "ready",
                "value": -6.3316,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 53.54,
                "weight": 0.2,
                "status": "ready",
                "value": 8.7125,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 68,
          "weight": "20%",
          "desc": "3471 / 1933，57 / 11"
        },
        {
          "name": "指数路径",
          "score": 67,
          "weight": "20%",
          "desc": "四大指数平均 +0.37%"
        },
        {
          "name": "流动性",
          "score": 22,
          "weight": "10%",
          "desc": "1.41万亿 缩量2936亿"
        },
        {
          "name": "恐贪风险",
          "score": 21,
          "weight": "32%",
          "desc": "自算恐贪 21 / 极度恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 44.0，再用情绪温度映射与共振修正下修至 37。当前未出现明显单边共振，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3471，占比 64.2%，市场宽度偏强",
      "快手概念等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "三大指数集体收红：上证 +0.18%，深证成指 +0.34%，创业板指 +0.09%"
    ],
    "bearFactors": [
      "指数修复但成交额缩量2936亿，增量资金仍需确认，前一交易日 2026.09.28",
      "科创次新股走弱，高位硬科技杀估值明显",
      "强势股 57 家，短线强度偏弱",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "快手概念",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.09.29",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-29T17:44:38+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.28",
    "closeTime": "15:00",
    "badge": "9月28日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.28 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 32,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨898家，强势35家，成交1.70万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 16,
        "title": "市场宽度",
        "desc": "898涨 / 4554跌"
      },
      {
        "score": 47,
        "title": "成交热度",
        "desc": "两市 1.70万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 24,
        "title": "赚钱效应",
        "desc": "35涨停 / 57跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3823.62",
        "change": "-1.67%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "12858.75",
        "change": "-3.44%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3139.82",
        "change": "-4.53%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1555.98",
        "change": "-4.06%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.70万亿",
        "change": "放量494亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.85%",
        "change": "5557只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "898 / 4554",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "35 / 57",
        "change": "亏钱效应扩散",
        "tone": "green"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 10,
      "rawScore": 24.56,
      "temperatureScore": 17.11,
      "resonanceAdjustment": -7.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱",
        "核心弱因子极端偏低",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 32,
      "delta": -22,
      "funddb": {
        "score": 18,
        "status": "极度恐惧",
        "tradeDate": "2026.09.28",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 14.54,
          "mappedScore": 18.24,
          "calibration": -5.0,
          "appliedCalibration": -5.0,
          "calibrationNotes": [
            "weak-median",
            "limit-down-dominance"
          ],
          "priceStrength": 21,
          "participation": 49,
          "limitScore": 38,
          "median": -1.85,
          "penalties": [
            "跌停多于涨停",
            "指数与宽度共振偏弱"
          ],
          "boosts": [],
          "ifindFactorScore": 18.09,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 13,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.28",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 22.44,
                "weight": 0.18,
                "status": "ready",
                "value": 27.0472,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 6.94,
                "weight": 0.2,
                "status": "ready",
                "value": 0.368,
                "detail": "20/5435 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 23.77,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.3812,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 2.05,
                "weight": 0.26,
                "status": "ready",
                "value": -6.0883,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 41.62,
                "weight": 0.2,
                "status": "ready",
                "value": 7.997,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 19,
          "weight": "20%",
          "desc": "898 / 4554，35 / 57"
        },
        {
          "name": "指数路径",
          "score": 9,
          "weight": "20%",
          "desc": "四大指数平均 -3.42%"
        },
        {
          "name": "流动性",
          "score": 51,
          "weight": "10%",
          "desc": "1.70万亿 放量494亿"
        },
        {
          "name": "恐贪风险",
          "score": 18,
          "weight": "32%",
          "desc": "自算恐贪 18 / 极度恐惧 / 跌停多于涨停、指数与宽度共振偏弱"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 24.6，再用情绪温度映射与共振修正下修至 10。当前多数因子偏弱;核心弱因子极端偏低;原口径确认弱度，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 1.70万亿，较前一日继续放量，前一交易日 2026.09.24"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -1.67%，深证成指 -3.44%，创业板指 -4.53%，科创50 -4.06%",
      "指数下跌但成交额放量494亿，放量分歧明显升温",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "猪肉",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.09.28",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-28T16:47:11+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.24",
    "closeTime": "15:00",
    "badge": "9月24日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.24 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 37,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨1120家，强势52家，成交1.65万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 21,
        "title": "市场宽度",
        "desc": "1120涨 / 4306跌"
      },
      {
        "score": 35,
        "title": "成交热度",
        "desc": "两市 1.65万亿"
      },
      {
        "score": 44,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 52,
        "title": "赚钱效应",
        "desc": "52涨停 / 15跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3888.37",
        "change": "-1.22%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13316.97",
        "change": "-2.34%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3288.95",
        "change": "-2.68%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1621.87",
        "change": "-2.35%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.65万亿",
        "change": "缩量1116亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.30%",
        "change": "5557只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1120 / 4306",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "52 / 15",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 14,
      "rawScore": 28.18,
      "temperatureScore": 20.1,
      "resonanceAdjustment": -6.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多因子偏弱共振"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 37,
      "delta": -23,
      "funddb": {
        "score": 23,
        "status": "极度恐惧",
        "tradeDate": "2026.09.24",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 35.98,
          "mappedScore": 27.74,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 34,
          "participation": 33,
          "limitScore": 78,
          "median": -1.3,
          "penalties": [
            "缩量弱宽度"
          ],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 22.98,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 28,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.24",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 18.75,
                "weight": 0.18,
                "status": "ready",
                "value": 26.8359,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 14.23,
                "weight": 0.2,
                "status": "ready",
                "value": 0.5889,
                "detail": "32/5434 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 22.13,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.445,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 12.3,
                "weight": 0.26,
                "status": "ready",
                "value": -4.3925,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.1,
                "weight": 0.2,
                "status": "ready",
                "value": 8.5062,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 32,
          "weight": "20%",
          "desc": "1120 / 4306，52 / 15"
        },
        {
          "name": "指数路径",
          "score": 19,
          "weight": "20%",
          "desc": "四大指数平均 -2.15%"
        },
        {
          "name": "流动性",
          "score": 27,
          "weight": "10%",
          "desc": "1.65万亿 缩量1116亿"
        },
        {
          "name": "恐贪风险",
          "score": 23,
          "weight": "32%",
          "desc": "自算恐贪 23 / 极度恐惧 / 缩量弱宽度 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 44,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 28.2，再用情绪温度映射与共振修正下修至 14。当前多因子偏弱共振，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "焦炭加工涨幅靠前，但成交主线仍以通信设备 / 光模块 / 光纤为核心",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -1.22%，深证成指 -2.34%，创业板指 -2.68%",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "两市成交额 1.65万亿，缩量1116亿，资金承接不足，前一交易日 2026.09.23",
      "早盘冲高后回落，午后探低，收盘靠近低位，日内承接偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 煤炭",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "中船系",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.09.24",
    "observation": "观察重点：煤炭脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-28T16:40:39+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.23",
    "closeTime": "15:00",
    "badge": "9月23日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.23 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 45,
    "mood": "修复",
    "moodTone": "blue",
    "summary": "收盘温度偏冷，早盘冲高后回落，午后探低，收盘靠近低位，上涨1891家，强势51家，成交1.76万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 35,
        "title": "市场宽度",
        "desc": "1891涨 / 3564跌"
      },
      {
        "score": 38,
        "title": "成交热度",
        "desc": "两市 1.76万亿"
      },
      {
        "score": 48,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 63,
        "title": "赚钱效应",
        "desc": "51涨停 / 14跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3936.52",
        "change": "-0.39%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13636.07",
        "change": "-0.64%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3379.61",
        "change": "-0.60%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1660.85",
        "change": "-0.25%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.76万亿",
        "change": "缩量3706亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.61%",
        "change": "5556只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1891 / 3564",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "51 / 14",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 27,
      "rawScore": 37.92,
      "temperatureScore": 29.28,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 45,
      "delta": -18,
      "funddb": {
        "score": 34,
        "status": "恐惧",
        "tradeDate": "2026.09.23",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 48.32,
          "mappedScore": 33.2,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 46,
          "participation": 36,
          "limitScore": 78,
          "median": -0.61,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 33.56,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 34,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.23",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 29.59,
                "weight": 0.18,
                "status": "ready",
                "value": 24.2947,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 26.42,
                "weight": 0.2,
                "status": "ready",
                "value": 1.4175,
                "detail": "77/5432 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 26.64,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.2281,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 33.2,
                "weight": 0.26,
                "status": "ready",
                "value": -1.764,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 45,
          "weight": "20%",
          "desc": "1891 / 3564，51 / 14"
        },
        {
          "name": "指数路径",
          "score": 32,
          "weight": "20%",
          "desc": "四大指数平均 -0.47%"
        },
        {
          "name": "流动性",
          "score": 30,
          "weight": "10%",
          "desc": "1.76万亿 缩量3706亿"
        },
        {
          "name": "恐贪风险",
          "score": 34,
          "weight": "32%",
          "desc": "自算恐贪 34 / 恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 48,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 37.9，再用情绪温度映射与共振修正下修至 27。当前多数因子偏弱，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "PCB、CPO、光模块等科技线共振，哈药股份、百普赛斯等核心股创阶段新高",
      "非金属材料涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.39%，深证成指 -0.64%，创业板指 -0.60%",
      "两市成交额 1.76万亿，缩量3706亿，资金承接不足，前一交易日 2026.09.22",
      "早盘冲高后回落，午后探低，收盘靠近低位，日内承接偏弱",
      "上涨家数仅 1891，占比 34.7%，个股宽度偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约55.5%",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "科创次新股",
        "note": "科创次新股涨幅+1.27%，主线链条内热度继续外溢",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "机器人 / 工业母机 / 低空",
        "note": "万科A、宁德时代、江淮汽车等成交额前排集中，成交占比约2.8%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "有色 / 小金属 / 稀土",
        "note": "非金属材料涨幅+2.21%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "医疗研发外包",
        "note": "医疗研发外包涨幅+2.40%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "有色 / 小金属 / 稀土",
        "note": "焦炭加工跌幅-5.77%，退潮压力需要跟踪",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.09.23",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中承接能否改善，成交额能否维持在1.76万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-23T17:55:23+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.22",
    "closeTime": "15:00",
    "badge": "9月22日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.22 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 52,
    "mood": "修复",
    "moodTone": "red",
    "summary": "收盘温度偏冷，早盘冲高后回落，午后探低，收盘靠近低位，上涨2374家，强势64家，成交2.14万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 44,
        "title": "市场宽度",
        "desc": "2374涨 / 3030跌"
      },
      {
        "score": 59,
        "title": "成交热度",
        "desc": "两市 2.14万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 73,
        "title": "赚钱效应",
        "desc": "64涨停 / 5跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3952.13",
        "change": "+0.06%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "13723.74",
        "change": "-0.05%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3399.93",
        "change": "+0.01%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1665.04",
        "change": "+0.46%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.14万亿",
        "change": "放量1040亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.21%",
        "change": "5554只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "2374 / 3030",
        "change": "占比 43.9%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "64 / 5",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 44,
      "rawScore": 48.24,
      "temperatureScore": 43.72,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 52,
      "delta": -8,
      "funddb": {
        "score": 37,
        "status": "恐惧",
        "tradeDate": "2026.09.22",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 62.26,
          "mappedScore": 39.38,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 55,
          "participation": 57,
          "limitScore": 93,
          "median": -0.21,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 37.32,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 40,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.22",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 30.83,
                "weight": 0.18,
                "status": "ready",
                "value": 23.9225,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 27.64,
                "weight": 0.2,
                "status": "ready",
                "value": 1.4546,
                "detail": "79/5431 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 22.54,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.408,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 48.36,
                "weight": 0.26,
                "status": "ready",
                "value": -0.3058,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 54,
          "weight": "20%",
          "desc": "2374 / 3030，64 / 5"
        },
        {
          "name": "指数路径",
          "score": 56,
          "weight": "20%",
          "desc": "四大指数平均 +0.12%"
        },
        {
          "name": "流动性",
          "score": 63,
          "weight": "10%",
          "desc": "2.14万亿 放量1040亿"
        },
        {
          "name": "恐贪风险",
          "score": 37,
          "weight": "32%",
          "desc": "自算恐贪 37 / 恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 48.2，再用情绪温度映射与共振修正下修至 44。当前未出现明显单边共振，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "焦炭加工涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "小红书概念等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 2.14万亿，较前一日继续放量，前一交易日 2026.09.21"
    ],
    "bearFactors": [
      "CPO走弱，高位硬科技杀估值明显",
      "早盘冲高后回落，午后探低，收盘靠近低位，日内承接偏弱",
      "上涨家数仅 2374，占比 43.9%，个股宽度偏弱",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约59.0%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "小红书概念",
        "note": "小红书概念涨幅+2.70%，成长方向短线承接增强",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "有色 / 小金属 / 稀土",
        "note": "洛阳钼业、紫金矿业、博迁新材等成交额前排集中，成交占比约1.5%",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "其他医疗服务",
        "note": "其他医疗服务涨幅+3.10%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "出版",
        "note": "出版涨幅+3.75%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "CPO",
        "note": "CPO走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.09.22",
    "observation": "观察重点：煤炭脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-22T17:06:16+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.21",
    "closeTime": "15:00",
    "badge": "9月21日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.21 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 62,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度中性偏热，早盘冲高后回落，收盘弱于开盘，上涨4536家，强势105家，成交2.03万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 83,
        "title": "市场宽度",
        "desc": "4536涨 / 936跌"
      },
      {
        "score": 48,
        "title": "成交热度",
        "desc": "两市 2.03万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "105涨停 / 2跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3949.91",
        "change": "+0.97%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "13730.02",
        "change": "+0.65%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3399.59",
        "change": "+0.80%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1657.48",
        "change": "+0.29%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.03万亿",
        "change": "缩量456亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.54%",
        "change": "5553只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4536 / 936",
        "change": "占比 82.9%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "105 / 2",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 60,
      "rawScore": 53.9,
      "temperatureScore": 60.28,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": 60,
      "resonanceNotes": [],
      "mood": "中性偏热",
      "moodTone": "red",
      "originalScore": 62,
      "delta": -2,
      "funddb": {
        "score": 35,
        "status": "恐惧",
        "tradeDate": "2026.09.21",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 75.43,
          "mappedScore": 45.21,
          "calibration": 4.0,
          "appliedCalibration": 1.4,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio"
          ],
          "priceStrength": 81,
          "participation": 42,
          "limitScore": 98,
          "median": 1.54,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 35.42,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 47,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.21",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 30.87,
                "weight": 0.18,
                "status": "ready",
                "value": 23.8811,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 26.83,
                "weight": 0.2,
                "status": "ready",
                "value": 1.4178,
                "detail": "77/5431 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 17.62,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.647,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 44.67,
                "weight": 0.26,
                "status": "ready",
                "value": -0.6655,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 84,
          "weight": "20%",
          "desc": "4536 / 936，105 / 2"
        },
        {
          "name": "指数路径",
          "score": 69,
          "weight": "20%",
          "desc": "四大指数平均 +0.68%"
        },
        {
          "name": "流动性",
          "score": 40,
          "weight": "10%",
          "desc": "2.03万亿 缩量456亿"
        },
        {
          "name": "恐贪风险",
          "score": 35,
          "weight": "32%",
          "desc": "自算恐贪 35 / 恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 53.9，再用情绪温度映射与共振修正上修至 60。当前未出现明显单边共振，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4536，占比 82.9%，市场宽度偏强",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "三大指数集体收红：上证 +0.97%，深证成指 +0.65%，创业板指 +0.80%",
      "电力、芯片、PCB等轮番走强，热点扩散度提升"
    ],
    "bearFactors": [
      "指数修复但成交额缩量456亿，增量资金仍需确认，前一交易日 2026.09.18",
      "半导体走弱，高位硬科技杀估值明显",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "细胞免疫治疗",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.09.21",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-21T17:49:51+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.18",
    "closeTime": "15:00",
    "badge": "9月18日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.18 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 70,
    "mood": "偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨4234家，强势79家，成交2.08万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 79,
        "title": "市场宽度",
        "desc": "4234涨 / 1152跌"
      },
      {
        "score": 58,
        "title": "成交热度",
        "desc": "两市 2.08万亿"
      },
      {
        "score": 74,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "79涨停 / 1跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3911.87",
        "change": "+0.94%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "13640.87",
        "change": "+1.72%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3372.68",
        "change": "+2.25%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1652.63",
        "change": "+2.89%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.08万亿",
        "change": "放量2540亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.07%",
        "change": "5553只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4234 / 1152",
        "change": "占比 78.6%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "79 / 1",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 77,
      "rawScore": 60.68,
      "temperatureScore": 69.2,
      "resonanceAdjustment": 8.0,
      "structuralAdjustment": 0,
      "structuralFloor": 60,
      "resonanceNotes": [
        "多因子偏强共振",
        "原口径确认强度"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 70,
      "delta": 7,
      "funddb": {
        "score": 28,
        "status": "恐惧",
        "tradeDate": "2026.09.18",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 88.95,
          "mappedScore": 51.21,
          "calibration": 8.0,
          "appliedCalibration": 2.8,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio",
            "index-confirmed-strength"
          ],
          "priceStrength": 78,
          "participation": 66,
          "limitScore": 99,
          "median": 1.07,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 28.29,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 54,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.18",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 30.31,
                "weight": 0.18,
                "status": "ready",
                "value": 24.3218,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 20.73,
                "weight": 0.2,
                "status": "ready",
                "value": 0.8287,
                "detail": "45/5430 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 15.98,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.6904,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 23.36,
                "weight": 0.26,
                "status": "ready",
                "value": -2.5263,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 81,
          "weight": "20%",
          "desc": "4234 / 1152，79 / 1"
        },
        {
          "name": "指数路径",
          "score": 80,
          "weight": "20%",
          "desc": "四大指数平均 +1.95%"
        },
        {
          "name": "流动性",
          "score": 62,
          "weight": "10%",
          "desc": "2.08万亿 放量2540亿"
        },
        {
          "name": "恐贪风险",
          "score": 28,
          "weight": "32%",
          "desc": "自算恐贪 28 / 恐惧 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 74,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 60.7，再用情绪温度映射与共振修正上修至 77。当前多因子偏强共振;原口径确认强度，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4234，占比 78.6%，市场宽度偏强",
      "PCB、CPO、光模块午后共振，招商轮船等核心股创历史新高",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "两市成交额 2.08万亿，较前一日继续放量，前一交易日 2026.09.17"
    ],
    "bearFactors": [
      "沈鼓集团盘中创历史新高后明显回落，高位分歧加大",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "注册制次新股",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.09.18",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在2.08万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-18T17:45:54+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.17",
    "closeTime": "15:00",
    "badge": "9月17日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.17 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 50,
    "mood": "修复",
    "moodTone": "red",
    "summary": "收盘温度偏冷，早盘冲高后回落，收盘弱于开盘，上涨2576家，强势49家，成交1.82万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 48,
        "title": "市场宽度",
        "desc": "2576涨 / 2820跌"
      },
      {
        "score": 43,
        "title": "成交热度",
        "desc": "两市 1.82万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 64,
        "title": "赚钱效应",
        "desc": "49涨停 / 2跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3875.60",
        "change": "-0.41%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13409.91",
        "change": "-0.33%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3298.31",
        "change": "-0.40%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1606.29",
        "change": "-0.61%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.82万亿",
        "change": "缩量160亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.08%",
        "change": "5553只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "2576 / 2820",
        "change": "占比 47.7%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "49 / 2",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 25,
      "rawScore": 36.48,
      "temperatureScore": 27.78,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 50,
      "delta": -25,
      "funddb": {
        "score": 24,
        "status": "极度恐惧",
        "tradeDate": "2026.09.17",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 49.59,
          "mappedScore": 33.77,
          "calibration": 0.0,
          "appliedCalibration": 0.0,
          "calibrationNotes": [],
          "priceStrength": 54,
          "participation": 38,
          "limitScore": 96,
          "median": -0.08,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 23.69,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 34,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.17",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 26.99,
                "weight": 0.18,
                "status": "ready",
                "value": 25.9068,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 11.79,
                "weight": 0.2,
                "status": "ready",
                "value": 0.5158,
                "detail": "28/5428 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 9.43,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.9227,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 18.85,
                "weight": 0.26,
                "status": "ready",
                "value": -2.9731,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 54,
          "weight": "20%",
          "desc": "2576 / 2820，49 / 2"
        },
        {
          "name": "指数路径",
          "score": 32,
          "weight": "20%",
          "desc": "四大指数平均 -0.44%"
        },
        {
          "name": "流动性",
          "score": 35,
          "weight": "10%",
          "desc": "1.82万亿 缩量160亿"
        },
        {
          "name": "恐贪风险",
          "score": 24,
          "weight": "32%",
          "desc": "自算恐贪 24 / 极度恐惧"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 36.5，再用情绪温度映射与共振修正下修至 25。当前多数因子偏弱，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 2576，市场宽度接近均衡，局部赚钱效应仍在",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.41%，深证成指 -0.33%，创业板指 -0.40%",
      "PCB走弱，高位硬科技杀估值明显",
      "两市成交额 1.82万亿，缩量160亿，资金承接不足，前一交易日 2026.09.16",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约57.8%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "机器人 / 工业母机 / 低空",
        "note": "三一重工、博云新材、宇树科技等成交额前排集中，成交占比约1.2%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "其他养殖",
        "note": "其他养殖涨幅+5.13%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业 / 高股息",
        "note": "长江电力、中国平安、工商银行等成交额前排集中，成交占比约2.0%",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "种子生产",
        "note": "种子生产涨幅+7.86%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "PCB",
        "note": "PCB走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.09.17",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-17T17:53:13+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.16",
    "closeTime": "15:00",
    "badge": "9月16日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.16 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 68,
    "mood": "偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨4170家，强势91家，成交1.84万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 78,
        "title": "市场宽度",
        "desc": "4170涨 / 1189跌"
      },
      {
        "score": 52,
        "title": "成交热度",
        "desc": "两市 1.84万亿"
      },
      {
        "score": 74,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "91涨停 / 4跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3891.60",
        "change": "+0.71%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "13454.74",
        "change": "+1.26%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3311.47",
        "change": "+1.96%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1616.19",
        "change": "+4.14%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.84万亿",
        "change": "放量2264亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.98%",
        "change": "5550只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4170 / 1189",
        "change": "占比 77.8%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "91 / 4",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 70,
      "rawScore": 58.92,
      "temperatureScore": 67.17,
      "resonanceAdjustment": 2.8,
      "structuralAdjustment": 0,
      "structuralFloor": 65,
      "resonanceNotes": [
        "多数因子偏强",
        "结构分化抑制极值",
        "原口径确认强度"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 68,
      "delta": 2,
      "funddb": {
        "score": 25,
        "status": "恐惧",
        "tradeDate": "2026.09.16",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 87.75,
          "mappedScore": 50.67,
          "calibration": 8.0,
          "appliedCalibration": 2.8,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio",
            "index-confirmed-strength"
          ],
          "priceStrength": 77,
          "participation": 62,
          "limitScore": 96,
          "median": 0.98,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 24.55,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 53,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.16",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 23.42,
                "weight": 0.18,
                "status": "ready",
                "value": 28.0797,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 15.45,
                "weight": 0.2,
                "status": "ready",
                "value": 0.6267,
                "detail": "34/5425 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 6.97,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -2.0282,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 23.36,
                "weight": 0.26,
                "status": "ready",
                "value": -2.4134,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 80,
          "weight": "20%",
          "desc": "4170 / 1189，91 / 4"
        },
        {
          "name": "指数路径",
          "score": 80,
          "weight": "20%",
          "desc": "四大指数平均 +2.02%"
        },
        {
          "name": "流动性",
          "score": 56,
          "weight": "10%",
          "desc": "1.84万亿 放量2264亿"
        },
        {
          "name": "恐贪风险",
          "score": 25,
          "weight": "32%",
          "desc": "自算恐贪 25 / 恐惧 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 74,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 58.9，再用情绪温度映射与共振修正上修至 70。当前多数因子偏强;结构分化抑制极值;原口径确认强度，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4170，占比 77.8%，市场宽度偏强",
      "PCB、CPO、光模块等科技线共振，核心股维持强势",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "两市成交额 1.84万亿，较前一日继续放量，前一交易日 2026.09.15"
    ],
    "bearFactors": [
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "光刻机",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.09.16",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在1.84万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-16T17:48:31+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.15",
    "closeTime": "15:00",
    "badge": "9月15日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.15 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 33,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨1120家，强势32家，成交1.61万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 20,
        "title": "市场宽度",
        "desc": "1120涨 / 4376跌"
      },
      {
        "score": 37,
        "title": "成交热度",
        "desc": "两市 1.61万亿"
      },
      {
        "score": 44,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 36,
        "title": "赚钱效应",
        "desc": "32涨停 / 33跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3864.28",
        "change": "-0.54%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13287.97",
        "change": "-0.72%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3247.92",
        "change": "-1.15%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1551.96",
        "change": "+1.55%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.61万亿",
        "change": "缩量165亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.50%",
        "change": "5548只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1120 / 4376",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "32 / 33",
        "change": "亏钱效应扩散",
        "tone": "green"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 18,
      "rawScore": 30.06,
      "temperatureScore": 21.72,
      "resonanceAdjustment": -4.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 33,
      "delta": -15,
      "funddb": {
        "score": 17,
        "status": "极度恐惧",
        "tradeDate": "2026.09.15",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 27.77,
          "mappedScore": 24.1,
          "calibration": -5.0,
          "appliedCalibration": -5.0,
          "calibrationNotes": [
            "weak-median",
            "limit-down-dominance"
          ],
          "priceStrength": 28,
          "participation": 34,
          "limitScore": 49,
          "median": -1.5,
          "penalties": [
            "跌停多于涨停",
            "缩量弱宽度"
          ],
          "boosts": [],
          "ifindFactorScore": 16.92,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 19,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.15",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 24.44,
                "weight": 0.18,
                "status": "ready",
                "value": 27.4638,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 3.66,
                "weight": 0.2,
                "status": "ready",
                "value": 0.2581,
                "detail": "14/5424 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 6.15,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -2.1177,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 2.87,
                "weight": 0.26,
                "status": "ready",
                "value": -5.9162,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 26,
          "weight": "20%",
          "desc": "1120 / 4376，32 / 33"
        },
        {
          "name": "指数路径",
          "score": 43,
          "weight": "20%",
          "desc": "四大指数平均 -0.21%"
        },
        {
          "name": "流动性",
          "score": 29,
          "weight": "10%",
          "desc": "1.61万亿 缩量165亿"
        },
        {
          "name": "恐贪风险",
          "score": 17,
          "weight": "32%",
          "desc": "自算恐贪 17 / 极度恐惧 / 跌停多于涨停、缩量弱宽度"
        },
        {
          "name": "主线结构",
          "score": 44,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 30.1，再用情绪温度映射与共振修正下修至 18。当前多数因子偏弱;原口径确认弱度，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "稀土涨幅靠前，但成交主线仍以通信设备 / 光模块 / 光纤为核心",
      "CPO / 光模块 / 铜缆主线逆势活跃，中际旭创、天孚通信等核心股仍有承接",
      "成交额前200中通信设备 / 光模块 / 光纤占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.54%，深证成指 -0.72%，创业板指 -1.15%",
      "两市成交额 1.61万亿，缩量165亿，资金承接不足，前一交易日 2026.09.14",
      "早盘冲高后回落，午后探低，收盘靠近低位，日内承接偏弱",
      "上涨家数仅 1120，占比 20.4%，个股宽度偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "消费电子 / 免税 / 稀土",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.09.15",
    "observation": "观察重点：通信设备 / 光模块 / 光纤能否继续放量，盘中承接能否改善，成交额能否维持在1.61万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-15T17:51:20+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.14",
    "closeTime": "15:00",
    "badge": "9月14日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.14 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 55,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度偏冷，盘中路径待确认，上涨3126家，强势56家，成交1.63万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 58,
        "title": "市场宽度",
        "desc": "3126涨 / 2224跌"
      },
      {
        "score": 35,
        "title": "成交热度",
        "desc": "两市 1.63万亿"
      },
      {
        "score": 58,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 68,
        "title": "赚钱效应",
        "desc": "56涨停 / 18跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3885.33",
        "change": "-0.07%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13384.57",
        "change": "-0.64%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3285.58",
        "change": "-1.10%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1528.27",
        "change": "-1.62%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.63万亿",
        "change": "缩量3427亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.28%",
        "change": "5550只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3126 / 2224",
        "change": "占比 58.4%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "56 / 18",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 26,
      "rawScore": 37.1,
      "temperatureScore": 28.41,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 55,
      "delta": -29,
      "funddb": {
        "score": 18,
        "status": "极度恐惧",
        "tradeDate": "2026.09.14",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 54.88,
          "mappedScore": 36.11,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 61,
          "participation": 38,
          "limitScore": 76,
          "median": 0.28,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 17.99,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 37,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.14",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 23.48,
                "weight": 0.18,
                "status": "ready",
                "value": 27.5536,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 9.35,
                "weight": 0.2,
                "status": "ready",
                "value": 0.4607,
                "detail": "25/5426 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 6.15,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -2.033,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 3.28,
                "weight": 0.26,
                "status": "ready",
                "value": -5.6187,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 62,
          "weight": "20%",
          "desc": "3126 / 2224，56 / 18"
        },
        {
          "name": "指数路径",
          "score": 29,
          "weight": "20%",
          "desc": "四大指数平均 -0.86%"
        },
        {
          "name": "流动性",
          "score": 27,
          "weight": "10%",
          "desc": "1.63万亿 缩量3427亿"
        },
        {
          "name": "恐贪风险",
          "score": 18,
          "weight": "32%",
          "desc": "自算恐贪 18 / 极度恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 58,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 37.1，再用情绪温度映射与共振修正下修至 26。当前多数因子偏弱，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3126，占比 58.4%，情绪宽度明显优于指数",
      "横向通用软件等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "CPO / 光模块 / 铜缆主线逆势活跃，中际旭创、天孚通信等核心股仍有承接",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.07%，深证成指 -0.64%，创业板指 -1.10%",
      "两市成交额 1.63万亿，缩量3427亿，资金承接不足，前一交易日 2026.09.11",
      "强势股 56 家，短线强度偏弱",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约57.1%",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "中芯国际、兆易创新、海光信息等成交额前排集中，成交占比约14.4%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "AI应用 / 软件 / 数据要素",
        "note": "万华化学、三六零、东方财富等成交额前排集中，成交占比约1.8%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "有色 / 小金属 / 稀土",
        "note": "洛阳钼业、紫金矿业、中国海油等成交额前排集中，成交占比约3.1%",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "医疗研发外包",
        "note": "医疗研发外包涨幅+5.66%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "粮食种植",
        "note": "粮食种植跌幅-5.87%，退潮压力需要跟踪",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.09.14",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中路径能否转强，成交额能否维持在1.63万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-14T18:09:31+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.11",
    "closeTime": "15:00",
    "badge": "9月11日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.11 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 36,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度冰点，盘中下探后修复，收盘靠近日内高位，上涨643家，强势40家，成交1.97万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 12,
        "title": "市场宽度",
        "desc": "643涨 / 4870跌"
      },
      {
        "score": 55,
        "title": "成交热度",
        "desc": "两市 1.97万亿"
      },
      {
        "score": 43,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 43,
        "title": "赚钱效应",
        "desc": "40涨停 / 21跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3888.11",
        "change": "-1.18%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13471.26",
        "change": "-1.08%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3322.04",
        "change": "-0.49%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1553.39",
        "change": "-1.01%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.97万亿",
        "change": "放量3248亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-2.21%",
        "change": "5550只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "643 / 4870",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "40 / 21",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 19,
      "rawScore": 29.92,
      "temperatureScore": 21.6,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 36,
      "delta": -17,
      "funddb": {
        "score": 19,
        "status": "极度恐惧",
        "tradeDate": "2026.09.11",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 28.15,
          "mappedScore": 24.27,
          "calibration": -5.0,
          "appliedCalibration": -5.0,
          "calibrationNotes": [
            "weak-median",
            "very-low-up-ratio"
          ],
          "priceStrength": 25,
          "participation": 53,
          "limitScore": 66,
          "median": -2.21,
          "penalties": [
            "中位数深跌"
          ],
          "boosts": [],
          "ifindFactorScore": 18.91,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 19,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.11",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 24.03,
                "weight": 0.18,
                "status": "ready",
                "value": 27.3868,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 1.22,
                "weight": 0.2,
                "status": "ready",
                "value": 0.1659,
                "detail": "9/5424 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 4.1,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -2.2162,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 13.93,
                "weight": 0.26,
                "status": "ready",
                "value": -3.4714,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 23,
          "weight": "20%",
          "desc": "643 / 4870，40 / 21"
        },
        {
          "name": "指数路径",
          "score": 28,
          "weight": "20%",
          "desc": "四大指数平均 -0.94%"
        },
        {
          "name": "流动性",
          "score": 59,
          "weight": "10%",
          "desc": "1.97万亿 放量3248亿"
        },
        {
          "name": "恐贪风险",
          "score": 19,
          "weight": "32%",
          "desc": "自算恐贪 19 / 极度恐惧 / 中位数深跌"
        },
        {
          "name": "主线结构",
          "score": 43,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 29.9，再用情绪温度映射与共振修正下修至 19。当前多数因子偏弱，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆主线逆势活跃，中际旭创、天孚通信等核心股仍有承接",
      "成交额前200中通信设备 / 光模块 / 光纤占比较高，主线资金未完全扩散",
      "两市成交额 1.97万亿，较前一日继续放量，前一交易日 2026.09.10",
      "盘中下探后修复，收盘靠近日内高位，低位承接有所改善"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -1.18%，深证成指 -1.08%，创业板指 -0.49%",
      "指数下跌但成交额放量3248亿，放量分歧明显升温",
      "盘中振幅偏大，修复并非单边走强",
      "上涨家数仅 643，占比 11.7%，个股宽度偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "兵装重组概念",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.09.11",
    "observation": "观察重点：通信设备 / 光模块 / 光纤能否继续放量，盘中修复能否延续，成交额能否维持在1.97万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-11T17:42:56+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.10",
    "closeTime": "15:00",
    "badge": "9月10日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.10 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 35,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，收盘弱于开盘，上涨955家，强势40家，成交1.65万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 17,
        "title": "市场宽度",
        "desc": "955涨 / 4512跌"
      },
      {
        "score": 35,
        "title": "成交热度",
        "desc": "两市 1.65万亿"
      },
      {
        "score": 43,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 49,
        "title": "赚钱效应",
        "desc": "40涨停 / 13跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3934.40",
        "change": "-0.43%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13617.67",
        "change": "-0.77%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3338.42",
        "change": "-0.49%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1569.22",
        "change": "-0.69%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.65万亿",
        "change": "缩量2085亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.49%",
        "change": "5549只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "955 / 4512",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "40 / 13",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 23,
      "rawScore": 35.36,
      "temperatureScore": 26.65,
      "resonanceAdjustment": -4.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 35,
      "delta": -12,
      "funddb": {
        "score": 41,
        "status": "恐惧",
        "tradeDate": "2026.09.10",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 33.21,
          "mappedScore": 26.51,
          "calibration": 0.0,
          "appliedCalibration": 0.0,
          "calibrationNotes": [],
          "priceStrength": 31,
          "participation": 33,
          "limitScore": 75,
          "median": -1.49,
          "penalties": [
            "缩量弱宽度"
          ],
          "boosts": [],
          "ifindFactorScore": 40.93,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 27,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.10",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 49.11,
                "weight": 0.18,
                "status": "ready",
                "value": 20.5844,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 11.38,
                "weight": 0.2,
                "status": "ready",
                "value": 0.5348,
                "detail": "29/5423 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 90.16,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.1361,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 20.49,
                "weight": 0.26,
                "status": "ready",
                "value": -2.6342,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 28,
          "weight": "20%",
          "desc": "955 / 4512，40 / 13"
        },
        {
          "name": "指数路径",
          "score": 31,
          "weight": "20%",
          "desc": "四大指数平均 -0.59%"
        },
        {
          "name": "流动性",
          "score": 27,
          "weight": "10%",
          "desc": "1.65万亿 缩量2085亿"
        },
        {
          "name": "恐贪风险",
          "score": 41,
          "weight": "32%",
          "desc": "自算恐贪 41 / 恐惧 / 缩量弱宽度"
        },
        {
          "name": "主线结构",
          "score": 43,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 35.4，再用情绪温度映射与共振修正下修至 23。当前多数因子偏弱;原口径确认弱度，恐贪代理口径为恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.43%，深证成指 -0.77%，创业板指 -0.49%",
      "通信线缆及配套走弱，高位硬科技杀估值明显",
      "两市成交额 1.65万亿，缩量2085亿，资金承接不足，前一交易日 2026.09.09",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "中船系",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.09.10",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-10T17:41:47+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.09",
    "closeTime": "15:00",
    "badge": "9月9日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.09 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 44,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度偏冷，早盘冲高后回落，收盘弱于开盘，上涨1794家，强势49家，成交1.86万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 33,
        "title": "市场宽度",
        "desc": "1794涨 / 3642跌"
      },
      {
        "score": 40,
        "title": "成交热度",
        "desc": "两市 1.86万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 59,
        "title": "赚钱效应",
        "desc": "49涨停 / 7跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3951.51",
        "change": "+0.28%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "13723.32",
        "change": "+0.15%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3354.97",
        "change": "-0.14%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1580.06",
        "change": "-0.69%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.86万亿",
        "change": "缩量1047亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.68%",
        "change": "5550只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1794 / 3642",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "49 / 7",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 35,
      "rawScore": 42.62,
      "temperatureScore": 34.73,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 44,
      "delta": -9,
      "funddb": {
        "score": 41,
        "status": "恐惧",
        "tradeDate": "2026.09.09",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 48.17,
          "mappedScore": 33.14,
          "calibration": 0.0,
          "appliedCalibration": 0.0,
          "calibrationNotes": [],
          "priceStrength": 44,
          "participation": 37,
          "limitScore": 88,
          "median": -0.68,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 40.79,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 33,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.09",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 50.77,
                "weight": 0.18,
                "status": "ready",
                "value": 20.2865,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 15.04,
                "weight": 0.2,
                "status": "ready",
                "value": 0.6636,
                "detail": "36/5425 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 84.84,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.2755,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 19.26,
                "weight": 0.26,
                "status": "ready",
                "value": -2.6747,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 42,
          "weight": "20%",
          "desc": "1794 / 3642，49 / 7"
        },
        {
          "name": "指数路径",
          "score": 49,
          "weight": "20%",
          "desc": "四大指数平均 -0.10%"
        },
        {
          "name": "流动性",
          "score": 32,
          "weight": "10%",
          "desc": "1.86万亿 缩量1047亿"
        },
        {
          "name": "恐贪风险",
          "score": 41,
          "weight": "32%",
          "desc": "自算恐贪 41 / 恐惧"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 42.6，再用情绪温度映射与共振修正下修至 35。当前未出现明显单边共振，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "金属铅涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "多数指数收红：上证 +0.28%，深证成指 +0.15%，创业板指 -0.14%"
    ],
    "bearFactors": [
      "指数修复但成交额缩量1047亿，增量资金仍需确认，前一交易日 2026.09.08",
      "科创次新股走弱，高位硬科技杀估值明显",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温",
      "上涨家数仅 1794，占比 33.0%，个股宽度偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约56.0%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "AI应用 / 软件 / 数据要素",
        "note": "万华化学、东方电气、东方财富等成交额前排集中，成交占比约3.2%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "航运",
        "note": "航运涨幅+3.62%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业 / 高股息",
        "note": "大唐发电、华电辽能、长江电力等成交额前排集中，成交占比约2.4%",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "海洋捕捞",
        "note": "海洋捕捞涨幅+5.60%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "科创次新股",
        "note": "科创次新股走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.09.09",
    "observation": "观察重点：金属铅脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-09T18:06:53+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.08",
    "closeTime": "15:00",
    "badge": "9月8日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.08 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 57,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度修复，早盘冲高后回落，午后探低，收盘靠近低位，上涨3417家，强势74家，成交1.96万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 63,
        "title": "市场宽度",
        "desc": "3417涨 / 2026跌"
      },
      {
        "score": 53,
        "title": "成交热度",
        "desc": "两市 1.96万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 82,
        "title": "赚钱效应",
        "desc": "74涨停 / 1跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3940.55",
        "change": "+0.20%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "13703.21",
        "change": "-0.52%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3359.72",
        "change": "-1.15%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1591.00",
        "change": "-1.52%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.96万亿",
        "change": "放量143亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.54%",
        "change": "5549只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3417 / 2026",
        "change": "占比 62.8%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "74 / 1",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 53,
      "rawScore": 48.72,
      "temperatureScore": 44.85,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 8,
      "structuralFloor": 53,
      "resonanceNotes": [
        "结构修复抑制慢因子过度降温"
      ],
      "mood": "修复",
      "moodTone": "red",
      "originalScore": 57,
      "delta": -4,
      "funddb": {
        "score": 41,
        "status": "恐惧",
        "tradeDate": "2026.09.08",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 64.12,
          "mappedScore": 40.2,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 68,
          "participation": 53,
          "limitScore": 99,
          "median": 0.54,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 40.85,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 41,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.08",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 49.58,
                "weight": 0.18,
                "status": "ready",
                "value": 20.549,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 13.41,
                "weight": 0.2,
                "status": "ready",
                "value": 0.6082,
                "detail": "33/5426 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 85.25,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.2575,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 21.31,
                "weight": 0.26,
                "status": "ready",
                "value": -2.3901,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 70,
          "weight": "20%",
          "desc": "3417 / 2026，74 / 1"
        },
        {
          "name": "指数路径",
          "score": 39,
          "weight": "20%",
          "desc": "四大指数平均 -0.75%"
        },
        {
          "name": "流动性",
          "score": 57,
          "weight": "10%",
          "desc": "1.96万亿 放量143亿"
        },
        {
          "name": "恐贪风险",
          "score": 41,
          "weight": "32%",
          "desc": "自算恐贪 41 / 恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 48.7，再用情绪温度映射、共振修正与结构修复保护上修至 53。当前结构修复抑制慢因子过度降温，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3417，占比 62.8%，市场宽度偏强",
      "焦炭加工涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "两市成交额 1.96万亿，较前一日继续放量，前一交易日 2026.09.07",
      "仍有单一指数抗跌收红：上证 +0.20%，深证成指 -0.52%，创业板指 -1.15%"
    ],
    "bearFactors": [
      "多数指数收跌：上证 +0.20%，深证成指 -0.52%，创业板指 -1.15%",
      "指数下跌但成交额放量143亿，放量分歧明显升温",
      "半导体走弱，高位硬科技杀估值明显",
      "早盘冲高后回落，午后探低，收盘靠近低位，日内承接偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "AI应用 / 软件 / 数据要素",
        "note": "万华化学、东方财富、中文在线等成交额前排集中，成交占比约3.4%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "新能源汽车 / 汽车电子 / 储能",
        "note": "宁德时代、中国石化、云铝股份等成交额前排集中，成交占比约3.2%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "粮食种植",
        "note": "粮食种植涨幅+7.80%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "医药 / 创新药 / 中药",
        "note": "恒瑞医药、药明康德、凯莱英等成交额前排集中，成交占比约2.4%",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "氮肥",
        "note": "氮肥涨幅+7.16%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体",
        "note": "半导体走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.09.08",
    "observation": "观察重点：煤炭脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-08T17:11:19+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.07",
    "closeTime": "15:00",
    "badge": "9月7日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.07 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 62,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨3167家，强势95家，成交1.95万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 59,
        "title": "市场宽度",
        "desc": "3167涨 / 2196跌"
      },
      {
        "score": 46,
        "title": "成交热度",
        "desc": "两市 1.95万亿"
      },
      {
        "score": 75,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 82,
        "title": "赚钱效应",
        "desc": "95涨停 / 2跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3932.70",
        "change": "+0.07%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "13774.91",
        "change": "+1.91%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3398.68",
        "change": "+3.41%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1615.53",
        "change": "+2.42%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.95万亿",
        "change": "缩量846亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.34%",
        "change": "5549只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3167 / 2196",
        "change": "占比 59.1%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "95 / 2",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 69,
      "rawScore": 58.54,
      "temperatureScore": 66.72,
      "resonanceAdjustment": 2.0,
      "structuralAdjustment": 0,
      "structuralFloor": 58,
      "resonanceNotes": [
        "多数因子偏强"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 62,
      "delta": 7,
      "funddb": {
        "score": 37,
        "status": "恐惧",
        "tradeDate": "2026.09.07",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 81.36,
          "mappedScore": 47.84,
          "calibration": 6.0,
          "appliedCalibration": 2.1,
          "calibrationNotes": [
            "limit-up-spread",
            "index-confirmed-strength"
          ],
          "priceStrength": 66,
          "participation": 51,
          "limitScore": 98,
          "median": 0.34,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 37.3,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 50,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.07",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 48.51,
                "weight": 0.18,
                "status": "ready",
                "value": 20.8323,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 10.98,
                "weight": 0.2,
                "status": "ready",
                "value": 0.5345,
                "detail": "29/5426 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 71.31,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.4246,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 18.85,
                "weight": 0.26,
                "status": "ready",
                "value": -2.85,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 67,
          "weight": "20%",
          "desc": "3167 / 2196，95 / 2"
        },
        {
          "name": "指数路径",
          "score": 80,
          "weight": "20%",
          "desc": "四大指数平均 +1.95%"
        },
        {
          "name": "流动性",
          "score": 38,
          "weight": "10%",
          "desc": "1.95万亿 缩量846亿"
        },
        {
          "name": "恐贪风险",
          "score": 37,
          "weight": "32%",
          "desc": "自算恐贪 37 / 恐惧 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 75,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 58.5，再用情绪温度映射与共振修正上修至 69。当前多数因子偏强，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3167，占比 59.1%，市场宽度偏强",
      "PCB、CPO、光模块等科技线共振，核心股维持强势",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "三大指数集体收红：上证 +0.07%，深证成指 +1.91%，创业板指 +3.41%"
    ],
    "bearFactors": [
      "指数修复但成交额缩量846亿，增量资金仍需确认，前一交易日 2026.09.04",
      "指数修复后仍需观察能否继续向个股扩散",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "共封装光学(CPO)",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.09.07",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在1.95万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-07T18:35:55+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.04",
    "closeTime": "15:00",
    "badge": "9月4日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.04 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 52,
    "mood": "修复",
    "moodTone": "red",
    "summary": "收盘温度偏冷，早盘冲高后回落，午后探低，收盘靠近低位，上涨2444家，强势41家，成交2.03万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 46,
        "title": "市场宽度",
        "desc": "2444涨 / 2914跌"
      },
      {
        "score": 57,
        "title": "成交热度",
        "desc": "两市 2.03万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 64,
        "title": "赚钱效应",
        "desc": "41涨停 / 9跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3930.12",
        "change": "-0.30%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13516.97",
        "change": "-0.79%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3286.55",
        "change": "-0.78%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1577.36",
        "change": "-2.10%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.03万亿",
        "change": "放量2718亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.17%",
        "change": "5548只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "2444 / 2914",
        "change": "占比 45.6%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "41 / 9",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 34,
      "rawScore": 42.04,
      "temperatureScore": 34.0,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 52,
      "delta": -18,
      "funddb": {
        "score": 37,
        "status": "恐惧",
        "tradeDate": "2026.09.04",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 49.07,
          "mappedScore": 33.54,
          "calibration": 0.0,
          "appliedCalibration": 0.0,
          "calibrationNotes": [],
          "priceStrength": 53,
          "participation": 55,
          "limitScore": 82,
          "median": -0.17,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 37.33,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 34,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.04",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 50.35,
                "weight": 0.18,
                "status": "ready",
                "value": 20.9978,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 9.76,
                "weight": 0.2,
                "status": "ready",
                "value": 0.4792,
                "detail": "26/5426 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 78.28,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.3466,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 14.34,
                "weight": 0.26,
                "status": "ready",
                "value": -3.2923,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 52,
          "weight": "20%",
          "desc": "2444 / 2914，41 / 9"
        },
        {
          "name": "指数路径",
          "score": 28,
          "weight": "20%",
          "desc": "四大指数平均 -0.99%"
        },
        {
          "name": "流动性",
          "score": 61,
          "weight": "10%",
          "desc": "2.03万亿 放量2718亿"
        },
        {
          "name": "恐贪风险",
          "score": 37,
          "weight": "32%",
          "desc": "自算恐贪 37 / 恐惧"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 42.0，再用情绪温度映射与共振修正下修至 34。当前未出现明显单边共振，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 2444，市场宽度接近均衡，局部赚钱效应仍在",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 2.03万亿，较前一日继续放量，前一交易日 2026.09.03"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.30%，深证成指 -0.79%，创业板指 -0.78%",
      "指数下跌但成交额放量2718亿，放量分歧明显升温",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "早盘冲高后回落，午后探低，收盘靠近低位，日内承接偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约53.4%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "消费电子 / 免税 / 品牌消费",
        "note": "乳业涨幅+2.47%，成长方向短线承接增强",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "猪肉",
        "note": "猪肉涨幅+5.89%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业 / 高股息",
        "note": "华电辽能、长江电力、中国平安等成交额前排集中，成交占比约3.3%",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "畜禽饲料",
        "note": "畜禽饲料涨幅+7.28%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、CPO、PCB",
        "note": "半导体、CPO、PCB走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.09.04",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-04T15:30:58+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.03",
    "closeTime": "15:00",
    "badge": "9月3日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.03 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 46,
    "mood": "修复",
    "moodTone": "blue",
    "summary": "收盘温度偏冷，早盘冲高后回落，收盘弱于开盘，上涨1846家，强势46家，成交1.76万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 34,
        "title": "市场宽度",
        "desc": "1846涨 / 3570跌"
      },
      {
        "score": 41,
        "title": "成交热度",
        "desc": "两市 1.76万亿"
      },
      {
        "score": 59,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 53,
        "title": "赚钱效应",
        "desc": "46涨停 / 16跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3942.09",
        "change": "+0.02%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "13625.12",
        "change": "+0.10%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3312.54",
        "change": "+0.01%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1611.17",
        "change": "-0.40%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.76万亿",
        "change": "缩量323亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.68%",
        "change": "5549只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1846 / 3570",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "46 / 16",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 39,
      "rawScore": 45.4,
      "temperatureScore": 38.61,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 46,
      "delta": -7,
      "funddb": {
        "score": 39,
        "status": "恐惧",
        "tradeDate": "2026.09.03",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 49.48,
          "mappedScore": 33.72,
          "calibration": 0.0,
          "appliedCalibration": 0.0,
          "calibrationNotes": [],
          "priceStrength": 42,
          "participation": 42,
          "limitScore": 74,
          "median": -0.68,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 39.36,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 34,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.03",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 50.82,
                "weight": 0.18,
                "status": "ready",
                "value": 20.7875,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 10.98,
                "weight": 0.2,
                "status": "ready",
                "value": 0.5343,
                "detail": "29/5428 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 78.28,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.3466,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 20.9,
                "weight": 0.26,
                "status": "ready",
                "value": -2.2876,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 41,
          "weight": "20%",
          "desc": "1846 / 3570，46 / 16"
        },
        {
          "name": "指数路径",
          "score": 54,
          "weight": "20%",
          "desc": "四大指数平均 -0.07%"
        },
        {
          "name": "流动性",
          "score": 33,
          "weight": "10%",
          "desc": "1.76万亿 缩量323亿"
        },
        {
          "name": "恐贪风险",
          "score": 39,
          "weight": "32%",
          "desc": "自算恐贪 39 / 恐惧"
        },
        {
          "name": "主线结构",
          "score": 59,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 45.4，再用情绪温度映射与共振修正下修至 39。当前未出现明显单边共振，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "金属钴涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "PCB、CPO、光模块等科技线共振，核心股维持强势",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "三大指数集体收红：上证 +0.02%，深证成指 +0.10%，创业板指 +0.01%"
    ],
    "bearFactors": [
      "指数修复但成交额缩量323亿，增量资金仍需确认，前一交易日 2026.09.02",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温",
      "上涨家数仅 1846，占比 34.1%，个股宽度偏弱",
      "强势股 46 家，短线强度偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "AI硬件 / CPO / PCB",
        "note": "中际旭创、天孚通信、新易盛共振走强，主线辨识度高",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "半导体 / 自动化设备",
        "note": "成长风格修复，创业板弹性继续释放",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "贵金属 / 指数权重",
        "note": "兼具避险与指数稳定属性，提供情绪缓冲",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "影视院线 / 游戏 / 电商",
        "note": "消费传导方向偏弱，跟风承接明显不足",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.09.03",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中承接能否改善，成交额能否维持在1.76万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-03T17:11:39+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.02",
    "closeTime": "15:00",
    "badge": "9月2日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.02 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 41,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，收盘弱于开盘，上涨1541家，强势54家，成交1.79万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 28,
        "title": "市场宽度",
        "desc": "1541涨 / 3901跌"
      },
      {
        "score": 39,
        "title": "成交热度",
        "desc": "两市 1.79万亿"
      },
      {
        "score": 42,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 58,
        "title": "赚钱效应",
        "desc": "54涨停 / 8跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3941.39",
        "change": "-0.97%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13611.55",
        "change": "-1.88%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3312.24",
        "change": "-2.39%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1617.60",
        "change": "-1.82%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.79万亿",
        "change": "缩量2422亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.95%",
        "change": "5547只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1541 / 3901",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "54 / 8",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 21,
      "rawScore": 35.14,
      "temperatureScore": 26.44,
      "resonanceAdjustment": -5.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多因子偏弱共振"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 41,
      "delta": -20,
      "funddb": {
        "score": 39,
        "status": "恐惧",
        "tradeDate": "2026.09.02",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 43.42,
          "mappedScore": 31.04,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 41,
          "participation": 35,
          "limitScore": 87,
          "median": -0.95,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 38.61,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 32,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.02",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 47.99,
                "weight": 0.18,
                "status": "ready",
                "value": 21.554,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 11.38,
                "weight": 0.2,
                "status": "ready",
                "value": 0.5528,
                "detail": "30/5427 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 78.28,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.3464,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 19.67,
                "weight": 0.26,
                "status": "ready",
                "value": -2.5443,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 38,
          "weight": "20%",
          "desc": "1541 / 3901，54 / 8"
        },
        {
          "name": "指数路径",
          "score": 22,
          "weight": "20%",
          "desc": "四大指数平均 -1.77%"
        },
        {
          "name": "流动性",
          "score": 31,
          "weight": "10%",
          "desc": "1.79万亿 缩量2422亿"
        },
        {
          "name": "恐贪风险",
          "score": 39,
          "weight": "32%",
          "desc": "自算恐贪 39 / 恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 42,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 35.1，再用情绪温度映射与共振修正下修至 21。当前多因子偏弱共振，恐贪代理口径为恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆主线逆势活跃，中际旭创、天孚通信等核心股仍有承接",
      "成交额前200中通信设备 / 光模块 / 光纤占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.97%，深证成指 -1.88%，创业板指 -2.39%",
      "两市成交额 1.79万亿，缩量2422亿，资金承接不足，前一交易日 2026.09.01",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温",
      "上涨家数仅 1541，占比 28.3%，个股宽度偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "培育钻石 / 超硬材料",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.09.02",
    "observation": "观察重点：通信设备 / 光模块 / 光纤能否继续放量，盘中承接能否改善，成交额能否维持在1.79万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-02T17:24:44+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.09.01",
    "closeTime": "15:00",
    "badge": "9月1日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.09.01 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 55,
    "mood": "分化偏多",
    "moodTone": "blue",
    "summary": "指数回调但个股普涨，PCB / CPO / 光模块接力，半导体 / CPO / PCB杀估值加剧，属于宽度修复但主线分化盘",
    "miniGauges": [
      {
        "score": 62,
        "title": "市场宽度",
        "desc": "3387涨 / 2040跌"
      },
      {
        "score": 48,
        "title": "成交热度",
        "desc": "两市 2.03万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 64,
        "title": "赚钱效应",
        "desc": "86涨停 / 0跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3979.89",
        "change": "-0.16%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13872.38",
        "change": "-1.02%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3393.43",
        "change": "-1.32%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1647.53",
        "change": "-2.19%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.03万亿",
        "change": "缩量976亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.57%",
        "change": "5546只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3387 / 2040",
        "change": "占比 62.4%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "86 / 0",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 51,
      "rawScore": 45.46,
      "temperatureScore": 38.7,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 12,
      "structuralFloor": 51,
      "resonanceNotes": [
        "结构修复抑制慢因子过度降温"
      ],
      "mood": "修复",
      "moodTone": "red",
      "originalScore": 55,
      "delta": -4,
      "funddb": {
        "score": 48,
        "status": "中性",
        "tradeDate": "2026.09.01",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 56.8,
          "mappedScore": 36.96,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 62,
          "participation": 42,
          "limitScore": 100,
          "median": 0.57,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 47.71,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 38,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.09.01",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 52.51,
                "weight": 0.18,
                "status": "ready",
                "value": 20.5922,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 16.26,
                "weight": 0.2,
                "status": "ready",
                "value": 0.9399,
                "detail": "51/5426 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 81.97,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.3088,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 45.49,
                "weight": 0.26,
                "status": "ready",
                "value": 0.0686,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 63,
          "weight": "20%",
          "desc": "3387 / 2040，86 / 0"
        },
        {
          "name": "指数路径",
          "score": 27,
          "weight": "20%",
          "desc": "四大指数平均 -1.17%"
        },
        {
          "name": "流动性",
          "score": 40,
          "weight": "10%",
          "desc": "2.03万亿 缩量976亿"
        },
        {
          "name": "恐贪风险",
          "score": 48,
          "weight": "32%",
          "desc": "自算恐贪 48 / 中性 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 45.5，再用情绪温度映射、共振修正与结构修复保护上修至 51。当前结构修复抑制慢因子过度降温，恐贪代理口径为中性，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3387，占比 62.4%，情绪宽度明显优于指数",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "强势股 86 家，局部短线情绪仍有承接"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.16%，深证成指 -1.02%，创业板指 -1.32%",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "两市成交额 2.03万亿，缩量976亿，资金承接不足，前一交易日 2026.08.31",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "机器人 / 人形机器人",
        "note": "高辨识度分支继续活跃，但指数急跌下追高资金需谨慎",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "航天装备 / 军工",
        "note": "强势题材横向扩散，说明短线资金仍在寻找承接方向",
        "tone": "up"
      },
      {
        "tag": "回流",
        "name": "AI应用 / 计算机 / 电力 / 公用事业",
        "note": "低位和避险方向出现资金回流，与高位分歧并行",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、CPO、PCB",
        "note": "高位科技与指数权重承压，短线拥挤度仍需消化",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.09.01",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-09-01T17:52:02+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.31",
    "closeTime": "15:00",
    "badge": "8月31日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.31 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 63,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨3181家，强势89家，成交2.13万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 59,
        "title": "市场宽度",
        "desc": "3181涨 / 2218跌"
      },
      {
        "score": 57,
        "title": "成交热度",
        "desc": "两市 2.13万亿"
      },
      {
        "score": 73,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 76,
        "title": "赚钱效应",
        "desc": "89涨停 / 13跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3986.30",
        "change": "+0.86%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14015.00",
        "change": "+0.44%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3438.68",
        "change": "+0.42%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1684.39",
        "change": "+1.34%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.13万亿",
        "change": "放量293亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.45%",
        "change": "5545只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3181 / 2218",
        "change": "占比 58.9%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "89 / 13",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 76,
      "rawScore": 61.92,
      "temperatureScore": 70.55,
      "resonanceAdjustment": 5.0,
      "structuralAdjustment": 0,
      "structuralFloor": 59,
      "resonanceNotes": [
        "多因子偏强共振"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 63,
      "delta": 13,
      "funddb": {
        "score": 49,
        "status": "中性",
        "tradeDate": "2026.08.31",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 72.95,
          "mappedScore": 44.12,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 64,
          "participation": 65,
          "limitScore": 87,
          "median": 0.45,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 48.99,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 45,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.31",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 49.67,
                "weight": 0.18,
                "status": "ready",
                "value": 20.7954,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 15.85,
                "weight": 0.2,
                "status": "ready",
                "value": 0.8108,
                "detail": "44/5427 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 66.39,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.5078,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 62.3,
                "weight": 0.26,
                "status": "ready",
                "value": 1.659,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 65,
          "weight": "20%",
          "desc": "3181 / 2218，89 / 13"
        },
        {
          "name": "指数路径",
          "score": 70,
          "weight": "20%",
          "desc": "四大指数平均 +0.77%"
        },
        {
          "name": "流动性",
          "score": 61,
          "weight": "10%",
          "desc": "2.13万亿 放量293亿"
        },
        {
          "name": "恐贪风险",
          "score": 49,
          "weight": "32%",
          "desc": "自算恐贪 49 / 中性 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 73,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 61.9，再用情绪温度映射与共振修正上修至 76。当前多因子偏强共振，恐贪代理口径为中性，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3181，占比 58.9%，市场宽度偏强",
      "快手概念等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "PCB、CPO、光模块等科技线共振，核心股维持强势",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "指数修复后仍需观察能否继续向个股扩散",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "AI视频",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.08.31",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在2.13万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-31T18:22:15+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.28",
    "closeTime": "15:00",
    "badge": "8月28日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.28 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 54,
    "mood": "修复",
    "moodTone": "red",
    "summary": "收盘温度偏冷，早盘冲高后回落，午后探低，收盘靠近低位，上涨3013家，强势82家，成交2.10万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 56,
        "title": "市场宽度",
        "desc": "3013涨 / 2390跌"
      },
      {
        "score": 50,
        "title": "成交热度",
        "desc": "两市 2.10万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 64,
        "title": "赚钱效应",
        "desc": "82涨停 / 2跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3952.18",
        "change": "-0.11%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13953.07",
        "change": "-0.68%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3424.40",
        "change": "-1.41%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1662.15",
        "change": "-1.85%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.10万亿",
        "change": "缩量242亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.22%",
        "change": "5547只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3013 / 2390",
        "change": "占比 55.8%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "82 / 2",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 38,
      "rawScore": 44.74,
      "temperatureScore": 37.62,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 54,
      "delta": -16,
      "funddb": {
        "score": 47,
        "status": "中性",
        "tradeDate": "2026.08.28",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 55.36,
          "mappedScore": 36.33,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 58,
          "participation": 43,
          "limitScore": 98,
          "median": 0.22,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 46.63,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 37,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.28",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 51.73,
                "weight": 0.18,
                "status": "ready",
                "value": 20.4092,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 12.2,
                "weight": 0.2,
                "status": "ready",
                "value": 0.6263,
                "detail": "34/5429 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 77.87,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.3379,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 47.54,
                "weight": 0.26,
                "status": "ready",
                "value": 0.291,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 59,
          "weight": "20%",
          "desc": "3013 / 2390，82 / 2"
        },
        {
          "name": "指数路径",
          "score": 28,
          "weight": "20%",
          "desc": "四大指数平均 -1.01%"
        },
        {
          "name": "流动性",
          "score": 42,
          "weight": "10%",
          "desc": "2.10万亿 缩量242亿"
        },
        {
          "name": "恐贪风险",
          "score": 47,
          "weight": "32%",
          "desc": "自算恐贪 47 / 中性 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 44.7，再用情绪温度映射与共振修正下修至 38。当前未出现明显单边共振，恐贪代理口径为中性，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3013，占比 55.8%，情绪宽度明显优于指数",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "强势股 82 家，局部短线情绪仍有承接"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.11%，深证成指 -0.68%，创业板指 -1.41%",
      "半导体、CPO走弱，高位硬科技杀估值明显",
      "两市成交额 2.10万亿，缩量242亿，资金承接不足，前一交易日 2026.08.27",
      "早盘冲高后回落，午后探低，收盘靠近低位，日内承接偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "机器人 / 人形机器人",
        "note": "高辨识度分支继续活跃，但指数急跌下追高资金需谨慎",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "航天装备 / 军工",
        "note": "强势题材横向扩散，说明短线资金仍在寻找承接方向",
        "tone": "up"
      },
      {
        "tag": "回流",
        "name": "AI应用 / 计算机 / 电力 / 公用事业",
        "note": "低位和避险方向出现资金回流，与高位分歧并行",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、CPO",
        "note": "高位科技与指数权重承压，短线拥挤度仍需消化",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.08.28",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-28T17:56:27+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.27",
    "closeTime": "15:00",
    "badge": "8月27日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.27 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 66,
    "mood": "偏热",
    "moodTone": "red",
    "summary": "收盘温度亢奋，盘中下探后修复，收盘靠近日内高位，上涨3394家，强势78家，成交2.13万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 64,
        "title": "市场宽度",
        "desc": "3394涨 / 1944跌"
      },
      {
        "score": 59,
        "title": "成交热度",
        "desc": "两市 2.13万亿"
      },
      {
        "score": 74,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 80,
        "title": "赚钱效应",
        "desc": "78涨停 / 4跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3956.57",
        "change": "+1.13%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14048.88",
        "change": "+1.50%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3473.35",
        "change": "+1.71%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1693.48",
        "change": "+3.77%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.13万亿",
        "change": "放量3172亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.53%",
        "change": "5547只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3394 / 1944",
        "change": "占比 63.6%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "78 / 4",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 80,
      "rawScore": 64.98,
      "temperatureScore": 73.68,
      "resonanceAdjustment": 6.5,
      "structuralAdjustment": 0,
      "structuralFloor": 60,
      "resonanceNotes": [
        "多因子偏强共振",
        "原口径确认强度"
      ],
      "mood": "亢奋",
      "moodTone": "red",
      "originalScore": 66,
      "delta": 14,
      "funddb": {
        "score": 48,
        "status": "中性",
        "tradeDate": "2026.08.27",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 84.35,
          "mappedScore": 49.17,
          "calibration": 6.0,
          "appliedCalibration": 2.1,
          "calibrationNotes": [
            "limit-up-spread",
            "index-confirmed-strength"
          ],
          "priceStrength": 68,
          "participation": 67,
          "limitScore": 95,
          "median": 0.53,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 47.63,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 51,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.27",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 50.8,
                "weight": 0.18,
                "status": "ready",
                "value": 20.3669,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 13.01,
                "weight": 0.2,
                "status": "ready",
                "value": 0.6817,
                "detail": "37/5428 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 63.52,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.5502,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 60.25,
                "weight": 0.26,
                "status": "ready",
                "value": 1.5309,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 70,
          "weight": "20%",
          "desc": "3394 / 1944，78 / 4"
        },
        {
          "name": "指数路径",
          "score": 80,
          "weight": "20%",
          "desc": "四大指数平均 +2.03%"
        },
        {
          "name": "流动性",
          "score": 63,
          "weight": "10%",
          "desc": "2.13万亿 放量3172亿"
        },
        {
          "name": "恐贪风险",
          "score": 48,
          "weight": "32%",
          "desc": "自算恐贪 48 / 中性 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 74,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 65.0，再用情绪温度映射与共振修正上修至 80。当前多因子偏强共振;原口径确认强度，恐贪代理口径为中性，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3394，占比 63.6%，市场宽度偏强",
      "非金属材料涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "PCB、CPO、光模块等科技线共振，核心股维持强势",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "国家大基金持股",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.08.27",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在2.13万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-27T16:51:21+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.26",
    "closeTime": "15:00",
    "badge": "8月26日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.26 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 52,
    "mood": "修复",
    "moodTone": "red",
    "summary": "收盘温度修复，盘中下探后修复，收盘靠近日内高位，上涨2946家，强势56家，成交1.81万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 55,
        "title": "市场宽度",
        "desc": "2946涨 / 2448跌"
      },
      {
        "score": 42,
        "title": "成交热度",
        "desc": "两市 1.81万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 77,
        "title": "赚钱效应",
        "desc": "56涨停 / 2跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3912.52",
        "change": "+0.59%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "13841.33",
        "change": "+0.69%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3414.88",
        "change": "+0.51%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1632.02",
        "change": "+1.71%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.81万亿",
        "change": "缩量231亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.16%",
        "change": "5547只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "2946 / 2448",
        "change": "占比 54.6%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "56 / 2",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 50,
      "rawScore": 50.14,
      "temperatureScore": 50.14,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "修复",
      "moodTone": "red",
      "originalScore": 52,
      "delta": -2,
      "funddb": {
        "score": 37,
        "status": "恐惧",
        "tradeDate": "2026.08.26",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 72.88,
          "mappedScore": 44.09,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 62,
          "participation": 38,
          "limitScore": 97,
          "median": 0.16,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 36.73,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 45,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.26",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 20.96,
                "weight": 0.18,
                "status": "ready",
                "value": 28.6164,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 8.54,
                "weight": 0.2,
                "status": "ready",
                "value": 0.4237,
                "detail": "23/5428 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 65.16,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.5226,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 41.39,
                "weight": 0.26,
                "status": "ready",
                "value": -0.4747,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 63,
          "weight": "20%",
          "desc": "2946 / 2448，56 / 2"
        },
        {
          "name": "指数路径",
          "score": 71,
          "weight": "20%",
          "desc": "四大指数平均 +0.88%"
        },
        {
          "name": "流动性",
          "score": 34,
          "weight": "10%",
          "desc": "1.81万亿 缩量231亿"
        },
        {
          "name": "恐贪风险",
          "score": 37,
          "weight": "32%",
          "desc": "自算恐贪 37 / 恐惧 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 50.1，再用情绪温度映射与共振修正持平至 50。当前未出现明显单边共振，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 2946，市场宽度接近均衡，局部赚钱效应仍在",
      "金属锌涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "三大指数集体收红：上证 +0.59%，深证成指 +0.69%，创业板指 +0.51%"
    ],
    "bearFactors": [
      "指数修复但成交额缩量231亿，增量资金仍需确认，前一交易日 2026.08.25",
      "半导体、CPO走弱，高位硬科技杀估值明显",
      "盘中振幅偏大，修复并非单边走强",
      "强势股 56 家，短线强度偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "金属锌",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.08.26",
    "observation": "观察重点：金属锌脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-26T17:21:27+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.25",
    "closeTime": "15:00",
    "badge": "8月25日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.25 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 58,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度偏冷，盘中下探后修复，收盘靠近日内高位，上涨4234家，强势70家，成交1.83万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 77,
        "title": "市场宽度",
        "desc": "4234涨 / 1246跌"
      },
      {
        "score": 40,
        "title": "成交热度",
        "desc": "两市 1.83万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 83,
        "title": "赚钱效应",
        "desc": "70涨停 / 4跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3889.44",
        "change": "+0.19%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "13745.87",
        "change": "-0.35%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3397.52",
        "change": "-1.00%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1604.59",
        "change": "+0.14%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.83万亿",
        "change": "缩量1756亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.47%",
        "change": "5546只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4234 / 1246",
        "change": "占比 77.3%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "70 / 4",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 42,
      "rawScore": 47.58,
      "temperatureScore": 42.35,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 58,
      "delta": -16,
      "funddb": {
        "score": 34,
        "status": "恐惧",
        "tradeDate": "2026.08.25",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 67.33,
          "mappedScore": 41.63,
          "calibration": 4.0,
          "appliedCalibration": 1.4,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio"
          ],
          "priceStrength": 77,
          "participation": 37,
          "limitScore": 95,
          "median": 1.47,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 33.51,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 43,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.25",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 18.04,
                "weight": 0.18,
                "status": "ready",
                "value": 29.656,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 6.91,
                "weight": 0.2,
                "status": "ready",
                "value": 0.3685,
                "detail": "20/5427 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 53.69,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.6642,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 39.34,
                "weight": 0.26,
                "status": "ready",
                "value": -0.6408,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 79,
          "weight": "20%",
          "desc": "4234 / 1246，70 / 4"
        },
        {
          "name": "指数路径",
          "score": 48,
          "weight": "20%",
          "desc": "四大指数平均 -0.26%"
        },
        {
          "name": "流动性",
          "score": 32,
          "weight": "10%",
          "desc": "1.83万亿 缩量1756亿"
        },
        {
          "name": "恐贪风险",
          "score": 34,
          "weight": "32%",
          "desc": "自算恐贪 34 / 恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 47.6，再用情绪温度映射与共振修正下修至 42。当前未出现明显单边共振，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4234，占比 77.3%，市场宽度偏强",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "仍有单一指数抗跌收红：上证 +0.19%，深证成指 -0.35%，创业板指 -1.00%",
      "盘中下探后修复，收盘靠近日内高位，低位承接有所改善"
    ],
    "bearFactors": [
      "多数指数收跌：上证 +0.19%，深证成指 -0.35%，创业板指 -1.00%",
      "半导体走弱，高位硬科技杀估值明显",
      "两市成交额 1.83万亿，缩量1756亿，资金承接不足，前一交易日 2026.08.24",
      "盘中振幅偏大，修复并非单边走强"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约51.5%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "消费电子 / 免税 / 品牌消费",
        "note": "乳业涨幅+3.05%，成长方向短线承接增强",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "粮食概念",
        "note": "粮食概念涨幅+3.60%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "医药 / 创新药 / 中药",
        "note": "恒瑞医药、药明康德、凯莱英等成交额前排集中，成交占比约4.4%",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "种子生产",
        "note": "种子生产涨幅+5.87%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体",
        "note": "半导体走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.08.25",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-25T17:08:16+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.24",
    "closeTime": "15:00",
    "badge": "8月24日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.24 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 43,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，收盘弱于开盘，上涨1460家，强势48家，成交2.01万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 27,
        "title": "市场宽度",
        "desc": "1460涨 / 3965跌"
      },
      {
        "score": 56,
        "title": "成交热度",
        "desc": "两市 2.01万亿"
      },
      {
        "score": 42,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 54,
        "title": "赚钱效应",
        "desc": "48涨停 / 11跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3882.01",
        "change": "-0.59%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13794.29",
        "change": "-2.13%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3431.89",
        "change": "-3.21%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1602.34",
        "change": "-3.10%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.01万亿",
        "change": "放量1282亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.22%",
        "change": "5545只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1460 / 3965",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "48 / 11",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 22,
      "rawScore": 32.68,
      "temperatureScore": 24.09,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 43,
      "delta": -21,
      "funddb": {
        "score": 26,
        "status": "恐惧",
        "tradeDate": "2026.08.24",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 39.67,
          "mappedScore": 29.37,
          "calibration": 0.0,
          "appliedCalibration": 0.0,
          "calibrationNotes": [],
          "priceStrength": 38,
          "participation": 54,
          "limitScore": 81,
          "median": -1.22,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 25.79,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 29,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.24",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 18.23,
                "weight": 0.18,
                "status": "ready",
                "value": 29.5538,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 8.13,
                "weight": 0.2,
                "status": "ready",
                "value": 0.4239,
                "detail": "23/5426 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 43.03,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.8049,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 15.16,
                "weight": 0.26,
                "status": "ready",
                "value": -3.1888,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 36,
          "weight": "20%",
          "desc": "1460 / 3965，48 / 11"
        },
        {
          "name": "指数路径",
          "score": 18,
          "weight": "20%",
          "desc": "四大指数平均 -2.26%"
        },
        {
          "name": "流动性",
          "score": 60,
          "weight": "10%",
          "desc": "2.01万亿 放量1282亿"
        },
        {
          "name": "恐贪风险",
          "score": 26,
          "weight": "32%",
          "desc": "自算恐贪 26 / 恐惧"
        },
        {
          "name": "主线结构",
          "score": 42,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 32.7，再用情绪温度映射与共振修正下修至 22。当前多数因子偏弱，恐贪代理口径为恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "金属铅涨幅靠前，但成交主线仍以通信设备 / 光模块 / 光纤为核心",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 2.01万亿，较前一日继续放量，前一交易日 2026.08.21"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.59%，深证成指 -2.13%，创业板指 -3.21%，科创50 -3.10%",
      "指数下跌但成交额放量1282亿，放量分歧明显升温",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 煤炭",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "转基因",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.08.24",
    "observation": "观察重点：金属铅脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-24T18:35:45+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.21",
    "closeTime": "15:00",
    "badge": "8月21日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.21 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 55,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度修复，盘中下探后修复，收盘靠近日内高位，上涨2505家，强势57家，成交1.88万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 47,
        "title": "市场宽度",
        "desc": "2505涨 / 2862跌"
      },
      {
        "score": 41,
        "title": "成交热度",
        "desc": "两市 1.88万亿"
      },
      {
        "score": 66,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 68,
        "title": "赚钱效应",
        "desc": "57涨停 / 14跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3905.20",
        "change": "+0.04%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14094.17",
        "change": "+0.87%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3545.58",
        "change": "+1.43%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1653.56",
        "change": "+0.04%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "1.88万亿",
        "change": "缩量2001亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.12%",
        "change": "5543只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "2505 / 2862",
        "change": "占比 46.7%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "57 / 14",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 50,
      "rawScore": 50.02,
      "temperatureScore": 50.02,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "修复",
      "moodTone": "red",
      "originalScore": 55,
      "delta": -5,
      "funddb": {
        "score": 32,
        "status": "恐惧",
        "tradeDate": "2026.08.21",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 64.04,
          "mappedScore": 40.17,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 55,
          "participation": 45,
          "limitScore": 80,
          "median": -0.12,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 31.61,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 41,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.21",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 22.95,
                "weight": 0.18,
                "status": "ready",
                "value": 27.6585,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 7.32,
                "weight": 0.2,
                "status": "ready",
                "value": 0.3872,
                "detail": "21/5424 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 39.75,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.8437,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 36.89,
                "weight": 0.26,
                "status": "ready",
                "value": -0.8867,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 54,
          "weight": "20%",
          "desc": "2505 / 2862，57 / 14"
        },
        {
          "name": "指数路径",
          "score": 69,
          "weight": "20%",
          "desc": "四大指数平均 +0.59%"
        },
        {
          "name": "流动性",
          "score": 33,
          "weight": "10%",
          "desc": "1.88万亿 缩量2001亿"
        },
        {
          "name": "恐贪风险",
          "score": 32,
          "weight": "32%",
          "desc": "自算恐贪 32 / 恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 66,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 50.0，再用情绪温度映射与共振修正持平至 50。当前未出现明显单边共振，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 2505，市场宽度接近均衡，局部赚钱效应仍在",
      "金属铅涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "PCB、CPO、光模块等科技线共振，核心股维持强势",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "指数修复但成交额缩量2001亿，增量资金仍需确认，前一交易日 2026.08.20",
      "盘中振幅偏大，修复并非单边走强",
      "强势股 57 家，短线强度偏弱",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约51.3%",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "中芯国际、兆易创新、海光信息等成交额前排集中，成交占比约17.6%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "新能源汽车 / 汽车电子 / 储能",
        "note": "宁德时代、天赐材料、天齐锂业等成交额前排集中，成交占比约2.8%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "黄金概念",
        "note": "黄金概念涨幅+2.46%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "医药 / 创新药 / 中药",
        "note": "恒瑞医药、药明康德、义翘神州等成交额前排集中，成交占比约6.4%",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "种子生产",
        "note": "种子生产跌幅-8.06%，退潮压力需要跟踪",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.08.21",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在1.88万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-21T16:37:31+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.20",
    "closeTime": "15:00",
    "badge": "8月20日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.20 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 59,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度偏冷，早盘冲高后回落，收盘弱于开盘，上涨4096家，强势83家，成交2.08万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 75,
        "title": "市场宽度",
        "desc": "4096涨 / 1347跌"
      },
      {
        "score": 46,
        "title": "成交热度",
        "desc": "两市 2.08万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 80,
        "title": "赚钱效应",
        "desc": "83涨停 / 13跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3903.72",
        "change": "+0.24%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "13972.78",
        "change": "+0.59%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3495.59",
        "change": "+0.64%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1652.97",
        "change": "-0.87%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.08万亿",
        "change": "缩量4317亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.18%",
        "change": "5541只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4096 / 1347",
        "change": "占比 75.3%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "83 / 13",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 41,
      "rawScore": 46.82,
      "temperatureScore": 40.94,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 59,
      "delta": -18,
      "funddb": {
        "score": 26,
        "status": "恐惧",
        "tradeDate": "2026.08.20",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 68.1,
          "mappedScore": 41.97,
          "calibration": 4.0,
          "appliedCalibration": 1.4,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio"
          ],
          "priceStrength": 75,
          "participation": 40,
          "limitScore": 86,
          "median": 1.18,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 26.07,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 43,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.20",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 20.12,
                "weight": 0.18,
                "status": "ready",
                "value": 29.4805,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 9.35,
                "weight": 0.2,
                "status": "ready",
                "value": 0.5348,
                "detail": "29/5423 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 39.75,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.8437,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 15.98,
                "weight": 0.26,
                "status": "ready",
                "value": -3.0977,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.5182,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 77,
          "weight": "20%",
          "desc": "4096 / 1347，83 / 13"
        },
        {
          "name": "指数路径",
          "score": 56,
          "weight": "20%",
          "desc": "四大指数平均 +0.15%"
        },
        {
          "name": "流动性",
          "score": 38,
          "weight": "10%",
          "desc": "2.08万亿 缩量4317亿"
        },
        {
          "name": "恐贪风险",
          "score": 26,
          "weight": "32%",
          "desc": "自算恐贪 26 / 恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 46.8，再用情绪温度映射与共振修正下修至 41。当前未出现明显单边共振，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4096，占比 75.3%，市场宽度偏强",
      "贵金属涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "三大指数集体收红：上证 +0.24%，深证成指 +0.59%，创业板指 +0.64%",
      "电力、芯片、PCB等轮番走强，热点扩散度提升"
    ],
    "bearFactors": [
      "指数修复但成交额缩量4317亿，增量资金仍需确认，前一交易日 2026.08.19",
      "半导体走弱，高位硬科技杀估值明显",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "生物疫苗",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.08.20",
    "observation": "观察重点：贵金属脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-20T18:29:01+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.19",
    "closeTime": "15:00",
    "badge": "8月19日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.19 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 32,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨449家，强势37家，成交2.51万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 8,
        "title": "市场宽度",
        "desc": "449涨 / 5069跌"
      },
      {
        "score": 69,
        "title": "成交热度",
        "desc": "两市 2.51万亿"
      },
      {
        "score": 44,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 16,
        "title": "赚钱效应",
        "desc": "37涨停 / 119跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3894.42",
        "change": "-2.40%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13890.15",
        "change": "-5.01%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3473.49",
        "change": "-6.26%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1667.52",
        "change": "-6.89%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.51万亿",
        "change": "放量1103亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-3.92%",
        "change": "5541只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "449 / 5069",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "37 / 119",
        "change": "亏钱效应扩散",
        "tone": "green"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 15,
      "rawScore": 25.44,
      "temperatureScore": 17.82,
      "resonanceAdjustment": -3.12,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱",
        "结构分化抑制极值",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 32,
      "delta": -17,
      "funddb": {
        "score": 26,
        "status": "恐惧",
        "tradeDate": "2026.08.19",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 1.65,
          "mappedScore": 12.53,
          "calibration": -9.0,
          "appliedCalibration": -9.0,
          "calibrationNotes": [
            "deep-median-drawdown",
            "limit-down-dominance",
            "very-low-up-ratio"
          ],
          "priceStrength": 10,
          "participation": 54,
          "limitScore": 24,
          "median": -3.92,
          "penalties": [
            "中位数深跌",
            "跌停多于涨停",
            "指数与宽度共振偏弱"
          ],
          "boosts": [],
          "ifindFactorScore": 26.43,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 4,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.19",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 19.81,
                "weight": 0.18,
                "status": "ready",
                "value": 31.3448,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 5.28,
                "weight": 0.2,
                "status": "ready",
                "value": 0.295,
                "detail": "16/5423 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 45.49,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.7517,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 17.21,
                "weight": 0.26,
                "status": "ready",
                "value": -2.9621,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 50.3,
                "weight": 0.2,
                "status": "ready",
                "value": 8.5182,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 11,
          "weight": "20%",
          "desc": "449 / 5069，37 / 119"
        },
        {
          "name": "指数路径",
          "score": 5,
          "weight": "20%",
          "desc": "四大指数平均 -5.14%"
        },
        {
          "name": "流动性",
          "score": 60,
          "weight": "10%",
          "desc": "2.51万亿 放量1103亿"
        },
        {
          "name": "恐贪风险",
          "score": 26,
          "weight": "32%",
          "desc": "自算恐贪 26 / 恐惧 / 中位数深跌、跌停多于涨停、指数与宽度共振偏弱"
        },
        {
          "name": "主线结构",
          "score": 44,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 25.4，再用情绪温度映射与共振修正下修至 15。当前多数因子偏弱;结构分化抑制极值;原口径确认弱度，恐贪代理口径为恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "焦炭加工涨幅靠前，但成交主线仍以通信设备 / 光模块 / 光纤为核心",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 2.51万亿，较前一日继续放量，前一交易日 2026.08.18"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -2.40%，深证成指 -5.01%，创业板指 -6.26%，科创50 -6.89%",
      "指数下跌但成交额放量1103亿，放量分歧明显升温",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 煤炭",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "弹性题材",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.08.19",
    "observation": "观察重点：煤炭脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-20T11:05:07+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.18",
    "closeTime": "15:00",
    "badge": "8月18日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.18 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 54,
    "mood": "修复",
    "moodTone": "red",
    "summary": "收盘温度偏冷，早盘冲高后回落，收盘弱于开盘，上涨2121家，强势80家，成交2.40万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 39,
        "title": "市场宽度",
        "desc": "2121涨 / 3292跌"
      },
      {
        "score": 64,
        "title": "成交热度",
        "desc": "两市 2.40万亿"
      },
      {
        "score": 52,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 74,
        "title": "赚钱效应",
        "desc": "80涨停 / 5跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3990.30",
        "change": "+0.19%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14622.50",
        "change": "-0.56%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3705.56",
        "change": "-0.92%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1790.87",
        "change": "+0.11%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.40万亿",
        "change": "放量133亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.47%",
        "change": "5540只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "2121 / 3292",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "80 / 5",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 40,
      "rawScore": 46.2,
      "temperatureScore": 39.88,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 54,
      "delta": -14,
      "funddb": {
        "score": 32,
        "status": "恐惧",
        "tradeDate": "2026.08.18",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 60.69,
          "mappedScore": 38.69,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 52,
          "participation": 62,
          "limitScore": 94,
          "median": -0.47,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 31.8,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 39,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.18",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 22.09,
                "weight": 0.18,
                "status": "ready",
                "value": 26.9994,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 12.2,
                "weight": 0.2,
                "status": "ready",
                "value": 0.756,
                "detail": "41/5423 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 25.82,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.1768,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 38.52,
                "weight": 0.26,
                "status": "ready",
                "value": -0.5235,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 51,
          "weight": "20%",
          "desc": "2121 / 3292，80 / 5"
        },
        {
          "name": "指数路径",
          "score": 48,
          "weight": "20%",
          "desc": "四大指数平均 -0.30%"
        },
        {
          "name": "流动性",
          "score": 68,
          "weight": "10%",
          "desc": "2.40万亿 放量133亿"
        },
        {
          "name": "恐贪风险",
          "score": 32,
          "weight": "32%",
          "desc": "自算恐贪 32 / 恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 52,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 46.2，再用情绪温度映射与共振修正下修至 40。当前未出现明显单边共振，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "PCB、CPO、光模块等科技线共振，药明康德、誉衡药业、康龙化成等核心股创阶段新高",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "两市成交额 2.40万亿，较前一日继续放量，前一交易日 2026.08.17",
      "仍有单一指数抗跌收红：上证 +0.19%，深证成指 -0.56%，创业板指 -0.92%"
    ],
    "bearFactors": [
      "多数指数收跌：上证 +0.19%，深证成指 -0.56%，创业板指 -0.92%",
      "指数下跌但成交额放量133亿，放量分歧明显升温",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温",
      "上涨家数仅 2121，占比 39.2%，个股宽度偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约56.3%",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "中芯国际、兆易创新、海光信息等成交额前排集中，成交占比约25.2%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "机器人 / 工业母机 / 低空",
        "note": "华友钴业、厦门钨业、埃斯顿等成交额前排集中，成交占比约1.6%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "其他养殖",
        "note": "其他养殖涨幅+10.17%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "医药 / 创新药 / 中药",
        "note": "恒瑞医药、药明康德、哈药股份等成交额前排集中，成交占比约2.3%",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "氨纶",
        "note": "氨纶跌幅-3.84%，退潮压力需要跟踪",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.08.18",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中承接能否改善，成交额能否维持在2.40万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-18T17:25:08+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.17",
    "closeTime": "15:00",
    "badge": "8月17日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.17 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 72,
    "mood": "偏热",
    "moodTone": "red",
    "summary": "收盘温度亢奋，盘中下探后修复，收盘靠近日内高位，上涨4335家，强势110家，成交2.39万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 80,
        "title": "市场宽度",
        "desc": "4335涨 / 1064跌"
      },
      {
        "score": 66,
        "title": "成交热度",
        "desc": "两市 2.39万亿"
      },
      {
        "score": 74,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "110涨停 / 1跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3982.65",
        "change": "+1.41%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14704.27",
        "change": "+2.44%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3740.16",
        "change": "+3.14%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1788.85",
        "change": "+4.14%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.39万亿",
        "change": "放量2446亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.35%",
        "change": "5539只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4335 / 1064",
        "change": "占比 80.3%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "110 / 1",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 83,
      "rawScore": 66.72,
      "temperatureScore": 75.35,
      "resonanceAdjustment": 8.0,
      "structuralAdjustment": 0,
      "structuralFloor": 65,
      "resonanceNotes": [
        "多因子偏强共振",
        "原口径确认强度"
      ],
      "mood": "亢奋",
      "moodTone": "red",
      "originalScore": 72,
      "delta": 11,
      "funddb": {
        "score": 40,
        "status": "恐惧",
        "tradeDate": "2026.08.17",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 91.79,
          "mappedScore": 52.46,
          "calibration": 8.0,
          "appliedCalibration": 2.8,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio",
            "index-confirmed-strength"
          ],
          "priceStrength": 79,
          "participation": 71,
          "limitScore": 99,
          "median": 1.35,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 39.73,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 55,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.17",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 8.95,
                "weight": 0.18,
                "status": "ready",
                "value": 33.8484,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 12.6,
                "weight": 0.2,
                "status": "ready",
                "value": 0.9589,
                "detail": "52/5423 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 37.7,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.8879,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 70.49,
                "weight": 0.26,
                "status": "ready",
                "value": 2.9108,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 82,
          "weight": "20%",
          "desc": "4335 / 1064，110 / 1"
        },
        {
          "name": "指数路径",
          "score": 86,
          "weight": "20%",
          "desc": "四大指数平均 +2.78%"
        },
        {
          "name": "流动性",
          "score": 70,
          "weight": "10%",
          "desc": "2.39万亿 放量2446亿"
        },
        {
          "name": "恐贪风险",
          "score": 40,
          "weight": "32%",
          "desc": "自算恐贪 40 / 恐惧 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 74,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 66.7，再用情绪温度映射与共振修正上修至 83。当前多因子偏强共振;原口径确认强度，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4335，占比 80.3%，市场宽度偏强",
      "PCB、CPO、光模块午后共振，长鑫科技等核心股创历史新高",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "两市成交额 2.39万亿，较前一日继续放量，前一交易日 2026.08.14"
    ],
    "bearFactors": [
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "培育钻石 / 超硬材料",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.08.17",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在2.39万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-17T17:58:04+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.14",
    "closeTime": "15:00",
    "badge": "8月14日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.14 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 56,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度修复，早盘冲高后回落，收盘弱于开盘，上涨2400家，强势64家，成交2.14万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 45,
        "title": "市场宽度",
        "desc": "2400涨 / 2970跌"
      },
      {
        "score": 48,
        "title": "成交热度",
        "desc": "两市 2.14万亿"
      },
      {
        "score": 68,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 71,
        "title": "赚钱效应",
        "desc": "64涨停 / 10跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3927.18",
        "change": "+0.01%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14354.31",
        "change": "+0.45%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3626.30",
        "change": "+1.12%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1717.68",
        "change": "-0.00%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.14万亿",
        "change": "缩量4081亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.20%",
        "change": "5540只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "2400 / 2970",
        "change": "占比 44.7%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "64 / 10",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 51,
      "rawScore": 50.8,
      "temperatureScore": 50.8,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "修复",
      "moodTone": "red",
      "originalScore": 56,
      "delta": -5,
      "funddb": {
        "score": 38,
        "status": "恐惧",
        "tradeDate": "2026.08.14",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 62.85,
          "mappedScore": 39.64,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 54,
          "participation": 50,
          "limitScore": 86,
          "median": -0.2,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 38.29,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 40,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.14",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 8.36,
                "weight": 0.18,
                "status": "ready",
                "value": 35.119,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 7.32,
                "weight": 0.2,
                "status": "ready",
                "value": 0.4424,
                "detail": "24/5425 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 37.3,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.8566,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 69.67,
                "weight": 0.26,
                "status": "ready",
                "value": 2.8211,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 54,
          "weight": "20%",
          "desc": "2400 / 2970，64 / 10"
        },
        {
          "name": "指数路径",
          "score": 58,
          "weight": "20%",
          "desc": "四大指数平均 +0.40%"
        },
        {
          "name": "流动性",
          "score": 40,
          "weight": "10%",
          "desc": "2.14万亿 缩量4081亿"
        },
        {
          "name": "恐贪风险",
          "score": 38,
          "weight": "32%",
          "desc": "自算恐贪 38 / 恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 68,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 50.8，再用情绪温度映射与共振修正持平至 51。当前未出现明显单边共振，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "稀土涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "PCB、CPO、光模块等科技线共振，核心股维持强势",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "三大指数集体收红：上证 +0.01%，深证成指 +0.45%，创业板指 +1.12%"
    ],
    "bearFactors": [
      "指数修复但成交额缩量4081亿，增量资金仍需确认，前一交易日 2026.08.13",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温",
      "上涨家数仅 2400，占比 44.7%，个股宽度偏弱",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约57.7%",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "科创次新股",
        "note": "科创次新股涨幅+2.31%，主线链条内热度继续外溢",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "AI应用 / 软件 / 数据要素",
        "note": "金山办公、东方财富、同花顺等成交额前排集中，成交占比约3.2%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "有色 / 小金属 / 稀土",
        "note": "中国稀土、洛阳钼业、紫金矿业等成交额前排集中，成交占比约4.2%",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "医药 / 创新药 / 中药",
        "note": "恒瑞医药、药明康德、凯莱英等成交额前排集中，成交占比约3.2%",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "电力 / 公用事业 / 高股息",
        "note": "火电跌幅-3.40%，退潮压力需要跟踪",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.08.14",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中承接能否改善，成交额能否维持在2.14万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-14T16:37:33+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.13",
    "closeTime": "15:00",
    "badge": "8月13日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.13 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 46,
    "mood": "修复",
    "moodTone": "blue",
    "summary": "收盘温度偏冷，早盘冲高后回落，午后探低，收盘靠近低位，上涨1143家，强势62家，成交2.55万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 21,
        "title": "市场宽度",
        "desc": "1143涨 / 4317跌"
      },
      {
        "score": 70,
        "title": "成交热度",
        "desc": "两市 2.55万亿"
      },
      {
        "score": 44,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 60,
        "title": "赚钱效应",
        "desc": "62涨停 / 4跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3926.96",
        "change": "-0.50%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "14289.44",
        "change": "-0.87%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3586.04",
        "change": "-0.45%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1717.75",
        "change": "-1.11%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.55万亿",
        "change": "放量3985亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.48%",
        "change": "5540只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1143 / 4317",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "62 / 4",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 25,
      "rawScore": 36.52,
      "temperatureScore": 27.82,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 46,
      "delta": -21,
      "funddb": {
        "score": 30,
        "status": "恐惧",
        "tradeDate": "2026.08.13",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 47.72,
          "mappedScore": 32.94,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 37,
          "participation": 54,
          "limitScore": 94,
          "median": -1.48,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 29.91,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 34,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.13",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 7.87,
                "weight": 0.18,
                "status": "ready",
                "value": 36.5388,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 10.57,
                "weight": 0.2,
                "status": "ready",
                "value": 0.6824,
                "detail": "37/5422 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 37.3,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.8566,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 35.25,
                "weight": 0.26,
                "status": "ready",
                "value": -0.9053,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 35,
          "weight": "20%",
          "desc": "1143 / 4317，62 / 4"
        },
        {
          "name": "指数路径",
          "score": 30,
          "weight": "20%",
          "desc": "四大指数平均 -0.73%"
        },
        {
          "name": "流动性",
          "score": 60,
          "weight": "10%",
          "desc": "2.55万亿 放量3985亿"
        },
        {
          "name": "恐贪风险",
          "score": 30,
          "weight": "32%",
          "desc": "自算恐贪 30 / 恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 44,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 36.5，再用情绪温度映射与共振修正下修至 25。当前多数因子偏弱，恐贪代理口径为恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 2.55万亿，较前一日继续放量，前一交易日 2026.08.12",
      "强势股 62 家，局部短线情绪仍有承接"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.50%，深证成指 -0.87%，创业板指 -0.45%",
      "指数下跌但成交额放量3985亿，放量分歧明显升温",
      "半导体走弱，高位硬科技杀估值明显",
      "早盘冲高后回落，午后探低，收盘靠近低位，日内承接偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "CRO概念",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.08.13",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-13T16:39:27+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.12",
    "closeTime": "15:00",
    "badge": "8月12日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.12 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 67,
    "mood": "偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨4128家，强势96家，成交2.15万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 76,
        "title": "市场宽度",
        "desc": "4128涨 / 1280跌"
      },
      {
        "score": 48,
        "title": "成交热度",
        "desc": "两市 2.15万亿"
      },
      {
        "score": 73,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "96涨停 / 0跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3946.68",
        "change": "+0.32%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14414.43",
        "change": "+1.09%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3602.08",
        "change": "+1.49%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1736.99",
        "change": "+1.61%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.15万亿",
        "change": "缩量1686亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.84%",
        "change": "5539只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4128 / 1280",
        "change": "占比 76.3%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "96 / 0",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 66,
      "rawScore": 55.54,
      "temperatureScore": 62.78,
      "resonanceAdjustment": 3.5,
      "structuralAdjustment": 0,
      "structuralFloor": 65,
      "resonanceNotes": [
        "多数因子偏强",
        "原口径确认强度"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 67,
      "delta": -1,
      "funddb": {
        "score": 25,
        "status": "恐惧",
        "tradeDate": "2026.08.12",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 84.31,
          "mappedScore": 49.15,
          "calibration": 4.0,
          "appliedCalibration": 1.4,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio"
          ],
          "priceStrength": 76,
          "participation": 52,
          "limitScore": 100,
          "median": 0.84,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 24.66,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 51,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.12",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 7.67,
                "weight": 0.18,
                "status": "ready",
                "value": 36.3414,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 8.94,
                "weight": 0.2,
                "status": "ready",
                "value": 0.5903,
                "detail": "32/5421 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 30.74,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.0641,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 20.49,
                "weight": 0.26,
                "status": "ready",
                "value": -2.1981,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 79,
          "weight": "20%",
          "desc": "4128 / 1280，96 / 0"
        },
        {
          "name": "指数路径",
          "score": 73,
          "weight": "20%",
          "desc": "四大指数平均 +1.13%"
        },
        {
          "name": "流动性",
          "score": 40,
          "weight": "10%",
          "desc": "2.15万亿 缩量1686亿"
        },
        {
          "name": "恐贪风险",
          "score": 25,
          "weight": "32%",
          "desc": "自算恐贪 25 / 恐惧 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 73,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 55.5，再用情绪温度映射与共振修正上修至 66。当前多数因子偏强;原口径确认强度，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4128，占比 76.3%，市场宽度偏强",
      "PCB、CPO、光模块等科技线共振，核心股维持强势",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "三大指数集体收红：上证 +0.32%，深证成指 +1.09%，创业板指 +1.49%"
    ],
    "bearFactors": [
      "指数修复但成交额缩量1686亿，增量资金仍需确认，前一交易日 2026.08.11",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "青蒿素",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.08.12",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在2.15万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-12T17:48:44+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.11",
    "closeTime": "15:00",
    "badge": "8月11日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.11 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 46,
    "mood": "修复",
    "moodTone": "blue",
    "summary": "收盘温度偏冷，早盘冲高后回落，收盘弱于开盘，上涨1615家，强势60家，成交2.32万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 30,
        "title": "市场宽度",
        "desc": "1615涨 / 3777跌"
      },
      {
        "score": 52,
        "title": "成交热度",
        "desc": "两市 2.32万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 63,
        "title": "赚钱效应",
        "desc": "60涨停 / 2跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3934.09",
        "change": "-0.82%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "14259.44",
        "change": "-0.40%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3549.16",
        "change": "+0.34%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1709.50",
        "change": "-1.63%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.32万亿",
        "change": "缩量2021亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.68%",
        "change": "5539只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1615 / 3777",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "60 / 2",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 29,
      "rawScore": 37.54,
      "temperatureScore": 28.87,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 46,
      "delta": -17,
      "funddb": {
        "score": 27,
        "status": "恐惧",
        "tradeDate": "2026.08.11",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 52.03,
          "mappedScore": 34.85,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 44,
          "participation": 44,
          "limitScore": 97,
          "median": -0.68,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 26.67,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 36,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.11",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 18.96,
                "weight": 0.18,
                "status": "ready",
                "value": 30.008,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 7.32,
                "weight": 0.2,
                "status": "ready",
                "value": 0.4611,
                "detail": "25/5422 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 39.34,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.8317,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 16.39,
                "weight": 0.26,
                "status": "ready",
                "value": -2.9801,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 42,
          "weight": "20%",
          "desc": "1615 / 3777，60 / 2"
        },
        {
          "name": "指数路径",
          "score": 40,
          "weight": "20%",
          "desc": "四大指数平均 -0.63%"
        },
        {
          "name": "流动性",
          "score": 44,
          "weight": "10%",
          "desc": "2.32万亿 缩量2021亿"
        },
        {
          "name": "恐贪风险",
          "score": 27,
          "weight": "32%",
          "desc": "自算恐贪 27 / 恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 37.5，再用情绪温度映射与共振修正下修至 29。当前未出现明显单边共振，恐贪代理口径为恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "PCB、CPO、光模块等科技线共振，康龙化成、哈药股份等核心股创阶段新高",
      "成交额前200中通信设备 / 光模块 / 光纤占比较高，主线资金未完全扩散",
      "仍有单一指数抗跌收红：上证 -0.82%，深证成指 -0.40%，创业板指 +0.34%",
      "强势股 60 家，局部短线情绪仍有承接"
    ],
    "bearFactors": [
      "多数指数收跌：上证 -0.82%，深证成指 -0.40%，创业板指 +0.34%",
      "两市成交额 2.32万亿，缩量2021亿，资金承接不足，前一交易日 2026.08.10",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温",
      "上涨家数仅 1615，占比 30.0%，个股宽度偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "MLCC概念",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.08.11",
    "observation": "观察重点：通信设备 / 光模块 / 光纤能否继续放量，盘中承接能否改善，成交额能否维持在2.32万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-11T17:30:36+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.10",
    "closeTime": "15:00",
    "badge": "8月10日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.10 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 61,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度中性偏热，早盘冲高后回落，收盘弱于开盘，上涨4068家，强势103家，成交2.52万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 75,
        "title": "市场宽度",
        "desc": "4068涨 / 1391跌"
      },
      {
        "score": 57,
        "title": "成交热度",
        "desc": "两市 2.52万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "103涨停 / 5跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3966.59",
        "change": "+0.67%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14316.96",
        "change": "+0.04%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3537.21",
        "change": "-0.73%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1737.77",
        "change": "-0.36%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.52万亿",
        "change": "缩量1413亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.26%",
        "change": "5538只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4068 / 1391",
        "change": "占比 74.5%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "103 / 5",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 59,
      "rawScore": 47.68,
      "temperatureScore": 42.55,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 16,
      "structuralFloor": 59,
      "resonanceNotes": [
        "结构修复抑制慢因子过度降温"
      ],
      "mood": "中性偏热",
      "moodTone": "red",
      "originalScore": 61,
      "delta": -2,
      "funddb": {
        "score": 29,
        "status": "恐惧",
        "tradeDate": "2026.08.10",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 68.88,
          "mappedScore": 42.31,
          "calibration": 4.0,
          "appliedCalibration": 1.4,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio"
          ],
          "priceStrength": 76,
          "participation": 48,
          "limitScore": 95,
          "median": 1.26,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 28.6,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 44,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.10",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 5.8,
                "weight": 0.18,
                "status": "ready",
                "value": 41.31,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 10.16,
                "weight": 0.2,
                "status": "ready",
                "value": 0.7375,
                "detail": "40/5424 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 23.36,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.2213,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 40.57,
                "weight": 0.26,
                "status": "ready",
                "value": -0.0426,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 78,
          "weight": "20%",
          "desc": "4068 / 1391，103 / 5"
        },
        {
          "name": "指数路径",
          "score": 49,
          "weight": "20%",
          "desc": "四大指数平均 -0.09%"
        },
        {
          "name": "流动性",
          "score": 49,
          "weight": "10%",
          "desc": "2.52万亿 缩量1413亿"
        },
        {
          "name": "恐贪风险",
          "score": 29,
          "weight": "32%",
          "desc": "自算恐贪 29 / 恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 47.7，再用情绪温度映射、共振修正与结构修复保护上修至 59。当前结构修复抑制慢因子过度降温，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4068，占比 74.5%，市场宽度偏强",
      "金属铅涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "沪深两市成交额 2.52万亿，活跃度仍在高位",
      "多数指数收红：上证 +0.67%，深证成指 +0.04%，创业板指 -0.73%"
    ],
    "bearFactors": [
      "指数修复但成交额缩量1413亿，增量资金仍需确认，前一交易日 2026.08.07",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "有色 / 小金属 / 稀土",
        "note": "中国稀土、洛阳钼业、紫金矿业等成交额前排集中，成交占比约6.6%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "消费电子 / 免税 / 品牌消费",
        "note": "乳业涨幅+3.82%，成长方向短线承接增强",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "肉鸡养殖",
        "note": "肉鸡养殖涨幅+6.54%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "其他医疗服务",
        "note": "其他医疗服务涨幅+5.06%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "兵装重组概念",
        "note": "兵装重组概念涨幅+7.17%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、CPO、PCB",
        "note": "半导体、CPO、PCB走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.08.10",
    "observation": "观察重点：金属铅脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-10T18:03:15+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.07",
    "closeTime": "15:00",
    "badge": "8月7日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.07 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 64,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨2856家，强势74家，成交2.66万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 53,
        "title": "市场宽度",
        "desc": "2856涨 / 2536跌"
      },
      {
        "score": 73,
        "title": "成交热度",
        "desc": "两市 2.66万亿"
      },
      {
        "score": 67,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 77,
        "title": "赚钱效应",
        "desc": "74涨停 / 4跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3940.04",
        "change": "+1.02%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14311.01",
        "change": "+1.42%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3563.12",
        "change": "+1.35%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1744.02",
        "change": "+2.51%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.66万亿",
        "change": "放量1356亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.12%",
        "change": "5535只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "2856 / 2536",
        "change": "占比 53.0%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "74 / 4",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 69,
      "rawScore": 55.36,
      "temperatureScore": 62.52,
      "resonanceAdjustment": 6.5,
      "structuralAdjustment": 0,
      "structuralFloor": 60,
      "resonanceNotes": [
        "多因子偏强共振"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 64,
      "delta": 5,
      "funddb": {
        "score": 25,
        "status": "恐惧",
        "tradeDate": "2026.08.07",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 80.76,
          "mappedScore": 47.58,
          "calibration": 6.0,
          "appliedCalibration": 2.1,
          "calibrationNotes": [
            "limit-up-spread",
            "index-confirmed-strength"
          ],
          "priceStrength": 61,
          "participation": 74,
          "limitScore": 95,
          "median": 0.12,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 25.01,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 50,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.07",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 5.9,
                "weight": 0.18,
                "status": "ready",
                "value": 42.4027,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 8.13,
                "weight": 0.2,
                "status": "ready",
                "value": 0.5534,
                "detail": "30/5421 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 31.97,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.0403,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 22.95,
                "weight": 0.26,
                "status": "ready",
                "value": -1.9557,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 61,
          "weight": "20%",
          "desc": "2856 / 2536，74 / 4"
        },
        {
          "name": "指数路径",
          "score": 77,
          "weight": "20%",
          "desc": "四大指数平均 +1.57%"
        },
        {
          "name": "流动性",
          "score": 77,
          "weight": "10%",
          "desc": "2.66万亿 放量1356亿"
        },
        {
          "name": "恐贪风险",
          "score": 25,
          "weight": "32%",
          "desc": "自算恐贪 25 / 恐惧 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 67,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 55.4，再用情绪温度映射与共振修正上修至 69。当前多因子偏强共振，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 2856，市场宽度接近均衡，局部赚钱效应仍在",
      "稀土涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "PCB、CPO、光模块等科技线共振，核心股维持强势",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "指数修复后仍需观察能否继续向个股扩散",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "消费电子 / 免税 / 稀土",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.08.07",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在2.66万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-07T17:42:47+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.06",
    "closeTime": "15:00",
    "badge": "8月6日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.06 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 57,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度修复，盘中承接较强，收盘处于日内偏高位置，上涨2789家，强势83家，成交2.53万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 52,
        "title": "市场宽度",
        "desc": "2789涨 / 2590跌"
      },
      {
        "score": 57,
        "title": "成交热度",
        "desc": "两市 2.53万亿"
      },
      {
        "score": 54,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 79,
        "title": "赚钱效应",
        "desc": "83涨停 / 1跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3900.35",
        "change": "+0.57%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14110.12",
        "change": "-0.24%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3515.56",
        "change": "-0.55%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1701.29",
        "change": "+0.45%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.53万亿",
        "change": "缩量1309亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.06%",
        "change": "5533只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "2789 / 2590",
        "change": "占比 51.8%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "83 / 1",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 53,
      "rawScore": 43.86,
      "temperatureScore": 36.38,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 17,
      "structuralFloor": 53,
      "resonanceNotes": [
        "结构修复抑制慢因子过度降温"
      ],
      "mood": "修复",
      "moodTone": "red",
      "originalScore": 57,
      "delta": -4,
      "funddb": {
        "score": 22,
        "status": "极度恐惧",
        "tradeDate": "2026.08.06",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 63.96,
          "mappedScore": 40.14,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 61,
          "participation": 51,
          "limitScore": 99,
          "median": 0.06,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 21.52,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 41,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.06",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 4.45,
                "weight": 0.18,
                "status": "ready",
                "value": 44.5698,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 6.5,
                "weight": 0.2,
                "status": "ready",
                "value": 0.369,
                "detail": "20/5420 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 36.48,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.8451,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 9.02,
                "weight": 0.26,
                "status": "ready",
                "value": -4.7405,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 61,
          "weight": "20%",
          "desc": "2789 / 2590，83 / 1"
        },
        {
          "name": "指数路径",
          "score": 50,
          "weight": "20%",
          "desc": "四大指数平均 +0.06%"
        },
        {
          "name": "流动性",
          "score": 49,
          "weight": "10%",
          "desc": "2.53万亿 缩量1309亿"
        },
        {
          "name": "恐贪风险",
          "score": 22,
          "weight": "32%",
          "desc": "自算恐贪 22 / 极度恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 54,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 43.9，再用情绪温度映射、共振修正与结构修复保护上修至 53。当前结构修复抑制慢因子过度降温，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 2789，市场宽度接近均衡，局部赚钱效应仍在",
      "煤炭开采涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "CPO / 光模块 / 铜缆主线逆势活跃，中际旭创、天孚通信等核心股仍有承接",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "多数指数收跌：上证 +0.57%，深证成指 -0.24%，创业板指 -0.55%",
      "两市成交额 2.53万亿，缩量1309亿，资金承接不足，前一交易日 2026.08.05",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约52.7%",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "中芯国际、兆易创新、北方华创等成交额前排集中，成交占比约20.6%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "AI应用 / 软件 / 数据要素",
        "note": "金山办公、万华化学、东方财富等成交额前排集中，成交占比约3.4%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "粮食概念",
        "note": "粮食概念涨幅+2.50%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业 / 高股息",
        "note": "华电辽能、长江电力、中国平安等成交额前排集中，成交占比约2.2%",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "体育",
        "note": "体育跌幅-2.81%，退潮压力需要跟踪",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.08.06",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在2.53万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-06T18:16:25+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.05",
    "closeTime": "15:00",
    "badge": "8月5日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.05 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 70,
    "mood": "偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨3725家，强势104家，成交2.66万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 70,
        "title": "市场宽度",
        "desc": "3725涨 / 1621跌"
      },
      {
        "score": 72,
        "title": "成交热度",
        "desc": "两市 2.66万亿"
      },
      {
        "score": 73,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "104涨停 / 1跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3878.43",
        "change": "+1.47%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14144.20",
        "change": "+1.86%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3535.14",
        "change": "+1.32%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1693.67",
        "change": "+4.78%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.66万亿",
        "change": "放量4460亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.93%",
        "change": "5532只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3725 / 1621",
        "change": "占比 69.7%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "104 / 1",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 75,
      "rawScore": 60.02,
      "temperatureScore": 68.46,
      "resonanceAdjustment": 6.7,
      "structuralAdjustment": 0,
      "structuralFloor": 65,
      "resonanceNotes": [
        "多因子偏强共振",
        "结构分化抑制极值",
        "原口径确认强度"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 70,
      "delta": 5,
      "funddb": {
        "score": 24,
        "status": "极度恐惧",
        "tradeDate": "2026.08.05",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 88.84,
          "mappedScore": 51.16,
          "calibration": 8.0,
          "appliedCalibration": 2.8,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio",
            "index-confirmed-strength"
          ],
          "priceStrength": 73,
          "participation": 75,
          "limitScore": 99,
          "median": 0.93,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 24.45,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 54,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.05",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 4.43,
                "weight": 0.18,
                "status": "ready",
                "value": 44.7953,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 5.69,
                "weight": 0.2,
                "status": "ready",
                "value": 0.3137,
                "detail": "17/5420 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 38.52,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.7976,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 19.67,
                "weight": 0.26,
                "status": "ready",
                "value": -2.1788,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 75,
          "weight": "20%",
          "desc": "3725 / 1621，104 / 1"
        },
        {
          "name": "指数路径",
          "score": 83,
          "weight": "20%",
          "desc": "四大指数平均 +2.36%"
        },
        {
          "name": "流动性",
          "score": 76,
          "weight": "10%",
          "desc": "2.66万亿 放量4460亿"
        },
        {
          "name": "恐贪风险",
          "score": 24,
          "weight": "32%",
          "desc": "自算恐贪 24 / 极度恐惧 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 73,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 60.0，再用情绪温度映射与共振修正上修至 75。当前多因子偏强共振;结构分化抑制极值;原口径确认强度，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3725，占比 69.7%，市场宽度偏强",
      "贵金属涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "PCB、CPO、光模块等科技线共振，核心股维持强势",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "培育钻石 / 超硬材料",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.08.05",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在2.66万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-05T17:45:27+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.04",
    "closeTime": "15:00",
    "badge": "8月4日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.04 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 67,
    "mood": "偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨3642家，强势140家，成交2.21万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 68,
        "title": "市场宽度",
        "desc": "3642涨 / 1747跌"
      },
      {
        "score": 61,
        "title": "成交热度",
        "desc": "两市 2.21万亿"
      },
      {
        "score": 72,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "140涨停 / 1跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3822.28",
        "change": "+0.33%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "13885.71",
        "change": "+3.25%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3488.97",
        "change": "+5.64%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1616.36",
        "change": "+4.09%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.21万亿",
        "change": "放量2162亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.97%",
        "change": "5529只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3642 / 1747",
        "change": "占比 67.6%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "140 / 1",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 72,
      "rawScore": 59.3,
      "temperatureScore": 67.62,
      "resonanceAdjustment": 4.75,
      "structuralAdjustment": 0,
      "structuralFloor": 65,
      "resonanceNotes": [
        "多因子偏强共振",
        "结构分化抑制极值",
        "原口径确认强度"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 67,
      "delta": 5,
      "funddb": {
        "score": 22,
        "status": "极度恐惧",
        "tradeDate": "2026.08.04",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 89.02,
          "mappedScore": 51.24,
          "calibration": 8.0,
          "appliedCalibration": 2.8,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio",
            "index-confirmed-strength"
          ],
          "priceStrength": 72,
          "participation": 67,
          "limitScore": 99,
          "median": 0.97,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 22.28,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 54,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.04",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 12.52,
                "weight": 0.18,
                "status": "ready",
                "value": 34.7572,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 4.07,
                "weight": 0.2,
                "status": "ready",
                "value": 0.24,
                "detail": "13/5416 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 31.15,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.0461,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 11.48,
                "weight": 0.26,
                "status": "ready",
                "value": -4.1144,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 74,
          "weight": "20%",
          "desc": "3642 / 1747，140 / 1"
        },
        {
          "name": "指数路径",
          "score": 90,
          "weight": "20%",
          "desc": "四大指数平均 +3.33%"
        },
        {
          "name": "流动性",
          "score": 65,
          "weight": "10%",
          "desc": "2.21万亿 放量2162亿"
        },
        {
          "name": "恐贪风险",
          "score": 22,
          "weight": "32%",
          "desc": "自算恐贪 22 / 极度恐惧 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 72,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 59.3，再用情绪温度映射与共振修正上修至 72。当前多因子偏强共振;结构分化抑制极值;原口径确认强度，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3642，占比 67.6%，市场宽度偏强",
      "PCB、CPO、光模块等科技线共振，核心股维持强势",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "两市成交额 2.21万亿，较前一日继续放量，前一交易日 2026.08.03"
    ],
    "bearFactors": [
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "共封装光学(CPO)",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.08.04",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在2.21万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-04T18:04:47+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.08.03",
    "closeTime": "15:00",
    "badge": "8月3日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.08.03 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 58,
    "mood": "分化偏多",
    "moodTone": "blue",
    "summary": "指数回调但个股普涨，PCB / CPO / 光模块接力，半导体 / CPO / PCB杀估值加剧，属于宽度修复但主线分化盘",
    "miniGauges": [
      {
        "score": 73,
        "title": "市场宽度",
        "desc": "4005涨 / 1466跌"
      },
      {
        "score": 44,
        "title": "成交热度",
        "desc": "两市 2.00万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 64,
        "title": "赚钱效应",
        "desc": "83涨停 / 9跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3809.66",
        "change": "-0.59%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13448.29",
        "change": "-0.96%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3302.55",
        "change": "-1.24%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1552.89",
        "change": "-5.08%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.00万亿",
        "change": "缩量5446亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.34%",
        "change": "5529只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4005 / 1466",
        "change": "占比 73.2%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "83 / 9",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 54,
      "rawScore": 36.42,
      "temperatureScore": 27.72,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 29,
      "structuralFloor": 54,
      "resonanceNotes": [
        "多数因子偏弱",
        "结构修复抑制慢因子过度降温"
      ],
      "mood": "修复",
      "moodTone": "red",
      "originalScore": 58,
      "delta": -4,
      "funddb": {
        "score": 21,
        "status": "极度恐惧",
        "tradeDate": "2026.08.03",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 56.55,
          "mappedScore": 36.85,
          "calibration": 4.0,
          "appliedCalibration": 1.4,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio"
          ],
          "priceStrength": 69,
          "participation": 39,
          "limitScore": 90,
          "median": 1.34,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 21.1,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 38,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.08.03",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 9.77,
                "weight": 0.18,
                "status": "ready",
                "value": 39.2699,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 1.63,
                "weight": 0.2,
                "status": "ready",
                "value": 0.2031,
                "detail": "11/5416 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 45.9,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.6819,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 1.64,
                "weight": 0.26,
                "status": "ready",
                "value": -6.3381,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 70,
          "weight": "20%",
          "desc": "4005 / 1466，83 / 9"
        },
        {
          "name": "指数路径",
          "score": 20,
          "weight": "20%",
          "desc": "四大指数平均 -1.97%"
        },
        {
          "name": "流动性",
          "score": 36,
          "weight": "10%",
          "desc": "2.00万亿 缩量5446亿"
        },
        {
          "name": "恐贪风险",
          "score": 21,
          "weight": "32%",
          "desc": "自算恐贪 21 / 极度恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 36.4，再用情绪温度映射、共振修正与结构修复保护上修至 54。当前多数因子偏弱;结构修复抑制慢因子过度降温，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4005，占比 73.2%，情绪宽度明显优于指数",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "强势股 83 家，局部短线情绪仍有承接"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.59%，深证成指 -0.96%，创业板指 -1.24%，科创50 -5.08%",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、PCB走弱，高位硬科技杀估值明显",
      "两市成交额 2.00万亿，缩量5446亿，资金承接不足，前一交易日 2026.07.31"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "机器人 / 人形机器人",
        "note": "高辨识度分支继续活跃，但指数急跌下追高资金需谨慎",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "航天装备 / 军工",
        "note": "强势题材横向扩散，说明短线资金仍在寻找承接方向",
        "tone": "up"
      },
      {
        "tag": "回流",
        "name": "金属新材料 / AI应用 / 计算机 / 电力 / 公用事业",
        "note": "低位和避险方向出现资金回流，与高位分歧并行",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、PCB",
        "note": "高位科技与指数权重承压，短线拥挤度仍需消化",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.08.03",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-08-03T18:00:23+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.31",
    "closeTime": "15:00",
    "badge": "7月31日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.31 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 75,
    "mood": "偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，早盘冲高后回落，午后探低，收盘靠近低位，上涨4691家，强势101家，成交2.54万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 87,
        "title": "市场宽度",
        "desc": "4691涨 / 728跌"
      },
      {
        "score": 70,
        "title": "成交热度",
        "desc": "两市 2.54万亿"
      },
      {
        "score": 73,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "101涨停 / 0跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3832.26",
        "change": "+0.72%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "13578.93",
        "change": "+2.21%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3343.96",
        "change": "+3.06%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1635.96",
        "change": "+2.99%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.54万亿",
        "change": "放量1991亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+2.03%",
        "change": "5528只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4691 / 728",
        "change": "占比 86.6%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "101 / 0",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 74,
      "rawScore": 59.9,
      "temperatureScore": 68.32,
      "resonanceAdjustment": 5.73,
      "structuralAdjustment": 0,
      "structuralFloor": 65,
      "resonanceNotes": [
        "多因子偏强共振",
        "结构分化抑制极值",
        "原口径确认强度"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 75,
      "delta": -1,
      "funddb": {
        "score": 18,
        "status": "极度恐惧",
        "tradeDate": "2026.07.31",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 97.93,
          "mappedScore": 55.18,
          "calibration": 11.0,
          "appliedCalibration": 3.85,
          "calibrationNotes": [
            "strong-median",
            "limit-up-spread",
            "high-up-ratio",
            "index-confirmed-strength"
          ],
          "priceStrength": 84,
          "participation": 74,
          "limitScore": 100,
          "median": 2.03,
          "penalties": [],
          "boosts": [
            "中位数强",
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 17.84,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 59,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.31",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 3.22,
                "weight": 0.18,
                "status": "ready",
                "value": 52.1853,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 2.03,
                "weight": 0.2,
                "status": "ready",
                "value": 0.2216,
                "detail": "12/5415 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 29.1,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.094,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 3.69,
                "weight": 0.26,
                "status": "ready",
                "value": -5.3883,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 86,
          "weight": "20%",
          "desc": "4691 / 728，101 / 0"
        },
        {
          "name": "指数路径",
          "score": 82,
          "weight": "20%",
          "desc": "四大指数平均 +2.25%"
        },
        {
          "name": "流动性",
          "score": 74,
          "weight": "10%",
          "desc": "2.54万亿 放量1991亿"
        },
        {
          "name": "恐贪风险",
          "score": 18,
          "weight": "32%",
          "desc": "自算恐贪 18 / 极度恐惧 / 中位数强、涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 73,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 59.9，再用情绪温度映射与共振修正上修至 74。当前多因子偏强共振;结构分化抑制极值;原口径确认强度，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4691，占比 86.6%，市场宽度偏强",
      "快手概念等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "PCB、CPO、光模块等科技线共振，核心股维持强势",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "长鑫科技盘中创历史新高后明显回落，高位分歧加大",
      "早盘冲高后回落，午后探低，收盘靠近低位，日内承接偏弱",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "机器人 / 商业航天",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.07.31",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中承接能否改善，成交额能否维持在2.54万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-31T17:43:07+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.30",
    "closeTime": "15:00",
    "badge": "7月30日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.30 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 40,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，收盘弱于开盘，上涨1768家，强势56家，成交2.34万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 33,
        "title": "市场宽度",
        "desc": "1768涨 / 3635跌"
      },
      {
        "score": 63,
        "title": "成交热度",
        "desc": "两市 2.34万亿"
      },
      {
        "score": 41,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 24,
        "title": "赚钱效应",
        "desc": "56涨停 / 76跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3804.69",
        "change": "-0.62%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13285.80",
        "change": "-2.73%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3244.62",
        "change": "-3.97%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1588.41",
        "change": "-5.38%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.34万亿",
        "change": "放量462亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.15%",
        "change": "5528只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1768 / 3635",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "56 / 76",
        "change": "亏钱效应扩散",
        "tone": "green"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 17,
      "rawScore": 27.66,
      "temperatureScore": 19.66,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 40,
      "delta": -23,
      "funddb": {
        "score": 19,
        "status": "极度恐惧",
        "tradeDate": "2026.07.30",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 25.96,
          "mappedScore": 23.3,
          "calibration": -2.0,
          "appliedCalibration": -2.0,
          "calibrationNotes": [
            "limit-down-dominance"
          ],
          "priceStrength": 30,
          "participation": 53,
          "limitScore": 42,
          "median": -1.15,
          "penalties": [
            "跌停多于涨停"
          ],
          "boosts": [],
          "ifindFactorScore": 18.6,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 21,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.30",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 2.31,
                "weight": 0.18,
                "status": "ready",
                "value": 58.1245,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 4.07,
                "weight": 0.2,
                "status": "ready",
                "value": 0.2955,
                "detail": "16/5415 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 33.61,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.9126,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 2.87,
                "weight": 0.26,
                "status": "ready",
                "value": -5.6045,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 30,
          "weight": "20%",
          "desc": "1768 / 3635，56 / 76"
        },
        {
          "name": "指数路径",
          "score": 11,
          "weight": "20%",
          "desc": "四大指数平均 -3.17%"
        },
        {
          "name": "流动性",
          "score": 60,
          "weight": "10%",
          "desc": "2.34万亿 放量462亿"
        },
        {
          "name": "恐贪风险",
          "score": 19,
          "weight": "32%",
          "desc": "自算恐贪 19 / 极度恐惧 / 跌停多于涨停"
        },
        {
          "name": "主线结构",
          "score": 41,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 27.7，再用情绪温度映射与共振修正下修至 17。当前多数因子偏弱，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 2.34万亿，较前一日继续放量，前一交易日 2026.07.29"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.62%，深证成指 -2.73%，创业板指 -3.97%，科创50 -5.38%",
      "指数下跌但成交额放量462亿，放量分歧明显升温",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "消费电子 / 免税 / 稀土",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.07.30",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-30T18:15:19+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.29",
    "closeTime": "15:00",
    "badge": "7月29日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.29 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 63,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度中性偏热，盘中下探后修复，收盘靠近日内高位，上涨4253家，强势86家，成交2.30万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 78,
        "title": "市场宽度",
        "desc": "4253涨 / 1215跌"
      },
      {
        "score": 63,
        "title": "成交热度",
        "desc": "两市 2.30万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 82,
        "title": "赚钱效应",
        "desc": "86涨停 / 9跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3828.47",
        "change": "+0.40%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "13658.44",
        "change": "+1.10%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3378.70",
        "change": "+1.55%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1678.74",
        "change": "-0.87%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.30万亿",
        "change": "放量2708亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.58%",
        "change": "5524只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4253 / 1215",
        "change": "占比 77.8%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "86 / 9",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 61,
      "rawScore": 47.52,
      "temperatureScore": 42.23,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 19,
      "structuralFloor": 61,
      "resonanceNotes": [
        "结构分化抑制极值",
        "结构修复抑制慢因子过度降温"
      ],
      "mood": "中性偏热",
      "moodTone": "red",
      "originalScore": 63,
      "delta": -2,
      "funddb": {
        "score": 16,
        "status": "极度恐惧",
        "tradeDate": "2026.07.29",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 73.12,
          "mappedScore": 44.19,
          "calibration": 4.0,
          "appliedCalibration": 1.4,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio"
          ],
          "priceStrength": 77,
          "participation": 59,
          "limitScore": 91,
          "median": 1.58,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 16.08,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 46,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.29",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 2.81,
                "weight": 0.18,
                "status": "ready",
                "value": 51.2236,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 0.41,
                "weight": 0.2,
                "status": "ready",
                "value": 0.0706,
                "detail": "2/2834 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 24.59,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.2056,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 1.23,
                "weight": 0.26,
                "status": "ready",
                "value": -7.2951,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 79,
          "weight": "20%",
          "desc": "4253 / 1215，86 / 9"
        },
        {
          "name": "指数路径",
          "score": 59,
          "weight": "20%",
          "desc": "四大指数平均 +0.55%"
        },
        {
          "name": "流动性",
          "score": 67,
          "weight": "10%",
          "desc": "2.30万亿 放量2708亿"
        },
        {
          "name": "恐贪风险",
          "score": 16,
          "weight": "32%",
          "desc": "自算恐贪 16 / 极度恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 47.5，再用情绪温度映射、共振修正与结构修复保护上修至 61。当前结构分化抑制极值;结构修复抑制慢因子过度降温，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4253，占比 77.8%，市场宽度偏强",
      "能源金属涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "两市成交额 2.30万亿，较前一日继续放量，前一交易日 2026.07.28",
      "三大指数集体收红：上证 +0.40%，深证成指 +1.10%，创业板指 +1.55%"
    ],
    "bearFactors": [
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "消费电子 / 免税 / 稀土",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.07.29",
    "observation": "观察重点：能源金属脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-29T19:07:58+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.28",
    "closeTime": "15:00",
    "badge": "7月28日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.28 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 50,
    "mood": "修复",
    "moodTone": "red",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨2603家，强势68家，成交2.03万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 48,
        "title": "市场宽度",
        "desc": "2603涨 / 2769跌"
      },
      {
        "score": 48,
        "title": "成交热度",
        "desc": "两市 2.03万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 59,
        "title": "赚钱效应",
        "desc": "68涨停 / 50跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3813.31",
        "change": "-1.16%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13509.68",
        "change": "-4.52%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3327.03",
        "change": "-7.35%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1693.48",
        "change": "-6.33%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.03万亿",
        "change": "缩量508亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.05%",
        "change": "5524只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "2603 / 2769",
        "change": "占比 48.5%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "68 / 50",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 18,
      "rawScore": 28.94,
      "temperatureScore": 20.75,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 50,
      "delta": -32,
      "funddb": {
        "score": 17,
        "status": "极度恐惧",
        "tradeDate": "2026.07.28",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 38.8,
          "mappedScore": 28.99,
          "calibration": 0.0,
          "appliedCalibration": 0.0,
          "calibrationNotes": [],
          "priceStrength": 52,
          "participation": 42,
          "limitScore": 58,
          "median": -0.05,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 16.89,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 29,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.28",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 3.09,
                "weight": 0.18,
                "status": "ready",
                "value": 49.3578,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 0.81,
                "weight": 0.2,
                "status": "ready",
                "value": 0.2033,
                "detail": "11/5412 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 29.51,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.0619,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 0.82,
                "weight": 0.26,
                "status": "ready",
                "value": -8.2741,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 52,
          "weight": "20%",
          "desc": "2603 / 2769，68 / 50"
        },
        {
          "name": "指数路径",
          "score": 5,
          "weight": "20%",
          "desc": "四大指数平均 -4.84%"
        },
        {
          "name": "流动性",
          "score": 40,
          "weight": "10%",
          "desc": "2.03万亿 缩量508亿"
        },
        {
          "name": "恐贪风险",
          "score": 17,
          "weight": "32%",
          "desc": "自算恐贪 17 / 极度恐惧"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 28.9，再用情绪温度映射与共振修正下修至 18。当前多数因子偏弱，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 2603，市场宽度接近均衡，局部赚钱效应仍在",
      "财税数字化等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "强势股 68 家，局部短线情绪仍有承接"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -1.16%，深证成指 -4.52%，创业板指 -7.35%，科创50 -6.33%",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "两市成交额 2.03万亿，缩量508亿，资金承接不足，前一交易日 2026.07.27"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约52.9%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "消费电子 / 免税 / 品牌消费",
        "note": "乳业涨幅+2.66%，成长方向短线承接增强",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "有色 / 小金属 / 稀土",
        "note": "洛阳钼业、紫金矿业、中国石油等成交额前排集中，成交占比约2.5%",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业 / 高股息",
        "note": "大唐发电、华电辽能、长江电力等成交额前排集中，成交占比约4.9%",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "纺织化学用品",
        "note": "纺织化学用品涨幅+4.06%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、CPO、PCB",
        "note": "半导体、CPO、PCB走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.07.28",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-28T18:10:33+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.27",
    "closeTime": "15:00",
    "badge": "7月27日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.27 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 67,
    "mood": "偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨5195家，强势121家，成交2.08万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 95,
        "title": "市场宽度",
        "desc": "5195涨 / 286跌"
      },
      {
        "score": 58,
        "title": "成交热度",
        "desc": "两市 2.08万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "121涨停 / 6跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3858.24",
        "change": "+1.15%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14148.73",
        "change": "+2.72%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3590.79",
        "change": "+3.16%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1807.95",
        "change": "+1.16%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.08万亿",
        "change": "放量1455亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+2.73%",
        "change": "5523只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "5195 / 286",
        "change": "占比 94.8%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "121 / 6",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 65,
      "rawScore": 54.78,
      "temperatureScore": 61.66,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 3,
      "structuralFloor": 65,
      "resonanceNotes": [
        "结构分化抑制极值",
        "结构修复抑制慢因子过度降温"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 67,
      "delta": -2,
      "funddb": {
        "score": 19,
        "status": "极度恐惧",
        "tradeDate": "2026.07.27",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 94.44,
          "mappedScore": 53.64,
          "calibration": 11.0,
          "appliedCalibration": 3.85,
          "calibrationNotes": [
            "strong-median",
            "limit-up-spread",
            "high-up-ratio",
            "index-confirmed-strength"
          ],
          "priceStrength": 89,
          "participation": 56,
          "limitScore": 95,
          "median": 2.73,
          "penalties": [],
          "boosts": [
            "中位数强",
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 18.99,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 57,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.27",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 5.22,
                "weight": 0.18,
                "status": "ready",
                "value": 46.0307,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 2.03,
                "weight": 0.2,
                "status": "ready",
                "value": 0.2218,
                "detail": "12/5411 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 28.69,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.0766,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 6.97,
                "weight": 0.26,
                "status": "ready",
                "value": -4.6797,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 92,
          "weight": "20%",
          "desc": "5195 / 286，121 / 6"
        },
        {
          "name": "指数路径",
          "score": 80,
          "weight": "20%",
          "desc": "四大指数平均 +2.05%"
        },
        {
          "name": "流动性",
          "score": 62,
          "weight": "10%",
          "desc": "2.08万亿 放量1455亿"
        },
        {
          "name": "恐贪风险",
          "score": 19,
          "weight": "32%",
          "desc": "自算恐贪 19 / 极度恐惧 / 中位数强、涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 54.8，再用情绪温度映射、共振修正与结构修复保护上修至 65。当前结构分化抑制极值;结构修复抑制慢因子过度降温，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 5195，占比 94.8%，市场宽度偏强",
      "快手概念等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 2.08万亿，较前一日继续放量，前一交易日 2026.07.24"
    ],
    "bearFactors": [
      "半导体走弱，高位硬科技杀估值明显",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "脑机接口",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.07.27",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-27T17:46:27+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.24",
    "closeTime": "15:00",
    "badge": "7月24日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.24 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 32,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨555家，强势42家，成交1.93万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 10,
        "title": "市场宽度",
        "desc": "555涨 / 4940跌"
      },
      {
        "score": 42,
        "title": "成交热度",
        "desc": "两市 1.93万亿"
      },
      {
        "score": 41,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 41,
        "title": "赚钱效应",
        "desc": "42涨停 / 25跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3814.20",
        "change": "-1.61%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13774.68",
        "change": "-2.47%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3480.87",
        "change": "-2.65%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1787.20",
        "change": "-0.14%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "1.93万亿",
        "change": "缩量2642亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-2.86%",
        "change": "5526只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "555 / 4940",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "42 / 25",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 4,
      "rawScore": 24.82,
      "temperatureScore": 17.32,
      "resonanceAdjustment": -13.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多因子偏弱共振",
        "核心弱因子极端偏低",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 32,
      "delta": -28,
      "funddb": {
        "score": 17,
        "status": "极度恐惧",
        "tradeDate": "2026.07.24",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 13.58,
          "mappedScore": 17.82,
          "calibration": -7.0,
          "appliedCalibration": -7.0,
          "calibrationNotes": [
            "deep-median-drawdown",
            "very-low-up-ratio"
          ],
          "priceStrength": 22,
          "participation": 36,
          "limitScore": 63,
          "median": -2.86,
          "penalties": [
            "中位数深跌",
            "指数与宽度共振偏弱",
            "缩量弱宽度"
          ],
          "boosts": [],
          "ifindFactorScore": 17.05,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 11,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.24",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 4.97,
                "weight": 0.18,
                "status": "ready",
                "value": 47.42,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 0.41,
                "weight": 0.2,
                "status": "ready",
                "value": 0.1477,
                "detail": "8/5416 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 18.85,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.4087,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 6.97,
                "weight": 0.26,
                "status": "ready",
                "value": -4.6439,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 21,
          "weight": "20%",
          "desc": "555 / 4940，42 / 25"
        },
        {
          "name": "指数路径",
          "score": 22,
          "weight": "20%",
          "desc": "四大指数平均 -1.72%"
        },
        {
          "name": "流动性",
          "score": 34,
          "weight": "10%",
          "desc": "1.93万亿 缩量2642亿"
        },
        {
          "name": "恐贪风险",
          "score": 17,
          "weight": "32%",
          "desc": "自算恐贪 17 / 极度恐惧 / 中位数深跌、指数与宽度共振偏弱、缩量弱宽度"
        },
        {
          "name": "主线结构",
          "score": 41,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 24.8，再用情绪温度映射与共振修正下修至 4。当前多因子偏弱共振;核心弱因子极端偏低;原口径确认弱度，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -1.61%，深证成指 -2.47%，创业板指 -2.65%",
      "通信线缆及配套走弱，高位硬科技杀估值明显",
      "两市成交额 1.93万亿，缩量2642亿，资金承接不足，前一交易日 2026.07.23",
      "早盘冲高后回落，午后探低，收盘靠近低位，日内承接偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "兵装重组概念",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.07.24",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-24T16:03:15+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.23",
    "closeTime": "15:00",
    "badge": "7月23日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.23 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 60,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度中性偏热，早盘冲高后回落，收盘弱于开盘，上涨4260家，强势128家，成交2.20万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 78,
        "title": "市场宽度",
        "desc": "4260涨 / 1208跌"
      },
      {
        "score": 49,
        "title": "成交热度",
        "desc": "两市 2.20万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "128涨停 / 2跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3876.78",
        "change": "+0.25%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14123.31",
        "change": "+0.44%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3575.52",
        "change": "+0.25%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1789.69",
        "change": "-3.78%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.20万亿",
        "change": "缩量4580亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.82%",
        "change": "5526只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4260 / 1208",
        "change": "占比 77.9%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "128 / 2",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 58,
      "rawScore": 43.12,
      "temperatureScore": 35.38,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 23,
      "structuralFloor": 58,
      "resonanceNotes": [
        "结构分化抑制极值",
        "结构修复抑制慢因子过度降温"
      ],
      "mood": "中性偏热",
      "moodTone": "red",
      "originalScore": 60,
      "delta": -2,
      "funddb": {
        "score": 16,
        "status": "极度恐惧",
        "tradeDate": "2026.07.23",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 69.46,
          "mappedScore": 42.57,
          "calibration": 4.0,
          "appliedCalibration": 1.4,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio"
          ],
          "priceStrength": 79,
          "participation": 42,
          "limitScore": 98,
          "median": 1.82,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 16.04,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 44,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.23",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 6.77,
                "weight": 0.18,
                "status": "ready",
                "value": 45.1042,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 1.22,
                "weight": 0.2,
                "status": "ready",
                "value": 0.2215,
                "detail": "12/5417 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 18.85,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.4087,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 1.23,
                "weight": 0.26,
                "status": "ready",
                "value": -6.0264,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 80,
          "weight": "20%",
          "desc": "4260 / 1208，128 / 2"
        },
        {
          "name": "指数路径",
          "score": 49,
          "weight": "20%",
          "desc": "四大指数平均 -0.71%"
        },
        {
          "name": "流动性",
          "score": 41,
          "weight": "10%",
          "desc": "2.20万亿 缩量4580亿"
        },
        {
          "name": "恐贪风险",
          "score": 16,
          "weight": "32%",
          "desc": "自算恐贪 16 / 极度恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 43.1，再用情绪温度映射、共振修正与结构修复保护上修至 58。当前结构分化抑制极值;结构修复抑制慢因子过度降温，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4260，占比 77.9%，市场宽度偏强",
      "金属锌涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "三大指数集体收红：上证 +0.25%，深证成指 +0.44%，创业板指 +0.25%",
      "电力、芯片、PCB等轮番走强，热点扩散度提升"
    ],
    "bearFactors": [
      "指数修复但成交额缩量4580亿，增量资金仍需确认，前一交易日 2026.07.22",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "浪潮信息盘中创历史新高后明显回落，高位分歧加大"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "兵装重组概念",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.07.23",
    "observation": "观察重点：金属锌脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-23T15:13:06+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.22",
    "closeTime": "15:00",
    "badge": "7月22日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.22 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 45,
    "mood": "修复",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨1530家，强势48家，成交2.65万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 28,
        "title": "市场宽度",
        "desc": "1530涨 / 3876跌"
      },
      {
        "score": 60,
        "title": "成交热度",
        "desc": "两市 2.65万亿"
      },
      {
        "score": 42,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 56,
        "title": "赚钱效应",
        "desc": "48涨停 / 9跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3867.03",
        "change": "+0.07%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14061.44",
        "change": "-1.42%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3566.73",
        "change": "-3.23%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1860.08",
        "change": "-2.26%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.65万亿",
        "change": "缩量3037亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.28%",
        "change": "5526只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1530 / 3876",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "48 / 9",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 21,
      "rawScore": 32.0,
      "temperatureScore": 23.46,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 45,
      "delta": -24,
      "funddb": {
        "score": 17,
        "status": "极度恐惧",
        "tradeDate": "2026.07.22",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 43.07,
          "mappedScore": 30.88,
          "calibration": 0.0,
          "appliedCalibration": 0.0,
          "calibrationNotes": [],
          "priceStrength": 39,
          "participation": 48,
          "limitScore": 84,
          "median": -1.28,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 17.07,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 31,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.22",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 5.7,
                "weight": 0.18,
                "status": "ready",
                "value": 49.3768,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 2.44,
                "weight": 0.2,
                "status": "ready",
                "value": 0.351,
                "detail": "19/5413 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 17.62,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.4679,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 5.74,
                "weight": 0.26,
                "status": "ready",
                "value": -4.7627,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 38,
          "weight": "20%",
          "desc": "1530 / 3876，48 / 9"
        },
        {
          "name": "指数路径",
          "score": 31,
          "weight": "20%",
          "desc": "四大指数平均 -1.71%"
        },
        {
          "name": "流动性",
          "score": 52,
          "weight": "10%",
          "desc": "2.65万亿 缩量3037亿"
        },
        {
          "name": "恐贪风险",
          "score": 17,
          "weight": "32%",
          "desc": "自算恐贪 17 / 极度恐惧"
        },
        {
          "name": "主线结构",
          "score": 42,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 32.0，再用情绪温度映射与共振修正下修至 21。当前多数因子偏弱，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "金属铅涨幅靠前，但成交主线仍以通信设备 / 光模块 / 光纤为核心",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "仍有单一指数抗跌收红：上证 +0.07%，深证成指 -1.42%，创业板指 -3.23%"
    ],
    "bearFactors": [
      "多数指数收跌：上证 +0.07%，深证成指 -1.42%，创业板指 -3.23%",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "华虹宏力盘中创历史新高后明显回落，高位分歧加大",
      "两市成交额 2.65万亿，缩量3037亿，资金承接不足，前一交易日 2026.07.21"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 煤炭",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "金属铅",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.07.22",
    "observation": "观察重点：金属铅脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-22T17:44:22+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.21",
    "closeTime": "15:00",
    "badge": "7月21日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.21 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 68,
    "mood": "偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨3107家，强势121家，成交2.96万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 57,
        "title": "市场宽度",
        "desc": "3107涨 / 2301跌"
      },
      {
        "score": 80,
        "title": "成交热度",
        "desc": "两市 2.96万亿"
      },
      {
        "score": 73,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 76,
        "title": "赚钱效应",
        "desc": "121涨停 / 27跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3864.37",
        "change": "+1.79%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14264.29",
        "change": "+4.81%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3685.97",
        "change": "+7.05%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1903.16",
        "change": "+10.73%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.96万亿",
        "change": "放量2550亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.59%",
        "change": "5525只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3107 / 2301",
        "change": "占比 57.5%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "121 / 27",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 72,
      "rawScore": 57.78,
      "temperatureScore": 65.78,
      "resonanceAdjustment": 5.73,
      "structuralAdjustment": 0,
      "structuralFloor": 60,
      "resonanceNotes": [
        "多因子偏强共振",
        "结构分化抑制极值",
        "原口径确认强度"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 68,
      "delta": 4,
      "funddb": {
        "score": 17,
        "status": "极度恐惧",
        "tradeDate": "2026.07.21",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 85.39,
          "mappedScore": 49.63,
          "calibration": 6.0,
          "appliedCalibration": 2.1,
          "calibrationNotes": [
            "limit-up-spread",
            "index-confirmed-strength"
          ],
          "priceStrength": 64,
          "participation": 80,
          "limitScore": 82,
          "median": 0.59,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 16.84,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 52,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.21",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 4.38,
                "weight": 0.18,
                "status": "ready",
                "value": 51.0557,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 0.41,
                "weight": 0.2,
                "status": "ready",
                "value": 0.2032,
                "detail": "11/5413 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 15.57,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.6211,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 8.61,
                "weight": 0.26,
                "status": "ready",
                "value": -3.8273,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 64,
          "weight": "20%",
          "desc": "3107 / 2301，121 / 27"
        },
        {
          "name": "指数路径",
          "score": 90,
          "weight": "20%",
          "desc": "四大指数平均 +6.09%"
        },
        {
          "name": "流动性",
          "score": 84,
          "weight": "10%",
          "desc": "2.96万亿 放量2550亿"
        },
        {
          "name": "恐贪风险",
          "score": 17,
          "weight": "32%",
          "desc": "自算恐贪 17 / 极度恐惧 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 73,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 57.8，再用情绪温度映射与共振修正上修至 72。当前多因子偏强共振;结构分化抑制极值;原口径确认强度，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3107，占比 57.5%，市场宽度偏强",
      "PCB、CPO、光模块等科技线共振，核心股维持强势",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "两市成交额 2.96万亿，较前一日继续放量，前一交易日 2026.07.20"
    ],
    "bearFactors": [
      "指数修复后仍需观察能否继续向个股扩散",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "国家大基金持股",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.07.21",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在2.96万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-21T18:28:39+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.20",
    "closeTime": "15:00",
    "badge": "7月20日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.20 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 41,
    "mood": "偏冷",
    "moodTone": "blue",
    "summary": "收盘温度偏冷，早盘冲高后回落，收盘弱于开盘，上涨1740家，强势54家，成交2.70万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 32,
        "title": "市场宽度",
        "desc": "1740涨 / 3710跌"
      },
      {
        "score": 72,
        "title": "成交热度",
        "desc": "两市 2.70万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 19,
        "title": "赚钱效应",
        "desc": "54涨停 / 238跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3796.28",
        "change": "+0.85%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "13610.23",
        "change": "-0.71%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3443.10",
        "change": "+0.42%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1718.69",
        "change": "+0.19%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.70万亿",
        "change": "放量472亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-2.10%",
        "change": "5524只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1740 / 3710",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "54 / 238",
        "change": "亏钱效应扩散",
        "tone": "green"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 27,
      "rawScore": 35.5,
      "temperatureScore": 26.79,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 41,
      "delta": -14,
      "funddb": {
        "score": 15,
        "status": "极度恐惧",
        "tradeDate": "2026.07.20",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 26.76,
          "mappedScore": 23.65,
          "calibration": -5.0,
          "appliedCalibration": -5.0,
          "calibrationNotes": [
            "weak-median",
            "limit-down-dominance"
          ],
          "priceStrength": 26,
          "participation": 55,
          "limitScore": 18,
          "median": -2.1,
          "penalties": [
            "中位数深跌",
            "跌停多于涨停"
          ],
          "boosts": [],
          "ifindFactorScore": 15.25,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 19,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.20",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 2.08,
                "weight": 0.18,
                "status": "ready",
                "value": 56.6073,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 0.81,
                "weight": 0.2,
                "status": "ready",
                "value": 0.2402,
                "detail": "13/5412 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 21.72,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.2209,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 0,
                "weight": 0.26,
                "status": "ready",
                "value": -9.2815,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 27,
          "weight": "20%",
          "desc": "1740 / 3710，54 / 238"
        },
        {
          "name": "指数路径",
          "score": 56,
          "weight": "20%",
          "desc": "四大指数平均 +0.19%"
        },
        {
          "name": "流动性",
          "score": 60,
          "weight": "10%",
          "desc": "2.70万亿 放量472亿"
        },
        {
          "name": "恐贪风险",
          "score": 15,
          "weight": "32%",
          "desc": "自算恐贪 15 / 极度恐惧 / 中位数深跌、跌停多于涨停"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 35.5，再用情绪温度映射与共振修正下修至 27。当前未出现明显单边共振，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "煤炭概念涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 2.70万亿，较前一日继续放量，前一交易日 2026.07.17",
      "多数指数收红：上证 +0.85%，深证成指 -0.71%，创业板指 +0.42%"
    ],
    "bearFactors": [
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温",
      "上涨家数仅 1740，占比 31.9%，个股宽度偏弱",
      "强势股 54 家，短线强度偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "电力 / 公用事业 / 高股息",
        "note": "大唐发电、华电辽能、长江电力等成交额前排集中，成交占比约4.7%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "AI应用 / 软件 / 数据要素",
        "note": "金山办公、万华化学、东方财富等成交额前排集中，成交占比约3.2%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "油气开采",
        "note": "油气开采涨幅+7.98%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "互联网保险",
        "note": "互联网保险涨幅+1.30%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "电能综合服务",
        "note": "电能综合服务涨幅+7.50%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、CPO、PCB",
        "note": "半导体、CPO、PCB走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.07.20",
    "observation": "观察重点：煤炭脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-20T15:09:29+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.17",
    "closeTime": "15:00",
    "badge": "7月17日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.17 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 32,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨482家，强势35家，成交2.65万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 9,
        "title": "市场宽度",
        "desc": "482涨 / 5001跌"
      },
      {
        "score": 72,
        "title": "成交热度",
        "desc": "两市 2.65万亿"
      },
      {
        "score": 42,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 12,
        "title": "赚钱效应",
        "desc": "35涨停 / 198跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3764.15",
        "change": "-3.05%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "13706.88",
        "change": "-5.40%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3428.63",
        "change": "-7.15%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1715.40",
        "change": "-7.12%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.65万亿",
        "change": "放量2514亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-4.12%",
        "change": "5522只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "482 / 5001",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "35 / 198",
        "change": "亏钱效应扩散",
        "tone": "green"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 9,
      "rawScore": 21.36,
      "temperatureScore": 14.61,
      "resonanceAdjustment": -5.4,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱",
        "核心弱因子极端偏低",
        "结构分化抑制极值",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 32,
      "delta": -23,
      "funddb": {
        "score": 15,
        "status": "极度恐惧",
        "tradeDate": "2026.07.17",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 0,
          "mappedScore": 11.78,
          "calibration": -9.0,
          "appliedCalibration": -9.0,
          "calibrationNotes": [
            "deep-median-drawdown",
            "limit-down-dominance",
            "very-low-up-ratio"
          ],
          "priceStrength": 8,
          "participation": 54,
          "limitScore": 15,
          "median": -4.12,
          "penalties": [
            "中位数深跌",
            "跌停多于涨停",
            "指数与宽度共振偏弱"
          ],
          "boosts": [],
          "ifindFactorScore": 15.17,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 3,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.17",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 2.08,
                "weight": 0.18,
                "status": "ready",
                "value": 58.2062,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 0.41,
                "weight": 0.2,
                "status": "ready",
                "value": 0.2033,
                "detail": "11/5410 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 21.72,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.2209,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 0,
                "weight": 0.26,
                "status": "ready",
                "value": -8.5383,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 10,
          "weight": "20%",
          "desc": "482 / 5001，35 / 198"
        },
        {
          "name": "指数路径",
          "score": 5,
          "weight": "20%",
          "desc": "四大指数平均 -5.68%"
        },
        {
          "name": "流动性",
          "score": 60,
          "weight": "10%",
          "desc": "2.65万亿 放量2514亿"
        },
        {
          "name": "恐贪风险",
          "score": 15,
          "weight": "32%",
          "desc": "自算恐贪 15 / 极度恐惧 / 中位数深跌、跌停多于涨停、指数与宽度共振偏弱"
        },
        {
          "name": "主线结构",
          "score": 42,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 21.4，再用情绪温度映射与共振修正下修至 9。当前多数因子偏弱;核心弱因子极端偏低;结构分化抑制极值;原口径确认弱度，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 2.65万亿，较前一日继续放量，前一交易日 2026.07.16"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -3.05%，深证成指 -5.40%，创业板指 -7.15%，科创50 -7.12%",
      "指数下跌但成交额放量2514亿，放量分歧明显升温",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "弹性题材",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.07.17",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-17T16:20:38+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.16",
    "closeTime": "15:00",
    "badge": "7月16日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.16 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 50,
    "mood": "修复",
    "moodTone": "red",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨2499家，强势48家，成交2.40万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 47,
        "title": "市场宽度",
        "desc": "2499涨 / 2861跌"
      },
      {
        "score": 54,
        "title": "成交热度",
        "desc": "两市 2.40万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 56,
        "title": "赚钱效应",
        "desc": "48涨停 / 38跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3882.41",
        "change": "-1.85%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "14488.65",
        "change": "-1.97%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3692.46",
        "change": "-2.95%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1846.88",
        "change": "-4.02%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.40万亿",
        "change": "缩量1676亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.18%",
        "change": "5524只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "2499 / 2861",
        "change": "占比 46.6%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "48 / 38",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 23,
      "rawScore": 30.94,
      "temperatureScore": 22.5,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 50,
      "delta": -27,
      "funddb": {
        "score": 17,
        "status": "极度恐惧",
        "tradeDate": "2026.07.16",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 40.56,
          "mappedScore": 29.77,
          "calibration": 0.0,
          "appliedCalibration": 0.0,
          "calibrationNotes": [],
          "priceStrength": 50,
          "participation": 46,
          "limitScore": 56,
          "median": -0.18,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 16.86,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 30,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.16",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 2.74,
                "weight": 0.18,
                "status": "ready",
                "value": 51.3295,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 0.81,
                "weight": 0.2,
                "status": "ready",
                "value": 0.2957,
                "detail": "16/5410 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 25.0,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.1245,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 3.69,
                "weight": 0.26,
                "status": "ready",
                "value": -4.9746,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 50,
          "weight": "20%",
          "desc": "2499 / 2861，48 / 38"
        },
        {
          "name": "指数路径",
          "score": 14,
          "weight": "20%",
          "desc": "四大指数平均 -2.70%"
        },
        {
          "name": "流动性",
          "score": 46,
          "weight": "10%",
          "desc": "2.40万亿 缩量1676亿"
        },
        {
          "name": "恐贪风险",
          "score": 17,
          "weight": "32%",
          "desc": "自算恐贪 17 / 极度恐惧"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 30.9，再用情绪温度映射与共振修正下修至 23。当前未出现明显单边共振，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 2499，市场宽度接近均衡，局部赚钱效应仍在",
      "小红书概念等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -1.85%，深证成指 -1.97%，创业板指 -2.95%，科创50 -4.02%",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "两市成交额 2.40万亿，缩量1676亿，资金承接不足，前一交易日 2026.07.15"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、新易盛、亨通光电等成交额前排集中，成交占比约54.9%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "广告营销",
        "note": "广告营销涨幅+3.02%，成长方向短线承接增强",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "猪肉",
        "note": "猪肉涨幅+2.16%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "医疗美容",
        "note": "医疗美容涨幅+3.32%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "影视院线",
        "note": "影视院线涨幅+4.96%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、CPO、PCB",
        "note": "半导体、CPO、PCB走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.07.16",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-16T18:07:51+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.15",
    "closeTime": "15:00",
    "badge": "7月15日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.15 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 57,
    "mood": "分化偏多",
    "moodTone": "blue",
    "summary": "指数回调但个股普涨，PCB / CPO / 光模块接力，半导体 / CPO / PCB杀估值加剧，属于宽度修复但主线分化盘",
    "miniGauges": [
      {
        "score": 61,
        "title": "市场宽度",
        "desc": "3351涨 / 2098跌"
      },
      {
        "score": 58,
        "title": "成交热度",
        "desc": "两市 2.57万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 64,
        "title": "赚钱效应",
        "desc": "74涨停 / 33跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3955.58",
        "change": "-0.29%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "14779.40",
        "change": "-0.97%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3804.70",
        "change": "-1.21%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1924.27",
        "change": "-4.25%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.57万亿",
        "change": "缩量1328亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.77%",
        "change": "5525只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3351 / 2098",
        "change": "占比 61.5%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "74 / 33",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 53,
      "rawScore": 35.86,
      "temperatureScore": 27.15,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 26,
      "structuralFloor": 53,
      "resonanceNotes": [
        "结构修复抑制慢因子过度降温"
      ],
      "mood": "修复",
      "moodTone": "red",
      "originalScore": 57,
      "delta": -4,
      "funddb": {
        "score": 18,
        "status": "极度恐惧",
        "tradeDate": "2026.07.15",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 53.52,
          "mappedScore": 35.51,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 62,
          "participation": 48,
          "limitScore": 69,
          "median": 0.77,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 18.46,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 36,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.15",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 5.18,
                "weight": 0.18,
                "status": "ready",
                "value": 46.8429,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 0.81,
                "weight": 0.2,
                "status": "ready",
                "value": 0.4435,
                "detail": "24/5412 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 17.62,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.4495,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 12.7,
                "weight": 0.26,
                "status": "ready",
                "value": -2.3038,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8725,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 62,
          "weight": "20%",
          "desc": "3351 / 2098，74 / 33"
        },
        {
          "name": "指数路径",
          "score": 23,
          "weight": "20%",
          "desc": "四大指数平均 -1.68%"
        },
        {
          "name": "流动性",
          "score": 50,
          "weight": "10%",
          "desc": "2.57万亿 缩量1328亿"
        },
        {
          "name": "恐贪风险",
          "score": 18,
          "weight": "32%",
          "desc": "自算恐贪 18 / 极度恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 35.9，再用情绪温度映射、共振修正与结构修复保护上修至 53。当前结构修复抑制慢因子过度降温，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3351，占比 61.5%，情绪宽度明显优于指数",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 2.57万亿，较前一日缩量1328亿，但活跃度仍维持在高位区间",
      "强势股 74 家，局部短线情绪仍有承接"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.29%，深证成指 -0.97%，创业板指 -1.21%，科创50 -4.25%",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "东山精密、通富微电盘中创历史新高后明显回落，高位分歧加大"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "机器人 / 人形机器人",
        "note": "高辨识度分支继续活跃，但指数急跌下追高资金需谨慎",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "航天装备 / 军工",
        "note": "强势题材横向扩散，说明短线资金仍在寻找承接方向",
        "tone": "up"
      },
      {
        "tag": "回流",
        "name": "AI应用 / 计算机 / 电力 / 公用事业",
        "note": "低位和避险方向出现资金回流，与高位分歧并行",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、CPO、PCB",
        "note": "高位科技与指数权重承压，短线拥挤度仍需消化",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.07.15",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-15T16:31:41+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.14",
    "closeTime": "15:00",
    "badge": "7月14日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.14 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 63,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度修复，盘中下探后修复，收盘靠近日内高位，上涨4211家，强势87家，成交2.70万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 77,
        "title": "市场宽度",
        "desc": "4211涨 / 1247跌"
      },
      {
        "score": 62,
        "title": "成交热度",
        "desc": "两市 2.70万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 77,
        "title": "赚钱效应",
        "desc": "87涨停 / 25跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3967.13",
        "change": "+1.36%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14924.87",
        "change": "+2.77%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3851.14",
        "change": "+3.43%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "2009.73",
        "change": "+0.77%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.70万亿",
        "change": "缩量1138亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.55%",
        "change": "5524只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4211 / 1247",
        "change": "占比 77.2%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "87 / 25",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 50,
      "rawScore": 50.22,
      "temperatureScore": 50.22,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "结构分化抑制极值"
      ],
      "mood": "修复",
      "moodTone": "red",
      "originalScore": 63,
      "delta": -13,
      "funddb": {
        "score": 16,
        "status": "极度恐惧",
        "tradeDate": "2026.07.14",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 81.2,
          "mappedScore": 47.77,
          "calibration": 8.0,
          "appliedCalibration": 2.8,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio",
            "index-confirmed-strength"
          ],
          "priceStrength": 75,
          "participation": 51,
          "limitScore": 78,
          "median": 1.55,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 16.24,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 51,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.14",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 4.64,
                "weight": 0.18,
                "status": "ready",
                "value": 45.811,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 0.81,
                "weight": 0.2,
                "status": "ready",
                "value": 0.4435,
                "detail": "24/5411 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 3.69,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -2.2204,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 13.11,
                "weight": 0.26,
                "status": "ready",
                "value": -2.255,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 56.21,
                "weight": 0.2,
                "status": "ready",
                "value": 8.8725,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 77,
          "weight": "20%",
          "desc": "4211 / 1247，87 / 25"
        },
        {
          "name": "指数路径",
          "score": 81,
          "weight": "20%",
          "desc": "四大指数平均 +2.08%"
        },
        {
          "name": "流动性",
          "score": 54,
          "weight": "10%",
          "desc": "2.70万亿 缩量1138亿"
        },
        {
          "name": "恐贪风险",
          "score": 16,
          "weight": "32%",
          "desc": "自算恐贪 16 / 极度恐惧 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 50.2，再用情绪温度映射与共振修正持平至 50。当前结构分化抑制极值，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4211，占比 77.2%，市场宽度偏强",
      "金属铅涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "沪深两市成交额 2.70万亿，活跃度仍在高位",
      "三大指数集体收红：上证 +1.36%，深证成指 +2.77%，创业板指 +3.43%"
    ],
    "bearFactors": [
      "指数修复但成交额缩量1138亿，增量资金仍需确认，前一交易日 2026.07.13",
      "半导体走弱，高位硬科技杀估值明显",
      "拓荆科技盘中创历史新高后明显回落，高位分歧加大",
      "盘中振幅偏大，修复并非单边走强"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "消费电子 / 免税 / 稀土",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.07.14",
    "observation": "观察重点：金属铅脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-15T09:16:37+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.13",
    "closeTime": "15:00",
    "badge": "7月13日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.13 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 32,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨801家，强势32家，成交2.82万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 15,
        "title": "市场宽度",
        "desc": "801涨 / 4683跌"
      },
      {
        "score": 64,
        "title": "成交热度",
        "desc": "两市 2.82万亿"
      },
      {
        "score": 42,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 13,
        "title": "赚钱效应",
        "desc": "32涨停 / 176跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3913.79",
        "change": "-2.06%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "14522.85",
        "change": "-3.48%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3723.52",
        "change": "-3.10%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1994.32",
        "change": "-3.42%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.82万亿",
        "change": "缩量5708亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-4.19%",
        "change": "5524只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "801 / 4683",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "32 / 176",
        "change": "亏钱效应扩散",
        "tone": "green"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 9,
      "rawScore": 24.12,
      "temperatureScore": 16.76,
      "resonanceAdjustment": -7.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱",
        "核心弱因子极端偏低",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 32,
      "delta": -23,
      "funddb": {
        "score": 18,
        "status": "极度恐惧",
        "tradeDate": "2026.07.13",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 2.74,
          "mappedScore": 13.01,
          "calibration": -9.0,
          "appliedCalibration": -9.0,
          "calibrationNotes": [
            "deep-median-drawdown",
            "limit-down-dominance",
            "very-low-up-ratio"
          ],
          "priceStrength": 11,
          "participation": 51,
          "limitScore": 15,
          "median": -4.19,
          "penalties": [
            "中位数深跌",
            "跌停多于涨停",
            "指数与宽度共振偏弱"
          ],
          "boosts": [],
          "ifindFactorScore": 18.34,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 4,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.13",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 3.47,
                "weight": 0.18,
                "status": "ready",
                "value": 46.7224,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 0.41,
                "weight": 0.2,
                "status": "ready",
                "value": 0.2403,
                "detail": "13/5410 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 18.44,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.2945,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 13.93,
                "weight": 0.26,
                "status": "ready",
                "value": -2.0569,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 55.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8179,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 14,
          "weight": "20%",
          "desc": "801 / 4683，32 / 176"
        },
        {
          "name": "指数路径",
          "score": 12,
          "weight": "20%",
          "desc": "四大指数平均 -3.02%"
        },
        {
          "name": "流动性",
          "score": 56,
          "weight": "10%",
          "desc": "2.82万亿 缩量5708亿"
        },
        {
          "name": "恐贪风险",
          "score": 18,
          "weight": "32%",
          "desc": "自算恐贪 18 / 极度恐惧 / 中位数深跌、跌停多于涨停、指数与宽度共振偏弱"
        },
        {
          "name": "主线结构",
          "score": 42,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 24.1，再用情绪温度映射与共振修正下修至 9。当前多数因子偏弱;核心弱因子极端偏低;原口径确认弱度，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -2.06%，深证成指 -3.48%，创业板指 -3.10%，科创50 -3.42%",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "拓荆科技盘中创历史新高后明显回落，高位分歧加大"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "禽流感",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.07.13",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-13T17:58:12+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.10",
    "closeTime": "15:00",
    "badge": "7月10日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.10 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 49,
    "mood": "高位分歧",
    "moodTone": "blue",
    "summary": "指数集体回调但个股上涨家数占优，成交放量至3.39万亿，机器人 / 人形机器人 / 航天装备 / 军工 / AI应用 / 计算机轮动活跃，属于指数承压与题材切换并存的高位分歧盘",
    "miniGauges": [
      {
        "score": 69,
        "title": "市场宽度",
        "desc": "3772涨 / 1678跌"
      },
      {
        "score": 91,
        "title": "成交热度",
        "desc": "两市 3.39万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "机器人 / 人形机器人 / 航天装备 / 军工 / AI应用 / 计算机"
      },
      {
        "score": 10,
        "title": "指数韧性",
        "desc": "创业板跌4.37%"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3996.16",
        "change": "-1.00%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "15046.67",
        "change": "-2.29%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3842.73",
        "change": "-4.37%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "2064.98",
        "change": "-5.53%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "3.39万亿",
        "change": "放量4748亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.24%",
        "change": "5521只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3772 / 1678",
        "change": "占比 69.2%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "94 / 5",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 31,
      "rawScore": 39.7,
      "temperatureScore": 31.23,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "结构分化抑制极值"
      ],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 49,
      "delta": -18,
      "funddb": {
        "score": 25,
        "status": "恐惧",
        "tradeDate": "2026.07.10",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 56.88,
          "mappedScore": 37.0,
          "calibration": 4.0,
          "appliedCalibration": 1.4,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio"
          ],
          "priceStrength": 62,
          "participation": 76,
          "limitScore": 95,
          "median": 1.24,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 25.44,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 38,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.10",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 5.87,
                "weight": 0.18,
                "status": "ready",
                "value": 43.1928,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 1.63,
                "weight": 0.2,
                "status": "ready",
                "value": 0.7029,
                "detail": "38/5406 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 15.98,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.5936,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 40.16,
                "weight": 0.26,
                "status": "ready",
                "value": 0.9447,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 55.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8179,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 62,
          "weight": "20%",
          "desc": "3772 / 1678，94 / 5"
        },
        {
          "name": "指数路径",
          "score": 10,
          "weight": "20%",
          "desc": "四大指数平均 -3.30%"
        },
        {
          "name": "流动性",
          "score": 92,
          "weight": "10%",
          "desc": "3.39万亿 放量4748亿"
        },
        {
          "name": "恐贪风险",
          "score": 25,
          "weight": "32%",
          "desc": "自算恐贪 25 / 恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "机器人 / 人形机器人 / 航天装备 / 军工 / AI应用 / 计算机"
        }
      ],
      "summary": "新版保留原权重得到原始分 39.7，再用情绪温度映射与共振修正下修至 31。当前结构分化抑制极值，恐贪代理口径为恐惧，机器人 / 人形机器人 / 航天装备 / 军工 / AI应用 / 计算机。"
    },
    "bullFactors": [
      "上涨家数 3772，占比 69.2%，情绪宽度明显优于指数",
      "广告营销等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 3.39万亿，较前一日继续放量，前一交易日 2026.07.09"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -1.00%，深证成指 -2.29%，创业板指 -4.37%，科创50 -5.53%",
      "指数下跌但成交额放量4748亿，放量分歧明显升温",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "机器人 / 人形机器人",
        "note": "高辨识度分支继续活跃，但指数急跌下追高资金需谨慎",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "航天装备 / 军工",
        "note": "强势题材横向扩散，说明短线资金仍在寻找承接方向",
        "tone": "up"
      },
      {
        "tag": "回流",
        "name": "AI应用 / 计算机 / 电力 / 公用事业",
        "note": "低位和避险方向出现资金回流，与高位分歧并行",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、CPO、PCB",
        "note": "高位科技与指数权重承压，短线拥挤度仍需消化",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.07.10",
    "observation": "观察重点：沪指4000点附近能否获得有效承接，机器人 / 人形机器人 / 航天装备 / 军工 / AI应用 / 计算机能否持续强势，高位科技承压后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-10T17:50:16+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.09",
    "closeTime": "15:00",
    "badge": "7月9日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.09 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 63,
    "mood": "中性偏热",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨2486家，强势75家，成交2.91万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 46,
        "title": "市场宽度",
        "desc": "2486涨 / 2888跌"
      },
      {
        "score": 79,
        "title": "成交热度",
        "desc": "两市 2.91万亿"
      },
      {
        "score": 67,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 71,
        "title": "赚钱效应",
        "desc": "75涨停 / 14跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4036.59",
        "change": "+1.65%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "15398.73",
        "change": "+3.07%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "4018.17",
        "change": "+4.49%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "2185.83",
        "change": "+8.41%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.91万亿",
        "change": "放量3502亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.18%",
        "change": "5520只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "2486 / 2888",
        "change": "占比 46.3%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "75 / 14",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 68,
      "rawScore": 58.64,
      "temperatureScore": 66.84,
      "resonanceAdjustment": 1.3,
      "structuralAdjustment": 0,
      "structuralFloor": 59,
      "resonanceNotes": [
        "多数因子偏强",
        "结构分化抑制极值"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 63,
      "delta": 5,
      "funddb": {
        "score": 29,
        "status": "恐惧",
        "tradeDate": "2026.07.09",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 75.05,
          "mappedScore": 45.05,
          "calibration": -3.0,
          "appliedCalibration": -3.0,
          "calibrationNotes": [
            "limit-up-spread",
            "active-but-weak-internals"
          ],
          "priceStrength": 55,
          "participation": 77,
          "limitScore": 84,
          "median": -0.18,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 29.11,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 42,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.09",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 6.96,
                "weight": 0.18,
                "status": "ready",
                "value": 43.7544,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 2.85,
                "weight": 0.2,
                "status": "ready",
                "value": 1.0727,
                "detail": "58/5407 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 8.2,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.8407,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 57.38,
                "weight": 0.26,
                "status": "ready",
                "value": 2.4417,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 55.3,
                "weight": 0.2,
                "status": "ready_previous_available",
                "value": 8.8179,
                "detail": "Current-day iFinD margin buy amount is empty; using the latest verified leverage observation because margin data can lag after the close."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 55,
          "weight": "20%",
          "desc": "2486 / 2888，75 / 14"
        },
        {
          "name": "指数路径",
          "score": 90,
          "weight": "20%",
          "desc": "四大指数平均 +4.41%"
        },
        {
          "name": "流动性",
          "score": 83,
          "weight": "10%",
          "desc": "2.91万亿 放量3502亿"
        },
        {
          "name": "恐贪风险",
          "score": 29,
          "weight": "32%",
          "desc": "自算恐贪 29 / 恐惧 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 67,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 58.6，再用情绪温度映射与共振修正上修至 68。当前多数因子偏强;结构分化抑制极值，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 2486，市场宽度接近均衡，局部赚钱效应仍在",
      "PCB、CPO、光模块午后共振，中芯国际、长川科技等核心股创历史新高",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "两市成交额 2.91万亿，较前一日继续放量，前一交易日 2026.07.08"
    ],
    "bearFactors": [
      "指数修复后仍需观察能否继续向个股扩散",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约55.4%",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "科创次新股",
        "note": "科创次新股涨幅+6.23%，主线链条内热度继续外溢",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "机器人 / 工业母机 / 低空",
        "note": "亿纬锂能、华友钴业、厦门钨业等成交额前排集中，成交占比约2.1%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "有色 / 小金属 / 稀土",
        "note": "洛阳钼业、紫金矿业、北方稀土等成交额前排集中，成交占比约1.8%",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业 / 高股息",
        "note": "大唐发电、长江电力、中国平安等成交额前排集中，成交占比约1.5%",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "农业综合",
        "note": "农业综合跌幅-4.26%，退潮压力需要跟踪",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.07.09",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在2.91万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-09T16:04:51+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.08",
    "closeTime": "15:00",
    "badge": "7月8日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.08 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 38,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，收盘弱于开盘，上涨1593家，强势56家，成交2.56万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 30,
        "title": "市场宽度",
        "desc": "1593涨 / 3790跌"
      },
      {
        "score": 61,
        "title": "成交热度",
        "desc": "两市 2.56万亿"
      },
      {
        "score": 42,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 24,
        "title": "赚钱效应",
        "desc": "56涨停 / 44跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3970.88",
        "change": "-0.49%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "14939.73",
        "change": "-1.87%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3845.35",
        "change": "-1.70%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "2016.23",
        "change": "+0.73%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.56万亿",
        "change": "缩量176亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.40%",
        "change": "5518只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1593 / 3790",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "56 / 44",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 21,
      "rawScore": 32.46,
      "temperatureScore": 23.88,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 38,
      "delta": -17,
      "funddb": {
        "score": 20,
        "status": "极度恐惧",
        "tradeDate": "2026.07.08",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": null,
        "referenceTradeDate": null,
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 37.68,
          "mappedScore": 28.49,
          "calibration": 0.0,
          "appliedCalibration": 0.0,
          "calibrationNotes": [],
          "priceStrength": 28,
          "participation": 49,
          "limitScore": 56,
          "median": -1.4,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 19.63,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 28,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.08",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 5.82,
                "weight": 0.18,
                "status": "ready",
                "value": 40.6073,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 1.22,
                "weight": 0.2,
                "status": "ready",
                "value": 0.6659,
                "detail": "36/5406 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 8.2,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.8407,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 22.95,
                "weight": 0.26,
                "status": "ready",
                "value": -1.2116,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 55.3,
                "weight": 0.2,
                "status": "ready",
                "value": 8.8179,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 28,
          "weight": "20%",
          "desc": "1593 / 3790，56 / 44"
        },
        {
          "name": "指数路径",
          "score": 38,
          "weight": "20%",
          "desc": "四大指数平均 -0.83%"
        },
        {
          "name": "流动性",
          "score": 53,
          "weight": "10%",
          "desc": "2.56万亿 缩量176亿"
        },
        {
          "name": "恐贪风险",
          "score": 20,
          "weight": "32%",
          "desc": "自算恐贪 20 / 极度恐惧"
        },
        {
          "name": "主线结构",
          "score": 42,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 32.5，再用情绪温度映射与共振修正下修至 21。当前多数因子偏弱，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "财税数字化等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.49%，深证成指 -1.87%，创业板指 -1.70%",
      "PCB走弱，高位硬科技杀估值明显",
      "华虹宏力盘中创历史新高后明显回落，高位分歧加大",
      "两市成交额 2.56万亿，缩量176亿，资金承接不足，前一交易日 2026.07.07"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "国资云",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.07.08",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-09T09:19:47+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.07",
    "closeTime": "15:00",
    "badge": "7月7日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.07 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 35,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，收盘弱于开盘，上涨693家，强势34家，成交2.58万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 13,
        "title": "市场宽度",
        "desc": "693涨 / 4797跌"
      },
      {
        "score": 59,
        "title": "成交热度",
        "desc": "两市 2.58万亿"
      },
      {
        "score": 42,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 31,
        "title": "赚钱效应",
        "desc": "34涨停 / 45跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3990.24",
        "change": "-1.26%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "15225.11",
        "change": "-1.24%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3911.91",
        "change": "-0.94%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "2001.59",
        "change": "+0.27%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.58万亿",
        "change": "缩量5100亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-2.90%",
        "change": "5517只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "693 / 4797",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "34 / 45",
        "change": "亏钱效应扩散",
        "tone": "green"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 21,
      "rawScore": 33.86,
      "temperatureScore": 25.2,
      "resonanceAdjustment": -4.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 35,
      "delta": -14,
      "funddb": {
        "score": 30,
        "status": "恐惧",
        "tradeDate": "2026.07.07",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 12,
        "referenceTradeDate": "2026-07-07",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 20.71,
          "mappedScore": 20.97,
          "calibration": -9.0,
          "appliedCalibration": -9.0,
          "calibrationNotes": [
            "deep-median-drawdown",
            "limit-down-dominance",
            "very-low-up-ratio"
          ],
          "priceStrength": 20,
          "participation": 48,
          "limitScore": 43,
          "median": -2.9,
          "penalties": [
            "中位数深跌",
            "跌停多于涨停"
          ],
          "boosts": [],
          "ifindFactorScore": 29.68,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 12,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.07",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 28.69,
                "weight": 0.18,
                "status": "ready",
                "value": 19.6641,
                "detail": "30-day near-the-money 50ETF option implied volatility solved from iFinD option closes and SSE contract metadata."
              },
              {
                "key": "priceStrength",
                "score": 0.41,
                "weight": 0.2,
                "status": "ready",
                "value": 0.6104,
                "detail": "33/5406 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 7.79,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.8543,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 46.72,
                "weight": 0.26,
                "status": "ready",
                "value": 1.4809,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 55.2,
                "weight": 0.2,
                "status": "ready",
                "value": 8.812,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 19,
          "weight": "20%",
          "desc": "693 / 4797，34 / 45"
        },
        {
          "name": "指数路径",
          "score": 39,
          "weight": "20%",
          "desc": "四大指数平均 -0.79%"
        },
        {
          "name": "流动性",
          "score": 51,
          "weight": "10%",
          "desc": "2.58万亿 缩量5100亿"
        },
        {
          "name": "恐贪风险",
          "score": 30,
          "weight": "32%",
          "desc": "自算恐贪 30 / 恐惧 / 参考指标 12 / 中位数深跌、跌停多于涨停"
        },
        {
          "name": "主线结构",
          "score": 42,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 33.9，再用情绪温度映射与共振修正下修至 21。当前多数因子偏弱;原口径确认弱度，恐贪代理口径为恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆主线逆势活跃，中际旭创、天孚通信等核心股仍有承接",
      "成交额前200中通信设备 / 光模块 / 光纤占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -1.26%，深证成指 -1.24%，创业板指 -0.94%",
      "两市成交额 2.58万亿，缩量5100亿，资金承接不足，前一交易日 2026.07.06",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温",
      "上涨家数仅 693，占比 12.6%，个股宽度偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "培育钻石 / 超硬材料",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.07.07",
    "observation": "观察重点：通信设备 / 光模块 / 光纤能否继续放量，盘中承接能否改善，成交额能否维持在2.58万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-07T17:28:26+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.06",
    "closeTime": "15:00",
    "badge": "7月6日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.06 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 51,
    "mood": "中性",
    "moodTone": "red",
    "summary": "收盘温度偏冷，早盘冲高后回落，收盘弱于开盘，上涨1876家，强势71家，成交3.09万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 35,
        "title": "市场宽度",
        "desc": "1876涨 / 3541跌"
      },
      {
        "score": 74,
        "title": "成交热度",
        "desc": "两市 3.09万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 57,
        "title": "赚钱效应",
        "desc": "71涨停 / 51跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4041.24",
        "change": "-0.06%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "15416.80",
        "change": "-1.16%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3948.86",
        "change": "-1.77%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1996.10",
        "change": "+1.04%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "3.09万亿",
        "change": "缩量913亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.27%",
        "change": "5517只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1876 / 3541",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "71 / 51",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 30,
      "rawScore": 38.58,
      "temperatureScore": 29.98,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 51,
      "delta": -21,
      "funddb": {
        "score": 24,
        "status": "极度恐惧",
        "tradeDate": "2026.07.06",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 21,
        "referenceTradeDate": "2026-07-06",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 45.82,
          "mappedScore": 32.1,
          "calibration": 0.0,
          "appliedCalibration": 0.0,
          "calibrationNotes": [],
          "priceStrength": 42,
          "participation": 55,
          "limitScore": 58,
          "median": -1.27,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 24.48,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 32,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.06",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 7.91,
                "weight": 0.18,
                "status": "ready",
                "value": 40.4534,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 4.07,
                "weight": 0.2,
                "status": "ready",
                "value": 1.2026,
                "detail": "65/5405 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 7.79,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.8339,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 35.25,
                "weight": 0.26,
                "status": "ready",
                "value": 0.378,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 59.17,
                "weight": 0.2,
                "status": "ready",
                "value": 9.0501,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 43,
          "weight": "20%",
          "desc": "1876 / 3541，71 / 51"
        },
        {
          "name": "指数路径",
          "score": 41,
          "weight": "20%",
          "desc": "四大指数平均 -0.49%"
        },
        {
          "name": "流动性",
          "score": 60,
          "weight": "10%",
          "desc": "3.09万亿 缩量913亿"
        },
        {
          "name": "恐贪风险",
          "score": 24,
          "weight": "32%",
          "desc": "自算恐贪 24 / 极度恐惧 / 参考指标 21"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 38.6，再用情绪温度映射与共振修正下修至 30。当前未出现明显单边共振，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "煤炭开采涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "强势股 71 家，局部短线情绪仍有承接"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.06%，深证成指 -1.16%，创业板指 -1.77%",
      "CPO、PCB走弱，高位硬科技杀估值明显",
      "科达利盘中创历史新高后明显回落，高位分歧加大",
      "两市成交额 3.09万亿，缩量913亿，资金承接不足，前一交易日 2026.07.03"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "机器人 / 工业母机 / 低空",
        "note": "五洲新春、华友钴业、厦门钨业等成交额前排集中，成交占比约3.6%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "AI应用 / 软件 / 数据要素",
        "note": "万华化学、东方财富、同花顺等成交额前排集中，成交占比约1.5%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "猪肉",
        "note": "猪肉涨幅+3.39%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "医药 / 创新药 / 中药",
        "note": "恒瑞医药、药明康德、信立泰等成交额前排集中，成交占比约2.7%",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "青蒿素",
        "note": "青蒿素涨幅+3.10%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "CPO、PCB",
        "note": "CPO、PCB走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.07.06",
    "observation": "观察重点：煤炭脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-06T17:46:26+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.03",
    "closeTime": "15:00",
    "badge": "7月3日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.03 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 63,
    "mood": "偏积极",
    "moodTone": "red",
    "summary": "收盘温度偏冷，收盘靠近日内低位，上涨3804家，强势160家，成交3.18万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 70,
        "title": "市场宽度",
        "desc": "3804涨 / 1628跌"
      },
      {
        "score": 74,
        "title": "成交热度",
        "desc": "两市 3.18万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 84,
        "title": "赚钱效应",
        "desc": "160涨停 / 24跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4043.64",
        "change": "+0.37%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "15597.51",
        "change": "+0.64%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "4019.93",
        "change": "+0.07%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1975.60",
        "change": "-0.59%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "3.18万亿",
        "change": "缩量2681亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.22%",
        "change": "5516只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3804 / 1628",
        "change": "占比 70.0%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "160 / 24",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 43,
      "rawScore": 47.94,
      "temperatureScore": 43.08,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 63,
      "delta": -20,
      "funddb": {
        "score": 22,
        "status": "极度恐惧",
        "tradeDate": "2026.07.03",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 21,
        "referenceTradeDate": "2026-07-03",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 70.32,
          "mappedScore": 42.95,
          "calibration": 4.0,
          "appliedCalibration": 1.4,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio"
          ],
          "priceStrength": 74,
          "participation": 59,
          "limitScore": 87,
          "median": 1.22,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 21.66,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 44,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.03",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 8.36,
                "weight": 0.18,
                "status": "ready",
                "value": 40.9888,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 4.47,
                "weight": 0.2,
                "status": "ready",
                "value": 1.3138,
                "detail": "71/5404 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 7.38,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.8581,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 21.31,
                "weight": 0.26,
                "status": "ready",
                "value": -1.3403,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 62.71,
                "weight": 0.2,
                "status": "ready",
                "value": 9.2628,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 75,
          "weight": "20%",
          "desc": "3804 / 1628，160 / 24"
        },
        {
          "name": "指数路径",
          "score": 56,
          "weight": "20%",
          "desc": "四大指数平均 +0.12%"
        },
        {
          "name": "流动性",
          "score": 66,
          "weight": "10%",
          "desc": "3.18万亿 缩量2681亿"
        },
        {
          "name": "恐贪风险",
          "score": 22,
          "weight": "32%",
          "desc": "自算恐贪 22 / 极度恐惧 / 参考指标 21 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 47.9，再用情绪温度映射与共振修正下修至 43。当前未出现明显单边共振，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3804，占比 70.0%，市场宽度偏强",
      "贵金属涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "沪深两市成交额 3.18万亿，活跃度仍在高位",
      "三大指数集体收红：上证 +0.37%，深证成指 +0.64%，创业板指 +0.07%"
    ],
    "bearFactors": [
      "指数修复但成交额缩量2681亿，增量资金仍需确认，前一交易日 2026.07.02",
      "半导体走弱，高位硬科技杀估值明显",
      "收盘靠近日内低位，尾盘承接不足",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "机器人 / 商业航天",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.07.03",
    "observation": "观察重点：贵金属脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-06T13:43:12+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.02",
    "closeTime": "15:00",
    "badge": "7月2日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.02 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 56,
    "mood": "中性",
    "moodTone": "red",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨2219家，强势156家，成交3.45万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 41,
        "title": "市场宽度",
        "desc": "2219涨 / 3162跌"
      },
      {
        "score": 80,
        "title": "成交热度",
        "desc": "两市 3.45万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 64,
        "title": "赚钱效应",
        "desc": "156涨停 / 41跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4028.90",
        "change": "-2.03%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "15498.81",
        "change": "-3.85%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "4017.27",
        "change": "-5.71%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1987.29",
        "change": "-7.70%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "3.45万亿",
        "change": "缩量2095亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.49%",
        "change": "5517只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "2219 / 3162",
        "change": "占比 41.2%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "156 / 41",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 24,
      "rawScore": 32.18,
      "temperatureScore": 23.63,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "结构分化抑制极值"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 56,
      "delta": -32,
      "funddb": {
        "score": 19,
        "status": "极度恐惧",
        "tradeDate": "2026.07.02",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 13,
        "referenceTradeDate": "2026-07-02",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 46.92,
          "mappedScore": 32.58,
          "calibration": -3.0,
          "appliedCalibration": -3.0,
          "calibrationNotes": [
            "limit-up-spread",
            "active-but-weak-internals"
          ],
          "priceStrength": 50,
          "participation": 63,
          "limitScore": 79,
          "median": -0.49,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 18.8,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 30,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.02",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 7.63,
                "weight": 0.18,
                "status": "ready",
                "value": 44.3278,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 3.66,
                "weight": 0.2,
                "status": "ready",
                "value": 1.1843,
                "detail": "64/5404 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 5.74,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.9304,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 11.48,
                "weight": 0.26,
                "status": "ready",
                "value": -2.6476,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 63.96,
                "weight": 0.2,
                "status": "ready",
                "value": 9.3378,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 49,
          "weight": "20%",
          "desc": "2219 / 3162，156 / 41"
        },
        {
          "name": "指数路径",
          "score": 5,
          "weight": "20%",
          "desc": "四大指数平均 -4.82%"
        },
        {
          "name": "流动性",
          "score": 72,
          "weight": "10%",
          "desc": "3.45万亿 缩量2095亿"
        },
        {
          "name": "恐贪风险",
          "score": 19,
          "weight": "32%",
          "desc": "自算恐贪 19 / 极度恐惧 / 参考指标 13 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 32.2，再用情绪温度映射与共振修正下修至 24。当前结构分化抑制极值，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "贵金属涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "强势股 156 家，短线承接较活跃"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -2.03%，深证成指 -3.85%，创业板指 -5.71%，科创50 -7.70%",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "绿的谐波盘中创历史新高后明显回落，高位分歧加大"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "有色 / 小金属 / 稀土",
        "note": "洛阳钼业、紫金矿业、北方稀土等成交额前排集中，成交占比约3.2%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "机器人 / 工业母机 / 低空",
        "note": "亿纬锂能、厦门钨业、埃斯顿等成交额前排集中，成交占比约2.4%",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "毛发医疗",
        "note": "毛发医疗涨幅+2.12%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "印染",
        "note": "印染涨幅+6.04%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "水产饲料",
        "note": "水产饲料涨幅+5.47%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、CPO、PCB",
        "note": "半导体、CPO、PCB走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.07.02",
    "observation": "观察重点：贵金属脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-06T11:08:23+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.07.01",
    "closeTime": "15:00",
    "badge": "7月1日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.07.01 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 70,
    "mood": "偏积极",
    "moodTone": "red",
    "summary": "收盘温度中性偏热，早盘冲高后回落，午后探低，收盘靠近低位，上涨4329家，强势221家，成交3.66万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 79,
        "title": "市场宽度",
        "desc": "4329涨 / 1145跌"
      },
      {
        "score": 92,
        "title": "成交热度",
        "desc": "两市 3.66万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "221涨停 / 11跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4112.45",
        "change": "+0.44%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "16119.17",
        "change": "-0.53%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "4260.72",
        "change": "-1.89%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "2153.04",
        "change": "-2.48%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "3.66万亿",
        "change": "放量3862亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+2.11%",
        "change": "5511只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "4329 / 1145",
        "change": "占比 79.1%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "221 / 11",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 60,
      "rawScore": 52.22,
      "temperatureScore": 57.25,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 3,
      "structuralFloor": 60,
      "resonanceNotes": [
        "结构分化抑制极值",
        "结构修复抑制慢因子过度降温"
      ],
      "mood": "中性偏热",
      "moodTone": "red",
      "originalScore": 70,
      "delta": -10,
      "funddb": {
        "score": 36,
        "status": "恐惧",
        "tradeDate": "2026.07.01",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 42,
        "referenceTradeDate": "2026-07-01",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 76.33,
          "mappedScore": 45.62,
          "calibration": 7.0,
          "appliedCalibration": 2.45,
          "calibrationNotes": [
            "strong-median",
            "limit-up-spread",
            "high-up-ratio"
          ],
          "priceStrength": 80,
          "participation": 76,
          "limitScore": 95,
          "median": 2.11,
          "penalties": [],
          "boosts": [
            "中位数强",
            "涨停扩散"
          ],
          "ifindFactorScore": 35.96,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 48,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.07.01",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 7.45,
                "weight": 0.18,
                "status": "ready",
                "value": 46.0131,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 36.99,
                "weight": 0.2,
                "status": "ready",
                "value": 3.6667,
                "detail": "198/5400 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 1.23,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -2.5767,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 37.7,
                "weight": 0.26,
                "status": "ready",
                "value": 0.8689,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 86.12,
                "weight": 0.2,
                "status": "ready",
                "value": 10.6672,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 81,
          "weight": "20%",
          "desc": "4329 / 1145，221 / 11"
        },
        {
          "name": "指数路径",
          "score": 36,
          "weight": "20%",
          "desc": "四大指数平均 -1.11%"
        },
        {
          "name": "流动性",
          "score": 92,
          "weight": "10%",
          "desc": "3.66万亿 放量3862亿"
        },
        {
          "name": "恐贪风险",
          "score": 36,
          "weight": "32%",
          "desc": "自算恐贪 36 / 恐惧 / 参考指标 42 / 中位数强、涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 52.2，再用情绪温度映射、共振修正与结构修复保护上修至 60。当前结构分化抑制极值;结构修复抑制慢因子过度降温，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 4329，占比 79.1%，市场宽度偏强",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 3.66万亿，较前一日继续放量，前一交易日 2026.06.30",
      "仍有单一指数抗跌收红：上证 +0.44%，深证成指 -0.53%，创业板指 -1.89%"
    ],
    "bearFactors": [
      "多数指数收跌：上证 +0.44%，深证成指 -0.53%，创业板指 -1.89%",
      "指数下跌但成交额放量3862亿，放量分歧明显升温",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "澜起科技、长电科技、中芯国际盘中创历史新高后明显回落，高位分歧加大"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约55.6%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "AI应用 / 软件 / 数据要素",
        "note": "万华化学、东方财富、同花顺等成交额前排集中，成交占比约2.8%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "猪肉",
        "note": "猪肉涨幅+6.98%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "保险",
        "note": "保险涨幅+7.09%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "果蔬加工",
        "note": "果蔬加工涨幅+10.74%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、CPO、PCB",
        "note": "半导体、CPO、PCB走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.07.01",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-06T10:55:52+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.30",
    "closeTime": "15:00",
    "badge": "6月30日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.30 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 67,
    "mood": "偏积极",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨3054家，强势170家，成交3.27万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 56,
        "title": "市场宽度",
        "desc": "3054涨 / 2364跌"
      },
      {
        "score": 76,
        "title": "成交热度",
        "desc": "两市 3.27万亿"
      },
      {
        "score": 74,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 82,
        "title": "赚钱效应",
        "desc": "170涨停 / 20跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4094.40",
        "change": "+0.50%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "16205.56",
        "change": "+2.48%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "4342.71",
        "change": "+2.99%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "2207.86",
        "change": "+3.85%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "3.27万亿",
        "change": "缩量2440亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.49%",
        "change": "5508只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3054 / 2364",
        "change": "占比 56.4%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "170 / 20",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 79,
      "rawScore": 63.68,
      "temperatureScore": 72.39,
      "resonanceAdjustment": 6.5,
      "structuralAdjustment": 0,
      "structuralFloor": 60,
      "resonanceNotes": [
        "多因子偏强共振",
        "原口径确认强度"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 67,
      "delta": 12,
      "funddb": {
        "score": 43,
        "status": "恐惧",
        "tradeDate": "2026.06.30",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 72,
        "referenceTradeDate": "2026-06-30",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 83.74,
          "mappedScore": 48.9,
          "calibration": 6.0,
          "appliedCalibration": 2.1,
          "calibrationNotes": [
            "limit-up-spread",
            "index-confirmed-strength"
          ],
          "priceStrength": 65,
          "participation": 70,
          "limitScore": 89,
          "median": 0.49,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 42.55,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 51,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.30",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 7.22,
                "weight": 0.18,
                "status": "ready",
                "value": 45.3794,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 50.41,
                "weight": 0.2,
                "status": "ready",
                "value": 4.6331,
                "detail": "250/5396 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 1.23,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -2.4829,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 59.02,
                "weight": 0.26,
                "status": "ready",
                "value": 2.6784,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 78.11,
                "weight": 0.2,
                "status": "ready",
                "value": 10.1867,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 65,
          "weight": "20%",
          "desc": "3054 / 2364，170 / 20"
        },
        {
          "name": "指数路径",
          "score": 84,
          "weight": "20%",
          "desc": "四大指数平均 +2.46%"
        },
        {
          "name": "流动性",
          "score": 68,
          "weight": "10%",
          "desc": "3.27万亿 缩量2440亿"
        },
        {
          "name": "恐贪风险",
          "score": 43,
          "weight": "32%",
          "desc": "自算恐贪 43 / 恐惧 / 参考指标 72 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 74,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 63.7，再用情绪温度映射与共振修正上修至 79。当前多因子偏强共振;原口径确认强度，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3054，占比 56.4%，市场宽度偏强",
      "PCB、CPO、光模块午后共振，澜起科技、中芯国际、海光信息等核心股创历史新高",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "沪深两市成交额 3.27万亿，活跃度仍在高位"
    ],
    "bearFactors": [
      "指数修复但成交额缩量2440亿，增量资金仍需确认，前一交易日 2026.06.29",
      "博迁新材盘中创历史新高后明显回落，高位分歧加大",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "机器人 / 商业航天",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.06.30",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在3.27万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-07-06T10:43:05+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.29",
    "closeTime": "15:00",
    "badge": "6月29日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.29 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 59,
    "mood": "中性",
    "moodTone": "red",
    "summary": "收盘温度中性偏热，盘中下探后修复，收盘靠近日内高位，上涨2469家，强势124家，成交3.52万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 46,
        "title": "市场宽度",
        "desc": "2469涨 / 2933跌"
      },
      {
        "score": 85,
        "title": "成交热度",
        "desc": "两市 3.52万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 66,
        "title": "赚钱效应",
        "desc": "124涨停 / 69跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4073.90",
        "change": "+1.16%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "15812.87",
        "change": "+0.19%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "4216.70",
        "change": "+0.54%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "2126.01",
        "change": "+4.61%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "3.52万亿",
        "change": "缩量347亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-0.30%",
        "change": "5510只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "2469 / 2933",
        "change": "占比 45.7%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "124 / 69",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 56,
      "rawScore": 51.72,
      "temperatureScore": 56.19,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "中性偏热",
      "moodTone": "red",
      "originalScore": 59,
      "delta": -3,
      "funddb": {
        "score": 31,
        "status": "恐惧",
        "tradeDate": "2026.06.29",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 36,
        "referenceTradeDate": "2026-06-29",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 61.39,
          "mappedScore": 39.0,
          "calibration": -5.0,
          "appliedCalibration": -5.0,
          "calibrationNotes": [
            "active-but-weak-internals"
          ],
          "priceStrength": 53,
          "participation": 66,
          "limitScore": 64,
          "median": -0.3,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 30.88,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 34,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.29",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 10.17,
                "weight": 0.18,
                "status": "ready",
                "value": 44.5379,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 31.3,
                "weight": 0.2,
                "status": "ready",
                "value": 3.1505,
                "detail": "170/5396 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 0.82,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -2.6491,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 35.66,
                "weight": 0.26,
                "status": "ready",
                "value": 0.5328,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 66.94,
                "weight": 0.2,
                "status": "ready",
                "value": 9.5163,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 53,
          "weight": "20%",
          "desc": "2469 / 2933，124 / 69"
        },
        {
          "name": "指数路径",
          "score": 77,
          "weight": "20%",
          "desc": "四大指数平均 +1.62%"
        },
        {
          "name": "流动性",
          "score": 77,
          "weight": "10%",
          "desc": "3.52万亿 缩量347亿"
        },
        {
          "name": "恐贪风险",
          "score": 31,
          "weight": "32%",
          "desc": "自算恐贪 31 / 恐惧 / 参考指标 36"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 51.7，再用情绪温度映射与共振修正上修至 56。当前未出现明显单边共振，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 2469，市场宽度接近均衡，局部赚钱效应仍在",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "沪深两市成交额 3.52万亿，活跃度仍在高位",
      "三大指数集体收红：上证 +1.16%，深证成指 +0.19%，创业板指 +0.54%"
    ],
    "bearFactors": [
      "指数修复但成交额缩量347亿，增量资金仍需确认，前一交易日 2026.06.26",
      "CPO、PCB走弱，高位硬科技杀估值明显",
      "北京君正、博迁新材盘中创历史新高后明显回落，高位分歧加大",
      "盘中振幅偏大，修复并非单边走强"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约57.4%",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "半导体材料涨幅+7.61%，主线链条内热度继续外溢",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "新能源汽车 / 汽车电子 / 储能",
        "note": "宁德时代、天赐材料、天齐锂业等成交额前排集中，成交占比约1.8%",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "医疗研发外包",
        "note": "医疗研发外包涨幅+8.65%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "其他生物制品",
        "note": "其他生物制品涨幅+8.58%，弹性题材进入前排",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "CPO、PCB",
        "note": "CPO、PCB走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.06.29",
    "observation": "观察重点：PCB / CPO / 光模块脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-29T17:46:09+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.26",
    "closeTime": "15:00",
    "badge": "6月26日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.26 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 44,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，收盘弱于开盘，上涨790家，强势73家，成交3.55万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 14,
        "title": "市场宽度",
        "desc": "790涨 / 4676跌"
      },
      {
        "score": 86,
        "title": "成交热度",
        "desc": "两市 3.55万亿"
      },
      {
        "score": 44,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 45,
        "title": "赚钱效应",
        "desc": "73涨停 / 44跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4027.26",
        "change": "-2.26%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "15782.22",
        "change": "-3.44%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "4194.21",
        "change": "-4.07%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "2032.28",
        "change": "-1.65%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "3.55万亿",
        "change": "缩量419亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-2.88%",
        "change": "5513只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "790 / 4676",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "73 / 44",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 20,
      "rawScore": 31.12,
      "temperatureScore": 22.66,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 44,
      "delta": -24,
      "funddb": {
        "score": 30,
        "status": "恐惧",
        "tradeDate": "2026.06.26",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 32,
        "referenceTradeDate": "2026-06-26",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 24.75,
          "mappedScore": 22.76,
          "calibration": -7.0,
          "appliedCalibration": -7.0,
          "calibrationNotes": [
            "deep-median-drawdown",
            "very-low-up-ratio"
          ],
          "priceStrength": 25,
          "participation": 54,
          "limitScore": 62,
          "median": -2.88,
          "penalties": [
            "中位数深跌"
          ],
          "boosts": [],
          "ifindFactorScore": 29.8,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 16,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.26",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 11.28,
                "weight": 0.18,
                "status": "ready",
                "value": 41.7389,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 32.93,
                "weight": 0.2,
                "status": "ready",
                "value": 3.4259,
                "detail": "185/5400 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 0.82,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -2.4654,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 24.18,
                "weight": 0.26,
                "status": "ready",
                "value": -1.0395,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 73.84,
                "weight": 0.2,
                "status": "ready",
                "value": 9.9302,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 25,
          "weight": "20%",
          "desc": "790 / 4676，73 / 44"
        },
        {
          "name": "指数路径",
          "score": 13,
          "weight": "20%",
          "desc": "四大指数平均 -2.85%"
        },
        {
          "name": "流动性",
          "score": 60,
          "weight": "10%",
          "desc": "3.55万亿 缩量419亿"
        },
        {
          "name": "恐贪风险",
          "score": 30,
          "weight": "32%",
          "desc": "自算恐贪 30 / 恐惧 / 参考指标 32 / 中位数深跌"
        },
        {
          "name": "主线结构",
          "score": 44,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 31.1，再用情绪温度映射与共振修正下修至 20。当前多数因子偏弱，恐贪代理口径为恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "强势股 73 家，局部短线情绪仍有承接"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -2.26%，深证成指 -3.44%，创业板指 -4.07%",
      "CPO走弱，高位硬科技杀估值明显",
      "长电科技、太极实业、北京君正盘中创历史新高后明显回落，高位分歧加大",
      "两市成交额 3.55万亿，缩量419亿，资金承接不足，前一交易日 2026.06.25"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "中芯国际概念",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.06.26",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-29T17:28:19+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.25",
    "closeTime": "15:00",
    "badge": "6月25日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.25 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 49,
    "mood": "结构分化",
    "moodTone": "blue",
    "summary": "指数修复明显，但个股涨跌不足，AI硬件 / CPO / PCB成为资金主攻方向，属于典型结构分化盘",
    "miniGauges": [
      {
        "score": 23,
        "title": "市场宽度",
        "desc": "1231涨 / 4228跌"
      },
      {
        "score": 92,
        "title": "成交热度",
        "desc": "两市 3.59万亿"
      },
      {
        "score": 60,
        "title": "主线承接",
        "desc": "AI硬件 / CPO / PCB"
      },
      {
        "score": 47,
        "title": "赚钱效应",
        "desc": "92涨停 / 79跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4120.28",
        "change": "+0.23%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "16344.08",
        "change": "+1.82%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "4371.99",
        "change": "+2.84%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "2066.33",
        "change": "+3.87%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "3.59万亿",
        "change": "放量3100亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.99%",
        "change": "5511只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1231 / 4228",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "92 / 79",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 58,
      "rawScore": 52.84,
      "temperatureScore": 58.45,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "中性偏热",
      "moodTone": "red",
      "originalScore": 49,
      "delta": 9,
      "funddb": {
        "score": 42,
        "status": "恐惧",
        "tradeDate": "2026.06.25",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 72,
        "referenceTradeDate": "2026-06-25",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 52.9,
          "mappedScore": 35.23,
          "calibration": -3.0,
          "appliedCalibration": -3.0,
          "calibrationNotes": [
            "weak-median"
          ],
          "priceStrength": 32,
          "participation": 60,
          "limitScore": 54,
          "median": -1.99,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 42.22,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 32,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.25",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 7.63,
                "weight": 0.18,
                "status": "ready",
                "value": 42.9224,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 48.37,
                "weight": 0.2,
                "status": "ready",
                "value": 4.4831,
                "detail": "242/5398 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 1.64,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -2.253,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 51.64,
                "weight": 0.26,
                "status": "ready",
                "value": 2.1526,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 87.44,
                "weight": 0.2,
                "status": "ready",
                "value": 10.7467,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 31,
          "weight": "20%",
          "desc": "1231 / 4228，92 / 79"
        },
        {
          "name": "指数路径",
          "score": 82,
          "weight": "20%",
          "desc": "四大指数平均 +2.19%"
        },
        {
          "name": "流动性",
          "score": 60,
          "weight": "10%",
          "desc": "3.59万亿 放量3100亿"
        },
        {
          "name": "恐贪风险",
          "score": 42,
          "weight": "32%",
          "desc": "自算恐贪 42 / 恐惧 / 参考指标 72"
        },
        {
          "name": "主线结构",
          "score": 60,
          "weight": "18%",
          "desc": "AI硬件 / CPO / PCB"
        }
      ],
      "summary": "新版保留原权重得到原始分 52.8，再用情绪温度映射与共振修正上修至 58。当前未出现明显单边共振，恐贪代理口径为恐惧，AI硬件 / CPO / PCB。"
    },
    "bullFactors": [
      "PCB、CPO、光模块午后共振，兆易创新、海光信息、北京君正等核心股创历史新高",
      "成交额前200中AI硬件 / CPO / PCB占比较高，主线资金未完全扩散",
      "两市成交额 3.59万亿，较前一日继续放量，前一交易日 2026.06.24",
      "三大指数集体收红：上证 +0.23%，深证成指 +1.82%，创业板指 +2.84%"
    ],
    "bearFactors": [
      "芯原股份盘中创历史新高后明显回落，高位分歧加大",
      "盘中振幅偏大，修复并非单边走强",
      "上涨家数仅 1231，占比 22.5%，个股宽度偏弱",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "AI硬件 / CPO / PCB",
        "note": "中际旭创、天孚通信、新易盛共振走强，主线辨识度高",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "半导体 / 自动化设备",
        "note": "成长风格修复，创业板弹性继续释放",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "贵金属 / 指数权重",
        "note": "兼具避险与指数稳定属性，提供情绪缓冲",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "影视院线 / 游戏 / 电商",
        "note": "消费传导方向偏弱，跟风承接明显不足",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.06.25",
    "observation": "观察重点：AI硬件 / CPO / PCB能否继续放量，盘中修复能否延续，成交额能否维持在3.59万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-29T17:15:19+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.24",
    "closeTime": "15:00",
    "badge": "6月24日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.24 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 49,
    "mood": "结构分化",
    "moodTone": "blue",
    "summary": "指数修复明显，但个股涨跌不足，AI硬件 / CPO / PCB成为资金主攻方向，属于典型结构分化盘",
    "miniGauges": [
      {
        "score": 26,
        "title": "市场宽度",
        "desc": "1434涨 / 4034跌"
      },
      {
        "score": 76,
        "title": "成交热度",
        "desc": "两市 3.28万亿"
      },
      {
        "score": 59,
        "title": "主线承接",
        "desc": "AI硬件 / CPO / PCB"
      },
      {
        "score": 53,
        "title": "赚钱效应",
        "desc": "106涨停 / 58跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4110.81",
        "change": "+0.11%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "16051.32",
        "change": "+1.24%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "4251.42",
        "change": "+1.41%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1989.43",
        "change": "+3.82%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "3.28万亿",
        "change": "缩量1564亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-2.02%",
        "change": "5512只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1434 / 4034",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "106 / 58",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 50,
      "rawScore": 50.22,
      "temperatureScore": 50.22,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "修复",
      "moodTone": "red",
      "originalScore": 49,
      "delta": 1,
      "funddb": {
        "score": 35,
        "status": "恐惧",
        "tradeDate": "2026.06.24",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 41,
        "referenceTradeDate": "2026-06-24",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 47.2,
          "mappedScore": 32.71,
          "calibration": -3.0,
          "appliedCalibration": -3.0,
          "calibrationNotes": [
            "weak-median"
          ],
          "priceStrength": 36,
          "participation": 60,
          "limitScore": 65,
          "median": -2.02,
          "penalties": [
            "中位数深跌"
          ],
          "boosts": [],
          "ifindFactorScore": 34.84,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 30,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.24",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 9.64,
                "weight": 0.18,
                "status": "ready",
                "value": 41.0121,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 47.56,
                "weight": 0.2,
                "status": "ready",
                "value": 4.4267,
                "detail": "239/5399 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 1.23,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -2.2703,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 29.51,
                "weight": 0.26,
                "status": "ready",
                "value": -0.2726,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 78.6,
                "weight": 0.2,
                "status": "ready",
                "value": 10.2162,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 35,
          "weight": "20%",
          "desc": "1434 / 4034，106 / 58"
        },
        {
          "name": "指数路径",
          "score": 77,
          "weight": "20%",
          "desc": "四大指数平均 +1.65%"
        },
        {
          "name": "流动性",
          "score": 60,
          "weight": "10%",
          "desc": "3.28万亿 缩量1564亿"
        },
        {
          "name": "恐贪风险",
          "score": 35,
          "weight": "32%",
          "desc": "自算恐贪 35 / 恐惧 / 参考指标 41 / 中位数深跌"
        },
        {
          "name": "主线结构",
          "score": 59,
          "weight": "18%",
          "desc": "AI硬件 / CPO / PCB"
        }
      ],
      "summary": "新版保留原权重得到原始分 50.2，再用情绪温度映射与共振修正持平至 50。当前未出现明显单边共振，恐贪代理口径为恐惧，AI硬件 / CPO / PCB。"
    },
    "bullFactors": [
      "PCB、CPO、光模块午后共振，兆易创新、长川科技、北方华创等核心股创历史新高",
      "能源金属涨幅靠前，但成交主线仍以AI硬件 / CPO / PCB为核心",
      "成交额前200中AI硬件 / CPO / PCB占比较高，主线资金未完全扩散",
      "沪深两市成交额 3.28万亿，活跃度仍在高位"
    ],
    "bearFactors": [
      "指数修复但成交额缩量1564亿，增量资金仍需确认，前一交易日 2026.06.23",
      "盘中振幅偏大，修复并非单边走强",
      "上涨家数仅 1434，占比 26.2%，个股宽度偏弱",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "AI硬件 / CPO / PCB",
        "note": "中际旭创、新易盛、工业富联共振走强，主线辨识度高",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "半导体 / 自动化设备",
        "note": "成长风格修复，创业板弹性继续释放",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "贵金属 / 指数权重",
        "note": "兼具避险与指数稳定属性，提供情绪缓冲",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "影视院线 / 游戏 / 电商",
        "note": "消费传导方向偏弱，跟风承接明显不足",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.06.24",
    "observation": "观察重点：AI硬件 / CPO / PCB能否继续放量，盘中修复能否延续，成交额能否维持在3.28万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-29T16:52:51+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.22",
    "closeTime": "15:00",
    "badge": "6月22日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.22 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 68,
    "mood": "偏积极",
    "moodTone": "red",
    "summary": "收盘温度亢奋，盘中下探后修复，收盘靠近日内高位，上涨2915家，强势151家，成交3.74万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 54,
        "title": "市场宽度",
        "desc": "2915涨 / 2465跌"
      },
      {
        "score": 92,
        "title": "成交热度",
        "desc": "两市 3.74万亿"
      },
      {
        "score": 68,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 79,
        "title": "赚钱效应",
        "desc": "151涨停 / 29跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4163.10",
        "change": "+1.78%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "16372.50",
        "change": "+2.13%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "4359.39",
        "change": "+2.52%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1948.93",
        "change": "+1.96%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "3.74万亿",
        "change": "放量4271亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.24%",
        "change": "5506只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "2915 / 2465",
        "change": "占比 54.2%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "151 / 29",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 83,
      "rawScore": 66.56,
      "temperatureScore": 75.2,
      "resonanceAdjustment": 8.0,
      "structuralAdjustment": 0,
      "structuralFloor": 60,
      "resonanceNotes": [
        "多因子偏强共振",
        "原口径确认强度"
      ],
      "mood": "亢奋",
      "moodTone": "red",
      "originalScore": 68,
      "delta": 15,
      "funddb": {
        "score": 51,
        "status": "中性",
        "tradeDate": "2026.06.22",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 80,
        "referenceTradeDate": "2026-06-22",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 82.98,
          "mappedScore": 48.56,
          "calibration": 6.0,
          "appliedCalibration": 2.1,
          "calibrationNotes": [
            "limit-up-spread",
            "index-confirmed-strength"
          ],
          "priceStrength": 63,
          "participation": 84,
          "limitScore": 84,
          "median": 0.24,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 51.05,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 51,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.22",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 5.62,
                "weight": 0.18,
                "status": "ready",
                "value": 43.0919,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 54.07,
                "weight": 0.2,
                "status": "ready",
                "value": 5.2661,
                "detail": "284/5393 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 11.89,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.4993,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 77.87,
                "weight": 0.26,
                "status": "ready",
                "value": 4.1512,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 85.36,
                "weight": 0.2,
                "status": "ready",
                "value": 10.6216,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 63,
          "weight": "20%",
          "desc": "2915 / 2465，151 / 29"
        },
        {
          "name": "指数路径",
          "score": 81,
          "weight": "20%",
          "desc": "四大指数平均 +2.10%"
        },
        {
          "name": "流动性",
          "score": 92,
          "weight": "10%",
          "desc": "3.74万亿 放量4271亿"
        },
        {
          "name": "恐贪风险",
          "score": 51,
          "weight": "32%",
          "desc": "自算恐贪 51 / 中性 / 参考指标 80 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 68,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 66.6，再用情绪温度映射与共振修正上修至 83。当前多因子偏强共振;原口径确认强度，恐贪代理口径为中性，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 2915，市场宽度接近均衡，局部赚钱效应仍在",
      "PCB、CPO、光模块午后共振，中际旭创、兆易创新、太极实业等核心股创历史新高",
      "金属铅涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "指数修复后仍需观察能否继续向个股扩散",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "培育钻石 / 超硬材料",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.06.22",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在3.74万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-29T16:38:33+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.17",
    "closeTime": "15:00",
    "badge": "6月17日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.17 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 49,
    "mood": "结构分化",
    "moodTone": "blue",
    "summary": "指数修复明显，但个股涨跌不足，AI硬件 / CPO / PCB成为资金主攻方向，属于典型结构分化盘",
    "miniGauges": [
      {
        "score": 32,
        "title": "市场宽度",
        "desc": "1721涨 / 3733跌"
      },
      {
        "score": 81,
        "title": "成交热度",
        "desc": "两市 3.09万亿"
      },
      {
        "score": 61,
        "title": "主线承接",
        "desc": "AI硬件 / CPO / PCB"
      },
      {
        "score": 61,
        "title": "赚钱效应",
        "desc": "96涨停 / 18跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4108.08",
        "change": "+0.40%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "15880.95",
        "change": "+1.31%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "4167.05",
        "change": "+1.56%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1840.82",
        "change": "+4.69%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "3.09万亿",
        "change": "放量271亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.19%",
        "change": "5505只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1721 / 3733",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "96 / 18",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 62,
      "rawScore": 54.82,
      "temperatureScore": 61.72,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "中性偏热",
      "moodTone": "red",
      "originalScore": 49,
      "delta": 13,
      "funddb": {
        "score": 42,
        "status": "恐惧",
        "tradeDate": "2026.06.17",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 68,
        "referenceTradeDate": "2026-06-17",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 64.16,
          "mappedScore": 40.22,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 43,
          "participation": 60,
          "limitScore": 84,
          "median": -1.19,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 42.15,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 41,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.17",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 14.57,
                "weight": 0.18,
                "status": "ready",
                "value": 36.951,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 51.42,
                "weight": 0.2,
                "status": "ready",
                "value": 5.1372,
                "detail": "277/5392 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 1.64,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -2.1979,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 45.49,
                "weight": 0.26,
                "status": "ready",
                "value": 1.4407,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 85.75,
                "weight": 0.2,
                "status": "ready",
                "value": 10.6451,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 42,
          "weight": "20%",
          "desc": "1721 / 3733，96 / 18"
        },
        {
          "name": "指数路径",
          "score": 80,
          "weight": "20%",
          "desc": "四大指数平均 +1.99%"
        },
        {
          "name": "流动性",
          "score": 60,
          "weight": "10%",
          "desc": "3.09万亿 放量271亿"
        },
        {
          "name": "恐贪风险",
          "score": 42,
          "weight": "32%",
          "desc": "自算恐贪 42 / 恐惧 / 参考指标 68 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 61,
          "weight": "18%",
          "desc": "AI硬件 / CPO / PCB"
        }
      ],
      "summary": "新版保留原权重得到原始分 54.8，再用情绪温度映射与共振修正上修至 62。当前未出现明显单边共振，恐贪代理口径为恐惧，AI硬件 / CPO / PCB。"
    },
    "bullFactors": [
      "PCB、CPO、光模块午后共振，亨通光电、兆易创新、中国巨石等核心股创历史新高",
      "成交额前200中AI硬件 / CPO / PCB占比较高，主线资金未完全扩散",
      "两市成交额 3.09万亿，较前一日继续放量，前一交易日 2026.06.16",
      "三大指数集体收红：上证 +0.40%，深证成指 +1.31%，创业板指 +1.56%"
    ],
    "bearFactors": [
      "东山精密、生益科技、国际复材盘中创历史新高后明显回落，高位分歧加大",
      "盘中振幅偏大，修复并非单边走强",
      "上涨家数仅 1721，占比 31.6%，个股宽度偏弱",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "AI硬件 / CPO / PCB",
        "note": "中际旭创、天孚通信、新易盛共振走强，主线辨识度高",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "半导体 / 自动化设备",
        "note": "成长风格修复，创业板弹性继续释放",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "贵金属 / 指数权重",
        "note": "兼具避险与指数稳定属性，提供情绪缓冲",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "影视院线 / 游戏 / 电商",
        "note": "消费传导方向偏弱，跟风承接明显不足",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.06.17",
    "observation": "观察重点：AI硬件 / CPO / PCB能否继续放量，盘中修复能否延续，成交额能否维持在3.09万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-29T16:11:55+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.16",
    "closeTime": "15:00",
    "badge": "6月16日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.16 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 65,
    "mood": "偏积极",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中路径待确认，上涨2728家，强势138家，成交3.06万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 50,
        "title": "市场宽度",
        "desc": "2728涨 / 2676跌"
      },
      {
        "score": 81,
        "title": "成交热度",
        "desc": "两市 3.06万亿"
      },
      {
        "score": 69,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 80,
        "title": "赚钱效应",
        "desc": "138涨停 / 11跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4091.89",
        "change": "-0.11%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "15675.25",
        "change": "+0.93%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "4102.94",
        "change": "+1.72%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1758.42",
        "change": "+0.58%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "3.06万亿",
        "change": "放量335亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.00%",
        "change": "5509只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "2728 / 2676",
        "change": "占比 50.5%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "138 / 11",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 71,
      "rawScore": 56.96,
      "temperatureScore": 64.72,
      "resonanceAdjustment": 6.5,
      "structuralAdjustment": 0,
      "structuralFloor": 60,
      "resonanceNotes": [
        "多因子偏强共振",
        "原口径确认强度"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 65,
      "delta": 6,
      "funddb": {
        "score": 37,
        "status": "恐惧",
        "tradeDate": "2026.06.16",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 45,
        "referenceTradeDate": "2026-06-16",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 71.31,
          "mappedScore": 43.39,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 61,
          "participation": 79,
          "limitScore": 93,
          "median": 0.0,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 37.47,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 44,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.16",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 14.35,
                "weight": 0.18,
                "status": "ready",
                "value": 34.9792,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 45.34,
                "weight": 0.2,
                "status": "ready",
                "value": 4.318,
                "detail": "233/5396 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 0.82,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -2.4002,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 36.48,
                "weight": 0.26,
                "status": "ready",
                "value": 0.4685,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 81.02,
                "weight": 0.2,
                "status": "ready",
                "value": 10.3612,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 60,
          "weight": "20%",
          "desc": "2728 / 2676，138 / 11"
        },
        {
          "name": "指数路径",
          "score": 61,
          "weight": "20%",
          "desc": "四大指数平均 +0.78%"
        },
        {
          "name": "流动性",
          "score": 85,
          "weight": "10%",
          "desc": "3.06万亿 放量335亿"
        },
        {
          "name": "恐贪风险",
          "score": 37,
          "weight": "32%",
          "desc": "自算恐贪 37 / 恐惧 / 参考指标 45 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 69,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 57.0，再用情绪温度映射与共振修正上修至 71。当前多因子偏强共振;原口径确认强度，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 2728，市场宽度接近均衡，局部赚钱效应仍在",
      "PCB、CPO、光模块等科技线共振，东山精密、中天科技、中国巨石等核心股创历史新高",
      "稀土涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "指数修复后仍需观察能否继续向个股扩散",
      "中船特气、铜冠铜箔盘中创历史新高后明显回落，高位分歧加大",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "CPO / 光模块 / 铜缆",
        "note": "中际旭创、天孚通信、新易盛等成交额前排集中，成交占比约60.2%",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "中芯国际、兆易创新、海光信息等成交额前排集中，成交占比约14.8%",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "机器人 / 工业母机 / 低空",
        "note": "亿纬锂能、华友钴业、博云新材等成交额前排集中，成交占比约3.7%",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "有色 / 小金属 / 稀土",
        "note": "中国稀土、洛阳钼业、紫金矿业等成交额前排集中，成交占比约5.9%",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业 / 高股息",
        "note": "大唐发电、华电辽能、长江电力等成交额前排集中，成交占比约1.7%",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "有色 / 小金属 / 稀土",
        "note": "黑色金属矿采选业指数跌幅-6.16%，退潮压力需要跟踪",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.06.16",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中路径能否转强，成交额能否维持在3.06万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-29T16:05:36+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.15",
    "closeTime": "15:00",
    "badge": "6月15日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.15 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 71,
    "mood": "偏积极",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨3906家，强势160家，成交3.03万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 73,
        "title": "市场宽度",
        "desc": "3906涨 / 1475跌"
      },
      {
        "score": 70,
        "title": "成交热度",
        "desc": "两市 3.03万亿"
      },
      {
        "score": 74,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 85,
        "title": "赚钱效应",
        "desc": "160涨停 / 10跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4096.47",
        "change": "+1.61%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "15531.11",
        "change": "+3.79%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "4033.53",
        "change": "+5.30%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1748.33",
        "change": "+5.12%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "3.03万亿",
        "change": "缩量1838亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.25%",
        "change": "5508只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3906 / 1475",
        "change": "占比 72.6%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "160 / 10",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 79,
      "rawScore": 64.12,
      "temperatureScore": 72.83,
      "resonanceAdjustment": 5.73,
      "structuralAdjustment": 0,
      "structuralFloor": 65,
      "resonanceNotes": [
        "多因子偏强共振",
        "结构分化抑制极值",
        "原口径确认强度"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 71,
      "delta": 8,
      "funddb": {
        "score": 35,
        "status": "恐惧",
        "tradeDate": "2026.06.15",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 43,
        "referenceTradeDate": "2026-06-15",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 89.72,
          "mappedScore": 51.55,
          "calibration": 8.0,
          "appliedCalibration": 2.8,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio",
            "index-confirmed-strength"
          ],
          "priceStrength": 75,
          "participation": 66,
          "limitScore": 94,
          "median": 1.25,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 34.62,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 54,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.15",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 18.69,
                "weight": 0.18,
                "status": "ready",
                "value": 33.4489,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 31.58,
                "weight": 0.2,
                "status": "ready",
                "value": 3.3364,
                "detail": "180/5395 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 1.23,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -2.1897,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 39.75,
                "weight": 0.26,
                "status": "ready",
                "value": 1.0446,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 72.03,
                "weight": 0.2,
                "status": "ready",
                "value": 9.822,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 77,
          "weight": "20%",
          "desc": "3906 / 1475，160 / 10"
        },
        {
          "name": "指数路径",
          "score": 90,
          "weight": "20%",
          "desc": "四大指数平均 +3.96%"
        },
        {
          "name": "流动性",
          "score": 62,
          "weight": "10%",
          "desc": "3.03万亿 缩量1838亿"
        },
        {
          "name": "恐贪风险",
          "score": 35,
          "weight": "32%",
          "desc": "自算恐贪 35 / 恐惧 / 参考指标 43 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 74,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 64.1，再用情绪温度映射与共振修正上修至 79。当前多因子偏强共振;结构分化抑制极值;原口径确认强度，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3906，占比 72.6%，市场宽度偏强",
      "PCB、CPO、光模块午后共振，中钨高新、中国巨石、铜冠铜箔等核心股创历史新高",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "沪深两市成交额 3.03万亿，活跃度仍在高位"
    ],
    "bearFactors": [
      "指数修复但成交额缩量1838亿，增量资金仍需确认，前一交易日 2026.06.12",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "PET铜箔",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.06.15",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在3.03万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-15T17:35:51+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.12",
    "closeTime": "15:00",
    "badge": "6月12日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.12 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 67,
    "mood": "偏积极",
    "moodTone": "red",
    "summary": "收盘温度中性偏热，早盘冲高后回落，午后探低，收盘靠近低位，上涨3923家，强势100家，成交3.21万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 72,
        "title": "市场宽度",
        "desc": "3923涨 / 1515跌"
      },
      {
        "score": 86,
        "title": "成交热度",
        "desc": "两市 3.21万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 78,
        "title": "赚钱效应",
        "desc": "100涨停 / 23跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4031.51",
        "change": "+1.12%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "14963.41",
        "change": "+0.75%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3830.35",
        "change": "+0.50%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1663.22",
        "change": "+0.05%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "3.21万亿",
        "change": "放量6629亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.29%",
        "change": "5512只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3923 / 1515",
        "change": "占比 72.1%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "100 / 23",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 57,
      "rawScore": 52.1,
      "temperatureScore": 57.0,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "结构分化抑制极值"
      ],
      "mood": "中性偏热",
      "moodTone": "red",
      "originalScore": 67,
      "delta": -10,
      "funddb": {
        "score": 20,
        "status": "极度恐惧",
        "tradeDate": "2026.06.12",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 15,
        "referenceTradeDate": "2026-06-12",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 74.92,
          "mappedScore": 44.99,
          "calibration": 4.0,
          "appliedCalibration": 1.4,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio"
          ],
          "priceStrength": 73,
          "participation": 74,
          "limitScore": 81,
          "median": 1.29,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 20.21,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 46,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.12",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 18.51,
                "weight": 0.18,
                "status": "ready",
                "value": 33.9329,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 2.43,
                "weight": 0.2,
                "status": "ready",
                "value": 1.1296,
                "detail": "61/5400 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 0.82,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -2.2088,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 17.62,
                "weight": 0.26,
                "status": "ready",
                "value": -1.8776,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 58.41,
                "weight": 0.2,
                "status": "ready",
                "value": 9.0048,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 74,
          "weight": "20%",
          "desc": "3923 / 1515，100 / 23"
        },
        {
          "name": "指数路径",
          "score": 69,
          "weight": "20%",
          "desc": "四大指数平均 +0.60%"
        },
        {
          "name": "流动性",
          "score": 90,
          "weight": "10%",
          "desc": "3.21万亿 放量6629亿"
        },
        {
          "name": "恐贪风险",
          "score": 20,
          "weight": "32%",
          "desc": "自算恐贪 20 / 极度恐惧 / 参考指标 15 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 52.1，再用情绪温度映射与共振修正上修至 57。当前结构分化抑制极值，恐贪代理口径为极度恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3923，占比 72.1%，市场宽度偏强",
      "金属锌涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "两市成交额 3.21万亿，较前一日继续放量，前一交易日 2026.06.11",
      "三大指数集体收红：上证 +1.12%，深证成指 +0.75%，创业板指 +0.50%"
    ],
    "bearFactors": [
      "半导体、CPO走弱，高位硬科技杀估值明显",
      "佰维存储、江丰电子、中钨高新盘中创历史新高后明显回落，高位分歧加大",
      "早盘冲高后回落，午后探低，收盘靠近低位，日内承接偏弱",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "金属锌",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.06.12",
    "observation": "观察重点：金属锌脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-15T17:20:22+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.11",
    "closeTime": "15:00",
    "badge": "6月11日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.11 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 43,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度偏冷，早盘冲高后回落，收盘弱于开盘，上涨1370家，强势78家，成交2.55万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 25,
        "title": "市场宽度",
        "desc": "1370涨 / 4069跌"
      },
      {
        "score": 61,
        "title": "成交热度",
        "desc": "两市 2.55万亿"
      },
      {
        "score": 43,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 48,
        "title": "赚钱效应",
        "desc": "78涨停 / 50跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3987.01",
        "change": "-0.16%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "14851.98",
        "change": "-0.68%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3811.25",
        "change": "-1.13%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1662.44",
        "change": "+0.62%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.55万亿",
        "change": "缩量672亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.49%",
        "change": "5511只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1370 / 4069",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "78 / 50",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 25,
      "rawScore": 33.8,
      "temperatureScore": 25.14,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 43,
      "delta": -18,
      "funddb": {
        "score": 18,
        "status": "极度恐惧",
        "tradeDate": "2026.06.11",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 13,
        "referenceTradeDate": "2026-06-11",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 41.69,
          "mappedScore": 30.27,
          "calibration": 0.0,
          "appliedCalibration": 0.0,
          "calibrationNotes": [],
          "priceStrength": 35,
          "participation": 50,
          "limitScore": 61,
          "median": -1.49,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 18.26,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 30,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.11",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 11.23,
                "weight": 0.18,
                "status": "ready",
                "value": 35.5215,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 10.12,
                "weight": 0.2,
                "status": "ready",
                "value": 1.7229,
                "detail": "93/5398 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 0.41,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -2.7658,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 6.97,
                "weight": 0.26,
                "status": "ready",
                "value": -4.0795,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 61.7,
                "weight": 0.2,
                "status": "ready",
                "value": 9.2019,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 33,
          "weight": "20%",
          "desc": "1370 / 4069，78 / 50"
        },
        {
          "name": "指数路径",
          "score": 42,
          "weight": "20%",
          "desc": "四大指数平均 -0.34%"
        },
        {
          "name": "流动性",
          "score": 53,
          "weight": "10%",
          "desc": "2.55万亿 缩量672亿"
        },
        {
          "name": "恐贪风险",
          "score": 18,
          "weight": "32%",
          "desc": "自算恐贪 18 / 极度恐惧 / 参考指标 13"
        },
        {
          "name": "主线结构",
          "score": 43,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 33.8，再用情绪温度映射与共振修正下修至 25。当前未出现明显单边共振，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "PCB、CPO、光模块等科技线共振，中钨高新、金安国纪、国际复材等核心股创历史新高",
      "金属锌涨幅靠前，但成交主线仍以通信设备 / 光模块 / 光纤为核心",
      "成交额前200中通信设备 / 光模块 / 光纤占比较高，主线资金未完全扩散",
      "强势股 78 家，局部短线情绪仍有承接"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.16%，深证成指 -0.68%，创业板指 -1.13%",
      "圣泉集团盘中创历史新高后明显回落，高位分歧加大",
      "两市成交额 2.55万亿，缩量672亿，资金承接不足，前一交易日 2026.06.10",
      "早盘冲高后回落，收盘弱于开盘，高位分歧升温"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "中芯国际概念",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.06.11",
    "observation": "观察重点：通信设备 / 光模块 / 光纤能否继续放量，盘中承接能否改善，成交额能否维持在2.55万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-12T10:51:17+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.10",
    "closeTime": "15:00",
    "badge": "6月10日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.10 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 39,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，收盘弱于开盘，上涨1556家，强势75家，成交2.62万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 29,
        "title": "市场宽度",
        "desc": "1556涨 / 3882跌"
      },
      {
        "score": 62,
        "title": "成交热度",
        "desc": "两市 2.62万亿"
      },
      {
        "score": 44,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 24,
        "title": "赚钱效应",
        "desc": "75涨停 / 65跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3993.23",
        "change": "-0.42%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "14954.10",
        "change": "-2.06%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3854.79",
        "change": "-2.70%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1652.22",
        "change": "-0.65%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.62万亿",
        "change": "缩量211亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.47%",
        "change": "5512只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1556 / 3882",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "75 / 65",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 21,
      "rawScore": 31.52,
      "temperatureScore": 23.02,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 39,
      "delta": -18,
      "funddb": {
        "score": 25,
        "status": "恐惧",
        "tradeDate": "2026.06.10",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 11,
        "referenceTradeDate": "2026-06-10",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 33.97,
          "mappedScore": 26.85,
          "calibration": 0.0,
          "appliedCalibration": 0.0,
          "calibrationNotes": [],
          "priceStrength": 28,
          "participation": 50,
          "limitScore": 54,
          "median": -1.47,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 25.4,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 27,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.10",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 16.78,
                "weight": 0.18,
                "status": "ready",
                "value": 33.7431,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 10.53,
                "weight": 0.2,
                "status": "ready",
                "value": 1.7778,
                "detail": "96/5400 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 48.77,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.5727,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 2.05,
                "weight": 0.26,
                "status": "ready",
                "value": -5.2115,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 59.67,
                "weight": 0.2,
                "status": "ready",
                "value": 9.08,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 27,
          "weight": "20%",
          "desc": "1556 / 3882，75 / 65"
        },
        {
          "name": "指数路径",
          "score": 24,
          "weight": "20%",
          "desc": "四大指数平均 -1.46%"
        },
        {
          "name": "流动性",
          "score": 54,
          "weight": "10%",
          "desc": "2.62万亿 缩量211亿"
        },
        {
          "name": "恐贪风险",
          "score": 25,
          "weight": "32%",
          "desc": "自算恐贪 25 / 恐惧 / 参考指标 11"
        },
        {
          "name": "主线结构",
          "score": 44,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 31.5，再用情绪温度映射与共振修正下修至 21。当前多数因子偏弱，恐贪代理口径为恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "强势股 75 家，局部短线情绪仍有承接"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.42%，深证成指 -2.06%，创业板指 -2.70%",
      "半导体、CPO走弱，高位硬科技杀估值明显",
      "东材科技盘中创历史新高后明显回落，高位分歧加大",
      "两市成交额 2.62万亿，缩量211亿，资金承接不足，前一交易日 2026.06.09"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "环氧丙烷",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.06.10",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-11T09:36:45+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.09",
    "closeTime": "15:00",
    "badge": "6月9日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.09 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 65,
    "mood": "偏积极",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨3322家，强势142家，成交2.64万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 62,
        "title": "市场宽度",
        "desc": "3322涨 / 2049跌"
      },
      {
        "score": 60,
        "title": "成交热度",
        "desc": "两市 2.64万亿"
      },
      {
        "score": 74,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 82,
        "title": "赚钱效应",
        "desc": "142涨停 / 16跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4010.03",
        "change": "+1.28%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "15268.71",
        "change": "+3.02%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "3961.75",
        "change": "+3.93%",
        "tone": "red"
      },
      {
        "label": "科创50",
        "value": "1663.11",
        "change": "+4.17%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.64万亿",
        "change": "缩量1524亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.52%",
        "change": "5515只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3322 / 2049",
        "change": "占比 61.9%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "142 / 16",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 69,
      "rawScore": 58.12,
      "temperatureScore": 66.2,
      "resonanceAdjustment": 2.8,
      "structuralAdjustment": 0,
      "structuralFloor": 60,
      "resonanceNotes": [
        "多数因子偏强",
        "结构分化抑制极值",
        "原口径确认强度"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 65,
      "delta": 4,
      "funddb": {
        "score": 25,
        "status": "恐惧",
        "tradeDate": "2026.06.09",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 23,
        "referenceTradeDate": "2026-06-09",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 84.8,
          "mappedScore": 49.37,
          "calibration": 6.0,
          "appliedCalibration": 2.1,
          "calibrationNotes": [
            "limit-up-spread",
            "index-confirmed-strength"
          ],
          "priceStrength": 68,
          "participation": 60,
          "limitScore": 90,
          "median": 0.52,
          "penalties": [],
          "boosts": [
            "涨停扩散",
            "指数与宽度共振偏强"
          ],
          "ifindFactorScore": 25.13,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 51,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.09",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 18.62,
                "weight": 0.18,
                "status": "ready",
                "value": 32.2775,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 18.62,
                "weight": 0.2,
                "status": "ready",
                "value": 2.4806,
                "detail": "134/5402 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 16.39,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.2123,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 7.79,
                "weight": 0.26,
                "status": "ready",
                "value": -3.2507,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 67.03,
                "weight": 0.2,
                "status": "ready",
                "value": 9.5221,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 69,
          "weight": "20%",
          "desc": "3322 / 2049，142 / 16"
        },
        {
          "name": "指数路径",
          "score": 89,
          "weight": "20%",
          "desc": "四大指数平均 +3.10%"
        },
        {
          "name": "流动性",
          "score": 52,
          "weight": "10%",
          "desc": "2.64万亿 缩量1524亿"
        },
        {
          "name": "恐贪风险",
          "score": 25,
          "weight": "32%",
          "desc": "自算恐贪 25 / 恐惧 / 参考指标 23 / 涨停扩散、指数与宽度共振偏强"
        },
        {
          "name": "主线结构",
          "score": 74,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 58.1，再用情绪温度映射与共振修正上修至 69。当前多数因子偏强;结构分化抑制极值;原口径确认强度，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3322，占比 61.9%，市场宽度偏强",
      "PCB、CPO、光模块午后共振，中天科技、亨通光电、国际复材等核心股创历史新高",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散",
      "沪深两市成交额 2.64万亿，活跃度仍在高位"
    ],
    "bearFactors": [
      "指数修复但成交额缩量1524亿，增量资金仍需确认，前一交易日 2026.06.08",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察",
      "高位核心股若不能继续放量，短线分化压力可能上升"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "中芯国际概念",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.06.09",
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在2.64万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-11T09:29:47+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.08",
    "closeTime": "15:00",
    "badge": "6月8日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.08 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 35,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度冰点，早盘冲高后回落，午后探低，收盘靠近低位，上涨899家，强势64家，成交2.79万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 16,
        "title": "市场宽度",
        "desc": "899涨 / 4591跌"
      },
      {
        "score": 64,
        "title": "成交热度",
        "desc": "两市 2.79万亿"
      },
      {
        "score": 44,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 24,
        "title": "赚钱效应",
        "desc": "64涨停 / 51跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "3959.34",
        "change": "-1.70%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "14821.19",
        "change": "-3.22%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3811.79",
        "change": "-3.69%",
        "tone": "green"
      },
      {
        "label": "科创50",
        "value": "1596.57",
        "change": "-4.30%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.79万亿",
        "change": "缩量2765亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-2.98%",
        "change": "5515只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "899 / 4591",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "64 / 51",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 11,
      "rawScore": 26.04,
      "temperatureScore": 18.31,
      "resonanceAdjustment": -7.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱",
        "核心弱因子极端偏低",
        "原口径确认弱度"
      ],
      "mood": "冰点",
      "moodTone": "blue",
      "originalScore": 35,
      "delta": -24,
      "funddb": {
        "score": 21,
        "status": "极度恐惧",
        "tradeDate": "2026.06.08",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 5,
        "referenceTradeDate": "2026-06-08",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 14.24,
          "mappedScore": 18.11,
          "calibration": -5.0,
          "appliedCalibration": -5.0,
          "calibrationNotes": [
            "deep-median-drawdown"
          ],
          "priceStrength": 19,
          "participation": 52,
          "limitScore": 56,
          "median": -2.98,
          "penalties": [
            "中位数深跌",
            "指数与宽度共振偏弱"
          ],
          "boosts": [],
          "ifindFactorScore": 20.79,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 13,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.08",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 10.99,
                "weight": 0.18,
                "status": "ready",
                "value": 35.241,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 2.83,
                "weight": 0.2,
                "status": "ready",
                "value": 1.1292,
                "detail": "61/5402 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 40.98,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.6584,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 2.05,
                "weight": 0.26,
                "status": "ready",
                "value": -5.1901,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 55.79,
                "weight": 0.2,
                "status": "ready",
                "value": 8.8473,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 19,
          "weight": "20%",
          "desc": "899 / 4591，64 / 51"
        },
        {
          "name": "指数路径",
          "score": 10,
          "weight": "20%",
          "desc": "四大指数平均 -3.23%"
        },
        {
          "name": "流动性",
          "score": 56,
          "weight": "10%",
          "desc": "2.79万亿 缩量2765亿"
        },
        {
          "name": "恐贪风险",
          "score": 21,
          "weight": "32%",
          "desc": "自算恐贪 21 / 极度恐惧 / 参考指标 5 / 中位数深跌、指数与宽度共振偏弱"
        },
        {
          "name": "主线结构",
          "score": 44,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 26.0，再用情绪温度映射与共振修正下修至 11。当前多数因子偏弱;核心弱因子极端偏低;原口径确认弱度，恐贪代理口径为极度恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "强势股 64 家，局部短线情绪仍有承接"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -1.70%，深证成指 -3.22%，创业板指 -3.69%，科创50 -4.30%",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO走弱，高位硬科技杀估值明显",
      "中船特气、奥比中光、绿的谐波盘中创历史新高后明显回落，高位分歧加大"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "机器人 / 商业航天",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.06.08",
    "observation": "观察重点：通信设备 / 光模块 / 光纤脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-08T18:10:09+08:00"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.05",
    "closeTime": "15:00",
    "badge": "6月5日收盘版 / 今日复盘",
    "subtitle": "基于 2026.06.05 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 49,
    "mood": "高位分歧",
    "moodTone": "blue",
    "summary": "6月5日，A股三大指数集体回调，沪指跌0.74%，深成指跌2.21%，创业板指跌3.20%。但盘面并非单边走弱，成交放量至3万亿上方，上涨家数仍接近3300家，涨停数量维持高位，说明资金并未离场，而是在高位科技权重与低位弹性题材之间快速切换。机器人、航天装备、玻璃玻纤、金属新材料走势活跃，半导体、电力、通信设备则成为主要承压方向。",
    "miniGauges": [
      {
        "score": 68,
        "title": "市场宽度",
        "desc": "近3300股上涨"
      },
      {
        "score": 88,
        "title": "成交热度",
        "desc": "三市成交3.1万亿"
      },
      {
        "score": 64,
        "title": "主线承接",
        "desc": "机器人 / 玻璃 / 航天"
      },
      {
        "score": 18,
        "title": "指数韧性",
        "desc": "创业板跌3.20%"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4027.74",
        "change": "-0.74%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "15314.70",
        "change": "-2.21%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3957.94",
        "change": "-3.20%",
        "tone": "green"
      },
      {
        "label": "三市成交额",
        "value": "3.10万亿",
        "change": "较昨日放量超3200亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.51%",
        "change": "5514只样本",
        "tone": "red"
      },
      {
        "label": "上涨家数",
        "value": "近3300只",
        "change": "逾80股涨停",
        "tone": "red"
      },
      {
        "label": "半导体资金",
        "value": "-302亿",
        "change": "净流出居首",
        "tone": "green"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 40,
      "rawScore": 46.4,
      "temperatureScore": 40.22,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "结构分化抑制极值"
      ],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 49,
      "delta": -9,
      "funddb": {
        "score": 29,
        "status": "恐惧",
        "tradeDate": "2026.06.05",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 22,
        "referenceTradeDate": "2026-06-05",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 51.01,
          "mappedScore": 34.4,
          "calibration": 0.0,
          "appliedCalibration": 0.0,
          "calibrationNotes": [],
          "priceStrength": 51,
          "participation": 80,
          "limitScore": 50,
          "median": 0.51,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 29.09,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 34,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.05",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 22.84,
                "weight": 0.18,
                "status": "ready",
                "value": 31.1479,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 9.76,
                "weight": 0.2,
                "status": "ready",
                "value": 1.7771,
                "detail": "96/5402 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 30.33,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.8329,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 17.21,
                "weight": 0.26,
                "status": "ready",
                "value": -1.5964,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 68.52,
                "weight": 0.2,
                "status": "ready",
                "value": 9.6113,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 62,
          "weight": "20%",
          "desc": "近3300股上涨"
        },
        {
          "name": "指数路径",
          "score": 22,
          "weight": "20%",
          "desc": "四大指数平均 -2.05%"
        },
        {
          "name": "流动性",
          "score": 88,
          "weight": "10%",
          "desc": "三市成交3.1万亿"
        },
        {
          "name": "恐贪风险",
          "score": 29,
          "weight": "32%",
          "desc": "自算恐贪 29 / 恐惧 / 参考指标 22"
        },
        {
          "name": "主线结构",
          "score": 64,
          "weight": "18%",
          "desc": "机器人 / 玻璃 / 航天"
        }
      ],
      "summary": "新版保留原权重得到原始分 46.4，再用情绪温度映射与共振修正下修至 40。当前结构分化抑制极值，恐贪代理口径为恐惧，机器人 / 玻璃 / 航天。"
    },
    "bullFactors": [
      "三市成交额放大至3.1万亿元，较昨日明显增量，说明分歧虽大但场内交易热度并未熄火。",
      "接近3300只个股上涨，逾80只个股涨停，个股赚钱效应并没有随指数大跌而同步塌陷。",
      "机器人、航天装备、玻璃玻纤、金属新材料涨幅居前，说明资金仍在积极寻找新承接方向。",
      "行业资金流向上，航天装备、一盘零售、银行等方向有资金回流迹象。"
    ],
    "bearFactors": [
      "三大指数集体收跌，尤其创业板大跌3.20%，指数层面的风险偏好显著回落。",
      "半导体、电力、通信设备跌幅居前，其中半导体净流出约302亿元，核心科技主线承压很重。",
      "高位科技权重抛压明显，指数大跌而个股上涨较多，说明风格切换并非趋势共振。",
      "中际旭创等高位科技龙头巨量换手，反映高景气赛道虽未见顶，但短线拥挤度需要消化。"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "机器人 / 人形机器人",
        "note": "机器人概念爆发，绿的谐波、拓普集团等高辨识度品种活跃，但大涨后追高风险抬升。",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "玻璃基板 / 玻璃玻纤",
        "note": "先进封装与新材料逻辑继续发酵，玻璃玻纤成为科技外溢的重要分支。",
        "tone": "up"
      },
      {
        "tag": "回流",
        "name": "航天装备 / 一盘零售 / 银行",
        "note": "航天装备净流入较多，低位与避险方向同步获得资金关注。",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体 / 电力 / 通信设备",
        "note": "高位科技与公用事业出现明显抛压，说明拥挤赛道与前期强势方向内部在同步释放压力。",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.06.05",
    "observation": "次日观察重点：一是沪指4000点附近能否获得有效承接；二是机器人、玻璃基板等逆势方向能否维持强度；三是半导体、创业板若继续大幅承压，市场仍可能延续指数弱、题材局部活跃的高低切格局。",
    "note": "注：该指数为基于同花顺 iFinD 数据与复盘参考答案整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-08T06:42:50"
  },
  {
    "title": "复盘啦",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.04",
    "closeTime": "15:00",
    "badge": "6月4日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.04 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 46,
    "mood": "弱势分化",
    "moodTone": "blue",
    "summary": "三大指数集体回调，市场宽度明显不足，但通信设备 / 光模块 / 光纤仍有承接，属于弱势分化盘",
    "miniGauges": [
      {
        "score": 25,
        "title": "市场宽度",
        "desc": "1344涨 / 4121跌"
      },
      {
        "score": 63,
        "title": "成交热度",
        "desc": "两市 2.76万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 54,
        "title": "赚钱效应",
        "desc": "91涨停 / 32跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4057.78",
        "change": "-0.64%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "15661.57",
        "change": "-0.27%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "4088.88",
        "change": "-0.83%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.76万亿",
        "change": "缩量3726亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.69%",
        "change": "5511只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1344 / 4121",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "91 / 32",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 28,
      "rawScore": 39.24,
      "temperatureScore": 30.71,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 46,
      "delta": -18,
      "funddb": {
        "score": 37,
        "status": "恐惧",
        "tradeDate": "2026.06.04",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 33,
        "referenceTradeDate": "2026-06-04",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 46.14,
          "mappedScore": 32.24,
          "calibration": -1.0,
          "appliedCalibration": -1.0,
          "calibrationNotes": [
            "weak-median",
            "limit-up-spread"
          ],
          "priceStrength": 36,
          "participation": 52,
          "limitScore": 74,
          "median": -1.69,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 37.4,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 31,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.04",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 24.65,
                "weight": 0.18,
                "status": "ready",
                "value": 31.1815,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 21.63,
                "weight": 0.2,
                "status": "ready",
                "value": 2.7222,
                "detail": "147/5400 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 37.3,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.688,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 29.51,
                "weight": 0.26,
                "status": "ready",
                "value": -0.4347,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 74.97,
                "weight": 0.2,
                "status": "ready",
                "value": 9.998,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 35,
          "weight": "20%",
          "desc": "1344 / 4121，91 / 32"
        },
        {
          "name": "指数路径",
          "score": 34,
          "weight": "20%",
          "desc": "四大指数平均 -0.58%"
        },
        {
          "name": "流动性",
          "score": 55,
          "weight": "10%",
          "desc": "2.76万亿 缩量3726亿"
        },
        {
          "name": "恐贪风险",
          "score": 37,
          "weight": "32%",
          "desc": "自算恐贪 37 / 恐惧 / 参考指标 33 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 39.2，再用情绪温度映射与共振修正下修至 28。当前多数因子偏弱，恐贪代理口径为恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "PCB、CPO、光模块等科技线共振，亨通光电、东山精密、中钨高新等核心股创历史新高",
      "焦炭加工涨幅靠前，但成交主线仍以通信设备 / 光模块 / 光纤为核心",
      "成交额前200中通信设备 / 光模块 / 光纤占比较高，主线资金未完全扩散",
      "强势股 91 家，局部短线情绪仍有承接"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.64%，深证成指 -0.27%，创业板指 -0.83%",
      "两市成交额 2.76万亿，缩量3726亿，资金承接不足，前一交易日 2026.06.03",
      "上涨家数仅 1344，占比 24.6%，个股宽度偏弱",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 煤炭",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "中船系",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": "2026.06.04",
    "observation": "观察重点：通信设备 / 光模块 / 光纤能否继续放量，盘中路径能否转强，成交额能否维持在2.76万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-04T18:04:00+08:00"
  },
  {
    "title": "A股复盘大师",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.03",
    "closeTime": "15:00",
    "badge": "6月3日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.03 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 49,
    "mood": "结构分化",
    "moodTone": "blue",
    "summary": "指数修复明显，但个股涨跌不足，AI硬件 / CPO / PCB成为资金主攻方向，属于典型结构分化盘",
    "miniGauges": [
      {
        "score": 31,
        "title": "市场宽度",
        "desc": "1713涨 / 3727跌"
      },
      {
        "score": 84,
        "title": "成交热度",
        "desc": "两市 3.13万亿"
      },
      {
        "score": 62,
        "title": "主线承接",
        "desc": "AI硬件 / CPO / PCB"
      },
      {
        "score": 55,
        "title": "赚钱效应",
        "desc": "81涨停 / 27跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4083.97",
        "change": "+0.22%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "15704.71",
        "change": "+0.73%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "4122.99",
        "change": "+1.65%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "3.13万亿",
        "change": "放量3373亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.02%",
        "change": "5511只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1713 / 3727",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "81 / 27",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 55,
      "rawScore": 51.36,
      "temperatureScore": 55.35,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "中性偏热",
      "moodTone": "red",
      "originalScore": 49,
      "delta": 6,
      "funddb": {
        "score": 40,
        "status": "恐惧",
        "tradeDate": "2026.06.03",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 33,
        "referenceTradeDate": "2026-06-03",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 59.42,
          "mappedScore": 38.12,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 41,
          "participation": 61,
          "limitScore": 75,
          "median": -1.02,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 40.15,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 39,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.03",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 21.27,
                "weight": 0.18,
                "status": "ready",
                "value": 31.3706,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 13.52,
                "weight": 0.2,
                "status": "ready",
                "value": 2.2037,
                "detail": "119/5400 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 54.92,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.5064,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 36.48,
                "weight": 0.26,
                "status": "ready",
                "value": 0.7297,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 76.74,
                "weight": 0.2,
                "status": "ready",
                "value": 10.1042,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 39,
          "weight": "20%",
          "desc": "1713 / 3727，81 / 27"
        },
        {
          "name": "指数路径",
          "score": 68,
          "weight": "20%",
          "desc": "四大指数平均 +0.87%"
        },
        {
          "name": "流动性",
          "score": 60,
          "weight": "10%",
          "desc": "3.13万亿 放量3373亿"
        },
        {
          "name": "恐贪风险",
          "score": 40,
          "weight": "32%",
          "desc": "自算恐贪 40 / 恐惧 / 参考指标 33 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 62,
          "weight": "18%",
          "desc": "AI硬件 / CPO / PCB"
        }
      ],
      "summary": "新版保留原权重得到原始分 51.4，再用情绪温度映射与共振修正上修至 55。当前未出现明显单边共振，恐贪代理口径为恐惧，AI硬件 / CPO / PCB。"
    },
    "bullFactors": [
      "PCB、CPO、光模块等科技线共振，中钨高新、东材科技等核心股创历史新高",
      "稀土涨幅靠前，但成交主线仍以AI硬件 / CPO / PCB为核心",
      "成交额前200中AI硬件 / CPO / PCB占比较高，主线资金未完全扩散",
      "两市成交额 3.13万亿，较前一日继续放量，前一交易日 2026.06.02"
    ],
    "bearFactors": [
      "中际旭创、新易盛、工业富联盘中创历史新高后明显回落，高位分歧加大",
      "盘中波动较大，方向仍有分歧",
      "上涨家数仅 1713，占比 31.5%，个股宽度偏弱",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "AI硬件 / CPO / PCB",
        "note": "中际旭创、天孚通信、新易盛共振走强，主线辨识度高",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "半导体 / 自动化设备",
        "note": "成长风格修复，创业板弹性继续释放",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "贵金属 / 指数权重",
        "note": "兼具避险与指数稳定属性，提供情绪缓冲",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "影视院线 / 游戏 / 电商",
        "note": "消费传导方向偏弱，跟风承接明显不足",
        "tone": "down"
      }
    ],
    "stockDailyDate": "2026.06.03",
    "observation": "观察重点：AI硬件 / CPO / PCB能否继续放量，盘中路径能否转强，成交额能否维持在3.13万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-03T18:11:57+08:00"
  },
  {
    "title": "A股收盘温度指数",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.02",
    "closeTime": "15:00",
    "badge": "6月2日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.02 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 49,
    "mood": "结构分化",
    "moodTone": "blue",
    "summary": "指数修复明显，但个股涨跌不足，AI硬件 / CPO / PCB成为资金主攻方向，属于典型结构分化盘",
    "miniGauges": [
      {
        "score": 28,
        "title": "市场宽度",
        "desc": "1543涨 / 3876跌"
      },
      {
        "score": 67,
        "title": "成交热度",
        "desc": "两市 2.79万亿"
      },
      {
        "score": 61,
        "title": "主线承接",
        "desc": "AI硬件 / CPO / PCB"
      },
      {
        "score": 60,
        "title": "赚钱效应",
        "desc": "96涨停 / 18跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4075.10",
        "change": "+0.43%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "15591.13",
        "change": "+1.63%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "4055.87",
        "change": "+2.66%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.79万亿",
        "change": "缩量845亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.36%",
        "change": "5507只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1543 / 3876",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "96 / 18",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 56,
      "rawScore": 51.64,
      "temperatureScore": 56.01,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "中性偏热",
      "moodTone": "red",
      "originalScore": 49,
      "delta": 7,
      "funddb": {
        "score": 38,
        "status": "恐惧",
        "tradeDate": "2026.06.02",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 33,
        "referenceTradeDate": "2026-06-02",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 61.51,
          "mappedScore": 39.05,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 41,
          "participation": 60,
          "limitScore": 84,
          "median": -1.36,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 37.69,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 40,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.02",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 23.83,
                "weight": 0.18,
                "status": "ready",
                "value": 30.6567,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 12.76,
                "weight": 0.2,
                "status": "ready",
                "value": 2.0385,
                "detail": "110/5396 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 34.84,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.7317,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 47.54,
                "weight": 0.26,
                "status": "ready",
                "value": 1.6977,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 64.56,
                "weight": 0.2,
                "status": "ready",
                "value": 9.3735,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 39,
          "weight": "20%",
          "desc": "1543 / 3876，96 / 18"
        },
        {
          "name": "指数路径",
          "score": 74,
          "weight": "20%",
          "desc": "四大指数平均 +1.57%"
        },
        {
          "name": "流动性",
          "score": 59,
          "weight": "10%",
          "desc": "2.79万亿 缩量845亿"
        },
        {
          "name": "恐贪风险",
          "score": 38,
          "weight": "32%",
          "desc": "自算恐贪 38 / 恐惧 / 参考指标 33 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 61,
          "weight": "18%",
          "desc": "AI硬件 / CPO / PCB"
        }
      ],
      "summary": "新版保留原权重得到原始分 51.6，再用情绪温度映射与共振修正上修至 56。当前未出现明显单边共振，恐贪代理口径为恐惧，AI硬件 / CPO / PCB。"
    },
    "bullFactors": [
      "PCB、CPO、光模块午后共振，新易盛等核心股创历史新高",
      "金属锌涨幅靠前，但成交主线仍以AI硬件 / CPO / PCB为核心",
      "成交额前200中AI硬件 / CPO / PCB占比较高，主线资金未完全扩散",
      "沪深两市成交额 2.79万亿，活跃度仍在高位"
    ],
    "bearFactors": [
      "指数修复但成交额缩量845亿，增量资金仍需确认，前一交易日 2026.06.01",
      "江海股份盘中创历史新高后明显回落，高位分歧加大",
      "盘中振幅偏大，修复并非单边走强",
      "上涨家数仅 1543，占比 28.5%，个股宽度偏弱"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "AI硬件 / CPO / PCB",
        "note": "中际旭创、天孚通信、新易盛共振走强，主线辨识度高",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "半导体 / 自动化设备",
        "note": "成长风格修复，创业板弹性继续释放",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "贵金属 / 指数权重",
        "note": "兼具避险与指数稳定属性，提供情绪缓冲",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "影视院线 / 游戏 / 电商",
        "note": "消费传导方向偏弱，跟风承接明显不足",
        "tone": "down"
      }
    ],
    "stockDailyDate": null,
    "observation": "观察重点：AI硬件 / CPO / PCB能否继续放量，盘中修复能否延续，成交额能否维持在2.79万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-03T14:33:56+08:00"
  },
  {
    "title": "A股收盘温度指数",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.06.01",
    "closeTime": "15:00",
    "badge": "6月1日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.06.01 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 58,
    "mood": "分化偏多",
    "moodTone": "blue",
    "summary": "指数回调但个股普涨，煤炭 / 焦煤链 / AI应用接力，半导体 / CPO / PCB杀估值加剧，属于宽度修复但主线分化盘",
    "miniGauges": [
      {
        "score": 69,
        "title": "市场宽度",
        "desc": "3776涨 / 1682跌"
      },
      {
        "score": 66,
        "title": "成交热度",
        "desc": "两市 2.88万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "煤炭 / 焦煤链 / AI应用"
      },
      {
        "score": 64,
        "title": "赚钱效应",
        "desc": "166涨停 / 23跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4057.74",
        "change": "-0.27%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "15340.36",
        "change": "-1.51%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "3950.94",
        "change": "-2.15%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "2.88万亿",
        "change": "缩量4415亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+1.31%",
        "change": "5508只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3776 / 1682",
        "change": "占比 69.2%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "166 / 23",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 54,
      "rawScore": 43.14,
      "temperatureScore": 35.41,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 19,
      "structuralFloor": 54,
      "resonanceNotes": [
        "结构修复抑制慢因子过度降温"
      ],
      "mood": "修复",
      "moodTone": "red",
      "originalScore": 58,
      "delta": -4,
      "funddb": {
        "score": 32,
        "status": "恐惧",
        "tradeDate": "2026.06.01",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 23,
        "referenceTradeDate": "2026-06-01",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 59.46,
          "mappedScore": 38.14,
          "calibration": 4.0,
          "appliedCalibration": 1.4,
          "calibrationNotes": [
            "limit-up-spread",
            "high-up-ratio"
          ],
          "priceStrength": 67,
          "participation": 53,
          "limitScore": 88,
          "median": 1.31,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 31.64,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 40,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.06.01",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 21.36,
                "weight": 0.18,
                "status": "ready",
                "value": 31.5759,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 7.02,
                "weight": 0.2,
                "status": "ready",
                "value": 1.5935,
                "detail": "86/5397 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 37.7,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.6865,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 32.38,
                "weight": 0.26,
                "status": "ready",
                "value": 0.1829,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 59.71,
                "weight": 0.2,
                "status": "ready",
                "value": 9.0827,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 67,
          "weight": "20%",
          "desc": "3776 / 1682，166 / 23"
        },
        {
          "name": "指数路径",
          "score": 28,
          "weight": "20%",
          "desc": "四大指数平均 -1.31%"
        },
        {
          "name": "流动性",
          "score": 58,
          "weight": "10%",
          "desc": "2.88万亿 缩量4415亿"
        },
        {
          "name": "恐贪风险",
          "score": 32,
          "weight": "32%",
          "desc": "自算恐贪 32 / 恐惧 / 参考指标 23 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "煤炭 / 焦煤链 / AI应用"
        }
      ],
      "summary": "新版保留原权重得到原始分 43.1，再用情绪温度映射、共振修正与结构修复保护上修至 54。当前结构修复抑制慢因子过度降温，恐贪代理口径为恐惧，煤炭 / 焦煤链 / AI应用。"
    },
    "bullFactors": [
      "上涨家数 3776，占比 69.2%，情绪宽度明显优于指数",
      "ERP概念等AI应用方向轮动活跃，需继续观察能否接上成交主线",
      "两市成交额 2.88万亿，较前一日缩量4415亿，但活跃度仍维持在高位区间",
      "煤炭概念涨幅靠前，资源方向成为当日攻击方向"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.27%，深证成指 -1.51%，创业板指 -2.15%，科创50 -5.00%",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体、CPO、PCB走弱，高位硬科技杀估值明显",
      "江海股份、博迁新材盘中创历史新高后明显回落，高位分歧加大"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "煤炭 / 焦煤链",
        "note": "供给扰动继续发酵，资源股成为最强攻击方向",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "AI应用 / 计算机",
        "note": "软件、数据安全、办公协同活跃，承接硬件流出资金",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 高股息 / 央企",
        "note": "能源链跟随走强，低位品种承接仍明显",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、CPO、PCB",
        "note": "高位硬科技回调，科创权重对指数拖累显著",
        "tone": "down"
      }
    ],
    "stockDailyDate": null,
    "observation": "观察重点：煤炭脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-03T11:28:03+08:00"
  },
  {
    "title": "A股收盘温度指数",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.05.29",
    "closeTime": "15:00",
    "badge": "5月29日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.05.29 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 44,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度偏冷，早盘冲高后回落，午后探低，收盘靠近低位，上涨1542家，强势67家，成交3.32万亿，主线集中在通信设备 / 光模块 / 光纤",
    "miniGauges": [
      {
        "score": 28,
        "title": "市场宽度",
        "desc": "1542涨 / 3884跌"
      },
      {
        "score": 89,
        "title": "成交热度",
        "desc": "两市 3.32万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "通信设备 / 光模块 / 光纤"
      },
      {
        "score": 24,
        "title": "赚钱效应",
        "desc": "67涨停 / 59跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4068.57",
        "change": "-0.73%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "15575.13",
        "change": "-1.81%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "4037.95",
        "change": "-2.11%",
        "tone": "green"
      },
      {
        "label": "两市成交额",
        "value": "3.32万亿",
        "change": "放量3509亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-2.22%",
        "change": "5506只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1542 / 3884",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "67 / 59",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 25,
      "rawScore": 36.54,
      "temperatureScore": 27.84,
      "resonanceAdjustment": -2.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏弱"
      ],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 44,
      "delta": -19,
      "funddb": {
        "score": 37,
        "status": "恐惧",
        "tradeDate": "2026.05.29",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 29,
        "referenceTradeDate": "2026-05-29",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 27.7,
          "mappedScore": 24.07,
          "calibration": -3.0,
          "appliedCalibration": -3.0,
          "calibrationNotes": [
            "weak-median"
          ],
          "priceStrength": 26,
          "participation": 55,
          "limitScore": 53,
          "median": -2.22,
          "penalties": [
            "中位数深跌"
          ],
          "boosts": [],
          "ifindFactorScore": 37.06,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 21,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.05.29",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 21.8,
                "weight": 0.18,
                "status": "ready",
                "value": 32.4227,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 7.88,
                "weight": 0.2,
                "status": "ready",
                "value": 1.65,
                "detail": "89/5394 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 27.46,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.906,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 55.33,
                "weight": 0.26,
                "status": "ready",
                "value": 2.2576,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 63.88,
                "weight": 0.2,
                "status": "ready",
                "value": 9.3329,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 27,
          "weight": "20%",
          "desc": "1542 / 3884，67 / 59"
        },
        {
          "name": "指数路径",
          "score": 26,
          "weight": "20%",
          "desc": "四大指数平均 -1.55%"
        },
        {
          "name": "流动性",
          "score": 60,
          "weight": "10%",
          "desc": "3.32万亿 放量3509亿"
        },
        {
          "name": "恐贪风险",
          "score": 37,
          "weight": "32%",
          "desc": "自算恐贪 37 / 恐惧 / 参考指标 29 / 中位数深跌"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "通信设备 / 光模块 / 光纤"
        }
      ],
      "summary": "新版保留原权重得到原始分 36.5，再用情绪温度映射与共振修正下修至 25。当前多数因子偏弱，恐贪代理口径为恐惧，通信设备 / 光模块 / 光纤。"
    },
    "bullFactors": [
      "煤炭概念涨幅靠前，但成交主线仍以通信设备 / 光模块 / 光纤为核心",
      "两市成交额 3.32万亿，较前一日继续放量，前一交易日 2026.05.28",
      "强势股 67 家，局部短线情绪仍有承接"
    ],
    "bearFactors": [
      "三大指数全线收跌：上证 -0.73%，深证成指 -1.81%，创业板指 -2.11%，科创50 -5.04%",
      "指数下跌但成交额放量3509亿，放量分歧明显升温",
      "科创50跌幅较深，成长赛道内部出清仍在加剧",
      "半导体走弱，高位硬科技杀估值明显"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "通信设备 / 光模块 / 光纤",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 煤炭",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "消费电子 / 免税 / 稀土",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": null,
    "observation": "观察重点：煤炭脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-03T11:27:52+08:00"
  },
  {
    "title": "A股收盘温度指数",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.05.28",
    "closeTime": "15:00",
    "badge": "5月28日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.05.28 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 65,
    "mood": "偏积极",
    "moodTone": "red",
    "summary": "收盘温度偏热，盘中下探后修复，收盘靠近日内高位，上涨3018家，强势126家，成交2.97万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 56,
        "title": "市场宽度",
        "desc": "3018涨 / 2365跌"
      },
      {
        "score": 68,
        "title": "成交热度",
        "desc": "两市 2.97万亿"
      },
      {
        "score": 75,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 62,
        "title": "外部信号",
        "desc": "美股新高 / 人民币偏强"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4098.64",
        "change": "+0.12%",
        "tone": "red"
      },
      {
        "label": "深证成指",
        "value": "15861.89",
        "change": "+0.80%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "4125.07",
        "change": "+1.96%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "2.97万亿",
        "change": "缩量2704亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "+0.30%",
        "change": "5506只样本",
        "tone": "red"
      },
      {
        "label": "个股宽度",
        "value": "3018 / 2365",
        "change": "占比 56.1%",
        "tone": "red"
      },
      {
        "label": "涨停 / 跌停",
        "value": "126 / 12",
        "change": "赚钱效应修复",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 69,
      "rawScore": 57.86,
      "temperatureScore": 65.88,
      "resonanceAdjustment": 3.5,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [
        "多数因子偏强",
        "原口径确认强度"
      ],
      "mood": "偏热",
      "moodTone": "red",
      "originalScore": 65,
      "delta": 4,
      "funddb": {
        "score": 43,
        "status": "恐惧",
        "tradeDate": "2026.05.28",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 64,
        "referenceTradeDate": "2026-05-28",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 68.72,
          "mappedScore": 42.24,
          "calibration": 2.0,
          "appliedCalibration": 0.7,
          "calibrationNotes": [
            "limit-up-spread"
          ],
          "priceStrength": 53,
          "participation": 65,
          "limitScore": 91,
          "median": 0.3,
          "penalties": [],
          "boosts": [
            "涨停扩散"
          ],
          "ifindFactorScore": 43.06,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 43,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.05.28",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 16.87,
                "weight": 0.18,
                "status": "ready",
                "value": 34.1342,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 38.75,
                "weight": 0.2,
                "status": "ready",
                "value": 4.1705,
                "detail": "225/5395 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 16.8,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.1846,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 56.56,
                "weight": 0.26,
                "status": "ready",
                "value": 2.3977,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 74.41,
                "weight": 0.2,
                "status": "ready",
                "value": 9.9644,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 54,
          "weight": "20%",
          "desc": "3018 / 2365，126 / 12"
        },
        {
          "name": "指数路径",
          "score": 69,
          "weight": "20%",
          "desc": "四大指数平均 +0.96%"
        },
        {
          "name": "流动性",
          "score": 60,
          "weight": "10%",
          "desc": "2.97万亿 缩量2704亿"
        },
        {
          "name": "恐贪风险",
          "score": 43,
          "weight": "32%",
          "desc": "自算恐贪 43 / 恐惧 / 参考指标 64 / 涨停扩散"
        },
        {
          "name": "主线结构",
          "score": 75,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 57.9，再用情绪温度映射与共振修正上修至 69。当前多数因子偏强;原口径确认强度，恐贪代理口径为恐惧，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "上涨家数 3018，占比 56.1%，市场宽度偏强",
      "PCB、CPO、光模块午后共振，新易盛、天孚通信、中国巨石等核心股创历史新高",
      "稀土涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "成交额前200中PCB / CPO / 光模块占比较高，主线资金未完全扩散"
    ],
    "bearFactors": [
      "指数修复但成交额缩量2704亿，增量资金仍需确认，前一交易日 2026.05.27",
      "中芯国际、华虹公司盘中创历史新高后明显回落，高位分歧加大",
      "盘中振幅偏大，修复并非单边走强",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "PCB / CPO / 光模块",
        "note": "午后强化，核心股再创历史新高",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "科技主线修复，分支扩散提升",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业",
        "note": "抱团延续，指数修复中提供稳定承接",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "培育钻石 / 超硬材料",
        "note": "热点映射升温，弹性最强",
        "tone": "up"
      }
    ],
    "stockDailyDate": null,
    "observation": "观察重点：PCB / CPO / 光模块能否继续放量，盘中修复能否延续，成交额能否维持在2.97万亿附近，指数与市场宽度能否同步修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-03T11:27:33+08:00"
  },
  {
    "title": "A股收盘温度指数",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.05.27",
    "closeTime": "15:00",
    "badge": "5月27日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.05.27 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 44,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度偏冷，早盘冲高后回落，午后探低，收盘靠近低位，上涨974家，强势61家，成交3.24万亿，主线集中在AI算力 / 存储 / 半导体",
    "miniGauges": [
      {
        "score": 18,
        "title": "市场宽度",
        "desc": "974涨 / 4489跌"
      },
      {
        "score": 78,
        "title": "成交热度",
        "desc": "两市 3.24万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "AI算力 / 存储 / 半导体"
      },
      {
        "score": 46,
        "title": "赚钱效应",
        "desc": "61涨停 / 32跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4093.73",
        "change": "-1.25%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "15736.47",
        "change": "-0.88%",
        "tone": "green"
      },
      {
        "label": "创业板指",
        "value": "4045.77",
        "change": "+0.07%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "3.24万亿",
        "change": "缩量51亿",
        "tone": "blue"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-2.33%",
        "change": "5506只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "974 / 4489",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "61 / 32",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 34,
      "rawScore": 42.18,
      "temperatureScore": 34.17,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 44,
      "delta": -10,
      "funddb": {
        "score": 44,
        "status": "恐惧",
        "tradeDate": "2026.05.27",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 59,
        "referenceTradeDate": "2026-05-27",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 33.76,
          "mappedScore": 26.76,
          "calibration": -3.0,
          "appliedCalibration": -3.0,
          "calibrationNotes": [
            "weak-median"
          ],
          "priceStrength": 29,
          "participation": 55,
          "limitScore": 66,
          "median": -2.33,
          "penalties": [
            "中位数深跌"
          ],
          "boosts": [],
          "ifindFactorScore": 44.02,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 24,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.05.27",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 36.22,
                "weight": 0.18,
                "status": "ready",
                "value": 25.0017,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 19.67,
                "weight": 0.2,
                "status": "ready",
                "value": 2.6321,
                "detail": "142/5395 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 22.13,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -1.0385,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 56.97,
                "weight": 0.26,
                "status": "ready",
                "value": 2.4035,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 76.07,
                "weight": 0.2,
                "status": "ready",
                "value": 10.0641,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 28,
          "weight": "20%",
          "desc": "974 / 4489，61 / 32"
        },
        {
          "name": "指数路径",
          "score": 42,
          "weight": "20%",
          "desc": "四大指数平均 -0.69%"
        },
        {
          "name": "流动性",
          "score": 60,
          "weight": "10%",
          "desc": "3.24万亿 缩量51亿"
        },
        {
          "name": "恐贪风险",
          "score": 44,
          "weight": "32%",
          "desc": "自算恐贪 44 / 恐惧 / 参考指标 59 / 中位数深跌"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "AI算力 / 存储 / 半导体"
        }
      ],
      "summary": "新版保留原权重得到原始分 42.2，再用情绪温度映射与共振修正下修至 34。当前未出现明显单边共振，恐贪代理口径为恐惧，AI算力 / 存储 / 半导体。"
    },
    "bullFactors": [
      "煤炭开采和洗选业指数涨幅靠前，但成交主线仍以AI算力 / 存储 / 半导体为核心",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "仍有单一指数抗跌收红：上证 -1.25%，深证成指 -0.88%，创业板指 +0.07%",
      "强势股 61 家，局部短线情绪仍有承接"
    ],
    "bearFactors": [
      "多数指数收跌：上证 -1.25%，深证成指 -0.88%，创业板指 +0.07%",
      "半导体走弱，高位硬科技杀估值明显",
      "长电科技、胜宏科技、兆易创新盘中创历史新高后明显回落，高位分歧加大",
      "两市成交额 3.24万亿，缩量51亿，资金承接不足，前一交易日 2026.05.26"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "AI算力 / 存储 / 半导体",
        "note": "高位分化但主线仍有承接",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "分歧扩大，回调后关注资金是否回流",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 煤炭",
        "note": "低位抱团仍偏强，说明风险偏好回落",
        "tone": "up"
      },
      {
        "tag": "弹性",
        "name": "消费电子 / 免税 / 稀土",
        "note": "轮动方向保持活跃，持续性仍需确认",
        "tone": "up"
      }
    ],
    "stockDailyDate": null,
    "observation": "观察重点：煤炭脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-03T11:27:15+08:00"
  },
  {
    "title": "A股收盘温度指数",
    "sentimentTitle": "A股收盘温度指数",
    "tradeDate": "2026.05.26",
    "closeTime": "15:00",
    "badge": "5月26日收盘版 / 同花顺数据",
    "subtitle": "基于 2026.05.26 15:00 收盘数据整理｜用于当日复盘与次日观察",
    "score": 48,
    "mood": "偏谨慎",
    "moodTone": "blue",
    "summary": "收盘温度偏冷，盘中承接较强，收盘处于日内偏高位置，上涨1354家，强势64家，成交3.24万亿，主线集中在PCB / CPO / 光模块",
    "miniGauges": [
      {
        "score": 25,
        "title": "市场宽度",
        "desc": "1354涨 / 4082跌"
      },
      {
        "score": 85,
        "title": "成交热度",
        "desc": "两市 3.24万亿"
      },
      {
        "score": 45,
        "title": "主线承接",
        "desc": "PCB / CPO / 光模块"
      },
      {
        "score": 48,
        "title": "赚钱效应",
        "desc": "64涨停 / 34跌停"
      }
    ],
    "marketData": [
      {
        "label": "上证指数",
        "value": "4145.37",
        "change": "-0.17%",
        "tone": "green"
      },
      {
        "label": "深证成指",
        "value": "15876.16",
        "change": "+0.12%",
        "tone": "red"
      },
      {
        "label": "创业板指",
        "value": "4043.07",
        "change": "+0.54%",
        "tone": "red"
      },
      {
        "label": "两市成交额",
        "value": "3.24万亿",
        "change": "放量380亿",
        "tone": "red"
      },
      {
        "label": "涨跌幅中位数",
        "value": "-1.68%",
        "change": "5504只样本",
        "tone": "green"
      },
      {
        "label": "个股宽度",
        "value": "1354 / 4082",
        "change": "明显跌多涨少",
        "tone": "green"
      },
      {
        "label": "涨停 / 跌停",
        "value": "64 / 34",
        "change": "强势股承接",
        "tone": "red"
      }
    ],
    "sentimentV2": {
      "version": "v5-structural-repair-20260810",
      "displayAsPrimary": true,
      "score": 40,
      "rawScore": 46.54,
      "temperatureScore": 40.45,
      "resonanceAdjustment": 0.0,
      "structuralAdjustment": 0,
      "structuralFloor": null,
      "resonanceNotes": [],
      "mood": "偏冷",
      "moodTone": "blue",
      "originalScore": 48,
      "delta": -8,
      "funddb": {
        "score": 47,
        "status": "中性",
        "tradeDate": "2026.05.26",
        "source": "self-calculated; FundDB method used as reference only",
        "referenceScore": 68,
        "referenceTradeDate": "2026-05-26",
        "method": "local-reverse-engineered",
        "proxyDetail": {
          "method": "local-reverse-engineered",
          "rawScore": 45.94,
          "mappedScore": 32.15,
          "calibration": -3.0,
          "appliedCalibration": -3.0,
          "calibrationNotes": [
            "weak-median"
          ],
          "priceStrength": 34,
          "participation": 55,
          "limitScore": 65,
          "median": -1.68,
          "penalties": [],
          "boosts": [],
          "ifindFactorScore": 47.19,
          "ifindFactorBlendWeight": 1.0,
          "ifindFactorCoverage": 1,
          "riskBeforeIfindFactors": 29,
          "ifindFactorDetail": {
            "status": "ready",
            "tradeDate": "2026.05.26",
            "coverageWeight": 1.0,
            "usedFactors": [
              {
                "key": "volatility",
                "score": 27.87,
                "weight": 0.18,
                "status": "ready",
                "value": 25.7778,
                "detail": "Weighted 30-day implied volatility basket across SZ50, HS300, CSI1000, STAR50 and ChiNext option proxies; weights use 3-month index momentum (60%) and realized volatility (40%)."
              },
              {
                "key": "priceStrength",
                "score": 28.57,
                "weight": 0.2,
                "status": "ready",
                "value": 3.5032,
                "detail": "189/5395 stocks at one-year high"
              },
              {
                "key": "futuresBasis",
                "score": 23.36,
                "weight": 0.16,
                "status": "ready_external_fallback",
                "value": -0.9832,
                "detail": "iFinD CFFEX quotes were denied; fallback uses Sina IF main continuous futures close while HS300 index close still comes from iFinD. Basis is calculated locally."
              },
              {
                "key": "safeHaven",
                "score": 65.98,
                "weight": 0.26,
                "status": "ready",
                "value": 2.999,
                "detail": "HS300 20d return minus treasury net-price index 20d return"
              },
              {
                "key": "leverage",
                "score": 77.83,
                "weight": 0.2,
                "status": "ready",
                "value": 10.1699,
                "detail": "Same-date all-A margin buy amount divided by all-A turnover from iFinD."
              }
            ],
            "source": "local-ifind-and-cache"
          }
        }
      },
      "components": [
        {
          "name": "盘面宽度",
          "score": 33,
          "weight": "20%",
          "desc": "1354 / 4082，64 / 34"
        },
        {
          "name": "指数路径",
          "score": 54,
          "weight": "20%",
          "desc": "四大指数平均 +0.16%"
        },
        {
          "name": "流动性",
          "score": 60,
          "weight": "10%",
          "desc": "3.24万亿 放量380亿"
        },
        {
          "name": "恐贪风险",
          "score": 47,
          "weight": "32%",
          "desc": "自算恐贪 47 / 中性 / 参考指标 68"
        },
        {
          "name": "主线结构",
          "score": 45,
          "weight": "18%",
          "desc": "PCB / CPO / 光模块"
        }
      ],
      "summary": "新版保留原权重得到原始分 46.5，再用情绪温度映射与共振修正下修至 40。当前未出现明显单边共振，恐贪代理口径为中性，PCB / CPO / 光模块。"
    },
    "bullFactors": [
      "金属铅涨幅靠前，但成交主线仍以PCB / CPO / 光模块为核心",
      "CPO / 光模块 / 铜缆仍是成交额前排核心，但高位硬科技分歧需要同步跟踪",
      "两市成交额 3.24万亿，较前一日继续放量，前一交易日 2026.05.25",
      "多数指数收红：上证 -0.17%，深证成指 +0.12%，创业板指 +0.54%"
    ],
    "bearFactors": [
      "半导体、CPO走弱，高位硬科技杀估值明显",
      "中国巨石、中材科技、绿的谐波盘中创历史新高后明显回落，高位分歧加大",
      "上涨家数仅 1354，占比 24.9%，个股宽度偏弱",
      "热点快速轮动，若后续不能放量，持续性仍需观察"
    ],
    "blocks": [
      {
        "tag": "主线",
        "name": "有色 / 小金属 / 稀土",
        "note": "洛阳钼业、紫金矿业、北方稀土等成交额前排集中，成交占比约3.9%",
        "tone": "up"
      },
      {
        "tag": "扩散",
        "name": "芯片 / 半导体 / 算力硬件",
        "note": "集成电路封测涨幅+3.51%，主线链条内热度继续外溢",
        "tone": "up"
      },
      {
        "tag": "成长",
        "name": "消费电子 / 免税 / 品牌消费",
        "note": "免税店涨幅+0.61%，成长方向短线承接增强",
        "tone": "up"
      },
      {
        "tag": "对冲",
        "name": "黄金概念",
        "note": "黄金概念涨幅+1.56%，弱势或分化环境下有资金切换",
        "tone": "up"
      },
      {
        "tag": "防御",
        "name": "电力 / 公用事业 / 高股息",
        "note": "大唐发电、华电辽能、长江电力等成交额前排集中，成交占比约1.9%",
        "tone": "up"
      },
      {
        "tag": "承压",
        "name": "半导体、CPO",
        "note": "半导体、CPO走弱，高位方向进入承压观察",
        "tone": "down"
      }
    ],
    "stockDailyDate": null,
    "observation": "观察重点：金属铅脉冲后能否延续，AI应用能否接住硬件分歧，科创50急跌后是否出现止跌修复。",
    "note": "注：该指数为基于同花顺 iFinD 数据整理的示意型多空情绪值，不代表官方发布口径。",
    "generatedAt": "2026-06-03T11:26:56+08:00"
  }
];
