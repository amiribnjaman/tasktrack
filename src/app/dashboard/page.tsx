import type { Metadata } from 'next'

export default function page() {
  return (
    <div>Dashboard</div>
  )
}

export const metadata: Metadata = {
  title: 'Dashboard - TaskTrack',
  description: 'TaskTrack is a task management application',
}