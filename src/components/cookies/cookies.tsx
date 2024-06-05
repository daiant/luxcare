'use client';

import React from 'react';

export default function Cookies() {
  const [cookies, setCookies] = React.useState(false);
  React.useEffect(() => {
    setCookies(globalThis.localStorage.getItem('cookies-accept') != 'true');
  }, []);
  if (!cookies) {
    return <></>
  }
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'var(--black)',
    color: 'var(--white)',
    fontSize: 18,
    lineHeight: '22px',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    minHeight: 32,
    paddingInline: 'var(--padding)',
    paddingBlock: 8,
    flexWrap: 'wrap'
  }}>
    <p>Este sitio web usa cookies para asegurarte la mejor experiencia de compra.</p>
    <a href="/legal/cookies" style={{
      color: 'unset',
      whiteSpace: 'nowrap'
    }}>Saber más</a>
    <button
      style={{
        border: 'none',
        outline: 'none',
        backgroundColor: 'var(--white)',
        color: 'var(--black)',
        fontSize: 18,
        marginInlineStart: 'auto',
        paddingInline: '16px',
        cursor: 'pointer'
      }}
      onClick={() => { setCookies(false); globalThis.localStorage.setItem('cookies-accept', 'true') }}
    >Entendido</button>
  </div>
}