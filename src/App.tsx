import { useEffect, useState } from "react";
import { ArrowUpRight, Image as ImageIcon, Menu, Phone } from "lucide-react";
import BorderGlow from "./components/BorderGlow";
import GridMotion from "./components/GridMotion.jsx";

const navItems = ["首页", "作品", "关于"];
const navTargets = ["#top", "#showcase", "#about"];

const showcaseItems = [
  {
    title: "商品主图设计",
    type: "MAIN IMAGE",
    copy: "平台首图、卖点图、点击转化图，重点突出商品主体和核心卖点。",
    src: "/portfolio/main/main-image-design-showcase-cover.png",
    accent: "#7dd3fc",
    bg: "linear-gradient(135deg, rgba(14,116,144,0.72), rgba(12,18,28,0.96))"
  },
  {
    title: "详情页设计",
    type: "DETAIL PAGE",
    copy: "把卖点、场景、材质、参数和服务信息拆成清楚模块，适合用户快速扫读。",
    src: "/portfolio/detail/detail-page-dark-showcase-cover.png",
    accent: "#a3e635",
    bg: "linear-gradient(135deg, rgba(63,98,18,0.68), rgba(13,18,25,0.96))"
  },
  {
    title: "产品精修",
    type: "RETOUCH",
    copy: "处理商品质感、边缘、光影和画面干净度，让产品图更适合电商展示。",
    src: "/portfolio/retouch/product-retouch-showcase-cover.png",
    accent: "#fb923c",
    bg: "linear-gradient(135deg, rgba(154,52,18,0.66), rgba(15,18,26,0.96))"
  },
  {
    title: "宣传海报",
    type: "POSTER",
    copy: "用于新品推广、活动宣传和平台展示，强调主题、层级和视觉记忆点。",
    src: "/portfolio/poster/activity-banner-showcase-cover.png",
    accent: "#b7ff1a",
    bg: "linear-gradient(135deg, #f8faf7 0%, #e8eee8 45%, #dfe8e3 100%)"
  }
];

const tools = ["Photoshop", "Illustrator", "剪映", "AI 生图 / AI 辅助视觉"];

const aboutFields = [
  { label: "求职岗位", value: "电商美工" },
  { label: "AI工作流", value: "Gemini / Codex / LibTV / ComfyUI / GPT" }
];

const softwareBadges = ["Ps", "Ai", "Lr", "CDR", "剪映"];

const aboutStats = [
  { value: "主图 / 详情页", label: "产品卖点提炼、信息层级、购买理由呈现" },
  { value: "活动视觉 / Banner", label: "活动页面、促销专题、运营推广视觉" },
  { value: "精修/合成/AI", label: "产品质感处理、场景合成、AI辅助素材输出" }
];

const jobDirections = ["电商美工", "电商视觉设计", "运营视觉设计"];

const experienceItems = [
  {
    period: "2023.02 - 2025.09",
    company: "帕特嘉斯眼镜",
    role: "电商美工 / 网店视觉设计",
    copy: "负责眼镜类产品的电商视觉设计与店铺页面装修，围绕平台运营需求完成首页、详情页、活动页、宣传海报及横幅 Banner 设计。参与太阳镜白底图与场景图拍摄，并完成后期调色、产品精修、版式优化与商品图视觉提升，强化产品质感和页面转化表现。",
    tags: ["店铺装修", "详情页设计", "产品精修", "产品拍摄"]
  },
  {
    period: "2021.11 - 2022.07",
    company: "铭创电子科技",
    role: "电子产品电商美工 / 静物拍摄",
    copy: "负责手机数据线、充电器等 3C 数码产品的静物拍摄与电商图片设计，确保商品图片符合平台视觉规范。完成阿里巴巴、拼多多等店铺的首页、详情页及宣传海报设计，对产品卖点、参数信息和使用场景进行视觉化呈现。",
    tags: ["3C 产品视觉", "静物拍摄", "商品图设计"]
  },
  {
    period: "2021.02 - 2021.09",
    company: "艺兴网络公司",
    role: "客户店铺视觉设计 / 电商美工",
    copy: "根据不同客户的品牌定位与运营需求，完成商品主图、详情页、活动海报及活动页面设计，配合客户店铺的日常视觉更新。负责多品类电商素材整理、页面排版、产品卖点提炼与基础修图工作，能够根据不同平台风格快速输出符合销售场景的视觉内容。",
    tags: ["主图设计", "详情页设计", "活动海报"]
  }
];

const showcasePreviewKinds = ["main", "detail", "retouch", "poster"] as const;
type PreviewKind = (typeof showcasePreviewKinds)[number];

