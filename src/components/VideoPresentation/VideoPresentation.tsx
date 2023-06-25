import React, { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import clsx from 'clsx';
import { IconPlayerPlay, IconX } from '@tabler/icons';

import { Button } from 'UI';
import { OfferButton } from 'components';
import { useLockedBody } from 'hooks';

import styles from './VideoPresentation.module.scss';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export const VideoPresentation: FC = (): JSX.Element => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [locked, setLocked] = useLockedBody(false, 'body');

  const handleShowVideoPresentation = () => {
    setShowVideo(true);
    setLocked(true);
  };

  const handleHideVideoPresentation = () => {
    setShowVideo(false);
    setLocked(false);
  };

  return (
    <>
      {showVideo && (
        <div className="fixed z-[9999] bg-firefly/80 backdrop-blur-md right-0 left-0 top-0 bottom-0 overflow-auto">
          <div className="relative flex flex-col gap-5 items-center justify-center p-4 lg:p-10 w-screen lg:w-[75vw] m-auto">
            <div className="relative w-full aspect-[16/9]">
              <ReactPlayer
                url="https://youtu.be/LPn5Zd1QyhQ"
                controls
                loop
                playing={locked}
                className={clsx(
                  styles.reactPlayer,
                  'shadow-xl rounded-xl overflow-hidden'
                )}
                width="100%"
                height="100%"
              />
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 w-full">
              <Button
                size="small"
                variant="green"
                className="w-max"
                onClick={handleHideVideoPresentation}
              >
                <span className="flex items-center gap-2">
                  <IconX size={24} />
                  <span>Închide prezentarea</span>
                </span>
              </Button>

              <OfferButton />
            </div>
          </div>
        </div>
      )}

      <button
        className="flex items-center gap-4 group transition"
        onClick={handleShowVideoPresentation}
      >
        <span
          className={clsx(
            styles.pulseCircle,
            'bg-black/30 transition group-hover:bg-cardinal'
          )}
        >
          <IconPlayerPlay size={24} />
        </span>
        <span>Video prezentare</span>
      </button>
    </>
  );
};
