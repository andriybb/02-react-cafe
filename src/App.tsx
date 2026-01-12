import { useState } from 'react'
import type { Votes} from './types/votes'
import type { VoteType } from './types/votes'
import CafeInfo from './components/CafeInfo/CafeInfo'
import VoteOptions from './components/VoteOptions/VoteOptions'
import VoteStats from './components/VoteStats/VoteStats'
import css from './App.module.css'
import Notification from './components/Notification/Notification'

function App() {
const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  const handleVote = (voteType: VoteType): void => {
    setVotes((prevVotes) => ({
      ...prevVotes, 
      [voteType]: prevVotes[voteType] + 1 
    }));
  };


  const resetVotes = (): void => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };  
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100): 0;


  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions 
        onVote={handleVote}    
        onReset={resetVotes}  
        canReset={totalVotes>0} 
      />
      {totalVotes > 0 ? (
        <VoteStats 
          votes={votes} 
          totalVotes={totalVotes} 
          positiveRate={positiveRate} 
        />
      ) : (
        <Notification />
      )}
      
      </div>
      
    </>
  )
}

export default App
