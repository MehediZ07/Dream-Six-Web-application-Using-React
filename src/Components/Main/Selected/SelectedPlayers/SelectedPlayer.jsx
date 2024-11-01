export default function SelectedPlayer({ player, deletePlayer }) {
  return (
    <div className="flex justify-between gap-4 py-2 px-4 rounded-lg border solid border-gray-300 my-4">
      <div className="flex gap-4">
        <img
          src={player.image}
          className="h-20 w-20 object-cover rounded-full"
          alt=""
        />
        <div>
          <h1>{player.name}</h1>
          <p>{player.role}</p>
          <p>Price:$ {player.biddingPrice}</p>
        </div>
      </div>

      <button onClick={() => deletePlayer(player)} className="mr-4">
        <i class="fa-solid fa-trash-can text-2xl text-red-500"></i>
      </button>
    </div>
  );
}
