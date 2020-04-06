import Link from 'next/link';

const NavBarLink = ({ title, href }) => {
  return (
    <li>
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

export default NavBarLink;