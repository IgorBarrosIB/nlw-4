
import { useContext } from 'react';
import { CountdowContext } from '../context/CountdownContext';
import style from '../styles/components/CountDown.module.css';

export function Countdown() {

  const { secods, minutes, isActive, hasFinished, resetCountdown, startCountdown } = useContext(CountdowContext);

  const [minuteLeft, minuteRigt] = String(minutes).padStart(2, '0').split('');
  const [secodsLeft, secodsRigt] = String(secods).padStart(2, '0').split('');

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
              <button type="button" className={`${style.countdownButton} ${style.countdownButtonActive}`} onClick={resetCountdown}>Abandonar ciclo</button>
            ) : (
                <button type="button" className={style.countdownButton} onClick={startCountdown}>Iniciar um ciclo</button>
              )}
          </>
        )}

    </div>
  );
}