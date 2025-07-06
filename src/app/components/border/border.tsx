import "./border.scss";

const BorderComponent = (prop: any) => {
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
