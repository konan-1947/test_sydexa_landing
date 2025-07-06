import SvgIcon from "@/app/components/SvgIconOptimized";

interface StyledButton1Props {
  text: string;
}

const StyledButton1 = ({ text }: StyledButton1Props) => {
  return (
    <button
      className="flex items-center gap-2 cursor-pointer text-white hover:opacity-90 transition-opacity w-fit h-fit px-4 py-2"
      style={{
        border: "1px solid transparent",
        background: `
              linear-gradient(rgba(58, 47, 59, 1), rgba(23, 22, 42, 1)) padding-box,
              linear-gradient(135deg, rgba(80, 80, 221, 1) 0%, rgba(252, 128, 182, 1) 100%) border-box
            `,
        borderRadius: "40px",
      }}
    >
      <SvgIcon name="ReactIcon" size={24} />
      <span className="text-lg font-medium">{text}</span>
    </button>
  );
};

export default StyledButton1;
