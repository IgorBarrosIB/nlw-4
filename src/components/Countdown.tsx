import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import style from '../styles/components/CountDown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, sethasFinished] = useState(false);

  const minutos = Math.floor(time / 60) ;
  const secods = time %  60;

  const [minuteLeft, minuteRigt]  = String(minutos).padStart(2, '0').split('');
  const [secodsLeft, secodsRigt]  = String(secods).padStart(2, '0').split('');

  function startCountdown(){
    setIsActive(true);
  }

  function resetCountdown(){
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if(isActive && time > 0 ){
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }else if (isActive && time == 0 ){
      sethasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time])

  return (
    <div>
      <div className={style.countdownConateiner}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRigt}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secodsLeft}</span>
          <span>{secodsRigt}</span>
        </div>
      </div>
      {hasFinished ? (
         <button disabled className={style.countdownButton}>Ciclo encerrado</button>
      ) : (
        <>
          {isActive ? (
        <button type="button" className={`${style.countdownButton} ${style.countdownButtonActive}`}  onClick={resetCountdown}>Abandonar ciclo</button>
      ):(
        <button type="button" className={style.countdownButton} onClick={startCountdown}>Iniciar um ciclo</button>
      )}
        </>
      )}

      

      
     
    </div>
  );
}