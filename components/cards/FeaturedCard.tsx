import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-box-bg border border-box-border rounded-2xl p-4 md:p-6 shadow-lg shadow-box-shadow text-heading-3 w-full">
      <div className="flex flex-col items-start gap-4">
        <Icon className="text-4xl " />
        <h3 className="text-lg font-semibold text-primary ">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
