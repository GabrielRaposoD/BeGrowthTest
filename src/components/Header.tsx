// MARK: Imports
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

export default function Header({
  setFilter,
  setFavoriteOnly,
  favoriteOnly,
  filter,
}) {
  // MARK: Render
  return (
    <div className=' z-50 flex flex-col w-full'>
      <div className='header-bg w-full h-2' />
      <div className='flex flex-row items-center justify-between px-5 bg-white shadow-md'>
        <Image
          src='/logo.png'
          alt='Picture of the author'
          width={50}
          height={50}
          objectFit='cover'
        />
        <div className='flex flex-row items-center mr-3'>
          <input
            type='text'
            id='filter'
            name='filter'
            className='filter-input my-5 mr-3'
            value={filter}
            onChange={(e) => setFilter(e.target.value.trim())}
          />
          <FaSearch />
        </div>
        <div className='flex flex-row items-center'>
          <label className='mr-3 text-sm'>Favorite Only</label>
          <input
            type='checkbox'
            value={favoriteOnly}
            onChange={(e) => setFavoriteOnly(!favoriteOnly)}
          />
        </div>
      </div>
    </div>
  );
}
