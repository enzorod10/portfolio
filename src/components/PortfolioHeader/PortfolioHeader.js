import Image from 'next/image';

function PortfolioHeader(){

  return(
      <div className='flex items-center h-16 bg-white'>
        <Image src='/assets/logo.png' alt='logo' width={50} height={50} />
      </div>
  )
}

export default PortfolioHeader;