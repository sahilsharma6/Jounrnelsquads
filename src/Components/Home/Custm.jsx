import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_1 from "../../assets/images/img_1.png";
import img_2 from "../../assets/images/img_2.png";
import img_3 from "../../assets/images/img_3.png";
import img_4 from "../../assets/images/img_4.png";
import img_5 from "../../assets/images/img_5.png";
import img_6 from "../../assets/images/img_6.png";
import img_7 from "../../assets/images/img_7.png";
import img_8 from "../../assets/images/img_8.png";
// import "./Custm.css";
import "./Custm.css";


const Custm = () => {
  const testimonials = [
    {
      image: img_1,
    },
    {
      image: img_2,
    },
    {
      image: img_3,
    },
    {
      image: img_4,
    },
    {
      image: img_5,
    },
    {
      image: img_6,
    },
    {
      image: img_7,
    },
    {
      image: img_8,
    },
  ];
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    // arrows: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-16 ">
      <div className=" my-12  bg-gray-100  container border mx-auto     ">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold   text-black    overflow-hidden">
            Indexing and Services
          </h2>
        </div>
        <Slider {...settings} className="border ">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-32 flex md:pl-16">
              <img src={testimonial.image} alt="" className=" w-32" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Custm;
