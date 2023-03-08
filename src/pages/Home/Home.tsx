import React from 'react';
import withError from 'components/Error/withError';
import Layout from 'components/Layout';
import Card from 'components/ui/Card';
import Modal from 'components/ui/Modal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { storeAllNfts, storeCurrentNft } from 'store/nft';

const Home = () => {
  const nfts = useRecoilValue(storeAllNfts);
  const [currentNft, setCurrentNft] = useRecoilState(storeCurrentNft);
  return (
    <Layout withHeader>
      <Modal open={!!currentNft} title={currentNft?.name} onClose={() => setCurrentNft(null)}>
        <Card nft={currentNft} full />
      </Modal>
      <div className='container grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
        {nfts.map((nft) => (
          <Card nft={nft} key={nft.id} />
        ))}
      </div>
    </Layout>
  );
};

export default withError(Home);
