interface IframeModelViewerProps {
    className?: string;
}

const IframeModelViewer = ({ className }: IframeModelViewerProps) => {
    const modelSrc = "https://tinyglb.com/viewer/b83d118d203a4ad6a10fec497597c6ed";

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