export async function startStream(
  videoId: string,
  audioId: string,
  constraints: MediaTrackConstraints,
  isMuted: boolean
): Promise<MediaStream> {
  const newStream = await navigator.mediaDevices.getUserMedia({
    video: { deviceId: { exact: videoId } },
    audio: isMuted
      ? false
      : {
          deviceId: { exact: audioId },
        },
  });
  const tracks = newStream.getTracks();
  tracks.forEach((track) => track.applyConstraints(constraints));
  return newStream;
}
