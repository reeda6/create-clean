import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Title: React.FC = () => {
  const router = useRouter();

   return (
    <div className="center">
        <Link href="/">
        <a className="bold">
            Blogr.nxt
        </a>
        </Link>
        <style jsx>{`
        .bold {
            font-weight: bold;
        }

        font-size: 35px;

        a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
        }

        margin: auto;
        width: 50%;
        text-align: center;

        div {
            height: 50px;
            line-height: 50px;
            text-align: center;
            padding-top: 15px;
        }
        
        `}</style>
    </div>
   );
};

export default Title;