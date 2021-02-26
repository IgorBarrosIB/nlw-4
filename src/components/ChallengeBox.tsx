import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

  const {activeChallenge, resetChallenge} = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxConatainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp </header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button className={styles.challengeFailedButton} onClick={resetChallenge} type="button">Falhei</button>
            <button className={styles.challengeSucceededButton} type="button">Completei</button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="level up" />
          Avance de level competando desafios
        </p>
          </div>
        )}
    </div>
  )
}