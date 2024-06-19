import JournalMetrics from "./JournalMetrics";
 
const ReHero = ({ imageSrc }) => {
  return (
    <div
      className="relative w-full h-[450px] bg-cover   bg-center"
      //   style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div>
        <img
          src={imageSrc}
          alt=""
          className="w-full absolute top-0 bottom- h-full object-cover bg-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50">rfd</div>
      <div className="absolute w-48 md:w-72   right-0 z-10 flex items-center justify-centere h-full px-8 text-white">
        <JournalMetrics className="absolute right-10 md:right-32  " />
      </div>
    </div>
  );
};
 
export default ReHero;