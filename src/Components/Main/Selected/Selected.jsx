import SelectedPlayer from "./SelectedPlayers/SelectedPlayer";

export default function Selected({ toggle, selectPlayer, deletePlayer }) {
  return (
    <div className={toggle ? "hidden" : "block"}>
      <h1 className="text-xl font-bold">
        Selected Players ({selectPlayer.length}/6)
      </h1>
      {/* <SelectedPlayer></SelectedPlayer> */}
      <div>
        {selectPlayer.map((player) => (
          <SelectedPlayer
            key={player.playerId}
            player={player}
            deletePlayer={deletePlayer}
          ></SelectedPlayer>
        ))}
      </div>
    </div>
  );
}