const previewContent = {
  main: {
    label: "商品主图设计",
    title: "主图 / 卖点图预览",
    copy: "平台首图、卖点图、点击转化图，重点突出商品主体和核心卖点。"
  },
  detail: {
    label: "详情页设计",
    title: "长图详情页预览",
    copy: "把卖点、场景、材质、参数和服务信息拆成清楚模块，适合用户快速扫读。"
  },
  retouch: {
    label: "产品精修",
    title: "精修前后对比",
    copy: "精修类作品重点看前后变化，适合展示边缘、光影、质感和画面干净度。"
  },
  poster: {
    label: "宣传海报",
    title: "海报作品预览",
    copy: "海报类适合用网格展示主题、构图、层级和活动视觉风格。"
  }
} satisfies Record<PreviewKind, { label: string; title: string; copy: string }>;

const mainImagePreviewItems = [
  {
    title: "型格方框时尚太阳镜主图",
    meta: "太阳镜 / 商品主图 / 场景卖点",
    src: "/portfolio/main/square-frame-sunglasses-main.png"
  },
  {
    title: "6合1 多功能扩展坞主图",
    meta: "3C 数码 / 商品主图 / 高速传输",
    src: "/portfolio/main/usb-hub-main-image.png"
  },
  {
    title: "小米 65 英寸 4K 电视主图",
    meta: "家电 / 商品主图 / 促销转化",
    src: "/portfolio/main/xiaomi-tv-main-image.png"
  },
  {
    title: "45W 超级快充充电套装",
    meta: "3C 数码 / 商品主图 / 卖点转化",
    src: "/portfolio/main/fast-charging-main-image.png"
  },
  {
    title: "液态软胶亲肤线材",
    meta: "数据线 / 商品主图 / 材质卖点",
    src: "/portfolio/main/liquid-silicone-cable-main.png"
  },
  {
    title: "折叠太阳镜主图",
    meta: "太阳镜 / 商品主图 / 多色展示",
    src: "/portfolio/main/folding-sunglasses-main.png"
  }
];
const detailPreviewItems = [
  {
    title: "经典商务内胆包详情页",
    meta: "箱包 / 长图详情页 / 产品展示",
    src: "/portfolio/detail/business-laptop-bag-detail-page.png"
  },
  {
    title: "Bixby AI 电视详情页",
    meta: "智能电视 / 长图详情页 / 功能说明",
    src: "/portfolio/detail/bixby-tv-detail-page.png"
  },
  {
    title: "有氧健身圈详情页",
    meta: "运动器材 / 长图详情页 / 产品卖点",
    src: "/portfolio/detail/fitness-hoop-detail-page.png"
  },
  {
    title: "液态软胶亲肤线材详情页",
    meta: "数据线 / 长图详情页 / 材质卖点",
    src: "/portfolio/detail/liquid-silicone-cable-detail-page.png"
  },
  {
    title: "香氛蜡烛详情页",
    meta: "香氛 / 长图详情页 / 生活方式",
    src: "/portfolio/detail/fragrance-candle-detail-page.jpg"
  },
  {
    title: "数据线详情页",
    meta: "USB-A to USB-C / 长图详情页 / 3C 数码",
    src: "/portfolio/detail/usb-cable-detail-page.jpg"
  },
  {
    title: "45W 充电套装详情页",
    meta: "45W 充电套装 / 长图详情页 / 3C 数码",
    src: "/portfolio/detail/45w-charger-detail-page.jpg"
  },
  {
    title: "绿色茶小提盒详情页",
    meta: "茶礼盒 / 长图详情页 / 食品礼品",
    src: "/portfolio/detail/green-tea-suitcase-detail-page.jpg"
  }
];
const retouchPreviewItems = [
  {
    title: "金属方框太阳镜精修",
    meta: "镜框细节 / 质感优化 / 背景清理",
    before: "/portfolio/retouch/gold-square-sunglasses-before.png",
    after: "/portfolio/retouch/gold-square-sunglasses-after.png"
  },
  {
    title: "蓝色运动太阳镜精修",
    meta: "镜片质感 / 色彩校正 / 画面提亮",
    before: "/portfolio/retouch/blue-shield-sunglasses-before.png",
    after: "/portfolio/retouch/blue-shield-sunglasses-after.png"
  },
  {
    title: "护目镜场景精修",
    meta: "背景清理 / 产品质感 / 光影优化",
    before: "/portfolio/retouch/shield-stand-sunglasses-before.png",
    after: "/portfolio/retouch/shield-stand-sunglasses-after.png"
  },
  {
    title: "金属太阳镜白底精修",
    meta: "抠图清理 / 白底规范 / 细节优化",
    before: "/portfolio/retouch/gold-frame-sunglasses-before.png",
    after: "/portfolio/retouch/gold-frame-sunglasses-after.png"
  },
  {
    title: "USB 扩展坞产品精修",
    meta: "产品质感 / 明暗层次 / 边缘处理",
    before: "/portfolio/retouch/usb-hub-before.jpg",
    after: "/portfolio/retouch/usb-hub-after.jpg"
  }
];
const posterPreviewItems = [
  {
    title: "6合1 多功能扩展坞海报",
    meta: "3C 数码 / 产品海报 / 高速传输",
    src: "/portfolio/poster/usb-hub-expansion-poster.png"
  },
  {
    title: "型格方框时尚太阳镜海报",
    meta: "太阳镜 / 宣传海报 / 场景视觉",
    src: "/portfolio/poster/square-frame-sunglasses-poster.png"
  },
  {
    title: "PARTAGAS 年货节太阳镜海报",
    meta: "活动视觉 / 促销海报 / 太阳镜",
    src: "/portfolio/poster/partagas-yellow-sunglasses-poster.png"
  },
  {
    title: "PARTAGAS 328 活动海报",
    meta: "活动视觉 / 促销海报 / 328商人节",
    src: "/portfolio/poster/partagas-328-activity-poster.png"
  },
  {
    title: "年货节活动海报",
    meta: "活动视觉 / 促销海报 / PARTAGAS",
    src: "/portfolio/poster/poster-01.jpg"
  },
  {
    title: "数据线产品海报",
    meta: "3C 数码 / 产品宣传 / 视觉海报",
    src: "/portfolio/poster/poster-02.jpg"
  },
  {
    title: "活动宣传海报",
    meta: "电商活动 / 运营视觉 / 竖版海报",
    src: "/portfolio/poster/poster-03.jpg"
  },
  {
    title: "美式沙滩包海报",
    meta: "箱包 / 产品宣传 / 旅行场景",
    src: "/portfolio/poster/beach-duffel-bag-poster.png"
  },
  {
    title: "商务收纳包海报",
    meta: "箱包 / 产品宣传 / 商务场景",
    src: "/portfolio/poster/business-storage-bag-poster.png"
  }
];

