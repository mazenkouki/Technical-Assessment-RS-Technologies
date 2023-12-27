import Image from 'next/image'
import PatientCard from './components/PatientCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10 pb-10 pl-5 pr-5 gap-5 dark:bg-neutral-900">
         <div>
     <PatientCard/>
    </div>
    </main>
  )
}
