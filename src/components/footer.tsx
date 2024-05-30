import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-6 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0">© 2024 API Portal</p>
        <div className="flex items-center gap-6">
          <Link className="hover:underline" href="#">
            Termos de Uso
          </Link>
          <Link className="hover:underline" href="#">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}