import styled from 'styled-components'
import { Form, FormGroup, Input } from 'reactstrap'
import { useState } from 'react';

interface StakingProps {
  availableBalance: string;
}

export default function Staking({ availableBalance }: StakingProps) {
  const [isStake, setIsStake] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const [amount, setAmount] = useState("")

  const handleChangeTab = (isStake: boolean) => {
    setAmount("");
    setIsStake(isStake)
  }
  return (
    <Container>
      <Form>
        <div style={{ display: 'flex', marginBottom: '2rem' }}>
          <Tab isSelected={isStake} onClick={() => handleChangeTab(true)}>
            <TabBadge>Stake</TabBadge>
          </Tab>
          <Tab isSelected={!isStake} onClick={() => handleChangeTab(false)}>
            <TabBadge>Unstake</TabBadge>
          </Tab>
        </div>
        <FormGroup>
          <Label color='secondary'>
            Amount
          </Label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input
              placeholder={'0.00'}
              value={amount!!}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={{ border: isFocused ? '0.5px solid #4824fa' : '', width: '20rem', fontSize: '1rem' }}
              onChange={e => setAmount(e.target.value)}
            />
            <MaxButton
              isActive={availableBalance !== amount} 
              onClick={() => setAmount(availableBalance)}>MAX</MaxButton>
            </div>
            <p style={{ alignSelf: 'flex-end' }}>Available funds: <span style={{ fontWeight: 400 }}>{parseFloat(Number(availableBalance).toFixed(8))}</span></p>
            <Button
              disabled={(Number(amount) <= Number(availableBalance)) && amount.length > 0 && Number(amount) > 0}
            >
              {isStake ? "STAKE" : "UNSTAKE"}
            </Button>
        </FormGroup>
      </Form>
    </Container>
  )
}

const Tab = styled.div<{isSelected: boolean}>`
  width: 5rem;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid;
  border-color: ${props => props.isSelected ? 'white' : ''};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 1rem;
  background-color: ${props => props.isSelected ? '#131435' : ''};
  &:hover {
    transform: scale(0.98);
    transition: background-color 0.5s;
    background-color: #4824fa;
  }
`;

const TabBadge = styled.h4`
  color: #fff;
  margin: 0;
  padding: 0;
`

const Container = styled.div`
  width: 50vw;
  height: 100%;
  @media (max-width: 768px) {
    width: 90vw;
  }
`

const Label = styled.h6`
  color: #fff;
`

const MaxButton = styled.div<{isActive: boolean}>`
  background: ${props => props.isActive ? "transparent" : "#e6e6e6"};
  color: ${props => props.isActive ? "white" : "black"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  height: '100%';
  border: 0.1px solid lightgrey;
  border-radius: 3px;
  &:hover {
    transform: ${props => props.isActive ? 'scale(0.98)' : ''};
    background-color: ${props => props.isActive ? '#131435' : ''};
    transition: background-color 0.1s;
    cursor: ${props => props.isActive ? 'pointer' : 'default'};
  }
`

const Button = styled.div<{disabled: boolean}>`
  height: 2rem;
  width: fit-content;
  background: ${props => props.disabled ? "transparent" : "#131435"};
  color: ${props => props.disabled ? "white" : "grey"};
  font-size: 1em;
  margin-top: 1rem;
  padding: 0.25em 1em;
  height: '100%';
  border: ${props => props.disabled ? '0.1px solid lightgrey' : 'none'};
  border-radius: 3px;
  &:hover {
    transform: ${props => props.disabled ? 'scale(0.98)' : ''};
    background-color: ${props => props.disabled ? '#4824fa' : ''};
    transition: background-color 0.4s;
    cursor: ${props => props.disabled ? 'pointer' : 'default'};
  }
`