import DashboardLayoutContainer from "./(Layout)/DashboardLayoutContainer";

export default function DashboardLayout({ children }) {
    return (
      <div className="dashboardBody min-h-[100vh]">
        <DashboardLayoutContainer />
        {children}
      </div>
    );
}