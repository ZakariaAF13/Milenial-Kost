import { Link, useLocation } from 'react-router-dom'

const BottomNav = () => {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path

  return (
    <div id="BottomNav" className="relative flex w-full h-[138px] shrink-0">
      <nav className="fixed bottom-5 w-full max-w-[640px] px-5 z-10">
        <div className="grid grid-cols-4 h-fit rounded-[40px] justify-between py-4 px-5 bg-ngekos-black">
          <Link to="/" className="flex flex-col items-center text-center gap-2">
            <img
              src={`/assets/images/icons/global${isActive('/') ? '-green' : ''}.svg`}
              className="w-8 h-8 flex shrink-0"
              alt="icon"
            />
            <span className="font-semibold text-sm text-white">Discover</span>
          </Link>
          <Link to="/orders" className="flex flex-col items-center text-center gap-2">
            <img
              src={`/assets/images/icons/note-favorite${isActive('/orders') ? '-green' : ''}.svg`}
              className="w-8 h-8 flex shrink-0"
              alt="icon"
            />
            <span className="font-semibold text-sm text-white">Orders</span>
          </Link>
          <Link to="/find" className="flex flex-col items-center text-center gap-2">
            <img
              src={`/assets/images/icons/search-status${isActive('/find') ? '-green' : ''}.svg`}
              className="w-8 h-8 flex shrink-0"
              alt="icon"
            />
            <span className="font-semibold text-sm text-white">Find</span>
          </Link>
          <Link to="#" className="flex flex-col items-center text-center gap-2">
            <img
              src={`/assets/images/icons/24-support${isActive('/help') ? '-green' : ''}.svg`}
              className="w-8 h-8 flex shrink-0"
              alt="icon"
            />
            <span className="font-semibold text-sm text-white">Help</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default BottomNav
