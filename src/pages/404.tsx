import Link from 'next/link';
import { memo } from 'react';
import { NextPage } from 'next';
import Route from '@config/routes';
import dynamic from 'next/dynamic';
import { Button } from '@mantine/core';
import HomeLayout from '@components/layout/Home';

const ErrorPage = dynamic(() => import('@components/pages/Error'));

const NotFoundPage: NextPage = () => (
  <HomeLayout>
    <ErrorPage
      code={404}
      title="You have found a secret place."
      description="Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL."
      button={
        <Button variant="outline" component={Link} href={Route.home} size="md">
          Take me back to home page
        </Button>
      }
    />
  </HomeLayout>
);

export default memo(NotFoundPage);
