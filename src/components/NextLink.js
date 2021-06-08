import Link from 'next/link';
import {forwardRef, useImperativeHandle} from 'react';

const NextLink = forwardRef((props, ref) => {
  const {href, children, ...rest} = props;

  const someFunction = () => {};
  useImperativeHandle(ref, () => ({
    someFunction,
  }));

  return (
    <div>
      <Link href={href}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    </div>
  );
});

export default NextLink;
