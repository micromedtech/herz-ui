/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Uploader, { UploaderProps } from './Uploader';

export default {
  title: 'Design System/Uploader',
  component: Uploader,
} as Meta;

const DefaultTemplate: Story<UploaderProps> = (props) => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <Uploader {...props} files={files} onChange={(files) => setFiles(files)}>
      <span
        sx={{
          color: '#777',
        }}
      >
        Drag & drop or{' '}
        <span
          sx={{
            color: 'secondary',
          }}
        >
          browse
        </span>{' '}
        the activation file you received by e-mail here
      </span>
    </Uploader>
  );
};

export const Default = DefaultTemplate.bind({});

Default.args = {
  multiple: true,
  showFiles: true,
};
