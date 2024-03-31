import ErrorPage from '@components/pages/Error';
import { Button } from '@mantine/core';
import Link from 'next/link';
import { Route } from '@config';

function NotFoundPage() {
  return (
    <ErrorPage
      code={404}
      title="You have found a secret place."
      description="Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL."
      button={
        <Button variant="outline" component={Link} href={Route.Home} size="md">
          Take me back to home page
        </Button>
      }
    />
  );
}

export default NotFoundPage;