type ShowcaseItem = (typeof showcaseItems)[number];

function ProfilePlaceholder() {
  const profileTags = ["主图", "详情页", "精修", "Banner", "AI"];
  const profileTools = ["Ps", "Ai", "Lr", "CDR", "剪映"];

  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[22px] border border-slate-950/10 bg-white/72 p-7 shadow-card backdrop-blur-[18px]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.035)_1px,transparent_1px)] bg-[size:38px_38px]" />
      <div className="absolute right-[-90px] top-[-80px] h-72 w-72 rounded-full bg-lime-200/30 blur-3xl" />
      <div className="relative z-10 flex min-h-[444px] flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          <span>PROFILE CARD</span>
          <span className="h-1.5 w-16 rounded-full bg-lime-400/50" />
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-slate-500">梁林</p>
          <h3 className="max-w-[420px] text-5xl font-semibold leading-tight text-slate-950 md:text-6xl">电商美工</h3>
          <p className="mt-5 max-w-[360px] text-sm leading-7 text-slate-600">主图、详情页、活动视觉、产品精修与 AI 出图辅助。</p>
        </div>

        <div className="grid gap-5">
          <div className="flex flex-wrap gap-2">
            {profileTags.map((item) => (
              <span key={item} className="rounded-full border border-slate-950/10 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-600">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 border-t border-slate-950/10 pt-5">
            {profileTools.map((item) => (
              <span key={item} className="grid h-10 min-w-10 place-items-center rounded-[10px] border border-slate-950/10 bg-white/80 px-3 text-[10px] font-semibold text-slate-800 shadow-[0_12px_26px_rgba(20,30,40,0.08)]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ShowcaseMockup({ item, index }: { item: ShowcaseItem; index: number }) {
  const baseLine = "absolute bg-slate-300/70";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.055)_1px,transparent_1px)] bg-[size:46px_46px]" />
      <div className="absolute left-8 top-8 h-3 w-40 rounded-full bg-slate-300/80" />
      <div className="absolute right-8 top-8 h-3 w-20 rounded-full bg-slate-300/45" />

      {index === 0 && (
        <>
          <div className="absolute left-[8%] top-[22%] h-[58%] w-[42%] border border-slate-950/10 bg-white/55" />
          <div className="absolute left-[17%] top-[31%] h-[34%] w-[24%] rounded-full border" style={{ borderColor: `${item.accent}80`, background: "rgba(255,255,255,0.48)" }} />
          <div className="absolute right-[10%] top-[24%] grid w-[34%] gap-4">
            <span className="h-12 bg-slate-300/55" />
            <span className="h-24 bg-slate-300/35" />
            <span className="h-12 bg-slate-300/45" />
          </div>
          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-4 gap-4">
            <span className="h-20 bg-white/70" />
            <span className="h-20 bg-white/45" />
            <span className="h-20 bg-white/60" />
            <span className="h-20 bg-white/45" />
          </div>
        </>
      )}

      {index === 1 && (
        <>
          <div className="absolute left-[8%] top-[18%] h-[68%] w-[30%] border border-slate-950/10 bg-white/55" />
          <div className="absolute right-[8%] top-[18%] grid h-[68%] w-[48%] grid-rows-4 gap-4">
            <span className="bg-white/70" />
            <span className="bg-white/50" />
            <span className="bg-white/62" />
            <span className="bg-white/45" />
          </div>
          <span className={`${baseLine} left-[13%] top-[26%] h-2 w-44 rounded-full`} />
          <span className={`${baseLine} left-[13%] top-[31%] h-2 w-32 rounded-full`} />
        </>
      )}

      {index === 2 && (
        <>
          <div className="absolute left-[8%] top-[20%] h-[60%] w-[38%] border border-slate-950/10 bg-slate-900/5" />
          <div className="absolute right-[8%] top-[20%] h-[60%] w-[38%] border border-slate-950/10 bg-white/55" />
          <div className="absolute left-1/2 top-[18%] h-[64%] w-px bg-slate-300/80" />
          <div className="absolute left-[18%] top-[34%] h-36 w-36 rounded-full border" style={{ borderColor: `${item.accent}90` }} />
          <div className="absolute right-[18%] top-[34%] h-36 w-36 rounded-full border border-slate-950/10 bg-white/50" />
          <span className={`${baseLine} bottom-[14%] left-[12%] h-3 w-40 rounded-full`} />
          <span className={`${baseLine} bottom-[14%] right-[12%] h-3 w-40 rounded-full`} />
        </>
      )}

      {index === 3 && (
        <>
          <div className="absolute left-[11%] top-[14%] h-[72%] w-[34%] rounded-[18px] border border-slate-950/[0.08] bg-white/58 shadow-[0_20px_60px_rgba(30,40,50,0.08)] backdrop-blur-[14px]" />
          <div className="absolute left-[15%] top-[22%] h-16 w-[26%] rounded-[14px] border border-slate-950/[0.06] bg-white/68 shadow-[0_16px_38px_rgba(30,40,50,0.07)]" />
          <div className="absolute left-[15%] top-[38%] h-40 w-[24%] rounded-[18px] border border-lime-300/50 bg-white/62 shadow-[0_20px_52px_rgba(30,40,50,0.08)] backdrop-blur-[14px]" />
          <div className="absolute right-[10%] top-[18%] h-[28%] w-[34%] rounded-[20px] border border-slate-950/[0.08] bg-white/64 shadow-[0_20px_60px_rgba(30,40,50,0.08)] backdrop-blur-[14px]" />
          <div className="absolute right-[10%] bottom-[16%] grid w-[34%] gap-3">
            <span className="h-10 rounded-full bg-white/70 shadow-[0_12px_28px_rgba(30,40,50,0.06)]" />
            <span className="h-10 rounded-full bg-slate-200/70" />
            <span className="h-10 rounded-full bg-lime-200/45" />
          </div>
        </>
      )}

      <div className="relative z-10 grid h-full place-items-center">
        <div className="flex items-center gap-3 rounded-full border border-slate-950/10 bg-white/78 px-5 py-3 text-sm font-semibold text-slate-600 backdrop-blur-md">
          <ImageIcon className="h-4 w-4" />
          待替换真实作品图
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activePreview, setActivePreview] = useState<PreviewKind | null>(null);
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ block: "start" });
      }, 80);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="dark-portfolio min-h-screen bg-[linear-gradient(180deg,#05070c_0%,#070a10_48%,#03050a_100%)] text-white">
      <nav className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between p-4 sm:p-5">
        <a href="#top" className="flex items-center">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-800/80">LIANG LIN</span>
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-slate-950/10 bg-white/75 px-2 py-2 shadow-[0_18px_45px_rgba(44,54,52,0.12)] backdrop-blur-md md:flex">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={navTargets[index]}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                index === 0 ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-white hover:text-slate-950"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <button className="grid h-10 w-10 place-items-center rounded-full border border-slate-950/10 bg-white/70 text-slate-900 shadow-[0_12px_28px_rgba(44,54,52,0.12)] backdrop-blur-md md:hidden" aria-label="菜单">
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <main id="top">
        <section className="hero-section relative min-h-[760px] overflow-hidden bg-[#f4f7f4] px-5 pb-20 pt-24 text-slate-950 md:h-[1000px] md:min-h-[1000px] md:pb-20 md:pt-28 lg:pb-20">
          <div className="hero-bg absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(207,255,117,0.34),transparent_27%),radial-gradient(circle_at_68%_34%,rgba(255,255,255,0.92),transparent_34%),linear-gradient(135deg,#f8fafc_0%,#eef3f0_44%,#dfe8e3_100%)]" />
          <div className="hero-soft-sheen absolute inset-0" />
          <div className="hero-poster-grain absolute inset-0 opacity-[0.28]" />
          <div className="hero-grid-motion-wrap" aria-hidden="true">
            <GridMotion />
          </div>
          <div className="hero-grid-readability absolute inset-y-0 left-0 z-[2] w-[64%]" />
          <div className="hero-ghost-word pointer-events-none absolute left-1/2 top-[43%] z-[3] -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black uppercase leading-none tracking-[0.02em] text-slate-900/[0.045]">
            VISUAL
          </div>
          <div className="hero-streak absolute left-[8%] top-[36%] h-px w-[64%] rotate-[-8deg] bg-slate-900/10" />
          <div className="hero-streak hero-streak-delay absolute right-[-10%] top-[58%] h-px w-[52%] rotate-[-8deg] bg-slate-900/10" />

          <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1700px] flex-col justify-start gap-6 md:h-full md:min-h-0 md:justify-center">
            <div className="hero-kicker hero-anim hero-fade flex flex-wrap items-center gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 sm:text-xs sm:tracking-[0.24em] md:text-sm" style={{ animationDelay: "0.08s" }}>
              <span className="text-lime-700">PORTFOLIO</span>
              <span className="mx-2 text-slate-400 sm:mx-3">·</span>
              <span>E-COMMERCE VISUAL</span>
              <span className="mx-2 text-slate-400 sm:mx-3">·</span>
              <span>2026</span>
            </div>

            <div className="max-w-[820px] pb-10 pt-8 md:pb-12 md:pt-10 lg:w-[58%] lg:pb-12 lg:pt-12 xl:w-[54%]">
              <h1 className="max-w-[780px] leading-[1.16] tracking-[-0.01em] sm:leading-[1.14] sm:tracking-[-0.015em]">
                <span className="hero-anim hero-reveal block text-[clamp(42px,8.6vw,80px)] font-black text-slate-950" style={{ animationDelay: "0.14s" }}>
                  电商美工
                </span>
                <span className="hero-anim hero-reveal mt-5 block text-[clamp(42px,8.6vw,80px)] font-black text-slate-950 md:mt-8" style={{ animationDelay: "0.26s" }}>
                  设计作品集
                </span>
              </h1>

              <div className="mt-14 max-w-[760px] md:mt-[72px]">
                <div>
                  <p className="hero-anim hero-fade text-[18px] font-semibold leading-relaxed text-slate-800 md:text-[21px]" style={{ animationDelay: "0.44s" }}>
                    主图/详情页 / 产品精修
                  </p>
                  <p className="hero-anim hero-fade mt-9 max-w-[680px] text-[16px] leading-[2.05] text-slate-600 md:text-[17px]" style={{ animationDelay: "0.56s" }}>
                    熟悉电商日常出图流程，可完成商品主图、详情页、活动 Banner、
                    <br className="hidden md:block" />
                    产品修图、场景合成及素材制作。
                  </p>

                  <div className="hero-anim hero-fade mt-14 flex flex-wrap gap-5" style={{ animationDelay: "0.68s" }}>
                    <a href="#showcase" className="inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_38px_rgba(154,205,50,0.22)] transition-transform hover:scale-[1.02]">
                      查看作品
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-950/10 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 shadow-[0_16px_34px_rgba(49,59,57,0.08)] backdrop-blur-md transition-colors hover:bg-white">
                      联系我
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="hero-grid-motion-mobile-wrap hero-anim hero-fade" style={{ animationDelay: "0.76s" }} aria-hidden="true">
                    <GridMotion />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-[linear-gradient(180deg,#f5f7f2_0%,#eef2ec_100%)] px-5 pb-24 pt-14 text-slate-950 md:pt-16">
          <div className="mx-auto max-w-[1700px]">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-sm font-semibold text-slate-500">ABOUT</p>
                <h2 className="text-4xl font-semibold text-slate-950 md:text-6xl">关于我</h2>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-950/[0.08] bg-white/75 p-7 shadow-card backdrop-blur-[18px] md:p-10">
              <div className="grid gap-10 xl:grid-cols-[1fr_0.82fr] xl:items-start">
                <div>
                  <h3 className="text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">梁林｜电商美工</h3>
                  <div className="mt-6 max-w-[980px] space-y-3 text-sm leading-7 text-slate-600">
                    <p>熟练使用 Photoshop、Illustrator、Lightroom、CorelDRAW、剪映等工具，可完成产品主图、详情页、活动 Banner、产品修图、产品合成、短视频封面及素材制作。</p>
                    <p>能配合运营完成商品上新、活动推广、页面更新等日常设计工作，按需求完成出图和修改。</p>
                    <p>同时熟悉 AI 生图、AI 视频等工具，可用于产品场景图、创意参考、视频分镜和视觉素材辅助，提高日常出图效率。</p>
                  </div>
                </div>

                <BorderGlow
                  className="h-full"
                  backgroundColor="#120F17"
                  borderRadius={28}
                  edgeSensitivity={30}
                  glowColor="40 80 80"
                  glowRadius={40}
                  glowIntensity={1}
                  coneSpread={25}
                  colors={["#c084fc", "#f472b6", "#38bdf8"]}
                  fillOpacity={0.5}
                >
                  <div className="grid h-full gap-5 p-5 md:p-6">
                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1">
                      {aboutFields.map((item) => (
                        <div key={item.label} className="border-t border-slate-950/10 pt-4 first:border-t-0 first:pt-0">
                          <p className="mb-2 text-xs font-semibold text-slate-500">{item.label}</p>
                          <p className="text-sm font-semibold text-slate-900">{item.value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-slate-950/10 pt-4">
                      <p className="mb-3 text-xs font-semibold text-slate-500">软件工具</p>
                      <div className="flex flex-wrap items-center gap-3">
                        {softwareBadges.map((item) => (
                          <span key={item} className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-slate-950/10 bg-white/80 text-[10px] font-semibold text-slate-800 shadow-[0_12px_26px_rgba(20,30,40,0.08)] ring-1 ring-white/70">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </BorderGlow>
              </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {aboutStats.map((item) => (
                    <BorderGlow
                      key={item.value}
                      className="h-full"
                      backgroundColor="#120F17"
                      borderRadius={28}
                      edgeSensitivity={30}
                      glowColor="40 80 80"
                      glowRadius={40}
                      glowIntensity={1}
                      coneSpread={25}
                      colors={["#c084fc", "#f472b6", "#38bdf8"]}
                      fillOpacity={0.5}
                    >
                      <div className="flex min-h-[148px] flex-col p-6">
                        <h4 className="whitespace-nowrap text-[26px] font-semibold leading-tight text-slate-950 md:text-[28px] xl:text-[30px]">{item.value}</h4>
                        <p className="mt-5 text-sm leading-relaxed text-slate-600">{item.label}</p>
                      </div>
                    </BorderGlow>
                  ))}
                </div>

            </div>

            <div className="mt-10 rounded-[28px] border border-slate-950/[0.08] bg-white/70 p-7 shadow-card backdrop-blur-[18px] md:p-9">
              <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="mb-3 text-sm font-semibold text-slate-500">过往经历</p>
                  <h3 className="text-3xl font-semibold text-slate-950 md:text-4xl">工作经历</h3>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {experienceItems.map((item) => (
                  <BorderGlow
                    key={item.company}
                    className="h-full"
                    backgroundColor="#120F17"
                    borderRadius={28}
                    edgeSensitivity={30}
                    glowColor="40 80 80"
                    glowRadius={40}
                    glowIntensity={1}
                    coneSpread={25}
                    colors={["#c084fc", "#f472b6", "#38bdf8"]}
                    fillOpacity={0.5}
                  >
                    <article className="flex h-full flex-col p-6">
                      <p className="mb-4 text-sm font-semibold text-slate-500">{item.period}</p>
                      <h4 className="mb-3 text-xl font-semibold text-slate-950">{item.company}</h4>
                      <p className="mb-4 inline-flex w-fit rounded-full border border-lime-500/20 bg-lime-300/20 px-3 py-1.5 text-xs font-semibold text-slate-700">
                        {item.role}
                      </p>
                      <div className="mb-5 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-slate-950/10 bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">{item.copy}</p>
                    </article>
                  </BorderGlow>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="showcase" className="scroll-mt-24 bg-[linear-gradient(180deg,#eef2ec_0%,#f8faf6_100%)] text-slate-950">
          <div className="mx-auto max-w-[1700px] px-5 pb-12 pt-16">
            <div className="grid gap-5 md:grid-cols-[0.72fr_1fr] md:items-end">
              <div>
                <p className="mb-3 text-base font-bold uppercase tracking-[0.08em] text-acid">
                  PORTFOLIO
                </p>
                <h2 className="text-5xl font-bold leading-tight text-slate-950 md:text-6xl">
                  作品展示
                </h2>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col gap-14 px-5 pb-10 md:gap-20 md:pb-12">
            {showcaseItems.map((item, index) => (
              <article key={item.title} className="relative">
                <div className="relative mx-auto grid min-h-0 w-full max-w-[1700px] items-center overflow-hidden rounded-[32px] border border-slate-950/[0.08] bg-white/72 shadow-card backdrop-blur-[18px]">
                  <div
                    className="absolute inset-0 scale-110 opacity-[0.14] blur-2xl"
                    style={{
                      background: item.src ? `url(${item.src}) center / cover` : item.bg
                    }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.62)_48%,rgba(238,242,236,0.9)_100%)]" />
                  <div className="showcase-light absolute inset-y-0 left-[-32%] w-[34%] rotate-12 bg-lime-200/30 blur-2xl" />

                  <div className="relative z-10 grid min-h-0 min-w-0 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="flex min-w-0 items-center p-4 md:p-8 lg:p-12">
                      <div className="relative w-full overflow-hidden rounded-[24px] border border-slate-950/[0.08] bg-white/80 shadow-card backdrop-blur-xl">
                        <div
                          className="relative grid aspect-[16/10] min-h-[320px] place-items-center overflow-hidden md:min-h-[360px]"
                          style={{
                            background: item.src ? "#f8fbff" : item.bg
                          }}
                        >
                          {item.src ? (
                            <img
                              src={item.src}
                              alt={`${item.title}作品图`}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <ShowcaseMockup item={item} index={index} />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex min-w-0 items-center border-t border-slate-950/[0.08] bg-white/55 p-8 backdrop-blur-md lg:border-l lg:border-t-0 lg:px-14 lg:py-16 xl:px-16">
                      <div className="w-full max-w-[calc(100vw-6.5rem)] min-w-0 sm:max-w-[460px] lg:max-w-[560px] lg:translate-x-7 xl:translate-x-9">
                        <p
                          className="text-[clamp(72px,8vw,120px)] font-extrabold leading-none tracking-[-0.06em] text-slate-400/25"
                          style={{ WebkitTextStroke: "1px rgba(148, 163, 184, 0.45)" }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-9 text-[12px] font-semibold uppercase tracking-[0.35em] text-[#8b93a3] md:mt-10">
                          {item.type}
                        </p>
                        <h3 className="mt-7 max-w-full text-[34px] font-semibold leading-[1.1] text-slate-950 md:text-[44px] lg:max-w-[520px] lg:text-[46px]">{item.title}</h3>
                        <p className="mt-7 max-w-full text-[15px] leading-8 text-slate-600 lg:max-w-[460px]">{item.copy}</p>
                        <button
                          type="button"
                          onClick={() => setActivePreview(showcasePreviewKinds[index])}
                          className="mt-12 inline-flex items-center gap-2 rounded-full border border-slate-950/10 bg-white/78 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-[0_16px_34px_rgba(20,30,40,0.08)] transition-colors hover:bg-white"
                        >
                          查看该类作品
                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer id="contact" className="scroll-mt-24 bg-[linear-gradient(180deg,#f8faf6_0%,#eef2ec_100%)] px-5 py-20 text-slate-950">
          <div className="mx-auto max-w-[1700px]">
            <div className="grid gap-8 rounded-[28px] border border-slate-950/[0.08] bg-white/74 p-8 shadow-card backdrop-blur-[18px] md:p-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold text-slate-500">联系我</p>
                <h2 className="max-w-[720px] text-4xl font-semibold leading-tight md:text-5xl">
                  感谢浏览我的作品集
                </h2>
              </div>

              <BorderGlow
                className="h-full"
                backgroundColor="#120F17"
                borderRadius={28}
                edgeSensitivity={30}
                glowColor="40 80 80"
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                colors={["#c084fc", "#f472b6", "#38bdf8"]}
                fillOpacity={0.5}
              >
                <div className="p-7 md:p-8">
                  <p className="mb-3 text-sm font-semibold text-slate-500">手机</p>
                  <p className="text-3xl font-semibold tracking-[0.04em] text-slate-950 md:text-4xl">19172695780</p>
                </div>
              </BorderGlow>
            </div>
            <div className="mt-8 border-t border-slate-950/10 pt-6 text-sm text-slate-500">© 梁林｜电商视觉设计作品集</div>
          </div>
        </footer>

        {activePreview && (
          <div
            className="fixed inset-0 z-[160] flex items-center justify-center bg-slate-950/35 px-5 py-8 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={`${previewContent[activePreview].label}作品预览`}
            onClick={() => setActivePreview(null)}
          >
            <div
              className="max-h-[88vh] w-full max-w-[1280px] overflow-y-auto rounded-[28px] border border-slate-950/[0.08] bg-[#f8faf6] p-6 shadow-card md:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-7 flex flex-col justify-between gap-4 border-b border-slate-950/10 pb-6 md:flex-row md:items-end">
                <div>
                  <p className="mb-3 text-sm font-semibold text-acid">{previewContent[activePreview].label}</p>
                  <h3 className="text-3xl font-semibold text-slate-950 md:text-5xl">{previewContent[activePreview].title}</h3>
                  <p className="mt-4 max-w-[680px] text-sm leading-7 text-slate-600">
                    {previewContent[activePreview].copy}
                  </p>
                  {activePreview === "retouch" && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {retouchPreviewItems[0].meta.split(" / ").map((tag) => (
                        <span key={tag} className="rounded-full border border-slate-950/10 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setActivePreview(null)}
                  className="self-start rounded-full border border-slate-950/10 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-white md:self-auto"
                >
                  关闭
                </button>
              </div>

              {activePreview === "main" && (
                <div className="grid gap-4 md:grid-cols-3">
                  {mainImagePreviewItems.map((item, index) => (
                    <article key={item.src} className="overflow-hidden rounded-[18px] border border-slate-950/[0.08] bg-white/80">
                      <div className="relative aspect-square overflow-hidden bg-white">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="block h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex items-center justify-between px-4 py-4">
                        <span>
                          <span className="block text-sm font-semibold text-slate-900">{item.title}</span>
                          <span className="mt-1 block text-xs text-slate-500">{item.meta}</span>
                        </span>
                        <span className="text-xs font-semibold text-slate-400">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {activePreview === "detail" && (
                <div className="grid gap-5 lg:h-[68vh] lg:min-h-[620px] lg:grid-cols-[0.34fr_0.66fr]">
                  <div className="grid max-h-[68vh] gap-3 overflow-y-auto pr-1 lg:h-full lg:max-h-none">
                    {detailPreviewItems.map((item, index) => (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => setActiveDetailIndex(index)}
                        className={`rounded-2xl border px-5 py-4 text-left transition-colors ${
                          index === activeDetailIndex ? "border-acid/50 bg-acid/10" : "border-slate-950/10 bg-white/70 hover:bg-white"
                        }`}
                      >
                        <span className="block text-sm font-semibold text-slate-900">{item.title}</span>
                        <span className="mt-2 block text-xs text-slate-500">{item.meta}</span>
                      </button>
                    ))}
                  </div>

                  <div className="max-h-[68vh] overflow-y-auto rounded-[22px] border border-slate-950/[0.08] bg-white/70 p-4 lg:h-full lg:max-h-none">
                    <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-[18px] border border-slate-950/[0.08] bg-white">
                      <img
                        src={detailPreviewItems[activeDetailIndex].src}
                        alt={detailPreviewItems[activeDetailIndex].title}
                        className="block h-auto w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activePreview === "retouch" && (
                <div className="grid gap-4">
                  {retouchPreviewItems.map((item) => (
                    <article key={item.after} className="overflow-hidden rounded-[18px] border border-slate-950/[0.08] bg-white/80">
                      <div className="grid gap-px bg-slate-950/10 md:grid-cols-2">
                        <div className="relative aspect-[4/3] overflow-hidden bg-white">
                          <span className="absolute left-4 top-4 rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white/90">精修前</span>
                          <img
                            src={item.before}
                            alt={`${item.title} 精修前`}
                            className="block h-full w-full object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden bg-white">
                          <span className="absolute left-4 top-4 rounded-full bg-acid px-3 py-1.5 text-xs font-semibold text-black">精修后</span>
                          <img
                            src={item.after}
                            alt={`${item.title} 精修后`}
                            className="block h-full w-full object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {activePreview === "poster" && (
                <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                  {posterPreviewItems.map((item) => (
                    <article key={item.src} className="mb-4 break-inside-avoid overflow-hidden rounded-[18px] border border-slate-950/[0.08] bg-white/80">
                      <div className="relative overflow-hidden bg-white">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="block h-auto w-full"
                          loading="lazy"
                        />
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
