export default function AvailablePlayers({ player, choosePlayer }) {
  const {
    playerId,
    name,
    role,
    image,
    battingType,
    bowlingType,
    biddingPrice,
    rating,
  } = player;

  return (
    <div>
      <div class="card bg-base-100 border solid border-gray-300">
        <div class="px-6 pt-6 h-72 ">
          <img
            src={image}
            className="w-full h-full object-cover rounded-xl"
            alt="Shoes"
          />
        </div>
        <div class="flex flex-col space-y-1 p-6">
          <h2 class="text-xl font-bold text-left">
            <i class="fa-solid fa-user  rounded-full pr-4"></i>
            {name}
          </h2>
          <div className="flex items-center justify-between pb-1">
            <p className="text-xl text-gray-500">
              <i class="fa-solid fa-flag br-4"></i> Country
            </p>
            <h1 className="text-xl bg-gray-100 p-1 font-semibold rounded-lg">
              {role}
            </h1>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold text-gray-900">Rating</p>
            <h1 className="text-xl p-2 font-semibold text-gray-500 rounded-lg">
              {rating}
            </h1>
          </div>
          <div className="flex items-center h-16 justify-between">
            <h1 className="text-xl  font-semibold text-gray-500 rounded-lg">
              {battingType}
            </h1>
            <h1 className="text-xl font-semibold text-gray-500 rounded-lg">
              {bowlingType}
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-xl  font-semibold text-gray-500 rounded-lg">
              Price: $ {biddingPrice}
            </h1>
            <button
              onClick={() => choosePlayer(player)}
              className={`text-xl hover:bg-[#E7FE29] border solid btn border-gray-300 p-[.35rem] font-semibold rounded-lg`}
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
