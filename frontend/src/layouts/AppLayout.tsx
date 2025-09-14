import type { PropsWithChildren } from 'react'

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full">
        <div
          id="Content-Container"
          className="relative flex flex-col w-full min-h-screen bg-white overflow-x-hidden pb-[138px]"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default AppLayout