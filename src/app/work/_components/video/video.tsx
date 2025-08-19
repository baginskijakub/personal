interface VideoProps {
  url: string;
  title: string;
}

export const Video = (props: VideoProps) => {
  const { url, title } = props;

  return (
    <div className="relative flex justify-center border border-gray-200 rounded-lg overflow-hidden ">
      <video
        src={url}
        style={{ maxWidth: "100%", height: "auto" }}
        autoPlay
        playsInline
        loop
        muted
      />

      <p className="absolute bottom-3 left-3 text-body text-gray-600">
        {title}
      </p>
    </div>
  );
};
