import { useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'
import { Button } from 'reactstrap'
import SMART_CONTRACT_FUNCTIONS, { ERC20Options } from 'smartContract'

export default function Tokens() {
  const [supply, setSupply] = useState("")
  const [userBalance, setUserBalance] = useState("")
  const { account, Moralis } = useMoralis();

  useEffect(() => {
    const getTotalSupply = async () => {
        const options = ERC20Options(account!!, SMART_CONTRACT_FUNCTIONS.TOTAL_SUPPLY);
        const supply = await Moralis.executeFunction(options);
        setSupply(supply.toString())
    }
    const getBalance = async () => {
      const options = ERC20Options(account!!, SMART_CONTRACT_FUNCTIONS.GET_BALANCE, { account });
      const balance = await Moralis.executeFunction(options);
      setUserBalance(balance.toString())
    }

    if (account !== null){
      getTotalSupply();
      getBalance();
    }
  }, [account, Moralis])

  return (
    <div>
      <p style={{ alignSelf: 'flex-end' }}>Available tokens: <span style={{ fontWeight: 400 }}>{userBalance}</span></p>
      <p style={{ alignSelf: 'flex-end' }}>Current token supply: <span style={{ fontWeight: 400 }}>{supply}</span></p>
      <Button onClick={() => alert(account + " has claimed its tokens.")}>Claim your tokens now!</Button>
    </div>
  )
}
