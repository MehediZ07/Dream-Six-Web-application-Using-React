import React from "react";
import Available from "./Available/Available";
import Selected from "./Selected/Selected";
export default function Main({
  handleToggleBtn,
  toggle,
  choosePlayer,
  players,
  selectPlayer,
  deletePlayer,
}) {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center pb-6 bg-[#ffffff] bg-opacity-50 backdrop-blur-sm sticky z-50 top-[6rem] space-y-4">
        <div>
          <h1 className="text-xl font-bold">
            {toggle ? "Available Players" : "Selected Players"}
          </h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => handleToggleBtn("Available")}
            className={`text-[#131313] border solid  border-gray-300 py-3 px-4 font-semibold rounded-xl ${
              toggle ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleToggleBtn(0)}
            className={`text-[#131313] border solid  border-gray-300 py-3 px-4 font-semibold rounded-xl ${
              toggle ? "" : "bg-[#E7FE29]"
            }`}
          >
            Selected &#40;{selectPlayer.length}&#41;
          </button>
        </div>
      </div>
      <Available
        toggle={toggle}
        players={players}
        choosePlayer={choosePlayer}
      ></Available>
      <Selected
        toggle={toggle}
        selectPlayer={selectPlayer}
        deletePlayer={deletePlayer}
      ></Selected>
      <button
        onClick={() => handleToggleBtn("Available")}
        className={`text-[#131313] border solid mt-2 mb-6 bg-[#E7FE29] border-gray-300 py-3 px-4 font-semibold rounded-xl ${
          toggle ? "hidden" : ""
        }`}
      >
        Add More Player
      </button>
    </div>
  );
}
