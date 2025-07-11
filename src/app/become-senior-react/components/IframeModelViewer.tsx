interface IframeModelViewerProps {
    className?: string;
}

const IframeModelViewer = ({ className }: IframeModelViewerProps) => {
    const modelSrc = "https://tinyglb.com/viewer/fe55855358dd479584fd81010eeeb14c";

    return (
        <iframe
            src={modelSrc}
            // 'title' rất quan trọng cho khả năng truy cập (accessibility)
            title="Interactive 3D Model Viewer"
            // 'frameBorder="0"' để loại bỏ đường viền mặc định của iframe
            frameBorder="0"
            // 'loading="lazy"' là một tối ưu hiệu suất cực lớn!
            // Trình duyệt sẽ không tải iframe cho đến khi người dùng cuộn đến gần nó.
            loading="lazy"
            className={className || "w-full h-full"}
        />
    );
};

export default IframeModelViewer;