import * as React from 'react';

import 'styles/styles.scss';
import { Status } from '../../../../types/types';

import {
  ErrorPic,
  StyledErrorBlock,
  StyledSuccessBlock,
} from './StatusBlock.styles';

type StatusBlockProps = {
  status: string;
};

const StatusBlock: React.FC<StatusBlockProps> = ({ status }) => {
  if (status === Status.success) {
    return (
      <ErrorPic>
        <StyledSuccessBlock>Номер телефона введен верно</StyledSuccessBlock>
      </ErrorPic>
    );
  }

  if (status === Status.error) {
    return (
      <ErrorPic>
        <StyledErrorBlock>Неправильный номер телефона</StyledErrorBlock>
      </ErrorPic>
    );
  }

  return null;
};

export default React.memo(StatusBlock);
