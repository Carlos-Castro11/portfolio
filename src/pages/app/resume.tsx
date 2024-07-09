import { BriefcaseBusiness, GraduationCap } from 'lucide-react'

import { ResumeItem } from '@/components/resume/resume-item'
import { EDUCATION, JOBS } from '@/db'

export function Resume() {
  return (
    <div className="space-y-8">
      <div>
        <ResumeItem
          title="Escolaridade"
          data={EDUCATION}
          icon={<GraduationCap size={40} />}
        />
      </div>
      <div>
        <ResumeItem
          title="Experiência"
          data={JOBS}
          icon={<BriefcaseBusiness size={40} />}
          isJobsItem={true}
        />
      </div>
    </div>
  )
}
