import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-sm py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          {/* Copyright */}
          <p className="text-amber-200 text-sm">
            © {new Date().getFullYear()} Harry Potter House Quiz
          </p>
          
          {/* Links */}
          <div className="flex justify-center space-x-4 text-sm">
            <Link 
              href="/disclaimer" 
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              Disclaimer
            </Link>
            <span className="text-amber-200">•</span>
            <Link 
              href="/privacy-policy" 
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 