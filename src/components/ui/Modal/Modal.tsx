import React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  open: boolean;
}

export default function Modal({ children, title, onClose, open }: Props) {
  if (!open) {
    return null;
  }

  return (
    <div className='fixed z-40 top-0 left-0 bottom-0 right-0 flex justify-center items-center'>
      <div className='fixed top-0 left-0 bottom-0 right-0 opacity-70 z-40 bg-slate-900' onClick={onClose} />
      <div className='w-[56rem] modal relative z-50'>
        <div className='py-4 px-6 border-b border-slate-100 flex justify-between'>
          <h3 className='capitalize text-2xl'>{title}</h3>
          <img src='/assets/x.svg' alt='close' onClick={onClose} className='cursor-pointer' />
        </div>
        <div className='mt-2 p-4'>{children}</div>
      </div>
    </div>
  );
}
