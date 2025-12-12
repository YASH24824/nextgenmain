// components/Timeline.tsx
"use client";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "The Spark",
    subtitle: "Sab kuch ek dream se shuru hota hai.",
    desc: "We help you shape your vision into bold, practical action.",
    icon: "https://c.animaapp.com/metmcazsfuMR7v/img/vector-7.svg",
    iconClass: "absolute w-[29px] h-[39px] top-[92px] left-[53px]",
    circleClass:
      "absolute top-[82px] left-[38px] w-[60px] h-[60px] rounded-[30px] border-[0.99px] border-[#6b728080] shadow-[0px_0.99px_9.87px_0.99px_#00000040] bg-[linear-gradient(180deg,rgba(46,90,168,1)_0%,rgba(58,128,193,1)_100%)]",
    titleClass:
      "absolute w-[155px] top-16 left-[135px] font-['Be_Vietnam_Pro'] font-semibold text-[#264c92] text-[28.6px] leading-normal text-center",
    subtitleClass:
      "absolute w-[323px] top-[101px] left-[135px] font-['Be_Vietnam'] font-medium text-black text-[17.8px] leading-normal",
    descClass:
      "absolute md:w-[1128px] top-32 left-[135px] font-['Be_Vietnam'] font-normal text-black text-[19.7px] leading-normal",
  },
  {
    id: 2,
    title: "The Structure",
    subtitle: "Legal, financial & regulatory setup sorted.",
    desc: "Aapko build karte hain scale ke liye, struggle ke liye nahi.",
    icon: "https://c.animaapp.com/metmcazsfuMR7v/img/vector-5.svg",
    iconClass: "absolute w-8 h-8 top-[297px] left-[53px]",
    circleClass:
      "absolute top-[284px] left-[38px] w-[60px] h-[60px] rounded-[30px] border-[0.99px] border-[#6b728080] shadow-[0px_0.99px_9.87px_0.99px_#00000040] bg-[linear-gradient(180deg,rgba(46,90,168,1)_0%,rgba(58,128,193,1)_100%)]",
    titleClass:
      "absolute w-52 top-[267px] left-[135px] font-['Be_Vietnam_Pro'] font-semibold text-[#264c92] text-[28.6px] leading-normal",
    subtitleClass:
      "absolute w-[376px] top-[304px] left-[135px] font-['Be_Vietnam'] font-medium text-black text-[17.8px] leading-normal",
    descClass:
      "absolute w-[1203px] top-[331px] left-[135px] font-['Be_Vietnam'] font-normal text-black text-[19.7px] leading-normal",
  },
  {
    id: 3,
    title: "The Lift",
    subtitle: "Pitch decks, fundraising, resources - all in place.",
    desc: "We connect you to the right investors, at the right time.",
    icon: "https://c.animaapp.com/metmcazsfuMR7v/img/vector-15.svg",
    iconClass: "absolute w-8 h-[34px] top-[479px] left-[53px]",
    circleClass:
      "absolute top-[469px] left-[38px] w-[60px] h-[60px] rounded-[30px] border-[0.99px] border-[#6b728080] shadow-[0px_0.99px_9.87px_0.99px_#00000040] bg-[linear-gradient(180deg,rgba(46,90,168,1)_0%,rgba(58,128,193,1)_100%)]",
    titleClass:
      "absolute w-[118px] top-[453px] left-[135px] font-['Be_Vietnam_Pro'] font-semibold text-[#264c92] text-[28.6px] leading-normal",
    subtitleClass:
      "absolute w-[466px] top-[490px] left-[135px] font-['Be_Vietnam'] font-medium text-black text-[17.8px] leading-normal",
    descClass:
      "absolute w-[1209px] top-[517px] left-[135px] font-['Be_Vietnam'] font-normal text-black text-[19.7px] leading-normal",
  },
  {
    id: 4,
    title: "The Push",
    subtitle: "Go-to-market strategies + digital presence.",
    desc: "Hum banate hain aapka brand jo market mein ghoome, chale, aur chale tez!",
    icon: "https://c.animaapp.com/metmcazsfuMR7v/img/group-3.png",
    iconClass: "absolute w-[30px] h-[30px] top-[665px] left-[53px]",
    circleClass:
      "absolute top-[650px] left-[38px] w-[60px] h-[60px] rounded-[30px] border-[0.99px] border-[#6b728080] shadow-[0px_0.99px_9.87px_0.99px_#00000040] bg-[linear-gradient(180deg,rgba(46,90,168,1)_0%,rgba(58,128,193,1)_100%)]",
    titleClass:
      "absolute w-[136px] top-[638px] left-[135px] font-['Be_Vietnam_Pro'] font-semibold text-[#264c92] text-[28.6px] leading-normal",
    subtitleClass:
      "absolute w-[548px] top-[675px] left-[135px] font-['Be_Vietnam'] font-medium text-black text-[17.8px] leading-normal",
    descClass:
      "absolute w-[1215px] top-[702px] left-[135px] font-['Be_Vietnam'] font-normal text-black text-[19.7px] leading-normal",
  },
  {
    id: 5,
    title: "The Motion",
    subtitle: "Startup sirf launch nahi hota: accelerate hota hai.",
    desc: "Aur hum ensure karte hai ki aapki momentum kabhi rukhe nahi.",
    icon: "https://c.animaapp.com/metmcazsfuMR7v/img/group-226.png",
    iconClass: "absolute w-[39px] h-[37px] top-[848px] left-[47px]",
    circleClass:
      "absolute top-[836px] left-[37px] w-[60px] h-[60px] rounded-[30px] border-[0.99px] border-[#6b728080] shadow-[0px_0.99px_9.87px_0.99px_#00000040] bg-[linear-gradient(180deg,rgba(46,90,168,1)_0%,rgba(58,128,193,1)_100%)]",
    titleClass:
      "absolute w-[169px] top-[824px] left-[135px] font-['Be_Vietnam_Pro'] font-semibold text-[#264c92] text-[28.6px] leading-normal",
    subtitleClass:
      "absolute w-[437px] top-[861px] left-[135px] font-['Be_Vietnam'] font-medium text-black text-[17.8px] leading-normal",
    descClass:
      "absolute w-[1012px] top-[888px] left-[135px] font-['Be_Vietnam'] font-normal text-black text-[19.7px] leading-normal",
  },
];

