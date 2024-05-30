import Link from "next/link"
import { Computer } from "lucide-react"
import { ScriptProps } from "next/script"
import { Badge } from "./ui/badge";

interface HeaderProps {
  admin: boolean;
}

export function Header({ admin }: HeaderProps) {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 md:px-10 flex items-center justify-between">
      <Link className="flex items-center gap-2" href="#">
        <Computer size={16} />
        <span className="text-lg font-medium">API Portal</span>
        {admin && <Badge className="px-2 py-1 text-xs" variant="secondary">Admin</Badge>}
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link className="hover:underline" href="/portal">
          Documentações
        </Link>
        <Link className="hover:underline" href="#">
          Suporte
        </Link>
        <Link className="hover:underline" href="#">
          Sandbox
        </Link>
        <Link className="hover:underline" href="#">
          {admin ? <span>Sair</span> : <span>Login</span>}
        </Link>
      </nav>
    </header>
  )
}