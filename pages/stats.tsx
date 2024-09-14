import Rsvps from "@/components/stats/Rsvps"
import Attended from "@/components/stats/Attended"
import ConversionRate from "@/components/stats/ConversionRate"
import NavBar from "@/components/Navbar"
import AttendanceChart from "@/components/stats/AttendanceChart"
import MostActive from "@/components/stats/MostActive"
import NewMembers from "@/components/stats/NewMembers"

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image."

export function Statistics() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <NavBar />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Rsvps />
          <Attended />
          <ConversionRate />
          <NewMembers />
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-4">
          <AttendanceChart />
          <MostActive />
        </div>
      </main>
    </div>
  )
}

export default Statistics;