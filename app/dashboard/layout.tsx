export default function DashboardLayout({children}: {children: React.ReactNode}){
    return (
        <div className="grid grid-cols-[250px_1fr]">
            <div>Side Panel</div>
            <div>
                Main Content Area
                {children}
            </div>
        </div>
    )
}