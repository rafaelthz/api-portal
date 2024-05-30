import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Resources() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="flex flex-col items-center gap-4">
        <Image
          alt="Guia"
          className="rounded-lg"
          height={150}
          src="/guide.svg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={200}
        />
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-lg font-bold">Guia de Início Rápido</h3>
          <p className="text-gray-500">
            Explore as instruções para começar a usar as APIs rapidamente.
          </p>
          <Link className="inline-flex items-center gap-2 text-blue-500 hover:underline" href="#">
            Acessar
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Image
          alt="Autenticacao"
          className="rounded-lg"
          height={150}
          src="/auth.svg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={200}
        />
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-lg font-bold">Métodos de Autenticação</h3>
          <p className="text-gray-500">
            Acesse informações sobre como autenticar suas solicitações.
          </p>
          <Link className="inline-flex items-center gap-2 text-blue-500 hover:underline" href="#">
            Acessar
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Image
          alt="Sandbox"
          className="rounded-lg"
          height={150}
          src="/sandbox.svg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={200}
        />
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-lg font-bold">Sandbox (Área de Teste)</h3>
          <p className="text-gray-500">
            Experimente em um ambiente seguro para testar chamadas de API.
          </p>
          <Link className="inline-flex items-center gap-2 text-blue-500 hover:underline" href="#">
            Acessar
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}