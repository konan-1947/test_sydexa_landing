import HeaderBlockComponent from "@/app/components/header-block/HeaderBlock";
import StyledButton1 from "@/app/components/StyledButton1";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import "./accordion.scss";
import BorderComponent from "@/app/components/border/border";
import SvgIconOptimized from "@/app/components/SvgIconOptimized";
const Syllabus = () => {
  const syllabusData = [
    {
      heading: "Tuần 1 - Kiến trúc React và bản chất rendering",
      info: "8 bài học - 1 giờ 15 phút",
      content: [
        {
          title: "Virtual DOM & Reconciliation chi tiết",
          link: "/",
          time: "30 phút",
        },
        {
          title: "React fiber và scheduler",
          time: "10 phút",
        },
        {
          title:
            "Hooks chuyên sâu: useRef, useMemo, useCallback - dùng đúng chỗ",
          time: "15 phút",
        },
        {
          title: "So sánh render sync vs concurrent (React 18)",
          time: "25 phút",
        },
      ],
    },
    {
      heading: "Tuần 2 - Hiệu năng UI & tránh re-render thừa",
      info: "12 bài học - 1 giờ 40 phút",
      content: [
        {
          title: "Virtual DOM & Reconciliation chi tiết",
          link: "/",
          time: "30 phút",
        },
        {
          title: "React fiber và scheduler",
          time: "10 phút",
        },
        {
          title:
            "Hooks chuyên sâu: useRef, useMemo, useCallback - dùng đúng chỗ",
          time: "15 phút",
        },
        {
          title: "So sánh render sync vs concurrent (React 18)",
          time: "25 phút",
        },
      ],
    },
    {
      heading: "Tuần 3 - Tối ưu hiệu năng danh sách lớn & virtualization",
      info: "5 bài học - 50 phút",
      content: [
        {
          title: "Virtual DOM & Reconciliation chi tiết",
          link: "/",
          time: "30 phút",
        },
        {
          title: "React fiber và scheduler",
          time: "10 phút",
        },
        {
          title:
            "Hooks chuyên sâu: useRef, useMemo, useCallback - dùng đúng chỗ",
          time: "15 phút",
        },
        {
          title: "So sánh render sync vs concurrent (React 18)",
          time: "25 phút",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center py-14">
      <StyledButton1 text="Course Content" />
      <HeaderBlockComponent className="mt-4 mb-10">
        Nội dung khóa học
      </HeaderBlockComponent>
      <div className="w-full max-w-[860px]">
        <Accordion transition transitionTimeout={300} className="w-full">
          {syllabusData.map((item, index) => {
            return (
              <AccordionItem
                key={index + ""}
                className="px-7 mb-5 rounded-4xl border border-solid border-white/10 accordion-item"
                header={
                  <div className="flex py-4 cursor-pointer items-center">
                    <SvgIconOptimized
                      width={11}
                      name="chevon"
                      className="chevron"
                    />
                    <h4 className="m-0 w-full font-semibold pl-2">
                      {item.heading}
                    </h4>
                    <div className="min-w-48 text-right">{item.info}</div>
                  </div>
                }>
                <div className="pl-6 py-2 border-t border-solid border-white/10">
                  {item.content.map((content, contentIndex) => {
                    return (
                      <div
                        className="flex py-2 items-center"
                        key={contentIndex + ""}>
                        <div className="grow w-full flex items-center">
                          {content.title}{" "}
                          {content.link && (
                            <a
                              href={content.link}
                              className="ml-2 flex rounded-3xl items-center justify-center cursor-pointer text-[14px] leading-5 text-white hover:opacity-90 transition-opacity w-fit h-fit px-4 py-1 font-medium"
                              style={{
                                background: `linear-gradient(135deg, #5050DD 0%, #FC80B6 100%)`,
                              }}>
                              Xem thử
                            </a>
                          )}
                        </div>
                        <div className="min-w-32 text-right">
                          {content.time}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};
export default Syllabus;
