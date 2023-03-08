import React from 'react';
import cx from 'classnames';
import { useSetRecoilState } from 'recoil';
import { storeCurrentNft } from 'store/nft';
import { NFT } from 'types';

interface Props {
  nft: NFT;
  full?: boolean;
}

export default function Card({ nft, full = false }: Props) {
  const setCurrentNft = useSetRecoilState(storeCurrentNft);
  return (
    <div
      onClick={() => setCurrentNft(nft)}
      className={cx('bg-[#023047] border-[#0F4C75] rounded-2xl p-4 cursor-pointer hover:bg-[#0F4C75] relative', {
        ['bg-transparent hover:bg-transparent']: full,
      })}
    >
      {!full && (
        <div className='card-corner'>
          <img src='/assets/tr-arrow.svg' alt='etn' />
        </div>
      )}
      <div>
        <img src={nft.img} alt={nft.name} />
      </div>
      <div className='p-4 border-b border-slate-500'>
        <h3 className='text-2xl font-semibold mt-2 capitalize'>{nft.name}</h3>
        <div className='flex justify-between'>
          <div className='flex text-[#F7AC3D] items-center'>
            <div>
              <img src='/assets/eth.svg' alt='etn' />
            </div>
            <span className='ml-2 uppercase text-sm'>
              {nft.price} {nft.unit}
            </span>
          </div>
          <span className='text-slate-200'>Fav: {nft.fav}</span>
        </div>
        {full && <p className='mt-4 mb-2 text-sm'>{nft.description}</p>}
      </div>
      <div className='flex justify-between mt-4 text-sm'>
        <div className='rounded-full border px-3'>3 Month</div>
        <a
          onClick={(e) => e.stopPropagation()}
          href={nft.storeLink}
          target='_blank'
          className='text-[#F7AC3D] hover:underline'
        >
          Place A Bid
        </a>
      </div>
    </div>
  );
}
