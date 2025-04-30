import Marquee from 'react-fast-marquee';
export default function Carousel() {
  const goldRate = 3500;
  return (
    <div className="carousel">
      <Marquee autoFill={true} speed={45} className="goldratemarquee">
        Today's Gold Rate : 22k - {goldRate}/gm &nbsp;&nbsp;&nbsp;{' '}
        <div className="carouselcircle"></div> &nbsp;&nbsp;&nbsp;
      </Marquee>
    </div>
  );
}
