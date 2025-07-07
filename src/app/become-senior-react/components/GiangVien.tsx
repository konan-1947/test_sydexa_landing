import ImageOptimized from "@/app/components/ImageOptimized";

const GiangVien = () => {
  return (
    <div className="w-full h-screen relative rounded-t-2xl overflow-hidden  px-12">
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <ImageOptimized
          width={900}
          height={900}
          name="MaskGiangVien"
          className="w-full h-full object-cover"
          type="svg"
        />
      </div>
    </div>
  );
};

export default GiangVien;
