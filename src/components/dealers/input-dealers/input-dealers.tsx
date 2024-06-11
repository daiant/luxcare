
'use client';
import React from 'react';
import styles from './input-dealers.module.css';
import { API_KEY } from '@/lib/autocomplete-location';
import { APIProvider, useMapsLibrary } from '@vis.gl/react-google-maps';

export default function InputDealers({ onSearch }: { onSearch: Function }) {
  return <APIProvider
    apiKey={API_KEY}
    solutionChannel='GMP_devsite_samples_v3_rgmautocomplete'>
    <main className={styles.main}>
      <PlaceAutocomplete onPlaceSelect={function (place: google.maps.places.PlaceResult | null): void {
        onSearch(place)
      }} />
    </main></APIProvider>

}
interface PlaceAutocompleteProps {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

const PlaceAutocomplete = ({ onPlaceSelect }: PlaceAutocompleteProps) => {
  const [placeAutocomplete, setPlaceAutocomplete] =
    React.useState<google.maps.places.Autocomplete | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const places = useMapsLibrary('places');

  React.useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ['name', 'formatted_address'],
    };

    const auto = new places.Autocomplete(inputRef.current, options)
    auto.setComponentRestrictions({ country: 'es' });
    setPlaceAutocomplete(auto);
  }, [places]);

  React.useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener('place_changed', () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });
  }, [onPlaceSelect, placeAutocomplete]);

  return (
    <div className="autocomplete-container">
      <input ref={inputRef} style={{ width: '100%' }} />
    </div>
  );
};