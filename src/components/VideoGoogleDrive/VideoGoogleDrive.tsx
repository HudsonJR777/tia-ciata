interface VideoGoogleDriveProps {
  videoId: string;
  title: string;
}

export default function VideoGoogleDrive({ videoId, title }: VideoGoogleDriveProps) {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={`https://drive.google.com/file/d/${videoId}/preview`}
        title={title}
        className="w-full h-full"
        allow="autoplay"
        loading="lazy"
      />
    </div>
  );
}
