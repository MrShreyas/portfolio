import {
  ArrowUp,
  ArrowUpRight,
  AtSign,
  Briefcase,
  Clock,
  Code,
  Copy,
  Download,
  GitBranch,
  Home,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  ShieldCheck,
  Sparkles,
  Tag,
  User,
  Users,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { FallbackComponent } from "./CustomComponents";

export function Contact() {
  return (
    <div>
      <div
        className="relative bg-zinc-950 text-neutral-50 w-full h-fit overflow-hidden h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible"
        data-id="81964ce0-45cd-59e8-8d54-56e3850c72f4"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, oklch(0.541 0.281 293.009 / 0.18), transparent 45%), radial-gradient(circle at 85% 80%, oklch(0.627 0.265 303.9 / 0.15), transparent 50%), radial-gradient(circle at 50% 100%, oklch(0.696 0.17 162.48 / 0.08), transparent 60%)",
          }}
          data-id="251a433b-4c41-5b45-8181-f82e60621456"
        />
        <div
          className="pointer-events-none opacity-3 absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.985 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.985 0 0) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
          data-id="a5388ad5-4919-5422-8d7a-5b3add585e68"
        />
        <header
          className="relative z-20 px-12 pt-6 w-full"
          data-id="7dfc97b3-5e68-5f2a-98dd-762d2a223fb1"
        >
          <div
            className="flex justify-between items-center"
            data-id="357e8182-49f3-5e23-87ec-01e18ccad38a"
          >
            <div
              className="flex items-center gap-2"
              data-id="da8cb2ef-784a-5a94-b7e1-7000dc782fc4"
            >
              <div
                className="size-9 font-mono font-bold rounded-xl text-violet-50 text-sm leading-5 flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.541 0.281 293.009), oklch(0.627 0.265 303.9))",
                  boxShadow: "0 0 20px oklch(0.541 0.281 293.009 / 0.4)",
                }}
                data-id="f3e93b66-47c5-570c-afc5-9b80994a5d34"
              >
                SK
              </div>
              <span
                className="font-mono text-[#9f9fa9] text-sm leading-5"
                data-id="481e97c9-4fd1-5469-ad6c-0bf72fb7eabe"
              >
                shreyas.dev
              </span>
            </div>
            <nav
              className="rounded-full border-white/10 border-1 border-solid flex p-2 items-center gap-1"
              style={{
                background: "oklch(0.21 0.006 285.885 / 0.6)",
                backdropFilter: "blur(20px)",
              }}
              data-id="37f3a233-018b-53a6-a913-23b44e734c39"
            >
              <a
                className="transition rounded-full text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2"
                data-id="22bc9469-5c8b-5b79-9659-e11ac766d34b"
              >
                <Home
                  className="size-4"
                  data-id="ecd208c5-07e1-567c-b318-fd5a78d1bafa"
                />
                Home
              </a>
              <a
                className="transition rounded-full text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2"
                data-id="a08357db-61fa-53fb-a0fb-d7d2cfcc02a9"
              >
                <User
                  className="size-4"
                  data-id="2abb1538-88c1-5d0f-aa42-4edea1558c18"
                />
                About
              </a>
              <a
                className="transition rounded-full text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2"
                data-id="e02fec41-7aaf-5053-abb8-aae118cea08a"
              >
                <Code
                  className="size-4"
                  data-id="964256ed-0b49-50fd-abe0-c6d926374da2"
                />
                Projects
              </a>
              <a
                className="transition rounded-full text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2"
                data-id="e26af1ba-32b0-5c02-965e-088b0481dba7"
              >
                <Zap
                  className="size-4"
                  data-id="06e10d96-1960-5a1f-88aa-05a99b90aaf6"
                />
                Skills
              </a>
              <a
                className="relative rounded-full text-neutral-50 text-sm leading-5 flex px-4 py-2 items-center gap-2"
                data-id="c4671200-9012-5625-bf44-311b5654707f"
              >
                <Mail
                  className="size-4"
                  data-id="5be5d152-0f9b-5717-b53d-8018680e7c75"
                />
                Contact
                <span
                  className="left-1/2 -translate-x-1/2 rounded-full absolute bottom-0 w-8 h-0.5"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.541 0.281 293.009), oklch(0.627 0.265 303.9))",
                  }}
                  data-id="772ddd97-d979-5815-a3d9-3c5b5d960c66"
                />
              </a>
            </nav>
            <Button
              className="rounded-full text-violet-50 gap-2"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.541 0.281 293.009), oklch(0.627 0.265 303.9))",
                boxShadow: "0 0 20px oklch(0.541 0.281 293.009 / 0.35)",
              }}
              data-id="44581648-3197-5d67-bc0b-cbf6e21f75a3"
            >
              <Download
                className="size-4"
                data-id="4e5fda30-e840-5949-b658-fcd838f26997"
              />
              Resume
            </Button>
          </div>
        </header>
        <main
          className="relative z-10 px-12 pt-12 pb-8 w-full"
          data-id="0e44ea33-85b2-55be-aea6-73147d02fb1d"
        >
          <div
            className="flex mb-8 justify-between items-center"
            data-id="171dafdf-ec8d-5627-945e-7646b7ecf6f3"
          >
            <div
              className="flex flex-col gap-3"
              data-id="c2973a97-a4e6-5bf3-ad9c-0fcfddc02c05"
            >
              <div
                className="flex items-center gap-3"
                data-id="aa2794a5-1074-5fc9-bd4a-af28a924294f"
              >
                <span
                  className="font-mono text-xs leading-4 tracking-widest"
                  style={{ color: "oklch(0.696 0.17 162.48)" }}
                  data-id="785f04ab-e72f-5305-95fb-21b58cff9081"
                >
                  // 04 — GET IN TOUCH
                </span>
                <span
                  className="w-16 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.696 0.17 162.48), transparent)",
                  }}
                  data-id="1fccbeb7-3c23-5298-9a3f-a510a4a44978"
                />
              </div>
              <h2
                className="leading-none font-bold text-5xl leading-12 tracking-tight"
                data-id="d3282e47-1058-51ae-86f2-b292ec7b5cb5"
              >
                Let's build something
                <span
                  className="italic font-light"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.541 0.281 293.009), oklch(0.627 0.265 303.9))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  data-id="68e133ff-123b-5c8d-ae6a-984deafabb0b"
                >
                  extraordinary
                </span>
              </h2>
            </div>
            <div
              className="rounded-full border-white/10 border-1 border-solid flex px-4 py-2 items-center gap-2"
              style={{
                background: "oklch(0.21 0.006 285.885 / 0.6)",
                backdropFilter: "blur(12px)",
              }}
              data-id="6d36d10d-cc87-5edd-acaf-9157bdbd187f"
            >
              <span
                className="relative size-2 flex"
                data-id="00ce708b-18c4-5a45-8ff2-91bb0be9cf05"
              >
                <span
                  className="inline-flex animate-ping opacity-75 rounded-full absolute w-full h-full"
                  style={{ background: "oklch(0.696 0.17 162.48)" }}
                  data-id="a99e84f0-9ddd-50fd-83cd-e8debbfac2d1"
                />
                <span
                  className="relative inline-flex size-2 rounded-full"
                  style={{
                    background: "oklch(0.696 0.17 162.48)",
                    boxShadow: "0 0 8px oklch(0.696 0.17 162.48)",
                  }}
                  data-id="c927ead1-d042-5420-8157-4031cb7af57d"
                />
              </span>
              <span
                className="font-mono text-neutral-50 text-xs leading-4"
                data-id="9f4b94c6-59cb-5b51-9eeb-0d14f372c911"
              >
                Available for work
              </span>
            </div>
          </div>
          <div
            className="rounded-3xl p-px"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.541 0.281 293.009 / 0.6), oklch(0.627 0.265 303.9 / 0.3), oklch(1 0 0 / 0.05))",
            }}
            data-id="935c903f-4276-54c8-ac80-ec87c8810cf6"
          >
            <div
              className="rounded-3xl p-8"
              style={{
                background: "oklch(0.141 0.005 285.823 / 0.8)",
                backdropFilter: "blur(20px)",
              }}
              data-id="0a6e0560-1229-5f2b-8701-21f0e6033992"
            >
              <div
                className="grid grid-cols-12 gap-8"
                data-id="724e035b-4281-52e0-975f-c357f7583dc5"
              >
                <div
                  className="col-span-5 flex flex-col gap-6"
                  data-id="458f956f-52d9-5773-b1a0-cb7fb05784c3"
                >
                  <div
                    className="flex flex-col gap-2"
                    data-id="3c9e5746-c1d6-541a-9226-ccc14f418d6f"
                  >
                    <span
                      className="font-mono text-[#9f9fa9] text-xs leading-4 tracking-widest"
                      data-id="28e20129-5718-57cf-adc5-c0f5258ca04c"
                    >
                      REACH OUT
                    </span>
                    <h3
                      className="leading-tight font-semibold text-2xl leading-8"
                      data-id="6e776a0c-cf87-5f7f-b6b6-52615f1077fd"
                    >
                      I'm always open to discussing new projects, creative
                      ideas, or opportunities.
                    </h3>
                  </div>
                  <div
                    className="flex flex-col gap-3"
                    data-id="9e01a9a9-97be-5641-9dea-854837a7bc59"
                  >
                    <div
                      className="group transition rounded-2xl border-white/10 border-1 border-solid flex p-4 items-center gap-4"
                      style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                      data-id="45d11e7a-6881-511f-9479-2363d1e5b9e3"
                    >
                      <div
                        className="size-11 shrink-0 rounded-xl flex justify-center items-center"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.541 0.281 293.009 / 0.2), oklch(0.627 0.265 303.9 / 0.1))",
                          border: "1px solid oklch(0.541 0.281 293.009 / 0.4)",
                        }}
                        data-id="45065a62-8210-57bf-b7ba-790eea391576"
                      >
                        <Mail
                          className="size-5"
                          style={{ color: "oklch(0.769 0.6 293.009)" }}
                          data-id="21e3be4e-48ae-5b23-82b1-67435bdc06b1"
                        />
                      </div>
                      <div
                        className="flex flex-col flex-1 gap-0.5"
                        data-id="f41c4704-cc6e-5f0b-9eef-10974a766bdd"
                      >
                        <span
                          className="font-mono uppercase text-[#9f9fa9] text-[10px] tracking-widest"
                          data-id="fd776a27-cd2a-578b-a94d-47bdc2bc284d"
                        >
                          Email
                        </span>
                        <span
                          className="text-neutral-50 text-sm leading-5"
                          data-id="fbd17779-d63b-5d3c-aba1-122a5c415860"
                        >
                          shreyas.katalkar@gmail.com
                        </span>
                      </div>
                      <Copy
                        className="size-4 transition text-[#9f9fa9]"
                        data-id="83d84123-c6e2-524b-9b55-f61855d17ca1"
                      />
                    </div>
                    <div
                      className="rounded-2xl border-white/10 border-1 border-solid flex p-4 items-center gap-4"
                      style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                      data-id="11996bef-f4f4-5a58-bdf2-5a0ff560074b"
                    >
                      <div
                        className="size-11 shrink-0 rounded-xl flex justify-center items-center"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.696 0.17 162.48 / 0.2), oklch(0.696 0.17 162.48 / 0.05))",
                          border: "1px solid oklch(0.696 0.17 162.48 / 0.4)",
                        }}
                        data-id="a9d5122b-3d07-5f83-b43d-ce374c9723a5"
                      >
                        <MapPin
                          className="size-5"
                          style={{ color: "oklch(0.696 0.17 162.48)" }}
                          data-id="0bb31a6e-c3b1-5db4-a2c9-64580e423cf0"
                        />
                      </div>
                      <div
                        className="flex flex-col flex-1 gap-0.5"
                        data-id="946d170f-d4f6-54d4-b895-af1a7d8cc543"
                      >
                        <span
                          className="font-mono uppercase text-[#9f9fa9] text-[10px] tracking-widest"
                          data-id="896b01a9-f88c-5ad5-86d3-43570eeef55a"
                        >
                          Location
                        </span>
                        <span
                          className="text-neutral-50 text-sm leading-5"
                          data-id="41b4cd7f-4250-55f4-bc15-1fcd87a1be2f"
                        >
                          Pune, Maharashtra · India
                        </span>
                      </div>
                      <span
                        className="font-mono text-[#9f9fa9] text-xs leading-4"
                        data-id="704a7d32-6790-5f8a-bad3-aa721b012a07"
                      >
                        GMT+5:30
                      </span>
                    </div>
                    <div
                      className="rounded-2xl border-white/10 border-1 border-solid flex p-4 items-center gap-4"
                      style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                      data-id="2e7129f4-be27-5d59-8be6-ea21d67659e6"
                    >
                      <div
                        className="size-11 shrink-0 rounded-xl flex justify-center items-center"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.769 0.188 70.08 / 0.2), oklch(0.769 0.188 70.08 / 0.05))",
                          border: "1px solid oklch(0.769 0.188 70.08 / 0.4)",
                        }}
                        data-id="486c81be-330e-5153-a43e-c3b18d66aabb"
                      >
                        <Clock
                          className="size-5"
                          style={{ color: "oklch(0.769 0.188 70.08)" }}
                          data-id="a3e9b6a2-9889-5f08-86a6-89230fe2213d"
                        />
                      </div>
                      <div
                        className="flex flex-col flex-1 gap-0.5"
                        data-id="67874192-15c5-5d4b-95d6-4b91a75c1c54"
                      >
                        <span
                          className="font-mono uppercase text-[#9f9fa9] text-[10px] tracking-widest"
                          data-id="f69e34aa-01c9-56eb-9ef8-284ae3095b1f"
                        >
                          Response Time
                        </span>
                        <span
                          className="text-neutral-50 text-sm leading-5"
                          data-id="45178857-4fac-583b-b04d-c0a2ba82bea6"
                        >
                          Usually within 24 hours
                        </span>
                      </div>
                      <Zap
                        className="size-4"
                        style={{ color: "oklch(0.769 0.188 70.08)" }}
                        data-id="ce188cbd-f8c4-5962-bf28-89d311d16949"
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-col gap-3"
                    data-id="800c48e7-dd4c-5d05-85ac-001d205d511f"
                  >
                    <span
                      className="font-mono uppercase text-[#9f9fa9] text-[10px] tracking-widest"
                      data-id="bce3232c-1068-5f88-a261-9ccaa3113f3b"
                    >
                      Find me on
                    </span>
                    <div
                      className="flex items-center gap-2"
                      data-id="4757814a-185b-51ff-ab0a-ce3d913b2d53"
                    >
                      <a
                        className="size-11 transition rounded-xl border-white/10 border-1 border-solid flex justify-center items-center"
                        style={{
                          background: "oklch(0.21 0.006 285.885 / 0.5)",
                        }}
                        data-id="7c4b0484-08f1-5df0-a1d5-e0ce84ca906e"
                      >
                        <FallbackComponent
                          className="size-4"
                          data-id="94ac67c0-66e1-5eac-8fbd-461a99bc426c"
                        />
                      </a>
                      <a
                        className="size-11 transition rounded-xl border-white/10 border-1 border-solid flex justify-center items-center"
                        style={{
                          background: "oklch(0.21 0.006 285.885 / 0.5)",
                        }}
                        data-id="60dc038a-7281-52ed-8d7c-a9b264a3fa60"
                      >
                        <FallbackComponent
                          className="size-4"
                          data-id="bbe9095a-56c8-52a1-9458-0d7202322289"
                        />
                      </a>
                      <a
                        className="size-11 transition rounded-xl border-white/10 border-1 border-solid flex justify-center items-center"
                        style={{
                          background: "oklch(0.21 0.006 285.885 / 0.5)",
                        }}
                        data-id="84a41672-5d74-5b51-b4c4-a7c59df3cbd0"
                      >
                        <FallbackComponent
                          className="size-4"
                          data-id="f9296812-168a-584c-8f3f-e37a159cfa61"
                        />
                      </a>
                      <a
                        className="size-11 transition rounded-xl border-white/10 border-1 border-solid flex justify-center items-center"
                        style={{
                          background: "oklch(0.21 0.006 285.885 / 0.5)",
                        }}
                        data-id="65c724e3-30ac-57b3-8a2f-b50996d83925"
                      >
                        <FallbackComponent
                          className="size-4"
                          data-id="f31bf36e-4de1-56d7-a891-61378120d54c"
                        />
                      </a>
                      <a
                        className="size-11 transition rounded-xl border-white/10 border-1 border-solid flex justify-center items-center"
                        style={{
                          background: "oklch(0.21 0.006 285.885 / 0.5)",
                        }}
                        data-id="a38a53bf-9afd-58ee-bea4-f5d77e07b23c"
                      >
                        <FallbackComponent
                          className="size-4"
                          data-id="fcaa3979-487e-5543-a03b-82273af6741b"
                        />
                      </a>
                      <div
                        className="bg-white/10 mx-2 w-px h-6"
                        data-id="17adf5c1-c961-5ade-bb40-2e02ea8320e4"
                      />
                      <a
                        className="transition font-mono rounded-xl text-xs leading-4 border-white/10 border-1 border-solid flex px-4 items-center gap-2 h-11"
                        style={{
                          background: "oklch(0.21 0.006 285.885 / 0.5)",
                        }}
                        data-id="d8523d0a-3748-519c-bd50-7c510a1f4f22"
                      >
                        cal.com
                        <ArrowUpRight
                          className="size-3"
                          data-id="b04be4d2-ab1b-5543-b3e4-c45e78a1d36e"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-span-7"
                  data-id="4fbb2e7a-f771-5f4b-b8b6-722cecb085aa"
                >
                  <div
                    className="rounded-2xl border-white/10 border-1 border-solid flex p-6 flex-col gap-5 h-full"
                    style={{
                      background: "oklch(0.21 0.006 285.885 / 0.7)",
                      backdropFilter: "blur(12px)",
                    }}
                    data-id="72d288a5-8693-5f2f-a877-0ca7b3fbaf25"
                  >
                    <div
                      className="flex justify-between items-center"
                      data-id="f09c6bee-6744-55fe-9634-c339dd8e25f0"
                    >
                      <div
                        className="flex items-center gap-2"
                        data-id="5b93523e-00ac-5df0-b6c7-7bde9c254b04"
                      >
                        <div
                          className="flex gap-1.5"
                          data-id="8d8eccac-a2b5-5c71-83b2-c66b7ea12260"
                        >
                          <span
                            className="size-3 rounded-full"
                            style={{ background: "oklch(0.704 0.191 22.216)" }}
                            data-id="795c1ab8-e412-5801-8a2f-09301edc6f70"
                          />
                          <span
                            className="size-3 rounded-full"
                            style={{ background: "oklch(0.769 0.188 70.08)" }}
                            data-id="f9fe5d2f-bf10-5d77-8193-df5125d446ec"
                          />
                          <span
                            className="size-3 rounded-full"
                            style={{ background: "oklch(0.696 0.17 162.48)" }}
                            data-id="7680dcb6-7934-5519-9191-e2edbc7804b2"
                          />
                        </div>
                        <span
                          className="font-mono text-[#9f9fa9] text-xs leading-4 ml-2"
                          data-id="e45d7455-9a70-5a8c-a8c2-e4db2e2d1e85"
                        >
                          ~/contact/send-message.tsx
                        </span>
                      </div>
                      <Badge
                        variant="outline"
                        className="font-mono text-[10px] gap-1.5"
                        data-id="21752107-e56a-5405-b955-2fecda568c5b"
                      >
                        <span
                          className="size-1.5 rounded-full"
                          style={{
                            background: "oklch(0.696 0.17 162.48)",
                            boxShadow: "0 0 6px oklch(0.696 0.17 162.48)",
                          }}
                          data-id="42f7fbd8-1ae4-5e01-b88f-edeb7e3bed95"
                        />
                        SECURE
                      </Badge>
                    </div>
                    <div
                      className="grid grid-cols-2 gap-4"
                      data-id="4248d29b-ffd5-5a93-a85a-347e3319e2f1"
                    >
                      <div
                        className="flex flex-col gap-2"
                        data-id="86204cf0-8517-55f4-82fb-7e87294db85f"
                      >
                        <Label
                          className="font-mono uppercase text-[#9f9fa9] text-[10px] tracking-widest flex items-center gap-2"
                          data-id="f6cd8fad-589b-52e6-9ad5-8b058b00d748"
                        >
                          <User
                            className="size-3"
                            data-id="0de49463-3f0e-5580-a5ce-7ae9254e82eb"
                          />
                          Name
                        </Label>
                        <Input
                          placeholder="Jane Doe"
                          className="rounded-xl border-white/10 border-0 border-solid h-11"
                          style={{
                            background: "oklch(0.141 0.005 285.823 / 0.6)",
                          }}
                          data-id="5bd55477-f5bb-5060-9f99-5005ed279730"
                        />
                      </div>
                      <div
                        className="flex flex-col gap-2"
                        data-id="809f0dd6-8d30-5ecc-9c48-aaba0ac977d1"
                      >
                        <Label
                          className="font-mono uppercase text-[#9f9fa9] text-[10px] tracking-widest flex items-center gap-2"
                          data-id="345c9cc8-9939-5602-95d1-fa40906cd5b2"
                        >
                          <AtSign
                            className="size-3"
                            data-id="4f934f30-cd2b-5a27-9ac8-5ed2b2947f8c"
                          />
                          Email
                        </Label>
                        <Input
                          placeholder="jane@company.com"
                          className="rounded-xl border-white/10 border-0 border-solid h-11"
                          style={{
                            background: "oklch(0.141 0.005 285.823 / 0.6)",
                          }}
                          data-id="aee8a241-fa1a-54f6-b13e-a0b1a18b94fe"
                        />
                      </div>
                    </div>
                    <div
                      className="flex flex-col gap-2"
                      data-id="4afb2fc7-438b-5040-8c4b-b0af8146a837"
                    >
                      <Label
                        className="font-mono uppercase text-[#9f9fa9] text-[10px] tracking-widest flex items-center gap-2"
                        data-id="135928e0-0f58-5d3d-9682-74fd5d1f1929"
                      >
                        <Tag
                          className="size-3"
                          data-id="f5e5d357-92ac-537e-9ffe-f1029677c319"
                        />
                        What's this about?
                      </Label>
                      <div
                        className="flex flex-wrap gap-2"
                        data-id="755921f9-74c9-5fe5-9312-71f3c7f21a94"
                      >
                        <button
                          className="font-mono rounded-full text-xs leading-4 border-black/1 border-1 border-solid px-3 py-1.5"
                          style={{
                            background:
                              "linear-gradient(135deg, oklch(0.541 0.281 293.009 / 0.2), oklch(0.627 0.265 303.9 / 0.1))",
                            borderColor: "oklch(0.541 0.281 293.009 / 0.5)",
                            color: "oklch(0.85 0.15 293.009)",
                          }}
                          data-id="8fe05787-fbf0-55a2-bba3-fcb8250720ae"
                        >
                          💼 Project
                        </button>
                        <button
                          className="transition font-mono rounded-full text-[#9f9fa9] text-xs leading-4 border-white/10 border-1 border-solid px-3 py-1.5"
                          style={{
                            background: "oklch(0.141 0.005 285.823 / 0.4)",
                          }}
                          data-id="e6c76adc-d516-528a-8d07-6dc1c0c63ab5"
                        >
                          🤝 Collaboration
                        </button>
                        <button
                          className="transition font-mono rounded-full text-[#9f9fa9] text-xs leading-4 border-white/10 border-1 border-solid px-3 py-1.5"
                          style={{
                            background: "oklch(0.141 0.005 285.823 / 0.4)",
                          }}
                          data-id="77432c86-4ce1-5b8d-b88c-47fe8537f7a3"
                        >
                          💬 Just saying hi
                        </button>
                        <button
                          className="transition font-mono rounded-full text-[#9f9fa9] text-xs leading-4 border-white/10 border-1 border-solid px-3 py-1.5"
                          style={{
                            background: "oklch(0.141 0.005 285.823 / 0.4)",
                          }}
                          data-id="645b2e60-c4d5-5e05-afa8-dbd3ee8b48fb"
                        >
                          🚀 Hiring
                        </button>
                        <button
                          className="transition font-mono rounded-full text-[#9f9fa9] text-xs leading-4 border-white/10 border-1 border-solid px-3 py-1.5"
                          style={{
                            background: "oklch(0.141 0.005 285.823 / 0.4)",
                          }}
                          data-id="1867010c-6d42-59ec-8ab0-f02561ece1d5"
                        >
                          ❓ Other
                        </button>
                      </div>
                    </div>
                    <div
                      className="flex flex-col flex-1 gap-2"
                      data-id="0b4cb527-ac2b-57c2-b34d-9c7777468810"
                    >
                      <div
                        className="flex justify-between items-center"
                        data-id="45037747-1775-5300-9858-6eebc95b85c2"
                      >
                        <Label
                          className="font-mono uppercase text-[#9f9fa9] text-[10px] tracking-widest flex items-center gap-2"
                          data-id="93763278-6dfc-5a9e-900f-283f4799f23a"
                        >
                          <MessageSquare
                            className="size-3"
                            data-id="ea711393-5a58-5027-9646-b2f20daf73c2"
                          />
                          Message
                        </Label>
                        <span
                          className="font-mono text-[#9f9fa9] text-[10px]"
                          data-id="3b638fb5-efac-52c3-a54e-887d04564f89"
                        >
                          142 / 1000
                        </span>
                      </div>
                      <Textarea
                        placeholder="Hey Shreyas, I'd love to chat about building a..."
                        className="min-h-[140px] resize-none rounded-xl border-white/10 border-0 border-solid"
                        style={{
                          background: "oklch(0.141 0.005 285.823 / 0.6)",
                        }}
                        data-id="5c3cbe67-f27b-5d8b-a9f9-fd50d5bbbacf"
                      />
                    </div>
                    <div
                      className="flex pt-2 justify-between items-center gap-4"
                      data-id="cfb2beaf-7615-5f9c-8634-a953f5f8a994"
                    >
                      <div
                        className="text-[#9f9fa9] text-xs leading-4 flex items-center gap-2"
                        data-id="181a58f2-0617-5a16-85b3-c16e245073be"
                      >
                        <ShieldCheck
                          className="size-4"
                          style={{ color: "oklch(0.696 0.17 162.48)" }}
                          data-id="1ebf0774-26a0-58d6-93af-f1afc9603c5c"
                        />
                        <span data-id="b6edc8b7-e9f2-5c02-b038-a86cd6dc1bb2">
                          Protected by reCAPTCHA · Encrypted in transit
                        </span>
                      </div>
                      <Button
                        className="font-medium rounded-xl text-violet-50 px-6 gap-2 h-11"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.541 0.281 293.009), oklch(0.627 0.265 303.9))",
                          boxShadow:
                            "0 8px 24px oklch(0.541 0.281 293.009 / 0.4)",
                        }}
                        data-id="aba96af0-99ac-5705-b124-bfe71a3fc792"
                      >
                        Send message
                        <Send
                          className="size-4"
                          data-id="8df7c033-1ca9-5987-b80c-d8b85ee143e3"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-3 mt-8 gap-4"
            data-id="32d76688-8572-5473-8510-91b1a393a251"
          >
            <div
              className="rounded-2xl border-white/10 border-1 border-solid flex p-5 items-center gap-4"
              style={{
                background: "oklch(0.21 0.006 285.885 / 0.5)",
                backdropFilter: "blur(12px)",
              }}
              data-id="df1f3b82-64f2-57a2-b2b9-7e41d08225ea"
            >
              <div
                className="size-10 shrink-0 rounded-xl flex justify-center items-center"
                style={{
                  background: "oklch(0.541 0.281 293.009 / 0.15)",
                  border: "1px solid oklch(0.541 0.281 293.009 / 0.3)",
                }}
                data-id="88d17572-cd9b-54c4-bb73-138b1d6cd15f"
              >
                <Briefcase
                  className="size-4"
                  style={{ color: "oklch(0.769 0.6 293.009)" }}
                  data-id="42a3c66c-f8fc-5540-9b9d-85ce008942c3"
                />
              </div>
              <div
                className="flex flex-col"
                data-id="81a09749-f5c2-5dd2-8d4e-723f95935fdd"
              >
                <span
                  className="font-semibold text-sm leading-5"
                  data-id="5fcd5071-afc5-5655-98c0-a074c61af0ed"
                >
                  Freelance Projects
                </span>
                <span
                  className="text-[#9f9fa9] text-xs leading-4"
                  data-id="9430b689-eaa5-5fd7-a6b1-96625027edce"
                >
                  Open · Full-stack web apps
                </span>
              </div>
            </div>
            <div
              className="rounded-2xl border-white/10 border-1 border-solid flex p-5 items-center gap-4"
              style={{
                background: "oklch(0.21 0.006 285.885 / 0.5)",
                backdropFilter: "blur(12px)",
              }}
              data-id="c23c8729-b913-559a-b0e0-2587ea135897"
            >
              <div
                className="size-10 shrink-0 rounded-xl flex justify-center items-center"
                style={{
                  background: "oklch(0.696 0.17 162.48 / 0.15)",
                  border: "1px solid oklch(0.696 0.17 162.48 / 0.3)",
                }}
                data-id="29e0335d-2bab-5b52-a339-e0ed73fbd08d"
              >
                <Users
                  className="size-4"
                  style={{ color: "oklch(0.696 0.17 162.48)" }}
                  data-id="d99f392e-d3c2-543c-b1d7-40c1babd0826"
                />
              </div>
              <div
                className="flex flex-col"
                data-id="d4e8dc36-ff8c-5a08-8ede-7b7d04f631ef"
              >
                <span
                  className="font-semibold text-sm leading-5"
                  data-id="8a879d37-0104-574a-8bfd-5dd19e293b10"
                >
                  Full-time Roles
                </span>
                <span
                  className="text-[#9f9fa9] text-xs leading-4"
                  data-id="34b37f0b-61ca-557f-ae1f-fab337b2b7f4"
                >
                  Considering · Remote / Pune
                </span>
              </div>
            </div>
            <div
              className="rounded-2xl border-white/10 border-1 border-solid flex p-5 items-center gap-4"
              style={{
                background: "oklch(0.21 0.006 285.885 / 0.5)",
                backdropFilter: "blur(12px)",
              }}
              data-id="62dbfdca-1ce7-516a-8555-870dbf602cb3"
            >
              <div
                className="size-10 shrink-0 rounded-xl flex justify-center items-center"
                style={{
                  background: "oklch(0.769 0.188 70.08 / 0.15)",
                  border: "1px solid oklch(0.769 0.188 70.08 / 0.3)",
                }}
                data-id="a2e310a7-a143-53a1-ab0a-e692108d429f"
              >
                <Sparkles
                  className="size-4"
                  style={{ color: "oklch(0.769 0.188 70.08)" }}
                  data-id="cd66d74b-5e65-5848-a277-a2665b6275ae"
                />
              </div>
              <div
                className="flex flex-col"
                data-id="6e36d62b-975a-5c34-9f43-7df46d51f519"
              >
                <span
                  className="font-semibold text-sm leading-5"
                  data-id="706c1dcb-18dc-59ef-b9ee-96d89b2700cb"
                >
                  Mentorship
                </span>
                <span
                  className="text-[#9f9fa9] text-xs leading-4"
                  data-id="27f35b0c-7715-5e99-9965-1fc10ca11840"
                >
                  Open · 1:1 sessions weekly
                </span>
              </div>
            </div>
          </div>
          <div
            className="border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex mt-8 pt-6 justify-between items-center"
            data-id="4854295b-15cb-5b30-931a-35c56b1c003b"
          >
            <div
              className="flex items-center gap-3"
              data-id="4e765f77-c92c-571f-85ac-5cba291f142f"
            >
              <span
                className="font-mono text-[#9f9fa9] text-xs leading-4"
                data-id="d3ccdafb-2dad-51eb-a784-2a36583479aa"
              >
                © 2024 Shreyas Katalkar
              </span>
              <span
                className="size-1 rounded-full bg-[#9f9fa9]"
                data-id="a7d42183-3e3f-534d-b183-83cbafe8232c"
              />
              <span
                className="font-mono text-[#9f9fa9] text-xs leading-4"
                data-id="afd123af-3802-5d4e-bca7-9258c02db731"
              >
                Built with Next.js + Tailwind
              </span>
            </div>
            <div
              className="flex items-center gap-4"
              data-id="79e74745-7e31-5e59-b180-be7feb6ea88d"
            >
              <span
                className="font-mono text-[#9f9fa9] text-xs leading-4 flex items-center gap-2"
                data-id="615b6396-a14b-5168-adf8-bfbb426d255c"
              >
                <GitBranch
                  className="size-3"
                  data-id="cc9d2251-6917-5a28-8cb9-fb43b1c9fe9b"
                />
                main · v2.4.1
              </span>
              <a
                className="transition font-mono text-neutral-50 text-xs leading-4 flex items-center gap-1.5"
                data-id="c47f94f6-22aa-5a33-8261-f4e64eee71a9"
              >
                Back to top
                <ArrowUp
                  className="size-3"
                  data-id="3186978b-cd4c-5e7e-bdb0-357957aa6495"
                />
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
