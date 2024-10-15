import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../public/images/men-animate.jpeg';

export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        className='rounded-full mx-auto'
        src={profileImage}
        alt='Picture of the author'
        width={250}
        height={250}
        priority
      />
      <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm Turob"}</h2>
      <h3 className='text-xl font-semibold'>Full-stack Developer</h3>
      <p>꿈을 코딩하는 사람</p>
      <Link href='/contact'>
        <button className='bg-rose-300 font-bold rounded-xl py-1 px-4 mt-2 hover:bg-sky-700 '>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
