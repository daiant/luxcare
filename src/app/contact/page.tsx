import Image from 'next/image';
import styles from './contact.module.css';
export default function Contact() {
  return <>
    <header className={styles.hero}>
      <h1 className={styles.title}>Contact us</h1>
      <Image src={'/test.jpg'} alt='' fill className={styles.image}></Image>
    </header>
    <main className={styles.main}>
      <aside className={styles.aside}>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quibusdam! Nisi neque, similique odio ratione, distinctio incidunt nemo ullam, nihil beatae eligendi deleniti aut doloremque vitae possimus id nam eveniet.
        </p>
      </aside>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Name
          <input className={styles.input} type="text" id='name' />
        </label>
        <label className={styles.label} htmlFor="email">
          Email
          <input className={styles.input} type="email" id='email' />
        </label>
        <label className={styles.label} htmlFor="phone">
          Phone
          <input className={styles.input} type="tel" id='phone' />
        </label>
        <label className={styles.label} htmlFor="subject">
          Subject
          <input className={styles.input} type="text" id='subject' />
        </label>
        <label className={styles.label} htmlFor="body">
          Body
          <textarea className={styles.input} name="body" id="body" rows={10}></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </main>
  </>
}