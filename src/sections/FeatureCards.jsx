import { abilities } from "../constants";
import { useLanguage } from "../context/LanguageContext";

const FeatureCards = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map((item, index) => {
          const localized = t.abilities[index] || item;

          return (
            <div
              key={index}
              className="card-border rounded-xl p-8 flex flex-col gap-4"
            >
              <div className="size-14 flex items-center justify-center rounded-full">
                <img src={item.imgPath} alt={localized.title} />
              </div>
              <h3 className="text-white text-2xl font-semibold mt-2">
                {localized.title}
              </h3>
              <p className="text-white-50 text-lg">{localized.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;