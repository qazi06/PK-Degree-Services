import type React from "react"
import { AppSidebar } from "./components/app-sidebar"
import { ChartAreaInteractive } from "./components/chart-area-interactive"
import { DataTable } from "./components/data-table"
import { SectionCards } from "./components/section-cards"
import { SiteHeader } from "./components/site-header"
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar"
import data from "./app/dashboard/data.json"
import "./App.css"

function App() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 100)",
          "--header-height": "calc(var(--spacing) * 18)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-col gap-2 ">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-6  w-1440px">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App