import { cn } from "@/lib/utils";
import Image from "next/image";

interface HomeCardProps {
  img: string;
  imgText: string;
  title: string;
  description: string;
  handleClick: () => void;
  className: string;
}

const HomeCard = ({
  img,
  imgText,
  title,
  description,
  handleClick,
  className,
}: HomeCardProps) => {
  return (
    <section
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full min-h-[260px] rounded-[14px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt={imgText} width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
