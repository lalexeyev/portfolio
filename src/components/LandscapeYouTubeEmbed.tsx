type Props = {
  url: string;
};

// component to default embed and display a landscape youtube video
export default function LandscapeYouTubeEmbed({ url }: Props) {
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-md">
      <iframe
        src={url}
        className="absolute inset-0 w-full h-full"
        allow="encrypted-media"
        allowFullScreen
      />
    </div>
  );
}
