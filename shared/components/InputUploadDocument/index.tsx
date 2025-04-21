'use client';
import { useRef, useState } from 'react';
import Icon from '@/shared/containers/Icons';
import Text from '@/shared/components/Text';
import Tooltip from '../TooltipBox';
import {
  ContainerWrapper,
  LabelContainer,
  Container,
  UploadContainer,
  DeleteButton,
  HiddenInput,
} from './styled';

interface InputUploadDocumentProps {
  onFileSelect?: (file: File | null) => void;
  accept?: string;
  title?: string;
  tooltipData?: string;
}

const InputUploadDocument = ({
  onFileSelect,
  accept = '.pdf,.doc,.docx',
  title,
  tooltipData,
}: InputUploadDocumentProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
    if (onFileSelect) {
      onFileSelect(file || null);
    }
  };

  const handleDelete = () => {
    setSelectedFile(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    if (onFileSelect) {
      onFileSelect(null);
    }
  };

  return (
    <ContainerWrapper>
      {title && (
        <LabelContainer>
          <Text styleName="Content Accent">{title}</Text>
          {tooltipData && <Tooltip data={tooltipData} />}
        </LabelContainer>
      )}
      <Container>
        <UploadContainer onClick={handleClick}>
          <Icon
            icon={selectedFile ? 'check' : 'upload'}
            size={20}
            color={selectedFile ? '#38A169' : '#718096'}
          />
          {selectedFile ? (
            <Text styleName="Body Medium">{selectedFile.name}</Text>
          ) : null}
        </UploadContainer>
        {selectedFile && (
          <DeleteButton onClick={handleDelete}>
            <Icon icon="trash" size={20} />
          </DeleteButton>
        )}
        <HiddenInput
          type="file"
          ref={inputRef}
          onChange={handleFileChange}
          accept={accept}
        />
      </Container>
    </ContainerWrapper>
  );
};

export default InputUploadDocument;
