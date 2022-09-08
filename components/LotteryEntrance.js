import { useWeb3Contract } from "react-moralis"
import {abi, contractAddresses} from "../constants"
import { useMoralis } from "react-moralis"
import { useEffect, useState } from "react"
import {ethers} from "ethers"
import { useNotification } from "@web3uikit/core"

const LotteryEntrance = () => {
    const dispatch = useNotification()
    
    const {chainId: chainIdHex, isWeb3Enabled} = useMoralis()
    const chainId = parseInt(chainIdHex)
    const lotteryAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
    
    const [entranceFee, setEntranceFee] = useState("0")
    const [numPlayers, setNumplayers] = useState("0")
    const [recentWinner, setRecentWinner] = useState("0")

    const {runContractFunction: enterLottery, isFetching, isLoading} = useWeb3Contract({  
        abi: abi,
        contractAddress: lotteryAddress,
        functionName: "enterLottery",
        params: {},
        msgValue: entranceFee
    }) 
    const {runContractFunction: getEntranceFee} = useWeb3Contract({  
        abi: abi,
        contractAddress: lotteryAddress,
        functionName: "getEntranceFee",
        params: {},
    })
    const {runContractFunction: getNumberOfPlayers} = useWeb3Contract({  
        abi: abi,
        contractAddress: lotteryAddress,
        functionName: "getNumberOfPlayers",
        params: {},
    })

    const {runContractFunction: getRecentWinner} = useWeb3Contract({  
        abi: abi,
        contractAddress: lotteryAddress,
        functionName: "getRecentWinner",
        params: {}
    }) 

    async function updateUI(){
        const entranceFeeFromcall = (await getEntranceFee()).toString()
        const recentWinnerFromcall = (await getRecentWinner()).toString()
        const numPlayersFromCall = (await getNumberOfPlayers()).toString()

        setNumplayers(numPlayersFromCall)
        setRecentWinner(recentWinnerFromcall)
        setEntranceFee(ethers.utils.formatUnits(entranceFeeFromcall, "ether"))
        // {ethers.utils.formatUnits(entranceFee, "ether")}
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])

    const handleSuccess = async function (tx){
        await tx.wait(1)
        handleNotification(tx)
        updateUI()
    }

    const handleNotification = function (){
        dispatch({
            type: "info",
            message: "Transaction success",
            title: "Tx Notification",
            position: "topR",
            icon: "bell"
        })
    }
  return (
    <div className="p-5">
    <h1 className="py-4 px-4 font-bold text-3xl">Hi from lottery entrance!</h1>
    {lotteryAddress ?
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto"
                onClick={async () =>
                            await enterLottery({
                                // onComplete:
                                // onError:
                                onSuccess: handleSuccess,
                                onError: (error) => console.log(error),
                            })
                        }
                        disabled={isLoading || isFetching} 
                // onClick={async() =>  await enterLottery({
                //     onSuccess: handleSuccess,
                //     //oncomplete: handleComplete,
                //     onError: (error) => console.log(error)
                // })
                // }
            >
            {isLoading || isFetching ? (
                            <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"></div>
                        ) : (
                            "Enter lottery"
                        )}
            </button>
            <div>entranceFee: {entranceFee} ETH</div>
            <div>players: {numPlayers}</div>
            <div>recentWinner: {recentWinner}</div>
        </div> : 
        <div>No lotteryAddress detected</div>}
    </div>
  )
}

export default LotteryEntrance