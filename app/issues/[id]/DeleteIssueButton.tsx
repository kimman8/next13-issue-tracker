import { Button } from '@radix-ui/themes';
import Link from 'next/link';

interface Props {
  issueId: number;
}
const DeleteIssueButton = ({ issueId }: Props) => {
  return (
    <Button color="red">
      <Link href="/issues">Delete Issue</Link>
    </Button>
  );
};

export default DeleteIssueButton;
