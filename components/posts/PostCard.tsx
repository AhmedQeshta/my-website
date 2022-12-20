import { useMemo } from 'react';
import { useTheme } from 'next-themes';
import { IPost } from '../../utils';
import Link from 'next/link';
import Image from 'next/image';

function PostCard({ post }: IPost): JSX.Element {
  const { theme } = useTheme();

  const styleMode = useMemo(
    () => (theme === 'light' ? 'text-gray-100 bg-gray-400' : 'bg-gray-100 text-gray-700'),
    [theme],
  );

  const { id, title, slug, author, caver, datePublished } = post ?? {};
  const { url, width, height } = caver ?? {};
  const { avatar, name } = author ?? {};
  const { urlAuthor, widthAuthor, heightAuthor } = avatar ?? {};
  return (
    <div
      className={`flex rounded-2xl ease-in-out  duration-300 hover:shadow-xl hover:shadow-purple-400 ${styleMode}`}>
      <Link href={`/posts/${slug}`}>
        <div className="rounded-md">
          <Image
            className="rounded-t-2xl h-[20vh] object-cover object-top"
            src={url}
            alt={title}
            width={width}
            height={height}
            priority
          />
        </div>

        <div className="flex flex-col p-4">
          <h2 className="text-xl capitalize pb-3">{title}</h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                className="rounded-full w-10 mr-2"
                src={urlAuthor}
                alt={name}
                width={widthAuthor}
                height={heightAuthor}
              />
              <h3 className="uppercase">{name}</h3>
            </div>
            <div>
              <p>{datePublished}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
