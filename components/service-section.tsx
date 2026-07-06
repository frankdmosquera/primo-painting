import React from "react";
import ButtonBlue from "./ButtonBlue";
import ButtonBlueWithBorder from "./ButtonBlueWithBorder";

interface ServiceSectionProps {
  title: string;
  description: string;
  buttonText: string;
  isButton?: boolean;
  href?: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  buttonText,
  href,
}) => {
  const descriptionLines = description.split("<br />");

  return (
    <div className="container max-w-7xl mx-auto px-4">
      <p className="text-[18px] text-black font-medium lg:text-[22px]">
        {title}
      </p>
      <div className="flex flex-col justify-between  md:flex-row">
        <h2 className="text-[#0D378D] text-[26px] font-semibold lg:text-[36px] uppercase ">
          {descriptionLines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < descriptionLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default ServiceSection;
