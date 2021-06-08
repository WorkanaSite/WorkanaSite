import Link from 'next/link';

const NextLink = ({href, children}) => (
  <Link href={href}>
    <a>{children}</a>
  </Link>
);

export default NextLink;
