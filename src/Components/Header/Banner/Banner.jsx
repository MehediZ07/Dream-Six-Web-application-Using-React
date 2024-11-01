import bannerImg from "../../../assets/banner-main.png";
export default function Banner({ handleFreeCredit, handle, notify }) {
  return (
    <div className="lg:h-[32rem] md:h-[28rem] h-[24rem] py-12 px-4 mt-24 bg-gradient-to-tr from-green-700  via-blue-950  to-blue-700 rounded-2xl flex flex-col justify-around items-center mb-6">
      <img src={bannerImg} className="h-[80px] md:h-[150px]" alt="" />
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center">
        Assemble Your Ultimate Dream 6 Cricket Team
      </h1>
      <p className="text-[#FFFFFFB3] text-center">
        Beyond Boundaries Beyond Limits
      </p>
      <div className="border-2 solid border-[#fabf37] p-[.30rem] rounded-xl">
        <button
          onClick={() => {
            handleFreeCredit(150000000);
            notify();
          }}
          className="text-[#131313] bg-gradient-to-r from-[#f669b0] via-[#fac13e] to-[#f7cb61] py-3 px-4 font-semibold rounded-xl"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
}
