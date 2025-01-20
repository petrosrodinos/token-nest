import { FC } from "react";

interface ContentHeaderProps {
  title: string;
  description: string;
}

const ContentHeader: FC<ContentHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center py-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <p className="mt-2 text-lg font-medium">{description}</p>
    </div>
  );
};

export default ContentHeader;
