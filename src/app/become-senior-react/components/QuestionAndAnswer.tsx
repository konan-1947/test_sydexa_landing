"use client";
import HeaderBlockComponent from "@/app/components/header-block/HeaderBlock";
import StyledButton1 from "@/app/components/StyledButton1";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import SvgIconOptimized from "@/app/components/SvgIconOptimized";
import { useState } from "react";

const QuestionAndAnswer = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const QAA = [
    {
      heading: "Khóa học này là Online hay Offline",
      content:
        "Tất cả khoá học tại Sydexa có 2 hình thức: online và offline, phù hợp với nhu cầu của từng học viên. Lớp offline sẽ được tổ chức tại Phú Nhuận, Tp.HCM. Lớp online sẽ được học qua Google Meet. Bạn sẽ được cung cấp tài khoản học tập bao gồm các video bài giảng chất lượng cao và livestream trực tiếp cùng mentor để giúp bạn có được trải nghiệm học tốt nhất.",
    },
    {
      heading: "Kết thúc khóa học, tôi vẫn còn nhận được hỗ trợ từ Sydexa?",
      content:
        "Sau khi kết thúc khóa học, bạn vẫn sẽ nhận được sự hỗ trợ từ Sydexa trong vòng 6 tháng. Chúng tôi cung cấp các buổi tư vấn nghề nghiệp và hỗ trợ giải đáp thắc mắc qua email và nhóm chat riêng.",
    },
    {
      heading: "Chứng chỉ và bằng cấp sau khóa học?",
      content:
        "Sau khi hoàn thành khóa học, bạn sẽ nhận được chứng chỉ từ Sydexa, công nhận bạn đã hoàn thành khóa học với các kỹ năng và kiến thức đã được đào tạo. Chứng chỉ này có thể được sử dụng để bổ sung vào hồ sơ xin việc của bạn.",
    },
    {
      heading: "Hỗ trợ làm sau khóa học",
      content:
        "Sydexa cung cấp dịch vụ hỗ trợ tìm việc làm sau khóa học. Chúng tôi có mạng lưới đối tác rộng lớn và sẽ giới thiệu bạn đến các công ty phù hợp với kỹ năng và nguyện vọng của bạn. Ngoài ra, chúng tôi còn hỗ trợ bạn trong việc chuẩn bị CV và phỏng vấn.",
    },
  ];
  const handleAccordionChange = (itemKey: string) => {
    setOpenItems(prev => {
      if (prev.includes(itemKey)) {
        return prev.filter(item => item !== itemKey);
      } else {
        return [...prev, itemKey];
      }
    });
  };
  return (
    <div className="relative flex h-fit flex-col items-center justify-center py-14 overflow-visible">
      {/* Background glow effect - small spot */}
      <div 
        className="absolute"
        style={{
          width: '1020px',
          height: '774px',
          left: '50%',
          top: '60%',
          transform: 'translateX(-50%) translateY(-50%) rotate(20deg)',
          background: 'linear-gradient(180deg, rgba(79, 79, 214, 0.8) 0%, rgba(245, 126, 177, 0.6) 50%, rgba(245, 126, 177, 0.1) 70%, rgba(245, 126, 177, 0.05) 80%, transparent 100%)',
          filter: 'blur(300px)',
          zIndex: -1,
        }}
      />
      
      <StyledButton1 text="Course Content" />
      <HeaderBlockComponent className="mt-4 mb-10">Q&A</HeaderBlockComponent>
      <div className="w-full max-w-[860px]">
        <Accordion
          transition
          transitionTimeout={300}
          className="w-full"
          allowMultiple
          onStateChange={event => {
            handleAccordionChange(event.key as string);
          }}
        >
          {QAA.map((item, index) => {
            const itemKey = `item-${index}`;
            const isOpen = openItems.includes(itemKey);
            return (
              <AccordionItem
                key={itemKey}
                itemKey={itemKey}
                className="px-7 mb-5 rounded-4xl border border-solid border-white/10 accordion-item"
                header={
                  <div className="flex py-4 cursor-pointer items-center">
                    <h4 className="m-0 w-full font-semibold pl-2">
                      {item.heading}
                    </h4>
                    <div className="relative w-6 h-6">
                      <SvgIconOptimized
                        width={24}
                        height={24}
                        name="AddCircle"
                        className={`absolute transition-opacity duration-150 ${isOpen ? "opacity-100" : "opacity-0"}`}
                      />
                      <SvgIconOptimized
                        width={24}
                        height={24}
                        name="MinusCircle"
                        className={`absolute transition-opacity duration-150 ${isOpen ? "opacity-0" : "opacity-100"}`}
                      />
                    </div>
                  </div>
                }
              >
                <div className="pl-6 py-2 border-t border-solid border-white/10">
                  {item.content}
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
