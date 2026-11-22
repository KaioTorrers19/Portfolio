import React from "react";
import { counterItems } from "../constants/index";
import CountUp from "react-countup";
import { useLanguage } from "../context/LanguageContext";

const AnimatedCounter = () => {
  const { t } = useLanguage();

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => {
          const localized = t.counters?.[index] || item;

          return (
            <div
              key={index}
              className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
            >
              <div className="counter-number text-white text-5xl font-bold mb-2">
                <CountUp suffix={item.suffix} end={item.value} />
              </div>
              <div className="text-white-50 text-lg">{localized.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCounter;