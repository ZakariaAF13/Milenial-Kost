import { PropsWithChildren } from 'react'

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div
      id="Content-Container"
      className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-white overflow-x-hidden"
    >
      {children}
    </div>
  )
}

export default AppLayout
