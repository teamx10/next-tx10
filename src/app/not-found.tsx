export default function NotFound() {
  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: '#121212',
        color: '#9e9e9e',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        justifyContent: 'center',
        minHeight: '100vh'
      }}
    >
      <p style={{ fontSize: '1.25rem' }}>Page not found</p>
      <p style={{ color: '#757575', fontSize: '0.875rem' }}>404</p>
    </div>
  );
}
