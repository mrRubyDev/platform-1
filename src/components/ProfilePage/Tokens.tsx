import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { RootState } from 'redux/reducers'

export default function Tokens() {
  const address = useSelector((state: RootState) => state.wallet.wallet.address)
  return (
    <div>
      <Button onClick={() => alert(address + " has claimed its tokens.")}>Claim your tokens now!</Button>
    </div>
  )
}
