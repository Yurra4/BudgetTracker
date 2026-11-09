import Sidebar from '../components/layout/Sidebar.jsx'

function MainLayout({children}) {
    return (
        <div className='main__layout'>
            
            <Sidebar />

            <main className='main__layout-content'>
                {children}
            </main>

        </div>
    );
}

export default MainLayout;