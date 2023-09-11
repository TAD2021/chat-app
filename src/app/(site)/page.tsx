import Image from 'next/image'

export default function Home() {
  return (
    <div
        className='
        flex flex-col items-center justify-center
        min-h-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'
    >
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image
                alt='Logo'
                height='48'
                width='48'
                className='mx-auto w-auto'
                src='/images/logo.png'
            />
        </div>
    </div>
  )
}
