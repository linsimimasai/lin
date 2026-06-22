import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Image as ImageIcon,
  Layers3,
  Menu,
  Phone,
  Sparkles,
  Target,
  Wand2
} from "lucide-react";

const navItems = ["首页", "作品", "能力", "关于"];
const navTargets = ["#top", "#showcase", "#strengths", "#about"];

const showcaseItems = [
  {
    title: "商品主图设计",
    type: "MAIN IMAGE",
    copy: "平台首图、卖点图、点击转化图，重点突出商品主体和核心卖点。",
    detail: "后续替换为真实主图作品，可放太阳镜、宠物用品或日用品案例。",
    src: "",
    accent: "#7dd3fc",
    bg: "linear-gradient(135deg, rgba(14,116,144,0.72), rgba(12,18,28,0.96))"
  },
  {
    title: "详情页设计",
    type: "DETAIL PAGE",
    copy: "把卖点、场景、材质、参数和服务信息拆成清楚模块，适合用户快速扫读。",
    detail: "适合放完整长图、模块拆解图、局部详情和前后对比。",
    src: "",
    accent: "#a3e635",
    bg: "linear-gradient(135deg, rgba(63,98,18,0.68), rgba(13,18,25,0.96))"
  },
  {
    title: "产品精修",
    type: "RETOUCH",
    copy: "处理商品质感、边缘、光影和画面干净度，让产品图更适合电商展示。",
    detail: "后续可放精修前后对比、局部质感处理和合成图。",
    src: "",
    accent: "#fb923c",
    bg: "linear-gradient(135deg, rgba(154,52,18,0.66), rgba(15,18,26,0.96))"
  },
  {
    title: "宣传海报",
    type: "POSTER",
    copy: "用于新品推广、活动宣传和平台展示，强调主题、层级和视觉记忆点。",
    detail: "后续可替换为活动海报、商品海报、平台展示图。",
    src: "",
    accent: "#f97316",
    bg: "linear-gradient(135deg, rgba(190,88,27,0.66), rgba(24,22,25,0.96))"
  }
];

const strengths = [
  {
    icon: Wand2,
    label: "视觉执行",
    title: "主图与精修能力",
    copy: "关注商品主体、质感表现、边缘处理、光影干净度和卖点呈现，适合主图、精修图和卖点图制作。"
  },
  {
    icon: Target,
    label: "页面拆解",
    title: "详情页信息层级清楚",
    copy: "能把商品卖点、材质细节、使用场景、参数说明和服务信息拆成模块，方便用户快速扫读。"
  },
  {
    icon: Layers3,
    label: "运营配合",
    title: "覆盖日常电商设计需求",
    copy: "可完成首页、活动页、促销版头、宣传海报等运营视觉内容，适合电商店铺日常设计工作。"
  },
  {
    icon: Sparkles,
    label: "类目适配",
    title: "不局限单一商品类目",
    copy: "太阳镜作为过往项目案例之一，后续可补充宠物、日用品、服饰配件等不同方向的商品视觉。"
  }
];

const workflowSteps = ["需求理解", "卖点拆解", "视觉设计", "精修调整", "交付上线"];
const tools = ["Photoshop", "Illustrator", "剪映", "AI 生图 / AI 辅助视觉"];

