import Link from 'next/link'


 
export const MainHeader = () => {
  return (
    <header className="bg-gradient-to-r   from-red-700  to-gray-800 ">
    <Link href="/" className="font-bold text-4xl">
      Syuri Takeda
    </Link>
    <div className="flex justify-end gap-4">
      <div className="flex justify-start">
        <div className="text-white">
          <Link href="/" className="font-semibold">
            TOPへ←
          </Link>
        </div>
      </div>
    </div>
  </header>
)
}

export default MainHeader