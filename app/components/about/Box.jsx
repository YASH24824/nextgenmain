import group236 from "../../assets/236.png";
import group237 from "../../assets/237.png";
import group238 from "../../assets/238.png";
import group239 from "../../assets/239.png";
import group244 from "../../assets/244.png";
// import image from "./image.svg";
import vector2 from "../../assets/Vector.svg";

import Image from "next/image";

const Box = () => {
  return (
    <div className="relative w-full h-[1239px] py-20">
      <div className=" max-w-7xl mx-auto">
        <div className="absolute w-[609px] top-0 left-[334px] [font-family:'Be_Vietnam_Pro-SemiBold',Helvetica] font-semibold text-[#05325f] text-[44.7px] tracking-[0] leading-[normal]">
          Achieving Business Growth
        </div>

        <div className="absolute w-[1404px] h-[1123px] top-[116px] py-20">
          <div className="absolute w-[1408px] h-[1031px] top-[92px] mx-auto left-0">
            <Image
              className="absolute w-[111px] h-28 top-[472px] left-[994px]"
              width={111}
              height={114}
              alt="Vector"
              src={vector2}
            />

            <div className="absolute w-[362px] h-[142px] top-0 left-[1046px]">
              <div className="absolute w-[311px] top-0 left-0 [font-family:'Be_Vietnam_Pro-Bold',Helvetica] font-bold text-[#05325f] text-[26.8px] tracking-[0] leading-[normal]">
                We Amplify the Impact
              </div>

              <p className="absolute w-[358px] top-[43px] left-0 [font-family:'Be_Vietnam_Pro-Regular',Helvetica] font-normal text-[#46484f] text-[17.9px] tracking-[0] leading-[normal]">
                Marketing aur growth strategies jo sirf dikhaye nahi — market
                mein raj karein. <br />
                Aapka brand banega recognizable aur unstoppable.
              </p>
            </div>

            <div className="absolute w-[328px] h-[134px] top-[154px] left-[687px]">
              <div className="absolute w-[250px] top-0 left-0 [font-family:'Be_Vietnam_Pro-Bold',Helvetica] font-bold text-[#05325f] text-[26.8px] tracking-[0] leading-[normal]">
                We Fuel the Fire
              </div>

              <p className="absolute w-[324px] top-[43px] left-0 [font-family:'Be_Vietnam_Pro-Regular',Helvetica] font-normal text-[#46484f] text-[17.9px] tracking-[0] leading-[normal]">
                Funding, mentorship, resources — sab under one roof. <br />
                Aapki ambition ko growth mein badalna is our mission.
              </p>
            </div>

            <div className="absolute w-[304px] h-[135px] top-[299px] left-[357px]">
              <div className="absolute w-[269px] top-0 left-0 [font-family:'Be_Vietnam_Pro-Bold',Helvetica] font-bold text-[#05325f] text-[26.8px] tracking-[0] leading-[normal]">
                We Build the Base
              </div>

              <p className="absolute w-[300px] top-[42px] left-0 [font-family:'Be_Vietnam_Pro-Regular',Helvetica] font-normal text-[#46484f] text-[17.9px] tracking-[0] leading-[normal]">
                Registration, compliance, licenses — sab kuch sorted. <br />
                Foundation banate hain jo aapko scale kare, not struggle.
              </p>
            </div>

            <div className="absolute w-[274px] h-[129px] top-[448px] left-0">
              <div className="absolute w-[260px] top-0 left-0 [font-family:'Be_Vietnam_Pro-Bold',Helvetica] font-bold text-[#05325f] text-[26.8px] tracking-[0] leading-[normal]">
                We Listen First
              </div>

              <p className="absolute w-[270px] top-[41px] left-0 [font-family:'Be_Vietnam_Pro-Regular',Helvetica] font-normal text-[#46484f] text-[17.9px] tracking-[0] leading-[normal]">
                Great story shuru hoti hai ek step se — samajhna aur sunna.{" "}
                <br />
                We align with your vision, struggles, and dreams.
              </p>
            </div>

            <Image
              className="absolute w-28 h-[114px] top-[471px] left-[993px]"
              width={1245}
              height={114}
              alt="Vector"
              src={vector2}
            />

            <Image
              className="absolute w-[1245px] h-[890px] top-[141px] left-10"
              width={1245}
              height={114}
              alt="Group"
              src={group244}
            />

            <Image
              className="absolute w-[101px] h-[81px] top-[356px] left-0"
              width={1245}
              height={114}
              alt="Group"
              src={group236}
            />

            <Image
              className="absolute w-[101px] h-[81px] top-[62px] left-[687px]"
              width={1245}
              height={114}
              alt="Group"
              src={group238}
            />

            <Image
              className="absolute w-[101px] h-[81px] top-[207px] left-[357px]"
              width={1245}
              height={114}
              alt="Group"
              src={group237}
            />
          </div>

          <Image
            className="absolute w-[101px] h-[81px] top-0 left-[1046px]"
            width={1245}
            height={114}
            alt="Group"
            src={group239}
          />
        </div>
      </div>
    </div>
  );
};

export default Box;
