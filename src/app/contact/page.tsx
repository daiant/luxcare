import Image from 'next/image';
import styles from './contact.module.css';
import Input from '@/components/form/input/input';
import Textarea from '@/components/form/textarea/textarea';
import Button from '@/components/button/button';
export default function Contact() {
  return <div className={styles.wrapper}>
    <header className={styles.hero}>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quibusdam! Nisi neque, similique odio ratione, distinctio incidunt nemo ullam, nihil beatae eligendi deleniti aut doloremque vitae possimus id nam eveniet.
      </p>
    </header>
    <main className={styles.main}>
      <aside className={styles.aside}>
        <p className='article__title'>Always there for you</p>
        <a className='article__content' href="tel:+44 207 40404 404">+44 207 40404 404</a>
        <a className='article__content' href="mailto:email@email.com">email@email.com</a>
      </aside>
      <form className={styles.form}>
        <p className='article__title' style={{ width: '100%' }}>Get in touch</p>
        <Input label='Name' name='name' type='text' icon='testo'></Input>
        <Input label='Email' name='email' type='email' icon='testo'></Input>
        <Input label='Phone' name='phone' type='tel' icon='testo'></Input>
        <Textarea label='How can we help?' name='subject' />

        <Button handleAction={"/form/submit"} type="submit">Send</Button>
      </form>
    </main>
  </div>
}