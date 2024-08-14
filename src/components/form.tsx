import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'
import { z } from 'zod'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const contactForm = z.object({
  subject: z.string(),
  email: z.string(),
})

type ContactForm = z.infer<typeof contactForm>

export function Form() {
  const { register, handleSubmit } = useForm<ContactForm>({
    defaultValues: {
      subject: '',
      email: '',
    },
  })

  async function handleSendEmail(data: ContactForm) {
    try {
      toast.success('E-mail enviado com sucesso!')
    } catch {
      toast.error('Ocorreu um erro...')
    }
  }

  return (
    <>
      <Toaster position="top-center" richColors />
      <form
        className="border rounded-md p-3 space-y-3"
        onSubmit={handleSubmit(handleSendEmail)}
      >
        <h3>Formulário para contato</h3>
        <div>
          <Label htmlFor="subject">Assunto</Label>
          <Input
            {...register('subject')}
            id="subject"
            type="text"
            placeholder="Ex: Orçamento, Oferta, Indicação..."
          />
        </div>
        <div>
          <Label htmlFor="email">E-mail</Label>
          <Textarea
            {...register('email')}
            id="email"
            placeholder="A sua mensagem aqui."
          />
        </div>
        <Button type="submit">Enviar</Button>
      </form>
    </>
  )
}
