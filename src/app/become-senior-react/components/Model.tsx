import ModelViewer from "@/animation/ModelInner";

const Model = () => {
  return (
    <div className="w-full h-full flex items-center justify-end">
      <div className="w-10/12 h-full flex justify-start transform translate-x-20">
        <ModelViewer
          url="/images/model16.glb"
          autoRotate={true}
          showScreenshotButton={false}
          width="100%"
          height="100%"
          defaultZoom={10000}
          autoFrame={false}
          minZoomDistance={0.01}
          maxZoomDistance={5}
          defaultRotationX={0}
          defaultRotationY={0}
          modelXOffset={0.5}
          modelYOffset={-3.1}
          enableMouseParallax={true}
          enableHoverRotation={false}
          enableManualRotation={false}
          enableManualZoom={false}
          enableOrbitControls={true}
        />
      </div>
    </div>
  );
};

export default Model;
