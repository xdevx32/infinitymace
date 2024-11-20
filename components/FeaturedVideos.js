// components/FeaturedVideos.js
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
const MotionBox = motion(Box);

const videoUrls = [
  'https://www.youtube.com/watch?v=4LvDjz76mYw&ab_channel=RedBullBike',
  'https://www.youtube.com/watch?v=_9-L3njfe4g&ab_channel=RedBullBike',
  'https://www.youtube.com/watch?v=GAMg-XEygfA&ab_channel=RedBullBike',
  'https://www.youtube.com/watch?v=7jOOLi_x0U4&ab_channel=RedBullBike',
  'https://www.youtube.com/watch?v=CxWJuyJlLkI&ab_channel=RedBullBike',
  'https://www.youtube.com/watch?v=z_1WcUAcbgQ&list=RDs-kJU21Flr0&index=3&ab_channel=Disciples',
  'https://www.youtube.com/watch?v=7RKXNhKKD-M&ab_channel=PeopleAreAwesome',
  'https://www.youtube.com/watch?v=WDKc6z4LRgQ&ab_channel=WatchMojo.com',
  'https://www.youtube.com/watch?v=2rAi0opB9Cc&ab_channel=WatchMojo.com',
  'https://www.youtube.com/watch?v=wsg8k-2HYXA&ab_channel=PeopleAreAwesome',
  'https://www.youtube.com/watch?v=1dgLEDdFddo&ab_channel=RedBull',
  'https://www.youtube.com/watch?v=AynGAP2xi4o&ab_channel=RedBull',
  'https://www.youtube.com/watch?v=SCk-IMZ7RzA&ab_channel=RedBull',
  'https://www.youtube.com/watch?v=BnToMyMy3k0&ab_channel=RedBull',
  // 80s music videos added
  'https://www.youtube.com/watch?v=djV11Xbc914&ab_channel=aha',
  'https://www.youtube.com/watch?v=Zi_XLOBDo_Y&ab_channel=michaeljacksonVEVO',
  'https://www.youtube.com/watch?v=1w7OgIMMRc4&ab_channel=GunsNRosesVEVO',
  'https://www.youtube.com/watch?v=PIb6AZdTr-A&ab_channel=CyndiLauperVEVO',
  'https://www.youtube.com/watch?v=btPJPFnesV4&ab_channel=SurvivorVEVO',
  'https://www.youtube.com/watch?v=lDK9QqIzhwk&ab_channel=BonJoviVEVO',
  'https://www.youtube.com/watch?v=1k8craCGpgs&ab_channel=journeyVEVO',
  'https://www.youtube.com/watch?v=OMOGaugKpzs&ab_channel=ThePoliceVEVO',
  'https://www.youtube.com/watch?v=FTQbiNvZqaY&ab_channel=TotoVEVO',
  'https://www.youtube.com/watch?v=eH3giaIzONA&ab_channel=whitneyhoustonVEVO'
];

export default function FeaturedVideos() {
  return (
    <section className={styles.section}>
      <h2>Featured Videos</h2>
      <div className={styles.videoGallery}>
        {videoUrls.map((url, index) => (
          <div key={index} className={styles.videoWrapper}>
            <ReactPlayer
              url={url}
              className={styles.video}
              controls
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </section>
  );
}