'use client';
import React from 'react';
import Input, { InputProps } from '../input/input';
import styles from './autocomplete.module.css';

export default function InputAutocomplete(props: InputProps & { onSelect?: (value: string) => void }) {
  const [loading, setLoading] = React.useState(false);
  const [timeoutId, setTimeoutId] = React.useState<unknown>();
  const [location, setLocation] = React.useState<string>('');
  const [places, setPlaces] = React.useState<unknown[]>([]);
  function handleChange(event: React.ChangeEvent) {
    setLocation((event.target as HTMLInputElement).value);
    clearTimeout(timeoutId as number);
    setTimeoutId(
      setTimeout(
        () => handleAutoComplete(
          (event.target as HTMLInputElement).value
        ), 500)
    );
  }
  function handleSelect(name: string) {
    setLocation(name);
    props.onSelect ? props.onSelect(name) : undefined;
    setPlaces([]);
  }
  async function handleAutoComplete(value: string) {
    if (!value) { setPlaces([]); return };
    setLoading(true);
    const query = encodeURI(value);
    const url = `https://api.locationiq.com/v1/autocomplete?key=${'pk.5331a7d9813c46644de96b60404c0e3b'}&q=${query}&limit=5&dedupe=1`;
    const response = await fetch(url).then(r => r.json()).catch((error) => {
      console.warn(error);
      setPlaces([]);
    });
    if (!response.error) { setPlaces(response); };
    setLoading(false);
  }
  function getGeolocation() {
    navigator.geolocation.getCurrentPosition(
      (value) => handleSelect(value.coords.latitude + "," + value.coords.longitude),
      (error) => console.warn(error),
    );
  }
  return <div className={styles.wrapper}>
    <div className={styles.input}>
      <Input required={props.required} label={props.label} name={props.name} type={props.type} icon={loading ? '/icons/loader-circle.svg' : props.icon} onChange={handleChange} value={location} loading={loading}></Input>
      <p onClick={getGeolocation} className={styles.geo} role='button'>
        <img src="/icons/location.svg" alt="" />
        <span>Usar mi ubicación actual</span></p>
    </div>
    <ul className={styles.list} aria-hidden={places.length <= 0}>
      {(places as { place_id: string, display_name: string }[] | undefined)?.map(place => <li key={place.place_id} onClick={() => handleSelect(place.display_name)}>{place.display_name}</li>)}
    </ul>
  </div >
}