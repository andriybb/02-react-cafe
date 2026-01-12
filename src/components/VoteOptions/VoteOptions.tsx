import type { VoteType } from '../../types/votes'
import css from './VoteOptions.module.css'

interface VoteOptionsProps {
  onVote: (vote: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

function VoteOptions({onVote, onReset, canReset}:VoteOptionsProps) {

  return (
    <>
<div className={css.container}>
  <button onClick={() => onVote("good")} className={css.button}>Good</button>
  <button onClick={() => onVote("neutral")} className={css.button}>Neutral</button>
  <button onClick={() => onVote("bad")} className={css.button}>Bad</button>
  {canReset ? (
        <button onClick={onReset} className={`${css.button} ${css.reset}`}>Reset</button>
      ) : ( null  )}
  
</div>

    </>
  )
}

export default VoteOptions