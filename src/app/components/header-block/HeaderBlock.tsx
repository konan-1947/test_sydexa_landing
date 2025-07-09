const HeaderBlockComponent = (prop: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={
        "text-center text-5xl font-semibold leading-tight bg-gradient-to-b from-[#2EC5E4] to-[#E9EBF0] text-transparent bg-clip-text " +
        (prop?.className ?? "")
      }
    >
      {prop.children}
    </h3>
  );
};
export default HeaderBlockComponent;
