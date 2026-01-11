type Props = {
  url: string;
};

// component to embed a portrait youtube video and remove black bars on side
export default function PortraitYouTubeEmbed({ url }: Props) {
  return (
    <div className="relative w-full max-w-3xs mx-auto aspect-[9/16] overflow-hidden rounded-md">
      <iframe
        src={url}
        className="absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2"
        allow="encrypted-media"
        allowFullScreen
      />
    </div>
  );
}
