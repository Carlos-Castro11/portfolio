import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { ResumeItem } from '@/components/resume/resume-item'
import { EDUCATION, JOBS } from '@/db'

export function Resume() {
  return (
    <div className="space-y-8 xl:space-y-0 xl:flex xl:gap-10">
      <Helmet title="Resume" />
      <div>
        <ResumeItem
          title="Education"
          data={EDUCATION}
          icon={<GraduationCap size={40} />}
        />
      </div>
      <div>
        <ResumeItem
          title="Experience"
          data={JOBS}
          icon={<BriefcaseBusiness size={40} />}
          isJobsItem={true}
        />
      </div>
    </div>
  )
}
