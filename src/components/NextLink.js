import Link from 'next/link';

const NextLink = ({href, children, ...props}) => (
  <Link href={href}>
    <a {...props}>{children}</a>
  </Link>
);

export default NextLink;
