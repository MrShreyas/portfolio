import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  Briefcase,
  Code,
  Database,
  Download,
  FileType,
  Home,
  Mail,
  MapPin,
  Server,
  Sparkles,
  Triangle,
  User,
  Wind,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { FallbackComponent } from "./CustomComponents";

export function Hero() {
  return (
    <div>
      <div
        className="relative bg-zinc-950 text-neutral-50 w-full h-fit overflow-hidden  min-h-screen  min-w-screen max-w-screen"
        style={{ fontFamily: "Inter, sans-serif" }}
        data-id="aeccde30-a3a5-5a9b-84dc-554f6967db8e"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(600px circle at 15% 10%, oklch(0.541 0.281 293.009 / 0.25), transparent 50%), radial-gradient(500px circle at 85% 30%, oklch(0.627 0.265 303.9 / 0.18), transparent 55%), radial-gradient(700px circle at 50% 90%, oklch(0.488 0.243 264.376 / 0.15), transparent 60%)",
          }}
          data-id="4463cc96-b332-53be-b503-6e6d4a7a7319"
        />
        <div
          className="pointer-events-none opacity-4 absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.985 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.985 0 0) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          data-id="25184ee3-5b41-5b90-8926-84328cdad2aa"
        />
        <header
          className="relative z-20 flex px-12 py-6 justify-between items-center"
          data-id="2368d018-753a-5504-86e2-801ff150b395"
        >
          <div
            className="flex items-center gap-2"
            data-id="b40ed316-b788-5b46-b78d-8e03141e0ee4"
          >
            <div
              className="size-9 font-bold rounded-xl text-violet-50 flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.541 0.281 293.009), oklch(0.627 0.265 303.9))",
              }}
              data-id="9ed6b59d-44cf-520d-8a4e-822da8c6fab1"
            >
              SK
            </div>
            <span
              className="font-semibold tracking-tight"
              data-id="a3a88461-626f-5863-af93-77cf0523b08c"
            >
              shreyas
              <span
                className="text-[#7f22fe]"
                data-id="74bf5a06-d1f0-5308-8992-6450e6376219"
              >
                .dev
              </span>
            </span>
          </div>
          <nav
            className="backdrop-blur-xl rounded-full border-white/10 border border-solid flex px-2 py-1.5 justify-center items-center gap-1"
            style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
            data-id="a6a09e45-6152-55fa-9498-9cbcac7bda15"
          >
            <a
              className="rounded-full bg-zinc-800 text-neutral-50 text-sm leading-5 flex px-4 py-2 items-center gap-2"
              data-id="538e2024-4a55-5646-bfa2-33286900ae48"
            >
              <Home
                className="size-4 text-[#7f22fe]"
                data-id="46d844a6-c677-57b9-a4dd-9348aa51d68a"
              />
              <span data-id="a1f8facd-9363-5ca8-8ca0-17e6f3fd9327">Home</span>
              <span
                className="left-1/2 -translate-x-1/2 absolute -bottom-px w-6 h-px"
                style={{ background: "oklch(0.541 0.281 293.009)" }}
                data-id="a67db79f-4ef7-5d0b-8318-3fc60c777ad5"
              />
            </a>
            <a
              className="rounded-full text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2"
              data-id="a8427945-2479-570d-96f9-eb56f88d54b9"
            >
              <User
                className="size-4"
                data-id="51929977-a66a-5604-9e46-ca5a90fe3b1d"
              />
              <span data-id="c5c9a802-f555-5058-b106-740d2ae9fa66">About</span>
            </a>
            <a
              className="rounded-full text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2"
              data-id="9dfed5cb-c9a2-57bd-89aa-b464be9fb6b2"
            >
              <Code
                className="size-4"
                data-id="1175e80f-65e9-5b09-a350-087b6a39cf58"
              />
              <span data-id="6e5a40f5-8df2-505a-bb19-7cb1f6f74096">
                Projects
              </span>
            </a>
            <a
              className="rounded-full text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2"
              data-id="cb3fc653-0c4a-5bd7-a511-46df9fdc00fe"
            >
              <Zap
                className="size-4"
                data-id="71be3500-9967-5b59-9d6a-4f30cc6761de"
              />
              <span data-id="27137cbe-6640-5294-99e6-e5455007052b">Skills</span>
            </a>
            <a
              className="rounded-full text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2"
              data-id="5fd098a0-7121-5e33-8722-b44f858f789b"
            >
              <Mail
                className="size-4"
                data-id="6c9e1140-e305-5cba-9dc2-65833bdc4786"
              />
              <span data-id="113b8b0b-8755-592b-8f04-459335268777">
                Contact
              </span>
            </a>
          </nav>
          <Button
            className="rounded-full text-violet-50 px-5 gap-2"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.541 0.281 293.009), oklch(0.627 0.265 303.9))",
            }}
            data-id="c04f9f61-fa4c-5384-bc77-aa618d5aeb8f"
          >
            <Download
              className="size-4"
              data-id="6423e042-37df-57dc-a854-80f0bddd25a9"
            />
            Resume
          </Button>
        </header>
        <div
          className="relative z-10 px-12 pb-12"
          data-id="208d8d07-583c-5b59-87c5-56bda1d5fe63"
        >
          <section
            className="grid grid-cols-12 pt-8 gap-8"
            data-id="265435eb-c693-5a52-824b-2d7b90d51a02"
          >
            <div
              className="col-span-7 flex flex-col gap-6"
              data-id="485f87c4-f34d-5487-844c-7f9bc35f0100"
            >
              <div
                className="inline-flex backdrop-blur-xl rounded-full text-[#9f9fa9] text-xs leading-4 border-white/10 border border-solid px-4 py-1.5 self-start items-center gap-2"
                style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                data-id="a1200fb6-e7ca-592a-9738-71dfc11dce3b"
              >
                <span
                  className="size-2 rounded-full"
                  style={{
                    background: "oklch(0.696 0.17 162.48)",
                    boxShadow: "0 0 12px oklch(0.696 0.17 162.48)",
                  }}
                  data-id="bf9da382-58c5-59fe-b958-ce83c613510a"
                />
                Available for new opportunities
              </div>
              <div
                className="flex flex-col gap-3"
                data-id="ede61823-f8cd-5e32-8388-134da78fd336"
              >
                <p
                  className="font-mono text-[#9f9fa9] text-sm leading-5"
                  data-id="57564f3d-a0f5-50a7-9c4f-35c2fbba45b3"
                >{`<hello world="true" />`}</p>
                <h1
                  className="font-bold text-6xl leading-15.75 tracking-tight"
                  data-id="b5b26682-ae5c-5445-af45-0bb3949cd040"
                >
                  Shreyas
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.541 0.281 293.009), oklch(0.627 0.265 303.9), oklch(0.696 0.17 162.48))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    data-id="01795976-cfb6-5cff-ab66-0f054aaf0ec1"
                  >
                    Katalkar
                  </span>
                </h1>
                <h2
                  className="font-medium text-[#9f9fa9] text-2xl leading-8"
                  data-id="e8ee4ad6-ca12-5375-a659-c8c0ca532a68"
                >
                  Fullstack Web Developer
                  <span
                    className="inline-block align-middle ml-1 w-2 h-6"
                    style={{ background: "oklch(0.541 0.281 293.009)" }}
                    data-id="d5b86eae-959c-511f-91e9-692ea3509dee"
                  />
                </h2>
              </div>
              <p
                className="max-w-xl leading-relaxed text-[#9f9fa9] text-base"
                data-id="2ec9b027-944d-5ace-aeb5-e1127ffb2af8"
              >
                I craft exceptional digital experiences with modern web
                technologies. Focused on building responsive, accessible, and
                performant applications that users love.
              </p>
              <div
                className="flex items-center gap-3"
                data-id="65e1c4c4-c6e5-5c26-b206-f3e4c9142067"
              >
                <Button
                  className="rounded-full text-violet-50 px-6 gap-2 h-11"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.541 0.281 293.009), oklch(0.627 0.265 303.9))",
                  }}
                  data-id="fd824331-6b99-5bc3-9fb4-35a3e8157652"
                >
                  Explore My Work
                  <ArrowRight
                    className="size-4"
                    data-id="9321979c-6ee7-5a45-9481-2db964608e99"
                  />
                </Button>
                <Button
                  variant="outline"
                  className="backdrop-blur-xl rounded-full border-white/10 border-0 border-solid px-6 gap-2 h-11"
                  style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                  data-id="f552c19c-896d-5c29-9137-3dac97d78eaf"
                >
                  <FallbackComponent
                    {...({ className: "size-4", "data-id": "709505f3-52b5-58a1-8f7b-4697d6d9deaf" } as any)}
                  />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="backdrop-blur-xl rounded-full border-white/10 border-0 border-solid px-6 gap-2 h-11"
                  style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                  data-id="797f8c48-d28a-572f-b6eb-02d536e44295"
                >
                  <FallbackComponent
                    {...({ className: "size-4", "data-id": "9ec84045-f2c8-55b4-9984-920da107a761" } as any)}
                  />
                  LinkedIn
                </Button>
              </div>
              <div
                className="grid grid-cols-3 pt-4 gap-4"
                data-id="23239a3d-68ff-53df-b96c-3b6ce81aaa98"
              >
                <div
                  className="backdrop-blur-xl rounded-2xl border-white/10 border border-solid p-4"
                  style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                  data-id="e073dc93-5025-5eae-8817-71691292a530"
                >
                  <div
                    className="font-bold text-2xl leading-8"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.541 0.281 293.009), oklch(0.627 0.265 303.9))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    data-id="8ce51a83-6a38-5a82-b12e-7b99ab6b0419"
                  >
                    15+
                  </div>
                  <div
                    className="text-[#9f9fa9] text-xs leading-4 mt-1"
                    data-id="0ee888d7-b83d-52ce-bae5-4e630e2e1727"
                  >
                    Projects Built
                  </div>
                </div>
                <div
                  className="backdrop-blur-xl rounded-2xl border-white/10 border border-solid p-4"
                  style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                  data-id="fde9fd90-9363-5be8-87af-ba38e966308f"
                >
                  <div
                    className="font-bold text-2xl leading-8"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.541 0.281 293.009), oklch(0.627 0.265 303.9))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    data-id="08ec909c-7467-55fc-b0b3-77fcd490b5c2"
                  >
                    2
                  </div>
                  <div
                    className="text-[#9f9fa9] text-xs leading-4 mt-1"
                    data-id="1b9f970e-ffc5-5762-af7a-0ebedff1d2a6"
                  >
                    Internships
                  </div>
                </div>
                <div
                  className="backdrop-blur-xl rounded-2xl border-white/10 border border-solid p-4"
                  style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                  data-id="a0c30874-ed48-570f-b4b9-7d5766fe1999"
                >
                  <div
                    className="font-bold text-2xl leading-8"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.541 0.281 293.009), oklch(0.627 0.265 303.9))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    data-id="304b4249-5933-5f27-8afc-d84012bf6eff"
                  >
                    10+
                  </div>
                  <div
                    className="text-[#9f9fa9] text-xs leading-4 mt-1"
                    data-id="444c0cb9-10d6-5df7-a009-cafc35ba3c8f"
                  >
                    Technologies
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-span-5 flex flex-col gap-4"
              data-id="c487d430-8b3b-5283-a4a0-9c8e660b9c82"
            >
              <div
                className="relative backdrop-blur-xl rounded-3xl border-white/10 border border-solid p-1 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.541 0.281 293.009 / 0.4), oklch(0.627 0.265 303.9 / 0.2))",
                }}
                data-id="fd7f0de1-b271-5f1e-a14f-66846f886455"
              >
                <div
                  className="rounded-[22px] overflow-hidden"
                  style={{ background: "oklch(0.141 0.005 285.823)" }}
                  data-id="fea74a65-817b-5d11-9eed-554e0f54e511"
                >
                  <div
                    className="border-white/10 border-t-0 border-r-0 border-b border-l-0 border-solid flex px-4 py-3 items-center gap-2"
                    data-id="9c50a279-03a3-53e6-98ef-76e7cacae947"
                  >
                    <span
                      className="size-3 rounded-full"
                      style={{ background: "oklch(0.704 0.191 22.216)" }}
                      data-id="63f5b30d-2f94-5c13-b65f-2f7352aec697"
                    />
                    <span
                      className="size-3 rounded-full"
                      style={{ background: "oklch(0.769 0.188 70.08)" }}
                      data-id="3e33abe7-2664-563a-9e28-4172f8256aa4"
                    />
                    <span
                      className="size-3 rounded-full"
                      style={{ background: "oklch(0.696 0.17 162.48)" }}
                      data-id="bf87b589-0bfb-5a47-a21c-0b0750f1ece4"
                    />
                    <span
                      className="font-mono text-[#9f9fa9] text-xs leading-4 ml-3"
                      data-id="e79d4567-f4e8-5410-96d9-642a3859f6d6"
                    >
                      ~/portfolio/about.tsx
                    </span>
                  </div>
                  <div
                    className="leading-relaxed font-mono text-[13px] p-5"
                    data-id="69bf4541-cf43-5c22-ac23-aa3d3505e3a8"
                  >
                    <div
                      className="flex gap-4"
                      data-id="d62edaea-424d-5668-b3e0-2cd1c8c368fc"
                    >
                      <span
                        className="select-none text-[#9f9fa9]"
                        data-id="56065c37-d76f-5db7-a5cb-2b08eda4273c"
                      >
                        1
                      </span>
                      <span data-id="05032573-afee-59fa-b23f-0522d93bf155">
                        <span
                          style={{ color: "oklch(0.627 0.265 303.9)" }}
                          data-id="a944b7ac-a25f-5049-a5dc-4cc740142bfe"
                        >
                          const
                        </span>
                        <span
                          style={{ color: "oklch(0.696 0.17 162.48)" }}
                          data-id="021eef9e-d90e-5807-97c6-ef15a6779a16"
                        >
                          developer
                        </span>
                        ={`{`}
                      </span>
                    </div>
                    <div
                      className="flex gap-4"
                      data-id="ed47ed61-3cc5-5de5-b2ae-342bce696d3b"
                    >
                      <span
                        className="select-none text-[#9f9fa9]"
                        data-id="3ffa8f7e-a85c-5f2a-86e6-48382ceaa604"
                      >
                        2
                      </span>
                      <span
                        className="pl-4"
                        data-id="7d15962f-b5a4-5bf7-bfa1-6a99eea3611e"
                      >
                        <span
                          style={{ color: "oklch(0.769 0.188 70.08)" }}
                          data-id="cbd5fc1b-3f3c-5ef8-979f-484e1a748211"
                        >
                          name
                        </span>
                        :
                        <span
                          style={{ color: "oklch(0.645 0.246 16.439)" }}
                          data-id="7a248cff-23af-58ab-844f-02a134b933a7"
                        >
                          'Shreyas Katalkar'
                        </span>
                        ,
                      </span>
                    </div>
                    <div
                      className="flex gap-4"
                      data-id="2b23112a-99c6-5f16-b278-baab15b4a42a"
                    >
                      <span
                        className="select-none text-[#9f9fa9]"
                        data-id="aa947e2f-8737-52e7-afeb-ccf256807c55"
                      >
                        3
                      </span>
                      <span
                        className="pl-4"
                        data-id="fdb53705-f2e8-5672-aea8-0a965f9003d2"
                      >
                        <span
                          style={{ color: "oklch(0.769 0.188 70.08)" }}
                          data-id="2bea4396-5426-5cdb-ba6a-6075dc077dd5"
                        >
                          role
                        </span>
                        :
                        <span
                          style={{ color: "oklch(0.645 0.246 16.439)" }}
                          data-id="af5f9026-dd8c-5ca7-9253-574177944af2"
                        >
                          'Fullstack Dev'
                        </span>
                        ,
                      </span>
                    </div>
                    <div
                      className="flex gap-4"
                      data-id="be3aea34-e63f-5170-b087-be0d77a6f1c9"
                    >
                      <span
                        className="select-none text-[#9f9fa9]"
                        data-id="ffdf0e79-e831-543e-a88a-dde4ce99e723"
                      >
                        4
                      </span>
                      <span
                        className="pl-4"
                        data-id="9c6e851c-1f8b-5b7d-805b-47d301b9979d"
                      >
                        <span
                          style={{ color: "oklch(0.769 0.188 70.08)" }}
                          data-id="65a2d977-3a2e-565e-a3ec-84f61001abef"
                        >
                          location
                        </span>
                        :
                        <span
                          style={{ color: "oklch(0.645 0.246 16.439)" }}
                          data-id="1314fc90-5cce-5e62-ba28-28998a85da0c"
                        >
                          'Pune, IN'
                        </span>
                        ,
                      </span>
                    </div>
                    <div
                      className="flex gap-4"
                      data-id="38f122dc-dde8-5e79-8107-34cb83743f6c"
                    >
                      <span
                        className="select-none text-[#9f9fa9]"
                        data-id="d2f6a49b-efd6-572e-bf10-b755686af8aa"
                      >
                        5
                      </span>
                      <span
                        className="pl-4"
                        data-id="d38550cb-afc7-52e3-9531-91e3d61815a6"
                      >
                        <span
                          style={{ color: "oklch(0.769 0.188 70.08)" }}
                          data-id="0cacc7a4-08e0-5ef3-9148-b1cb22d9281e"
                        >
                          stack
                        </span>
                        : [
                        <span
                          style={{ color: "oklch(0.645 0.246 16.439)" }}
                          data-id="a45fc26f-5d2e-5346-95ea-f608b2aec673"
                        >
                          'React'
                        </span>
                        ,
                        <span
                          style={{ color: "oklch(0.645 0.246 16.439)" }}
                          data-id="83de3bd1-78c0-5ce9-9902-0e6090c62ef0"
                        >
                          'Node'
                        </span>
                        ],
                      </span>
                    </div>
                    <div
                      className="flex gap-4"
                      data-id="624fc15f-d44f-568e-99e4-b6d53000ca6e"
                    >
                      <span
                        className="select-none text-[#9f9fa9]"
                        data-id="ed50710a-ee6e-5bad-9a81-61678c044b12"
                      >
                        6
                      </span>
                      <span
                        className="pl-4"
                        data-id="c0570d1e-d7eb-563c-aa10-70d1e943f6e1"
                      >
                        <span
                          style={{ color: "oklch(0.769 0.188 70.08)" }}
                          data-id="b4904b2d-e6e0-514b-9a8e-d55124dc51e4"
                        >
                          available
                        </span>
                        :
                        <span
                          style={{ color: "oklch(0.627 0.265 303.9)" }}
                          data-id="0e5cfbcf-8ba2-5d6d-b9ec-afdc97fb8848"
                        >
                          true
                        </span>
                        <span
                          className="inline-block align-middle ml-0.5 w-2 h-4"
                          style={{ background: "oklch(0.985 0 0)" }}
                          data-id="33c6b333-ed03-5c10-a7ea-590002359352"
                        />
                      </span>
                    </div>
                    <div
                      className="flex gap-4"
                      data-id="d010fe80-b27e-53fb-a7ed-f4df4fb66285"
                    >
                      <span
                        className="select-none text-[#9f9fa9]"
                        data-id="f6dab685-8b13-5998-aa1e-5f324a5270cc"
                      >
                        7
                      </span>
                      <span data-id="e7e0c43e-8eba-522a-bbb6-0ffcc0091c37">
                        {`}`};
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="grid grid-cols-2 gap-4"
                data-id="9b970ceb-9d3c-5307-9486-debd85a9d422"
              >
                <div
                  className="backdrop-blur-xl rounded-2xl border-white/10 border border-solid flex p-4 items-center gap-3"
                  style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                  data-id="e0f35266-fee8-5440-b343-7cc748b8192e"
                >
                  <div
                    className="size-10 rounded-xl flex justify-center items-center"
                    style={{ background: "oklch(0.541 0.281 293.009 / 0.2)" }}
                    data-id="30b13d89-7e6a-57aa-a143-9048ced951fc"
                  >
                    <MapPin
                      className="size-5 text-[#7f22fe]"
                      data-id="8ff97f8b-7169-56a0-a521-3d277c59a298"
                    />
                  </div>
                  <div
                    className="flex flex-col"
                    data-id="2030ffdc-2835-5a99-91fd-e4e627bef8e9"
                  >
                    <span
                      className="text-[#9f9fa9] text-xs leading-4"
                      data-id="8b9b0630-62a1-5cf2-b407-fcdb18227633"
                    >
                      Based in
                    </span>
                    <span
                      className="font-medium text-sm leading-5"
                      data-id="a2f16961-d100-524d-8c78-9cd006c6ea7b"
                    >
                      Pune, India
                    </span>
                  </div>
                </div>
                <div
                  className="backdrop-blur-xl rounded-2xl border-white/10 border border-solid flex p-4 items-center gap-3"
                  style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                  data-id="1944816a-d425-5e6a-bb0a-c0836f976491"
                >
                  <div
                    className="size-10 rounded-xl flex justify-center items-center"
                    style={{ background: "oklch(0.696 0.17 162.48 / 0.2)" }}
                    data-id="9afc33a6-61cd-5d1f-943f-84c206173500"
                  >
                    <Briefcase
                      className="size-5"
                      style={{ color: "oklch(0.696 0.17 162.48)" }}
                      data-id="79dc7f66-75f5-50a1-b046-88092319c597"
                    />
                  </div>
                  <div
                    className="flex flex-col"
                    data-id="be916f83-b4d7-57f4-bbda-bc70a762f238"
                  >
                    <span
                      className="text-[#9f9fa9] text-xs leading-4"
                      data-id="88aa33e9-6564-501f-9ef2-7567ec4b7ed9"
                    >
                      Status
                    </span>
                    <span
                      className="font-medium text-sm leading-5"
                      data-id="50c44553-47ee-5d20-b241-bedf1ac21d9c"
                    >
                      Open to work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="mt-12"
            data-id="0c8861f1-4d40-532f-91e4-2c065c025a39"
          >
            <div
              className="flex mb-6 justify-between items-end"
              data-id="f5beaf2f-37a3-5496-9adc-66c2485599c8"
            >
              <div
                className="flex flex-col gap-2"
                data-id="b15dd9f7-6973-5115-a07d-3ef1663bd608"
              >
                <span
                  className="font-mono uppercase text-[#7f22fe] text-xs leading-4 tracking-widest"
                  data-id="47318794-c03b-5b8d-8ede-de1d39e4c7e2"
                >
                  // tech stack
                </span>
                <h3
                  className="font-bold text-2xl leading-8"
                  data-id="93a29554-06bf-511b-a246-9bc04db6af76"
                >
                  Tools I work with
                </h3>
              </div>
              <a
                className="text-[#9f9fa9] text-sm leading-5 flex items-center gap-1"
                data-id="48246c6a-3b59-5198-a4f0-1f536e36acc7"
              >
                View all skills
                <ArrowUpRight
                  className="size-4"
                  data-id="c6088ff1-b98f-5fbe-9c36-121366147cb2"
                />
              </a>
            </div>
            <div
              className="grid grid-cols-6 gap-4"
              data-id="acab27dd-0276-537f-a03f-65eaa0311054"
            >
              <div
                className="backdrop-blur-xl transition-all rounded-2xl border-white/10 border border-solid flex p-4 flex-col items-center gap-2"
                style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                data-id="676d0c44-40c9-59b7-bf1d-7bd20d0e5d61"
              >
                <Atom
                  className="size-7"
                  style={{ color: "oklch(0.696 0.17 162.48)" }}
                  data-id="8dad0617-27d2-5602-b7af-d61ef378741c"
                />
                <span
                  className="font-medium text-xs leading-4"
                  data-id="02bf5381-a8ab-56dc-b599-a747de7112e8"
                >
                  React
                </span>
              </div>
              <div
                className="backdrop-blur-xl rounded-2xl border-white/10 border border-solid flex p-4 flex-col items-center gap-2"
                style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                data-id="10c797a5-710a-5ed1-b770-8937bee511ea"
              >
                <Triangle
                  className="size-7"
                  style={{ color: "oklch(0.985 0 0)" }}
                  data-id="4b589ba5-0753-51b0-b138-3ed33a1a99e9"
                />
                <span
                  className="font-medium text-xs leading-4"
                  data-id="24c52975-6690-5e29-acee-e07dff546278"
                >
                  Next.js
                </span>
              </div>
              <div
                className="backdrop-blur-xl rounded-2xl border-white/10 border border-solid flex p-4 flex-col items-center gap-2"
                style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                data-id="a153c189-95ac-55ac-bd13-e704b9d98bb7"
              >
                <FileType
                  className="size-7"
                  style={{ color: "oklch(0.488 0.243 264.376)" }}
                  data-id="36b43d57-7ef7-55e9-90b0-bc6f162fdf3e"
                />
                <span
                  className="font-medium text-xs leading-4"
                  data-id="8c727651-0bb4-56a8-9b7a-eacec839ed9c"
                >
                  TypeScript
                </span>
              </div>
              <div
                className="backdrop-blur-xl rounded-2xl border-white/10 border border-solid flex p-4 flex-col items-center gap-2"
                style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                data-id="5ac9adc2-5ae8-5f43-a4b2-6772249e444f"
              >
                <Wind
                  className="size-7"
                  style={{ color: "oklch(0.696 0.17 162.48)" }}
                  data-id="c359d562-db5f-5fb1-a92c-3a543b42ae28"
                />
                <span
                  className="font-medium text-xs leading-4"
                  data-id="b19b4349-7d97-5ee1-afd1-84f32390069e"
                >
                  Tailwind
                </span>
              </div>
              <div
                className="backdrop-blur-xl rounded-2xl border-white/10 border border-solid flex p-4 flex-col items-center gap-2"
                style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                data-id="aca4cb21-0696-55e4-b40c-5e17aa6796e0"
              >
                <Server
                  className="size-7"
                  style={{ color: "oklch(0.769 0.188 70.08)" }}
                  data-id="66eac4cc-9f32-5e3b-9f29-d4aad5eaf92c"
                />
                <span
                  className="font-medium text-xs leading-4"
                  data-id="4f889f0e-d699-5ed9-8958-24469325f02c"
                >
                  Node.js
                </span>
              </div>
              <div
                className="backdrop-blur-xl rounded-2xl border-white/10 border border-solid flex p-4 flex-col items-center gap-2"
                style={{ background: "oklch(0.21 0.006 285.885 / 0.5)" }}
                data-id="09f7a6f7-8b81-5c0f-95ab-6eba383006be"
              >
                <Database
                  className="size-7"
                  style={{ color: "oklch(0.627 0.265 303.9)" }}
                  data-id="478da527-e110-5e93-8e3b-564bf6ebd33a"
                />
                <span
                  className="font-medium text-xs leading-4"
                  data-id="945812d5-90d4-5545-8fdf-ea9c21644208"
                >
                  MongoDB
                </span>
              </div>
            </div>
          </section>
          <section
            className="backdrop-blur-xl rounded-3xl border-white/10 border border-solid flex mt-12 p-6 justify-between items-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.541 0.281 293.009 / 0.15), oklch(0.21 0.006 285.885 / 0.5))",
            }}
            data-id="39c976d6-8a5e-5058-a1e9-757cccdbe550"
          >
            <div
              className="flex items-center gap-4"
              data-id="5d21f15d-262c-518c-94f1-66f73b8b6df3"
            >
              <div
                className="size-12 rounded-2xl flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.541 0.281 293.009), oklch(0.627 0.265 303.9))",
                }}
                data-id="b1c0748f-6ced-50a1-a76b-997c3d964194"
              >
                <Sparkles
                  className="size-6 text-violet-50"
                  data-id="ce9eb3fd-f798-5311-b082-1ffc9e28f136"
                />
              </div>
              <div
                className="flex flex-col"
                data-id="1007bf75-1894-584b-aae7-94a10f1a750b"
              >
                <span
                  className="font-semibold text-base leading-6"
                  data-id="8c98d7a0-31b4-5ecd-b54a-6194d97dccb3"
                >
                  Have a project in mind?
                </span>
                <span
                  className="text-[#9f9fa9] text-sm leading-5"
                  data-id="7a8fb3e9-c568-5954-a796-c15b6e300af9"
                >
                  Let's collaborate and build something great together.
                </span>
              </div>
            </div>
            <div
              className="flex items-center gap-3"
              data-id="8fcea22d-a053-5352-a5a9-0e228bd7997a"
            >
              <Button
                variant="ghost"
                className="rounded-full text-[#9f9fa9] gap-2"
                data-id="b7c0f1d1-b519-5f6c-82a7-ddf44d8c2fd2"
              >
                <Mail
                  className="size-4"
                  data-id="1994d4dd-4085-5f4d-8ced-7fc647a7381e"
                />
                katalkarshreyas@gmail.com
              </Button>
              <Button
                className="rounded-full text-violet-50 px-6 gap-2"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.541 0.281 293.009), oklch(0.627 0.265 303.9))",
                }}
                data-id="a6409d22-eed8-52fa-a42b-c14dd669f6d0"
              >
                Get in touch
                <ArrowRight
                  className="size-4"
                  data-id="8fb7f15b-3aa4-573f-9edc-391f7918d583"
                />
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
