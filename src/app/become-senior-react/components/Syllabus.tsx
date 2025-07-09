import HeaderBlockComponent from "@/app/components/header-block/HeaderBlock";
import StyledButton1 from "@/app/components/StyledButton1";
import SvgIconOptimized from "@/app/components/SvgIconOptimized";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import "./accordion.scss";

interface ContentItem {
  title: string;
  time: string;
  link?: string;
}

const Syllabus = () => {
  const syllabusData = [
    {
      heading: "Tuần 1 - JS nâng cao và React cơ bản",
      info: "8 bài học - 2 giờ 30 phút",
      content: [
        {
          title: "Cách hoạt động của trang web",
          time: "20 phút",
        },
        {
          title: "Xử lý bất đồng bộ, Eventloop, Microtasks",
          time: "25 phút",
        },
        {
          title: "React (Single page application SPA vs Multi Page application MPA)",
          time: "15 phút",
        },
        {
          title: "Cách React hoạt động",
          time: "20 phút",
        },
        {
          title: "Virtual DOM & Reconciliation",
          time: "25 phút",
        },
        {
          title: "So sánh render sync vs concurrent (React 18)",
          time: "20 phút",
        },
        {
          title: "React fiber và scheduler",
          time: "25 phút",
        },
        {
          title: "React hooks (useMemo, useCallback, useEffect, useImperativeHandle,...)",
          time: "30 phút",
        },
        {
          title: "Bài tập 1: Phát triển tính năng đơn giản sử dụng hooks",
          time: "10 phút",
        },
      ],
    },
    {
      heading: "Tuần 2 - Cải thiện re-render",
      info: "6 bài học - 2 giờ 15 phút",
      content: [
        {
          title: "Theo dõi re-rendering",
          time: "25 phút",
        },
        {
          title: "Tối ưu rendering với hooks",
          time: "30 phút",
        },
        {
          title: "Dev tools để tính toán hiệu năng: Profiler, Lighthouse,...",
          time: "25 phút",
        },
        {
          title: "HOC: memo",
          time: "20 phút",
        },
        {
          title: "Custom hook",
          time: "25 phút",
        },
        {
          title: "Bài tập 2: Render bảng với 10.000 items, tách component con",
          time: "30 phút",
        },
      ],
    },
    {
      heading: "Tuần 3 - Xử lý tải vô hạn",
      info: "4 bài học - 1 giờ 45 phút",
      content: [
        {
          title: "React visualization: react-window và react-virtual",
          time: "30 phút",
        },
        {
          title: "Tính toán hiệu năng cho lần tải đầu và tải thêm",
          time: "25 phút",
        },
        {
          title: "Intersection Observer API",
          time: "20 phút",
        },
        {
          title: "Bài tập 3: Áp dụng react-virtual/react-window cho bài tập 2",
          time: "30 phút",
        },
      ],
    },
    {
      heading: "Tuần 4 - Quản lý store & tích hợp API",
      info: "8 bài học - 2 giờ 40 phút",
      content: [
        {
          title: "Global store: redux / zustand",
          time: "25 phút",
        },
        {
          title: "Axios",
          time: "15 phút",
        },
        {
          title: "React query",
          time: "20 phút",
        },
        {
          title: "Fetching, mutation",
          time: "25 phút",
        },
        {
          title: "Cache",
          time: "20 phút",
        },
        {
          title: "Background refetch",
          time: "20 phút",
        },
        {
          title: "Invalidation",
          time: "15 phút",
        },
        {
          title: "Bài tập 4: Tích hợp API sử dụng react query và zustand",
          time: "40 phút",
        },
      ],
    },
    {
      heading: "Tuần 5 - Form",
      info: "4 bài học - 1 giờ 50 phút",
      content: [
        {
          title: "Controlled và Uncontrolled components",
          time: "25 phút",
        },
        {
          title: "React formik",
          time: "25 phút",
        },
        {
          title: "Form validation: zod / yup",
          time: "20 phút",
        },
        {
          title: "Bài tập 5: Xây dựng form với nhiều câu hỏi và validation",
          time: "40 phút",
        },
      ],
    },
    {
      heading: "Tuần 6 - React router & thư viện UI",
      info: "5 bài học - 2 giờ 10 phút",
      content: [
        {
          title: "React router dom",
          time: "25 phút",
        },
        {
          title: "Material UI vs Radix UI, Shadcn UI",
          time: "30 phút",
        },
        {
          title: "Tailwindcss",
          time: "25 phút",
        },
        {
          title: "HTML Accessibility",
          time: "20 phút",
        },
        {
          title: "Bài tập 6: Cải tiến bài tập 5 với UI lib và Tailwindcss",
          time: "30 phút",
        },
      ],
    },
    {
      heading: "Tuần 7 - Tối ưu hiệu năng 1",
      info: "7 bài học - 2 giờ 35 phút",
      content: [
        {
          title: "Server side rendering (SSR) vs Client side rendering (CSR)",
          time: "25 phút",
        },
        {
          title: "Lazy load, suspend",
          time: "20 phút",
        },
        {
          title: "Code splitting",
          time: "20 phút",
        },
        {
          title: "Dynamic import",
          time: "15 phút",
        },
        {
          title: "Use named chunk",
          time: "15 phút",
        },
        {
          title: "Debounce, throttle",
          time: "20 phút",
        },
        {
          title: "Bài tập 7: Tạo trang danh sách mới với lazy load và debounce",
          time: "40 phút",
        },
      ],
    },
    {
      heading: "Tuần 8 - Tối ưu hiệu năng 2 & Dự án cuối",
      info: "6 bài học - 3 giờ",
      content: [
        {
          title: "React 18, lazy hydration",
          time: "25 phút",
        },
        {
          title: "Tính toán rendering components, phân tích heavy components",
          time: "25 phút",
        },
        {
          title: "Đọc treemap từ lighthouse (bundle size)",
          time: "20 phút",
        },
        {
          title: "Tối ưu hình ảnh (CDN)",
          time: "20 phút",
        },
        {
          title: "Vite + webpack (rspack)",
          time: "20 phút",
        },
        {
          title: "Dự án cuối: Xây dựng web với 100k records và tối ưu bundle",
          time: "70 phút",
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
                }
              >
                <div className="pl-6 py-2 border-t border-solid border-white/10">
                  {item.content.map((content, contentIndex) => {
                    return (
                      <div
                        className="flex py-2 items-center"
                        key={contentIndex + ""}
                      >
                        <div className="grow w-full flex items-center">
                          {content.title}{" "}
                          {(content as ContentItem).link && (
                            <a
                              href={(content as ContentItem).link}
                              className="ml-2 flex rounded-3xl items-center justify-center cursor-pointer text-[14px] leading-5 text-white hover:opacity-90 transition-opacity w-fit h-fit px-4 py-1 font-medium"
                              style={{
                                background: `linear-gradient(135deg, #5050DD 0%, #FC80B6 100%)`,
                              }}
                            >
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
