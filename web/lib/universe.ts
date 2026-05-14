// 硅基文明消费股 — curated default universe.
//
// Thesis: "硅基文明消费" = what a silicon-based civilization (AI agents,
// training/inference workloads, autonomous compute) ITSELF consumes —
// not what humans buy from AI. The AI economy's appetite is for compute,
// electricity, optical bandwidth, cooling, memory, and semiconductor
// materials. We invest in the picks-and-shovels feeding that demand.

export interface UniverseEntry {
  symbol: string;          // pyserver-normalized: e.g. "sh600519", "002475", "hk00700"
  name: string;
  theme: string;
  note?: string;
}

export const DEFAULT_UNIVERSE: UniverseEntry[] = [
  // 算力 / AI 芯片 — GPU、ASIC、CPU
  { symbol: "688256", name: "寒武纪", theme: "算力/AI芯片", note: "AI 训练/推理芯片" },
  { symbol: "688041", name: "海光信息", theme: "算力/AI芯片", note: "DCU / x86 CPU" },
  { symbol: "002049", name: "紫光国微", theme: "算力/AI芯片" },

  // 光模块 / 网络互连 — 800G/1.6T 光通信
  { symbol: "300308", name: "中际旭创", theme: "光模块", note: "全球 800G 龙头" },
  { symbol: "300502", name: "新易盛", theme: "光模块" },
  { symbol: "300394", name: "天孚通信", theme: "光器件" },
  { symbol: "002281", name: "光迅科技", theme: "光器件" },

  // 服务器 / AI 整机
  { symbol: "000977", name: "浪潮信息", theme: "AI服务器", note: "国内最大 AI 服务器" },
  { symbol: "300474", name: "景嘉微", theme: "AI服务器/GPU" },
  { symbol: "603019", name: "中科曙光", theme: "AI服务器" },
  { symbol: "002405", name: "四维图新", theme: "AI服务器" },

  // 液冷 / 散热 — 数据中心耗能
  { symbol: "300682", name: "朗新集团", theme: "液冷/数据中心" },
  { symbol: "603279", name: "景津装备", theme: "液冷/数据中心" },
  { symbol: "002837", name: "英维克", theme: "液冷", note: "数据中心液冷龙头" },
  { symbol: "300484", name: "蓝海华腾", theme: "液冷" },

  // 电力 / 数据中心能源 — AI 的电力黑洞
  { symbol: "600905", name: "三峡能源", theme: "电力/绿电" },
  { symbol: "600886", name: "国投电力", theme: "电力" },
  { symbol: "600900", name: "长江电力", theme: "电力", note: "稳定基荷" },
  { symbol: "601985", name: "中国核电", theme: "电力/核电" },
  { symbol: "601619", name: "嘉泽新能", theme: "电力/风电" },

  // IDC / 数据中心运营
  { symbol: "300383", name: "光环新网", theme: "IDC" },
  { symbol: "603881", name: "数据港", theme: "IDC" },
  { symbol: "603803", name: "瑞斯康达", theme: "IDC/网络" },

  // 存储 / HBM 周边
  { symbol: "300223", name: "北京君正", theme: "存储/HBM" },
  { symbol: "688008", name: "澜起科技", theme: "存储/内存接口" },
  { symbol: "002156", name: "通富微电", theme: "封测/HBM" },
  { symbol: "002185", name: "华天科技", theme: "封测" },

  // 半导体设备 / 材料 — 硅基产能基石
  { symbol: "688012", name: "中微公司", theme: "半导体设备" },
  { symbol: "002371", name: "北方华创", theme: "半导体设备" },
  { symbol: "688126", name: "沪硅产业", theme: "半导体材料/硅片" },

  // PCB / 高速板 — AI 服务器主板
  { symbol: "002463", name: "沪电股份", theme: "AI-PCB", note: "AI 服务器主板" },
  { symbol: "600183", name: "生益科技", theme: "AI-PCB/覆铜板" },

  // 港股 — AI 基础设施龙头
  { symbol: "hk00981", name: "中芯国际", theme: "晶圆代工" },
  { symbol: "hk01347", name: "华虹半导体", theme: "晶圆代工" },
  { symbol: "hk00700", name: "腾讯控股", theme: "云/AI基建" },
  { symbol: "hk09988", name: "阿里巴巴-W", theme: "云/AI基建", note: "阿里云" },
];
