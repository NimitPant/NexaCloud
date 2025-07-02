import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { getCurrentUser } from '@/lib/actions/user.actions'

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getCurrentUser();

  return (
    <main className="root">
      <Sidebar user={user} />
      <MobileNav user={user} />

      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout