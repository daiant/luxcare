import Image from 'next/image';
import styles from './gallery.module.css';
import { MouseEvent, useEffect, useRef, useState } from 'react';

export type GalleryImage = {
  src: string;
  content: string;
  action?: any;
}
export default function Gallery(props: { images: GalleryImage[] }) {
  const [didMount, setDidMount] = useState(false);
  const [selected, setSelected] = useState(0);
  const list = useRef<HTMLUListElement>(null);
  const [position, setPosition] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // console.log(position);
    if (!didMount) { setDidMount(true); return };
    if (!list.current) return;

    // if (list.current) {
    const item = list.current.querySelector('[aria-selected="true"]');
    if (!item) return;
    item.scrollIntoView({ behavior: "smooth" });
    // list.current.scrollTo({
    //   left: 650 * selected,
    //   behavior: 'smooth'
    // });

    // }
    console.log('triggering')
  }, [selected]);

  function handleMouseDown(event: MouseEvent) {
    event.preventDefault();
    if (active) { return; }
    setPosition(event.clientX);
    setActive(true);
  }
  function handleMouseMove(event: MouseEvent) {
    if (!list.current || !active) return;
    list.current.scrollLeft = list.current.scrollLeft + position - event.clientX;

    setPosition(event.clientX);
    setSelected(-1);
  }
  function handleMouseEnter(event: MouseEvent) {
    if (active) { setActive(false) }
  }
  function handleMouseUp(event: MouseEvent) {
    setActive(false);
    if (!list.current) return;
    getClosest();
  }
  function getClosest() {
    const offset = list.current!.getBoundingClientRect().x;
    const closest = { x: 999, index: 0 };
    let i = 0;
    for (let child of list.current!.children) {
      const distance = Math.abs(child.getBoundingClientRect().x - offset);
      if (distance < closest.x) {
        closest.x = distance;
        closest.index = i;
      }
      i++;
    }
    setSelected(closest.index);
  }
  function handleNext() { if (selected + 1 >= props.images.length) return; navigate(1); }
  function handlePrev() { if (selected - 1 < 0) return; navigate(-1); }
  function navigate(index: number) { setSelected(selected + index); }

  return <div className={styles.wrapper}>
    <div className={styles.controls} onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseUp={handleMouseUp}>
      <div className={styles.arrow} onClick={handlePrev}></div>
      <ul className={styles.list} ref={list}>
        {props.images.map((image, index) => {
          return <li key={index} className={styles.item}>
            <div className={styles.image} aria-selected={selected === index}>
              <Image src={image.src} width={650} height={416} alt=""></Image>
            </div>
          </li>
        })}
      </ul>
      <div className={styles.arrow} onClick={handleNext}></div>
    </div>
    <div className={styles.indicator}>
      {props.images.map((image, index) => { return <div className={styles.dot} aria-selected={false} key={index}></div> })}
    </div>
    <div className={styles.text}>
      <p>{props.images[1]?.content}</p>
    </div>
  </div>
}