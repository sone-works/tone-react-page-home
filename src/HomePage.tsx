'use client'

import { Page } from '@sone-dao/tone-react-core-ui'
import styles from './HomePage.module.scss'

interface IHomePageProps {}

export default function HomePage({}: IHomePageProps) {
  return (
    <Page className={styles.component}>
      <p>
        <span>tone</span> is an artist and listener owned music listening
        service. We're building it out right now, help us decide what an
        equitable music marketplace looks like.
      </p>
      <ul>
        <li>
          <a href="https://discord.gg/mxFhn3kQjR">
            <i className="fa-brands fa-discord" />
          </a>
        </li>
        <li>
          <a href="https://github.com/sone-dao">
            <i className="fa-brands fa-github" />
          </a>
        </li>
      </ul>
    </Page>
  )
}
