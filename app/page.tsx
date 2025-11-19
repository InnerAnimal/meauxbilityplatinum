export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-6xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            🦁 Meauxbility Platform
          </h1>
          <p 
            className="text-xl mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Your unified platform for mobility grants and programs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div 
              className="rounded-xl p-6"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 
                className="text-xl font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Grants
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Access mobility grants and programs
              </p>
            </div>
            <div 
              className="rounded-xl p-6"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 
                className="text-xl font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Community
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Connect with others in the community
              </p>
            </div>
            <div 
              className="rounded-xl p-6"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 
                className="text-xl font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Resources
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Explore helpful resources and tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

