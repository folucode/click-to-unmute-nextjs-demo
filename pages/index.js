import { useRef } from 'react';
import { Video, CloudinaryContext } from 'cloudinary-react';

export default function IndexPage() {
  const videoRef = useRef();

  const unmute = () => {
    let video = videoRef.current;
    video.muted = false;
  };

  return (
    <div className='App'>
      <h1>Create youtube-like `click to unmute` feature in Next.js</h1>
      <div className='button-area'>
        <button type='button' onClick={() => unmute()}>
          unmute
        </button>
      </div>
      <div className='video-area'>
        <CloudinaryContext cloudName='chukwutosin'>
          <Video
            publicId='Dog_Barking'
            controls
            muted={true}
            width='500px'
            innerRef={videoRef}
            autoPlay
          />
        </CloudinaryContext>
      </div>
    </div>
  );
}
