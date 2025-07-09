import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '@/constants'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'
import { getCurrentUser } from '@/lib/actions/user.actions'

const Header = async () => {
  const user = await getCurrentUser();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
      {/* <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} /> */}
      </Link>

      <nav className="navbar">
        {user ? (
          <>
            <ul className="navbar-links">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.route}>
                  <Link href={link.route} className="navbar-link">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li key="/profile">
                <Link href="/profile" className="navbar-link">
                  Profile
                </Link>
              </li>
            </ul>

            <div className="flex-center gap-4">
              <Button asChild className="button bg-red-gradient bg-cover">
                <Link href="/api/auth/logout">Logout</Link>
              </Button>
            </div>
          </>
        ) : (
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        )}
        
        <div className="md:hidden">
          <MobileNav user={user} />
        </div>
      </nav>
    </header>
  )
}

export default Header