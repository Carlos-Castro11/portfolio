import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'
import { z } from 'zod'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const contactForm = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
})

type ContactForm = z.infer<typeof contactForm>

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactForm>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function handleSendEmail(data: ContactForm) {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    }
    try {
      await emailjs.send(
        'service_d4zwoyt',
        'template_3h2j3rh',
        templateParams,
        'hPq8qTBzrcSO6AV2B',
      )
      toast.success('E-mail enviado com sucesso!')
      reset()
    } catch {
      toast.error('Ocorreu um erro...')
    }
  }

  return (
    <>
      <Toaster position="top-center" richColors />
      <form
        className="border rounded-md p-3 space-y-2"
        onSubmit={handleSubmit(handleSendEmail)}
      >
        <h3>Contact me!</h3>
        <div className="grid md:grid-cols-2 gap-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              required={true}
              minLength={5}
              className=""
              {...register('name', { required: true, minLength: 5 })}
              id="name"
              type="text"
              placeholder="Type your name..."
            />
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              required={true}
              className=""
              {...register('email', { required: true })}
              id="email"
              type="email"
              placeholder="Type your e-mail..."
            />
          </div>
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            required={true}
            minLength={15}
            {...register('message', { required: true })}
            id="message"
            placeholder="Your message here."
          />
        </div>
        <Button
          className={`${isSubmitting && 'cursor-wait'}`}
          disabled={isSubmitting}
          type="submit"
          variant={isSubmitting ? 'outline' : 'default'}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </Button>
      </form>
    </>
  )
}
