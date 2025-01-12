export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col gap-y-4">
            <nav className="bg-black text-white">
                this is a shared navbar for dashboard
            </nav>
                {children}
        </div>
    );
}