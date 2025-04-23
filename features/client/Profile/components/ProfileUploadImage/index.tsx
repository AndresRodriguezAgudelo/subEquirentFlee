'use client';

import React, { useRef, useState } from 'react';
import { ImageUploadCircle, ProfileImage, UploadButton } from './styled';
import Icon from '@/shared/containers/Icons';
import Modal from '@/shared/components/Modal';
import Text from '@/shared/components/Text';

interface ProfileImageUploaderProps {
  image: string | null;
  onChange: (imageDataUrl: string) => void;
}

const ProfileImageUploader: React.FC<ProfileImageUploaderProps> = ({
  image,
  onChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result as string);
        setIsModalOpen(false); // Close modal after upload
      };
      reader.readAsDataURL(file);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <ImageUploadCircle>
        {image ? (
          <ProfileImage src={image} alt="Profile" />
        ) : (
          <Icon size={122} icon="user" color="#fff" />
        )}
        <UploadButton onClick={openModal}>
          <Icon size={24} icon="upload" color="#fff" />
        </UploadButton>
      </ImageUploadCircle>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        button1="Cancelar"
        button2="Aceptar"
        button1Style={true}
        button2Style={false}
        onButton1Click={closeModal}
        onButton2Click={triggerFileInput}
      >
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <Text style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', textAlign: 'start' }}>
            Imagen de perfil
          </Text>
          <Text style={{ textAlign: 'start' }}>
            Sube una imagen desde tu computador
          </Text>
          <Text style={{ width: '460px', fontSize: '14px', color: '#666', marginBottom: '24px', textAlign: 'start' }}>
            El peso de la imagen no puede superar las 10 mb y los formatos permitidos son jpg, png y jpeg
          </Text>
          
          <div style={{ 
            width: '200px', 
            height: '200px', 
            borderRadius: '50%', 
            backgroundColor: '#E1E1E1', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            margin: '0 auto 24px'
          }}>
            <Icon size={80} icon="upload" color="#fff" />
          </div>
          
          <input
            type="file"
            accept="image/jpeg,image/png,image/jpg"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleImageUpload}
          />
        </div>
      </Modal>
    </>
  );
};

export default ProfileImageUploader;
