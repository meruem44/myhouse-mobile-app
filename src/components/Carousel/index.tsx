import React, { useRef } from 'react';
import Carousel from 'react-native-snap-carousel';

import { ImageCard } from '../Cards';

import { Container } from './styles';
import { metrics } from '../../styles';

interface CarouselData {
  data: string[];
};

const SnapCarousel: React.FC<CarouselData> = ({ data }) => {
  const carouselRef = useRef(null);

  return (
    <Container>
      <Carousel
        style={{ height: metrics.height * 0.15 }}
        data={data} 
        keyExtractor={(_, index) => String(index)}
        pagingEnabled={true}
        alwaysBounceHorizontal={true}
        ref={carouselRef}
        sliderWidth={metrics.width}
        itemWidth={metrics.width}
        itemHeight={metrics.height * 0.15}
        renderItem={({ item, index }) => (
          <ImageCard uri={item} max={data.length} index={index + 1}/>
        )}
      />
    </Container>
  );
};

export default SnapCarousel;
