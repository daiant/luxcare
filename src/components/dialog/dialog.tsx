import styles from './dialog.module.css';
import DialogButton from './button/dialogbutton';

export default function DealerDialog(props: { className?: string, visible: boolean }) {
  function handleSubmit(event: any) {
    event.preventDefault(); handleSubmit
    globalThis.location.href = '/contact';
  }
  function requestLocation() {
    const successCallback = (event: any) => { console.log('location is ', event.coords); globalThis.location.href = '/contact' };
    const errorCallback = () => { };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
  return <div className={`${props.className} ${styles.dialog}`} aria-hidden={!props.visible}>
    <form className={styles.form} autoComplete='off' onSubmit={handleSubmit}>
      <header>
        <h1 className={styles.title}>Find a dealer</h1>
        <h2 className={styles.subtitle}>Introduse tu codigo postal y a ver que sale!!</h2>
      </header>
      <label htmlFor="cp">
        <span>City</span>
        <input required type="text" name="cp" id="cp" autoComplete='off' />
      </label>
      <label htmlFor='country'>
        <span>Country</span>
        <input required type="text" name="country" id="country" autoComplete='off' />
      </label>
      <div role='group'>
        <DialogButton icon='/search.svg' type='submit' text='Search'></DialogButton>
        <DialogButton icon='/location.svg' type='button' text='Use my location' variant='secondary' onClick={requestLocation}></DialogButton>
      </div>
    </form>
  </div>
}