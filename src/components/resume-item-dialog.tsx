import { Link } from 'react-router-dom'

import useMedia from '@/hooks/useMedia'

import {
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Table, TableBody, TableCell, TableRow } from './ui/table'

interface ResumeItemDialogProps {
  title: string
  duration: string
  entity: string
  status: 'completed' | 'inProgress'
  officialLink: string
  workType: string
}

export function ResumeItemDialog({
  duration,
  entity,
  status,
  title,
  officialLink,
  workType,
}: ResumeItemDialogProps) {
  const isMobile = useMedia('(max-width: 500px)')
  return (
    <DialogContent className={`${isMobile && 'max-w-[400px]'} rounded-md`}>
      <DialogClose></DialogClose>
      <DialogHeader className="">
        <DialogTitle className="uppercase">{title}</DialogTitle>
      </DialogHeader>
      <Table>
        <TableBody>
          <TableRow className="p-1">
            <TableCell className="">Site oficial</TableCell>
            <TableCell className="flex justify-end">
              <Link
                className="bg-secondary rounded-md px-3"
                to={officialLink}
                target="_blank"
              >
                Visitar
              </Link>
            </TableCell>
          </TableRow>
          <TableRow className="p-1">
            <TableCell className="">Entidade</TableCell>
            <TableCell className="flex justify-end">{entity}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Duração</TableCell>
            <TableCell className="flex justify-end">{duration}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tipo</TableCell>
            <TableCell className="flex justify-end">{workType}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell className="flex justify-end">
              <span
                className={`relative 
                    after:content-[''] after:absolute after:-left-4 after:top-[30%] after:h-2 after:w-2
                    ${status === 'completed' ? 'after:bg-emerald-500' : 'after:bg-amber-500'}
                    after:rounded-full
                `}
              >
                {status === 'completed' ? 'Concluído' : 'Em andamento'}
              </span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </DialogContent>
  )
}
