import Link from "next/link"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function Support() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Suporte</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Entre em contato</h3>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Digite seu nome" type="text" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Digite seu email" type="email" />
            </div>
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea className="min-h-[100px]" id="message" placeholder="Digite sua mensagem para o suporte" />
            </div>
            <Button className="w-full" type="submit">
              Enviar
            </Button>
          </form>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">FAQ</h3>
          <p className="mb-4">Confira nossas perguntas frequentes para problemas e situações comuns.</p>
          <Link className="text-blue-500 hover:underline" href="#">
            Acessar FAQ
          </Link>
        </div>
      </div>
    </>
  )
}