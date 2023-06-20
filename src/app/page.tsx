import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <p>this is about chapter one</p>
      <Link href="/about">enter the  about page</Link>
    </main>
  )
}
