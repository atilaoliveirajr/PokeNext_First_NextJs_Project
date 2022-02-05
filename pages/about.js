
import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About the Project</h1>
      <p>
        This project is for study purposes only. It was created with Nextjs and it calls the APIs at: https://pokeapi.co/docs/v2 and https://github.com/Sturlen/pokedex-pwa/wiki/API-Information.
      </p>
      <p>
          Below you will find the best Pokemon ever.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  )
}
