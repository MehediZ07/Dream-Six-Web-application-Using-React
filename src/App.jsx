import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  // Free credit add success massage
  const notify = () => {
    toast.success(
      <p>
        <i class="fa-solid fa-hands-clapping text-2xl text-[#FFCC00] pr-4"></i>
        Credit add to your account.
      </p>,
      {
        position: "top-center",
      }
    );
  };

  // Not enough money error massage
  const notEnoughMoney = () => {
    toast.error(<p>😔 You don't have enough coin.</p>, {
      position: "top-center",
    });
  };

  // Select Player success massage
  const selectPlayerSuccess = () => {
    toast.success(
      <p>
        😍 Congratulation!! <br />
        Player select successfully.
      </p>,
      {
        position: "top-center",
      }
    );
  };

  // Select Player success massage
  const sixPlayerDone = () => {
    toast.warning(<p>Six player already full-up.</p>, {
      position: "top-center",
    });
  };

  // Already selected Player massage
  const alreadySelected = () => {
    toast.error(<p>Player already Selected.</p>, {
      position: "top-center",
    });
  };

  // Delete success massage
  const deletePlayerDone = () => {
    toast.info(<p>👍 Player delete success.</p>, {
      position: "top-right",
    });
  };

  // Free credit add function
  const [count, setCount] = useState(0);
  const handleFreeCredit = (add) => {
    setCount(count + add);
  };

  // Toggle button function
  const [toggle, setToggle] = useState(true);
  const handleToggleBtn = (command) => {
    if (command === "Available") {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  // Players Data fetch function
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  //   Choose Player function
  const choosePlayer = (player) => {
    if (count < player.biddingPrice) {
      notEnoughMoney();
      return;
    }
    if (selectPlayer.length < 6) {
      setCount(count - player.biddingPrice);
      if (selectPlayer.find((p) => player.playerId === p.playerId)) {
        alreadySelected();
        return;
      }
      // setPlayers(remainingPlayers);
      selectPlayerSuccess();

      selectPly(player);
      return;
    }
    sixPlayerDone();
  };

  // Select player list
  const [selectPlayer, setSelectPlayer] = useState([]);
  const selectPly = (p) => {
    setSelectPlayer((prevPlayers) => [...prevPlayers, p]);
  };

  // Delete Player function
  const deletePlayer = (player) => {
    const remainingPlayers = selectPlayer.filter(
      (p) => player.playerId !== p.playerId
    );
    setSelectPlayer(remainingPlayers);
    setCount(count + player.biddingPrice);
    deletePlayerDone();
  };

  return (
    <div>
      <div className="w-[90%] 2xl:max-w-[1440px] mx-auto relative mb-36 md:mb-56">
        <Header
          handleFreeCredit={handleFreeCredit}
          count={count}
          notify={notify}
        ></Header>
        {/* <LocalStorageExample></LocalStorageExample>
         */}
        <Main
          handleToggleBtn={handleToggleBtn}
          toggle={toggle}
          choosePlayer={choosePlayer}
          players={players}
          selectPlayer={selectPlayer}
          deletePlayer={deletePlayer}
        ></Main>
        <ToastContainer />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
