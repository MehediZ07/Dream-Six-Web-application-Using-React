import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";

export default function Available({ toggle, players, choosePlayer }) {
  return (
    <div className={toggle ? "block" : "hidden"}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <AvailablePlayers
            key={player.playerId}
            player={player}
            choosePlayer={choosePlayer}
          ></AvailablePlayers>
        ))}
      </div>
    </div>
  );
}
