import {
  ArrowRight,
  ArrowUp,
  ChevronDown,
  GitBranch,
  Globe,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FallbackComponent } from "./CustomComponents";

export function Footer() {
  return (
    <div
              className="relative border-white/10 border-1 border-solid overflow-hidden"
              style={{ background: "oklch(0.141 0.005 285.823)" }}
              data-id="05e446d2-0db5-5ad1-8ab3-6f10fbb9e349"
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 15% 20%, oklch(0.541 0.281 293.009 / 0.18), transparent 45%), radial-gradient(circle at 85% 80%, oklch(0.627 0.265 303.9 / 0.15), transparent 50%)",
                }}
                data-id="1816cc3e-0eac-5567-b3e8-0abad54e39c1"
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
                data-id="bf71e314-e3a6-55ac-8c3a-60b84c809281"
              />
              <div
                className="relative z-10 px-10 pt-10 pb-6"
                data-id="3f412dca-851a-5b80-97cd-e101efdd5aaa"
              >
                <div
                  className="grid grid-cols-12 pb-8 gap-8"
                  data-id="587f84c9-46ee-511a-8f1d-a976fabd2e1e"
                >
                  <div
                    className="col-span-4 flex flex-col gap-4"
                    data-id="e36000c7-a22f-5c8a-b059-fe73f0409956"
                  >
                    <div
                      className="flex items-center gap-2"
                      data-id="2dcbd117-68c0-5ffc-b061-5c45ea35b42f"
                    >
                      <div
                        className="size-9 font-mono font-bold rounded-xl text-sm leading-5 flex justify-center items-center"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.541 0.281 293.009), oklch(0.627 0.265 303.9))",
                          boxShadow:
                            "0 0 20px oklch(0.541 0.281 293.009 / 0.4)",
                          color: "oklch(0.969 0.016 293.756)",
                        }}
                        data-id="a19c5a9c-eab6-5af9-9735-5bdb4455d850"
                      >
                        SK
                      </div>
                      <span
                        className="font-mono text-sm leading-5"
                        style={{ color: "oklch(0.985 0 0)" }}
                        data-id="91d7c709-3758-5e84-a4e2-acfae8e1edad"
                      >
                        shreyas.dev
                      </span>
                    </div>
                    <p
                      className="leading-relaxed text-sm leading-5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="a4d2b874-71f0-5df5-be04-ea44bb6b8af4"
                    >
                      Crafting thoughtful digital experiences with code, design,
                      and a healthy obsession for detail.
                    </p>
                    <div
                      className="rounded-2xl border-black/1 border-1 border-solid flex p-4 flex-col gap-3"
                      style={{
                        backdropFilter: "blur(12px)",
                        background: "oklch(0.21 0.006 285.885 / 0.6)",
                        borderColor: "oklch(1 0 0 / 0.1)",
                      }}
                      data-id="848a3aaf-0927-5bb8-8ac1-21e5e2368bb6"
                    >
                      <div
                        className="flex items-center gap-2"
                        data-id="e3b6ee60-8c68-59e9-9780-260a5ebdf61c"
                      >
                        <Mail
                          className="size-4"
                          style={{ color: "oklch(0.769 0.6 293.009)" }}
                          data-id="6ad0e813-faac-5aa4-b51b-2bb16a2d8bca"
                        />
                        <span
                          className="font-mono uppercase text-[10px] tracking-widest"
                          style={{ color: "oklch(0.705 0.015 286.067)" }}
                          data-id="d33c318a-b7c0-5af2-ba41-2439d5546917"
                        >
                          Newsletter
                        </span>
                      </div>
                      <p
                        className="text-xs leading-4"
                        style={{ color: "oklch(0.985 0 0)" }}
                        data-id="1d144e41-f494-546a-a0a9-b1c9fb93fa08"
                      >
                        Monthly notes on design, dev, and side-quests.
                      </p>
                      <div
                        className="flex items-center gap-2"
                        data-id="e928c8cc-a4c8-568f-9545-79d6aec66c8a"
                      >
                        <Input
                          className="rounded-xl text-xs leading-4 flex-1 h-9"
                          placeholder="you@email.com"
                          style={{
                            background: "oklch(0.141 0.005 285.823 / 0.6)",
                            borderColor: "oklch(1 0 0 / 0.15)",
                            color: "oklch(0.985 0 0)",
                          }}
                          data-id="cace140c-274f-5c77-8e4f-cffe7b348088"
                        />
                        <Button
                          className="rounded-xl text-xs leading-4 px-4 gap-1.5 h-9"
                          size="sm"
                          style={{
                            background:
                              "linear-gradient(135deg, oklch(0.541 0.281 293.009), oklch(0.627 0.265 303.9))",
                            boxShadow:
                              "0 4px 12px oklch(0.541 0.281 293.009 / 0.4)",
                            color: "oklch(0.969 0.016 293.756)",
                          }}
                          data-id="964b15af-95c3-5cf5-946c-927ba10a91d7"
                        >
                          Subscribe
                          <ArrowRight
                            className="size-3"
                            data-id="9101f4b9-14ea-59fe-ba9e-80d6731ec6e9"
                          />
                        </Button>
                      </div>
                      <div
                        className="flex items-center gap-2"
                        data-id="f45ab71d-997b-532c-94a0-467cc989d816"
                      >
                        <ShieldCheck
                          className="size-3"
                          style={{ color: "oklch(0.696 0.17 162.48)" }}
                          data-id="15abe54a-00e1-5d45-83e7-8b57844486cf"
                        />
                        <span
                          className="font-mono text-[10px]"
                          style={{ color: "oklch(0.705 0.015 286.067)" }}
                          data-id="c9b1fc9c-ff75-57ce-a2ea-64825c6d612a"
                        >
                          No spam · Unsubscribe anytime
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-span-2 flex flex-col gap-3"
                    data-id="8b26544c-21dd-5fee-9db4-a76c4d18cd0e"
                  >
                    <span
                      className="font-mono uppercase text-[10px] tracking-widest"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="dd2ac7f1-e08d-5b97-a824-0de83f903a0e"
                    >
                      Product
                    </span>
                    <a
                      className="text-sm leading-5"
                      style={{ color: "oklch(0.985 0 0)" }}
                      data-id="155cff2d-2512-519e-a529-6c52b9e6df26"
                    >
                      Components
                    </a>
                    <a
                      className="text-sm leading-5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="e1640caf-31a9-5113-832c-6523b80025ef"
                    >
                      Templates
                    </a>
                    <a
                      className="text-sm leading-5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="97fc0a21-ab2d-51f5-8677-3fee2296204c"
                    >
                      Pricing
                    </a>
                    <a
                      className="text-sm leading-5 flex items-center gap-1.5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="5c2cebdb-97c5-5c07-8984-0fb09af4d5e5"
                    >
                      Changelog
                      <Badge
                        className="font-mono text-[9px] px-1.5 h-4"
                        style={{
                          background: "oklch(0.541 0.281 293.009 / 0.15)",
                          border: "1px solid oklch(0.541 0.281 293.009 / 0.4)",
                          color: "oklch(0.769 0.6 293.009)",
                        }}
                        data-id="f17c2bfd-2b4d-5fd9-9fe9-1717b0a13a9f"
                      >
                        NEW
                      </Badge>
                    </a>
                  </div>
                  <div
                    className="col-span-2 flex flex-col gap-3"
                    data-id="1d3c7f31-e340-594a-98c5-992d675519e0"
                  >
                    <span
                      className="font-mono uppercase text-[10px] tracking-widest"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="7f5cdd46-cf3d-5b7a-a055-3f88816bd9e9"
                    >
                      Company
                    </span>
                    <a
                      className="text-sm leading-5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="cc9fd8ce-0b84-5281-973f-67998c5d5185"
                    >
                      About
                    </a>
                    <a
                      className="text-sm leading-5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="a62ad35d-19b4-5b0c-b070-793ed8530e9a"
                    >
                      Blog
                    </a>
                    <a
                      className="text-sm leading-5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="9f87753a-12f0-58ad-9d21-eb55e97ff252"
                    >
                      Careers
                    </a>
                    <a
                      className="text-sm leading-5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="a9aea1ff-7594-5124-ae36-9d54239cd097"
                    >
                      Contact
                    </a>
                  </div>
                  <div
                    className="col-span-2 flex flex-col gap-3"
                    data-id="314bd565-cdc1-501b-a042-d0e871346ab1"
                  >
                    <span
                      className="font-mono uppercase text-[10px] tracking-widest"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="b7f450cc-e138-58a8-8605-fba28a993479"
                    >
                      Resources
                    </span>
                    <a
                      className="text-sm leading-5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="1a796441-9317-51fd-b353-2ccfd4411254"
                    >
                      Documentation
                    </a>
                    <a
                      className="text-sm leading-5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="e8aabdef-1293-56f6-a42c-73212820bd96"
                    >
                      Guides
                    </a>
                    <a
                      className="text-sm leading-5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="03ab4703-228a-5755-bd6b-97a5251c9d64"
                    >
                      API Reference
                    </a>
                    <a
                      className="text-sm leading-5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="d0efa949-3e8a-57fc-855e-42ef0664056c"
                    >
                      Support
                    </a>
                  </div>
                  <div
                    className="col-span-2 flex flex-col gap-3"
                    data-id="029eb26a-557d-5a01-b599-c84b2c6f347d"
                  >
                    <span
                      className="font-mono uppercase text-[10px] tracking-widest"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="3e98ad7c-e92c-57fb-bfbc-a0099caaa3d0"
                    >
                      Legal
                    </span>
                    <a
                      className="text-sm leading-5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="3c3844eb-6610-5ae7-a5ce-10c3c39ad3e8"
                    >
                      Privacy
                    </a>
                    <a
                      className="text-sm leading-5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="3c177335-09be-57e6-b69b-499884edd57d"
                    >
                      Terms
                    </a>
                    <a
                      className="text-sm leading-5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="94db17e7-675a-5290-8ce2-e573e3fb9f2a"
                    >
                      Cookies
                    </a>
                    <a
                      className="text-sm leading-5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="ed24a27a-018f-5875-92a4-2f1ece379b45"
                    >
                      License
                    </a>
                  </div>
                </div>
                <div
                  className="border-black/1 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex pt-6 justify-between items-center gap-4"
                  style={{ borderColor: "oklch(1 0 0 / 0.1)" }}
                  data-id="7d28594a-623b-5703-8d86-11b40c36af8b"
                >
                  <div
                    className="flex items-center gap-3"
                    data-id="e7fb69ea-fd12-5298-82db-feec4a0de2b1"
                  >
                    <span
                      className="font-mono text-xs leading-4"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="7dd88c2c-49b3-5513-b876-434d6067b196"
                    >
                      © 2024 Shreyas Katalkar
                    </span>
                    <span
                      className="size-1 rounded-full"
                      style={{ background: "oklch(0.705 0.015 286.067)" }}
                      data-id="76f11f63-670a-5621-b26b-d4c4cf8c4049"
                    />
                    <div
                      className="flex items-center gap-1.5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="1c9607fd-5c8e-5808-a383-1808cc3c017a"
                    >
                      <span
                        className="relative size-2 flex"
                        data-id="f0df086b-32a6-5567-b728-c7bd04d85172"
                      >
                        <span
                          className="inline-flex animate-ping opacity-75 rounded-full absolute w-full h-full"
                          style={{ background: "oklch(0.696 0.17 162.48)" }}
                          data-id="14056dd8-2c2c-5bfe-b2ec-6c1255ca3913"
                        />
                        <span
                          className="relative inline-flex size-2 rounded-full"
                          style={{
                            background: "oklch(0.696 0.17 162.48)",
                            boxShadow: "0 0 8px oklch(0.696 0.17 162.48)",
                          }}
                          data-id="51b47e86-6d8e-5bb4-844a-4b39c62f2b72"
                        />
                      </span>
                      <span
                        className="font-mono text-xs leading-4"
                        data-id="ae05519a-5047-54b3-ae5e-fcf645adc3b5"
                      >
                        All systems operational
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-2"
                    data-id="dc72f1d2-b81a-587b-9adb-7d0811a7f455"
                  >
                    <a
                      className="size-9 rounded-xl border-black/1 border-1 border-solid flex justify-center items-center"
                      style={{
                        background: "oklch(0.21 0.006 285.885 / 0.5)",
                        borderColor: "oklch(1 0 0 / 0.1)",
                      }}
                      data-id="f8291a3d-362b-54fa-ae49-73ea98b87a87"
                    >
                      <FallbackComponent
                        className="size-4"
                        style={{ color: "oklch(0.985 0 0)" }}
                        data-id="a5c9746b-2e30-50a6-9f12-860703801d83"
                      />
                    </a>
                    <a
                      className="size-9 rounded-xl border-black/1 border-1 border-solid flex justify-center items-center"
                      style={{
                        background: "oklch(0.21 0.006 285.885 / 0.5)",
                        borderColor: "oklch(1 0 0 / 0.1)",
                      }}
                      data-id="88cb9385-833a-50d0-9f45-7c11718ae8b5"
                    >
                      <FallbackComponent
                        className="size-4"
                        style={{ color: "oklch(0.985 0 0)" }}
                        data-id="bbd88517-aa02-56af-a2d4-5435e1b08577"
                      />
                    </a>
                    <a
                      className="size-9 rounded-xl border-black/1 border-1 border-solid flex justify-center items-center"
                      style={{
                        background: "oklch(0.21 0.006 285.885 / 0.5)",
                        borderColor: "oklch(1 0 0 / 0.1)",
                      }}
                      data-id="ccdeac15-d509-588a-8bf4-6d90458945ab"
                    >
                      <FallbackComponent
                        className="size-4"
                        style={{ color: "oklch(0.985 0 0)" }}
                        data-id="df2b3ef5-fcf8-5d26-b2b4-922c18705227"
                      />
                    </a>
                    <a
                      className="size-9 rounded-xl border-black/1 border-1 border-solid flex justify-center items-center"
                      style={{
                        background: "oklch(0.21 0.006 285.885 / 0.5)",
                        borderColor: "oklch(1 0 0 / 0.1)",
                      }}
                      data-id="8761a1f9-118c-5b8b-987b-1f9bbca38e2e"
                    >
                      <FallbackComponent
                        className="size-4"
                        style={{ color: "oklch(0.985 0 0)" }}
                        data-id="03229ae8-58b3-5ce8-ae76-46d46bec27d7"
                      />
                    </a>
                    <a
                      className="size-9 rounded-xl border-black/1 border-1 border-solid flex justify-center items-center"
                      style={{
                        background: "oklch(0.21 0.006 285.885 / 0.5)",
                        borderColor: "oklch(1 0 0 / 0.1)",
                      }}
                      data-id="a1cd2e81-0f7e-504f-9736-62ab09fdf9a4"
                    >
                      <FallbackComponent
                        className="size-4"
                        style={{ color: "oklch(0.985 0 0)" }}
                        data-id="e9d83c0c-a0e7-58f8-9220-da4cd610328b"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="flex pt-4 justify-between items-center gap-4"
                  data-id="00559cd4-765b-5f31-b96c-96a18ea294c6"
                >
                  <div
                    className="flex items-center gap-3"
                    data-id="786a04d9-e9dd-5bc9-abba-a56b5ffb356a"
                  >
                    <div
                      className="rounded-full border-black/1 border-1 border-solid flex px-3 py-1.5 items-center gap-2"
                      style={{
                        background: "oklch(0.21 0.006 285.885 / 0.5)",
                        borderColor: "oklch(1 0 0 / 0.1)",
                      }}
                      data-id="d1d8c742-4668-5466-bf72-ff52c659babb"
                    >
                      <Globe
                        className="size-3"
                        style={{ color: "oklch(0.705 0.015 286.067)" }}
                        data-id="e751c522-ce3c-588b-823f-e381ecda488e"
                      />
                      <span
                        className="font-mono text-[10px]"
                        style={{ color: "oklch(0.985 0 0)" }}
                        data-id="7ebe60f5-745c-5c7f-bfd3-653ddf7f2b58"
                      >
                        English (US)
                      </span>
                      <ChevronDown
                        className="size-3"
                        style={{ color: "oklch(0.705 0.015 286.067)" }}
                        data-id="e3a5838f-7254-5e25-902f-f7aacc47562e"
                      />
                    </div>
                    <span
                      className="font-mono text-[10px] flex items-center gap-1.5"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="b64a8198-4049-597f-9986-06f5ca567c6d"
                    >
                      <GitBranch
                        className="size-3"
                        data-id="385fa4b5-077c-5a51-85af-a07e7c906200"
                      />
                      main · v2.4.1
                    </span>
                    <span
                      className="font-mono text-[10px]"
                      style={{ color: "oklch(0.705 0.015 286.067)" }}
                      data-id="b22f6efe-3695-51b1-9954-af41c9db6c80"
                    >
                      Built with Next.js + Tailwind
                    </span>
                  </div>
                  <a
                    className="font-mono text-xs leading-4 flex items-center gap-1.5"
                    style={{ color: "oklch(0.985 0 0)" }}
                    data-id="8b83d749-5d7b-5b0d-bbe7-b9c5d28b7afb"
                  >
                    Back to top
                    <ArrowUp
                      className="size-3"
                      data-id="76fb8fcf-9065-5bed-8c1d-cd0e42508512"
                    />
                  </a>
                </div>
              </div>
            </div>
  );
}
