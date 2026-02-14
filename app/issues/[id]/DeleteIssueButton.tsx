'use client';

import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
interface Props {
  issueId: number;
}
const DeleteIssueButton = ({ issueId }: Props) => {
  const router = useRouter();

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Delete Issue</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Delete Issue</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure?
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              variant="solid"
              color="red"
              onClick={async () => {
                await axios.delete('/api/issues/' + issueId, {});
                router.push('/issues');
                router.refresh();
              }}
            >
              <Link href="/issues">Delete Issue</Link>
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
