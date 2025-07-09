import BorderComponent from "@/app/components/border/border";
import ImageOptimized from "@/app/components/ImageOptimized";
import StyledButton1 from "@/app/components/StyledButton1";
import "./path2.scss";
import HeaderBlockComponent from "@/app/components/header-block/HeaderBlock";
import CssCursorWrapper from "./CssCursorWrapper";
import ScrollingLines from "./ScrollingLines";
const Part2 = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center h-fit relative z-10">
      <StyledButton1 text="Hình thức học" />
      <HeaderBlockComponent className="mt-4">
        Trải nghiệm học tập <br /> cá nhân hóa <br /> linh hoạt & thực chiến.
      </HeaderBlockComponent>
      <div className="w-full h-fit relative flex justify-center items-start pt-17">
        <div className="container mx-auto h-10/12 relative z-10">
          <div className=" relative overflow-hidden rounded-2xl mb-4">
            <BorderComponent>
              <div className="flex w-full h-[300px]">
                <div className="absolute w-[590px] h-[186px] left-30 top-50">
                  <div
                    className="w-full h-full"
                    style={{
                      background: "#CDB99C",
                      filter: "blur(163px)",
                      borderRadius: "220px",
                      transform: "rotate(-42deg)",
                      opacity: 0.8,
                    }}
                  />
                </div>
                <div className="w-1/2 px-10 pt-8 pb-2">
                  <h3 className="font-semibold title-block  text-[28px] mb-4">
                    Học qua{" "}
                    <span className="text-transparent bg-clip-text">
                      Video bài giảng,
                    </span>
                    <br />
                    code mẫu và tài liệu thực hành
                  </h3>
                  <p className="text-white/40 text-[14px] mb-8">
                    Hỏi đáp & thảo luận mỗi ngày trên cộng đồng Discord
                  </p>
                  <button
                    className="flex items-center justify-center cursor-pointer text-[14px] leading-5 text-white hover:opacity-90 transition-opacity w-fit h-fit px-4 py-2 font-medium"
                    style={{
                      background: `linear-gradient(135deg, #5050DD 0%, #FC80B6 100%)`,
                      borderRadius: "40px",
                      border: "none",
                    }}
                  >
                    Xem nội dung khóa học
                  </button>
                </div>
                <div className="flex-grow h-full"></div>
                <div className="w-5/12 h-full pt-0">
                  <ImageOptimized
                    name="BrowerTab"
                    type="png"
                    className="w-full h-full object-cover"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </BorderComponent>
          </div>
          <div className="-ml-2 flex flex-wrap -mr-2 ">
            <CssCursorWrapper className="mb-4 w-1/3 px-2">
              <BorderComponent className="max-h-[600px] overflow-hidden h-full flex flex-col items-center justify-start">
                <div className="w-full px-10 pt-8 pb-2">
                  <h3 className="font-semibold text-[28px] mb-4 bg-clip-text title-block">
                    Mentoring 1:1 <br />2 buổi riêng cho bạn
                  </h3>
                  <p className="text-white/40 text-[14px] mb-8">
                    Review code & góp ý chi tiết. <br /> Cá nhân hóa lộ trình
                    học. <br /> Hướng dẫn trình bày rõ ràng, định hướng nghề
                    nghiệp
                  </p>
                </div>
                <div className="flex-grow flex items-center justify-center p-6 opacity-20">
                  <div className="w-full max-w-[336px]">
                    <pre className="text-white/80 text-sm leading-relaxed space-y-2 font-mono">
                      <div className="mb-2">
                        <span className="text-[#569CD6]">const</span>{" "}
                        <span className="text-[#DCDCAA]">
                          fetchUsersInPaidTeams
                        </span>{" "}
                        <span className="text-white">=</span>{" "}
                        <span className="text-[#569CD6]">async</span>{" "}
                        <span className="text-white">(): </span>
                        <span className="text-[#569CD6]">Promise</span>
                        <span className="text-white">&lt;</span>
                        <span className="text-[#4EC9B0]">User</span>
                        <span className="text-white">[]&gt; =&gt; {"{"}</span>
                      </div>
                      <div className="pl-4 mb-2">
                        <span className="text-[#569CD6]">const</span>{" "}
                        <span className="text-white">response = </span>
                        <span className="text-[#569CD6]">await</span>{" "}
                        <span className="text-[#DCDCAA]">fetch</span>
                        <span className="text-white">(</span>
                        <span className="text-[#CE9178]">`${"{"}</span>
                        <span className="text-white">API_BASE_URL</span>
                        <span className="text-[#CE9178]">{"}`"}</span>
                        <span className="text-white">)</span>
                      </div>
                      <div className="pl-4 mb-2">
                        <span className="text-[#C586C0]">if</span>{" "}
                        <span className="text-white">(!response.ok) </span>
                        <span className="text-[#C586C0]">throw</span>{" "}
                        <span className="text-[#569CD6]">new</span>{" "}
                        <span className="text-[#4EC9B0]">Error</span>
                        <span className="text-white">(</span>
                        <span className="text-[#CE9178]">
                          &apos;Failed to fetch users&apos;
                        </span>
                        <span className="text-white">)</span>
                      </div>
                      <div className="pl-4 mb-2">
                        <span className="text-[#569CD6]">const</span>{" "}
                        <span className="text-white">users: </span>
                        <span className="text-[#4EC9B0]">User</span>
                        <span className="text-white">[] = </span>
                        <span className="text-[#569CD6]">await</span>{" "}
                        <span className="text-white">response.</span>
                        <span className="text-[#DCDCAA]">json</span>
                        <span className="text-white">()</span>
                      </div>
                      <div className="pl-4 mb-4">
                        <span className="text-[#C586C0]">return</span>{" "}
                        <span className="text-white">users.</span>
                        <span className="text-[#DCDCAA]">filter</span>
                        <span className="text-white">
                          (user ={">"} user.team.isPaid)
                        </span>
                      </div>
                      <div className="mb-4">
                        <span className="text-white">{"}"}</span>
                      </div>

                      <div className="mb-2">
                        <span className="text-[#569CD6]">export const</span>{" "}
                        <span className="text-[#4EC9B0]">PaidTeamUsers</span>{" "}
                        <span className="text-white">= () =&gt; {"{"}</span>
                      </div>
                      <div className="pl-4 mb-2">
                        <span className="text-[#569CD6]">const</span>{" "}
                        <span className="text-white">[users, setUsers] = </span>
                        <span className="text-[#DCDCAA]">useState</span>
                        <span className="text-white">&lt;</span>
                        <span className="text-[#4EC9B0]">User</span>
                        <span className="text-white">[]&gt;</span>
                        <span className="text-white">([]);</span>
                      </div>
                      <div className="pl-4 mb-4">
                        <span className="text-[#569CD6]">const</span>{" "}
                        <span className="text-white">[error, setError] = </span>
                        <span className="text-[#DCDCAA]">useState</span>
                        <span className="text-white">&lt;</span>
                        <span className="text-[#569CD6]">string</span>
                        <span className="text-white">&gt;</span>
                        <span className="text-white">(&apos;);</span>
                      </div>

                      <div className="pl-4 mb-2">
                        <span className="text-[#DCDCAA]">useEffect</span>
                        <span className="text-white">(() =&gt; {"{"}</span>
                      </div>
                      <div className="pl-8 mb-2">
                        <span className="text-[#DCDCAA]">
                          fetchUsersInPaidTeams
                        </span>
                        <span className="text-white">()</span>
                      </div>
                      <div className="pl-8 mb-2">
                        <span className="text-white">.</span>
                        <span className="text-[#DCDCAA]">then</span>
                        <span className="text-white">(data =&gt; </span>
                        <span className="text-[#DCDCAA]">setUsers</span>
                        <span className="text-white">(data))</span>
                      </div>
                      <div className="pl-8 mb-2">
                        <span className="text-white">.</span>
                        <span className="text-[#DCDCAA]">catch</span>
                        <span className="text-white">(err =&gt; </span>
                        <span className="text-[#DCDCAA]">setError</span>
                        <span className="text-white">(err.message))</span>
                      </div>
                      <div className="pl-4 mb-4">
                        <span className="text-white">{"}"}, [])</span>
                      </div>

                      <div className="pl-4 mb-2">
                        <span className="text-[#C586C0]">if</span>{" "}
                        <span className="text-white">(!users) </span>
                        <span className="text-[#C586C0]">return</span>{" "}
                        <span className="text-white">&lt;</span>
                        <span className="text-[#4EC9B0]">Loading</span>{" "}
                        <span className="text-white">/&gt;</span>
                      </div>
                      <div className="pl-4 mb-2">
                        <span className="text-[#C586C0]">if</span>{" "}
                        <span className="text-white">(error) </span>
                        <span className="text-[#C586C0]">return</span>{" "}
                        <span className="text-white">&lt;</span>
                        <span className="text-[#4EC9B0]">Error</span>{" "}
                        <span className="text-white">/&gt;</span>
                      </div>

                      <div className="pl-4 mb-2">
                        <span className="text-[#C586C0]">return</span>{" "}
                        <span className="text-white">&lt;</span>
                        <span className="text-[#4EC9B0]">UserTable</span>{" "}
                        <span className="text-white">
                          users={"{"}users{"}"} /&gt;
                        </span>
                      </div>
                      <div>
                        <span className="text-white">{"}"}</span>
                      </div>
                    </pre>
                  </div>
                </div>
                <div className="absolute -bottom-10 left-10 w-[335px] h-[254px] pointer-events-none">
                  <div
                    className="w-full h-full opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, #4F4FD6 0%, #F57EB1 100%)",
                      filter: "blur(80px)",
                      transform: "rotate(20deg) scale(1.2)",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </BorderComponent>
            </CssCursorWrapper>

            <div className="mb-4 w-2/3 px-2">
              <div className="-ml-2 -mr-2  flex flex-wrap">
                <div className="mb-4 w-1/2 px-2">
                  <BorderComponent className="h-[290px] flex items-start justify-center">
                    <div className="w-full px-10 pt-8 pb-2">
                      <h3 className="font-semibold text-[28px] mb-4 bg-clip-text title-block">
                        Mock Interview 1:1 <br /> 2 buổi luyện tập thực chiến
                      </h3>
                      <p className="text-white/40 text-[14px] mb-8">
                        Giả lập phỏng vấn thật <br /> Phân tích điểm mạnh/yếu và
                        hướng dẫn cải thiện <br /> Gợi ý cách trả lời ấn tượng,
                        thu hút nhà tuyển dụng
                      </p>
                    </div>
                  </BorderComponent>
                </div>
                <div className="mb-4 w-1/2 px-2">
                  <BorderComponent className="h-[290px] flex items-start justify-center">
                    <div className="w-full px-10 pt-8 pb-2">
                      <h3 className="font-semibold text-[28px] mb-4 bg-clip-text title-block">
                        Thời gian khoá học 3 tháng
                      </h3>
                      <p className="text-white/40 text-[14px] mb-8">
                        Giả lập phỏng vấn thật <br /> Phân tích điểm mạnh/yếu và
                        hướng dẫn cải thiện <br /> Gợi ý cách trả lời ấn tượng,
                        thu hút nhà tuyển dụng
                      </p>
                    </div>
                  </BorderComponent>
                </div>
                <div className="w-full px-2">
                  <BorderComponent className="h-[290px] relative flex items-start justify-start">
                    <div className="absolute z-20 w-1/2 px-10 pt-8 pb-2">
                      <h3 className="font-semibold text-[28px] mb-4 bg-clip-text title-block">
                        Cộng đồng học tập đông đảo, chia sẻ kiến thức
                      </h3>
                      <p className="text-white/40 text-[14px] mb-8">
                        Tham gia Discord Senior React, chia sẻ kiến thức, <br />
                        nhận tài liệu hay mỗi tuần
                      </p>
                    </div>
                    <div
                      className="absolute w-[284px] h-[284px] z-10 top-0 right-10 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(135deg, #3344C8 0%, #3344C8 100%)",
                        filter: "blur(120px)",
                        borderRadius: "50%",
                        opacity: 0.9,
                      }}
                    />
                    <div className="absolute top-0 right-0 w-2/3 h-full z-0">
                      <ImageOptimized
                        name="Discord"
                        type="png"
                        className="w-full h-full object-cover"
                        width={800}
                        height={800}
                        style={{
                          zIndex: -1,
                          mask: "radial-gradient(ellipse 80% 80% at center, black 20%, transparent 70%)",
                          WebkitMask:
                            "radial-gradient(ellipse 80% 80% at center, black 20%, transparent 70%)",
                        }}
                      />
                    </div>
                  </BorderComponent>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-1">
          <ScrollingLines />
        </div>
      </div>
    </div>
  );
};

export default Part2;
