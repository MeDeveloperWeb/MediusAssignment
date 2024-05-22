'use client';

import Link from 'next/link';
import menu from '@/assets/menu.svg';
import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

export default function NavLink() {
  const modalRef = useRef(null);
  const path = usePathname();
  console.log(path);

  const navList = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Our Services',
      path: '/services'
    },
    {
      name: 'About Us',
      path: '/about'
    },
    {
      name: 'Contact Us',
      path: '/contact'
    }
  ];

  return (
    <nav>
      <ul className="hidden md:flex h-full justify-evenly gap-8">
        {navList.map((item) => (
          <li
            key={item.name + 'lg'}
            className={
              item.path === path ? 'pointer-events-none text-slate-600' : ''
            }
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <button
          onClick={() => {
            if (modalRef.current.hasAttribute('open')) modalRef.current.close();
            else modalRef.current.show();
          }}
        >
          <Image src={menu} alt="menu" width={24} height={24} />
        </button>
      </div>
      <dialog
        ref={modalRef}
        onClick={() => modalRef.current.close()}
        className="mr-4 mt-4 card rounded-sm"
      >
        <ul className="flex flex-col">
          {navList.map((item) => (
            <li key={item.name + 'sm'}>
              <Link
                href={item.path}
                className={`py-2 px-8 w-full block ${
                  item.path === path
                    ? 'pointer-events-none text-slate-600'
                    : 'hover:bg-slate-700 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </dialog>
    </nav>
  );
}
