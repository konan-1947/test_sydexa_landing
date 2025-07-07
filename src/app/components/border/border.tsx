import "./border.scss";

interface BorderComponentProps {
  children: React.ReactNode;
  className?: string;
}
const BorderComponent = (prop: BorderComponentProps) => {
  return (
    <div
      className={
        "border-block rounded-2xl outline outline-transparent backdrop-blur-xs" +
        " " +
        (prop?.className??'')
      }>
      {prop.children}
    </div>
  );
};
export default BorderComponent;
