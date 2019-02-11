import * as React from 'react'
import { Tags } from './TagsCard'
import { Calendar } from './Calendar'

export const Sidebar = ({ data, pageContext }) => {
  const tags = (data && data.tags && data.tags.group) || []
  const calendar = (data && data.calendar && data.calendar.group) || []

  return (
    <aside>
      <Tags tags={tags} tag={pageContext.tag} />
      <Calendar entries={calendar} />
    </aside>
  )
}
