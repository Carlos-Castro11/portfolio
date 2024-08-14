import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

export function Form() {
  return (
    <>
      <form className="border rounded-md p-3 space-y-3">
        <h3>Formulário para contato</h3>
        <div>
          <Label htmlFor="subject">Assunto</Label>
          <Input
            id="subject"
            type="text"
            placeholder="Ex: Orçamento, Oferta, Indicação..."
          />
        </div>
        <div>
          <Label htmlFor="email">E-mail</Label>
          <Textarea id="email" placeholder="A sua mensagem aqui." />
        </div>
        <Button type="submit">Enviar</Button>
      </form>
    </>
  )
}
