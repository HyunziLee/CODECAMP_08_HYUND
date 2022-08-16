import LazyLoad from "react-lazy-load";
export default function Quiz() {
  return (
    <div>
      Scroll to load images.
      <LazyLoad height={500} offsetVertical={300}>
        <img src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" />
      </LazyLoad>
      <LazyLoad height={500} offsetTop={200}>
        <img src="http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg" />
      </LazyLoad>
      <LazyLoad height={500} offsetHorizontal={50}>
        <img src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif" />
      </LazyLoad>
      <LazyLoad height={500} offsetHorizontal={50}>
        <img src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif" />
      </LazyLoad>
      <LazyLoad height={500} offsetHorizontal={50}>
        <img src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif" />
      </LazyLoad>
      <LazyLoad height={500} offsetHorizontal={50}>
        <img src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif" />
      </LazyLoad>
      <LazyLoad height={500} offsetHorizontal={50}>
        <img src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif" />
      </LazyLoad>
      <LazyLoad height={500} offsetHorizontal={50}>
        <img src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif" />
      </LazyLoad>
    </div>
  );
}
