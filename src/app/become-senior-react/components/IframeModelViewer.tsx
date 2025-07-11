interface IframeModelViewerProps {
    className?: string;
}

const IframeModelViewer = ({ className }: IframeModelViewerProps) => {
    const modelSrc = "https://tinyglb.com/viewer/19ba899cb195422aa9d479b5931b6e87";

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
            // Cho phép iframe chuyển sang chế độ toàn màn hình
            allow="fullscreen"
            // Áp dụng class được truyền vào, hoặc mặc định là w-full h-full
            // để nó lấp đầy container cha của nó.
            className={className || "w-full h-full"}
        />
    );
};

export default IframeModelViewer;