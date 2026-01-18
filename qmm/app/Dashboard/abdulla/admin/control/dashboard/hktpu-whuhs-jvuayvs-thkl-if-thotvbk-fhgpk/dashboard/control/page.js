"use client";
import DashboardShell from "./components/DashboardShell.js";
import TopBar from "./components/TopBar.js";
import StatsGrid from "./components/StatsGrid.js";
import CourseManager from "./components/CourseManager.js";
import CoachManager from "./components/CoachManager.js";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <TopBar />

      <div className="mt-6 space-y-6">

        {/* Main “middle” content: all on one page, no sidebar */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <CourseManager />
          <CoachManager />
        </div>
      </div>
    </DashboardShell>
  );
}
