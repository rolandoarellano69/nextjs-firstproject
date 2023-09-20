import Link from 'next/link'

function Navbar() {
  return (
    <nav className='bg-black mb-6 flex items-center justify-between p-4 px-20'>
      <Link href="/">
        Home
      </Link>
      <ul>
        <li>
          <Link href="/about">About </Link>
        </li>
       
      </ul>
    </nav>
  )
}

export default Navbar