import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeContent: 'center' } as React.CSSProperties}>
      <h2 style={{ fontSize: 40 }}>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" style={{ color: '#fefefe' }}>Return Home</Link>
    </div>
  )
}