export default function Timeline() {
  return (
    <section className="w-full bg-[linear-gradient(180deg,rgba(232,244,255,1)_0%,rgba(232,244,255,1)_100%)] py-20 px-0">
      <div className="mx-auto relative">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="max-w-7xl mx-auto  font-semibold text-[#05325f] text-[30px] md:text-[47.5px] leading-normal">
            From Spark to Motion — The Next-Gen Way:
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="relative  mx-auto h-[1000px]">
            {/* Background rectangles */}
            <Image
              height={164}
              width={1403}
              className="absolute md:w-full h-[164px] top-[40px] left-0 object-cover md:object-fill "
              src="https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-95.svg"
              alt=""
            />
            <Image
              height={164}
              width={1403}
              className="absolute w-full h-[164px] top-[233px] left-0"
              src="https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-108.svg"
              alt=""
            />
            <Image
              height={164}
              width={1403}
              className="absolute w-full h-[164px] top-[419px] left-0"
              src="https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-109.svg"
              alt=""
            />
            <Image
              height={164}
              width={1403}
              className="absolute w-full h-[164px] top-[605px] left-0"
              src="https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-110.svg"
              alt=""
            />
            <Image
              height={164}
              width={1403}
              className="absolute w-full h-[164px] top-[780px] left-[3px]"
              src="https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-113.svg"
              alt=""
            />

            {/* Vertical line */}
            <Image
              height={164}
              width={1403}
              className="absolute w-3.5 h-[970px] top-0 left-[62px]"
              src="https://c.animaapp.com/metmcazsfuMR7v/img/line-14.svg"
              alt=""
            />

            {/* Timeline Items */}
            {steps.map((step) => (
              <div key={step.id} className="">
                <div className={step.circleClass} />
                <Image
                  height={164}
                  width={1403}
                  src={step.icon}
                  alt={step.title}
                  className={step.iconClass}
                />
                <h3 className={step.titleClass}>{step.title}</h3>
                <p className={step.subtitleClass}>{step.subtitle}</p>
                <p className={step.descClass}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
