window.MARKET_SENTIMENT_HISTORY = [
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
                "detail": "margin buy amount divided by iFinD returned turnover column"
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