const aboutFields = [
  { label: "求职岗位", value: "电商美工" },
  { label: "AI工作流", value: "Gemini / Codex / LiblibAI / ComfyUI / GPT" }
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
    company: "广州帕特嘉斯眼镜有限公司",
    role: "电商美工 / 网店视觉设计",
    copy: "负责眼镜类产品的电商视觉设计与店铺页面装修，围绕平台运营需求完成首页、详情页、活动页、宣传海报及横幅 Banner 设计。参与太阳镜白底图与场景图拍摄，并完成后期调色、产品精修、版式优化与商品图视觉提升，强化产品质感和页面转化表现。",
    tags: ["店铺装修", "详情页设计", "产品精修", "场景拍摄"]
  },
  {
    period: "2021.11 - 2022.07",
    company: "龙胜电子公司",
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

const contactItems = [
  { label: "手机", value: "19172695780" },
  { label: "微信", value: "待填写" },
  { label: "简历", value: "待上传" }
];

const showcasePreviewKinds = ["main", "detail", "retouch", "poster"] as const;
type PreviewKind = (typeof showcasePreviewKinds)[number];

const previewContent = {
  main: {
    label: "商品主图设计",
    title: "主图 / 卖点图预览",
    copy: "这里先放同类作品预览结构，后续直接替换为真实主图、卖点图和点击转化图。"
  },
  detail: {
    label: "详情页设计",
    title: "长图详情页预览",
    copy: "详情页适合用竖向滚动查看。左侧放案例入口，右侧放完整长图和模块拆解。"
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

const mainImagePreviewItems = ["主图 01", "主图 02", "主图 03", "卖点图 01", "卖点图 02", "转化图 01"];
const detailPreviewItems = ["详情页案例 01", "详情页案例 02", "详情页案例 03"];
const retouchPreviewItems = ["精修对比 01", "精修对比 02", "精修对比 03", "精修对比 04"];
const posterPreviewItems = ["海报 01", "海报 02", "海报 03", "海报 04", "海报 05", "海报 06"];

type ShowcaseItem = (typeof showcaseItems)[number];

function ProfilePlaceholder() {
  const profileTags = ["主图", "详情页", "精修", "Banner", "AI"];
  const profileTools = ["Ps", "Ai", "Lr", "CDR", "剪映"];

  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.018))] p-7">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:38px_38px]" />
      <div className="absolute right-[-90px] top-[-80px] h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />
      <div className="relative z-10 flex min-h-[444px] flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-white/42">
          <span>PROFILE CARD</span>
          <span className="h-1.5 w-16 rounded-full bg-white/26" />
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white/48">梁林</p>
          <h3 className="max-w-[420px] text-5xl font-semibold leading-tight text-white md:text-6xl">电商美工</h3>
          <p className="mt-5 max-w-[360px] text-sm leading-7 text-white/52">主图、详情页、活动视觉、产品精修与 AI 出图辅助。</p>
        </div>

        <div className="grid gap-5">
          <div className="flex flex-wrap gap-2">
            {profileTags.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-black/22 px-3 py-1.5 text-xs font-semibold text-white/62">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 border-t border-white/10 pt-5">
            {profileTools.map((item) => (
              <span key={item} className="grid h-10 min-w-10 place-items-center rounded-[10px] border border-white/16 bg-[#090a0d] px-3 text-[10px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
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
  const baseLine = "absolute bg-white/16";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.075)_1px,transparent_1px)] bg-[size:46px_46px]" />
      <div className="absolute left-8 top-8 h-3 w-40 rounded-full bg-white/70" />
      <div className="absolute right-8 top-8 h-3 w-20 rounded-full bg-white/28" />

      {index === 0 && (
        <>
          <div className="absolute left-[8%] top-[22%] h-[58%] w-[42%] border border-white/12 bg-black/16" />
          <div className="absolute left-[17%] top-[31%] h-[34%] w-[24%] rounded-full border" style={{ borderColor: `${item.accent}80`, background: "rgba(0,0,0,0.16)" }} />
          <div className="absolute right-[10%] top-[24%] grid w-[34%] gap-4">
            <span className="h-12 bg-white/18" />
            <span className="h-24 bg-white/10" />
            <span className="h-12 bg-white/14" />
          </div>
          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-4 gap-4">
            <span className="h-20 bg-white/14" />
            <span className="h-20 bg-white/08" />
            <span className="h-20 bg-white/12" />
            <span className="h-20 bg-white/08" />
          </div>
        </>
      )}

      {index === 1 && (
        <>
          <div className="absolute left-[8%] top-[18%] h-[68%] w-[30%] border border-white/12 bg-white/[0.055]" />
          <div className="absolute right-[8%] top-[18%] grid h-[68%] w-[48%] grid-rows-4 gap-4">
            <span className="bg-white/16" />
            <span className="bg-white/10" />
            <span className="bg-white/14" />
            <span className="bg-white/08" />
          </div>
          <span className={`${baseLine} left-[13%] top-[26%] h-2 w-44 rounded-full`} />
          <span className={`${baseLine} left-[13%] top-[31%] h-2 w-32 rounded-full`} />
        </>
      )}

      {index === 2 && (
        <>
          <div className="absolute left-[8%] top-[20%] h-[60%] w-[38%] border border-white/12 bg-black/22" />
          <div className="absolute right-[8%] top-[20%] h-[60%] w-[38%] border border-white/12 bg-white/[0.065]" />
          <div className="absolute left-1/2 top-[18%] h-[64%] w-px bg-white/22" />
          <div className="absolute left-[18%] top-[34%] h-36 w-36 rounded-full border" style={{ borderColor: `${item.accent}90` }} />
          <div className="absolute right-[18%] top-[34%] h-36 w-36 rounded-full border border-white/25 bg-white/[0.04]" />
          <span className={`${baseLine} bottom-[14%] left-[12%] h-3 w-40 rounded-full`} />
          <span className={`${baseLine} bottom-[14%] right-[12%] h-3 w-40 rounded-full`} />
        </>
      )}

      {index === 3 && (
        <>
          <div className="absolute left-[11%] top-[14%] h-[72%] w-[34%] border border-white/12 bg-black/18" />
          <div className="absolute left-[15%] top-[22%] h-16 w-[26%] bg-white/18" />
          <div className="absolute left-[15%] top-[38%] h-40 w-[24%] border" style={{ borderColor: `${item.accent}70`, background: "rgba(255,255,255,0.05)" }} />
          <div className="absolute right-[10%] top-[18%] h-[28%] w-[34%] bg-white/12" />
          <div className="absolute right-[10%] bottom-[16%] grid w-[34%] gap-3">
            <span className="h-10 bg-white/18" />
            <span className="h-10 bg-white/10" />
            <span className="h-10 bg-white/14" />
          </div>
        </>
      )}

      <div className="relative z-10 grid h-full place-items-center">
        <div className="flex items-center gap-3 rounded-full border border-white/16 bg-black/28 px-5 py-3 text-sm font-semibold text-white/72 backdrop-blur-md">
          <ImageIcon className="h-4 w-4" />
          待替换真实作品图
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activePreview, setActivePreview] = useState<PreviewKind | null>(null);

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
    <div className="min-h-screen bg-ink text-white">
      <nav className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between p-4 sm:p-5">
        <a href="#top" className="flex items-center">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white/82">LIANG LIN</span>
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/16 bg-black/35 px-2 py-2 backdrop-blur-md md:flex">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={navTargets[index]}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                index === 0 ? "bg-white text-gray-950" : "text-white/70 hover:bg-white/12 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <button className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 md:hidden" aria-label="菜单">
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <main id="top">
        <section className="relative min-h-screen overflow-hidden bg-[#05070e] px-5 pb-10 pt-28 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,rgba(200,255,36,0.1),transparent_25%),radial-gradient(circle_at_78%_40%,rgba(255,255,255,0.075),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0)_35%,rgba(200,255,36,0.035)_100%)]" />
          <div className="hero-poster-grain absolute inset-0 opacity-[0.45]" />
          <div className="hero-ghost-word pointer-events-none absolute left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black uppercase leading-none tracking-[0.02em] text-white/[0.025]">
            VISUAL
          </div>
          <div className="hero-streak absolute left-[8%] top-[36%] h-px w-[64%] rotate-[-8deg] bg-white/12" />
          <div className="hero-streak hero-streak-delay absolute right-[-10%] top-[58%] h-px w-[52%] rotate-[-8deg] bg-white/10" />

          <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-9.5rem)] max-w-[1700px] flex-col justify-between">
            <div className="hero-anim hero-fade text-xs font-semibold uppercase tracking-[0.24em] text-white/48 md:text-sm" style={{ animationDelay: "0.08s" }}>
              <span className="text-acid/62">PORTFOLIO</span>
              <span className="mx-3 text-white/24">·</span>
              <span>E-COMMERCE VISUAL</span>
              <span className="mx-3 text-white/24">·</span>
              <span>2026</span>
            </div>

            <div className="pb-14 pt-16 md:pb-16 md:pt-20 lg:pb-20 lg:pt-24">
              <h1 className="max-w-[760px] leading-[0.98]">
                <span className="hero-anim hero-reveal block text-[clamp(64px,6.5vw,108px)] font-black text-white" style={{ animationDelay: "0.14s" }}>
                  电商美工
                </span>
                <span className="hero-anim hero-reveal mt-2 block text-[clamp(64px,6.5vw,108px)] font-black text-white" style={{ animationDelay: "0.26s" }}>
                  设计作品集
                </span>
              </h1>

              <div className="mt-10 grid gap-10 lg:grid-cols-[0.66fr_0.44fr] lg:items-end">
                <div>
                  <p className="hero-anim hero-fade text-lg font-medium text-white/80 md:text-[22px]" style={{ animationDelay: "0.44s" }}>
                    主图详情页 / 产品精修 / AI工作流
                  </p>
                  <p className="hero-anim hero-fade mt-5 max-w-[600px] text-[15px] leading-[1.7] text-white/60 md:text-base" style={{ animationDelay: "0.56s" }}>
                    熟悉电商日常出图流程，可完成商品主图、详情页、活动 Banner、产品修图、简单合成、短视频封面及素材制作。
                  </p>

                  <div className="hero-anim hero-fade mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.68s" }}>
                    <a href="#showcase" className="inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]">
                      查看作品
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/[0.045] px-6 py-3 text-sm font-semibold text-white/82 backdrop-blur-md transition-colors hover:bg-white/12">
                      联系我
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className="hero-anim hero-fade flex flex-col justify-between gap-5 border-t border-white/[0.06] pt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30 md:flex-row" style={{ animationDelay: "0.84s" }}>
              <div>
                <p>MAIN IMAGE / DETAIL PAGE / RETOUCH / BANNER</p>
              </div>
              <p className="text-white/24">LIANG LIN PORTFOLIO</p>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-[#05070e] px-5 py-20 text-white">
          <div className="mx-auto max-w-[1700px]">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-sm font-semibold text-white/46">ABOUT</p>
                <h2 className="text-4xl font-semibold text-white md:text-6xl">关于我</h2>
              </div>
              <p className="max-w-[620px] text-sm leading-relaxed text-white/58">
                用于快速说明个人方向、工具能力和可完成的电商视觉内容，下方补充最近工作经历。
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.045] p-7 shadow-card md:p-10">
              <div className="grid gap-10 xl:grid-cols-[1fr_0.82fr] xl:items-start">
                <div>
                  <h3 className="text-4xl font-semibold leading-tight text-white md:text-5xl">梁林｜电商美工</h3>
                  <div className="mt-6 max-w-[980px] space-y-3 text-sm leading-7 text-white/62">
                    <p>熟练使用 Photoshop、Illustrator、Lightroom、CorelDRAW、剪映等工具，可完成产品主图、详情页、活动 Banner、产品修图、产品合成、短视频封面及素材制作。</p>
                    <p>能配合运营完成商品上新、活动推广、页面更新等日常设计工作，按需求完成出图和修改。</p>
                    <p>同时熟悉 AI 生图、AI 视频等工具，可用于产品场景图、创意参考、视频分镜和视觉素材辅助，提高日常出图效率。</p>
                  </div>
                </div>

                <div className="grid gap-5 rounded-[24px] border border-white/10 bg-black/22 p-5 md:p-6">
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1">
                    {aboutFields.map((item) => (
                      <div key={item.label} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                        <p className="mb-2 text-xs font-semibold text-white/44">{item.label}</p>
                        <p className="text-sm font-semibold text-white/78">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <p className="mb-3 text-xs font-semibold text-white/44">软件工具</p>
                    <div className="flex flex-wrap items-center gap-3">
                      {softwareBadges.map((item) => (
                        <span key={item} className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/18 bg-[#090a0d] text-[10px] font-semibold text-white shadow-[0_10px_22px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-10px_22px_rgba(255,255,255,0.035)] ring-1 ring-black/70">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {aboutStats.map((item) => (
                    <div key={item.value} className="flex min-h-[148px] flex-col rounded-[24px] border border-white/10 bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <h4 className="whitespace-nowrap text-[26px] font-semibold leading-tight text-white md:text-[28px] xl:text-[30px]">{item.value}</h4>
                      <p className="mt-5 text-sm leading-relaxed text-white/58">{item.label}</p>
                    </div>
                  ))}
                </div>

            </div>

            <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.035] p-7 shadow-card md:p-9">
              <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="mb-3 text-sm font-semibold text-white/46">过往经历</p>
                  <h3 className="text-3xl font-semibold text-white md:text-4xl">工作经历</h3>
                </div>
                <p className="max-w-[520px] text-sm leading-relaxed text-white/52">
                  以下为简历中最近三段工作经历，已按电商美工作品集场景整理，方便快速了解岗位匹配度。
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {experienceItems.map((item) => (
                  <article key={item.company} className="rounded-[22px] border border-white/10 bg-black/22 p-6">
                    <p className="mb-4 text-sm font-semibold text-white/46">{item.period}</p>
                    <h4 className="mb-3 text-xl font-semibold text-white">{item.company}</h4>
                    <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/58">
                      {item.role}
                    </p>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[11px] font-semibold text-white/44">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-white/52">{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="showcase" className="scroll-mt-24 bg-[#05070e] text-white">
          <div className="mx-auto max-w-[1700px] px-5 pb-12 pt-16">
            <div className="grid gap-5 md:grid-cols-[0.72fr_1fr] md:items-end">
              <div>
                <p className="mb-3 text-base font-bold uppercase tracking-[0.08em] text-acid">
                  PORTFOLIO
                </p>
                <h2 className="text-5xl font-bold leading-tight text-white md:text-6xl">
                  作品展示
                </h2>
              </div>
              <p className="max-w-[680px] text-sm leading-7 text-white/56 md:justify-self-end">
                先用高级占位图建立展示节奏，后续可替换为主图、详情页、产品精修和宣传海报等真实作品。
              </p>
            </div>
          </div>

          <div className="relative flex flex-col gap-14 px-5 pb-10 md:gap-20 md:pb-12">
            {showcaseItems.map((item, index) => (
              <article key={item.title} className="relative">
                <div className="relative mx-auto grid min-h-0 w-full max-w-[1700px] items-center overflow-hidden border border-white/10 bg-black shadow-card">
                  <div
                    className="absolute inset-0 scale-110 opacity-42 blur-2xl"
                    style={{
                      background: item.src ? `url(${item.src}) center / cover` : item.bg
                    }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(5,7,14,0.42)_48%,rgba(0,0,0,0.86)_100%)]" />
                  <div className="showcase-light absolute inset-y-0 left-[-32%] w-[34%] rotate-12 bg-white/10 blur-2xl" />

                  <div className="relative z-10 grid min-h-0 lg:grid-cols-[1.12fr_0.88fr]">
                    <div className="flex items-center p-4 md:p-8 lg:p-12">
                      <div className="relative w-full overflow-hidden border border-white/12 bg-white/[0.06] shadow-card backdrop-blur-xl">
                        <div
                          className="relative grid aspect-[16/10] min-h-[320px] place-items-center overflow-hidden md:min-h-[360px]"
                          style={{
                            background: item.src ? `url(${item.src}) center / cover` : item.bg
                          }}
                        >
                          {!item.src && <ShowcaseMockup item={item} index={index} />}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center border-t border-white/10 bg-black/24 p-8 backdrop-blur-md lg:border-l lg:border-t-0 lg:p-12">
                      <div className="max-w-[560px]">
                        <p className="mb-6 text-6xl font-black leading-none md:text-7xl" style={{ color: item.accent }}>
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/42">{item.type}</p>
                        <h3 className="text-3xl font-semibold leading-tight text-white md:text-5xl">{item.title}</h3>
                        <p className="mt-6 text-sm leading-7 text-white/62">{item.copy}</p>
                        <p className="mt-4 text-sm leading-7 text-white/42">{item.detail}</p>
                        <button
                          type="button"
                          onClick={() => setActivePreview(showcasePreviewKinds[index])}
                          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.07] px-5 py-3 text-sm font-semibold text-white/78 transition-colors hover:bg-white/12"
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

        <section id="strengths" className="scroll-mt-24 bg-[#080b15] px-5 pb-20 pt-12">
          <div className="mx-auto max-w-[1700px]">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-4 text-sm font-semibold text-white/46">能力结构</p>
                <h2 className="max-w-[760px] text-4xl font-semibold leading-tight text-white md:text-6xl">岗位能力优势</h2>
              </div>
              <p className="max-w-[660px] text-sm leading-relaxed text-white/58 lg:justify-self-end">
                这一块只保留岗位判断需要的信息：能不能完成日常电商视觉工作，能不能理解商品卖点，并把信息做成清楚可用的页面。
              </p>
            </div>

            <div className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
              <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-8 shadow-card backdrop-blur-md md:p-10">
                <div className="absolute right-[-90px] top-[-110px] h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />
                <div className="relative">
                  <p className="mb-5 inline-flex rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs font-semibold text-white/60">
                    工作流程
                  </p>
                  <h3 className="max-w-[560px] text-3xl font-semibold leading-tight text-white md:text-5xl">从商品信息到运营交付</h3>
                  <p className="mt-6 max-w-[560px] text-sm leading-relaxed text-white/62">
                    作品集不限定在单一类目，重点展示电商美工岗位需要的执行能力：商品卖点拆解、主图与详情页设计、活动页面输出、精修和海报视觉。
                  </p>

                  <div className="mt-10 flex flex-wrap items-center gap-2">
                    {workflowSteps.map((step, index) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-xs text-white/68">{step}</span>
                        {index < workflowSteps.length - 1 && <ArrowUpRight className="h-3.5 w-3.5 rotate-45 text-white/28" />}
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <div className="grid gap-5 md:grid-cols-2">
                {strengths.map(({ icon: Icon, label, title, copy }) => (
                  <article key={title} className="rounded-[24px] border border-white/10 bg-white/[0.05] p-7 shadow-card backdrop-blur-md">
                    <div className="mb-7 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/52">{label}</span>
                      <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/12 bg-white/[0.08] text-white/72">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold text-white">{title}</h3>
                    <p className="text-sm leading-relaxed text-white/58">{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="scroll-mt-24 bg-black px-5 py-20 text-white">
          <div className="mx-auto max-w-[1700px]">
            <div className="grid gap-8 rounded-[28px] border border-white/10 bg-white/[0.035] p-8 shadow-card md:p-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold text-white/46">联系方式</p>
                <h2 className="max-w-[720px] text-4xl font-semibold leading-tight md:text-5xl">
                  联系梁林
                </h2>
                <p className="mt-6 max-w-[760px] text-sm leading-relaxed text-white/58">
                  这里作为投递收口，只保留必要联系信息。微信和简历下载入口后续确认后再填写。
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-black/30 p-6">
                <p className="mb-5 text-sm font-semibold text-white/80">投递信息</p>

                <div className="grid gap-2 sm:grid-cols-2">
                  {contactItems.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="mb-1 text-xs font-semibold text-white/44">{item.label}</p>
                      <p className="text-sm font-semibold text-white/70">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/40">© 梁林｜电商视觉设计作品集</div>
          </div>
        </footer>

        {activePreview && (
          <div
            className="fixed inset-0 z-[160] flex items-center justify-center bg-black/72 px-5 py-8 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={`${previewContent[activePreview].label}作品预览`}
            onClick={() => setActivePreview(null)}
          >
            <div
              className="max-h-[88vh] w-full max-w-[1280px] overflow-y-auto rounded-[28px] border border-white/12 bg-[#080b12] p-6 shadow-card md:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-7 flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end">
                <div>
                  <p className="mb-3 text-sm font-semibold text-acid">{previewContent[activePreview].label}</p>
                  <h3 className="text-3xl font-semibold text-white md:text-5xl">{previewContent[activePreview].title}</h3>
                  <p className="mt-4 max-w-[680px] text-sm leading-7 text-white/52">
                    {previewContent[activePreview].copy}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePreview(null)}
                  className="self-start rounded-full border border-white/14 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white/70 transition-colors hover:bg-white/12 md:self-auto"
                >
                  关闭
                </button>
              </div>

              {activePreview === "main" && (
                <div className="grid gap-4 md:grid-cols-3">
                  {mainImagePreviewItems.map((item, index) => (
                    <article key={item} className="overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.045]">
                      <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(135deg,rgba(14,116,144,0.52),rgba(10,13,20,0.96))]">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:32px_32px]" />
                        <div className="absolute left-5 top-5 h-2 w-24 rounded-full bg-white/58" />
                        <div className="absolute left-6 top-16 h-[48%] w-[46%] border border-white/18 bg-black/16" />
                        <div className="absolute right-6 top-16 grid w-[34%] gap-3">
                          <span className="h-8 bg-white/16" />
                          <span className="h-14 bg-white/10" />
                          <span className="h-8 bg-white/14" />
                        </div>
                        <div className="absolute bottom-5 left-5 right-5 h-10 bg-white/10" />
                      </div>
                      <div className="flex items-center justify-between px-4 py-4">
                        <span className="text-sm font-semibold text-white/78">{item}</span>
                        <span className="text-xs font-semibold text-white/36">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {activePreview === "detail" && (
                <div className="grid gap-5 lg:grid-cols-[0.34fr_0.66fr]">
                  <div className="grid gap-3 self-start">
                    {detailPreviewItems.map((item, index) => (
                      <button
                        key={item}
                        type="button"
                        className={`rounded-2xl border px-5 py-4 text-left transition-colors ${
                          index === 0 ? "border-acid/50 bg-acid/10" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                        }`}
                      >
                        <span className="block text-sm font-semibold text-white/82">{item}</span>
                        <span className="mt-2 block text-xs text-white/42">完整长图 / 卖点模块 / 参数模块</span>
                      </button>
                    ))}
                  </div>

                  <div className="max-h-[62vh] overflow-y-auto rounded-[22px] border border-white/10 bg-white/[0.035] p-4">
                    <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-[18px] border border-white/12 bg-[linear-gradient(180deg,rgba(63,98,18,0.56),rgba(8,10,16,0.98))]">
                      {["首屏卖点", "使用场景", "材质细节", "功能说明", "参数信息", "服务保障"].map((item, index) => (
                        <section key={item} className="border-b border-white/10 p-6 last:border-b-0">
                          <div className="mb-5 flex items-center justify-between">
                            <span className="text-sm font-semibold text-white/76">{item}</span>
                            <span className="text-xs font-semibold text-acid">{String(index + 1).padStart(2, "0")}</span>
                          </div>
                          <div className="grid gap-4">
                            <div className="h-40 rounded-2xl bg-white/12" />
                            <div className="h-3 w-2/3 rounded-full bg-white/24" />
                            <div className="h-3 w-1/2 rounded-full bg-white/14" />
                          </div>
                        </section>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activePreview === "retouch" && (
                <div className="grid gap-4 md:grid-cols-2">
                  {retouchPreviewItems.map((item, index) => (
                    <article key={item} className="overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.045]">
                      <div className="grid aspect-[16/9] grid-cols-2">
                        <div className="relative border-r border-white/10 bg-[linear-gradient(135deg,rgba(80,80,80,0.36),rgba(10,10,12,0.96))]">
                          <span className="absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1.5 text-xs font-semibold text-white/50">Before</span>
                          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/18 bg-white/[0.06]" />
                        </div>
                        <div className="relative bg-[linear-gradient(135deg,rgba(251,146,60,0.44),rgba(10,10,12,0.96))]">
                          <span className="absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1.5 text-xs font-semibold text-white/70">After</span>
                          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border" style={{ borderColor: index % 2 ? "#fb923c" : "#facc15" }} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-4 py-4">
                        <span className="text-sm font-semibold text-white/78">{item}</span>
                        <span className="text-xs text-white/36">质感 / 光影 / 边缘</span>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {activePreview === "poster" && (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {posterPreviewItems.map((item, index) => (
                    <article key={item} className="overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.045]">
                      <div className="relative aspect-[3/4] overflow-hidden bg-[linear-gradient(145deg,rgba(190,88,27,0.58),rgba(10,10,12,0.98))]">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:30px_30px]" />
                        <div className="absolute left-6 top-8 h-12 w-[58%] bg-white/20" />
                        <div className="absolute left-6 top-24 h-4 w-[42%] bg-white/14" />
                        <div className="absolute bottom-24 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full border border-white/20 bg-black/20" />
                        <div className="absolute bottom-8 left-6 right-6 h-12 bg-white/12" />
                      </div>
                      <div className="flex items-center justify-between px-4 py-4">
                        <span className="text-sm font-semibold text-white/78">{item}</span>
                        <span className="text-xs text-white/36">{String(index + 1).padStart(2, "0")}</span>
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
