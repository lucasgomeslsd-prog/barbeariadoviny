export default function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '2rem',
        background: '#080808',
        color: '#e0e0e0',
        fontFamily: 'Inter, sans-serif',
        textAlign: 'center',
      }}
    >
      <section>
        <p
          style={{
            margin: 0,
            color: '#c5a059',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Barbearia do Viny
        </p>
        <h1
          style={{
            margin: '0.75rem 0',
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 600,
          }}
        >
          Sistema em preparação
        </h1>
        <p style={{ margin: 0, color: '#a3a3a3' }}>
          A experiência da Barbearia do Viny estará disponível em breve.
        </p>
      </section>
    </main>
  )
}
