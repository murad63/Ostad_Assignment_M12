export default function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="bg-cyan-900 text-white text-center p-4">
        <h2>Copyright@Ostad-{year}</h2>
      </footer>
    )
  }