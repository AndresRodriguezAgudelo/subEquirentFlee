'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/shared/containers/Icons';
import Text from '@/shared/components/Text';
import {
  Container,
  ContainerButton,
  Header,
  IconContainer,
  Title,
  SubTitle,
  SearchContainer,
  SearchInput,
  Input,
  SearchIcon,
  SortContainer,
  SortSelect,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  UserInfo,
  Avatar,
  AvatarImage,
  ActionContainer,
  ActionButton,
  ToggleSwitch,
  ToggleInput,
  ToggleSlider,
  TableContainer,
} from '../UserManagement/styled';
import Button from '@/shared/components/Button';
import { StatusUserModal } from '../Modals/StatusUser/StatusUser';
import { DeleteUserModal } from '../Modals/DeleteUser';

const mockUsers = [
  {
    id: 1,
    name: 'Santiago Andrés Lopera Rodríguez',
    email: 'Nombre@dsadf.com',
    company: 'Coca-Cola',
    nit: '123456789',
    active: false,
  },
  {
    id: 2,
    name: 'Santiago Andrés Lopera Rodríguez',
    email: 'Nombre@dsadf.com',
    company: 'Coca-Cola',
    nit: '123456789',
    active: true,
  },
  {
    id: 3,
    name: 'Santiago Andrés Lopera Rodríguez',
    email: 'Nombre@dsadf.com',
    company: 'Coca-Cola',
    nit: '123456789',
    active: false,
  },
  {
    id: 4,
    name: 'Santiago Andrés Lopera Rodríguez',
    email: 'Nombre@dsadf.com',
    company: 'Coca-Cola',
    nit: '123456789',
    active: true,
  },
  {
    id: 5,
    name: 'Santiago Andrés Lopera Rodríguez',
    email: 'Nombre@dsadf.com',
    company: 'Coca-Cola',
    nit: '123456789',
    active: true,
  },
  {
    id: 6,
    name: 'Santiago Andrés Lopera Rodríguez',
    email: 'Nombre@dsadf.com',
    company: 'Coca-Cola',
    nit: '123456789',
    active: true,
  },
  {
    id: 7,
    name: 'Santiago Andrés Lopera Rodríguez',
    email: 'Nombre@dsadf.com',
    company: 'Coca-Cola',
    nit: '123456789',
    active: true,
  },
  {
    id: 8,
    name: 'Santiago Andrés Lopera Rodríguez',
    email: 'Nombre@dsadf.com',
    company: 'Coca-Cola',
    nit: '123456789',
    active: true,
  },
];

export const CustomersManagement = () => {
  const router = useRouter();
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUserStatus, setSelectedUserStatus] = useState<boolean | null>(
    null
  );
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUserToDelete, setSelectedUserToDelete] = useState<
    number | null
  >(null);

  const closeModal = () => setIsOpen(false);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const handleToggleClick = (userId: number) => {
    const user = users.find((u) => u.id === userId);
    if (user) {
      setSelectedUserStatus(!user.active);
      setIsOpen(true);
    }
  };

  return (
    <Container>
      <Header>
        <IconContainer>
          <Icon icon="user-cog" size={24} />
        </IconContainer>
        <Title>Clientes</Title>
      </Header>

      <SubTitle>Listado de clientes</SubTitle>

      <SearchContainer>
        <SearchInput>
          <Input
            type="text"
            placeholder="Buscar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon>
            <Icon icon="search" size={18} />
          </SearchIcon>
        </SearchInput>
        <SortContainer>
          <SortSelect>
            <option value="">Ordenar por</option>
            <option value="name">Nombre</option>
            <option value="email">Correo</option>
            <option value="company">Empresa</option>
            <option value="nit">NIT</option>
          </SortSelect>
        </SortContainer>
      </SearchContainer>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader style={{ '--width': '25%' } as React.CSSProperties}>
                Nombre
              </TableHeader>
              <TableHeader style={{ '--width': '20%' } as React.CSSProperties}>
                Correo
              </TableHeader>
              <TableHeader style={{ '--width': '15%' } as React.CSSProperties}>
                Empresa
              </TableHeader>
              <TableHeader style={{ '--width': '15%' } as React.CSSProperties}>
                NIT
              </TableHeader>
              <TableHeader
                style={
                  {
                    '--width': '10%',
                    '--textAlign': 'center',
                  } as React.CSSProperties
                }
              >
                Acción
              </TableHeader>
              <TableHeader
                style={
                  {
                    '--width': '10%',
                    '--textAlign': 'center',
                  } as React.CSSProperties
                }
              >
                Estado
              </TableHeader>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell style={{ '--width': '28%' } as React.CSSProperties}>
                  <UserInfo>
                    <Avatar>
                      <AvatarImage
                        src="/images/FotoDePerfilTest.png"
                        alt={user.name}
                      />
                    </Avatar>
                    <Text style={{ width: '208px' }}>{user.name}</Text>
                  </UserInfo>
                </TableCell>
                <TableCell style={{ '--width': '20%' } as React.CSSProperties}>
                  {user.email}
                </TableCell>
                <TableCell style={{ '--width': '15%' } as React.CSSProperties}>
                  {user.company}
                </TableCell>
                <TableCell style={{ '--width': '15%' } as React.CSSProperties}>
                  {user.nit}
                </TableCell>
                <TableCell
                  style={
                    {
                      '--width': '10%',
                      '--textAlign': 'center',
                    } as React.CSSProperties
                  }
                >
                  <ActionContainer>
                    <ActionButton
                      aria-label="Edit user"
                      onClick={() =>
                        router.push(
                          `/admin/customerManagement/updateCustomer/${user.id}`
                        )
                      }
                    >
                      <Icon icon="edit-3" size={18} />
                    </ActionButton>
                    <ActionButton
                      aria-label="Delete user"
                      onClick={() => {
                        setSelectedUserToDelete(user.id);
                        setIsDeleteModalOpen(true);
                      }}
                    >
                      <Icon icon="trash-2" size={18} />
                    </ActionButton>
                  </ActionContainer>
                </TableCell>
                <TableCell
                  style={
                    {
                      '--width': '10%',
                      '--textAlign': 'center',
                    } as React.CSSProperties
                  }
                >
                  <ToggleSwitch onClick={() => handleToggleClick(user.id)}>
                    <ToggleInput
                      type="checkbox"
                      checked={user.active}
                      onChange={() => {}}
                      aria-label={`Toggle active status for ${user.name}`}
                    />
                    <ToggleSlider
                      style={
                        {
                          '--toggle-bg': user.active ? '#FF6B00' : '#E0E0E0',
                          '--toggle-shadow': user.active
                            ? '0 0 2px rgba(255, 107, 0, 0.4)'
                            : 'none',
                          '--toggle-transform': user.active
                            ? 'translateX(26px)'
                            : 'translateX(0)',
                          '--toggle-hover-bg': user.active
                            ? '#FF6B00'
                            : '#CCCCCC',
                        } as React.CSSProperties
                      }
                    />
                  </ToggleSwitch>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>

      <ContainerButton>
        <Button
          type="button"
          color="#51BB51"
          variant="primary"
          style={{ backgroundColor: '#51BB51' }}
          onClick={() => router.push('/admin/customerManagement/createCustomer')}
        >
          <Icon icon="plus" size={18} color="#fff" />
          Crear cliente
        </Button>
      </ContainerButton>
      <StatusUserModal
        isOpen={isOpen}
        onClose={closeModal}
        status={selectedUserStatus ?? false}
      />
      <DeleteUserModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} />
    </Container>
  );
};
