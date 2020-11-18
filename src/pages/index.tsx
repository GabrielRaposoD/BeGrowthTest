// MARK: Imports
import { useState } from 'react';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import ReactPaginate from 'react-paginate';
import Image from 'next/image';

// MARK: Icons
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// MARK: Interfaces
import { Photo } from '@lib/types';

// MARK: Components
import PhotoCard from '@components/PhotoCard';

// MARK: Data Fetching
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const initialData: Photo[] = await res.json();

  if (!initialData) {
    return {
      notFound: true,
    };
  }

  const parsedData = initialData.map((e) => {
    return { ...e, isFavorite: false };
  });

  return {
    props: { parsedData },
  };
};

export default function Index({
  parsedData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // MARK: States & Attributes
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [data, setData] = useState<Photo[]>(parsedData);
  const [filter, setFilter] = useState<string>('');
  const PER_PAGE = 18;
  const offset = currentPage * PER_PAGE;
  const currentPageData = data.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(data.length / PER_PAGE);

  // MARK: Functions & Handles
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  function setFavorite(id) {
    const newData = data.map((photo) => {
      if (photo.id === id) photo.isFavorite = !photo.isFavorite;
      return photo;
    });
    setData(newData);
  }

  // MARK: Render
  return (
    <>
      <NextSeo title='Be Growth' description='Teste para a empresa Be Growth' />
      <div className='flex flex-col px-5 my-5'>
        <div className='photos-grid mb-10'>
          {currentPageData
            .filter((e) => {
              if (filter.length > 0) {
                return e.title.toLowerCase().includes(filter.toLowerCase());
              }
              return true;
            })
            .map((photo: Photo, i) => (
              <PhotoCard key={i} photo={photo} setFavorite={setFavorite} />
            ))}
        </div>
        <ReactPaginate
          previousLabel={<FaChevronLeft className='text-2xl' />}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          nextLabel={<FaChevronRight className='text-2xl' />}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={'flex flex-row items-center'}
          activeClassName={'pagination-item-active'}
          pageClassName={
            'pagination-item flex flex-row items-center justify-center truncate'
          }
        />
      </div>
    </>
  );
}
