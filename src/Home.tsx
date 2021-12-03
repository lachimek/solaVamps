import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";
import { MintProps } from "./Components/MintSection/MintSection";

const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ConnectButton = styled(WalletDialogButton)`
  color: #D13030;
  font-family: 'BitBap';
  background: #0B0B1B;
  :hover {
    background: #191937;
  }
  font-size: 36px;
  text-transform: lowercase;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const CounterText = styled.span`
  color: #D13030;
`; // add your styles here

const MintContainer = styled.div`
  
`; // add your styles here

const PreMintInfo = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;

`;

const MintInfo = styled.div`
  color: #D13030;
  font-size: 24px;
`;

const MintButton = styled(Button)`
  color: #D13030;
  font-family: 'BitBap';
  background: #0B0B1B;
  :hover {
    background: #191937;
  }
  font-size: 36px;
  text-transform: lowercase;
  margin-top: 10px;
  padding: 0 40px 0 40px;
`; // add your styles here


const MintBtn = (props: MintProps) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(true); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  // const [itemsAvailable, setItemsAvailable] = useState(0);
  // const [itemsRedeemed, setItemsRedeemed] = useState(0);
  // const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsRemaining,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      // setItemsAvailable(itemsAvailable);
      // setItemsRemaining(itemsRemaining);
      // setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);

      console.log(goLiveDate);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

  const mintData = props.siteData.homepageContent.mintSection;

  return (
    <ContainerMain>
      {wallet && (
        <MintInfo>WALLET: {shortenAddress(wallet.publicKey.toBase58() || "")}</MintInfo>
      )}

      {wallet && <MintInfo>BALANCE: {(balance || 0).toLocaleString()} SOL</MintInfo>}

      {/*{wallet && <MintInfo>Total Available: {itemsAvailable}</MintInfo>}
       {<MintInfo>Wallet: d120...d12ac</MintInfo>}

      {<MintInfo>Balance: 4,240 SOL</MintInfo>}

      {<MintInfo>Total Available: 10</MintInfo>}

      {<MintInfo>Redeemed: 1</MintInfo>}

      {<MintInfo>Remaining: 9</MintInfo>} */}

      <MintContainer>
        {!wallet ? (
            <ConnectButton>connect wallet</ConnectButton>
        ) : (
          <MintButton
            disabled={isSoldOut || isMinting || !isActive}
            onClick={onMint}
            variant="contained"
          >
            {isSoldOut ? (
              "SOLD OUT"
            ) : isActive ? (
              isMinting ? (
                <CircularProgress />
              ) : (
                "MINT"
              )
            ) : (
              <Countdown
                date={startDate}
                onMount={({ completed }) => completed && setIsActive(false)}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
              />
            )}
          </MintButton>
        )}
      </MintContainer>
      <PreMintInfo>
        <div>
          <div>Supply: {mintData.supply}</div>
          <div>200 in presale</div>
        </div>
        <div>
          <div>Mint price: {mintData.mintPrice} SOL</div>
          <div>plus Solana fees</div>
        </div>
      </PreMintInfo>
      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </ContainerMain>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  let formattedHours = hours < 10 ? "0"+hours : hours;
  let formattedMinutes = minutes < 10 ? "0"+minutes : minutes;
  let formattedSeconds = seconds < 10 ? "0"+seconds : seconds;
  return (
    <CounterText>
      {formattedHours}:{formattedMinutes}:{formattedSeconds}
    </CounterText>
  );
};

export default MintBtn;
