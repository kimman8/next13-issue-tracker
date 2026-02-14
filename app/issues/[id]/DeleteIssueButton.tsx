'use client';

import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';

interface Props {
  issueId: number;
}
const DeleteIssueButton = ({ issueId }: Props) => {
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
            <Button variant="solid" color="red">
              <Link href="/issues">Delete Issue</Link>
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
